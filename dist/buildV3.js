"use strict";
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
exports.buildV3 = void 0;
var humps_1 = __importDefault(require("humps"));
var converters_1 = require("./builderUtils/converters");
var schemas2Props_1 = __importDefault(require("./builderUtils/schemas2Props"));
var props2String_1 = require("./builderUtils/props2String");
var resolvers_1 = require("./builderUtils/resolvers");
var buildV3 = function (openapi, config) {
    var _a;
    var files = [];
    var schemas = (0, schemas2Props_1.default)((_a = openapi.components) === null || _a === void 0 ? void 0 : _a.schemas, openapi) || [];
    Object.entries(openapi.paths).forEach(function (_a) {
        var _b = __read(_a, 2), path = _b[0], targetUrl = _b[1];
        var urlParams = [];
        if (!targetUrl)
            return;
        // targetUrl.parametersはurlParamsのこと
        if (targetUrl.parameters) {
            targetUrl.parameters.forEach(function (p) {
                var _a, _b;
                if ((0, converters_1.isRefObject)(p)) {
                    // refは今存在しないので後回し
                }
                else {
                    var value = (0, converters_1.schema2value)(p.schema, true);
                    if (!value)
                        return;
                    var prop = {
                        name: humps_1.default.camelize((0, converters_1.getPropertyName)(p.name)),
                        required: (_a = p.required) !== null && _a !== void 0 ? _a : false,
                        description: (_b = p.description) !== null && _b !== void 0 ? _b : null,
                        values: [value],
                    };
                    urlParams.push(prop);
                }
            });
        }
        // 前で処理を終えているため
        // eslint-disable-next-line no-param-reassign
        delete targetUrl.parameters;
        Object.entries(targetUrl).forEach(function (_a) {
            var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            var _m = __read(_a, 2), method = _m[0], target = _m[1];
            var file = __spreadArray(__spreadArray([], __read(path
                .replace(/\/$/, "")
                .split("/")
                .slice(1)
                .map(function (p) { return p.replace("{", "[").replace("}", "]"); })), false), [
                method,
            ], false);
            var params = urlParams.length
                ? [
                    {
                        name: "urlParams",
                        required: false,
                        description: null,
                        values: [
                            {
                                isArray: false,
                                isEnum: false,
                                nullable: false,
                                description: null,
                                value: urlParams,
                            },
                        ],
                    },
                ]
                : [];
            // 前で処理を終えているため(ここでparametersの処理をしてもよいか、型がやや面倒くさそうだった
            if (Array.isArray(target) || typeof target === "string")
                return;
            if (!target.operationId) {
                console.log("".concat(path, " ").concat(method, "\u306EoperationId\u5B58\u5728\u3057\u307E\u305B\u3093"));
                return;
            }
            var pascalizedTargetOperationId = humps_1.default.pascalize(target.operationId);
            if (target.responses) {
                var code = Object.keys(target.responses).find(function (res) { return res.match(/^(20\d|30\d)$/); });
                if (code) {
                    var res = target.responses[code];
                    var ref = (0, converters_1.isRefObject)(res) ? (0, resolvers_1.resolveResRef)(openapi, res.$ref) : res;
                    var content = (_c = (ref.content &&
                        ((_b = Object.entries(ref.content).find(function (_a) {
                            var _b = __read(_a, 1), key = _b[0];
                            return key.startsWith("application/");
                        })) === null || _b === void 0 ? void 0 : _b[1]))) !== null && _c !== void 0 ? _c : (_d = ref.content) === null || _d === void 0 ? void 0 : _d[Object.keys(ref.content)[0]];
                    if (content === null || content === void 0 ? void 0 : content.schema) {
                        var val = (0, converters_1.schema2value)(content.schema, true, true);
                        if (val) {
                            var resProp = {
                                name: "response",
                                required: true,
                                // example response消すため
                                description: "",
                                values: [val],
                            };
                            params.push(resProp);
                        }
                    }
                }
            }
            if (target.requestBody) {
                // TODO: reqFormatは一旦無視
                var reqFormat = "";
                var reqBody = null;
                var required = void 0;
                var description = void 0;
                if ((0, converters_1.isRefObject)(target.requestBody)) {
                    var ref = (0, resolvers_1.resolveReqRef)(openapi, target.requestBody.$ref);
                    if ((_e = ref.content["multipart/form-data"]) === null || _e === void 0 ? void 0 : _e.schema) {
                        reqFormat = "FormData";
                    }
                    reqBody = {
                        isArray: false,
                        isEnum: false,
                        nullable: false,
                        description: null,
                        value: (0, converters_1.$ref2Type)(target.requestBody.$ref),
                    };
                    required = (_f = ref.required) !== null && _f !== void 0 ? _f : true;
                    description = (_g = ref.description) !== null && _g !== void 0 ? _g : null;
                }
                else {
                    required = (_h = target.requestBody.required) !== null && _h !== void 0 ? _h : true;
                    description = (_j = target.requestBody.description) !== null && _j !== void 0 ? _j : null;
                    if ((_k = target.requestBody.content["multipart/form-data"]) === null || _k === void 0 ? void 0 : _k.schema) {
                        reqFormat = "FormData";
                        reqBody = (0, converters_1.schema2value)(target.requestBody.content["multipart/form-data"].schema, true);
                    }
                    else {
                        var content = target.requestBody.content &&
                            ((_l = Object.entries(target.requestBody.content).find(function (_a) {
                                var _b = __read(_a, 1), key = _b[0];
                                return key.startsWith("application/");
                            })) === null || _l === void 0 ? void 0 : _l[1]);
                        if (content === null || content === void 0 ? void 0 : content.schema)
                            reqBody = (0, converters_1.schema2value)(content.schema, true);
                    }
                }
                if (reqBody) {
                    var requestBody = {
                        name: "requestBody",
                        required: required,
                        description: description,
                        values: [reqBody],
                    };
                    params.push(requestBody);
                }
            }
            if (target.parameters) {
                var queryParams_1 = [];
                target.parameters.forEach(function (p) {
                    var _a, _b;
                    if ((0, converters_1.isRefObject)(p)) {
                        // refは今存在しないので後回し
                    }
                    else {
                        var value = (0, converters_1.schema2value)(p.schema, true);
                        if (!value)
                            return;
                        var prop = {
                            name: (0, converters_1.getPropertyName)(p.name),
                            required: (_a = p.required) !== null && _a !== void 0 ? _a : false,
                            description: (_b = p.description) !== null && _b !== void 0 ? _b : null,
                            values: [value],
                        };
                        switch (p.in) {
                            case "query":
                                queryParams_1.push(prop);
                                break;
                            default:
                        }
                    }
                });
                params.push({
                    name: "queryParams",
                    required: false,
                    description: null,
                    values: [
                        {
                            isArray: false,
                            isEnum: false,
                            nullable: false,
                            description: null,
                            value: queryParams_1,
                        },
                    ],
                });
            }
            var methods = [];
            var responseType = "";
            methods.push("import BaseRequest from \"".concat(file.map(function () { return ""; }).join("../"), "baseRequest\";\n") +
                "import type * as Types from \"".concat(file.map(function () { return ""; }).join("../"), "@types\";\n"));
            params.forEach(function (param) {
                switch (param.name) {
                    case "urlParams":
                        methods.push("export type ".concat(pascalizedTargetOperationId, "UrlParams = ").concat((0, props2String_1.props2StringForParams)([param], "")));
                        break;
                    case "queryParams":
                        methods.push("export type ".concat(pascalizedTargetOperationId, "QueryParams = ").concat((0, props2String_1.props2StringForParams)([param], "")));
                        return;
                    case "requestBody":
                        methods.push("export type ".concat(pascalizedTargetOperationId, "RequestBody = ").concat((0, props2String_1.props2StringForParams)([param], "")));
                        break;
                    case "response":
                        methods.push("export type ".concat(pascalizedTargetOperationId, "Response = ").concat((0, props2String_1.props2StringForParams)([param], "")));
                        responseType = "".concat(pascalizedTargetOperationId, "Response");
                        break;
                    default:
                }
            });
            if (methods.find(function (el) { return el.includes(converters_1.BINARY_TYPE); })) {
                methods.unshift("import type { ReadStream } from 'fs'\n");
            }
            var requestPath = path
                .replace(/\/$/, "")
                .split("/")
                .map(function (p) {
                var _a, _b;
                // Refactor
                if ((_a = p.match(/\{(.+)\}/)) === null || _a === void 0 ? void 0 : _a[1]) {
                    return ":".concat((_b = p.match(/\{(.+)\}/)) === null || _b === void 0 ? void 0 : _b[1]);
                }
                return p;
            })
                .join("/");
            var hasResponse = methods.join("").includes("Response");
            var hasQueryParams = methods.join("").includes("QueryParams");
            var hasRequestBody = methods.join("").includes("RequestBody");
            var hasUrlParams = methods.join("").includes("UrlParams");
            var baseRequest = "export const ".concat(pascalizedTargetOperationId, " = new BaseRequest<\n") +
                "  ".concat(hasRequestBody ? "".concat(pascalizedTargetOperationId, "RequestBody") : undefined, ",\n") +
                "  ".concat(hasResponse ? "".concat(pascalizedTargetOperationId, "Response") : undefined, ",\n") +
                "  ".concat(hasUrlParams ? "".concat(pascalizedTargetOperationId, "UrlParams") : undefined, ",\n") +
                "  ".concat(hasQueryParams ? "".concat(pascalizedTargetOperationId, "QueryParams") : undefined, "\n") +
                ">({\n" +
                "  requiredAuth: true,\n" +
                "  method: \"".concat(method, "\",\n") +
                "  baseURL: \"".concat(config.baseURL, "\",\n") +
                "  path: \"".concat(requestPath, "\",\n") +
                "});\n";
            methods.push(baseRequest);
            files.push({
                file: file,
                methods: methods,
            });
        });
    });
    // TODO: snake_case to camelCase
    var typesText = schemas.length
        ? __spreadArray([], __read(schemas.map(function (s) { return ({
            name: s.name,
            description: s.value.description,
            text: (0, props2String_1.value2String)(s.value, "").replace(/\n {2}/g, "\n"),
        }); })), false).map(function (p) { return "\n".concat((0, props2String_1.description2Doc)(p.description, ""), "export type ").concat(p.name, " = ").concat(p.text, "\n"); })
            .join("")
            .replace(/(\W)Types\./g, "$1")
            .replace(/\]\?:/g, "]:")
        : null;
    return {
        types: typesText &&
            "/* eslint-disable */".concat(typesText.includes(converters_1.BINARY_TYPE) ? "\nimport type { ReadStream } from 'fs'\n" : "").concat(typesText),
        files: files,
    };
};
exports.buildV3 = buildV3;
//# sourceMappingURL=buildV3.js.map