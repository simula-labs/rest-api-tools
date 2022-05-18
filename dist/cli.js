"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var minimist_1 = __importDefault(require("minimist"));
var path_1 = __importDefault(require("path"));
var build_1 = require("./build");
var run = function (args) {
    var argv = (0, minimist_1.default)(args, {
        string: ["config"],
    });
    var configs = require(path_1.default.join(process.cwd(), argv.config));
    (0, build_1.build)(configs);
};
exports.run = run;
//# sourceMappingURL=cli.js.map