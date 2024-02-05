<script lang="ts" setup>

import { ref } from 'vue';
import CablesEmbedC from './CablesEmbedC.vue';

const animations = defineModel('animations')
const lightTheme = defineModel('lightTheme')
const failedToLoadCables = ref(true)

function toggleFailedToLoadCables() {
  failedToLoadCables.value = !failedToLoadCables
}

</script>

<template>
  
  <div class="hero min-h-screen">

    <!-- <iframe :class="{'invert': !lightTheme}" class="w-screen h-screen" src="https://cables.gl/view/65bed2afcbaf213b544549c7"></iframe> -->
    
    <!-- <iframe :class="{'invert': !lightTheme}" class="w-screen h-screen" src="https://cables.gl/view/65c034f2cbaf213b5445a85b"></iframe> -->


    <Transition name="toast">
      <div class="toast toast-bottom toast-end m-3 z-50">
        <div v-show="failedToLoadCables" role="alert" class="alert alert-error">
          <span>unable to load cables canvas</span>
        </div>
      </div>
    </Transition>
    <CablesEmbedC
    patchName="rocks/"
    canvasId="othercanvas"
    class=""
    :class="{'invert': !lightTheme}"
    :patchOptions="{
      glCanvasResizeToParent: true,
      onFinishedLoading: toggleFailedToLoadCables
    }"/>
    
    <div class="hero-content p-10 text-left w-full min-h-screen flex flex-col">

      <!-- hero content -->
      <div class="absolute">
        <div class="flex flex-col text-base">
          <p class="my-0 font-light text-base-content">welcome to my —</p>
          <h1 class="lead my-0 text-7xl font-extrabold text-base-content">portfolio</h1>
        </div>
        <article class="prose prose-slate my-10 lg:prose-lg xl:prose-xl max-w-xs text-justify px-2">
          <p class="indent-10">i create <strong class="text-pink text-3xl font-extrabold bg-gradient-to-bl from-base-100 to-base-200 drop-shadow-md">music</strong> and <strong class="text-pink text-3xl font-extrabold bg-gradient-to-bl from-base-100 to-base-200 box-decoration-clone drop-shadow-md">art && visuals</strong>;
          but i seek <strong class="uppercase font-mono">$more_ways</strong> to express my {msgs};<br></p>
          <p class="text-sm indent-10">you probably got >/here because i sent u the link, so feel free to browse around,,,</p>
          <p class="text-sm indent-10"><em><strong>note:</strong> everything here is still wip,,, </em><em><strong>note:</strong> everything here is still wip,,, </em><em><strong>note:</strong> everything here is still wip,,, </em><em><strong>note:</strong> everything here is still wip,,, </em></p>
        </article>
        <div class="flex gap-4 flex-row-reverse">
          <router-link to="/audio">
            <button class="group inline-flex bg-pink outline-2 p-4 text-base rounded-full font-bold items-center hover:bg-transparent hover:outline hover:text-base-content drop-shadow-md">
              audio works
              <img
                class="group-hover:invert-0 invert size-4"
                viewBox="0 0 24 24"
                src="/icons/chevron-right.svg"
                alt="chevron-right"
              />
            </button>
          </router-link>
          <router-link to="/video">
            <button class="group inline-flex bg-pink outline-2 p-4 text-base rounded-full font-bold items-center hover:bg-transparent hover:outline hover:text-base-content drop-shadow-md">
              visual works
              <img
                class="group-hover:invert-0 invert size-4"
                viewBox="0 0 24 24"
                src="/icons/chevron-right.svg"
                alt="chevron-right"
              />
            </button>
          </router-link>
        </div>
      </div>
        
      <!-- scroll animation -->
      <div class="grow"></div>
      <div class="flex justify-center">
        <div v-bind:class="{'animate-bounce animate-repeat-[2] animate-duration-[2s] animate-ease-linear': animations}" class="bg-slate-600 p-2 w-10 h-10 btn-circle">
          <svg class="w-6 h-6 text-base-100" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" viewBox="0 0 24 24" stroke="currentColor" style="--darkreader-inline-stroke: currentColor;" data-darkreader-inline-stroke="">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
        
    </div>      
  </div>
    
    
    
    
    
</template>

<style scoped>

canvas {
  display: block;
  position: absolute;
  outline:0;
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.2s ease-in-out;
}

.toast-enter-from,
.toast-leave-to {
  transform: translateY(-200%);
  opacity: 0;
}

.toast-enter-active,
.toast-leave-active {
  transition: all 2s ease-in;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
}

</style>