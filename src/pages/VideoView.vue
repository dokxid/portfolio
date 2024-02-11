<script lang="ts" setup>
import { ref } from "vue";
import DiscographyVideoC from "../components/DiscographyVideoC.vue";
import StreamableWrapperC from "../components/StreamableWrapperC.vue";
import YouTubeWrapperC from "../components/YouTubeWrapperC.vue";
import ModalBackDropC from "../components/ModalBackDropC.vue";
import { useCollection, useDatabase, useFirestore } from "vuefire";
import { query } from "firebase/database";
import { collection } from "firebase/firestore";

// const animations = defineModel("animations")
// const lightTheme = defineModel("lightTheme")

const modalOpen = ref<boolean>(false);
const db = useFirestore();

const content = useCollection(collection(db, "media"));

const emit = defineEmits<{
  hideNavBar: [value: boolean];
}>();

function hideNavBar(value: boolean) {
  emit("hideNavBar", value);
}
</script>

<template>
  <!-- col layout -->
  <div class="flex flex-col justify-center gap-4 w-screen items-center">
    <!-- hero content -->
    <!-- <HomeSpacerC /> -->
    <div class="container flex gap-10 h-screen items-center justify-center">
      <div class="flex flex-row gap-10">
        <div class="w-screen-xl bg-neutral p-5 rounded-3xl justify-center">
          <DiscographyVideoC class="" />
        </div>
        <div class="bg-neutral p-5 rounded-3xl justify-center">
          <div class="flex justify-center">
            <article class="prose prose-slate my-6">
              <h1>visuals.preface.h1</h1>
              <p class="lead">hey welcome to my visuals portfolio,</p>
              <p>
                music is one thing, but it's a great reason for me to touch this
                visual art side of mine, whether it is:
              </p>
              <ul>
                <li>static graphics or drawings,</li>
                <li>traditional animated or keyframed animations,</li>
                <li>full music videos or even silly frag movies,</li>
                <li>aso.</li>
              </ul>
              <p>
                so that's why i decided to start this portfolio, not to brag or
                anything; but to find other artists that aspire to enhance our
                media with even more pretty things,,,
              </p>
              <p>
                i hope you find what you search for, if not: that's okay too!
                thanks for giving me a chance to present you my stuff,,,
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>

    <div class="w-screen bg-neutral p-5 rounded-3xl justify-center">
      <div class="flex justify-center">
        <article class="prose prose-slate my-6">
          <h1 class="lead my-0">some of my projects</h1>
        </article>
      </div>
    </div>
  </div>
  <ModalBackDropC
    v-show="modalOpen"
    @click="(modalOpen = false), hideNavBar(false)"
  ></ModalBackDropC>
</template>
