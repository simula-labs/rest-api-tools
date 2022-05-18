export declare class ClientError extends Error {
}
export declare class NetworkError extends Error {
    status: number;
    constructor(status: number, message?: string);
}
//# sourceMappingURL=error.d.ts.map