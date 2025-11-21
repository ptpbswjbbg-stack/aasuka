import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import IndexView from '../views/IndexView.vue'
import RegisterView from '../views/RegisterView.vue'
import GroupBooking from '../views/GroupBooking.vue'
import PersonalBooking from '../views/PersonalBooking.vue'
import FamilyBooking from '../views/FamilyBooking.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/home',
    name: 'home',
    component: IndexView
  },
  {
    path: '/groupBooking',
    name: 'groupBooking',
    component: GroupBooking
  },
  {
    path: '/personalBooking',
    name: 'personalBooking',
    component: PersonalBooking
  },
  {
    path: '/familyBooking',
    name: 'familyBooking',
    component: FamilyBooking
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
