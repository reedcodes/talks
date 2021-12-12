{%- slide -%}
<h2><code>./src/color/_index.scss</code></h2>

<div class="columns equal">
  <div>
    {%- codeblock "css", "brandcolors-code", "|1|3-9|11|13" -%}{% raw %}
// Brand Colors
//
// Colors:
// --darkgray: rgb(37, 41, 53) - Dark Gray
// --purple: rgb(125, 59, 106) - Purple
// --cobalt: rgb(0, 121, 140) - Cobalt
// --crimson: rgb(208, 55, 17) - Crimson
// --goldenrod: rgb(246, 174, 45) - Goldenrod
// --icewhite: rgb(248, 245, 242) - Ice White
//
// Weight: 1
//
// Styleguide: Color
    {% endraw %}{%- endcodeblock -%}
  </div>

  <div>
    {%- codeblock "css", "brandcolorscss-code", "1,8|1-8" -%}{% raw %}
:root {
  --darkgray: rgb(37, 41, 53);
  --purple: rgb(125, 59, 106);
  --cobalt: rgb(0, 121, 140);
  --crimson: rgb(208, 55, 17);
  --goldenrod: rgb(246, 174, 45);
  --icewhite: rgb(248, 245, 242);
}
    {% endraw %}{%- endcodeblock -%}
  </div>
</div>

<aside class="notes">
  <ul>
    <li>First: name of the pattern - brand colors</li>
    <li>Second: specify colors, then list the colors - name, code, description</li>
    <li>Third: weight of the page</li>
    <li>Next: section of the styleguide, used for creating hierarchy and page URLs</li>
    <li>After comments: regular Sass or CSS declarations</li>
  </ul>
</aside>
{%- endslide -%}

{%- slide -%}
  {% image "kss-page", "screen-color.png", "1280", "490", "grid display of the brand colors in use for the example style guide" %}
{%- endslide -%}
