{%- slide %}

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

{% notes "html" %}
package.json: include scripts to build the css, html, styleguide
{% endnotes %}
{%- endslide -%}
