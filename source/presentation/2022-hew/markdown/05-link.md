{%- slide -%}
<h2><code>./src/link/_index.scss</code></h2>

{%- codeblock "css" -%}{% raw %}
// Link
//
// **Links** are connections between two resources...
//
// :hover - the state when a mouse is hovered over the link
// :focus - the state when the link has keyboard focus
//
// Markup: eg-link.twig
//
// Weight: 3
//
// Styleguide: Link

a {
  [...]
}
{% endraw %}{%- endcodeblock -%}

{%- notes "html" -%}
Have all the same information as the other patterns, but here addition of "modifiers" or variants of the pattern, e.g. classes or pseudo-classes applied to an element
{%- endnotes -%}
{%- endslide -%}



{%- slide -%}
<h2><code>./src/link/link.twig</code></h2>

{%- codeblock "twig" -%}{% raw %}
<a class="text-link {{modifier_class}}" href="{{link_url}}">{{link_text}}</a>
{% endraw %}{%- endcodeblock -%}

{%- notes "html" -%}
addition of `modifier_class` in the pattern for the link
{%- endnotes -%}
{%- endslide -%}


{%- slide "markdown" -%}
{% image "screen-link.png", "style guide page for the Link section, illustrating the description, example pattern, and code" %}

{%- notes -%}
Displayed are name of pattern, description, etc as before, with addition of the modifiers. without doing extra work to repeat those examples with passing in attributes over again many times
{%- endnotes -%}
{%- endslide -%}
