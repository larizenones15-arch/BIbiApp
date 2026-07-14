import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
Vue.use(VueRouter)



let router = new VueRouter({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/chat',
            name: 'chat',
            component: () => import(/* webpackChunkName: "chat" */'./components/ChatComponent.vue'),    
        },
        {
            path: '/register', 
            name: 'register',
            component: () => import(/* webpackChunkName: "Register" */'./template/Register.vue'),
            beforeEnter: (to, from, next) =>{
                !store.state.session ? next() : next({name: 'login'})
        }
        },
        {
            path: '/login', 
            name: 'login',
            component: () => import(/* webpackChunkName: "Login" */'./template/Login'),

        },
        {
            path: '/expense',
            name: 'expense',
            component: () => import(/* webpackChunkName: "expense" */'./components/ExpenseDistribution.vue'),
        },
        {
            path: '/ActualExpenses',
            name: 'ActualExpenses',
            component:()=> import(/* webpackChunkName: "ActualExpenses" */ './components/ActualExpenses.vue'),
        },
        {
            path: '/customerlogs',
            name: 'customerlogs',
            component:()=> import(/* webpackChunkName: "ActualExpenses" */ './components/CustomerLogs.vue'),
        },
        {
            path: '/ExcelExam',
            name: 'ExcelExam',
            component:()=> import(/* webpackChunkName: "ExcelExam" */ './components/ExcelExam.vue'),
        },
        {
            path: '/FrontEndExam',
            name: 'FrontEndExam',
            component:()=> import(/* webpackChunkName: "FrontEndExam" */ './components/FrontEndExam.vue'),
        },


        // {
        //     path: '/error/:status_code?',
        //     name: 'error',
        //     component: () => import(/* webpackChunkName: "Error" */'./template/Error'),
        //     beforeEnter:(to, from, next) =>{
        //         store.state.status != null ? next() : router.back();
        //     }
        // },
        
    ],
});
router.beforeEach((to, from, next)=> {
    if(!store.state.session && to.name !== 'login' && to.name !== 'register'){
        next({name: 'login'})
    }else{
        next()
    }
})
export default router
