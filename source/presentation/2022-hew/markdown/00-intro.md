{%- slide "markdown" %}
"What can I learn from this session?" <!-- .element: class="r-fit-text" -->

"What is a pattern library? a style guide?" <!-- .element: class="r-fit-text" -->

{% notes %}
go over:
- why a style guide is beneficial
- installing and setting up KSS-node
- using Twig files and CSS comments

will not go over:
- CSS, Sass, Less, Tailwind, etc
- OOCSS, Smaccs, bem, atomic structures
- creating Drupal or WordPress themes
{% endnotes %}
{%- endslide -%}



{%- slide "markdown" -%}
**Style guide:**<br>
the document that lists all the components

**Pattern library:**<br>
the code that creates the components

{% notes %}
Old WP themes: Too many components! What is used where!? Code goto bloated, conflicting styles, etc. Further troubles with "static" gutenberg blocks

style guide: "source of truth"
- one place where everything is listed
- can tell which components are used inn ither components

pattern library: a more sustainable way of coding that truth
- change made to one component only made in one place for all instances

Other types of UI component tools: Pattern Lab, Storybook
, Fractal. Explain why we choose KSS{% endnotes %}
{%- endslide -%}
