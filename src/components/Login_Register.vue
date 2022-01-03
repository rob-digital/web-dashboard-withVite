<template>
  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
    <div class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="text" v-model="email" placeholder="email">
    </div>
    <div class="mb-6">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="Password" v-model="password">
    </div>
    <div class="flex items-center justify-between">
      <button @click="register" class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button">
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
        Forgot Password?
      </a>
    </div>
  </div>
</template>




<script setup>
/* eslint-disable */
import firebase from 'firebase/app'
import { ref } from 'vue'
import { useRouter } from 'vue-router' // import router


const email = ref('')
const password = ref('')
const router = useRouter() // get a reference to our vue router
const register = () => {
  firebase
    .auth() // get the auth api
    .createUserWithEmailAndPassword(email.value, password.value) // need .value because ref()
    .then(() => {
      console.log('Successfully registered!')
      router.push('/') // redirect to the feed
    })
    .catch(error => {
      console.log(error.code)
      alert(error.message)
    })
}
</script>
