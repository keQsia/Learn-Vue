//引入Vue
import Vue from 'vue';
// 引入App
import App from './App.vue';
import vueRes from 'vue-resource';
Vue.config.productionTip = false;
//使用插件
Vue.use(vueRes)

// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate(){
        Vue.prototype.$bus = this;
    }
})