{%- slide -%}
<h2><code>./src/link/_index.scss</code></h2>

<div class="columns equal">
  <div>
    {%- codeblock "css", "linkcss-code", "|1|3|5-6|8|10|12" -%}{% raw %}
// Link
//
// **Links** are connections between two resources...
//
// :hover - the mouse hover state
// :focus-visible - the keyboard focus state
//
// Markup: eg-link.twig
//
// Weight: 3
//
// Styleguide: Link
    {% endraw %}{%- endcodeblock -%}
  </div>

  <div>
    {%- codeblock "css", "linkcss-code" -%}{% raw %}
a {
  --color-link: var(--cobalt);
  --color-link-on: var(--purple);
  --outline-link-size: max( 2px, 0.08em );

  color: var(--color-link);

  &:hover,
  &:focus,
  &:focus-visible {
    color: var(--color-link-on);
  }

  &:focus,
  &:focus-visible {
    outline-size: var(--outline-link-size);
    outline-style: solid;
    outline-color: currentColor;
    outline-offset: var(--outline-link-size);
  }

  :focus:not(:focus-visible) { outline: none; }
}
    {% endraw %}{%- endcodeblock -%}
  </div>
</div>

<aside class="notes">
  <ul>
    <li>First: name of the pattern</li>
    <li>Second: description</li>
    <li>Third: modifiers, or variants of the pattern, e.g. classes or pseudo-classes</li>
    <li>Next: location of Twig to use as an example to show in the style guide</li>
    <li>Then: default sort of styleguide is alpha, add weight to create custom list sort</li>
    <li>Last: section of the styleguide, used for creating hierarchy and page URLs</li>
    <li>After comments: regular Sass or CSS declarations</li>
  </ul>
</aside>
{%- endslide -%}



{%- slide "auto-animate"-%}
<h2><code>./src/link/link.twig</code></h2>

{%- codeblock "twig", "linktwig-code" -%}{% raw %}
<a class="text-link {{modifier_class}}" href="{{link_url}}">{{link_text}}</a>
{% endraw %}{%- endcodeblock -%}

<aside class="notes">
  <ul>
    <li>create the Twig to use for the link pattern</li>
    <li>add any variables for use, here: the link url and the link text</li>
    <li>modifier_class is unique for kss-node but is really useful!</li>
  </ul>
</aside>
{%- endslide -%}



{%- slide "auto-animate"-%}
<h2><code>./src/link/link.twig</code></h2>

{%- codeblock "twig", "linktwig-code" -%}{% raw %}
<a class="text-link {{modifier_class}}" href="{{link_url}}">{{link_text}}</a>
{% endraw %}{%- endcodeblock -%}

<h2><code>./src/link/eg-link.twig</code></h2>
{%- codeblock "twig", "linkegtwig-code" -%}{% raw %}
{% include "@link/link.twig" with {
  link_text: "Facilisi dictum a parturient",
  link_url: "#"
} %}
{% endraw %}{%- endcodeblock -%}

<aside class="notes">
  <ul>
    <li>create the example Twig on how to use the actual Twig pattern file</li>
    <li>the style guide will know what to do with this example file, since we added it in the comments of the Sass</li>
    <li>here: passing in example values for the variables</li>
  </ul>
</aside>
{%- endslide -%}



{%- slide -%}
  {% image "kss-page", "screen-link.png", "1280", "700", "style guide page for the Link section, illustrating the description, example pattern, and code" %}
{%- endslide -%}
