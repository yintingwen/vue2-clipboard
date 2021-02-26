# vue2-clipboard
vue2的粘贴板插件，依赖clipboardjs

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
  success: () => {}, // 复制成功后执行的钩子
  error: () => {}, // 复制失败后执行的钩子
  callHooks: true // 是否在复制操作后执行对应的钩子
}

```

## Simple
---

``` ts
// 函数方式调用，返回promise
import { copyText } from '@ytw/vue2-clipboard'

copyText(text: string, options: {
  container: Element | string,
  callHooks: boolean           // 控制本次操作是否调用全局钩子，默认true
})

// 在Vue中，通过 this.$copyText 使用
```
``` html
<div class="container">
  <input type="text" v-model="message">
  <!-- 指令的钩子会覆盖全局钩子 -->
  <button type="button"
    v-clipboard:copy="message"
    v-clipboard:success="onCopy"
    v-clipboard:error="onError"
  >
      Copy!
  </button>
</div>


<script>
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