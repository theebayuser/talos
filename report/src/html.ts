export function escape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function tag(
  name: string,
  attrs: Record<string, string | undefined> | null,
  ...children: (string | undefined | null | false)[]
): string {
  const attrStr = attrs
    ? Object.entries(attrs)
        .filter(([, v]) => v !== undefined)
        .map(([k, v]) => ` ${k}="${escape(String(v))}"`)
        .join("")
    : "";
  const body = children.filter((c): c is string => typeof c === "string").join("");
  return `<${name}${attrStr}>${body}</${name}>`;
}

// language is passed straight to highlight.js (e.g. "rust", "lean", "toml").
export function codeBlock(body: string, language?: string): string {
  const cls = language ? `language-${language}` : "";
  return `<pre><code class="${escape(cls)}">${escape(body)}</code></pre>`;
}
