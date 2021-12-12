{%- slide "auto-animate"-%}
<h2><code>./src/text/heading.twig</code></h2>

{%- codeblock "twig", "headingtwig-code" -%}{% raw %}
{%- set heading_level = heading_level | default(2) -%}

<h{{heading_level}} class="text-heading {{modifier_class}}">{{heading_text}}</h{{heading_level}}>
{% endraw %}{%- endcodeblock -%}

<aside class="notes">
  <ul>
    <li>create the Twig to use for the link pattern</li>
    <li>add any variables for use, here: the heading level and the heading text</li>
  </ul>
</aside>
{%- endslide -%}



{%- slide "auto-animate"-%}
<h2><code>./src/text/heading.twig</code></h2>

{%- codeblock "twig", "headingtwig-code" -%}{% raw %}
{%- set heading_level = heading_level | default(2) -%}

<h{{heading_level}} class="text-heading">{{heading_text}}</h{{heading_level}}>
{% endraw %}{%- endcodeblock -%}

<h2><code>./src/text/eg-heading.twig</code></h2>
{%- codeblock "twig", "headingtwig-code" -%}{% raw %}
{% include "@text/heading.twig" with { heading_text: "Taciti feugiat a sapien parturient" } %}

{% include "@text/heading.twig" with {
  heading_level: 3,
  heading_text: "Mi venenatis mus elementum"
} %}

{% include "@text/heading.twig" with {
  heading_level: 4,
  heading_text: "Posuere non sit pharetra"
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
  {% image "kss-page", "screen-text-heading.png", "1280", "818", "style guide page for the Text.Heading section, illustrating the description, example pattern, and code" %}
{%- endslide -%}
