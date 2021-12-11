module.exports = function( content, ...data ) {
  let data_args = "";
  for( let i = 0; i < data.length; i++ ) {
    data_args += " data-" + data[i];
  }

  const slideContent = data.includes( "markdown" ) ?
    `<script type="text/template">${ content }</script>` :
    content;

  return `<section ${ data_args }>${ slideContent }</section>`;
};
