<script setup lang="ts">
import SocialMediaButton from "./SocialMediaButton.vue";
</script>

<template>
  <div class="text-center">
    <div class="flex flex-col max-w-screen-xl bg-neutral p-5 rounded-3xl items-center">
      <article class="prose prose-slate my-6">
        <h1 class="lead my-0">
          socials
        </h1>
      </article>
      <div class="space-y-6">
        <div class="flex p-2 space-y-4 justify-center">
          <div class="grid grid-flow-col auto-cols-max gap-3">
            <SocialMediaButton
              logo="brand/x.svg"
              title="x(twitter)"
              link="https://twitter.com/dokxid"
            ></SocialMediaButton>
            <SocialMediaButton
              logo="brand/instagram.svg"
              title="instagram"
              link="https://www.instagram.com/dokxiduwu/"
            ></SocialMediaButton>
            <SocialMediaButton
              logo="brand/github.svg"
              title="github"
              link="https://github.com/dokxid"
            ></SocialMediaButton>
            <SocialMediaButton
              logo="icons/mail.svg"
              title="email"
              link="mailto:dokxid@gmail.com"
            ></SocialMediaButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
