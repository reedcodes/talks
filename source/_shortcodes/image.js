module.exports = function( imgClass, imgSource, imgWidth, imgHeight, imgAlt ) {
  return `<img class="${ imgClass }" data-src="images/${ imgSource }" width="${ imgWidth }" height="${ imgHeight }" alt="${ imgAlt }" />`;
};
