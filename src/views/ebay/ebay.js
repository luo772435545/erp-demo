import Vue from 'vue'
import router from './router'// 路由
import axios from 'axios'
import '@/utils/publicImportMain'
axios.defaults.headers['PlatformId'] = 'ebay'
Vue.prototype.axios = axios
// 创建实例挂载到#app'
console.log(router)
new Vue({
  router
}).$mount('#app')
