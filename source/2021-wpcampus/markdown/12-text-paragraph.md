{%- slide "auto-animate"-%}
<h2><code>./src/text/paragraph.twig</code></h2>

{%- codeblock "twig", "paragraphtwig-code" -%}{% raw %}
<p class="text-paragraph">{{paragraph_text}}</p>
{% endraw %}{%- endcodeblock -%}

<aside class="notes">
  <ul>
    <li>create the Twig to use for the link pattern</li>
    <li>add any variables for use, here: the paragraph text</li>
  </ul>
</aside>
{%- endslide -%}



{%- slide "auto-animate"-%}
<h2><code>./src/text/paragraph.twig</code></h2>

{%- codeblock "twig", "paragraphtwig-code" -%}{% raw %}
<p class="text-paragraph">{{paragraph_text}}</p>
{% endraw %}{%- endcodeblock -%}

<h2><code>./src/text/eg-paragraph.twig</code></h2>

{%- codeblock "twig", "paragraphegtwig-code" -%}{% raw %}
{% include "@text/paragraph.twig" with {
  paragraph_text: "Curabitur vestibulum enim rutrum nostra dui eros sed sed vestibulum ..."
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
  {% image "kss-page", "screen-text-paragraph.png", "1280", "500", "style guide page for the Text.Paragraph section, illustrating the description, example pattern, and code" %}
{%- endslide -%}
