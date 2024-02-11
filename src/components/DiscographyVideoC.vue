<script setup lang="ts">
import SocialMediaButton from "./SocialMediaButton.vue";
</script>

<template>
  <div class="text-center">
    <div class="flex flex-col bg-neutral p-5 rounded-3xl items-center">
      <article class="prose prose-slate my-6">
        <h1 class="lead my-0">
          visuals
        </h1>
      </article>
      <div class="space-y-6">
        <div class="flex p-2 space-y-4 justify-center">
          <div class="grid grid-flow-col auto-cols-auto gap-3">
            <SocialMediaButton
              logo="brand/youtube.svg"
              title="YouTube(main)"
              link="https://youtube.com/@dokxid"
            ></SocialMediaButton>
            <SocialMediaButton
              logo="brand/youtube.svg"
              title="YouTube(visuals)"
              link="https://youtube.com/@dokxidAVA"
            ></SocialMediaButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
