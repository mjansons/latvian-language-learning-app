import './assets/main.css'
import './assets/buttons.css'
import './assets/tables.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import useTestStore from './stores/TestStore'

const app = createApp(App)

app.use(createPinia())

const testStore = useTestStore()

testStore.getTestResults()

app.use(router)

app.mount('#app')
