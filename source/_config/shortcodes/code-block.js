module.exports = function( content, language, id, lines ) {
  const languageClass = language ? ` class="language-${ language }"` : '';
  const dataId = id ? ` data-id=${ id }` : '';
  const linesContent = lines ? `="${ lines }"` : '';

  return `\n\n<pre${ dataId }><code${ languageClass } data-trim data-line-numbers${ linesContent }>${ content }</code></pre>\n\n`;
};
