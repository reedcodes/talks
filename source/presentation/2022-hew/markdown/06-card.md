{%- slide -%}
<h2><code>./src/card/_index.scss</code></h2>

{%- codeblock "css" -%}{% raw %}
// Card
//
// A card includes content and a call to action.
//
// Markup: card.twig
//
// Weight: 4
//
// Styleguide: Card

.card {
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: var(--card-width, max(25ch, 50%));
  padding: var(--card-padding, 1em);
  border: 1px solid var(--card-border-color, var(--color-secondary));
  border-radius: var(--card-border-radius, 1em);

  :is(h2, h3):first-child { margin-block: 0; }
}
{% endraw %}{%- endcodeblock -%}

{%- notes "html" -%}
Let's put it all together! We have enough patterns and styles to create a new pattern! Add CSS/Sass/Less, etc as we've been doing, the difference is coding the Card twig patterns. <b>Note the change in markup location!</b>
{%- endnotes -%}
{%- endslide -%}



{%- slide -%}
<h2><code>./src/card/card.twig</code></h2>

{%- codeblock "twig" -%}{% raw %}
<div class="card">
  {% include "@text/heading.twig" with {
    heading_level: 3,
    heading_text: card_heading
  } %}

  {% include "@text/paragraph.twig" with {
    paragraph_text: card_description
  } %}

  {% include "@link/link.twig" with {
    modifier_class: "cta-link",
    link_text: card_link_text,
    link_url: card_link_url
  } %}
</div>
{% endraw %}{%- endcodeblock -%}

{%- notes "html" -%}
<ul>
  <li>new Card-specific variables</li>
  <li>include the heading, paragraph, link Twig</li>
  <li>tell those Twigs to use the Card values</li>
  <li>new! modifier_class passed to the link pattern</li>
</ul>
{%- endnotes -%}
{%- endslide -%}



{%- slide -%}
<h2><code>./src/card/card.json</code></h2>

{%- codeblock "json" -%}{% raw %}
{
  "card_heading": "Scelerisque nam eros parturient",
  "card_description": "Bibendum parturient laoreet a a purus augue hac vestibulum ac sociosqu felis integer.",
  "card_link_text": "A ut parturient",
  "card_link_url": "index.html"
}
{% endraw %}{%- endcodeblock -%}

{%- notes "html" -%}
<ul>
  <li>new! before we used example Twig files</li>
  <li>can also use json to pass values into the Twig</li>
  <li>in the styleguide, if using json, the filename must match the Twig filename</li>
</ul>
{%- endnotes -%}
{%- endslide -%}
