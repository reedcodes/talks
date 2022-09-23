{%- slide %}
<h2>Install required dependencies</h2>

{%- codeblock "json" -%}{% raw %}
{
  "name": "sample-kss",
  "version": "2.0.0",
  "description": "Sample KSS",
  "devDependencies": {
    "kss": "^3.1.0",
    "sass": "^1.55.0"
  },
  "scripts": {
    "build:css": "sass --no-source-map ./src:./dist/css",
    "build:kss": "kss --config ./config/kss-config.json"
  }
}
{% endraw %}{%- endcodeblock -%}

{% notes "html" %}
package.json: include scripts to build the css, html, styleguide from the markdown, twig, sass, and sass comments. Minimum: sass and kss-node.
{% endnotes %}
{%- endslide -%}



{%- slide "markdown" -%}
## Copy the base builder template

`./node_modules/kss/builder/twig`

<br>{% include "icons/arrow-down.svg" %}<br>

`./builder/twig`

{% notes %}
handlebars, nunkucks, and twig are included builders -- using twig because compatibility with CMS like WP and Drupal. Part of the reason we built the pattern library was for its maintainability with WP custom themes and custom blocks
{% endnotes %}
{%- endslide -%}



{%- slide "markdown" -%}
## Create the pattern library directories

`./src/base/_index.scss`<br>
`./src/color/_index.scss`<br>
`./src/text/_index.scss`<br>
`./src/link/_index.scss`<br>
`./src/card/_index.scss`<br>
`./src/layout/_index.scss`

{% notes %}
we use Sass to organize and compile the css, but _any_ style of CSS works, e.g. Less, vanilla CSS. only need kss to find the styleguide comments, and pattern library to find the twig files. will use to create namespaces
{% endnotes %}
{%- endslide -%}



{%- slide %}
<p><code>./config/kss-config.json</code></p>

{%- codeblock "json" -%}{% raw %}
{
  "title": "Sample KSS",
  "source": "../src/",
  "destination": "../styleguide/",
  "builder": "../builder/twig/",
  "css": "../dist/css/styles.css",
  "namespace": [
    "color:src/color",
    "text:src/text",
    "link:src/link",
    "card:src/card",
    "form:src/form",
    "layout:src/layout"
  ]
}
{% endraw %}{%- endcodeblock -%}

{% notes "html" %}
1. source, destination, builder: relative to the config file<br>
2. css relative to the generated pages in styleguide
3. because we'll reference Twig from pattern library, custom blocks, custom themes, let's give our patterns a namespace
{% endnotes %}
{%- endslide -%}
