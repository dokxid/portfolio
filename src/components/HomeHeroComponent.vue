<script lang="ts" setup>

const animations = defineModel('animations')

</script>

<template>
  
  <div class="hero min-h-screen">
    
    <div class="hero-content p-10 text-left w-full min-h-screen flex flex-col">

      <!-- hero content -->
      <div class="absolute max-w-sm">
        <article class="prose prose-slate my-10">
          <div class="flex flex-col">
            <p class="my-0">welcome to my —</p>
            <h1 class="lead my-0">portfolio</h1>
          </div>
          <p class="">
            i create <strong class="text-secondary">music</strong> and <strong class="text-secondary">art / visuals</strong>;<br>
            but i seek <strong>more ways</strong> to express my {msgs};<br></p>
            <p>you probably got >/here because i sent u the link, so feel free to browse around,,,</p>
            <p class="text-sm"><em><strong>note:</strong> everything here i still wip,,,</em></p>
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
        <div v-bind:class="{'animate-bounce': animations}" class="bg-slate-600 p-2 w-10 h-10 btn-circle">
          <svg class="w-6 h-6 text-base-100" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" viewBox="0 0 24 24" stroke="currentColor" style="--darkreader-inline-stroke: currentColor;" data-darkreader-inline-stroke="">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
        
    </div>      
  </div>
    
    
    
    
    
  </template>