interface LngLatItem {
    lat: number
    lng: number
}
type LngLatFunc = (lat: number, lng: number) => LngLatItem
type LngLatBool = (x: number, y: number) => boolean
type LngOrLatNum = (x: number, y: number) => number
interface ConvertorTranslate {
    transformLat: LngOrLatNum
    transformLng: LngOrLatNum
    delta: LngLatFunc
    gps84_To_Gcj02: LngLatFunc
    gcj02_To_Bd09: LngLatFunc
    bd09_To_Gcj02: LngLatFunc
    gcj02_to_gps84: LngLatFunc
    gps84_To_Bd09: LngLatFunc
    bd09_To_Gps84: LngLatFunc
    outOfChina: LngLatBool
}
const PI = Math.PI;
const X_PI = Math.PI * 3000.0 / 180.0;

const transformLat: LngOrLatNum = (x, y) => {
    let ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));
    ret += (20.0 * Math.sin(6.0 * x * PI) + 20.0 * Math.sin(2.0 * x * PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(y * PI) + 40.0 * Math.sin(y / 3.0 * PI)) * 2.0 / 3.0;
    ret += (160.0 * Math.sin(y / 12.0 * PI) + 320 * Math.sin(y * PI / 30.0)) * 2.0 / 3.0;
    return ret;
};
const transformLng: LngOrLatNum = (x, y) => {
    let ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));
    ret += (20.0 * Math.sin(6.0 * x * PI) + 20.0 * Math.sin(2.0 * x * PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(x * PI) + 40.0 * Math.sin(x / 3.0 * PI)) * 2.0 / 3.0;
    ret += (150.0 * Math.sin(x / 12.0 * PI) + 300.0 * Math.sin(x / 30.0 * PI)) * 2.0 / 3.0;
    return ret;
};
const outOfChina: LngLatBool = (lat, lng) => {
    if (lng < 72.004 || lng > 137.8347) return true;
    return lat < 0.8293 || lat > 55.8271;
};

const delta: LngLatFunc = (lat, lng) => {
    const a = 6378245.0; //  a: 卫星椭球坐标投影到平面地图坐标系的投影因子。
    const ee = 0.00669342162296594323; //  ee: 椭球的偏心率。
    let dLat = transformLat(lng - 105.0, lat - 35.0);
    let dLng = transformLng(lng - 105.0, lat - 35.0);
    const radLat = lat / 180.0 * PI;
    let magic = Math.sin(radLat);
    magic = 1 - ee * magic * magic;
    const sqrtMagic = Math.sqrt(magic);
    dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * PI);
    dLng = (dLng * 180.0) / (a / sqrtMagic * Math.cos(radLat) * PI);
    return {lat: dLat, lng: dLng};
};

//84 to 火星坐标系 (GCJ-02)
const gps84_To_Gcj02: LngLatFunc = (lat, lng) => {
    if (outOfChina(lat, lng)) return {lat, lng};
    const d = delta(lat, lng);
    return {lat: lat + d.lat, lng: lng + d.lng};
};
//火星坐标系 (GCJ-02) to 百度坐标系 (BD-09)
const gcj02_To_Bd09: LngLatFunc = (lat, lng) => {
    let x = lng;
    let y = lat;
    let z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * X_PI);
    let theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * X_PI);
    let lngs = z * Math.cos(theta) + 0.0065;
    let lats = z * Math.sin(theta) + 0.006;
    return {lat: lats, lng: lngs};
};

//百度坐标系 (BD-09) to 火星坐标系 (GCJ-02)
const bd09_To_Gcj02: LngLatFunc = (lat, lng) => {
    let x = lng - 0.0065;
    let y = lat - 0.006;
    let z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * X_PI);
    let theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * X_PI);
    let lngs = z * Math.cos(theta);
    let lats = z * Math.sin(theta);

    return {lat: lats, lng: lngs};
};

const gcj02_to_gps84: LngLatFunc = (_lat, _lng) => {
    let lat = +_lat;
    let lng = +_lng;
    const a = 6378245.0;
    const ee = 0.00669342162296594323;
    if (outOfChina(lat, lng)) return { lat, lng };
    let dlat = transformLat(lng - 105.0, lat - 35.0);
    let dlng = transformLng(lng - 105.0, lat - 35.0);
    const radlat = lat / 180.0 * PI;
    let magic = Math.sin(radlat);
    magic = 1 - ee * magic * magic;
    const sqrtmagic = Math.sqrt(magic);
    dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI);
    dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI);
    const mglat = lat + dlat;
    const mglng = lng + dlng;
    return { lat: lat * 2 - mglat, lng: lng * 2 - mglng };
};
// gps转百度坐标
const gps84_To_Bd09: LngLatFunc = (lat, lng) => {
    let point = gps84_To_Gcj02(lat, lng);
    return gcj02_To_Bd09(point.lat, point.lng);
};
// 百度转gps坐标
const bd09_To_Gps84: LngLatFunc = (lat, lng) => {
    let point = bd09_To_Gcj02(lat, lng);
    return gcj02_to_gps84(point.lat, point.lng);
};

const convertorTranslate: ConvertorTranslate = {
    transformLat,
    transformLng,
    outOfChina,
    delta,
    gps84_To_Gcj02,
    gcj02_To_Bd09,
    bd09_To_Gcj02,
    gcj02_to_gps84,
    gps84_To_Bd09,
    bd09_To_Gps84
};

export default convertorTranslate;
