<script setup lang="ts">
const props = defineProps({
  title: String,
  logo: String,
});
</script>

<template>
  <button
    class="btn btn-square sm:btn-circle size-10 sm:h-10 sm:w-20 border-0 bg-slate-700 hover:bg-secondary"
  >
    <img
      class="invert p-2"
      viewBox="0 0 24 24"
      :src="props.logo"
      :alt="props.title"
    />
  </button>
</template>
