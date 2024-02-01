<script lang="ts" setup>

const animations = defineModel('animations')

</script>

<template>
  <div class="movearea mockup-window border border-base-300 max-w-md bg-neutral flex flex-col">
    <div class="justify-center p-7 border-t border-base-300">
      <code>are you ready to make this world a prettier place,,,</code>
      <!-- background animation -->
      <div v-show="animations" class="relative animate-rotational-wave items-center justify-center overflow-x-hidden">
        <video autoplay loop muted class="min-w-full min-h-full">
          <source src="../assets/logo_untie_animation.webm" type="video/webm">
        </video>
      </div>
    </div>
  </div>
</template>