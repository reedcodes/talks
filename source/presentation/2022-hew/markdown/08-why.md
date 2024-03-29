{%- slide "markdown" -%}
But for why? <!-- .element: class="r-fit-text" -->

What are the benefits? <!-- .element: class="r-fit-text" -->

{%- notes -%}
- GU has almost 400 websites in one codebase (plus a couple dozen in another)
- currently multiple themes
- Front-load a lot of work in the beginning to make building new patterns quickly and easily.
- More maintainable moving forward, no need to make changes in multiple places
- fewer risk of bugs, style are consistent, etc
{%- endnotes -%}
{%- endslide -%}



{%- slide "markdown" -%}
{% image "screen-teaser.png", "screenshot of a page feature three Teaser Link items, that each include an image and a link call-to-action." %}

{%- notes -%}
- teaser links were an early pattern for a block
- many months later, new block for Info items requested
- adding the initial new pattern took ~20 minutes, then only some adjustments
{%- endnotes -%}
{%- endslide -%}



{%- slide "markdown" -%}
{% image "screen-info.png", "screenshot of a page feature three Info Grid items, that each include an image, a heading (title), description (paragraph), and a link call-to-action." %}

{%- notes -%}
- teaser links were an early pattern for a block
- many months later, new block for Info items requested
- adding the initial new pattern took ~20 minutes, then only some adjustments
{%- endnotes -%}
{%- endslide -%}



{%- slide "markdown" -%}
## Adding Theme Templates <!-- .element: class="r-fit-text" -->

[https://timber.github.io/docs/getting-started/theming/](https://timber.github.io/docs/getting-started/theming/)

[https://www.drupal.org/docs/theming-drupal/twig-in-drupal/working-with-twig-templates](https://www.drupal.org/docs/theming-drupal/twig-in-drupal/working-with-twig-templates)

[https://craftcms.com/docs/4.x/dev/twig-primer.html](https://craftcms.com/docs/4.x/dev/twig-primer.html)

{%- notes -%}
- we use WP for a CMS, network site with almost 400 sites
- patterns are used in custom themes _and_ custom blocks -- dynamic!
- twig for the pattern library better fits more types of CMS templating
- WP, Drupal, Craft, etc
- won't need to completely rewrite patterns if switch CMS!
{%- endnotes -%}
{%- endslide -%}
