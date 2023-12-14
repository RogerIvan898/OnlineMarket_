import {createRouter,RouterOptions,createWebHistory} from 'vue-router'
import App_ from './App_.vue'
import LogIn from "./components/LogIn.vue"
import Cart from "./components/cart.vue"
import SingUp from "./components/singUp.vue"


type RouteConfig={
    path:string,
    name:string,
    component: any,
}

const navRoutes = <Array<RouteConfig>> [
    {path:'/',name:'home',component: App_},
    {path:'/cart',name:'cart',component:Cart},

    {path:'/a',name:'a',component:LogIn},
    {path:'/singUp',name:'singUp',component:SingUp}

]
const RouterOptions = <RouterOptions>{
    history:createWebHistory(),
    routes: navRoutes
}


const router = createRouter(RouterOptions)
export default router