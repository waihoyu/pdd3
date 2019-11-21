import Vue from 'vue';
import Router from 'vue-router';
import Chat from '../pages/Chat/Chat.vue';
import Home from '../pages/Home/Home.vue';
import Mine from '../pages/Mine/Mine.vue';
import Recommand from '../pages/Recommand/Recommand.vue';
import Search from '../pages/Search/Search.vue';
import Hot from '../pages/Home/Children/Hot/Hot';
import Dress from '../pages/Home/Children/Dress';
import Box from '../pages/Home/Children/Box';
import Man from '../pages/Home/Children/Man';
import Shirt from '../pages/Home/Children/Shirt';
import Food from '../pages/Home/Children/Food';
import MyBaby from '../pages/Home/Children/MyBaby';
import Ele from '../pages/Home/Children/Ele';
import General from '../pages/Home/Children/General';
import TabType from '../config/tab-type';


// const originalPush = Router.prototype.push;
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// };

Vue.use(Router);

export default new Router({
    mode: 'history',
    linkActiveClass: '',
    linkExactActiveClass: '',
    routes: [{
            path: '/',
            name: 'root',
            redirect: '/home',
            meta: {
                title: '京东商城-首页',
                keyword: 'home',
                description: '京东商城-首页'
            },
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            children: [
                {
                    path: '/home/',
                    component: Hot,
                    params: {
                        id: TabType.HOT
                    },
                    meta:{
                        id: TabType.HOT
                    }
                },{
                    path: '/home/hot',
                    component: Hot,
                    params: {
                        id: TabType.HOT
                    },
                    meta:{
                        id: TabType.HOT
                    }
                },
                {
                    path: '/home/dress',
                    component: Dress,
                    params: {
                        id: '1'
                    },
                    meta:{
                        id: '1'
                    }
                },
                {
                    path: '/home/box',
                    component: Box,
                    params: {
                        id: '2'
                    },
                    meta:{
                        id: '2'
                    }
                },
                {
                    path: '/home/mybaby',
                    component: MyBaby,
                    params: {
                        id: '3'
                    },
                    meta:{
                        id: '3'
                    }
                },
                {
                    path: '/home/general',
                    component: General,
                    params: {
                        id: '4'
                    },
                    meta:{
                        id: '4'
                    }
                },
                {
                    path: '/home/food',
                    component: Food,
                    params: {
                        id: '5'
                    },
                    meta:{
                        id: '5'
                    }
                },
                {
                    path: '/home/shirt',
                    component: Shirt,
                    params: {
                        id: '6'
                    },
                    meta:{
                        id: '6'
                    }
                },
                {
                    path: '/home/man',
                    component: Man,
                    params: {
                        id: '7'
                    },
                    meta:{
                        id: '7'
                    }
                },
                {
                    path: '/home/ele',
                    component: Ele,
                    params: {
                        id: '8'
                    },
                    meta:{
                        id: '8'
                    }
                }
            ]
        },
        {
            path: '/recommand',
            name: 'recommand',
            component: Recommand,
            meta: {
                title: '京东商城-推荐',
                keyword: 'recommand',
                description: '京东商城-推荐'
            },
        },
        {
            path: '/search',
            name: 'search',
            component: Search
        },
        {
            path: '/chat',
            name: 'chat',
            component: Chat
        },
        {
            path: '/mine',
            name: 'mine',
            component: Mine
        }, 
        {
            path:'*',
            redirect:'/home'
        }
    ]
});