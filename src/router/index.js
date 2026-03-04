import About from '@/components/About.vue'
import HomeView from '@/components/HomeView.vue'
import Login from '@/components/Login.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path:'/',
    name:'home',
    component: HomeView
  },
{
  path:'/about',
  name: 'about',
  component:() => import('../components/About.vue')
},
{
  path:'/Login',
  name:'Login',
  component:() => import('../components/Login.vue')
},
{
  path:'/Pokemon',
  name:'Pokemon',
  component:() => import('../components/Pokemon.vue')
},
{
  path:'/pokemon/:name',
  name:'pokemons',
  component: () => import('../components/PokeView.vue'),
  children: [
    {
      path: 'stats', // Se accede como /pokemon/pikachu/stats
      name: 'pokemon-stats',
      component: () => import('../components/PokeStats.vue')
    },
    {
      path: 'abilities', // Se accede como /pokemon/pikachu/abilities
      name: 'pokemon-abilities',
      component: () => import('../components/PokeAbilities.vue')
    }
  ]
}],
})

export default router
