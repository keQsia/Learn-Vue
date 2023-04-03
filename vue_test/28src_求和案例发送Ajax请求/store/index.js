//创建vuex中最为核心的store

//引入Vuex
import Vue from 'vue';
import Vuex from 'vuex';
import countOptions from './add.js';
import personOptions from './person.js';
Vue.use(Vuex);

// 创建并暴露store
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
});