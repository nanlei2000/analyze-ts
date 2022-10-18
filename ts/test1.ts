export enum SyntaxKind {
  Unknown = 0,
  EndOfFileToken = 1,
  SingleLineCommentTrivia = 2,
  MultiLineCommentTrivia = 3,
  NewLineTrivia = 4,
  WhitespaceTrivia = 5,
  ShebangTrivia = 6,
  ConflictMarkerTrivia = 7,
  NumericLiteral = 8,
  BigIntLiteral = 9,
  StringLiteral = 10,
  JsxText = 11,
  JsxTextAllWhiteSpaces = 12,
  RegularExpressionLiteral = 13,
  NoSubstitutionTemplateLiteral = 14,
  TemplateHead = 15,
  TemplateMiddle = 16,
  TemplateTail = 17,
  OpenBraceToken = 18,
  CloseBraceToken = 19,
  OpenParenToken = 20,
  CloseParenToken = 21,
  OpenBracketToken = 22,
  CloseBracketToken = 23,
  DotToken = 24,
  DotDotDotToken = 25,
  SemicolonToken = 26,
  CommaToken = 27,
  QuestionDotToken = 28,
  LessThanToken = 29,
  LessThanSlashToken = 30,
  GreaterThanToken = 31,
  LessThanEqualsToken = 32,
  GreaterThanEqualsToken = 33,
  EqualsEqualsToken = 34,
  ExclamationEqualsToken = 35,
  EqualsEqualsEqualsToken = 36,
  ExclamationEqualsEqualsToken = 37,
  EqualsGreaterThanToken = 38,
  PlusToken = 39,
  MinusToken = 40,
  AsteriskToken = 41,
  AsteriskAsteriskToken = 42,
  SlashToken = 43,
  PercentToken = 44,
  PlusPlusToken = 45,
  MinusMinusToken = 46,
  LessThanLessThanToken = 47,
  GreaterThanGreaterThanToken = 48,
  GreaterThanGreaterThanGreaterThanToken = 49,
  AmpersandToken = 50,
  BarToken = 51,
  CaretToken = 52,
  ExclamationToken = 53,
  TildeToken = 54,
  AmpersandAmpersandToken = 55,
  BarBarToken = 56,
  QuestionToken = 57,
  ColonToken = 58,
  AtToken = 59,
  QuestionQuestionToken = 60,
  /** Only the JSDoc scanner produces BacktickToken. The normal scanner produces NoSubstitutionTemplateLiteral and related kinds. */
  BacktickToken = 61,
  EqualsToken = 62,
  PlusEqualsToken = 63,
  MinusEqualsToken = 64,
  AsteriskEqualsToken = 65,
  AsteriskAsteriskEqualsToken = 66,
  SlashEqualsToken = 67,
  PercentEqualsToken = 68,
  LessThanLessThanEqualsToken = 69,
  GreaterThanGreaterThanEqualsToken = 70,
  GreaterThanGreaterThanGreaterThanEqualsToken = 71,
  AmpersandEqualsToken = 72,
  BarEqualsToken = 73,
  CaretEqualsToken = 74,
  Identifier = 75,
  BreakKeyword = 76,
  CaseKeyword = 77,
  CatchKeyword = 78,
  ClassKeyword = 79,
  ConstKeyword = 80,
  ContinueKeyword = 81,
  DebuggerKeyword = 82,
  DefaultKeyword = 83,
  DeleteKeyword = 84,
  DoKeyword = 85,
  ElseKeyword = 86,
  EnumKeyword = 87,
  ExportKeyword = 88,
  ExtendsKeyword = 89,
  FalseKeyword = 90,
  FinallyKeyword = 91,
  ForKeyword = 92,
  FunctionKeyword = 93,
  IfKeyword = 94,
  ImportKeyword = 95,
  InKeyword = 96,
  InstanceOfKeyword = 97,
  NewKeyword = 98,
  NullKeyword = 99,
  ReturnKeyword = 100,
  SuperKeyword = 101,
  SwitchKeyword = 102,
  ThisKeyword = 103,
  ThrowKeyword = 104,
  TrueKeyword = 105,
  TryKeyword = 106,
  TypeOfKeyword = 107,
  VarKeyword = 108,
  VoidKeyword = 109,
  WhileKeyword = 110,
  WithKeyword = 111,
  ImplementsKeyword = 112,
  InterfaceKeyword = 113,
  LetKeyword = 114,
  PackageKeyword = 115,
  PrivateKeyword = 116,
  ProtectedKeyword = 117,
  PublicKeyword = 118,
  StaticKeyword = 119,
  YieldKeyword = 120,
  AbstractKeyword = 121,
  AsKeyword = 122,
  AssertsKeyword = 123,
  AnyKeyword = 124,
  AsyncKeyword = 125,
  AwaitKeyword = 126,
  BooleanKeyword = 127,
  ConstructorKeyword = 128,
  DeclareKeyword = 129,
  GetKeyword = 130,
  InferKeyword = 131,
  IsKeyword = 132,
  KeyOfKeyword = 133,
  ModuleKeyword = 134,
  NamespaceKeyword = 135,
  NeverKeyword = 136,
  ReadonlyKeyword = 137,
  RequireKeyword = 138,
  NumberKeyword = 139,
  ObjectKeyword = 140,
  SetKeyword = 141,
  StringKeyword = 142,
  SymbolKeyword = 143,
  TypeKeyword = 144,
  UndefinedKeyword = 145,
  UniqueKeyword = 146,
  UnknownKeyword = 147,
  FromKeyword = 148,
  GlobalKeyword = 149,
  BigIntKeyword = 150,
  OfKeyword = 151,
  QualifiedName = 152,
  ComputedPropertyName = 153,
  TypeParameter = 154,
  Parameter = 155,
  Decorator = 156,
  PropertySignature = 157,
  PropertyDeclaration = 158,
  MethodSignature = 159,
  MethodDeclaration = 160,
  Constructor = 161,
  GetAccessor = 162,
  SetAccessor = 163,
  CallSignature = 164,
  ConstructSignature = 165,
  IndexSignature = 166,
  TypePredicate = 167,
  TypeReference = 168,
  FunctionType = 169,
  ConstructorType = 170,
  TypeQuery = 171,
  TypeLiteral = 172,
  ArrayType = 173,
  TupleType = 174,
  OptionalType = 175,
  RestType = 176,
  UnionType = 177,
  IntersectionType = 178,
  ConditionalType = 179,
  InferType = 180,
  ParenthesizedType = 181,
  ThisType = 182,
  TypeOperator = 183,
  IndexedAccessType = 184,
  MappedType = 185,
  LiteralType = 186,
  ImportType = 187,
  ObjectBindingPattern = 188,
  ArrayBindingPattern = 189,
  BindingElement = 190,
  ArrayLiteralExpression = 191,
  ObjectLiteralExpression = 192,
  PropertyAccessExpression = 193,
  ElementAccessExpression = 194,
  CallExpression = 195,
  NewExpression = 196,
  TaggedTemplateExpression = 197,
  TypeAssertionExpression = 198,
  ParenthesizedExpression = 199,
  FunctionExpression = 200,
  ArrowFunction = 201,
  DeleteExpression = 202,
  TypeOfExpression = 203,
  VoidExpression = 204,
  AwaitExpression = 205,
  PrefixUnaryExpression = 206,
  PostfixUnaryExpression = 207,
  BinaryExpression = 208,
  ConditionalExpression = 209,
  TemplateExpression = 210,
  YieldExpression = 211,
  SpreadElement = 212,
  ClassExpression = 213,
  OmittedExpression = 214,
  ExpressionWithTypeArguments = 215,
  AsExpression = 216,
  NonNullExpression = 217,
  MetaProperty = 218,
  SyntheticExpression = 219,
  TemplateSpan = 220,
  SemicolonClassElement = 221,
  Block = 222,
  EmptyStatement = 223,
  VariableStatement = 224,
  ExpressionStatement = 225,
  IfStatement = 226,
  DoStatement = 227,
  WhileStatement = 228,
  ForStatement = 229,
  ForInStatement = 230,
  ForOfStatement = 231,
  ContinueStatement = 232,
  BreakStatement = 233,
  ReturnStatement = 234,
  WithStatement = 235,
  SwitchStatement = 236,
  LabeledStatement = 237,
  ThrowStatement = 238,
  TryStatement = 239,
  DebuggerStatement = 240,
  VariableDeclaration = 241,
  VariableDeclarationList = 242,
  FunctionDeclaration = 243,
  ClassDeclaration = 244,
  InterfaceDeclaration = 245,
  TypeAliasDeclaration = 246,
  EnumDeclaration = 247,
  ModuleDeclaration = 248,
  ModuleBlock = 249,
  CaseBlock = 250,
  NamespaceExportDeclaration = 251,
  ImportEqualsDeclaration = 252,
  ImportDeclaration = 253,
  ImportClause = 254,
  NamespaceImport = 255,
  NamedImports = 256,
  ImportSpecifier = 257,
  ExportAssignment = 258,
  ExportDeclaration = 259,
  NamedExports = 260,
  ExportSpecifier = 261,
  MissingDeclaration = 262,
  ExternalModuleReference = 263,
  JsxElement = 264,
  JsxSelfClosingElement = 265,
  JsxOpeningElement = 266,
  JsxClosingElement = 267,
  JsxFragment = 268,
  JsxOpeningFragment = 269,
  JsxClosingFragment = 270,
  JsxAttribute = 271,
  JsxAttributes = 272,
  JsxSpreadAttribute = 273,
  JsxExpression = 274,
  CaseClause = 275,
  DefaultClause = 276,
  HeritageClause = 277,
  CatchClause = 278,
  PropertyAssignment = 279,
  ShorthandPropertyAssignment = 280,
  SpreadAssignment = 281,
  EnumMember = 282,
  UnparsedPrologue = 283,
  UnparsedPrepend = 284,
  UnparsedText = 285,
  UnparsedInternalText = 286,
  UnparsedSyntheticReference = 287,
  SourceFile = 288,
  Bundle = 289,
  UnparsedSource = 290,
  InputFiles = 291,
  JSDocTypeExpression = 292,
  JSDocAllType = 293,
  JSDocUnknownType = 294,
  JSDocNullableType = 295,
  JSDocNonNullableType = 296,
  JSDocOptionalType = 297,
  JSDocFunctionType = 298,
  JSDocVariadicType = 299,
  JSDocNamepathType = 300,
  JSDocComment = 301,
  JSDocTypeLiteral = 302,
  JSDocSignature = 303,
  JSDocTag = 304,
  JSDocAugmentsTag = 305,
  JSDocAuthorTag = 306,
  JSDocClassTag = 307,
  JSDocCallbackTag = 308,
  JSDocEnumTag = 309,
  JSDocParameterTag = 310,
  JSDocReturnTag = 311,
  JSDocThisTag = 312,
  JSDocTypeTag = 313,
  JSDocTemplateTag = 314,
  JSDocTypedefTag = 315,
  JSDocPropertyTag = 316,
  SyntaxList = 317,
  NotEmittedStatement = 318,
  PartiallyEmittedExpression = 319,
  CommaListExpression = 320,
  MergeDeclarationMarker = 321,
  EndOfDeclarationMarker = 322,
  SyntheticReferenceExpression = 323,
  Count = 324,
  FirstAssignment = 62,
  LastAssignment = 74,
  FirstCompoundAssignment = 63,
  LastCompoundAssignment = 74,
  FirstReservedWord = 76,
  LastReservedWord = 111,
  FirstKeyword = 76,
  LastKeyword = 151,
  FirstFutureReservedWord = 112,
  LastFutureReservedWord = 120,
  FirstTypeNode = 167,
  LastTypeNode = 187,
  FirstPunctuation = 18,
  LastPunctuation = 74,
  FirstToken = 0,
  LastToken = 151,
  FirstTriviaToken = 2,
  LastTriviaToken = 7,
  FirstLiteralToken = 8,
  LastLiteralToken = 14,
  FirstTemplateToken = 14,
  LastTemplateToken = 17,
  FirstBinaryOperator = 29,
  LastBinaryOperator = 74,
  FirstStatement = 224,
  LastStatement = 240,
  FirstNode = 152,
  FirstJSDocNode = 292,
  LastJSDocNode = 316,
  FirstJSDocTagNode = 304,
  LastJSDocTagNode = 316,
}