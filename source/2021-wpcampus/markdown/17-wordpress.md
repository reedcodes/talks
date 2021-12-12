{%- slide "markdown" %}
## How do we get it into WordPress? <!-- .element: class="r-fit-text" -->
{% endslide %}



{%- slide "markdown" %}
## Sample KSS WordPress theme

`./sample-kss-wp/package.json`<br/>
`./sample-kss-wp/src/style.scss`

Notes:
- start with the stylesheets
- create package.json for Sass
- add source Sass file
{% endslide %}



{%- slide -%}
<h2><code>./sample-kss-wp/package.json</code></h2>

{%- codeblock "json", "cardgridcss-code", lines="9" -%}{% raw %}
{
  "name": "sample-kss-wordpress",
  "version": "1.0.0",
  "description": "Sample KSS WordPress",
  "devDependencies": {
  "sass": "1.35.*"
  },
  "scripts": {
    "build:css": "sass --no-source-map src/style.scss:style.css"
  }
}
{% endraw %}{%- endcodeblock -%}

<aside class="notes">
  super simple, just adding the Sass for now - note that the compiled style.css goes to the root, not dist or build
</aside>
{%- endslide -%}



{%- slide -%}
<h2><code>./sample-kss-wp/src/style.scss</code></h2>

{%- codeblock "css", "cardgridcss-code" -%}{% raw %}
/*
Theme Name: Sample KSS WordPress
...
*/

@use '../../../../../sample-kss-twig/src/styles.scss';
{% endraw %}{%- endcodeblock -%}

<aside class="notes">
  The theme stylesheet needs to be at the root! so include the pattern library Sass here. Any time a change to the pattern library is made, the theme stylesheet also needs to be compiled. The path to the Sass must be relative to the working source Sass.
</aside>
{%- endslide -%}



{%- slide -%}
  {% image "kss-page", "screen-wp-initial-css.png", "1280", "590", "WordPress homepage with the base stylesheet from the pattern library included" %}
{%- endslide -%}
