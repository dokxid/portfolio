<script lang="ts" setup>

const animations = defineModel('animations')

</script>

<template>
  <div class="movearea mockup-window border border-base-300 max-w-md bg-neutral flex flex-col">
    <div class="justify-center p-7 border-t border-base-300 overflow-hidden">
      <code>are you ready to make this world a prettier place,,,</code>
      <!-- background animation -->
      <div class="flex relative items-center justify-center">
        <video v-show="animations" autoplay loop muted class="min-w-full min-h-full">
          <source src="https://firebasestorage.googleapis.com/v0/b/dokxid-pf.appspot.com/o/media%2Flogo_untie_animation.webm?alt=media&token=85a78363-d703-4d0e-b32b-330b4952f7f6" type="video/webm">
        </video>
        <img v-show="!animations" src="../assets/logo_white.png" width="200" height="200" />
        <!-- <div class="w-[1200px] h-[700px]"></div> -->
      </div>
    </div>
  </div>
</template>
