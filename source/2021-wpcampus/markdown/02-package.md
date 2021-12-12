{%- slide "auto-animate" -%}
<h2 data-id="packagejson-title"><code>./package.json</code></h2>

{%- codeblock "json", "packagejson-code" -%}{% raw %}
{
  "name": "sample-kss",
  "version": "1.0.0",
  "description": "Sample KSS",
  "devDependencies": {
    "sass": "1.35.*",
    "kss": "3.0.*"
  }
}
{% endraw %}{%- endcodeblock -%}
<aside class="notes">
  <ul>
    <li>set up the package.json file, very basic project info</li>
    <li>right now, only add sass and kss-node</li>
    <li>then, npm install</li>
  </ul>
</aside>
{%- endslide -%}

{%- slide "auto-animate" -%}
<h2 data-id="packagejson-title"><code>./package.json</code></h2>

{%- codeblock "json", "packagejson-code" -%}{% raw %}
{
  "name": "sample-kss",
  "version": "1.0.0",
  "description": "Sample KSS",
  "devDependencies": {
    "sass": "1.35.*",
    "kss": "3.0.*"
  },
  "scripts": {
    "build:kss": "kss --config kss-config.json",
    "build:css": "sass --no-source-map src:dist/css"
  }
}
{% endraw %}{%- endcodeblock -%}

<aside class="notes">
  <ul>
    <li>include the scripts to build css and kss</li>
    <li>no files, so scripts do nothing right now</li>
  </ul>
</aside>
{%- endslide -%}
