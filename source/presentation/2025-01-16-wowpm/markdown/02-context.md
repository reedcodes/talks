{%- slide "markdown" -%}
## Context matters

Why is this image on the page?

Is it to showcase what's in the photo or to complement other information on the page?

{% notes %}
Remember to read what's on screen!

If the image serves a purpose in some way, there _must_ be alt text.

Image context can be decorative, informative, or functional. The same image can have separate purposes depending on how it's used on the page.
{% endnotes %}
{%- endslide -%}



{%- slide "markdown" -%}
### Decorative images

The purpose of a decorative image is to embellish or dress up the page.

{% notes %}
Remember to read what's on screen!

Decorative image don't add any content to the page themselves. If the image can be removed from the webpage and the user can still comprehend the information on the page, then it's probably a decorative image. This could be because the information is provided elsewhere on the page or because it's just there for aesthetic purposes.

Images that are purely decorative do not necessarily need alt text. However, imgage elements _still_ need to include an alt attribute, so decorative images are marked by an empty alt attribute. This means a completely null attributes -- even one space counts as content! The empty attr doesn't announce the image to a screen reader, and if the image is missing, nothing displays on the page.
{% endnotes %}
{%- endslide -%}

{%- slide "markdown" -%}
{% columns %}
{% column %}
{% image "sunflower.jpg", "" %}
{% endcolumn %}
{% column %}

`<img src="sunflower.jpg" alt="">`

{% endcolumn %}
{% endcolumns %}

{% notes %}
Remember to read what's on screen!

For instance, if this image is purely decorative -- i.e. it is included only to provide an interesting visual -- then alt text is not needed. The alt attribute is left empty to indicate to screen readers that this image can be skipped over.
{% endnotes %}
{%- endslide -%}



{%- slide "markdown" -%}
### Informative images

The purpose of an informative image is to convey information or visuals, such as a photograph.

{% notes %}
Remember to read what's on screen!

An informative image may accompany text content on the page and give additional background or data about the information presented, or the image could be the information itself, such as a showcase or gallery, or a photo in a news story. The alt text of these images should describe what is in the image and what type of information the image is trying to convey, but should not duplicate text is that already available on the page.
{% endnotes %}
{%- endslide -%}

{%- slide "markdown" -%}
{% columns %}
{% column %}
{% image "sunflower.jpg", "" %}
{% endcolumn %}
{% column %}

`<img src="sunflower.jpg" alt="A large sunflower sits in the center foreground, with a sea of smaller sunflowers in the field behind it.">`

{% endcolumn %}
{% endcolumns %}

{% notes %}
Remember to read what's on screen!

If this image were included on a page about various types of flowers, then the purpose of this image is informational, and describing the details of what is included in the photo is more effective.
{% endnotes %}
{%- endslide -%}



{%- slide "markdown" -%}
### Functional images

The purpose of a functional image is to perform an action, such as a link to another page.

{% notes %}
Functional images _do_ something, so the alt text of the image should describe what the image is going to do rather than describe the details of the image. For example, a site's logo usually links back to the site's homepage, and the alt text of that logo could be "website home" instead of "website logo". These types of images are often used as links or buttons.
{% endnotes %}
{%- endslide -%}

{%- slide "markdown" -%}
{% columns %}
{% column %}
{% image "sunflower.jpg", "" %}
{% endcolumn %}
{% column %}

`<a href="/sunflowers/"><img src="sunflower.jpg" alt="Read the article about sunflowers"></a>`

{% endcolumn %}
{% endcolumns %}
{%- endslide -%}
