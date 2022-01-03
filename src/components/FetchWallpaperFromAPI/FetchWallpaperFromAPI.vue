<template>
    <div v-if="randomImage" class="flex h-screen flex-col justify-center" >
        <div class="loginRegisterLinks flex absolute top-5 right-5">
            <div
              v-if="displayLoginButton"
              @click="activateLoginIfTrueOrRegisterIfFalse(true)"
              class="loginButton bg-gray-100 hover:bg-blue-500 cursor-pointer hover:text-white font-semibold py-2 px-4 rounded-full"
              >Login</div>

            <div
              v-if="displayRegisterButton"
              @click="activateLoginIfTrueOrRegisterIfFalse(false)"
              class="registerButton bg-gray-100 hover:bg-blue-500 cursor-pointer hover:text-white font-semibold py-2 px-4 rounded-full ml-5"
            >Register</div>
        </div>
        
        <img v-bind:src="imageUrl"  height="100%" class=" mainImage object-cover w-full">
        <div class="justify-center flex flex-col mx-auto">
            <DigitalClock v-on:clockReadyToDisplay="clockReady"/>
            <FetchQuoteFromAPI/>
            <FetchSearchEngineFromAPI/>
        </div>
        

    </div>
    
    <div v-else>
        <div class="container mx-auto flex items-center justify-center mb-5">
            <div style="border-top-color:transparent"
                class="w-16 h-16 border-4 border-blue-800 border-solid rounded-full animate-spin"></div>
        </div>
        <p>Loading...</p>
    </div>
</template>

<script async setup>
import DigitalClock             from '@/components/FetchWallpaperFromAPI/DigitalClock/DigitalClock.vue'
import FetchQuoteFromAPI        from '@/components/FetchWallpaperFromAPI/FetchQuoteFromAPI/FetchQuoteFromAPI.vue'
import FetchSearchEngineFromAPI from '@/components/FetchWallpaperFromAPI/FetchSearchEngine/FetchSearchEngineFromAPI.vue';

import { computed, onMounted, ref, defineProps, reactive} from 'vue'
import axios from 'axios'

const props = defineProps({
    displayLoginButton: {
        type: Boolean,
        required: true
    },
    displayRegisterButton: {
        type: Boolean,
        required: true
    }
})

const query = 'Nature';
const randomImage = ref([])
let imageUrl = ref('')
let state = reactive({
        loginActivated: false,
        registerActive: false
    })


function clockReady () {
    console.log('Readyyy');
}

//-------------- chase wallpaper -------------------
const requestWallpaper = async () => {
    randomImage.value = null
    try {
        const response = await axios.get(`https://api.pexels.com/v1/search?query=mountains&per_page=80&orientation=landscape`, {
                                    headers: {
                                        authorization: '563492ad6f91700001000001cf5721145ff84e219ed00aae63e125ef'
                                        }
                                    })
        const results = await response.data
        return results
    } catch (error) { 
        console.log(error)
    }
}
requestWallpaper().then(res => prepareSingleImage(res))

const prepareSingleImage = (results) => {
    let imageRandomPosition = Math.floor(Math.random() * results.photos.length)
    randomImage.value = results.photos[imageRandomPosition]
    imageUrl.value = randomImage.value.src.original
}
// ---------------------------------------------------

//----------------------------------------------------

function activateLoginIfTrueOrRegisterIfFalse(value) {
    console.log(`${value} clicked`)
    if (value) 
    {
        state.loginActivated = true
        state.registerActive = false
        console.log(state);
    }

    else if (value == false) 
    {
        state.loginActivated = false
        state.registerActive = true
        console.log(state);
    }
}
// console.log(state);

</script>

<style scoped>
    .mainImage {
        position: absolute;
        bottom: 0;
        min-height: 100%;
        min-width: 100%;
    }
    .container {
        margin-top: 50px;
    }
    .testText {
        z-index: 10;
    }
    .loginRegisterLinks {
        z-index: 10;
    }
</style>