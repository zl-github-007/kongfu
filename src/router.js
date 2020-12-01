import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            component: () =>
                import ('../src/views/Login.vue')
        },
        {
            path: '/register',
            component: () =>
                import ('../src/views/Register.vue')
        },
        {
            path: '/termsofuse',
            component: () =>
                import ('../src/views/Termsofuse.vue')
        }
    ]
})