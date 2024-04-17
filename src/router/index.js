import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentView from '../views/Students/View.vue'
import StudentCreate from '../views/Students/Create.vue'
import StudentEdit from '../views/Students/Edit.vue'
import StudentShow from '../views/Students/Show.vue'
import Register from '../views/Register/Register.vue'
import Login from '../views/Login/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/students',
      name: 'students',
      component: StudentView
    },
    {
      path: '/students/create',
      name: 'studentCreate',
      component: StudentCreate
    },

    {
      path: '/students/:id/edit',
      name: 'studentEdit',
      component: StudentEdit
    },
    {
      path: '/students/:id',
      name: 'studentShow',
      component: StudentShow
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
