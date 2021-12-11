{%- slide -%}
<h2 data-id="kssconfigjson-title"><code>./kss-config.json</code></h2>

{%- codeblock "json", "kssconfigjson-code"-%}{% raw %}
{
  "title": "Sample KSS",
  "source": "src/",
  "destination": "styleguide/",
  "builder": "builder/twig/",
  "css": "../dist/css/styles.css",
  "namespace": [
    "color:src/color",
    "text:src/text",
    "link:src/link",
    "card:src/card",
    "layout:src/layout"
  ]
}
{% endraw %}{%- endcodeblock -%}

<aside class="notes">
  because we'll reference Twig from pattern library, custom blocks, custom themes, let's give our patterns a namespace
</aside>
{%- endslide -%}
