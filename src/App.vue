<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";
import NavBar from "./components/NavBar.vue";
import "./output.css";

const animations = ref(true)
const showNavBar = ref(true)
const atTop = ref(true)
const lightTheme = ref(true)

var startY = 0;

function handleScroll() {
  let scrollY = window.scrollY
  if (scrollY > startY) {
    showNavBar.value = false
  } else {
    showNavBar.value = true
  }
  if (scrollY == 0 || startY == 0) {
    atTop.value = true
  } else {
    atTop.value = false
  }
  startY = scrollY;
}

onMounted(
  () => window.addEventListener("scroll", handleScroll),
);
localStorage.setItem('theme', 'latte')

onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<template>
  <div class="bg-base-100">
    <!-- navbar -->
    <NavBar
      @toggleTheme="lightTheme = !lightTheme"
      v-model:showNavBar="showNavBar"
      v-model:atTop="atTop"
      v-model:animations="animations"
      class="fixed top-0 left-0 z-50 w-full"
    ></NavBar>

    <!-- router-view -->
    <div class="flex flex-col h-screen">
      <div class="flex flex-grow">
        <router-view v-model:animations="animations" v-model:lightTheme="lightTheme"></router-view>
      </div>
    </div>
  </div>
</template>
