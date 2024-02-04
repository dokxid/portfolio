<script setup lang="ts">
defineProps({
	name: String,
	route: String,
})
</script>

<template>
  <li
    class="group flex flex-col hover:animate-duration-[5s] items-center"
  >
    <router-link :to="$props.route!">{{$props.name}}</router-link>
    <div
      v-bind:class="{ 'invisible': $route.path != $props.route }"
      class="
      rounded-full 
      size-2.5
      h-1.5
      group-hover:visible
      bg-current
      group-hover:bg-ctp-rosewater 
      group-hover:animate-x_scale 
      group-hover:animate-fill-both
    "></div>
  </li>
</template>