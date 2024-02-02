<script setup lang="ts">
import SocialMediaButton from "./SocialMediaButton.vue";
</script>

<template>
  <div class="text-center">
    <div class="flex flex-col max-w-screen-xl bg-neutral p-5 rounded-3xl items-center">
      <article class="prose prose-slate my-6">
        <h1 class="lead my-0">
          audio
        </h1>
      </article>
      <div class="space-y-6">
        <div class="flex p-2 space-y-4 justify-center">
          <div class="grid grid-cols-4 gap-3">
            <SocialMediaButton
              logo="brand/soundcloud.svg"
              title="SoundCloud(dokxid)"
              link="https://soundcloud.com/dokxid"
            ></SocialMediaButton>
            <SocialMediaButton
              logo="brand/soundcloud.svg"
              title="SoundCloud(addi_x0_x0_0)"
              link="https://soundcloud.com/addi_x0_x0_0"
            ></SocialMediaButton>
            <SocialMediaButton
              logo="brand/soundcloud.svg"
              title="SoundCloud(0x22B59C.zxx)"
              link="https://soundcloud.com/0x22b59c-zxx"
            ></SocialMediaButton>
            <SocialMediaButton
              logo="brand/bandcamp.svg"
              title="Bandcamp"
              link="https://bandcamp.com/dokxid"
            ></SocialMediaButton>
            <SocialMediaButton
              logo="brand/youtube.svg"
              title="YouTube"
              link="https://youtube.com/@dokxid"
            ></SocialMediaButton>
            <SocialMediaButton
              logo="brand/spotify.svg"
              title="SoundCloud(0x22B59C.zxx)"
              link="https://soundcloud.com/0x22b59c-zxx"
            ></SocialMediaButton>
            <SocialMediaButton
              logo="brand/applemusic.svg"
              title="SoundCloud(0x22B59C.zxx)"
              link="https://soundcloud.com/0x22b59c-zxx"
            ></SocialMediaButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
