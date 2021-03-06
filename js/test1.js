"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntaxKind = void 0;
var SyntaxKind;
(function (SyntaxKind) {
    SyntaxKind[SyntaxKind["Unknown"] = 0] = "Unknown";
    SyntaxKind[SyntaxKind["EndOfFileToken"] = 1] = "EndOfFileToken";
    SyntaxKind[SyntaxKind["SingleLineCommentTrivia"] = 2] = "SingleLineCommentTrivia";
    SyntaxKind[SyntaxKind["MultiLineCommentTrivia"] = 3] = "MultiLineCommentTrivia";
    SyntaxKind[SyntaxKind["NewLineTrivia"] = 4] = "NewLineTrivia";
    SyntaxKind[SyntaxKind["WhitespaceTrivia"] = 5] = "WhitespaceTrivia";
    SyntaxKind[SyntaxKind["ShebangTrivia"] = 6] = "ShebangTrivia";
    SyntaxKind[SyntaxKind["ConflictMarkerTrivia"] = 7] = "ConflictMarkerTrivia";
    SyntaxKind[SyntaxKind["NumericLiteral"] = 8] = "NumericLiteral";
    SyntaxKind[SyntaxKind["BigIntLiteral"] = 9] = "BigIntLiteral";
    SyntaxKind[SyntaxKind["StringLiteral"] = 10] = "StringLiteral";
    SyntaxKind[SyntaxKind["JsxText"] = 11] = "JsxText";
    SyntaxKind[SyntaxKind["JsxTextAllWhiteSpaces"] = 12] = "JsxTextAllWhiteSpaces";
    SyntaxKind[SyntaxKind["RegularExpressionLiteral"] = 13] = "RegularExpressionLiteral";
    SyntaxKind[SyntaxKind["NoSubstitutionTemplateLiteral"] = 14] = "NoSubstitutionTemplateLiteral";
    SyntaxKind[SyntaxKind["TemplateHead"] = 15] = "TemplateHead";
    SyntaxKind[SyntaxKind["TemplateMiddle"] = 16] = "TemplateMiddle";
    SyntaxKind[SyntaxKind["TemplateTail"] = 17] = "TemplateTail";
    SyntaxKind[SyntaxKind["OpenBraceToken"] = 18] = "OpenBraceToken";
    SyntaxKind[SyntaxKind["CloseBraceToken"] = 19] = "CloseBraceToken";
    SyntaxKind[SyntaxKind["OpenParenToken"] = 20] = "OpenParenToken";
    SyntaxKind[SyntaxKind["CloseParenToken"] = 21] = "CloseParenToken";
    SyntaxKind[SyntaxKind["OpenBracketToken"] = 22] = "OpenBracketToken";
    SyntaxKind[SyntaxKind["CloseBracketToken"] = 23] = "CloseBracketToken";
    SyntaxKind[SyntaxKind["DotToken"] = 24] = "DotToken";
    SyntaxKind[SyntaxKind["DotDotDotToken"] = 25] = "DotDotDotToken";
    SyntaxKind[SyntaxKind["SemicolonToken"] = 26] = "SemicolonToken";
    SyntaxKind[SyntaxKind["CommaToken"] = 27] = "CommaToken";
    SyntaxKind[SyntaxKind["QuestionDotToken"] = 28] = "QuestionDotToken";
    SyntaxKind[SyntaxKind["LessThanToken"] = 29] = "LessThanToken";
    SyntaxKind[SyntaxKind["LessThanSlashToken"] = 30] = "LessThanSlashToken";
    SyntaxKind[SyntaxKind["GreaterThanToken"] = 31] = "GreaterThanToken";
    SyntaxKind[SyntaxKind["LessThanEqualsToken"] = 32] = "LessThanEqualsToken";
    SyntaxKind[SyntaxKind["GreaterThanEqualsToken"] = 33] = "GreaterThanEqualsToken";
    SyntaxKind[SyntaxKind["EqualsEqualsToken"] = 34] = "EqualsEqualsToken";
    SyntaxKind[SyntaxKind["ExclamationEqualsToken"] = 35] = "ExclamationEqualsToken";
    SyntaxKind[SyntaxKind["EqualsEqualsEqualsToken"] = 36] = "EqualsEqualsEqualsToken";
    SyntaxKind[SyntaxKind["ExclamationEqualsEqualsToken"] = 37] = "ExclamationEqualsEqualsToken";
    SyntaxKind[SyntaxKind["EqualsGreaterThanToken"] = 38] = "EqualsGreaterThanToken";
    SyntaxKind[SyntaxKind["PlusToken"] = 39] = "PlusToken";
    SyntaxKind[SyntaxKind["MinusToken"] = 40] = "MinusToken";
    SyntaxKind[SyntaxKind["AsteriskToken"] = 41] = "AsteriskToken";
    SyntaxKind[SyntaxKind["AsteriskAsteriskToken"] = 42] = "AsteriskAsteriskToken";
    SyntaxKind[SyntaxKind["SlashToken"] = 43] = "SlashToken";
    SyntaxKind[SyntaxKind["PercentToken"] = 44] = "PercentToken";
    SyntaxKind[SyntaxKind["PlusPlusToken"] = 45] = "PlusPlusToken";
    SyntaxKind[SyntaxKind["MinusMinusToken"] = 46] = "MinusMinusToken";
    SyntaxKind[SyntaxKind["LessThanLessThanToken"] = 47] = "LessThanLessThanToken";
    SyntaxKind[SyntaxKind["GreaterThanGreaterThanToken"] = 48] = "GreaterThanGreaterThanToken";
    SyntaxKind[SyntaxKind["GreaterThanGreaterThanGreaterThanToken"] = 49] = "GreaterThanGreaterThanGreaterThanToken";
    SyntaxKind[SyntaxKind["AmpersandToken"] = 50] = "AmpersandToken";
    SyntaxKind[SyntaxKind["BarToken"] = 51] = "BarToken";
    SyntaxKind[SyntaxKind["CaretToken"] = 52] = "CaretToken";
    SyntaxKind[SyntaxKind["ExclamationToken"] = 53] = "ExclamationToken";
    SyntaxKind[SyntaxKind["TildeToken"] = 54] = "TildeToken";
    SyntaxKind[SyntaxKind["AmpersandAmpersandToken"] = 55] = "AmpersandAmpersandToken";
    SyntaxKind[SyntaxKind["BarBarToken"] = 56] = "BarBarToken";
    SyntaxKind[SyntaxKind["QuestionToken"] = 57] = "QuestionToken";
    SyntaxKind[SyntaxKind["ColonToken"] = 58] = "ColonToken";
    SyntaxKind[SyntaxKind["AtToken"] = 59] = "AtToken";
    SyntaxKind[SyntaxKind["QuestionQuestionToken"] = 60] = "QuestionQuestionToken";
    /** Only the JSDoc scanner produces BacktickToken. The normal scanner produces NoSubstitutionTemplateLiteral and related kinds. */
    SyntaxKind[SyntaxKind["BacktickToken"] = 61] = "BacktickToken";
    SyntaxKind[SyntaxKind["EqualsToken"] = 62] = "EqualsToken";
    SyntaxKind[SyntaxKind["PlusEqualsToken"] = 63] = "PlusEqualsToken";
    SyntaxKind[SyntaxKind["MinusEqualsToken"] = 64] = "MinusEqualsToken";
    SyntaxKind[SyntaxKind["AsteriskEqualsToken"] = 65] = "AsteriskEqualsToken";
    SyntaxKind[SyntaxKind["AsteriskAsteriskEqualsToken"] = 66] = "AsteriskAsteriskEqualsToken";
    SyntaxKind[SyntaxKind["SlashEqualsToken"] = 67] = "SlashEqualsToken";
    SyntaxKind[SyntaxKind["PercentEqualsToken"] = 68] = "PercentEqualsToken";
    SyntaxKind[SyntaxKind["LessThanLessThanEqualsToken"] = 69] = "LessThanLessThanEqualsToken";
    SyntaxKind[SyntaxKind["GreaterThanGreaterThanEqualsToken"] = 70] = "GreaterThanGreaterThanEqualsToken";
    SyntaxKind[SyntaxKind["GreaterThanGreaterThanGreaterThanEqualsToken"] = 71] = "GreaterThanGreaterThanGreaterThanEqualsToken";
    SyntaxKind[SyntaxKind["AmpersandEqualsToken"] = 72] = "AmpersandEqualsToken";
    SyntaxKind[SyntaxKind["BarEqualsToken"] = 73] = "BarEqualsToken";
    SyntaxKind[SyntaxKind["CaretEqualsToken"] = 74] = "CaretEqualsToken";
    SyntaxKind[SyntaxKind["Identifier"] = 75] = "Identifier";
    SyntaxKind[SyntaxKind["BreakKeyword"] = 76] = "BreakKeyword";
    SyntaxKind[SyntaxKind["CaseKeyword"] = 77] = "CaseKeyword";
    SyntaxKind[SyntaxKind["CatchKeyword"] = 78] = "CatchKeyword";
    SyntaxKind[SyntaxKind["ClassKeyword"] = 79] = "ClassKeyword";
    SyntaxKind[SyntaxKind["ConstKeyword"] = 80] = "ConstKeyword";
    SyntaxKind[SyntaxKind["ContinueKeyword"] = 81] = "ContinueKeyword";
    SyntaxKind[SyntaxKind["DebuggerKeyword"] = 82] = "DebuggerKeyword";
    SyntaxKind[SyntaxKind["DefaultKeyword"] = 83] = "DefaultKeyword";
    SyntaxKind[SyntaxKind["DeleteKeyword"] = 84] = "DeleteKeyword";
    SyntaxKind[SyntaxKind["DoKeyword"] = 85] = "DoKeyword";
    SyntaxKind[SyntaxKind["ElseKeyword"] = 86] = "ElseKeyword";
    SyntaxKind[SyntaxKind["EnumKeyword"] = 87] = "EnumKeyword";
    SyntaxKind[SyntaxKind["ExportKeyword"] = 88] = "ExportKeyword";
    SyntaxKind[SyntaxKind["ExtendsKeyword"] = 89] = "ExtendsKeyword";
    SyntaxKind[SyntaxKind["FalseKeyword"] = 90] = "FalseKeyword";
    SyntaxKind[SyntaxKind["FinallyKeyword"] = 91] = "FinallyKeyword";
    SyntaxKind[SyntaxKind["ForKeyword"] = 92] = "ForKeyword";
    SyntaxKind[SyntaxKind["FunctionKeyword"] = 93] = "FunctionKeyword";
    SyntaxKind[SyntaxKind["IfKeyword"] = 94] = "IfKeyword";
    SyntaxKind[SyntaxKind["ImportKeyword"] = 95] = "ImportKeyword";
    SyntaxKind[SyntaxKind["InKeyword"] = 96] = "InKeyword";
    SyntaxKind[SyntaxKind["InstanceOfKeyword"] = 97] = "InstanceOfKeyword";
    SyntaxKind[SyntaxKind["NewKeyword"] = 98] = "NewKeyword";
    SyntaxKind[SyntaxKind["NullKeyword"] = 99] = "NullKeyword";
    SyntaxKind[SyntaxKind["ReturnKeyword"] = 100] = "ReturnKeyword";
    SyntaxKind[SyntaxKind["SuperKeyword"] = 101] = "SuperKeyword";
    SyntaxKind[SyntaxKind["SwitchKeyword"] = 102] = "SwitchKeyword";
    SyntaxKind[SyntaxKind["ThisKeyword"] = 103] = "ThisKeyword";
    SyntaxKind[SyntaxKind["ThrowKeyword"] = 104] = "ThrowKeyword";
    SyntaxKind[SyntaxKind["TrueKeyword"] = 105] = "TrueKeyword";
    SyntaxKind[SyntaxKind["TryKeyword"] = 106] = "TryKeyword";
    SyntaxKind[SyntaxKind["TypeOfKeyword"] = 107] = "TypeOfKeyword";
    SyntaxKind[SyntaxKind["VarKeyword"] = 108] = "VarKeyword";
    SyntaxKind[SyntaxKind["VoidKeyword"] = 109] = "VoidKeyword";
    SyntaxKind[SyntaxKind["WhileKeyword"] = 110] = "WhileKeyword";
    SyntaxKind[SyntaxKind["WithKeyword"] = 111] = "WithKeyword";
    SyntaxKind[SyntaxKind["ImplementsKeyword"] = 112] = "ImplementsKeyword";
    SyntaxKind[SyntaxKind["InterfaceKeyword"] = 113] = "InterfaceKeyword";
    SyntaxKind[SyntaxKind["LetKeyword"] = 114] = "LetKeyword";
    SyntaxKind[SyntaxKind["PackageKeyword"] = 115] = "PackageKeyword";
    SyntaxKind[SyntaxKind["PrivateKeyword"] = 116] = "PrivateKeyword";
    SyntaxKind[SyntaxKind["ProtectedKeyword"] = 117] = "ProtectedKeyword";
    SyntaxKind[SyntaxKind["PublicKeyword"] = 118] = "PublicKeyword";
    SyntaxKind[SyntaxKind["StaticKeyword"] = 119] = "StaticKeyword";
    SyntaxKind[SyntaxKind["YieldKeyword"] = 120] = "YieldKeyword";
    SyntaxKind[SyntaxKind["AbstractKeyword"] = 121] = "AbstractKeyword";
    SyntaxKind[SyntaxKind["AsKeyword"] = 122] = "AsKeyword";
    SyntaxKind[SyntaxKind["AssertsKeyword"] = 123] = "AssertsKeyword";
    SyntaxKind[SyntaxKind["AnyKeyword"] = 124] = "AnyKeyword";
    SyntaxKind[SyntaxKind["AsyncKeyword"] = 125] = "AsyncKeyword";
    SyntaxKind[SyntaxKind["AwaitKeyword"] = 126] = "AwaitKeyword";
    SyntaxKind[SyntaxKind["BooleanKeyword"] = 127] = "BooleanKeyword";
    SyntaxKind[SyntaxKind["ConstructorKeyword"] = 128] = "ConstructorKeyword";
    SyntaxKind[SyntaxKind["DeclareKeyword"] = 129] = "DeclareKeyword";
    SyntaxKind[SyntaxKind["GetKeyword"] = 130] = "GetKeyword";
    SyntaxKind[SyntaxKind["InferKeyword"] = 131] = "InferKeyword";
    SyntaxKind[SyntaxKind["IsKeyword"] = 132] = "IsKeyword";
    SyntaxKind[SyntaxKind["KeyOfKeyword"] = 133] = "KeyOfKeyword";
    SyntaxKind[SyntaxKind["ModuleKeyword"] = 134] = "ModuleKeyword";
    SyntaxKind[SyntaxKind["NamespaceKeyword"] = 135] = "NamespaceKeyword";
    SyntaxKind[SyntaxKind["NeverKeyword"] = 136] = "NeverKeyword";
    SyntaxKind[SyntaxKind["ReadonlyKeyword"] = 137] = "ReadonlyKeyword";
    SyntaxKind[SyntaxKind["RequireKeyword"] = 138] = "RequireKeyword";
    SyntaxKind[SyntaxKind["NumberKeyword"] = 139] = "NumberKeyword";
    SyntaxKind[SyntaxKind["ObjectKeyword"] = 140] = "ObjectKeyword";
    SyntaxKind[SyntaxKind["SetKeyword"] = 141] = "SetKeyword";
    SyntaxKind[SyntaxKind["StringKeyword"] = 142] = "StringKeyword";
    SyntaxKind[SyntaxKind["SymbolKeyword"] = 143] = "SymbolKeyword";
    SyntaxKind[SyntaxKind["TypeKeyword"] = 144] = "TypeKeyword";
    SyntaxKind[SyntaxKind["UndefinedKeyword"] = 145] = "UndefinedKeyword";
    SyntaxKind[SyntaxKind["UniqueKeyword"] = 146] = "UniqueKeyword";
    SyntaxKind[SyntaxKind["UnknownKeyword"] = 147] = "UnknownKeyword";
    SyntaxKind[SyntaxKind["FromKeyword"] = 148] = "FromKeyword";
    SyntaxKind[SyntaxKind["GlobalKeyword"] = 149] = "GlobalKeyword";
    SyntaxKind[SyntaxKind["BigIntKeyword"] = 150] = "BigIntKeyword";
    SyntaxKind[SyntaxKind["OfKeyword"] = 151] = "OfKeyword";
    SyntaxKind[SyntaxKind["QualifiedName"] = 152] = "QualifiedName";
    SyntaxKind[SyntaxKind["ComputedPropertyName"] = 153] = "ComputedPropertyName";
    SyntaxKind[SyntaxKind["TypeParameter"] = 154] = "TypeParameter";
    SyntaxKind[SyntaxKind["Parameter"] = 155] = "Parameter";
    SyntaxKind[SyntaxKind["Decorator"] = 156] = "Decorator";
    SyntaxKind[SyntaxKind["PropertySignature"] = 157] = "PropertySignature";
    SyntaxKind[SyntaxKind["PropertyDeclaration"] = 158] = "PropertyDeclaration";
    SyntaxKind[SyntaxKind["MethodSignature"] = 159] = "MethodSignature";
    SyntaxKind[SyntaxKind["MethodDeclaration"] = 160] = "MethodDeclaration";
    SyntaxKind[SyntaxKind["Constructor"] = 161] = "Constructor";
    SyntaxKind[SyntaxKind["GetAccessor"] = 162] = "GetAccessor";
    SyntaxKind[SyntaxKind["SetAccessor"] = 163] = "SetAccessor";
    SyntaxKind[SyntaxKind["CallSignature"] = 164] = "CallSignature";
    SyntaxKind[SyntaxKind["ConstructSignature"] = 165] = "ConstructSignature";
    SyntaxKind[SyntaxKind["IndexSignature"] = 166] = "IndexSignature";
    SyntaxKind[SyntaxKind["TypePredicate"] = 167] = "TypePredicate";
    SyntaxKind[SyntaxKind["TypeReference"] = 168] = "TypeReference";
    SyntaxKind[SyntaxKind["FunctionType"] = 169] = "FunctionType";
    SyntaxKind[SyntaxKind["ConstructorType"] = 170] = "ConstructorType";
    SyntaxKind[SyntaxKind["TypeQuery"] = 171] = "TypeQuery";
    SyntaxKind[SyntaxKind["TypeLiteral"] = 172] = "TypeLiteral";
    SyntaxKind[SyntaxKind["ArrayType"] = 173] = "ArrayType";
    SyntaxKind[SyntaxKind["TupleType"] = 174] = "TupleType";
    SyntaxKind[SyntaxKind["OptionalType"] = 175] = "OptionalType";
    SyntaxKind[SyntaxKind["RestType"] = 176] = "RestType";
    SyntaxKind[SyntaxKind["UnionType"] = 177] = "UnionType";
    SyntaxKind[SyntaxKind["IntersectionType"] = 178] = "IntersectionType";
    SyntaxKind[SyntaxKind["ConditionalType"] = 179] = "ConditionalType";
    SyntaxKind[SyntaxKind["InferType"] = 180] = "InferType";
    SyntaxKind[SyntaxKind["ParenthesizedType"] = 181] = "ParenthesizedType";
    SyntaxKind[SyntaxKind["ThisType"] = 182] = "ThisType";
    SyntaxKind[SyntaxKind["TypeOperator"] = 183] = "TypeOperator";
    SyntaxKind[SyntaxKind["IndexedAccessType"] = 184] = "IndexedAccessType";
    SyntaxKind[SyntaxKind["MappedType"] = 185] = "MappedType";
    SyntaxKind[SyntaxKind["LiteralType"] = 186] = "LiteralType";
    SyntaxKind[SyntaxKind["ImportType"] = 187] = "ImportType";
    SyntaxKind[SyntaxKind["ObjectBindingPattern"] = 188] = "ObjectBindingPattern";
    SyntaxKind[SyntaxKind["ArrayBindingPattern"] = 189] = "ArrayBindingPattern";
    SyntaxKind[SyntaxKind["BindingElement"] = 190] = "BindingElement";
    SyntaxKind[SyntaxKind["ArrayLiteralExpression"] = 191] = "ArrayLiteralExpression";
    SyntaxKind[SyntaxKind["ObjectLiteralExpression"] = 192] = "ObjectLiteralExpression";
    SyntaxKind[SyntaxKind["PropertyAccessExpression"] = 193] = "PropertyAccessExpression";
    SyntaxKind[SyntaxKind["ElementAccessExpression"] = 194] = "ElementAccessExpression";
    SyntaxKind[SyntaxKind["CallExpression"] = 195] = "CallExpression";
    SyntaxKind[SyntaxKind["NewExpression"] = 196] = "NewExpression";
    SyntaxKind[SyntaxKind["TaggedTemplateExpression"] = 197] = "TaggedTemplateExpression";
    SyntaxKind[SyntaxKind["TypeAssertionExpression"] = 198] = "TypeAssertionExpression";
    SyntaxKind[SyntaxKind["ParenthesizedExpression"] = 199] = "ParenthesizedExpression";
    SyntaxKind[SyntaxKind["FunctionExpression"] = 200] = "FunctionExpression";
    SyntaxKind[SyntaxKind["ArrowFunction"] = 201] = "ArrowFunction";
    SyntaxKind[SyntaxKind["DeleteExpression"] = 202] = "DeleteExpression";
    SyntaxKind[SyntaxKind["TypeOfExpression"] = 203] = "TypeOfExpression";
    SyntaxKind[SyntaxKind["VoidExpression"] = 204] = "VoidExpression";
    SyntaxKind[SyntaxKind["AwaitExpression"] = 205] = "AwaitExpression";
    SyntaxKind[SyntaxKind["PrefixUnaryExpression"] = 206] = "PrefixUnaryExpression";
    SyntaxKind[SyntaxKind["PostfixUnaryExpression"] = 207] = "PostfixUnaryExpression";
    SyntaxKind[SyntaxKind["BinaryExpression"] = 208] = "BinaryExpression";
    SyntaxKind[SyntaxKind["ConditionalExpression"] = 209] = "ConditionalExpression";
    SyntaxKind[SyntaxKind["TemplateExpression"] = 210] = "TemplateExpression";
    SyntaxKind[SyntaxKind["YieldExpression"] = 211] = "YieldExpression";
    SyntaxKind[SyntaxKind["SpreadElement"] = 212] = "SpreadElement";
    SyntaxKind[SyntaxKind["ClassExpression"] = 213] = "ClassExpression";
    SyntaxKind[SyntaxKind["OmittedExpression"] = 214] = "OmittedExpression";
    SyntaxKind[SyntaxKind["ExpressionWithTypeArguments"] = 215] = "ExpressionWithTypeArguments";
    SyntaxKind[SyntaxKind["AsExpression"] = 216] = "AsExpression";
    SyntaxKind[SyntaxKind["NonNullExpression"] = 217] = "NonNullExpression";
    SyntaxKind[SyntaxKind["MetaProperty"] = 218] = "MetaProperty";
    SyntaxKind[SyntaxKind["SyntheticExpression"] = 219] = "SyntheticExpression";
    SyntaxKind[SyntaxKind["TemplateSpan"] = 220] = "TemplateSpan";
    SyntaxKind[SyntaxKind["SemicolonClassElement"] = 221] = "SemicolonClassElement";
    SyntaxKind[SyntaxKind["Block"] = 222] = "Block";
    SyntaxKind[SyntaxKind["EmptyStatement"] = 223] = "EmptyStatement";
    SyntaxKind[SyntaxKind["VariableStatement"] = 224] = "VariableStatement";
    SyntaxKind[SyntaxKind["ExpressionStatement"] = 225] = "ExpressionStatement";
    SyntaxKind[SyntaxKind["IfStatement"] = 226] = "IfStatement";
    SyntaxKind[SyntaxKind["DoStatement"] = 227] = "DoStatement";
    SyntaxKind[SyntaxKind["WhileStatement"] = 228] = "WhileStatement";
    SyntaxKind[SyntaxKind["ForStatement"] = 229] = "ForStatement";
    SyntaxKind[SyntaxKind["ForInStatement"] = 230] = "ForInStatement";
    SyntaxKind[SyntaxKind["ForOfStatement"] = 231] = "ForOfStatement";
    SyntaxKind[SyntaxKind["ContinueStatement"] = 232] = "ContinueStatement";
    SyntaxKind[SyntaxKind["BreakStatement"] = 233] = "BreakStatement";
    SyntaxKind[SyntaxKind["ReturnStatement"] = 234] = "ReturnStatement";
    SyntaxKind[SyntaxKind["WithStatement"] = 235] = "WithStatement";
    SyntaxKind[SyntaxKind["SwitchStatement"] = 236] = "SwitchStatement";
    SyntaxKind[SyntaxKind["LabeledStatement"] = 237] = "LabeledStatement";
    SyntaxKind[SyntaxKind["ThrowStatement"] = 238] = "ThrowStatement";
    SyntaxKind[SyntaxKind["TryStatement"] = 239] = "TryStatement";
    SyntaxKind[SyntaxKind["DebuggerStatement"] = 240] = "DebuggerStatement";
    SyntaxKind[SyntaxKind["VariableDeclaration"] = 241] = "VariableDeclaration";
    SyntaxKind[SyntaxKind["VariableDeclarationList"] = 242] = "VariableDeclarationList";
    SyntaxKind[SyntaxKind["FunctionDeclaration"] = 243] = "FunctionDeclaration";
    SyntaxKind[SyntaxKind["ClassDeclaration"] = 244] = "ClassDeclaration";
    SyntaxKind[SyntaxKind["InterfaceDeclaration"] = 245] = "InterfaceDeclaration";
    SyntaxKind[SyntaxKind["TypeAliasDeclaration"] = 246] = "TypeAliasDeclaration";
    SyntaxKind[SyntaxKind["EnumDeclaration"] = 247] = "EnumDeclaration";
    SyntaxKind[SyntaxKind["ModuleDeclaration"] = 248] = "ModuleDeclaration";
    SyntaxKind[SyntaxKind["ModuleBlock"] = 249] = "ModuleBlock";
    SyntaxKind[SyntaxKind["CaseBlock"] = 250] = "CaseBlock";
    SyntaxKind[SyntaxKind["NamespaceExportDeclaration"] = 251] = "NamespaceExportDeclaration";
    SyntaxKind[SyntaxKind["ImportEqualsDeclaration"] = 252] = "ImportEqualsDeclaration";
    SyntaxKind[SyntaxKind["ImportDeclaration"] = 253] = "ImportDeclaration";
    SyntaxKind[SyntaxKind["ImportClause"] = 254] = "ImportClause";
    SyntaxKind[SyntaxKind["NamespaceImport"] = 255] = "NamespaceImport";
    SyntaxKind[SyntaxKind["NamedImports"] = 256] = "NamedImports";
    SyntaxKind[SyntaxKind["ImportSpecifier"] = 257] = "ImportSpecifier";
    SyntaxKind[SyntaxKind["ExportAssignment"] = 258] = "ExportAssignment";
    SyntaxKind[SyntaxKind["ExportDeclaration"] = 259] = "ExportDeclaration";
    SyntaxKind[SyntaxKind["NamedExports"] = 260] = "NamedExports";
    SyntaxKind[SyntaxKind["ExportSpecifier"] = 261] = "ExportSpecifier";
    SyntaxKind[SyntaxKind["MissingDeclaration"] = 262] = "MissingDeclaration";
    SyntaxKind[SyntaxKind["ExternalModuleReference"] = 263] = "ExternalModuleReference";
    SyntaxKind[SyntaxKind["JsxElement"] = 264] = "JsxElement";
    SyntaxKind[SyntaxKind["JsxSelfClosingElement"] = 265] = "JsxSelfClosingElement";
    SyntaxKind[SyntaxKind["JsxOpeningElement"] = 266] = "JsxOpeningElement";
    SyntaxKind[SyntaxKind["JsxClosingElement"] = 267] = "JsxClosingElement";
    SyntaxKind[SyntaxKind["JsxFragment"] = 268] = "JsxFragment";
    SyntaxKind[SyntaxKind["JsxOpeningFragment"] = 269] = "JsxOpeningFragment";
    SyntaxKind[SyntaxKind["JsxClosingFragment"] = 270] = "JsxClosingFragment";
    SyntaxKind[SyntaxKind["JsxAttribute"] = 271] = "JsxAttribute";
    SyntaxKind[SyntaxKind["JsxAttributes"] = 272] = "JsxAttributes";
    SyntaxKind[SyntaxKind["JsxSpreadAttribute"] = 273] = "JsxSpreadAttribute";
    SyntaxKind[SyntaxKind["JsxExpression"] = 274] = "JsxExpression";
    SyntaxKind[SyntaxKind["CaseClause"] = 275] = "CaseClause";
    SyntaxKind[SyntaxKind["DefaultClause"] = 276] = "DefaultClause";
    SyntaxKind[SyntaxKind["HeritageClause"] = 277] = "HeritageClause";
    SyntaxKind[SyntaxKind["CatchClause"] = 278] = "CatchClause";
    SyntaxKind[SyntaxKind["PropertyAssignment"] = 279] = "PropertyAssignment";
    SyntaxKind[SyntaxKind["ShorthandPropertyAssignment"] = 280] = "ShorthandPropertyAssignment";
    SyntaxKind[SyntaxKind["SpreadAssignment"] = 281] = "SpreadAssignment";
    SyntaxKind[SyntaxKind["EnumMember"] = 282] = "EnumMember";
    SyntaxKind[SyntaxKind["UnparsedPrologue"] = 283] = "UnparsedPrologue";
    SyntaxKind[SyntaxKind["UnparsedPrepend"] = 284] = "UnparsedPrepend";
    SyntaxKind[SyntaxKind["UnparsedText"] = 285] = "UnparsedText";
    SyntaxKind[SyntaxKind["UnparsedInternalText"] = 286] = "UnparsedInternalText";
    SyntaxKind[SyntaxKind["UnparsedSyntheticReference"] = 287] = "UnparsedSyntheticReference";
    SyntaxKind[SyntaxKind["SourceFile"] = 288] = "SourceFile";
    SyntaxKind[SyntaxKind["Bundle"] = 289] = "Bundle";
    SyntaxKind[SyntaxKind["UnparsedSource"] = 290] = "UnparsedSource";
    SyntaxKind[SyntaxKind["InputFiles"] = 291] = "InputFiles";
    SyntaxKind[SyntaxKind["JSDocTypeExpression"] = 292] = "JSDocTypeExpression";
    SyntaxKind[SyntaxKind["JSDocAllType"] = 293] = "JSDocAllType";
    SyntaxKind[SyntaxKind["JSDocUnknownType"] = 294] = "JSDocUnknownType";
    SyntaxKind[SyntaxKind["JSDocNullableType"] = 295] = "JSDocNullableType";
    SyntaxKind[SyntaxKind["JSDocNonNullableType"] = 296] = "JSDocNonNullableType";
    SyntaxKind[SyntaxKind["JSDocOptionalType"] = 297] = "JSDocOptionalType";
    SyntaxKind[SyntaxKind["JSDocFunctionType"] = 298] = "JSDocFunctionType";
    SyntaxKind[SyntaxKind["JSDocVariadicType"] = 299] = "JSDocVariadicType";
    SyntaxKind[SyntaxKind["JSDocNamepathType"] = 300] = "JSDocNamepathType";
    SyntaxKind[SyntaxKind["JSDocComment"] = 301] = "JSDocComment";
    SyntaxKind[SyntaxKind["JSDocTypeLiteral"] = 302] = "JSDocTypeLiteral";
    SyntaxKind[SyntaxKind["JSDocSignature"] = 303] = "JSDocSignature";
    SyntaxKind[SyntaxKind["JSDocTag"] = 304] = "JSDocTag";
    SyntaxKind[SyntaxKind["JSDocAugmentsTag"] = 305] = "JSDocAugmentsTag";
    SyntaxKind[SyntaxKind["JSDocAuthorTag"] = 306] = "JSDocAuthorTag";
    SyntaxKind[SyntaxKind["JSDocClassTag"] = 307] = "JSDocClassTag";
    SyntaxKind[SyntaxKind["JSDocCallbackTag"] = 308] = "JSDocCallbackTag";
    SyntaxKind[SyntaxKind["JSDocEnumTag"] = 309] = "JSDocEnumTag";
    SyntaxKind[SyntaxKind["JSDocParameterTag"] = 310] = "JSDocParameterTag";
    SyntaxKind[SyntaxKind["JSDocReturnTag"] = 311] = "JSDocReturnTag";
    SyntaxKind[SyntaxKind["JSDocThisTag"] = 312] = "JSDocThisTag";
    SyntaxKind[SyntaxKind["JSDocTypeTag"] = 313] = "JSDocTypeTag";
    SyntaxKind[SyntaxKind["JSDocTemplateTag"] = 314] = "JSDocTemplateTag";
    SyntaxKind[SyntaxKind["JSDocTypedefTag"] = 315] = "JSDocTypedefTag";
    SyntaxKind[SyntaxKind["JSDocPropertyTag"] = 316] = "JSDocPropertyTag";
    SyntaxKind[SyntaxKind["SyntaxList"] = 317] = "SyntaxList";
    SyntaxKind[SyntaxKind["NotEmittedStatement"] = 318] = "NotEmittedStatement";
    SyntaxKind[SyntaxKind["PartiallyEmittedExpression"] = 319] = "PartiallyEmittedExpression";
    SyntaxKind[SyntaxKind["CommaListExpression"] = 320] = "CommaListExpression";
    SyntaxKind[SyntaxKind["MergeDeclarationMarker"] = 321] = "MergeDeclarationMarker";
    SyntaxKind[SyntaxKind["EndOfDeclarationMarker"] = 322] = "EndOfDeclarationMarker";
    SyntaxKind[SyntaxKind["SyntheticReferenceExpression"] = 323] = "SyntheticReferenceExpression";
    SyntaxKind[SyntaxKind["Count"] = 324] = "Count";
    SyntaxKind[SyntaxKind["FirstAssignment"] = 62] = "FirstAssignment";
    SyntaxKind[SyntaxKind["LastAssignment"] = 74] = "LastAssignment";
    SyntaxKind[SyntaxKind["FirstCompoundAssignment"] = 63] = "FirstCompoundAssignment";
    SyntaxKind[SyntaxKind["LastCompoundAssignment"] = 74] = "LastCompoundAssignment";
    SyntaxKind[SyntaxKind["FirstReservedWord"] = 76] = "FirstReservedWord";
    SyntaxKind[SyntaxKind["LastReservedWord"] = 111] = "LastReservedWord";
    SyntaxKind[SyntaxKind["FirstKeyword"] = 76] = "FirstKeyword";
    SyntaxKind[SyntaxKind["LastKeyword"] = 151] = "LastKeyword";
    SyntaxKind[SyntaxKind["FirstFutureReservedWord"] = 112] = "FirstFutureReservedWord";
    SyntaxKind[SyntaxKind["LastFutureReservedWord"] = 120] = "LastFutureReservedWord";
    SyntaxKind[SyntaxKind["FirstTypeNode"] = 167] = "FirstTypeNode";
    SyntaxKind[SyntaxKind["LastTypeNode"] = 187] = "LastTypeNode";
    SyntaxKind[SyntaxKind["FirstPunctuation"] = 18] = "FirstPunctuation";
    SyntaxKind[SyntaxKind["LastPunctuation"] = 74] = "LastPunctuation";
    SyntaxKind[SyntaxKind["FirstToken"] = 0] = "FirstToken";
    SyntaxKind[SyntaxKind["LastToken"] = 151] = "LastToken";
    SyntaxKind[SyntaxKind["FirstTriviaToken"] = 2] = "FirstTriviaToken";
    SyntaxKind[SyntaxKind["LastTriviaToken"] = 7] = "LastTriviaToken";
    SyntaxKind[SyntaxKind["FirstLiteralToken"] = 8] = "FirstLiteralToken";
    SyntaxKind[SyntaxKind["LastLiteralToken"] = 14] = "LastLiteralToken";
    SyntaxKind[SyntaxKind["FirstTemplateToken"] = 14] = "FirstTemplateToken";
    SyntaxKind[SyntaxKind["LastTemplateToken"] = 17] = "LastTemplateToken";
    SyntaxKind[SyntaxKind["FirstBinaryOperator"] = 29] = "FirstBinaryOperator";
    SyntaxKind[SyntaxKind["LastBinaryOperator"] = 74] = "LastBinaryOperator";
    SyntaxKind[SyntaxKind["FirstStatement"] = 224] = "FirstStatement";
    SyntaxKind[SyntaxKind["LastStatement"] = 240] = "LastStatement";
    SyntaxKind[SyntaxKind["FirstNode"] = 152] = "FirstNode";
    SyntaxKind[SyntaxKind["FirstJSDocNode"] = 292] = "FirstJSDocNode";
    SyntaxKind[SyntaxKind["LastJSDocNode"] = 316] = "LastJSDocNode";
    SyntaxKind[SyntaxKind["FirstJSDocTagNode"] = 304] = "FirstJSDocTagNode";
    SyntaxKind[SyntaxKind["LastJSDocTagNode"] = 316] = "LastJSDocTagNode";
})(SyntaxKind = exports.SyntaxKind || (exports.SyntaxKind = {}));
