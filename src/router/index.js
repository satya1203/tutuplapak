import Vue from 'vue'
import Router from 'vue-router'

import Header from '../components/Header.vue'
import Home from '../components/Home.vue'
import Footer from '../components/Footer.vue'
import Cart from '../components/Cart.vue'
import Checkout from '../components/Checkout.vue'
import Contact from '../components/Contact.vue'
import Order from '../components/Order.vue'
import Profile from '../components/Profile.vue'
import Sell from '../components/Sell.vue'
import Signin from '../components/Sign in.vue'
import Signup from '../components/Sign up.vue'
import Grid from '../components/Grid.vue'
import Blog from '../components/Blog.vue'

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
            path: '/Contact',
            component: Contact,
            name: 'Contact'
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
            path: '/Signin',
            component: Signin,
            name: 'Signin'
        },
        {
            path: '/Signup',
            component: Signup,
            name: 'Signup'
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
        {
            path: '/Blog',
            component: Blog,
            name: 'Blog'
        }
    ]
})

export default router