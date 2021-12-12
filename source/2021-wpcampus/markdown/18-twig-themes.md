{%- slide "markdown" %}
## Including the Twig Patterns in Themes <!-- .element: class="r-fit-text" -->

Notes:
- our WP is a composer-based build, each repo has its own composer.json
{% endslide %}



{%- slide -%}
<h2><code>composer.json</code> for the Pattern Library</h2>

{%- codeblock "json", "ksscomposer-code", "4" -%}{% raw %}
{
  "name": "georgetown-university/pattern-library",
  ...
  "type": "wordpress-dropin"
}
{% endraw %}{%- endcodeblock -%}

<aside class="notes">
  tell the pattern library to act as a dropin for WordPress
</aside>
{%- endslide -%}



{%- slide -%}
<h2><code>composer.json</code> for the WordPress build</h2>

{%- codeblock "css", "wpcomposer-code", "5-6,11-13" -%}{% raw %}
{
  ...
  "require": {
    ...
    "georgetown-university/pattern-library": "1.18.*",
    "georgetown-university/wp-mu-plugin-pattern-library-loader": "2.0.*"
    ...
  },
  "extra": {
    ...
    "web/wp-content/{$name}": [
      "type:wordpress-dropin"
    ]
  }
}
{% endraw %}{%- endcodeblock -%}

<aside class="notes">
  require WordPress to use the pattern library and loader loader - this tells WordPress how to load the namespace from the kss-config.json in the pattern library. then tell WP where to put the dropin directories
</aside>
{%- endslide -%}



{%- slide -%}
<h2><code>composer.json</code> for the theme</h2>

{%- codeblock "css", "themecomposer-code", "3-5" -%}{% raw %}
{
  ...
  "require": {
    "timber/timber": "^1.17"
  }
  ...
}
{% endraw %}{%- endcodeblock -%}

<aside class="notes">
  require Timber, which helps in writing Twig files for WP themes
</aside>
{%- endslide -%}
