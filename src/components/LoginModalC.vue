<script setup lang="ts">
import { Auth, signInAnonymously, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { onMounted, ref } from "vue";

import imgUrl from "./../assets/logo_white.png";

const error = ref(null);
const email = ref("");
const password = ref("");
const loginState = ref(false)

const auth = defineModel<Auth>("auth")

const emit = defineEmits<{
  leaveView: [],
}>()

function leaveView() {
  emit("leaveView");
}

function handleSignUp() {
  if (auth.value !== undefined) {
    signInWithEmailAndPassword(auth.value, email.value, password.value)
    .then((userCredential) => {
      auth.value?.updateCurrentUser(userCredential.user)
    })
    .catch((reason) => {
      console.error("failed signin", reason);
      error.value = reason;
    });
  } else {
    console.error("auth undefined")
  }
  leaveView()
}

function handleSignOut() {
  signOut(auth.value)
  console.debug('signing out')
  leaveView()
}

auth.value?.onAuthStateChanged(() => {
  loginState.value = auth.value?.currentUser !== null
})

</script>

<template>
  <div class="flex rounded-2xl max-w-screen-sm overflow-hidden">
    <div class="bg-base-100 flex flex-row">
      <article class="prose prose-sm w-full max-w-md p-8">
        
        <!-- case: anon -->
        <div 
          v-show="!loginState"
        >
          <h1>login</h1>
          <p>
            if i sent you a login, please enter it in the fields below:<br />
            <em class="font-light">this just unlocks bonus content</em>
          </p>
          <form class="flex flex-col gap-5">
            <!-- note, for/name/id are not needed but included for fallback when implementing it -->
            <div class="max-w-sm">
              <div class="flex flex-col">
                <label for="fmail" class="my-2">
                  <strong>email adress:</strong>
                </label>
                <input
                  class="p-2 rounded-xl"
                  name="fmail"
                  id="fmail"
                  type="text"
                  placeholder="email"
                  v-model="email"
                />
              </div>
              <div class="flex flex-col">
                <label for="fpassword" class="my-2">
                  <strong>password:</strong>
                </label>
                <input
                  class="p-2 rounded-xl"
                  name="fpassword"
                  id="fpassword"
                  type="password"
                  placeholder="password"
                  v-model="password"
                />
              </div>
            </div>
            <div class="flex flex-row self-end gap-2 h-fit items-center">
              <div
                class="text-right max-w-fit text-xs px-1 rounded-full text-base-content"
              >
                want access?
                <router-link to="/socials" @click="leaveView">
                  msg me on socials
                </router-link>
              </div>
              <button
                class="group size-10 p-2 rounded-full bg-pink hover:bg-surface0 -rounded-full font-semibold text-base"
                id="signin"
                name="signin"
                type="button"
                @click="handleSignUp"
              >
                <img
                  class="group-hover:invert-0 invert size-fit m-0"
                  viewBox="0 0 24 24"
                  src="/icons/chevron-right.svg"
                  alt="chevron-right"
                />
              </button>
            </div>
          </form>
        </div>

        <!-- case: logged in -->
        <button
          class="group w-fit size-12 p-2 rounded-full bg-pink hover:bg-surface0 -rounded-full font-semibold text-base"
          id="signin"
          name="signin"
          type="button"
          @click="handleSignOut"
          v-show="loginState"
        >
          <div class="flex flex-row px-4">
            logout
            <img
              class="group-hover:invert-0 invert size-fit m-0"
              viewBox="0 0 24 24"
              src="/icons/chevron-right.svg"
              alt="chevron-right"
            />
          </div>
        </button>


      </article>
      <div class="flex bg-pink justify-center items-center">
        <img :src="imgUrl" width="70%" />
      </div>
    </div>
  </div>
</template>
