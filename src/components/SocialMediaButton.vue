<script setup lang="ts">
const props = defineProps({
  title: String,
  logo: String,
  link: String,
})
</script>

<template>
  <a :href="link">
    <button
      class="btn btn-square rounded-2xl md:btn-circle size-12 md:w-20 md:h-16 border-0 bg-slate-700 hover:bg-secondary"
    >
      <img
        class="invert p-2 md:p-3 size-12 md:size-16"
        viewBox="0 0 24 24"
        :src="props.logo"
        :alt="props.title"
      />
    </button>
  </a>
</template>
