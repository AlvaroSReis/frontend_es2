import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/LoginPage.vue'
//import HelloWorld from '@/components/HelloWorld.vue'
import RegisterPage from '@/components/RegisterPage.vue'
import RegisterProfessorPage from '@/components/RegisterProfessorPage.vue'
import CreateGroup from '@/components/CreateGroup.vue'
//import UserPage from '@/components/UserPage.vue'
import ListStudents from  '@/components/ListStudents.vue'
import StudentPage from '@/components/StudentPage.vue'
import ListTaskStudent from '@/components/ListTaskStudent.vue'
import ProjectPage from '@/components/ProjectPage.vue'
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
        path:'/StudentPage',
        name: 'StudentPage',
        component: StudentPage
    },
    {

        path:'/ListStudents',
        name: 'ListStudents',
        component: ListStudents
    },
    {
        path: '/ProjectPage',
        name: 'ProjectPage',
        component: ProjectPage
    },
    {

        path:'/ListTaskStudent',
        name: 'ListTaskStudent',
        component: ListTaskStudent
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
