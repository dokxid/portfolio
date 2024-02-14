import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { themeChange } from 'theme-change'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase'

// import { createPinia } from 'pinia'

import App from './App.vue'
import AudioView from './pages/AudioView.vue'
import VideoView from './pages/VideoView.vue'
import HomeView from './pages/HomeView.vue'
// import TestView from './pages/TestView.vue'
import SocialView from './pages/SocialView.vue'

import './output.css'

// const pinia = createPinia()
themeChange(true)

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomeView },
        { path: '/video', component: VideoView },
        { path: '/audio', component: AudioView },
        { path: '/socials', component: SocialView },
        // { path: '/test', component: TestView },
    ]
});

const app = 
    createApp(App)
    .use(router)
    .use(VueFire, {
            firebaseApp,
            modules: [VueFireAuth()],
        },
    )

app.mount('#app')

