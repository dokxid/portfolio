<script lang="ts" setup>
import DiscographySocialC from "../components/DiscographySocialC.vue";

const animations = defineModel<boolean>("animations");
const lightTheme = defineModel<boolean>("lightTheme");
const modalOpen = defineModel<boolean>("modalOpen");

</script>

<template>
  <!-- col layout -->
  <div class="flex justify-center items-center grow">
    <!-- hero content -->
      <div class="">
        <DiscographySocialC />
      </div>
  </div>
</template>
