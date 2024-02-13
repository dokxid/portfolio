<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";
import NavBar from "./components/NavBar.vue";
import { User, getAuth, onAuthStateChanged, signInAnonymously, signInWithEmailAndPassword, signOut } from "firebase/auth";
import ModalBackDropC from "./components/ModalBackDropC.vue";
import LoginModalC from "./components/LoginModalC.vue";

const animations = ref(true);
const showNavBar = ref(true);
const overrideShowNavBar = ref(false);
const atTop = ref(true);
const lightTheme = ref(true);
const modalOpen = ref<boolean>(false);
const modalC = LoginModalC;
const user = ref<User>()

const auth = getAuth();

signInAnonymously(auth).then((userCredential) => {
  user.value = userCredential.user
})

// signInWithEmailAndPassword(
//   auth,
//   import.meta.env.VITE_EMAIL!,
//   import.meta.env.VITE_PW!
// )
//   .then((userCredential) => {
//     const user = userCredential.user;
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in.
    // ...
  } else {
    // User is not signed in.
    // ...
  }
});

var startY = 0;

function handleScroll() {
  if (overrideShowNavBar.value) {
    showNavBar.value = false;
    return 0;
  } else {
    let scrollY = window.scrollY;
    if (scrollY > startY) {
      showNavBar.value = false;
    } else {
      showNavBar.value = true;
    }
    if (scrollY == 0 || startY == 0) {
      atTop.value = true;
    } else {
      atTop.value = false;
    }
    startY = scrollY;
  }
}

function hideNavBar(value: boolean) {
  overrideShowNavBar.value = value;
  handleScroll();
}

onMounted(() => window.addEventListener("scroll", handleScroll));
localStorage.setItem("theme", "latte");

onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<template>
  <div class="bg-base-100 z-40">
    <!-- navbar -->
    <NavBar
      @toggleTheme="lightTheme = !lightTheme"
      :showNavBar="showNavBar"
      :atTop="atTop"
      v-model:animations="animations"
      :overrideShowNavBar="overrideShowNavBar"
      class="fixed top-0 left-0 z-50 w-full"
    ></NavBar>

    <!-- router-view -->
    <div class="flex flex-col h-screen">
      <div class="flex flex-grow z-20">
        <router-view
          v-model:animations="animations"
          v-model:lightTheme="lightTheme"
          v-model:modalOpen="modalOpen"
          @hide-nav-bar="hideNavBar"
        ></router-view>
      </div>
      <ModalBackDropC
        v-show="modalOpen"
        @backdrop-clicked="(modalOpen = false), hideNavBar(false)"
        class="fixed z-50"
      >
        <component :is="modalC" v-model:auth="auth" v-model:user="user" class="z-40" @leave-view="(modalOpen = false), hideNavBar(false)"></component>
      </ModalBackDropC>
    </div>
  </div>
</template>
