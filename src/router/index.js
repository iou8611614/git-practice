import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    alias: '/anotherAbout',
    name: 'About',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue'),
    redirect:'/blog/leftSideBar',
    children:[
      {
        path: 'contentPage/:userId/posts/:message',
        name:'ContentPage',
        props: true,
        component: ()=>import('../views/contentPage.vue')
      },
      {
        path: 'leftSideBar',
        component: ()=>import('../views/leftSideBar.vue')
      }
    ]
  },
  {
    path:"/:pathMatch(.*)",
    component: ()=>import('../views/ErrorPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from)=>{
  console.log("To ==> ",to)
  console.log("From ==> ",from)
})

export default router
