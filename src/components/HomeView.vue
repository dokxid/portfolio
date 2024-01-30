<template>

  <!-- col layout -->
  <div class="flex flex-col w-full">

    <!-- hero content -->
    <div class="hero min-h-screen overflow-x-hidden">
      <div class="relative flex items-center justify-center overflow-x-hidden h-screen blur-sm">
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
              i create <strong class="text-primary">music</strong> and <strong class="text-secondary">art / visuals</strong>;<br>
              but i seek <strong>more ways</strong> to express my {msgs};<br></p>
              <p>you probably got >/here because i sent u the link, so feel free to browse around,,, </p>
          </article>
          <div class="p-2">
            <router-link to="/audio">
              <button class="btn btn-outline text-primary mx-2">audio works</button>
            </router-link>
            <router-link to="/video">
              <button class="btn btn-outline text-secondary mx-2">visual works</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- content -->
    <div class="">
      <div class="mockup-window border border-base-300 max-w-md my-40">
        <div class="flex justify-center px-4 py-16 border-t border-base-300">Hello!</div>
      </div>
    </div>

  </div>

</template>