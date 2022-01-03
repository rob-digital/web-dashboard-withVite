<template>
    <FetchWallpaperVue :displayLoginButton="needsToLogin" :displayRegisterButton="needsToRegister"/>

    
    

</template>

<script setup>
import FetchWallpaperVue from '../components/FetchWallpaperFromAPI/FetchWallpaperFromAPI.vue'
import { onBeforeMount, ref } from 'vue'
import firebase from 'firebase'
import router from '../router'

const needsToLogin = ref(false)
const needsToRegister = ref(false)

onBeforeMount(() => {
    firebase.auth().onAuthStateChanged((user) => {
        // if (!user) router.replace('/login')
        needsToLogin.value = true
        needsToRegister.value = true
    })
})

</script>

<style lang="scss" scoped>

</style>