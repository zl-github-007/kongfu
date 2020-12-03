import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
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
        },
        {
            path: '/index',
            component: () =>
                import ('../src/views/Index.vue')
        },
        {
            path: '/function',
            component: () =>
                import ('../src/views/Function.vue')
        },
        {
            path: '/user',
            component: () =>
                import ('../src/views/User.vue')
        },
        {
            path: '/growseedlings',
            component: () =>
                import ('../src/index/Growseedlings.vue')
        },
        {
            path: '/meteorologicalwarning',
            component: () =>
                import ('../src/index/Meteorologicalwarning.vue')
        },
        {
            path: '/workingcondition',
            component: () =>
                import ('../src/index/Workingcondition.vue')
        },
        {
            path: '/povertyalleviation',
            component: () =>
                import ('../src/index/Povertyalleviation.vue')
        },
        {
            path: '/demonstrationhouseholds',
            component: () =>
                import ('../src/index/Demonstrationhouseholds.vue')
        },
        {
            path: '/train',
            component: () =>
                import ('../src/index/Train.vue')
        },
        {
            path: '/headlines',
            component: () =>
                import ('../src/index/Headlines.vue')
        },
        {
            path: '/notice',
            component: () =>
                import ('../src/index/Notice.vue')
        },
        {
            path: '/news',
            component: () =>
                import ('../src/index/News.vue')
        },
        {
            path: '/policy',
            component: () =>
                import ('../src/index/Policy.vue')
        },
        {
            path: '/pestcontrol',
            component: () =>
                import ('../src/index/Pestcontrol.vue')
        },
        {
            path: '/exhibition',
            component: () =>
                import ('../src/index/Exhibition.vue')
        },
        {
            path: '/policytwo',
            component: () =>
                import ('../src/index/Policytwo.vue')
        },
        {
            path: '/cooperation',
            component: () =>
                import ('../src/index/Cooperation.vue')
        },
        {
            path: '/problem',
            component: () =>
                import ('../src/function/Problem.vue')
        },
        {
            path: '/literature',
            component: () =>
                import ('../src/function/Literature.vue')
        },
        {
            path: '/knowledgebase',
            component: () =>
                import ('../src/function/Knowledgebase.vue')
        },
        {
            path: '/collection',
            component: () =>
                import ('../src/user/Collection.vue')
        },
        {
            path: '/download',
            component: () =>
                import ('../src/user/Download.vue')
        },
        {
            path: '/putquestionsto',
            component: () =>
                import ('../src/user/Putquestionsto.vue')
        },
        {
            path: '/management',
            component: () =>
                import ('../src/user/Management.vue')
        }
    ]
})

router.beforeEach((to, from, next) => {
    let islogin = localStorage.getItem("user");
    if (islogin) {
        next();
    } else if (to.path === '/') {
        next();
    } else if (to.path === '/register') {
        next();
    } else if (to.path === '/termsofuse') {
        next();
    } else {
        next('/')
    }
})
export default router