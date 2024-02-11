<script setup lang="ts">

const props = defineProps({
  title: String,
  link: String,
  desc: String,
});

const video_id = 'https://streamable.com/e/' + props.link?.replace("https://streamable.com/", "")

</script>

<template>
  <div
    style="position: relative; width: 100%; height: 0px; padding-bottom: 56.25%"
  >
    <iframe
      allow="fullscreen"
      allowfullscreen
      height="100%"
      :src="
        video_id
      "
      width="100%"
      style="
        border: none;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0px;
        top: 0px;
        overflow: hidden;
      "
    ></iframe>
  </div>
</template>
