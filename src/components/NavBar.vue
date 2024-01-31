<script lang="ts" setup>

const animations = defineModel('animations')

</script>

<template>
<div class="navbar bg-transparent">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><router-link to="/">home</router-link></li>
        <li><router-link to="/audio">audio</router-link></li>
        <li><router-link to="/video">video</router-link></li>
        <li><router-link to="/video">socials</router-link></li>
        <li><router-link to="/video">about</router-link></li>
        <li><router-link to="/test">test</router-link></li>
      </ul>
    </div>
    <div class="text-sm breadcrumbs px-2">
      <ul>
        <li><router-link to="/">bed</router-link></li> 
        <li><a>{{$route.path}}</a></li> 
      </ul>
    </div>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><router-link to="/home">home</router-link></li>
      <li>
        <details>
          <summary>portfolios</summary>
          <ul class="p-2">
            <li><router-link to="/audio">audio</router-link></li>
            <li><router-link to="/video">video</router-link></li>
          </ul>
        </details>
      </li>
      <li><router-link to="/socials">socials</router-link></li>
      <li><router-link to="/about">about</router-link></li>
    </ul>
  </div>
  <div class="navbar-end">
    <!-- <router-link to="/socials">
      <button class="btn btn-ghost">contact me</button>
    </router-link> -->
    <label class="cursor-pointer label">
      <span class="label-text px-2 text-xs">animations</span>
      <input type="checkbox" class="toggle toggle-secondary" v-model="animations">
    </label>
  </div>
</div>
</template>