{%- slide "markdown", "auto-animate" %}
## Adding Twig Patterns to a Theme Template <!-- .element: class="r-fit-text" -->

Notes:
- defined the pattern library as a WordPress dropin
- told WordPress where to store the dropin files/directories
- required the pattern library and loader loader in the WP build
- required Timber for templating in the theme
{% endslide %}



{%- slide "markdown", "auto-animate" %}
## Adding Twig Patterns to a Theme Template <!-- .element: class="r-fit-text" -->

[https://timber.github.io/docs/getting-started/theming/](https://timber.github.io/docs/getting-started/theming/) <!-- .element: class="r-fit-text" -->

Notes:
- setting up and using Timber beyond scope of presentation
- great docs at the Timber Github repo
{% endslide %}



{%- slide -%}
<h2><code>index.php</code> in the theme</h2>

{%- codeblock "php", "indexphp-code" -%}{% raw %}
&#60;?php
$context = Timber::context();
$context['posts'] = Timber::get_posts();
Timber::render( 'index.twig', $context );
{% endraw %}{%- endcodeblock -%}

<aside class="notes">
  this is something what index.php would look like using Timber, the index.twig would be the actual template file
</aside>
{%- endslide -%}



{%- slide -%}
<div class="columns equal">
  <div>
    {% image "kss-page", "screen-header.png", "918", "451", "display of the global header from the pattern library" %}
  </div>

  <div>
    {% image "kss-page", "screen-nav.png", "918", "243", "display of the global nav from the pattern library" %}<br/>

    {% image "kss-page", "screen-header.png", "918", "248", "display of the global footer from the pattern library" %}
  </div>
</div>

<aside class="notes">
  pattern library has header, nav, footer that can be included in the theme
</aside>
{%- endslide -%}



{%- slide -%}
<h2><code>index.twig</code> in the theme</h2>

{%- codeblock "twig", "indextwig-code", "|5" -%}{% raw %}
{% include "@layout/header.twig" with {
  site_logo_icon: "fa-school", site_title: site.name | striptags | raw, site_url: site.url
} %}

{% include "@layout/nav.twig" with { nav: main_navigation.items } %}

<main class="main" aria-label="body content">
  {% for post in posts %}
    <article class="entry" aria-labelledby="page-title-{{post.id}}">
      {% include "@text/heading.twig" with {
        modifier_class: "entry-title",
        heading_id: "page-title-" ~ post.id
        heading_level: 1,
        heading_text: post.title
      } %}
      <div class="post-content">
        {{post.content}}
      </div>
    </article>
  {% endfor %}
</main>

{% include "@layout/footer.twig" with { site_title: site.name | striptags | raw } %}
{% endraw %}{%- endcodeblock -%}

<aside class="notes">
  this is something what index.twig would look like e.g. for navigation, pass the WordPress nav items as the nav value to the nav Twig file, as we already set up the nav pattern previously
</aside>
{%- endslide -%}



{%- slide -%}
  {% image "kss-page", "screen-wp-index.png", "1280", "690", "WordPress homepage with the header, navigation, and footer the pattern library included" %}
{%- endslide -%}
