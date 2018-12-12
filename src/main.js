import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import hzqTool from 'hzq-tool'
import hzqAxios from 'hzq-axios'
import apiUrl from './apiUrl'

Vue.use(hzqTool)
Vue.use(hzqAxios, apiUrl, {
    baseURL: 'https://open-api.beone.app',
    preURL: 'https://api-t.xkt.one',
    prodURL: 'https://api.dzqqsc.com'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})
