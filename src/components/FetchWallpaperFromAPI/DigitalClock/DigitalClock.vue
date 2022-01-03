<template>
    <span class="myClock drop-shadow-sm text-white mx-auto text-9xl relative justify-center">
        {{ time }} 
    </span>
</template>

<script setup>
import moment from 'moment'
import { computed, ref, watch } from 'vue'

    const emits = defineEmits([ 'clockReadyToDisplay' ])

    let time = ref('')

    setInterval(() => {
        time.value = moment(new Date()).format('H:mm')
    }, 1000)

    watch(time, (time, prevTime) => {
        console.log(prevTime);
        console.log(time);

         if (time != '')
        {
            console.log('time.value:', time)
            emits('clockReadyToDisplay')
        }
    })

   

</script>

<style scoped>
    .myClock {
        z-index: 10;
        text-shadow: 1px 1px 1px #CE5937;
    }
</style>