//引入Vue
import Vue from 'vue';
// 引入App
import App from './App.vue';
// 完整引入组件，但是会传输过大的数据包
// 引入UI组件
// import ElementUI from 'element-ui';
// 引入样式
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

// 按需引入
import { Button, Row, DatePicker } from 'element-ui';
Vue.config.productionTip = false;
// Vue.use(ElementUI);
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);

// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
})