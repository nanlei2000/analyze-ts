import { readFileSync } from "fs";
import ts from "typescript";
import _ from 'lodash';

const list: Array<{
  name: string,
  count: number
}> = [];
export function delint(sourceFile: ts.SourceFile) {
  delintNode(sourceFile);

  function delintNode(node: ts.Node) {
    switch (node.kind) {
      case ts.SyntaxKind.Identifier:
        const identifier = node as ts.Identifier;
        if (identifier.parent.kind !== ts.SyntaxKind.FunctionDeclaration) {
          return
        }
        const words: string[] = _.kebabCase(identifier.text).split('-').slice(0, 1);
        words.forEach((word) => {
          const index = list.map(v => v.name).indexOf(word);
          // 有则改之
          if (index !== -1) {
            list[index].count++
          } else {
            // 无则加勉
            list.push({
              name: word,
              count: 1
            })
          }
        })
    }

    ts.forEachChild(node, delintNode);
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

const fileNames = process.argv.slice(2);
fileNames.forEach(fileName => {
  // Parse a file
  const sourceFile = ts.createSourceFile(
    fileName,
    readFileSync(fileName).toString(),
    ts.ScriptTarget.ES2015,
    /*setParentNodes */ true
  );

  // delint it
  delint(sourceFile);
  list.sort((a, b) => b.count - a.count);
  console.log(list.slice(0, 10));
});