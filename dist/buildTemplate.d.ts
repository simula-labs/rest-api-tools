import { Config } from "./types";
export declare const buildTemplate: (config: Config) => Promise<{
    types: string | null;
    files: {
        file: string[];
        methods: string[];
    }[];
} | undefined>;
//# sourceMappingURL=buildTemplate.d.ts.map