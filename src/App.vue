<script lang="ts" setup>

  import { ref } from 'vue';
  import NavBar from './components/NavBar.vue'
  import './output.css'

  const settings = ref({
    animations: true
  })

</script>

<template>
  <div class="bg-base-100">

    <!-- navbar -->
    <NavBar v-model:animations="settings.animations" class="absolute top-0 left-0 flex-initial z-50"></NavBar>

    <!-- router-view -->
    <div class="flex flex-col h-screen">
      <div class="flex flex-grow">
        <router-view v-model:animations="settings.animations"></router-view>
      </div>
    </div>

  </div>
</template>