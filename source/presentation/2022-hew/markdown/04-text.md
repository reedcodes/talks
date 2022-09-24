{%- slide -%}
<h2><code>./src/text/_index.scss</code></h2>

{%- codeblock "css" -%}{% raw %}
// Text
//
// Weight: 2
//
// Styleguide: Text
{% endraw %}{%- endcodeblock -%}

{%- notes "html" -%}
<ul>
  <li>First: name of the section</li>
  <li>Then: default sort of styleguide is alpha, add weight to create custom list sort -- text comes after "colors" in the site menu</li>
  <li>Last: kss section of the styleguide, used for creating hierarchy and page URLs</li>
</ul>
{%- endnotes -%}
{%- endslide -%}



{%- slide -%}
<h2><code>./src/text/_index.scss</code></h2>

{%- codeblock "css" -%}{% raw %}
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

{%- notes "html" -%}
use Text as parent and add sections for other patterns below it, heading and paragraphh are listed under Text
<ul>
  <li>First: name of the pattern</li>
  <li>Second: description</li>
  <li>Next: location of Twig to use as an example to show in the style guide</li>
  <li>Then: add weight to create custom list sort</li>
  <li>Last: section of the styleguide, used for creating hierarchy and page URLs</li>
</ul>
{%- endnotes -%}
{%- endslide -%}



{%- slide -%}
<p><code>./src/text/heading.twig</code></p>

{%- codeblock "twig" -%}{% raw %}
{%- set heading_level = heading_level | default(2) -%}

<h{{heading_level}} class="text-heading">
  {{heading_text}}
</h{{heading_level}}>
{% endraw %}{%- endcodeblock -%}

<p><code>./src/text/paragraph.twig</code></p>

{%- codeblock "twig" -%}{% raw %}
<p class="text-paragraph">
  {{paragraph_text}}
</p>
{% endraw %}{%- endcodeblock -%}

{%- notes "html" -%}
Create the Twig files, with the patterns for Heading and Paragraph. Most basic, attributes accept values from the files that include them
{%- endnotes -%}
{%- endslide -%}



{%- slide -%}
<p><code>./src/text/eg-heading.twig</code></p>

{%- codeblock "twig" -%}{% raw %}
{% include "@text/heading.twig" with {
  heading_text: "Taciti feugiat a sapien parturient"
} %}

{% include "@text/heading.twig" with {
  heading_level: 3,
  heading_text: "Mi venenatis mus elementum"
} %}
{% endraw %}{%- endcodeblock -%}

<p><code>./src/text/eg-paragraph.twig</code></p>

{%- codeblock "twig" -%}{% raw %}
{% include "@text/paragraph.twig" with {
  paragraph_text: "Curabitur vestibulum enim rutrum."
} %}
{% endraw %}{%- endcodeblock -%}

{%- notes "html" -%}
<ul>
  <li>Create the example pattern files, including Twig patterns.</li>
  <li>the style guide will know what to do with this example file, since we added it in the comments of the Sass</li>
  <li>here: passing in example values for the attributes</li>
</ul>
{%- endnotes -%}
{%- endslide -%}



{%- slide "markdown" -%}
{% image "screen-text.png", "style guide page for the Text.Heading section, illustrating the description, example pattern, and code" %}

{%- notes -%}
when the styleguide is generated, the comments from the CSS are used to create the pages. Displayed: name of pattern, description. Numbering based on weight and heirarchy. Loops through colors to output on page with information from the "colors" part of the CSS
{%- endnotes -%}
{%- endslide -%}
