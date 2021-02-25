# vue2-clipboard
A clipboard plugin for vue2

## install
---
```bash
npm install @ytw/vue2-clipboard
```

## Usage
---
```js
import Vue from 'vue'
import Vue2Clipboard from '@ytw/vue2-clipboard'

Vue.use(Vue2Clipboard, globalOptions)
```

## globalOptions
---

```js
{
  success: () => {}, // Callback on successful copy
  error: () => {}, // Callback in case of copy failure
  callHooks: true // Whether to execute global callback
}

```

## Simple
---

``` ts
// Called as a method, returns a Promise
import { copyText } from '@ytw/vue2-clipboard'

copyText(text: string, options: {
  container: Element | string,
  callHooks: boolean           // Whether to execute a global hook，default true
})

// In Vue, you can use this.$copytext directly
```
``` html
<div class="container">
  <input type="text" v-model="message">
  <!-- The directive's hooks override the global hooks -->
  <button type="button"
    v-clipboard:copy="message"
    v-clipboard:success="onCopy"
    v-clipboard:error="onError"
  >
      Copy!
  </button>
</div>


<script>
// 
new Vue({
  el: '#app',
  data: function () {
    return {
      message: 'Copy These Text'
    }
  },
  methods: {
    onCopy (e) {
      alert('You just copied: ' + e.text)
    },
    onError (e) {
      alert('Failed to copy texts')
    }
  }
})
</script>


```