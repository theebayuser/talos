export const STYLE = `
:root {
  --bg: #fbfaf7;
  --panel: #ffffff;
  --border: #e5e1d8;
  --text: #1f1d1a;
  --muted: #6b6760;
  --accent: #8b5a2b;
  --accent-soft: #f0e6d6;
  --good: #2f7a3a;
  --warn: #b07a00;
  --bad: #b22a2a;
  --info: #2a6cb2;
  --mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
}
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body {
  background: var(--bg);
  color: var(--text);
  font: 15px/1.55 -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
}
.container { max-width: 1080px; margin: 0 auto; padding: 32px 24px 80px; }
header.site {
  border-bottom: 1px solid var(--border);
  padding-bottom: 18px;
  margin-bottom: 28px;
}
header.site h1 {
  margin: 0 0 4px;
  font-size: 26px;
  letter-spacing: -0.01em;
}
header.site .meta {
  color: var(--muted);
  font-size: 13px;
}
header.site .meta code { font-family: var(--mono); }
a { color: var(--accent); text-decoration: none; }
a:hover { text-decoration: underline; }
.crumbs {
  font-size: 13px;
  color: var(--muted);
  margin-bottom: 16px;
}
h2 {
  font-size: 18px;
  margin: 28px 0 10px;
  padding-bottom: 4px;
  border-bottom: 1px solid var(--border);
}
h3 { font-size: 15px; margin: 18px 0 6px; }
table {
  border-collapse: collapse;
  width: 100%;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 6px;
  overflow: hidden;
}
th, td {
  text-align: left;
  padding: 8px 12px;
  border-bottom: 1px solid var(--border);
  font-size: 14px;
}
th { background: var(--accent-soft); font-weight: 600; }
tr:last-child td { border-bottom: none; }
td.num { text-align: right; font-variant-numeric: tabular-nums; }
td.slug { font-family: var(--mono); }
pre {
  background: #f5f1e8;
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 10px 12px;
  overflow-x: auto;
  font-family: var(--mono);
  font-size: 12.5px;
  line-height: 1.45;
}
code { font-family: var(--mono); font-size: 0.92em; }
:not(pre) > code {
  background: #f0ebdf;
  padding: 1px 5px;
  border-radius: 3px;
}
.card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 14px 16px;
  margin: 10px 0;
}
.card .head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 6px;
}
.card .head .name { font-family: var(--mono); font-weight: 600; font-size: 14px; }
.card .head .loc { color: var(--muted); font-size: 12px; font-family: var(--mono); }
.docstring { color: var(--muted); font-style: italic; margin: 4px 0 8px; white-space: pre-wrap; }
.badges { display: inline-flex; gap: 6px; flex-wrap: wrap; }
.badge {
  display: inline-block;
  padding: 1px 7px;
  border-radius: 10px;
  font-size: 11px;
  font-weight: 600;
  border: 1px solid var(--border);
  background: var(--accent-soft);
  color: var(--text);
  font-family: var(--mono);
}
.badge.good { background: #dff0d8; color: var(--good); border-color: #c7e3b8; }
.badge.warn { background: #fcefc7; color: var(--warn); border-color: #f3deaa; }
.badge.bad { background: #f4d4d4; color: var(--bad); border-color: #ecbcbc; }
.badge.info { background: #d9e8f6; color: var(--info); border-color: #b9d3ea; }
.badge.muted { background: #ece8de; color: var(--muted); }
.empty { color: var(--muted); font-style: italic; padding: 6px 0; }
details {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 8px 12px;
  margin: 8px 0;
}
details summary {
  cursor: pointer;
  font-family: var(--mono);
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
}
details summary .lang {
  color: var(--muted);
  font-size: 11px;
}
details[open] { padding-bottom: 14px; }
.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
  margin: 16px 0 24px;
}
.summary-grid .stat {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 12px 14px;
}
.summary-grid .stat .label { color: var(--muted); font-size: 12px; }
.summary-grid .stat .value { font-size: 22px; font-weight: 600; margin-top: 2px; }
.refs {
  margin: 6px 0 0;
  padding: 0;
  list-style: none;
  font-size: 13px;
}
.refs li { padding: 2px 0; font-family: var(--mono); }
footer.site {
  margin-top: 60px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
  font-size: 12px;
  color: var(--muted);
  text-align: center;
}
`;
