{%- slide "markdown" %}
## Let's put it together! <!-- .element: class="r-fit-text" -->

We have enough patterns to create a new Card pattern <!-- .element: class="center" -->

Notes:
- add styles to the card, and need to update existing styles
{% endslide %}



{%- slide -%}
<h2><code>./src/card/_index.scss</code></h2>

<div class="columns equal">
  <div>
    {%- codeblock "css", "cardcss-code" -%}{% raw %}
// Card
//
// A card includes content and a call to action.
//
// Markup: card.twig
//
// Weight: 4
//
// Styleguide: Card
    {% endraw %}{%- endcodeblock -%}
  </div>

  <div>
    {%- codeblock "css", "cardcss-code" -%}{% raw %}
.card {
  --card-width: max(25ch, 50%);
  --card-padding: 1em;
  --card-border-color: var(--purple);

  width: var(--card-width);
  padding: var(--card-padding);
  border: 1px solid var(--card-border-color);
  border-radius: var(--card-padding);

  :is( h2, h3, h4 ):first-child {
    margin-top: 0;
  }
}
    {% endraw %}{%- endcodeblock -%}
  </div>
</div>

<aside class="notes">
  same comments as before, including
  <ul>
    <li>name of the pattern - Link</li>
    <li>description</li>
    <li>location of Twig</li>
    <li>section of the styleguide</li>
    <li>regular Sass</li>
  </ul>
</aside>
{%- endslide -%}



{%- slide -%}
<h2><code>./src/card/card.twig</code></h2>

{%- codeblock "twig", "cardtwig-code", "|3-6|9|11-15|12" -%}{% raw %}
<div class="card">
  {% if card_heading %}
    {% include "@text/heading.twig" with {
      heading_level: 3,
      heading_text: card_heading
    } %}
  {% endif %}

  {% include "@text/paragraph.twig" with { paragraph_text: card_description } %}

  {% include "@link/link.twig" with {
    modifier_class: "cta-link",
    link_text: card_link_text,
    link_url: card_link_url
  } %}
</div>
{% endraw %}{%- endcodeblock -%}

<aside class="notes">
  <ul>
    <li>new Card-specific variables</li>
    <li>include the heading, paragraph, link Twig</li>
    <li>tell those Twigs to use the Card values</li>
    <li>new! modifier_class passed to the link pattern</li>
    <li>specific to the Card pattern</li>
  </ul>
</aside>
{%- endslide -%}



{%- slide -%}
<h2><code>./src/card/card.json</code></h2>

{%- codeblock "json", "cardjson-code" -%}{% raw %}
{
  "card_heading": "Scelerisque nam eros parturient",
  "card_description": "Bibendum parturient laoreet a a purus augue hac vestibulum ac sociosqu felis integer.",
  "card_link_text": "A ut parturient",
  "card_link_url": "#"
}
{% endraw %}{%- endcodeblock -%}

<aside class="notes">
  <ul>
    <li>new! before we used example Twig files</li>
    <li>can also use json to pass values into the Twig</li>
    <li>in the styleguide, if using json, the filename must match the Twig filename</li>
  </ul>
</aside>
{%- endslide -%}



{%- slide -%}
  {% image "kss-page", "screen-card.png", "1280", "360", "style guide page for the new Card, illustrating the existing heading, paragraph, and link inside the new Card pattern" %}
{%- endslide -%}
