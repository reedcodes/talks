module.exports = function( content, ...data ) {
  let data_args = "";
  for( let i = 0; i < data.length; i++ ) {
    data_args += " data-" + data[i];
  }

  const hasMarkdown = data.includes( "markdown" );
  const script = hasMarkdown ? `<script type="text/template">` : "";
  const endscript = hasMarkdown ? `</script>` : "";

  return `<section ${ data_args }>${ script }${ content }${ endscript }</section>`;
};
