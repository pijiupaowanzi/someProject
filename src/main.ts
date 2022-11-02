import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import router from './router'
import 'uno.css'
import 'aos/dist/aos.css'
import Aos from 'aos'

Aos.init({
	once: true,
	duration: 800,
	easing: 'ease-in-out'
})

createApp(App).use(store).use(router).mount('#app')
