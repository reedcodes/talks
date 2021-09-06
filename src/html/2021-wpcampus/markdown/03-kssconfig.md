# `./kss-config.json`

<pre><code class="hljs" data-trim data-line-numbers>{
  "title": "Sample KSS",
  "source": "src/",
  "destination": "styleguide/",
  "builder": "builder/",
  "css": "../dist/css/styles.css",
  "namespace": [
    "color:src/color",
    "text:src/text",
    "button:src/button",
    "card:src/card",
    "layout:src/layout"
  ]
}</code></pre>

Notes:
- Configure the KSS .json File
- The source, destination, and builder are relative to the kss-config.json file
- The css path is relative to the generated style guide files

---

# Update KSS Node to use Twig

Notes:
- by default: Handlebars
