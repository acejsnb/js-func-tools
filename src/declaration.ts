interface AnyType {
    // @ts-ignore
    [key: string]: any
}
interface ITree extends AnyType {
    id?: string | number
    name?: string
    children?: ITree[]
}

declare module 'js-func-tools' {
    export function addZero(n: string | number, len?: number): string
    export function arrayDeWeight(arr: AnyType[], by: string): AnyType[]
    export function arrayToTree(arr: ITree[], parentId?: string | number): ITree[]
    export function average(arr: number[]): number
    export function bottomVisible(): void
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
    export function cloneDeepComplex(arr: ITree[]): ITree[]
    export function copyToBoard(str: string): boolean
    export function cutRadixPoint(number: string | number, length?: number): number
    export function downloadByUrl(url: string): boolean
    export function dayOfYear(dateStr: string): number
    export function dayOfWeek(dateStr: string): number
    export function weekOfYear(dateStr: string): number
    export function formatDate(fmt: string, dateStr?: string): string
    export function getTime(date: string | Date, fmt: 'h' | 'hm' | 'hms'): string
    export function getDays(year?: string | number, month?: string | number): number
    export function getYMDByYear(options: { year?: string | number, month?: string | number }): string[] | { month: string, children: string[] }[]
    export function filterTreeByFunc(tree: ITree[], func: (item: ITree) => boolean): ITree[]
    export function findTarget(target: HTMLElement, tagList: string[]): HTMLElement
    export namespace formatMoney {
        function formatMoney(money: string | number): string
    }
    export function formValidate(options: {
        rules: Array<{
            message: string
            check?: 'required' | 'phone' | 'email' | 'password' | 'passwordBetter' | 'passwordBest'
            validate?: (value: string, confirmValue?: string) => boolean
        }> | []
        value: string
        success?: (value?: string) => void
        fail?: (value?: string, message?: string) => void
        confirmValue?: string
    }): boolean
    export function getAllLeaf(tree: ITree[], first?: boolean): ITree[]
    export function getFormData(object: AnyType): FormData
    export function getNodePath(tree: ITree[], id: string | number, byIndex?: boolean): Array<string | number>
    export function getObjType(obj: any): string
    export function getPlaceByTrigger(options: { trigger: HTMLElement, dom: HTMLElement, offset?: number, isRight?: boolean }): { left: number, top: number, isDown: boolean }
    export function getUrlParam(name: string, origin?: string | null): string | null
    export function hex2Rgb(hex: string): string
    export function isNullObj(obj: AnyType): boolean
    export function isWeekday(date: string | Date): boolean
    export function matchesByValue(value: string, search: string, jointStart: string, jointEnd: string): string
    export function removeAttrByParam(tree: ITree[], param: string): ITree[]
    export function removeEmptyChildren(tree: ITree[]): ITree[]
    export function removeHtmlTag(str: string): string
    export function rgb2Hex(str: string): string
    export function round(n: string | number, dec?: number): string
    export function scrollToTop(): void
    export function sensitiveEscape(s: string): string
    export function treeToArray(tree: ITree[], parentId?: number | string): ITree[]
    export function uuid(length?: number, chars?: string): string
}
