{%- slide "markdown" %}
## Let's put even more together! <!-- .element: class="r-fit-text" -->

Cards on cards on cards... in a grid <!-- .element: class="center" -->

Notes:
- set up a pattern to loop through a json to create a card grid
{% endslide %}



{%- slide -%}
<h2><code>./src/layout/_index.scss</code></h2>

{%- codeblock "css", "cardgridcss-code" -%}{% raw %}
// Layout
//
// Weight: 5
//
// Styleguide: Layout

// Card Grid
//
// A group of cards can be laid out in a grid pattern.
//
// Markup: card-grid.twig
//
// Weight: 1
//
// Styleguide: Layout.CardGrid
{% endraw %}{%- endcodeblock -%}

<aside class="notes">
  like we did with headings and paragraphs under text, we nest the Card Grid section under Layout, and use the comments to create the style guide information
</aside>
{%- endslide -%}



{%- slide -%}
<h2><code>./src/layout/card-grid.json</code></h2>

{%- codeblock "json", "cardgridjson-code" -%}{% raw %}
{
  "cards": [
    {
      "card_heading": "Scelerisque nam eros",
      "card_description": "Bibendum parturient laoreet a a purus augue hac vestibulum ...",
      "card_link_text": "A ut parturient",
      "card_link_url": "#"
    },
    {
      "card_heading": "Platea erat suspendisse",
      "card_description": "Id cubilia scelerisque eu dictum enim mus suscipit a dignissim ...",
      "card_link_text": "Netus lacinia in aliquet",
      "card_link_url": "#"
    },
    {
      "card_heading": "Leo imperdiet nascetur",
      "card_description": "Dui scelerisque nullam adipiscing mi condimentum a laoreet mus tempor ...",
      "card_link_text": "Potenti placerat nec",
      "card_link_url": "#"
    }
  ]
}
{% endraw %}{%- endcodeblock -%}

<aside class="notes">
  mentioned earlier we can use JSON files as well as including other Twig files for examples, as long as the filenames are the same, for the styleguide - here: create a JSON "cards" that includes "card" items
</aside>
{%- endslide -%}



{%- slide -%}
<h2><code>./src/layout/card-grid.twig</code></h2>

{%- codeblock "twig", "cardgridtwig-code", "|2,9" -%}{% raw %}
<div class="card-grid">
  {% for card in cards %}
    {% include "@card/card.twig" with {
      card_heading: card.card_heading,
      card_description: card.card_description,
      card_link_text: card.card_link_text,
      card_link_url: card.card_link_url
    } %}
  {% endfor %}
</div>
{% endraw %}{%- endcodeblock -%}

<aside class="notes">
  in the new card grid pattern, include the Card in the loop through the JSON and pass it the item values to use in the Card pattern
</aside>
{%- endslide -%}



{%- slide -%}
  {% image "kss-page", "screen-card-grid.png", "1280", "780", "style guide page for the Card Grid section, displaying the looped through cards, before new styles added" %}
{%- endslide -%}




{%- slide -%}
<h2><code>./src/layout/_index.scss</code></h2>

{%- codeblock "css", "cardgridcss-code" -%}{% raw %}
.card-grid {
  display: grid;
  gap: 2em;
  grid-template-columns: repeat( auto-fit, minmax( 25ch, 1fr ) );

  .card {
    --card-width: auto;
  }
}
{% endraw %}{%- endcodeblock -%}

<aside class="notes">
  we can go back and add the styles to the layout Sass file for the card grid, to make it a grid
</aside>
{%- endslide -%}


{%- slide -%}
  {% image "kss-page", "screen-card-grid-grid.png", "1280", "480", "style guide page for the Card Grid section, with the new styles added to display the cards in a grid" %}
{%- endslide -%}
