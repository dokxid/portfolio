<script setup lang="ts">

const props = defineProps({
  title: String,
  link: String,
  desc: String,
});

const video_id =
  "https://www.youtube-nocookie.com/embed/" +
  props.link?.replace("https://www.youtube.com/watch?v=", "")

</script>

<template>
  <div
    style="position: relative; width: 100%; height: 0px; padding-bottom: 56.25%"
  >
    <iframe
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
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
</template>
