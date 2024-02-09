<script lang="ts" setup>
import DiscographyVideoC from "../components/DiscographyVideoC.vue";
</script>

<template>
  <!-- col layout -->
  <div class="flex flex-col justify-center items-center grow gap-4">
    <!-- hero content -->
    <div class="">
      <DiscographyVideoC />
    </div>
    <div>
      <div class="flex max-w-screen-xl bg-neutral p-5 rounded-3xl items-center">
        <article class="prose prose-slate my-6">
          <h1 class="lead my-0">some of my projects</h1>
        </article>
      </div>
    </div>
  </div>
</template>
