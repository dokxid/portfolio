<script lang="ts" setup>
import MockWindow from "../components/MockWindow.vue";
import FAQComponent from "../components/FAQComponent.vue";
import HomeHeroComponent from "../components/HomeHeroComponent.vue";
import DiscographyAudioC from "../components/DiscographyAudioC.vue";
import DiscographyVideoC from "../components/DiscographyVideoC.vue";
import DiscographySocialC from "../components/DiscographySocialC.vue";
import HomeSpacerC from '../components/HomeSpacerC.vue.vue'

const animations = defineModel("animations");
</script>

<template>
  <!-- col layout -->
  <div class="flex flex-col w-full">
    <!-- hero content -->
    <HomeHeroComponent
      v-model:animations="animations"
      class="overflow-x-hidden"
    ></HomeHeroComponent>

    <!-- content -->
    <div class="flex flex-col">
      <div class="px-6 py-14 md:py-40 bg-secondary">
        <div class="flex justify-center">
          <MockWindow
            v-model:animations="animations"
            class="max-w-screen-xl"
          ></MockWindow>
        </div>
      </div>

      <HomeSpacerC />

      <div class="bg-primary px-6 py-14 md:py-40">
        <div class="flex justify-center">
          <div
            class="flex flex-col max-w-screen-xl space-y-6 md:space-y-0 md:space-x-6 md:flex-row"
          >
            <article
              class="prose prose-zinc bg-base-100 p-8 rounded-3xl size-fit"
            >
              <h1 class="text-primary">about me</h1>
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

      <div class="bg-ctp-red px-6 py-14 md:py-40">
        <div class="flex justify-center">
          <div
            class="flex gap-6 flex-wrap justify-center"
          >
            <DiscographyAudioC class="grow"/>
            <DiscographyVideoC class="grow"/>
            <DiscographySocialC class="grow"/>
          </div>
        </div>
      </div>

      <HomeSpacerC />

    </div>
  </div>
</template>
