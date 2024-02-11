<script lang="ts" setup>
import MockWindow from "../components/MockWindow.vue";
import FAQComponent from "../components/FAQComponent.vue";
import HomeHeroComponent from "../components/HomeHeroComponent.vue";
import DiscographyAudioC from "../components/DiscographyAudioC.vue";
import DiscographyVideoC from "../components/DiscographyVideoC.vue";
import DiscographySocialC from "../components/DiscographySocialC.vue";
import HomeSpacerC from "../components/HomeSpacerC.vue.vue";
import ModalBackDropC from "../components/ModalBackDropC.vue";
import { ref, defineEmits } from "vue";
import LoginModalC from "../components/LoginModalC.vue";
import { Auth } from "firebase/auth";

const animations = defineModel<boolean>("animations");
const lightTheme = defineModel<boolean>("lightTheme");
const modalOpen = defineModel<boolean>("modalOpen");

const emit = defineEmits<{
  hideNavBar: [value: boolean]
}>()

function hideNavBar(value: boolean) {
  emit("hideNavBar", value);
}
</script>

<template>
  <!-- col layout -->
  <div class="flex flex-col w-full">
    <!-- hero content -->
    <HomeHeroComponent
      v-model:animations="animations"
      v-model:lightTheme="lightTheme"
      class="overflow-x-hidden"
      v-model:modalOpen="modalOpen"
      @hide-nav-bar="hideNavBar"
    ></HomeHeroComponent>

    <!-- content -->
    <div class="flex flex-col">
      <div class="px-6 py-14 md:py-40 bg-pink">
        <div class="flex justify-center">
          <MockWindow
            v-model:animations="animations"
            class="max-w-screen-xl"
          ></MockWindow>
        </div>
      </div>

      <HomeSpacerC />

      <div class="bg-lavender px-6 py-14 md:py-40">
        <div class="flex justify-center">
          <div
            class="flex flex-col max-w-screen-xl space-y-6 md:space-y-0 md:space-x-6 md:flex-row"
          >
            <article
              class="prose prose-zinc bg-base-100 p-8 rounded-3xl size-fit"
            >
              <h1 class="text-lavender">about me</h1>
              <ul>
                <li>
                  i make <strong>music</strong> based around breaks and vocaloid
                </li>
                <li>
                  i am also a <strong>visual artist</strong> that focuses on
                  audio visuals and live coding
                </li>
              </ul>
              <p class="">
                i also do other stuff and go by the aliases 'addi_x0_x0_0' and
                '0x22B59C.zxx'
              </p>
            </article>
            <div class="grow">
              <FAQComponent></FAQComponent>
            </div>
          </div>
        </div>
      </div>

      <HomeSpacerC />

      <div class="bg-teal px-6 py-14 md:py-40">
        <div class="flex justify-center">
          <div
            class="flex flex-1 flex-wrap gap-6 justify-center max-w-screen-xl"
          >
            <DiscographyAudioC class="flex-auto" />
            <DiscographyVideoC class="flex-auto" />
            <DiscographySocialC class="flex-auto" />
          </div>
        </div>
      </div>

      <HomeSpacerC />
    </div>
  </div>
</template>
