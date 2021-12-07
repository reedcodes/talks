module.exports = function( content, ...data ) {
  let data_args = "";
  for( let i = 0; i < data.length; i++ ) {
    data_args += " data-" + data[i];
  }

  return `<section ${ data_args }><script type="text/template">${ content }</script></section>`;
};
