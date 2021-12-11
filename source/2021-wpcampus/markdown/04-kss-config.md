{%- slide -%}
<h2 data-id="kssconfigjson-title"><code>./kss-config.json</code></h2>

{%- codeblock "json", "kssconfigjson-code"-%}{% raw %}
{
  "title": "Sample KSS",
  "source": "src/",
  "destination": "styleguide/",
  "builder": "builder/twig/",
  "css": "../dist/css/styles.css"
}
{% endraw %}{%- endcodeblock -%}

<aside class="notes">
  <ul>
    <li>Configure the KSS .json File</li>
    <li>The source, destination, and builder are relative to the kss-config.json file</li>
    <li>The css path is relative to the generated style guide files</li>
  </ul>
</aside>
{%- endslide -%}
