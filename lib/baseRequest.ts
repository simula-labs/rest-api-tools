import axios, {
  AxiosInstance,
  AxiosRequestHeaders,
  AxiosResponse,
  AxiosResponseTransformer,
} from "axios";
import humps from "humps";
import { NetworkError } from "./error";

const TOKEN_KEY = "AUTH_TOKEN";

export type HTTPMethod = "get" | "post" | "patch" | "put" | "delete";

export type ContentType = "json" | "formData";

export type RequestOption = {
  requiredAuth: boolean;
  baseURL: string;
  method: HTTPMethod;
  path: string;
};

class BaseRequest<
  TInput,
  TPayload,
  TUrlParams extends Record<string, unknown> | undefined,
  TQParams extends Record<string, unknown> | undefined
> {
  // Require Override
  /// そのリクエストが認証必要かどうか
  requireAuth: boolean;

  /// HTTP Method
  method: HTTPMethod;

  /// そのAPIのHOSTやv1などのネームスペースを含んだもの
  baseURL: string;

  /// そのAPIのHOSTを除いたエンドポイント
  path: string;

  /// content type
  readonly contentType: ContentType = "json";

  constructor({ requiredAuth, method, baseURL, path }: RequestOption) {
    this.requireAuth = requiredAuth;
    this.method = method;
    this.baseURL = baseURL;
    this.path = path;
  }

  // primary function
  // throw: ServerError
  async call(variables?: {
    id?: string;
    params?: TInput;
    urlParams?: TUrlParams;
    qParams?: TQParams;
  }): Promise<TPayload> {
    const { params, urlParams, qParams } = variables || {};
    const pParams = ((): Record<string, unknown> | FormData | undefined => {
      if (params === undefined) return undefined;

      switch (this.contentType) {
        case "formData": {
          const fData = new FormData();
          const toFormData = (key: string, value: any) => {
            if (value === undefined || value === null) return;
            // Objectであり、配列、ファイルではないかを判定する型ガード関数
            const isObject = (value: unknown) =>
              typeof value === "object" && !Array.isArray(value) && !(value instanceof File);

            // オブジェクトがを判断
            if (isObject(value)) {
              Object.entries(value).forEach(([subKey, value]) => {
                // keyを追加して再帰
                toFormData(`${humps.decamelize(key)}[${humps.decamelize(subKey)}]`, value);
              });
            } else {
              // 配列か判断
              if (Array.isArray(value)) {
                value.forEach((el) => {
                  // 配列の中身がオブジェクトだったらkeyを追加して再帰
                  if (isObject(el)) {
                    Object.entries(el).forEach(([subKey, value]) => {
                      // keyを追加して再帰
                      toFormData(`${humps.decamelize(key)}[][${humps.decamelize(subKey)}]`, value);
                    });
                  } else {
                    fData.append(`${humps.decamelize(key)}[]`, el);
                  }
                });
              } else {
                fData.append(humps.decamelize(key), value);
              }
            }
          };
          // キー・バリューに分解
          Object.entries(params).forEach(([key, value]) => {
            toFormData(humps.decamelize(key), value);
          });
          return fData;
        }
        default:
          return (
            params &&
            (humps.decamelizeKeys(params as unknown as Record<string, unknown>) as Record<
              string,
              unknown
            >)
          );
      }
    })();
    const res = await (async (): Promise<AxiosResponse<TPayload>> => {
      switch (this.method) {
        case "get":
          return this.apiClient.get<TPayload>(this.configurePath(urlParams, qParams));
        case "post":
          return this.apiClient.post<TPayload>(this.configurePath(urlParams, qParams), pParams);
        case "put":
          return this.apiClient.put<TPayload>(this.configurePath(urlParams, qParams), pParams);
        case "patch":
          return this.apiClient.patch<TPayload>(this.configurePath(urlParams, qParams), pParams);
        case "delete":
          return this.apiClient.delete<TPayload>(this.configurePath(urlParams, qParams));
      }
    })();

    return res.data;
  }

  // ------- private -----------

  private get apiClient(): AxiosInstance {
    const headers: Record<string, unknown> = {
      "Content-Type": this.getContentType(),
      "X-Requested-With": "XMLHttpRequest",
      crossDomain: true,
    };

    if (this.requireAuth) {
      const token = localStorage.getItem(TOKEN_KEY);
      if (!token) {
        throw new Error("token not found");
      } else {
        headers.Authorization = `Bearer ${token}`;
      }
    }

    const client = axios.create({
      baseURL: this.baseURL,
      headers: headers as AxiosRequestHeaders,
      withCredentials: false,
      transformResponse: [
        ...(axios.defaults.transformResponse as AxiosResponseTransformer[]),
        (data): Record<string, unknown>[] => humps.camelizeKeys(data) as Record<string, unknown>[],
      ],
    });
    client.interceptors.response.use(
      (res) => res,
      (error) => {
        throw new NetworkError(error.response.data.errors[0]?.description, error.response.status);
      }
    );
    return client;
  }

  private configurePath(urlParams: TUrlParams | undefined, qParams: TQParams | undefined): string {
    let { path } = this;
    let queries = "";
    if (urlParams) {
      Object.entries(urlParams as Record<string, unknown>).forEach(([key, val], _) => {
        path = path.replace(`:${key}`, val as string);
      });
    }

    if (qParams) {
      const handleKeyValue = (key: string, value: unknown): void => {
        const handleObject = (obj: Record<string, unknown>) => {
          // arrayもobjectもkey, valueに分割できるのでこれでさばく
          Object.entries(obj).forEach(([k, val], _) => {
            handleKeyValue(`${key}[${Array.isArray(obj) ? "" : k}]`, val);
          });
        };
        // 何故かvalueがnullのときにtypeofがobjectと判定するため、最初にnullチェックを追加
        if (value && typeof value === "object") {
          handleObject(value as Record<string, unknown>);
        } else {
          if (value === undefined || value === "") return;
          // query paramsのvalueはスネークケースで対応する
          queries = `${
            queries === ""
              ? `?${humps.decamelize(key)}=${value}`
              : `${queries}&${humps.decamelize(key)}=${value}`
          }`;
        }
      };
      Object.entries(qParams as Record<string, unknown>).forEach(([key, val], _) => {
        handleKeyValue(key, val);
      });
    }
    return `${path}${queries}`;
  }

  private getContentType(): string {
    switch (this.contentType) {
      case "formData":
        return "multipart/form-data";
      default:
        return "application/json";
    }
  }
}

export default BaseRequest;
