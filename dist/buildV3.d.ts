import { OpenAPIV3 } from "openapi-types";
import { Config } from "./types";
export declare const buildV3: (openapi: OpenAPIV3.Document, config: Config) => {
    types: string | null;
    files: {
        file: string[];
        methods: string[];
    }[];
};
//# sourceMappingURL=buildV3.d.ts.map