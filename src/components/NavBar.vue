<script lang="ts" setup>
import NavBarButton from "./NavBarButton.vue";

const animations = defineModel("animations");
</script>

<template>
  <div class="flex justify-center">
    <div class="max-w-screen-xl grow">
      <div class="navbar bg-transparent h-20 md:h-32 px-4 sm:px-10 md:px-20">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden p-2">
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
              class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li><router-link to="/">home</router-link></li>
              <li><router-link to="/audio">audio</router-link></li>
              <li><router-link to="/video">visuals</router-link></li>
              <li><router-link to="/socials">socials</router-link></li>
              <li><router-link to="/test">test</router-link></li>
            </ul>
          </div>
          <div class="text-sm breadcrumbs px-6 font-bold">
            <ul>
              <li><router-link to="/">bed</router-link></li>
              <li>
                <a>{{ $route.path }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1 font-semibold">
            <li v-bind:class="{ underline: $route.path == '/' }">
              <router-link to="/">home</router-link>
            </li>
            <li v-bind:class="{ underline: $route.path == '/audio' }">
              <router-link to="/audio">audio</router-link>
            </li>
            <li v-bind:class="{ underline: $route.path == '/video' }">
              <router-link to="/video">visuals</router-link>
            </li>
            <li v-bind:class="{ underline: $route.path == '/socials' }">
              <router-link to="/socials">socials</router-link>
            </li>
            <li v-bind:class="{ underline: $route.path == '/test' }">
              <router-link to="/test">test</router-link>
            </li>
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
                <span class="label-text px-2 text-xs">reduce motion</span>
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
                  data-toggle-theme="dark,light"
                  data-act-class="ACTIVECLASS"
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
</template>

<style></style>
