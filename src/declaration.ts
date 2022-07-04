// @ts-ignore

export interface AnyType {
    // @ts-ignore
    [key: string]: any
}
export interface ITree extends AnyType {
    id?: string | number
    name?: string
    children?: ITree[]
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
    export function addZero(n: string | number, len?: number): string
    export function arrayDeWeight(arr: AnyType[], by?: string): AnyType[]
    export function arrayToTree(arr: ITree[], parentId?: string | number): ITree[]
    export function average(arr: number[]): number
    export var base64: { encode(str: string): string, decode(str: string): string };
    export function bottomVisible(ele?: HTMLElement): boolean
    export function byteSize(str: string): number
    export function capitalise(str: string): string
    export function checkColor16(str: string): boolean
    export function checkCreditCode(str: string): boolean
    export function checkEmail(str: string): boolean
    export function checkIDCard(str: string): boolean
    export function checkObjType(obj: any, type: string): boolean
    export function checkPassword(str: string): boolean
    export function checkPasswordBetter(str: string): boolean
    export function checkPasswordBest(str: string): boolean
    export function checkPhoneNumber(str: string): boolean
    export function checkPlateNumber(str: string): boolean
    export function checkPostcode(str: string): boolean
    export function checkUrl(str: string): boolean
    export function hasClassName(el: HTMLElement, className: string): boolean
    export function addClassName(el: HTMLElement, className: string): void
    export function removeClassName(el: HTMLElement, className: string): void
    export function cloneDeep(arr: ITree[]): ITree[]
    export function cloneDeepComplex(arr: ITree[], cache: any): ITree[]
    export function copyToBoard(str: string): boolean
    export function cutRadixPoint(fn: (options?: {[key: string]: any}) => void, delay?: number): (options?: {[key: string]: any}) => void
    export function debounce(fn: DebounceFn, delay?: number): DebounceFn
    export function downloadByUrl(url: string | Blob, name?: string): boolean
    export function dayOfYear(dateStr: string): number
    export function dayOfWeek(dateStr: string): number
    export function weekOfYear(dateStr: string): number
    export function formatDate(fmt?: string, dateStr?: string | Date): string
    export function getPrevDay(fmt?: string, dateStr?: string | Date): string
    export function getNextDay(fmt?: string, dateStr?: string | Date): string
    export function getTime(fmt: 'h' | 'hm' | 'hms', date: string | Date | null | undefined): string
    export function getDays(year?: string | number, month?: string | number): number
    export function getCurrentWeek(type?: 0 | 1, date?: string): string[]
    export function getPrevWeek(type?: 0 | 1, date?: string): string[]
    export function getNextWeek(type?: 0 | 1, date?: string): string[]
    export function getCurrentMonth(date?: string): string[]
    export function getPrevMonth(date?: string): string[]
    export function getNextMonth(date?: string): string[]
    export function getYMDByYear(options: { year?: string | number, month?: string | number }): string[] | { month: string, children: string[] }[]
    export function hasKeyByObj(obj: any, key: string): boolean
    export function filterTreeByFunc(tree: ITree[], func: (item: ITree) => boolean): ITree[]
    export function findTarget(target: HTMLElement, tagList: string[]): HTMLElement
    export function formatMoney(money: string | number): string
    export function formValidate(options: FormValidateOptions): boolean
    export function getAllLeaf(tree: ITree[], first?: boolean): ITree[]
    export function getFormData(object: AnyType): FormData
    export function getNodePath(tree: ITree[], id: string | number, byIndex?: boolean): Array<string | number>
    export function getObjType(obj: any, type?: string): string | boolean
    export function getPlaceByTrigger(options: { trigger: HTMLElement, dom: HTMLElement, offset?: number, isRight?: boolean }): { left: number, top: number, isDown: boolean }
    export function getTextWidth(text: string, options?: { size?: number, family?: string  }): number
    export function getUrlParam(name: string, origin?: string | null): string | null
    export function hex2Rgb(hex: string): string
    export function isNullObj(obj: AnyType): boolean
    export function isObjValEqual(obj1: AnyType, obj2: AnyType): boolean
    export function isWeekday(date: string | Date): boolean
    export function largeNumbersAddition(a: string | number, b: string | number): string
    export function matchesByValue(value: string, search: string, jointStart: string, jointEnd: string): string
    export function randomHexColor(): void
    export function removeAttrByParam(tree: ITree[], param: string): ITree[]
    export function removeEmptyChildren(tree: ITree[]): ITree[]
    export function removeHtmlTag(str: string): string
    export function rgb2Hex(str: string): string
    export function round(n: string | number, dec?: number): string
    export function scrollToTop(id: string): void
    export function scrollToPlace(params: { key?: 'scrollLeft' | 'scrollTop', tag?: HTMLElement, place?: number }): void
    export function sensitiveEscape(s: string): string
    export function sortHandle(data: string[] | number[] | { [key: string]: string | number }[], other?: { sortord?: 'asc' | 'des', type?: 'number' | 'string' | 'date', key?: string }): string[] | number[] | { [key: string]: string | number }[]
    export function throttle(fn: DebounceFn, delay?: number): DebounceFn
    export function textEllipsis(e: MouseEvent, tag?: string): void
    export function treeToArray(tree: ITree[], parentId?: number | string): ITree[]
    export function uuid(length?: number, chars?: string): string
}
