export declare type HTTPMethod = "get" | "post" | "patch" | "put" | "delete";
export declare type ContentType = "json" | "formData";
export declare type RequestOption = {
    requiredAuth: boolean;
    baseURL: string;
    method: HTTPMethod;
    path: string;
};
declare class BaseRequest<TInput, TPayload, TUrlParams extends Record<string, unknown> | undefined, TQParams extends Record<string, unknown> | undefined> {
    requireAuth: boolean;
    method: HTTPMethod;
    baseURL: string;
    path: string;
    readonly contentType: ContentType;
    constructor({ requiredAuth, method, baseURL, path }: RequestOption);
    call(variables?: {
        id?: string;
        params?: TInput;
        urlParams?: TUrlParams;
        qParams?: TQParams;
    }): Promise<TPayload>;
    private get apiClient();
    private configurePath;
    private getContentType;
}
export default BaseRequest;
//# sourceMappingURL=baseRequest.d.ts.map