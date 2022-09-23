//引入vue
import Vue from 'vue'
//引入app
import App from './App.vue'
 //关闭生产提示
Vue.config.productionTip = false
//引入插件
import {obj}  from './plugins'
//使用插件
Vue.use(obj)
new Vue({
    el: '#app',
    render: h => h(App)

})