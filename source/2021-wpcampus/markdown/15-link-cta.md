{%- slide -%}
<h2><code>./src/link/_index.scss</code></h2>

{%- codeblock "css", "linkctacss-code", "5-7" -%}{% raw %}
// ...
//
// :hover - the mouse hover state
// :focus-visible - the keyboard focus state
// .cta-link - links used for calls to action
// .cta-link:hover - hover state for CTA links
// .cta-link:focus-visible - focus state for CTA links
//
// ...
{% endraw %}{%- endcodeblock -%}

<aside class="notes">
  add new modifiers for the CTA Link class, and pseudo-classes
</aside>
{%- endslide -%}



{%- slide -%}
<h2><code>./src/link/_index.scss</code></h2>

<div class="columns equal">
  <div>
    {%- codeblock "css", "linkctacss-code", "5-6,9,15" -%}{% raw %}
a {
  --color-link: var(--cobalt);
  --color-link-on: var(--purple);
  --outline-link-size: max( 2px, 0.08em );
  --color-link-bg: transparent;
  --color-link-bg-on: transparent;

  color: var(--color-link);
  background-color: var(--color-link-bg);

  &:hover,
  &:focus,
  &:focus-visible {
    color: var(--color-link-on);
    background-color: var(--color-link-bg-on);
  }
  ...
}
    {% endraw %}{%- endcodeblock -%}
  </div>

  <div>
    {%- codeblock "css", "linkctacss-code" -%}{% raw %}
.cta-link {
  --color-link: var(--icewhite);
  --color-link-on: var(--icewhite);
  --color-link-bg: var(--purple);
  --color-link-bg-on: var(--cobalt);

  display: inline-block;
  padding: 0.5em 0.75em;
  border-radius: 0.5em;
  letter-spacing: 0.05em;
  text-decoration: none;

  &:focus,
  &:focus-visible {
    outline: 0;
    box-shadow: 0 0 0 0.2em var(--color-link-on),
                0 0 0 0.4em var(--color-link-bg-on);
  }
}
    {% endraw %}{%- endcodeblock -%}
  </div>
</div>

<aside class="notes">
  <ul>
    <li>adjust the link to allow for additional classes</li>
    <li>add the new CSS declarations for the CTA link styles</li>
  </ul>
</aside>
{%- endslide -%}



{%- slide -%}
  {% image "kss-page", "screen-link-cta.png", "1280", "730", "style guide page for Link, illustrating the new pattern for call to action links" %}
{%- endslide -%}



{%- slide -%}
  {% image "kss-page", "screen-card-cta.png", "1280", "375", "style guide page for Card, now including the new pattern for call to action links" %}
{%- endslide -%}
