"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var humps_1 = __importDefault(require("humps"));
var error_1 = require("./error");
var TOKEN_KEY = "AUTH_TOKEN";
var BaseRequest = /** @class */ (function () {
    function BaseRequest(_a) {
        var requiredAuth = _a.requiredAuth, method = _a.method, baseURL = _a.baseURL, path = _a.path;
        /// content type
        this.contentType = "json";
        this.requireAuth = requiredAuth;
        this.method = method;
        this.baseURL = baseURL;
        this.path = path;
    }
    // primary function
    // throw: ServerError
    BaseRequest.prototype.call = function (variables) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, params, urlParams, qParams, pParams, res;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = variables || {}, params = _a.params, urlParams = _a.urlParams, qParams = _a.qParams;
                        pParams = (function () {
                            if (params === undefined)
                                return undefined;
                            switch (_this.contentType) {
                                case "formData": {
                                    var fData_1 = new FormData();
                                    var toFormData_1 = function (key, value) {
                                        if (value === undefined || value === null)
                                            return;
                                        // Objectであり、配列、ファイルではないかを判定する型ガード関数
                                        var isObject = function (value) {
                                            return typeof value === "object" && !Array.isArray(value) && !(value instanceof File);
                                        };
                                        // オブジェクトがを判断
                                        if (isObject(value)) {
                                            Object.entries(value).forEach(function (_a) {
                                                var _b = __read(_a, 2), subKey = _b[0], value = _b[1];
                                                // keyを追加して再帰
                                                toFormData_1("".concat(humps_1.default.decamelize(key), "[").concat(humps_1.default.decamelize(subKey), "]"), value);
                                            });
                                        }
                                        else {
                                            // 配列か判断
                                            if (Array.isArray(value)) {
                                                value.forEach(function (el) {
                                                    // 配列の中身がオブジェクトだったらkeyを追加して再帰
                                                    if (isObject(el)) {
                                                        Object.entries(el).forEach(function (_a) {
                                                            var _b = __read(_a, 2), subKey = _b[0], value = _b[1];
                                                            // keyを追加して再帰
                                                            toFormData_1("".concat(humps_1.default.decamelize(key), "[][").concat(humps_1.default.decamelize(subKey), "]"), value);
                                                        });
                                                    }
                                                    else {
                                                        fData_1.append("".concat(humps_1.default.decamelize(key), "[]"), el);
                                                    }
                                                });
                                            }
                                            else {
                                                fData_1.append(humps_1.default.decamelize(key), value);
                                            }
                                        }
                                    };
                                    // キー・バリューに分解
                                    Object.entries(params).forEach(function (_a) {
                                        var _b = __read(_a, 2), key = _b[0], value = _b[1];
                                        toFormData_1(humps_1.default.decamelize(key), value);
                                    });
                                    return fData_1;
                                }
                                default:
                                    return (params &&
                                        humps_1.default.decamelizeKeys(params));
                            }
                        })();
                        return [4 /*yield*/, (function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (this.method) {
                                        case "get":
                                            return [2 /*return*/, this.apiClient.get(this.configurePath(urlParams, qParams))];
                                        case "post":
                                            return [2 /*return*/, this.apiClient.post(this.configurePath(urlParams, qParams), pParams)];
                                        case "put":
                                            return [2 /*return*/, this.apiClient.put(this.configurePath(urlParams, qParams), pParams)];
                                        case "patch":
                                            return [2 /*return*/, this.apiClient.patch(this.configurePath(urlParams, qParams), pParams)];
                                        case "delete":
                                            return [2 /*return*/, this.apiClient.delete(this.configurePath(urlParams, qParams))];
                                    }
                                    return [2 /*return*/];
                                });
                            }); })()];
                    case 1:
                        res = _b.sent();
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    Object.defineProperty(BaseRequest.prototype, "apiClient", {
        // ------- private -----------
        get: function () {
            var headers = {
                "Content-Type": this.getContentType(),
                "X-Requested-With": "XMLHttpRequest",
                crossDomain: true,
            };
            if (this.requireAuth) {
                var token = localStorage.getItem(TOKEN_KEY);
                if (!token) {
                    throw new Error("token not found");
                }
                else {
                    headers.Authorization = "Bearer ".concat(token);
                }
            }
            var client = axios_1.default.create({
                baseURL: this.baseURL,
                headers: headers,
                withCredentials: false,
                transformResponse: __spreadArray(__spreadArray([], __read(axios_1.default.defaults.transformResponse), false), [
                    function (data) { return humps_1.default.camelizeKeys(data); },
                ], false),
            });
            client.interceptors.response.use(function (res) { return res; }, function (error) {
                var _a;
                throw new error_1.NetworkError((_a = error.response.data.errors[0]) === null || _a === void 0 ? void 0 : _a.description, error.response.status);
            });
            return client;
        },
        enumerable: false,
        configurable: true
    });
    BaseRequest.prototype.configurePath = function (urlParams, qParams) {
        var path = this.path;
        var queries = "";
        if (urlParams) {
            Object.entries(urlParams).forEach(function (_a, _) {
                var _b = __read(_a, 2), key = _b[0], val = _b[1];
                path = path.replace(":".concat(key), val);
            });
        }
        if (qParams) {
            var handleKeyValue_1 = function (key, value) {
                var handleObject = function (obj) {
                    // arrayもobjectもkey, valueに分割できるのでこれでさばく
                    Object.entries(obj).forEach(function (_a, _) {
                        var _b = __read(_a, 2), k = _b[0], val = _b[1];
                        handleKeyValue_1("".concat(key, "[").concat(Array.isArray(obj) ? "" : k, "]"), val);
                    });
                };
                // 何故かvalueがnullのときにtypeofがobjectと判定するため、最初にnullチェックを追加
                if (value && typeof value === "object") {
                    handleObject(value);
                }
                else {
                    if (value === undefined || value === "")
                        return;
                    // query paramsのvalueはスネークケースで対応する
                    queries = "".concat(queries === ""
                        ? "?".concat(humps_1.default.decamelize(key), "=").concat(value)
                        : "".concat(queries, "&").concat(humps_1.default.decamelize(key), "=").concat(value));
                }
            };
            Object.entries(qParams).forEach(function (_a, _) {
                var _b = __read(_a, 2), key = _b[0], val = _b[1];
                handleKeyValue_1(key, val);
            });
        }
        return "".concat(path).concat(queries);
    };
    BaseRequest.prototype.getContentType = function () {
        switch (this.contentType) {
            case "formData":
                return "multipart/form-data";
            default:
                return "application/json";
        }
    };
    return BaseRequest;
}());
exports.default = BaseRequest;
//# sourceMappingURL=baseRequest.js.map