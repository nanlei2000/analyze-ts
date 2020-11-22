"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delint = void 0;
var fs_1 = require("fs");
var typescript_1 = __importDefault(require("typescript"));
var lodash_1 = __importDefault(require("lodash"));
var list = [];
function delint(sourceFile) {
    delintNode(sourceFile);
    function delintNode(node) {
        switch (node.kind) {
            case typescript_1.default.SyntaxKind.Identifier:
                var identifier = node;
                if (identifier.parent.kind !== typescript_1.default.SyntaxKind.FunctionDeclaration) {
                    return;
                }
                var words = lodash_1.default.kebabCase(identifier.text).split('-').slice(0, 1);
                words.forEach(function (word) {
                    var index = list.map(function (v) { return v.name; }).indexOf(word);
                    // 有则改之
                    if (index !== -1) {
                        list[index].count++;
                    }
                    else {
                        // 无则加勉
                        list.push({
                            name: word,
                            count: 1
                        });
                    }
                });
        }
        typescript_1.default.forEachChild(node, delintNode);
    }
}
exports.delint = delint;
var fileNames = process.argv.slice(2);
fileNames.forEach(function (fileName) {
    // Parse a file
    var sourceFile = typescript_1.default.createSourceFile(fileName, fs_1.readFileSync(fileName).toString(), typescript_1.default.ScriptTarget.ES2015, 
    /*setParentNodes */ true);
    // delint it
    delint(sourceFile);
    list.sort(function (a, b) { return b.count - a.count; });
    console.log(list.slice(0, 10).map(function (item) { return item.name + "：" + item.count; }).join('\n'));
});
