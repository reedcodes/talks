{%- slide "markdown" -%}

## Why should we use alt text?

1. accessibility
1. missing images
1. search engine optimization

{% notes %}
Remember to read what's on screen!

1. accessibility: visually impaired users, people using screen reader software -- a11y is the most important reason for alt text
1. missing images: slow internet connection, files moved or missing, users turned off images
1. SEO: should not be solely for this purpose but can provide extra context for content on the page
{% endnotes %}

{%- endslide -%}



{%- slide "markdown" -%}

### Accessibility

> All non-text content that is presented to the user has a text alternative that serves the equivalent purpose.
>
> <cite>[&#8212; Success Criterion 1.1.1 Non-text Content](https://www.w3.org/TR/WCAG22/#text-alternatives)</cite>

{% notes %}
Remember to read what's on screen!

Web Content Accessibility Guidelines (WCAG) are recommendations on making web content more accessible. Now at version 2.2.

The four principles of accessibility are POUR: perceivable, operable, understandable, and robust. Images are covered as "non-text content" and non-text content is important enough to be the first success criterion of WCAG under the Perceivable principle, meaning "Information and user interface components must be presentable to users in ways they can perceive."

People with visual disabilities using screen reader software need to be able to "perceive" the same content on a webpage as a user with no visual disabilities. This is especially important when the image conveys meaning or is complementary to other content on the page. If the image has meaning in some way, it needs alt text in order to be accessible.
{% endnotes %}

{%- endslide -%}



{%- slide "markdown" -%}

### Missing images

{% columns %}
{% column %}
{% image "broken-image.png", "" %}
{% endcolumn %}
{% column %}

1. slow connections
1. images turned off
1. removed from server
1. wonky scripts

{% endcolumn %}
{% endcolumns %}

{% notes %}
Remember to read what's on screen!

There could be a variety of reason why a web page could have missing images.
1. the user is on a slow connection and the images fail to load
1. the user could have images turned off in their browser
1. images may have been removed or reorganized on the server
1. a script could be interferring with how the page loads

This still counts as accessibility because even though the image is missing, the text alternative is available for _everyone_ to perceive, not only those people who use screen readers.
{% endnotes %}

{%- endslide -%}



{%- slide "markdown" -%}

### Search engine optimization

{% image "search-sunflower.png", "This is a screenshot of google's search for sunflower, showing a row of images before text results." %}

{% notes %}
Remember to read what's on screen!

Alt text can help a page when performing an image search -- nearly all search engines have an option to search by _images_. Having good alt text can help with these rankings. **But** accessibility is the most important priority when considering alt text.
{% endnotes %}

{%- endslide -%}
