<script setup lang="ts">
import { onBeforeUnmount } from 'vue';
const emits = defineEmits<{
  backdropClicked: []
}>()

function backdropClicked() {
  console.log('backdrop-clicked')
  emits('backdropClicked')
}

onBeforeUnmount(() => {
  emits('backdropClicked')
})
</script>

<template>
  <div
    class="flex fixed w-screen h-screen bg-black bg-opacity-70 justify-center items-center"
    @click.self="backdropClicked"
    @wheel.prevent
    @touchmove.prevent
    @scroll.prevent
  >
    <slot class="absolute" @leaveView="backdropClicked"></slot>
  </div>
</template>
