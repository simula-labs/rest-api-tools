"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.props2StringForParams = exports.value2StringForParams = exports.props2String = exports.description2Doc = exports.value2String = void 0;
var humps_1 = __importDefault(require("humps"));
var array2String = function (val, indent) {
    var hasMulti = ((val.isEnum || val.hasOf) && Array.isArray(val.value) && val.value.length) || val.nullable;
    return "".concat(hasMulti ? "(" : "").concat((0, exports.value2String)(val, indent)).concat(hasMulti ? ")" : "", "[]");
};
var value2String = function (v, indent) {
    return "".concat(v.hasOf
        ? values2String(v.value, v.hasOf, indent)
        : v.isArray
            ? array2String(v.value, indent)
            : v.isEnum
                ? v.value.join(" | ")
                : Array.isArray(v.value)
                    ? (0, exports.props2String)(v.value, "  ".concat(indent))
                    : v.value).concat(v.nullable ? " | null" : "");
};
exports.value2String = value2String;
var values2String = function (values, hasOf, indent) {
    return "".concat(hasOf === "anyOf" ? "Partial<" : "").concat(values
        .map(function (a) { return (0, exports.value2String)(a, indent); })
        .join(hasOf === "oneOf" ? " | " : " & ")).concat(hasOf === "anyOf" ? ">" : "");
};
var isMultiLine = function (values) {
    return values.find(function (v) { return !v.isEnum && Array.isArray(v.value); });
};
var escapeDecription = function (desc) { return desc.replace(/\*\//g, "* /"); };
var description2Doc = function (desc, indent) {
    if (!desc)
        return "";
    var rows = desc.trim().split("\n").map(escapeDecription);
    return rows.length === 1
        ? "".concat(indent, "/** ").concat(rows[0], " */\n")
        : "".concat(indent, "/**\n").concat(indent, " * ").concat(rows.join("\n".concat(indent, " * ")), "\n").concat(indent, " */\n");
};
exports.description2Doc = description2Doc;
var props2String = function (props, indent) {
    return "{\n".concat(props
        .map(function (p, i) {
        return (function (opt) {
            return "".concat((0, exports.description2Doc)(p.description, "  ".concat(indent)), "  ").concat(indent).concat(humps_1.default.camelize(p.name)).concat(opt ? "?" : "", ": ").concat(values2String(p.values, undefined, indent)).concat(opt ? " | undefined" : "").concat(props.length - 1 === i || isMultiLine(p.values) || isMultiLine(props[i + 1].values)
                ? "\n"
                : "");
        })(!p.required);
    })
        .join("\n")).concat(indent, "}");
};
exports.props2String = props2String;
// 追加
// indentを調整するためにvalue2Stringのindentを若干調整した関数
var value2StringForParams = function (v, indent) {
    return "".concat(v.hasOf
        ? values2String(v.value, v.hasOf, indent)
        : v.isArray
            ? array2String(v.value, indent)
            : v.isEnum
                ? v.value.join(" | ")
                : Array.isArray(v.value)
                    ? (0, exports.props2String)(v.value, "".concat(indent))
                    : v.value).concat(v.nullable ? " | null" : "");
};
exports.value2StringForParams = value2StringForParams;
var values2StringForParams = function (values, hasOf, indent) {
    return "".concat(hasOf === "anyOf" ? "Partial<" : "").concat(values
        .map(function (a) { return (0, exports.value2StringForParams)(a, indent); })
        .join(hasOf === "oneOf" ? " | " : " & ")).concat(hasOf === "anyOf" ? ">" : "");
};
var props2StringForParams = function (props, indent) {
    return "".concat(props
        .map(function (p, i) {
        return (function (opt) {
            return "".concat((0, exports.description2Doc)(p.description, "  ".concat(indent))).concat(indent).concat(values2StringForParams(p.values, undefined, indent)).concat(opt ? " | undefined" : "").concat(props.length - 1 === i || isMultiLine(p.values) || isMultiLine(props[i + 1].values)
                ? "\n"
                : "");
        })(!p.required);
    })
        .join("\n"));
};
exports.props2StringForParams = props2StringForParams;
//# sourceMappingURL=props2String.js.map