// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import store from './store'
import components from './components'
import * as filters from './filters'

Vue.config.productionTip = false

Vue.use(ElementUI)

// 加载css
require('./styles/index.scss')

// 公共组件
Object.keys(components).forEach(key => {
  var name = key.replace(/(\w)/, v => v.toUpperCase())
  Vue.component(`v${name}`, components[key])
})

// filter: {{createTime | formatDate(createTime)}}
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
