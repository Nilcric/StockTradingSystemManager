import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: () => import('./views/HelloWorld')
        },
        {
            path: "/Home",
            name: "Home",
            component: () => import('./views/Home')
        },
        {
            path: "/Login",
            name: "Login",
            component: () => import('./views/Login')
        },
        {
            path: "/Stock",
            name: "Stock",
            component: () => import('./views/Stock')
        },
        {
            path: "/Finance",
            name: "Finance",
            component: () => import('./views/Finance')
        },
        {
            path: "/Buy",
            name: "Buy",
            component: () => import('./views/Buy')
        },
        {
            path: "/Sell",
            name: "Sell",
            component: () => import('./views/Sell')
        },
        {
            path: "/Search",
            name: "Search",
            component: () => import('./views/Search')
        },
        {
            path: "/Command",
            name: "Command",
            component: () => import('./views/Command')
        },
        {
            path: "/Result",
            name: "Result",
            component: () => import('./views/Result')
        },
        {
            path: "/Setting",
            name: "Setting",
            component: () => import('./views/Setting')
        },
        {
            path: "/Alert",
            name: "Alert",
            component: () => import('./views/Alert')
        }
    ]
})
