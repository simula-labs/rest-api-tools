"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeRouteFile = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var writeRouteFile = function (_a) {
    var types = _a.types, files = _a.files, outputDir = _a.outputDir;
    if (types) {
        fs_1.default.mkdirSync("".concat(outputDir, "/@types"));
        fs_1.default.writeFileSync("".concat(outputDir, "/@types/index.ts"), types, "utf8");
    }
    files.forEach(function (p) {
        var fileName = p.file.pop();
        p.file.forEach(function (_d, i, dirList) {
            var dirPath = "".concat(outputDir, "/").concat(dirList.slice(0, i + 1).join("/"));
            if (!fs_1.default.existsSync(dirPath)) {
                fs_1.default.mkdirSync(dirPath);
            }
        });
        fs_1.default.copyFileSync(path_1.default.join(process.cwd(), "/src/lib/baseRequest.ts"), "".concat(outputDir, "/baseRequest.ts"));
        fs_1.default.copyFileSync(path_1.default.join(process.cwd(), "/src/lib/error.ts"), "".concat(outputDir, "/error.ts"));
        fs_1.default.writeFileSync("".concat(outputDir, "/").concat(p.file.join("/"), "/").concat(fileName, ".ts"), p.methods.join(""), "utf8");
    });
};
exports.writeRouteFile = writeRouteFile;
//# sourceMappingURL=writeRouteFile.js.map