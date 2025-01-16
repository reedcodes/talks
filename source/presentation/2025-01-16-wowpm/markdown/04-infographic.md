{%- slide "markdown" -%}
## Infographics

Infographics are charts, tables, or illustrations that present data or information in an easy-to-scan visual form.

{% notes %}
Remember to read what's on screen!

Since infographics are by definition visual info, they are often inaccessible. There are a variety of options for providing alternative text for infographics:
1. include the content of the infographic as text on the page
1. include the content of the infographic as the image's alt text
1. include a link to the content of the infographic as a separate page, with link text as the alt text

This may involve restructuring the content to fit a narrative form, but providing alternate content is _crucial_ to being accessible to all users.
{% endnotes %}
{%- endslide -%}



{%- slide "markdown" -%}
{% columns %}
{% column %}
{% image "infographic.jpg", "" %}
{% endcolumn %}
{% column %}

`<a href="https://example.com/"><img src="infographic.jpg" alt="Read the full text content of this infographic."></a>`

{% endcolumn %}
{% endcolumns %}

{% notes %}
Remember to read what's on screen!

Here is one way to provide text content for an infographic: as a link to a separate page with the link text as the alt text.
{% endnotes %}
{%- endslide -%}
