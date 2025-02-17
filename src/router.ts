import { createRouter, createWebHashHistory } from "vue-router"
import HomePage from "./pages/HomePage.vue"
import LandingPage from "./pages/LandingPage.vue"
import LoginPage from "./pages/LoginPage.vue"

const routes = [
    {
        path: '',
        component: LandingPage
    },
    {
        path: '/home',
        component: HomePage
    },
    {
        path: '/login',
        component: LoginPage
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router