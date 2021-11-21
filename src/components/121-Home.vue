<template>
    Home
    <HelloWorld msg="Welcome home"/>

    <p>Name in store is: <b>{{ name }}</b></p>

    <input v-model="newName" type="text" class="border-2 border-red-500 p-2 rounded"/>
    <button @click="saveName" class="text-white p-2 bg-indigo-600 rounded ml-3">Submit</button>

</template>

<script setup>
import { useStore } from "vuex";
        const store = useStore()
import { computed, ref } from 'vue'
import { useRouter } from "vue-router";
        const router = useRouter()
import HelloWorld from "./HelloWorld.vue";

    components: {
        HelloWorld
    }


    const name = computed(() => {
        return store.state.user.name
    })

    const newName = ref('')

    function saveName() {
        store.dispatch('saveName', newName.value)
        newName.value = ''
        router.push('/abouttest')
    }

</script>

<style lang="scss" scoped>

</style>