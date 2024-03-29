import obj2Url from '../obj2Url';
/**
 * fetch请求数据封装
 * @param options
 * @contentType - 请求头
 * @method - 请求方法 ['GET', 'POST', 'PUT]
 * @url - 地址
 * @params - 数据
 * @token - token验证
 *
 * 例：
 * xsync({
        method: 'GET',
        url: './lib/test.json',
        params: {id: 123},
        token: 'token-token'
    }).then(res => {
        console.log('then:', res);
    }).catch(err => {
        console.log('catch:', err);
    });
 */
interface AnyType {
    [key: string | number]: any
}
interface Headers {
    'Content-Type'?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'application/json' | 'application/xml' | 'text/xml' | string
    token?: string
    [key: string | number]: any
}
interface SendRequestOptions {
    url: string
    method?: string
    headers?: Headers
    params?: AnyType
    type?: 'json' | 'text' | 'arrayBuffer' | 'blob' | 'formData'
}

type Init = {
    method?: string
    headers?: Headers
    body?: string
    signal?: AbortSignal | null | undefined
}

interface Response {
    status: number
    data: AnyType
    message: string
}

type Xsync = <T>(options: SendRequestOptions, cancelLastTime?: boolean) => Promise<Response | T>

let abortController : AbortController;
const xsync: Xsync = async ({
    url = '',
    method = 'GET',
    headers = { 'Content-Type': 'application/json' },
    params = {},
    type = 'json'
}, cancelLastTime = false) => {
    try {
        // 取消上一次请求
        cancelLastTime && abortController?.abort();
        abortController = new AbortController();
        const init: Init = { method, headers, signal: abortController.signal };
        let reqUrl = url;
        if (method.toUpperCase() === 'GET') {
            reqUrl = obj2Url(params, url);
        } else {
            init.body = JSON.stringify(params);
        }
        const response = await fetch(reqUrl, init);
        const { status, statusText } = response;
        let data;
        try {
            data = await response[type]();
        } catch (e) {
            if (status === 200) data = null;
            else data = e;
        }
        return { status, data, message: statusText };
    } catch (e) {
        console.error('request failed!', e);
        return { status: 0, data: null, message: 'request failed!' };
    }
};

export default xsync;
