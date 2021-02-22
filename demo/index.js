import { copyText } from '../lib/index'

new Vue({
  el: '#app',
  template: `
    <button @click="testFunc()">函数式调用</button>
  `,
  methods: {
    testFunc (){
      copyText('我是函数式')
    }
  },
})