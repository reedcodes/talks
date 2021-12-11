module.exports = function( content, lines ) {
  const linesContent = lines ? `="${ lines }"` : '';

  return `<pre><code data-trim data-line-numbers${ linesContent }>${ content }</code></pre>`;
};
