import { createRouter, createWebHistory } from "vue-router";
import HomeGeneral from '@/views/1-HomeGeneral.vue'
import HomeTest from '@/components/121-Home.vue'
import AboutTest from '@/components/122-About.vue'
import viewUser from '@/components/131-viewUser.vue'
import createEditUser from '@/components/132-createEditUser.vue'
import Register from '@/components/3-Register.vue'

const routes = [
    {
        path: '/',
        name: 'HomeGeneral',
        component: HomeGeneral
    }, 
    // {
    //     path: '/',
    //     name: 'FetchWallpaper',
    //     component: FetchWallpaper
    // }, 
    // {
    //     path: '/',
    //     name: 'viewUser',
    //     component: viewUser
    // },
    {
        path: '/reg',
        name: 'Register',
        component: Register
    },  
    {
        path: '/edit/:id',
        name: 'createEditUser',
        component: createEditUser
    },  
    {
        path: '/hometest',
        name: 'HomeTest',
        component: HomeTest
    }, 
    {
        path: '/abouttest',
        name: 'AboutTest',
        component: AboutTest
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router