import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/LoginPage.vue'
//import HelloWorld from '@/components/HelloWorld.vue'
import RegisterPage from '@/components/RegisterPage.vue'

Vue.use(Router)

const routes = [
    {
        path:'/',
        name: 'Login',
        component: LoginPage
        
    },
    {
        path:'/RegisterPage',
        name: 'RegisterPage',
        component: RegisterPage
    }
]

const router = new Router({ routes })

export default router
/*
export default new Router ({
    routes: [
        {
            path:'/',
            name: 'Login',
            components: LoginPage
        },
        {
            path:'/HelloWorld',
            name: 'HelloWorld',
            component: HelloWorld
        }
    ]
})
*/