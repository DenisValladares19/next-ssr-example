export interface ResponseApi<T extends Object> {
    code: string;
    message: string;
    result: T;
}
