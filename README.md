# Node (backend)

- install with `npm install --save js-contains`
- remember to `require` the plugin
- example:

  ```javascript
  require('node_contains');
  ["hi","ho"].contains("hi") // true
  ["he","ho"].contains("hi") // false
  "asjasdhiasdasd".contains("hi") // true
  "asjasdhiasdasd".contains("hi") // false
  ```

# Frontend

- install with `bower install --save js-contains`
- inject the `js-contains.js` file into your HTML:

  ```html
            <script src="[path_to_bower_packages]/js-contains/js-contains.js"></script>
  ```

- example:

  ```javascript
  ["hi","ho"].contains("hi") // true
  ["he","ho"].contains("hi") // false
  "asjasdhiasdasd".contains("hi") // true
  "asjasdhiasdasd".contains("hi") // false
  ```
