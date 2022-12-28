export const joinInline = (s: string[]) => s.join("");
export const joinByNewLine = (s: string[]) => s.join("\n");
export const joinByDoubleNewLine = (s: string[]) => s.join("\n\n");
export const indent = (s: string, size = 2) => `${" ".repeat(size)}${s}`;
export const escapeBackticks = (s: string) => s.replace(/`/g, "\`");

export const htmlComment = (s: string) => `<!-- ${s} -->`;
export const code = (s: string) => {
  return escapeBackticks("`" + s + "`");
};

export const codeBlock = (s: string, lang = "javascript") => {
  return joinByNewLine([
    `${indent(escapeBackticks("```" + lang))}`,
    s,
    `${indent(escapeBackticks("```"))}`,
  ]);
};

export const $row = (s: string) => {
  return joinByNewLine(["", "<tr>", s, "</tr>"]);
};

export const $colDoubleNewLine = (
  s: string,
  cb?: (input: string) => string,
) => {
  return joinByDoubleNewLine(["<td>", cb?.(s) ?? s, "</td>"]);
};

export const $col = (s: string) => {
  return `<td>${s}</td>`;
};
export const $colCode = (s: string) => {
  return $colDoubleNewLine(s, code);
};
export const $colCodeBlock = (s: string) => {
  return $colDoubleNewLine(s, codeBlock);
};

export const $headerRow = (headers: string[]) => {
  const cols = joinByNewLine(headers.map($col));
  return $row(cols);
};

export const $table = (headings: string[], rows: string[]) => {
  return joinByNewLine([
    "<table>",
    $headerRow(headings),
    joinByNewLine(rows),
    "</table>",
  ]);
};