//创建vuex中最为核心的store

//引入Vuex
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
//准备actions用于响应组件中的动作
const actions = {
    // add(context, value){
    //     context.commit('ADD', value);
    // },
    // minus(context, value){
    //     context.commit('MINUS', value);
    // },
    addOdd(context, value){
        if(context.state.sum % 2){
            context.commit('ADD', value);
        }
    },
    addWait(context, value){
        setTimeout(() => {
            context.commit('ADD', value);
        },500)
    },
}
//准备mutations用于操作数据（state）
const mutations = {
    ADD(state, value){
        state.sum += value;
    },
    MINUS(state, value){
        state.sum -= value;
    }
}
//准备state用于存储数据
const state = {
    sum: 0,//当前的和
    school: '家里蹲',
    subject: '前端'
}
//准备getters用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum * 10
    }
}



// 创建并暴露store
export default new Vuex.Store({
    actions,//对象重名简写形式
    mutations,//对象重名简写形式
    state,//对象重名简写形式
    getters
});
