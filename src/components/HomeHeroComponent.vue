<script lang="ts" setup>

const animations = defineModel('animations')

</script>

<template>
  <div class="hero min-h-screen overflow-x-hidden">
      <div v-if="animations" class="relative flex items-center justify-center overflow-x-hidden h-screen">
      <video autoplay loop muted class="min-w-full min-h-full max-w-none">
        <source src="../assets/logo_untie_animation.webm" type="video/webm">
      </video>
      </div>
      <div class="hero-content text-center w-full hover:backdrop-blur-sm min-h-screen">
        <div class="max-w-md">
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
          <div class="p-2">
            <router-link to="/audio">
              <button class="btn btn-outline text-secondary mx-2">audio works</button>
            </router-link>
            <router-link to="/video">
              <button class="btn btn-outline text-secondary mx-2">visual works</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
</template>