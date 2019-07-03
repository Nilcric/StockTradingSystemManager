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
            path: "/ViewBuyInstructions",
            name: "ViewBuyInstructions",
            component: () => import('./views/ViewBuyInstructions')
        },
        {
            path: "/ViewSellInstructions",
            name: "ViewSellInstructions",
            component: () => import('./views/ViewSellInstructions')
        },
        {
            path: "/Claim",
            name: "Claim",
            component: () => import('./views/Claim')
        }
    ]
})
