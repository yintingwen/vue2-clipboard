import plugins, { copyText } from '../dist/vue2-clipboard.esm'
import Vue from 'vue/dist/vue.min'

Vue.use(plugins, {
  success() {
    alert('成功')
  },
  error() {
    alert('失败')
  },
})

const cButton = {
  template: '<button @click="test">组件测试</button>',
  methods: {
    test () {
      console.log('组件点击')
    }
  }
}

new Vue({
  el: '#app',
  data: {
    visible: false,
  },
  methods: {
    testFunc() {
      copyText('我是函数式')
    },
    dirSuccess() {
      console.log('指令成功')
    },
    dirError() {
      console.log('指令失败')
    }
  },
  components: {
    cButton
  }
})
