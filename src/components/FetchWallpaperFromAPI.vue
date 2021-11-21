<template>
    <div class=" bg-gray-400" v-if="arrayOfImages">
        <!-- <img v-bind:src="response.src.original" class="object-cover h-48 w-full ..."> -->
        <img v-bind:src="imageUrl"  height="100%" class=" mainImage object-cover w-full">
        <!-- <img v-bind:src="'https://spaceplace.nasa.gov/templates/featured/sun/sunburn300.png'" width="200"/>  -->
    </div>
    <div v-else>
        Loading...
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import axios from 'axios'
// import { createClient } from 'pexels';
// const client = createClient('563492ad6f91700001000001cf5721145ff84e219ed00aae63e125ef');

const query = 'Nature';
const arrayOfImages = ref([])
let imageUrl = ref('')

onMounted( async () => {
    arrayOfImages.value = null
    const response = await axios.get(`https://api.pexels.com/v1/search?query=mountains&per_page=80&orientation=landscape`, {
                                headers: {
                                    authorization: '563492ad6f91700001000001cf5721145ff84e219ed00aae63e125ef'
                                    }
                                })
                                .then(res => {
                                    let imagePosition = Math.floor(Math.random() * res.data.photos.length)
                                    
                                   return arrayOfImages.value = res.data.photos[imagePosition]
                                })
        imageUrl.value = response.src.original
    console.log('response', response.src.original);
console.log('arrayOfImages:', arrayOfImages.value.src.original)
})

// const responseReady = computed(() => )

</script>

<style scoped>
    .mainImage {
        position: absolute;
        bottom: 0;
        min-height: 100%;
        min-width: 100%;
    }
</style>