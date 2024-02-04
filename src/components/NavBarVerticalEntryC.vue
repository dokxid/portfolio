<script setup lang="ts">
defineProps({
	name: String,
	route: String,
})
</script>

<template>
  <li
    v-bind:class="{ '[&_div]:visible': $route.path == $props.route }"
    class="flex hover:animate-pulse"
  >
    <div class="h-min">
      <div
        class="w-1 h-full bg-ctp-rosewater invisible grow-0 size-min"
      ></div>
      <router-link :to="$props.route!" >{{$props.name}}</router-link>
    </div>
  </li>
</template>
