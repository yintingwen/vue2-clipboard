import plugins, { copyText } from '../lib/index'

Vue.use(plugins, {
  success() {
    alert('成功')
  },
  error() {
    alert('失败')
  },
})

new Vue({
  el: '#app',
  data: {
    visible: false,
  },
  methods: {
    testFunc() {
      copyText('我是函数式')
    },
    async showModal() {
      try {
        await this.$confirm()
        this.testFunc()
      } catch (error) {}
    },
  },
})
