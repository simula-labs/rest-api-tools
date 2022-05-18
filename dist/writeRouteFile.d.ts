declare type WriteRouteFileProps = {
    types: string | null;
    files: {
        file: string[];
        methods: string[];
    }[];
    outputDir?: string;
};
export declare const writeRouteFile: ({ types, files, outputDir }: WriteRouteFileProps) => void;
export {};
//# sourceMappingURL=writeRouteFile.d.ts.map