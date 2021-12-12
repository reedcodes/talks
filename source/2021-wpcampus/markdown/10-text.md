{%- slide -%}
<h2><code>./src/text/_index.scss</code></h2>

<div class="columns equal">
  <div>
    {%- codeblock "css", "textcss-code" -%}{% raw %}
// Text
//
// Weight: 2
//
// Styleguide: Text
    {% endraw %}{%- endcodeblock -%}
  </div>

  <div>
    {%- codeblock "css", "textcss-code", "|1,11|3,13|5,15|7,17|9,19" -%}{% raw %}
// Heading
//
// Heading content defines the header of a section.
//
// Markup: eg-heading.twig
//
// Weight: 1
//
// Styleguide: Text.Heading

// Paragraph
//
// A paragraph is phrasing content one or more sentences.
//
// Markup: eg-paragraph.twig
//
// Weight: 2
//
// Styleguide: Text.Paragraph
    {% endraw %}{%- endcodeblock -%}
  </div>
</div>

<aside class="notes">
  <ul>
    <li>First: name of the pattern</li>
    <li>Second: description</li>
    <li>Next: location of Twig to use as an example to show in the style guide</li>
    <li>Then: default sort of styleguide is alpha, add weight to create custom list sort</li>
    <li>Last: section of the styleguide, used for creating hierarchy and page URLs</li>
    <li>Heading and Paragraph are nested under Text</li>
  </ul>
</aside>
{%- endslide -%}
