// 专门用于创建整个应用的路由器
import VueRouter from 'vue-router';
import About from '../pages/About';
import Home from '../pages/Home';
import News from '../pages/News';
import Message from '../pages/Message';
import Detail from '../pages/Detail'
//创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        {
            name:'guanyu',
            path:'/about',
            component:About,
            meta:{title:'关于'}
        },
        {
            name: 'zhuye',
            path:'/Home',
            component:Home,
            meta:{title:'主页'},
            children:[
                {
                    name: 'xinwen',
                    path:'news',
                    component:News,
                    meta:{isAuth:true,title:'新闻'},
                    beforeEnter:(to,from,next)=>{
                        if(to.meta.isAuth){//判断是否需要鉴定权限
                            if(localStorage.getItem('school')==='Harvard'){
                                next();
                            }else{
                                alert('学校错误无权限');
                            }
                        }else{
                            next();
                        }
                    }
                },
                {
                    name:'xiaoxi',
                    path:'message',
                    component:Message,
                    meta:{isAuth:true},
                    meta:{isAuth:true,title:'消息'},
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail',
                            component:Detail,
                            meta:{isAuth:true,title:'详情'},
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

//全局前置路由守卫，初始化的时候被调用，每次路由切换之前被调用
// router.beforeEach((to,from,next)=>{
//     if(to.meta.isAuth){//判断是否需要鉴定权限
//         if(localStorage.getItem('school')==='Harvard'){
//             next();
//         }else{
//             alert('学校错误无权限');
//         }
//     }else{
//         next();
//     }
// });

//全局后置路由守卫，初始化的时候被调用，每次路由切换之后被调用
// router.afterEach((to,from)=>{
//     document.title = to.meta.title || '谷歌';
// })

export default router;