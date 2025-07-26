import { createRouter, createWebHistory } from 'vue-router'
import Cart from '../views/Cart.vue'
import MenuPage from '../views/MenuPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/menu',
      name: 'menu',
      component: MenuPage,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
  ],
})

export default router
