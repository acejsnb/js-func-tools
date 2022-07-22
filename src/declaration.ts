// @ts-ignore
export interface AnyType {
    // @ts-ignore
    [key: string | number]: any
}
export interface TreeItem extends AnyType {
    id?: string | number
    name?: string
    children?: TreeItem[]
}
// @ts-ignore
export type DebounceFn = (options?: {[key: string]: any}) => void

export type FormValidateRule = {
    message: string
    check?: 'required' | 'phone' | 'email' | 'password' | 'passwordBetter' | 'passwordBest'
    validate?: (value: string, confirmValue?: string) => boolean
}
export type FormValidateOptions = {
    rules: FormValidateRule[]
    value: string
    success?: (value?: string) => void
    fail?: (value?: string, message?: string) => void
    confirmValue?: string
}

// @ts-ignore
declare module 'js-func-tools' {
    export function AddZero(n: string | number, len?: number): string
    export function ArrayDeWeight(arr: AnyType[], by?: string): AnyType[]
    export function ArrayToTree(arr: TreeItem[], parentId?: string | number): TreeItem[]
    export function Average(arr: number[], dec: number): number
    export var Base64: { encode(str: string): string, decode(str: string): string };
    export function BottomVisible(ele?: HTMLElement): boolean
    export function ByteSize(str: string): number
    export function Capitalise(str: string): string
    export function CheckColor16(str: string): boolean
    export function CheckCreditCode(str: string): boolean
    export function CheckEmail(str: string): boolean
    export function CheckIDCard(str: string): boolean
    export function CheckObjType(obj: any, type: string): boolean
    export function CheckPassword(str: string): boolean
    export function CheckPasswordBetter(str: string): boolean
    export function CheckPasswordBest(str: string): boolean
    export function CheckPhoneNumber(str: string): boolean
    export function CheckPlateNumber(str: string): boolean
    export function CheckPostcode(str: string): boolean
    export function CheckUrl(str: string): boolean
    export function HasClassName(el: HTMLElement, className: string): boolean
    export function AddClassName(el: HTMLElement, className: string): void
    export function RemoveClassName(el: HTMLElement, className: string): void
    export function CloneDeep(arr: TreeItem[]): TreeItem[]
    export function CloneDeepComplex(arr: TreeItem[], cache: any): TreeItem[]
    export function CopyToBoard(str: string): boolean
    export function CutRadixPoint(fn: (options?: {[key: string]: any}) => void, delay?: number): (options?: {[key: string]: any}) => void
    export function Debounce(fn: DebounceFn, delay?: number): DebounceFn
    export function DownloadByUrl(url: string | Blob, name?: string): boolean
    export function DayOfYear(dateStr: string): number
    export function DaysBetween(a: string | number | Date, b: string | number | Date): number
    export function DayOfWeek(dateStr: string): number
    export function WeekOfYear(dateStr: string): number
    export function FormatDate(fmt?: string, dateStr?: string | Date): string
    export function GetCurrentDay(fmt?: string, dateStr?: string | Date): string
    export function GetPrevDay(fmt?: string, dateStr?: string | Date): string
    export function GetNextDay(fmt?: string, dateStr?: string | Date): string
    export function GetTime(fmt: 'h' | 'hm' | 'hms', date: string | Date | null | undefined): string
    export function GetDays(year?: string | number, month?: string | number): number
    export function GetCurrentWeek(type?: 0 | 1, date?: string): string[]
    export function GetPrevWeek(type?: 0 | 1, date?: string): string[]
    export function GetNextWeek(type?: 0 | 1, date?: string): string[]
    export function GetCurrentMonth(date?: string): string[]
    export function GetPrevMonth(date?: string): string[]
    export function GetNextMonth(date?: string): string[]
    export function GetYMDByYear(options: { year?: string | number, month?: string | number }): string[] | { month: string, children: string[] }[]
    export function HasKeyByObj(obj: any, key: string): boolean
    export function FilterTreeByFunc(tree: TreeItem[], func: (item: TreeItem) => boolean): TreeItem[]
    export function FindTarget(target: HTMLElement, tagList: string[]): HTMLElement
    export function FormatMoney(money: string | number): string
    export function FormValidate(options: FormValidateOptions): boolean
    export function GetAllLeaf(tree: TreeItem[], first?: boolean): TreeItem[]
    export function GetFormData(object: AnyType): FormData
    export function GetItemByData(data: TreeItem[], key: string | number, value: string | number): TreeItem
    export function GetNodePath(tree: TreeItem[], id: string | number, byIndex?: boolean): Array<string | number>
    export function GetObjType(obj: any, type?: string): string | boolean
    export function GetPlaceByTrigger(options: { trigger: HTMLElement, dom: HTMLElement, offset?: number, isRight?: boolean }): { left: number, top: number, isDown: boolean }
    export function GetTextWidth(text: string, options?: { size?: number, family?: string  }): number
    export function GetUrlParams(name: string, origin?: string | null): string | null
    export function Hex2Rgb(hex: string): string
    export function IsNullObj(obj: AnyType): boolean
    export function IsObjValEqual(obj1: AnyType, obj2: AnyType, empty: boolean): boolean
    export function IsWeekday(date: string | Date): boolean
    export function LargeNumbersAddition(a: string | number, b: string | number): string
    export function MatchesByValue(value: string, search: string, jointStart: string, jointEnd: string, more?: { split?: boolean, caseEn?: boolean }): string
    export function Obj2Url(obj: AnyType, url?: string): string
    export function RandomHexColor(): void
    export function RemoveAttrByParam(tree: TreeItem[], param: string): TreeItem[]
    export function RemoveEmpty(data: AnyType): AnyType
    export function RemoveEmptyChildren(tree: TreeItem[]): TreeItem[]
    export function RemoveHtmlTag(str: string): string
    export function Rgb2Hex(str: string): string
    export function Round(n: string | number, dec?: number): string
    export function ScrollToTop(id: string): void
    export function ScrollToPlace(params: { key?: 'scrollLeft' | 'scrollTop', tag?: HTMLElement, place?: number }): void
    export function SensitiveEscape(s: string): string
    export function SetParamsByIndex(indArr: Array<string | number>, data: TreeItem[], param: string, value: any): TreeItem[]
    export function SortHandle(data: string[] | number[] | { [key: string]: string | number }[], other?: { sortord?: 'asc' | 'des', type?: 'number' | 'string' | 'date', key?: string }): string[] | number[] | { [key: string]: string | number }[]
    export function Throttle(fn: DebounceFn, delay?: number): DebounceFn
    export function TextEllipsis(e: MouseEvent, tag?: string): void
    export function TreeToArray(tree: TreeItem[], parentId?: number | string): TreeItem[]
    export function Uuid(length?: number, chars?: string): string
    export function Xsync(options: { url: string, method?: string, headers?: Headers, params?: AnyType }): Promise<{ status?: number, data?: AnyType } | { message?: string }>
}
