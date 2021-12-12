{%- slide "markdown" %}
## Adding Twig Patterns to Custom Blocks <!-- .element: class="r-fit-text" -->

Notes:
- pattern library already defined as WP dropin
- WP already knows where to look for the dropin pattern library
- let's tell the custom blocks plugin how to use the Twig patterns
{% endslide %}



{%- slide -%}
<h2><code>composer.json</code> for the custom blocks</h2>

{%- codeblock "css", "blockcomposer-code", "3-5" -%}{% raw %}
{
  ...
  "require": {
    "timber/timber": "^1.17"
  }
  ...
}
{% endraw %}{%- endcodeblock -%}

<aside class="notes">
  require Timber again
</aside>
{%- endslide -%}



{%- slide -%}
  <h2><code>card/index.js</code></h2>
  <p>Creating the block in the custom blocks plugin</p>

  {%- codeblock "javascript", "blockregister-code", "|1,11|13" -%}{% raw %}
import CardEdit from './edit.js';

  const Card = ( () => {
  const { registerBlockType } = wp.blocks;

  registerBlockType( 'sample-kss-twig/card', {
    title: 'Card',
    description: 'A card includes content and a call to action.',
    category: 'design',

    edit: ( props ) => { return ( CardEdit( props ) ); },

    save: () => { return null; }
  });
} )();

export default Card;
  {% endraw %}{%- endcodeblock -%}

  <aside class="notes">
    <ul>
      <li>brief overview of including Twig patterns, not going over building dynamic blocks</li>
      <li>for cleaner code, edit function is in its own file</li>
      <li>save function returns null since the block is dynamic and we're going to pass the values to the Twig pattern next</li>
    </ul>
  </aside>
{%- endslide -%}



{%- slide -%}
  <h2><code>card/edit.js</code></h2>

  {%- codeblock "javascript", "blockedit-code", "|4|12-17|6" -%}{% raw %}
const CardEdit = ( props ) => {
  const { RichText, URLInputButton } = wp.blockEditor;
  const { Fragment } = wp.element;
  const { heading, description, linkText, linkUrl } = props.attributes;
  ...
  const onChangeHeading = ( value ) => { setAttributes( { heading: value } ) };
  ...

  return(
    &#60;Fragment&#62;
      &#60;p&#62;&#60;b&#62;Card Heading:&#60;/b&#62;
      &#60;RichText
        value={ heading }
        onChange={ onChangeHeading }
        allowedFormats={ [] }
      /&#62;
      &#60;/p&#62;
      ...
    &#60;/Fragment&#62;
  );
};
export default CardEdit;
  {% endraw %}{%- endcodeblock -%}

  <aside class="notes">
    <ul>
      <li>super basic edit function for Card</li>
      <li>define the attributes we need for the Card, as defined in the pattern</li>
      <li>add a field for the editor to input the content</li>
      <li>add an event to set the attribute to the input value</li>
    </ul>
  </aside>
{%- endslide -%}



{%- slide -%}
  {% image "kss-page", "screen-card-edit.png", "835", "390", "editor screen in WordPress, with the Card block added" %}

  <aside class="notes">
    the most basic block, with minimal fields and styling
  </aside>
{%- endslide -%}



{%- slide -%}
<h2><code>card/register.php</code></h2>

{%- codeblock "php", "blockregisterphp1-code" -%}{% raw %}
...

public function register(): void {
  register_block_type( 'sample-kss-twig/card', [
    'attributes' => [
      'heading'     => [ 'type' => 'string', 'default' => '' ],
      'description' => [ 'type' => 'string', 'default' => '' ],
      'link_text'   => [ 'type' => 'string', 'default' => '' ],
      'link_url'    => [ 'type' => 'string', 'default' => '' ]
    ],

    'render_callback' => [ $this, 'render' ]
  ] );
}

...
{% endraw %}{%- endcodeblock -%}

<aside class="notes">
  registering the attributes we need to pass through the Twig pattern
</aside>
{%- endslide -%}



{%- slide -%}
<h2><code>card/register.php</code></h2>

{%- codeblock "php", "blockregisterphp2-code", "|4|9,14|10" -%}{% raw %}
...

public function render( $attributes, $content ): string {
  $heading = $attributes['heading'] ?? '';
  $description = $attributes['description'] ?? '';
  $link_text = $attributes['linkText'] ?? '';
  $link_url = $attributes['linkUrl'] ?? '';

  return Timber::fetch( '@card/card.twig', [
    'card_heading'     => $heading,
    'card_description' => $description,
    'card_link_text'   => $link_text,
    'card_link_url'    => $link_url
  ] );
}

...
{% endraw %}{%- endcodeblock -%}

<aside class="notes">
  <ul>
    <li>grabbing the attributes defined from the block when edited and saved
    <li>calling the Twig pattern we want from the pattern library</li>
    <li>passing the block's values to the pattern's variables</li>
  </ul>
</aside>
{%- endslide -%}



{%- slide -%}
  {% image "kss-page", "screen-card-front.png", "1280", "605", "front-end view of the Card block using the Twig patterns" %}
{%- endslide -%}
