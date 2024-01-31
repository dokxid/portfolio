<script lang="ts" setup>

import FAQComponent from '../components/FAQComponent.vue';

const animations = defineModel('animations')

</script>

<template>

  <!-- col layout -->
  <div class="flex flex-col w-full">

    <!-- hero content -->
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

    <!-- content -->
    <div class="flex flex-col">
      <div class="bg-primary px-6 pb-3 pt-14">
        <article class="prose prose-zinc bg-base-100 p-8 rounded-3xl max-w-lg">
          <h1 class="text-primary">about me</h1>
          <ul>
            <li>i make <strong>music</strong> based around breaks and vocaloid</li>
            <li>i am also a <strong>visual artist</strong> that focuses on audio visuals and live coding</li>
          </ul>
          <p class="">i also do other stuff and go by the aliases 'addi_x0_x0_0' and '0x22B59C.zxx'</p>
        </article>
        <div class="my-7 max-w-lg">
          <FAQComponent></FAQComponent>
        </div>
      </div>
      <div class="px-6 py-14">
        <div class="mockup-window border border-base-300 max-w-md bg-base-100">
          <div class="flex justify-center px-4 py-16 border-t border-base-300"><pre><code>i like creating stuff,,,</code></pre></div>
        </div>
      </div>
    </div>


  </div>

</template>