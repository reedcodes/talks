# `./package.json`

<pre><code class="hljs" data-trim data-line-numbers>{
  "name": "sample-kss",
  "version": "1.0.0",
  "description": "Sample KSS",
  "devDependencies": {
    "sass": "1.35.*",
    "kss": "3.0.*"
  },
  "scripts": {
    "build:kss": "kss --config kss-config.json",
    "build:css": "sass --no-source-map src:dist/css"
  }
}</code></pre>

Notes:
- set up the package.json file, very basic project info
- right now, only add sass and kss-node
- include the scripts to build css and kss
