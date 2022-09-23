module.exports = function( content, type ) {
  const outputMarkdown = `Notes:\n${content}`;

  const outputHTML = `<aside class="notes">${content}</aside>`;

  const outputNotes = (type == "html") ? outputHTML : outputMarkdown;

  return outputNotes;
};
