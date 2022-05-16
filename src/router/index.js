import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/LoginPage.vue'
//import HelloWorld from '@/components/HelloWorld.vue'
import RegisterPage from '@/components/RegisterPage.vue'
import RegisterProfessorPage from '@/components/RegisterProfessorPage.vue'
import CreateGroup from '@/components/CreateGroup.vue'
import UserPage from '@/components/UserPage.vue'

// Turmas
import CriarTurmas from '@/components/TurmaProfessor/CriarTurmas.vue'
import AdicionarAlunos from '@/components/TurmaProfessor/AdicionarAlunos.vue'

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
        path:'/Turma/CriarTurmas',
        name: 'CriarTurmas',
        component: CriarTurmas
    },
    {
        path:'/Turma/AdicionarAlunos',
        name: 'AdicionarAlunos',
        component: AdicionarAlunos
    }

]

const router = new Router({ routes })

export default router
