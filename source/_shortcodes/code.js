module.exports = function( content, lines ) {
  return `<pre><code data-trim data-line-numbers=${ lines }>${ content }</code></pre>`;
};
