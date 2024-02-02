<script lang="ts" setup>

  import NavBar from './components/NavBar.vue'
  import './output.css'

  const settings = defineProps({
    animations: {
      type: Boolean,
      default: true,
    },
    showNavBar: Boolean,
  })

</script>

<template>
  <div class="bg-base-100">

    <!-- navbar -->
    <NavBar v-model:animations="settings.animations" class="fixed top-0 left-0 z-50 w-full"></NavBar>

    <!-- router-view -->
    <div class="flex flex-col h-screen">
      <div class="flex flex-grow">
        <router-view v-model:animations="settings.animations"></router-view>
      </div>
    </div>

  </div>
</template>