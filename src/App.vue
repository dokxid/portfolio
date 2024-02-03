<script lang="ts" setup>

  import { onMounted, onUnmounted, ref } from 'vue';
  import NavBar from './components/NavBar.vue'
  import './output.css'

  const animations = ref(true)
  const showNavBar = ref(true)

  var startY = 0

  function handleScroll() {
    let scrollY = window.scrollY
    if (scrollY > startY) {
      showNavBar.value = false
    } else {
      showNavBar.value = true
    }
    startY = scrollY
  }

  onMounted(() =>
    window.addEventListener('scroll', handleScroll)
  )

  onUnmounted(() =>
    window.removeEventListener('scroll', handleScroll)
  )

  
  

</script>

<template>
  <div class="bg-base-100">

    <!-- navbar -->
    <NavBar v-model:showNavBar="showNavBar" v-model:animations="animations" class="fixed top-0 left-0 z-50 w-full"></NavBar>


    <!-- router-view -->
    <div class="flex flex-col h-screen">
      <div class="flex flex-grow">
        <router-view v-model:animations="animations"></router-view>
      </div>
    </div>

  </div>
</template>