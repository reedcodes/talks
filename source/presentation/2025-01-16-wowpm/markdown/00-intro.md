{%- slide "markdown" -%}

What is alt text?<!-- .element: class="r-fit-text" -->

`<img src="image.jpg" alt="image description">`<!-- .element: class="r-fit-text" -->

{% notes %}
Remember to read what's on screen!

Alt text or alternative text is the name given to the short description of an image. It can be a literal description of everything included in the image or can describe the feeling the image envokes.

Alt text is coded as part of the image tag's alt attribute. This is a text-based field that can include alpha-numeric characters and punctuation. Writing good alt text depends not only on the image but on the context of the image and what that image is trying to convey. Sometimes _no_ alt text is the right decision, if the image is _purely_ decorative and removing it would not in any way impact the meaning of the page's content.

Because browsers and screen readers already _know_ this is an image (because HTML element), the alt text _should not_ include phrasing like "photo of..." or "graphic of...". This is redundant, and a screen reader will announce the image as an image.
{% endnotes %}

{%- endslide -%}
