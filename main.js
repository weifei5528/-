import Vue from 'vue'
import App from './App'
import store from './store'
import pageHead from './components/page-head.vue'
import pageFoot from './components/page-foot.vue'
Vue.prototype.$store = store
Vue.config.productionTip = false
/***********注册全局的组件***************/
Vue.component('page-head',pageHead)
Vue.component('page-foot',pageFoot)
App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
