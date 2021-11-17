import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Index from '../components/page/Index.vue'
import System from '../components/page/System.vue'
import GroupIntegral from '../components/page/GroupIntegral.vue'
import UserIntegral from '../components/page/UserIntegral.vue'
import AdminManage from '../components/page/manage/AdminManage.vue'
import GroupManage from '../components/page/manage/GroupManage.vue'
import UserManage from '../components/page/manage/UserManage.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/Home',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
            return import(/* webpackChunkName: "about" */ '../components/Home.vue')
        },
        children: [
            {
                path: 'index',
                component: Index,
            },
            {
                path: 'system',
                component: System,
            },
            {
                path: 'groupIntegral',
                component: GroupIntegral,
            },
            {
                path: 'userIntegral',
                component: UserIntegral,
            },
            {
                path: 'adminManage',
                component: AdminManage,
            },
            {
                path: 'userManage',
                component: UserManage,
            },
            {
                path: 'groupManage',
                component: GroupManage,
            }
        ]
    }/*,
    {
        path: '/index',
        name: 'Index',
        component: Index
    },
    {
        path: '/home/system',
        name: 'System',
        component: System
    },*/

];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
