import Vue from 'vue';
import VueRouter from 'vue-router';
import AppRoutes from '@/router/app';
import NotFound from '@/views/NotFound.vue';
import Home from '@/views/Home.vue';
import Search from '@/views/Search.vue';


Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '*',
            component: Home,
        },
        {
            path: '/search',
            name:'search',
            component: Search,
            props:true,
        },
        ...AppRoutes,
    ],
});
