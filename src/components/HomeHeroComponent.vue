<script lang="ts" setup>

const animations = defineModel('animations')
const lightTheme = defineModel('lightTheme')

</script>

<template>
  
  <div class="hero min-h-screen">
    <iframe :class="{'invert': !lightTheme}" class="w-screen h-screen" src="cables/index.html"></iframe>
    
    <div class="hero-content p-10 text-left w-full min-h-screen flex flex-col">

      <!-- hero content -->
      <div class="absolute">
        <div class="flex flex-col text-base">
          <p class="my-0 font-light text-base-content">welcome to my —</p>
          <h1 class="lead my-0 text-7xl font-extrabold text-base-content">portfolio</h1>
        </div>
        <article class="prose prose-slate my-10 lg:prose-lg xl:prose-xl max-w-xs text-justify">
          <p class="indent-10">i create <strong class="text-secondary text-3xl font-extrabold bg-gradient-to-bl from-base-100 to-base-200 px-2">music</strong> and <strong class="text-secondary text-3xl font-extrabold bg-gradient-to-bl from-base-100 to-base-200 px-2">art && visuals</strong>;
          but i seek <strong class="uppercase font-mono">$more_ways</strong> to express my {msgs};<br></p>
          <p class="indent-10 text-sm">you probably got >/here because i sent u the link, so feel free to browse around,,,</p>
          <p class="text-sm indent-10"><em><strong>note:</strong> everything here is still wip,,, </em><em><strong>note:</strong> everything here is still wip,,, </em><em><strong>note:</strong> everything here is still wip,,, </em><em><strong>note:</strong> everything here is still wip,,, </em></p>
        </article>
        <div class="space-x-2">
          <router-link to="/audio">
            <button class="btn btn-secondary hover:btn-ghost">audio works</button>
          </router-link>
          <router-link to="/video">
            <button class="btn btn-secondary hover:btn-ghost">visual works</button>
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