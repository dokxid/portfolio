<script setup>
  import NavBar from './components/NavBar.vue'
  import './output.css'
</script>

<template>
  <div class="bg-base-100">
    <NavBar class="absolute top-0 left-0 flex-initial z-50"></NavBar>
    <div class="flex flex-col h-screen">
      <div class="flex flex-grow">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>