<script lang="ts" setup>
import { Auth } from "firebase/auth";
import NavBarButton from "./NavBarButton.vue";
import NavBarHorizontalEntryC from "./NavBarHorizontalEntryC.vue";
import NavBarVerticalEntryC from "./NavBarVerticalEntryC.vue";
import { ref } from "vue";

const props = defineProps(["overrideShowNavBar", "showNavBar", "atTop"]);
const animations = defineModel("animations");
const auth = defineModel<Auth>("auth");
const loginState = ref(false)

const emit = defineEmits<{
  showLogin: []
}>()

function showLogin() {
  emit("showLogin");
}

auth.value?.onAuthStateChanged(() => {
  loginState.value = auth.value?.currentUser !== null
})

</script>

<template>
  <Transition name="fade">
    <div
      v-show="props.showNavBar && !props.overrideShowNavBar"
      v-bind:class="{ 'text-gray-200 to-slate-50': $route.path == '/test' }"
      class="flex justify-center"
      :class="{
        'bg-base-100': props.showNavBar && !atTop && $route.path != '/test',
      }"
    >
      <div class="max-w-screen-2xl grow">
        <div class="navbar bg-transparent h-20 md:h-32 px-4 sm:px-10 md:px-20">
          <div class="navbar-start">
            <div class="flex flex-auto gap-6 items-center max-w-fit px-2">
              <div class="dropdown">
                <div
                  tabindex="0"
                  role="button"
                  class="btn btn-ghost p-2 lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabindex="0"
                  class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box"
                >
                  <NavBarVerticalEntryC name="home" route="/" />
                  <NavBarVerticalEntryC name="audio" route="/audio" />
                  <NavBarVerticalEntryC name="video" route="/video" />
                  <NavBarVerticalEntryC name="socials" route="/socials" />
                  <NavBarVerticalEntryC name="test" route="/test" />
                </ul>
              </div>
              <div class="text-sm breadcrumbs font-bold">
                <ul>
                  <li><router-link to="/">bed</router-link></li>
                  <li>
                    <a>{{ $route.path }}</a>
                  </li>
                  <li>
                    <!-- TODO, update dom on auth.onAuthChanged event -->
                    <a @click="showLogin">{{ loginState ? auth?.currentUser?.displayName : 'sign in' }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="navbar-center hidden lg:flex">
            <ul class="inline-flex gap-4 px-1 font-semibold">
              <NavBarHorizontalEntryC name="home" route="/" />
              <NavBarHorizontalEntryC name="audio" route="/audio" />
              <NavBarHorizontalEntryC name="video" route="/video" />
              <NavBarHorizontalEntryC name="socials" route="/socials" />
              <NavBarHorizontalEntryC name="test" route="/test" />
            </ul>
          </div>
          <div class="navbar-end">
            <!-- <router-link to="/socials">
            <button class="btn btn-ghost">contact me</button>
          </router-link> -->
            <nav-bar-button
              logo="icons/settings.svg"
              onclick="settings_modal.showModal()"
            ></nav-bar-button>
            <dialog id="settings_modal" class="modal">
              <div class="modal-box max-w-sm">
                <h3 class="font-bold text-lg">settings</h3>
                <label class="cursor-pointer label">
                  <span class="label-text px-2 text-xs">animations</span>
                  <input
                    type="checkbox"
                    class="toggle toggle-secondary"
                    v-model="animations"
                  />
                </label>
                <label class="cursor-pointer label">
                  <span class="label-text px-2 text-xs">dark mode</span>
                  <input
                    type="checkbox"
                    class="toggle toggle-secondary"
                    data-toggle-theme="mocha,latte"
                    data-act-class="ACTIVECLASS"
                    @click="$emit('toggleTheme')"
                  />
                </label>
              </div>
              <form method="dialog" class="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(-200%);
  opacity: 0;
}
</style>
