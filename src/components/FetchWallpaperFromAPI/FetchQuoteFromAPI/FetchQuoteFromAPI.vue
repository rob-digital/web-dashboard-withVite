<template>
    <span v-if="randomQuote" class="quote text-white text-4xl mb-5 italic">
        {{ randomQuote.text }}
    </span>
</template>

<script async setup>
import { reactive, toRefs, ref, onMounted } from 'vue'
import axios from 'axios'


let randomQuote = ref([])

const requestRandomQuote = async () => {
    randomQuote.value = null
    try {
        const response = await axios.get(`https://type.fit/api/quotes`)
        return response
        
    } catch (error) {
        console.log(error);
    }  
}

requestRandomQuote()
                    .then(response => {
                            let randomQuotePosition = Math.floor(Math.random() * response.data.length)
                            return randomQuote.value = response.data[randomQuotePosition]
                    })

</script>
<style scoped>
    .quote {
        z-index: 10;
        text-shadow: 1px 1px 1px #772b14;
    }

</style>