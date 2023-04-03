// 专门用于创建整个应用的路由器
import VueRouter from 'vue-router';
import About from '../pages/About';
import Home from '../pages/Home';
import News from '../pages/News';
import Message from '../pages/Message';
import Detail from '../pages/Detail'
//创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            name:'guanyu',
            path:'/about',
            component:About
        },
        {
            path:'/Home',
            component:Home,
            children:[
                {
                    path:'news',
                    component:News
                },
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail',
                            component:Detail,
                            //props第一种写法，所有键值对都会以props形式传递给Detail组件
                            // props:{a:1,b:'hello'}

                            //props第二种写法，布尔值为真，把该路由组件收到的所有params参数以props形式传递给Detail组件
                            // props:true

                            //props第三种写法，值为函数，接收一个$route每一组键值对都会通过props传给Detail组件
                            props($route){
                                return {id:$route.query.id,title:$route.query.title}
                            }
                        }
                    ]
                },
            ]
        },
    ]
});
