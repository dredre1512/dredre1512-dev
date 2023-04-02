

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/news', component: async () => await import('./Pages/NewsAPI.vue') },
  { path: '/countries', component: async () => await import('./Pages/CountryAPI.vue') },
  { path: '/cats', component: async () => await import('./Pages/CatAPI.vue') },
  { path: '/quotes', component: async () => await import('./Pages/RandomQuotes.vue') },
  { path: '/ted-talk', component: async () => await import('./Pages/TedTalk.vue') },
  { path: '/', component: async () => await import('./Pages/Home.vue') },
  { path: '/numbers', component: async () => await import('./Pages/Numbers.vue') },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router