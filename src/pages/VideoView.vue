<script lang="ts" setup>
import DiscographyVideoC from "../components/DiscographyVideoC.vue";
import StreamableWrapperC from "../components/StreamableWrapperC.vue";
import ModalBackDropC from "../components/ModalBackDropC.vue";
import { useCollection, useFirestore } from "vuefire";
import { collection, query, where } from "firebase/firestore";
import YouTubeWrapperC from "../components/YouTubeWrapperC.vue";
import { Auth } from "firebase/auth";

const modalOpen = defineModel<boolean>("modalOpen");
const auth = defineModel<Auth>("auth");

const db = useFirestore();

let contentRef = collection(db, "video");
let qr = null;

if (auth.value?.currentUser?.emailVerified) {
  qr = ["public", "private"];
} else {
  qr = ["public"];
}

const renders_streamable_q = useCollection(
  query(
    contentRef,
    where("topic", "==", "renders"),
    where("platform", "==", "streamable"),
    where("public_level", "in", qr)
  )
);
const renders_youtube_q = useCollection(
  query(
    contentRef,
    where("topic", "==", "renders"),
    where("platform", "==", "youtube"),
    where("public_level", "in", qr)
  )
);

const mv_streamable_q = useCollection(
  query(
    contentRef,
    where("topic", "==", "mv"),
    where("platform", "==", "streamable"),
    where("public_level", "in", qr)
  )
);
const mv_youtube_q = useCollection(
  query(
    contentRef,
    where("topic", "==", "mv"),
    where("platform", "==", "youtube"),
    where("public_level", "in", qr)
  )
);

const vj_streamable_q = useCollection(
  query(
    contentRef,
    where("topic", "==", "vj"),
    where("platform", "==", "streamable"),
    where("public_level", "in", qr)
  )
);
const vj_youtube_q = useCollection(
  query(
    contentRef,
    where("topic", "==", "vj"),
    where("platform", "==", "youtube"),
    where("public_level", "in", qr)
  )
);

const misc_streamable_q = useCollection(
  query(
    contentRef,
    where("topic", "==", "misc"),
    where("platform", "==", "streamable"),
    where("public_level", "in", qr)
  )
);
const misc_youtube_q = useCollection(
  query(
    contentRef,
    where("topic", "==", "misc"),
    where("platform", "==", "youtube"),
    where("public_level", "in", qr)
  )
);

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
    <div
      class="container flex gap-10 h-fit md:h-screen items-center justify-center"
    >
      <div class="flex flex-col md:flex-row gap-10 pt-20 pb-10">
        <div class="w-screen-xl bg-neutral p-5 md:rounded-3xl justify-center">
          <DiscographyVideoC class="" />
        </div>
        <div class="bg-neutral p-5 md:rounded-3xl justify-center">
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

    <div class="w-screen bg-neutral p-5 md:rounded-3xl justify-center">
      <div class="flex justify-center">
        <article class="prose prose-slate my-6">
          <h1 class="lead my-0">showcase of a few projects</h1>

          <h2>embeddable patches</h2>
          <p class="lead">these are embeds from my cables.gl patches</p>
          <p>
            <em
              >(all are licensed as CC BY-NC-SA 4.0
              [Attribution-NonCommercial-ShareAlike 4.0])</em
            >
          </p>
          <div class="flex flex-col gap-4">
            <!-- <div class="block w-full bg-pink rounded-3xl">
              <button
                class="block w-full bg-pink p-4 rounded-3xl font-bold"
                @click="(modalOpen = true), hideNavBar(true)"
                aria-label="open modal for cables patches"
              >
                click me to show
              </button>
            </div> -->
            <div class="bg-pink">
              <div>
                <iframe
                style="width: 100%; height: 320px; border: 0px"
                src="https://cables.gl/view/65c4aa07436c4b10ec0f34d1"
                ></iframe>
              </div>
              <div class="pt-0 p-4">
                <h4>may i go to sleep again</h4>
                <a href="https://cables.gl/p/xMwLG3">link to patch</a>
              </div>
            </div>
            <div class="bg-pink">
              <div>
                <iframe
                style="width: 100%; height: 320px; border: 0px"
                src="https://cables.gl/view/65c034f2cbaf213b5445a85b"
                ></iframe>
              </div>
              <div class="pt-0 p-4">
                <h4>rocks v2,,,</h4>
                <a href="https://cables.gl/p/jGPZm3">link to patch</a>
              </div>
            </div>
            <div class="bg-pink">
              <div>
                <iframe
                style="width: 100%; height: 320px; border: 0px"
                src="https://cables.gl/view/65bda8ba71656d76fa1f13ab"
                ></iframe>
              </div>
              <div class="pt-0 p-4">
                <h4>may i go to sleep again</h4>
                <a href="https://cables.gl/p/dPfHb3">link to patch</a>
              </div>
            </div>
          </div>

          <h2>renders</h2>
          <p class="lead">
            these are direct renders/patches made with cables.gl / touchdesigner
            / blender / similar workflows without post video production
          </p>
          <div class="flex flex-col gap-10">
            <div v-for="item in renders_streamable_q">
              <StreamableWrapperC :link="item.service_id" :title="item.title" />
            </div>
            <div v-for="item in renders_youtube_q">
              <YouTubeWrapperC :link="item.service_id" :title="item.title" />
            </div>
          </div>

          <h2>music videos / music promo videos</h2>
          <p class="lead">
            these are made with cables.gl / touchdesigner / blender renders, cut
            together in post video production
          </p>
          <div class="flex flex-col gap-10">
            <div v-for="item in mv_streamable_q">
              <StreamableWrapperC :link="item.service_id" :title="item.title" />
            </div>
            <div v-for="item in mv_youtube_q">
              <YouTubeWrapperC :link="item.service_id" :title="item.title" />
            </div>
          </div>

          <h2>vjs (prerendered)</h2>
          <p class="lead">
            these are made with cables.gl / touchdesigner / blender renders, cut
            together in post video production
          </p>
          <div class="flex flex-col gap-10">
            <div v-for="item in vj_streamable_q">
              <StreamableWrapperC :link="item.service_id" :title="item.title" />
            </div>
            <div v-for="item in vj_youtube_q">
              <YouTubeWrapperC :link="item.service_id" :title="item.title" />
            </div>
          </div>

          <h2>misc stuff</h2>
          <p class="lead">drawn in procreate / toonsquid / kita</p>
          <div class="flex flex-col gap-10">
            <div v-for="item in misc_streamable_q">
              <StreamableWrapperC :link="item.service_id" :title="item.title" />
            </div>
            <div v-for="item in misc_youtube_q">
              <YouTubeWrapperC :link="item.service_id" :title="item.title" />
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
  <ModalBackDropC
    v-show="modalOpen"
    @click="(modalOpen = false), hideNavBar(false)"
  ></ModalBackDropC>
</template>
