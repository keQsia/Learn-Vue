// 不再引入构造函数Vue，而是引入一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'
console.log(Vue)
//创建应用实例对象——app（类似于Vue2中的vm，但是比vm更轻）并挂载
createApp(App).mount('#app')
