import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/LoginPage.vue'
//import HelloWorld from '@/components/HelloWorld.vue'
import RegisterPage from '@/components/RegisterPage.vue'
import RegisterProfessorPage from '@/components/RegisterProfessorPage.vue'
import CreateGroup from '@/components/CreateGroup.vue'
import UserPage from '@/components/UserPage.vue'
import ListStudents from  '@/components/ListStudents.vue'

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
    },
    {
        path:'/RegisterProfessorPage',
        name: 'RegisterProfessorPage',
        component: RegisterProfessorPage
    },
    {
        path:'/CreateGroup',
        name: 'CreateGroup',
        component: CreateGroup
    },
    {
        path:'/UserPage',
        name: 'UserPage',
        component: UserPage
    },
    {
        path:'/ListStudents',
        name: 'ListStudents',
        component: ListStudents
    }

]

const router = new Router({ routes })

export default router
