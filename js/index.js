"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var typescript_1 = __importDefault(require("typescript"));
function delint(sourceFile) {
    delintNode(sourceFile);
    function delintNode(node) {
        switch (node.kind) {
            case typescript_1.default.SyntaxKind.Identifier:
                console.log(node.text);
                console.log(node);
        }
        typescript_1.default.forEachChild(node, delintNode);
    }
    // function report(node: ts.Node, message: string) {
    //   const { line, character } = sourceFile.getLineAndCharacterOfPosition(
    //     node.getStart()
    //   );
    //   console.log(
    //     `${sourceFile.fileName} (${line + 1},${character + 1}): ${message}`
    //   );
    // }
}
exports.delint = delint;
var fileNames = process.argv.slice(2);
fileNames.forEach(function (fileName) {
    // Parse a file
    var sourceFile = typescript_1.default.createSourceFile(fileName, fs_1.readFileSync(fileName).toString(), typescript_1.default.ScriptTarget.ES2015, 
    /*setParentNodes */ true);
    // delint it
    delint(sourceFile);
});
