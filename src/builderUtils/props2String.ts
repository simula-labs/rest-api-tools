import humps from "humps";
import { mockValues } from "./mockValues";

export type PropValue = {
  isArray: boolean;
  isEnum: boolean;
  nullable: boolean;
  hasOf?: "oneOf" | "allOf" | "anyOf";
  description: string | null;
  // eslint-disable-next-line no-use-before-define
  value: Prop[] | string | string[] | PropValue | PropValue[];
};

export type Prop = {
  name: string;
  required: boolean;
  values: PropValue[];
  description: string | null;
};

const array2String = (val: PropValue, indent: string) => {
  const hasMulti =
    ((val.isEnum || val.hasOf) && Array.isArray(val.value) && val.value.length) || val.nullable;
  return `${hasMulti ? "(" : ""}${value2String(val, indent)}${hasMulti ? ")" : ""}[]`;
};

export const value2String = (v: PropValue, indent: string, anyOfNull = false): string => {
  return anyOfNull
    ? "null"
    : `${
        v.hasOf
          ? values2String(v.value as PropValue[], v.hasOf, indent)
          : v.isArray
          ? array2String(v.value as PropValue, indent)
          : v.isEnum
          ? (v.value as string[]).join(" | ")
          : Array.isArray(v.value)
          ? props2String(v.value as Prop[], `  ${indent}`)
          : v.value
      }${v.nullable ? " | null" : ""}`;
};

const values2String = (values: PropValue[], hasOf: PropValue["hasOf"], indent: string) => {
  return `${values
    .map((a) => {
      return value2String(a, indent, hasOf === "anyOf" && a.nullable);
    })
    .join(hasOf === "oneOf" || hasOf === "anyOf" ? " | " : " & ")}`;
};

const isMultiLine = (values: PropValue[]) =>
  values.find((v) => !v.isEnum && Array.isArray(v.value));

const escapeDecription = (desc: string): string => desc.replace(/\*\//g, "* /");

export const description2Doc = (desc: string | null, indent: string) => {
  if (!desc) return "";

  const rows = desc.trim().split("\n").map(escapeDecription);
  return rows.length === 1
    ? `${indent}/** ${rows[0]} */\n`
    : `${indent}/**\n${indent} * ${rows.join(`\n${indent} * `)}\n${indent} */\n`;
};

export const props2String = (props: Prop[], indent: string) =>
  `{\n${props
    .map((p, i) =>
      ((opt) =>
        `${description2Doc(p.description, `  ${indent}`)}  ${indent}${humps.camelize(p.name)}${
          opt ? "?" : ""
        }: ${values2String(p.values, undefined, indent)}${opt ? " | undefined" : ""}${
          props.length - 1 === i || isMultiLine(p.values) || isMultiLine(props[i + 1].values)
            ? "\n"
            : ""
        }`)(!p.required)
    )
    .join("\n")}${indent}}`;

// indentを調整するためにvalue2Stringのindentを若干調整した関数
export const value2StringForParams = (v: PropValue, indent: string): string =>
  `${
    v.hasOf
      ? values2String(v.value as PropValue[], v.hasOf, indent)
      : v.isArray
      ? array2String(v.value as PropValue, indent)
      : v.isEnum
      ? (v.value as string[]).join(" | ")
      : Array.isArray(v.value)
      ? props2String(v.value as Prop[], `${indent}`)
      : v.value
  }${v.nullable ? " | null" : ""}`;

const values2StringForParams = (values: PropValue[], hasOf: PropValue["hasOf"], indent: string) =>
  `${values.map((a) => value2StringForParams(a, indent)).join(hasOf === "oneOf" ? " | " : " & ")}`;

export const props2StringForParams = (props: Prop[], indent: string) =>
  `${props
    .map((p, i) =>
      ((opt) =>
        `${description2Doc(p.description, `  ${indent}`)}${indent}${values2StringForParams(
          p.values,
          undefined,
          indent
        )}${opt ? " | undefined" : ""}${
          props.length - 1 === i || isMultiLine(p.values) || isMultiLine(props[i + 1].values)
            ? "\n"
            : ""
        }`)(!p.required)
    )
    .join("\n")}`;

// mock関数を作成するための関数

const type2String = (propValue: PropValue, name: string) => {
  if (propValue.value.toString().includes("Types")) {
    return `${propValue.value.toString().replace("Types.", "mock")}()`;
  }
  if (propValue.value === "string") {
    return `"string"`;
  }
  if (propValue.value === "number") {
    return 0;
  }
  if (propValue.value === "boolean") {
    return false;
  }
};

export const value2StringForMock = (
  v: PropValue,
  indent: string,
  first: boolean,
  name: string
): string => {
  return `${
    v.hasOf
      ? values2StringForParamsForMock(v.value as PropValue[], v.hasOf, indent, first, name)
      : v.isArray
      ? array2StringForMock(v.value as PropValue, indent)
      : v.isEnum
      ? (v.value as string[])[0]
      : Array.isArray(v.value)
      ? props2StringForMock(v.value as Prop[], `  ${indent}`, first)
      : `${type2String(v, name)}`
  }`;
};

export const props2StringForMock = (props: Prop[], indent: string, first: boolean) => {
  return `{\n${props
    .map((p, i) =>
      ((opt) => {
        return `    ${indent}${humps.camelize(p.name)}: ${prop2StringForMock(
          p,
          undefined,
          indent
        )},${
          props.length - 1 === i || isMultiLine(p.values) || isMultiLine(props[i + 1].values)
            ? "\n"
            : ""
        }`;
      })(!p.required)
    )
    .join("\n")}      ${first ? "...modification" : ""}\n${indent}  }`;
};

const prop2StringForMock = (props: Prop, hasOf: PropValue["hasOf"], indent: string) =>
  `${props.values
    .map((a) => value2StringForMock(a, indent, false, humps.camelize(props.name)))
    .join(hasOf === "oneOf" ? " | " : " & ")}`;

const values2StringForParamsForMock = (
  values: PropValue[],
  hasOf: PropValue["hasOf"],
  indent: string,
  first: boolean,
  name: string
) => `${values.map((a) => value2StringForMock(a, indent, first, name))[0]}`;

const array2StringForMock = (val: PropValue, indent: string) => {
  return `[]`;
};
