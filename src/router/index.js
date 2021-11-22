import Vue from 'vue'
import Router from 'vue-router'

import Header from '../components/Header.vue'
import Home from '../components/Home.vue'
import Footer from '../components/Footer.vue'
import Cart from '../components/Cart.vue'
import Checkout from '../components/Checkout.vue'
import Order from '../components/Order.vue'
import Profile from '../components/Profile.vue'
import Sell from '../components/Sell.vue'
import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue'
import Grid from '../components/Grid.vue'

Vue.use(Router)
const router = new Router({
    routes: [
        {
            path: '/Header',
            component: Header,
            name: 'Header'
        },
        {
            path: '/',
            component: Home,
            name: 'Home'
        },
        {
            path: '/Cart',
            component: Cart,
            name: 'Cart'
        },
        {
            path: '/Footer',
            component: Footer,
            name: 'Footer'
        },
        {
            path: '/Checkout',
            component: Checkout,
            name: 'Checkout'
        },
        {
            path: '/Order',
            component: Order,
            name: 'Order'
        },
        {
            path: '/Profile',
            component: Profile,
            name: 'Profile'
        },
        {
            path: '/SignIn',
            component: SignIn,
            name: 'SignIn'
        },
        {
            path: '/SignUp',
            component: SignUp,
            name: 'SignUp'
        },
        {
            path: '/Sell',
            component: Sell,
            name: 'Sell'
        },
        {
            path: '/Grid',
            component: Grid,
            name: 'Grid'
        },
    ]
})

export default router