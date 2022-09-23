//引入vue
import Vue from 'vue'
//引入app
import App from './App.vue'
import {mixin,mixin2} from './mixin'    //全局混入
 //关闭生产提示
Vue.config.productionTip = false
Vue.mixin(mixin)
Vue.mixin(mixin2)
new Vue({
    el: '#app',
    render: h => h(App)

})