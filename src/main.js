import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { auth } from '@/includes/firebase'
// import { useAppStateStore } from './store/store';

let app

auth.onAuthStateChanged(() => {
  console.log('inside onAuthStateChanged')
  if (app) return
  app = createApp(App)
  const pinia = createPinia()

  app.use(pinia)
  app.use(router)
  app.mount('#app')
})
