// Minimal Lean 4 grammar registered with highlight.js at view time.
// highlight.js doesn't ship Lean, so we register a small custom language.
// Stringified verbatim and injected into a <script> tag.
export const LEAN_HLJS_REGISTER = String.raw`
hljs.registerLanguage('lean', function (hljs) {
  const KEYWORDS = {
    keyword:
      'import open namespace end section variable variables universe universes ' +
      'def theorem lemma example abbrev instance class structure inductive ' +
      'coinductive mutual where extends deriving private protected noncomputable ' +
      'partial unsafe local scoped attribute macro syntax elab notation infix ' +
      'infixl infixr prefix postfix builtin_initialize initialize axiom constant ' +
      'opaque if then else match with do let fun λ have show from suffices return ' +
      'by in for unless while continue break try catch finally cases induction ' +
      'set_option register_simp_attr export hide reducible irreducible',
    literal: 'true false none some Prop Type Sort',
    built_in:
      'Nat Int UInt8 UInt16 UInt32 UInt64 USize Float Bool String Char List Array ' +
      'Option Sum Prod Unit Empty Decidable PUnit Fin Eq Ne And Or Not Iff'
  };
  const LINE_COMMENT = hljs.COMMENT('--', '$');
  const DOC_COMMENT = {
    className: 'doctag',
    begin: /\/--/, end: /-\//,
    contains: [{ begin: /\[\[/, end: /\]\]/ }]
  };
  const BLOCK_COMMENT = hljs.COMMENT('/-', '-/', { contains: ['self'] });
  const ATTRIBUTE = {
    className: 'meta',
    begin: /@\[/, end: /\]/,
    contains: [
      { className: 'string', begin: /"/, end: /"/, contains: [{ begin: /\\./ }] }
    ]
  };
  const STRING = { className: 'string', begin: /"/, end: /"/, contains: [{ begin: /\\./ }] };
  const CHAR = { className: 'string', begin: /'(\\.|[^'])'/ };
  const NUMBER = {
    className: 'number',
    begin: /\b(0x[0-9a-fA-F]+|0b[01]+|0o[0-7]+|\d+(\.\d+)?)\b/
  };
  // qualified.Name and dotted constructors like .const, .i32
  const QUALIFIED = {
    className: 'title',
    begin: /\b[A-Z][\w']*(\.[A-Z][\w']*)*\b/
  };
  const DOT_CTOR = { className: 'symbol', begin: /\.[a-zA-Z_][\w']*/ };
  return {
    name: 'Lean',
    aliases: ['lean4'],
    keywords: KEYWORDS,
    contains: [
      DOC_COMMENT,
      BLOCK_COMMENT,
      LINE_COMMENT,
      ATTRIBUTE,
      STRING,
      CHAR,
      NUMBER,
      QUALIFIED,
      DOT_CTOR
    ]
  };
});
`;
