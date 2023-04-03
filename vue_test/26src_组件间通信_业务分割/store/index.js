//创建vuex中最为核心的store

//引入Vuex
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

//求和相关功能
const countOptions = {
    namespaced:true,
    actions:{
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
    },
    mutations:{
        ADD(state, value){
            state.sum += value;
        },
        MINUS(state, value){
            state.sum -= value;
        },
    },
    state:{
        sum: 0,//当前的和
        school: '家里蹲',
        subject: '前端'
    },
    getters:{
        bigSum(state){
            return state.sum * 10
        }
    }
}

//人员管理相关配置
const personOptions = {
    namespaced:true,
    actions:{},
    mutations:{
        ADD_PERSON(state,value){
            state.personList.unshift(value);
        }
    },
    state:{
        personList: [
            {id: '001', name: '张三'}
        ]
    },
    getters:{}
}

// 创建并暴露store
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
});