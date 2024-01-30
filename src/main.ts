import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import VueAnimateOnScroll from 'vue-animate-onscroll'

import App from './App.vue'
import AudioView from './components/AudioView.vue'
import VideoView from './components/VideoView.vue'
import HomeView from './components/HomeView.vue'
import TestView from './components/TestView.vue'

import './output.css'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomeView },
        { path: '/video', component: VideoView },
        { path: '/audio', component: AudioView },
        { path: '/test', component: TestView },
    ]
});

const app = createApp(App)

app.use(router);
app.use(VueAnimateOnScroll)

app.mount('#app')