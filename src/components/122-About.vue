<template>
   
   <h1 class="font-bold text-2xl">
       About {{ name }}
   </h1>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, ref } from 'vue'

const store = useStore()

const name = computed(() => {
    return store.state.user.name
})

</script>

<style lang="scss" scoped>

</style>