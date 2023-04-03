//求和相关功能
export default {
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