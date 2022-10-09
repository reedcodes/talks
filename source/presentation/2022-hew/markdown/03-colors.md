{%- slide "markdown" -%}
{% image "screen-color.png", "grid display of the brand colors in use for the example style guide" %}

{%- notes -%}
when the styleguide is generated, the comments from the CSS are used to create the pages. Displayed: name of pattern, description. Numbering based on weight and heirarchy. Loops through colors to output on page with information from the "colors" part of the CSS
{%- endnotes -%}
{%- endslide -%}



{%- slide -%}
<h2><code>./src/color/_index.scss</code></h2>

{%- codeblock "css" -%}{% raw %}
// University visual identity colors
//
// Colors:
// --color-primary: hsla(60, 1%, 14%, 1) - Eerie Black
// --color-secondary: hsla(44, 88%, 66%, 1) - Maize Crayola
// --color-tertiary: hsla(150, 14%, 84%, 1) - Gainsboro
// --color-background: hsla(81, 28%, 90%, 1) - Alabaster
// --color-foreground: hsla(120, 2%, 20%, 1) - Jet
//
// Weight: 1
//
// Styleguide: Color

:root {
  --color-primary: hsla(60, 1%, 14%, 1);
  --color-secondary: hsla(44, 88%, 66%, 1);
  --color-tertiary: hsla(150, 14%, 84%, 1);
  --color-background: hsla(81, 28%, 90%, 1);
  --color-foreground: hsla(120, 2%, 20%, 1);
}
{% endraw %}{%- endcodeblock -%}

{% notes "html" %}
<p>first patterns! add university or brand colors</p>
<ul>
  <li>First: name of the pattern - brand colors</li>
  <li>Second: specify colors, then list the colors - name, code, description</li>
  <li>Third: weight of the page</li>
  <li>Next: section of the styleguide, used for creating hierarchy and page URLs</li>
  <li>After comments: regular Sass or CSS declarations</li>
</ul>
{% endnotes %}
{%- endslide -%}
