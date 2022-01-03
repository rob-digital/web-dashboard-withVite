<template>

    <form action="https://www.google.co.uk/search"  method="get" name="searchform" target="_blank">
        <input
        class="shadow appearance-none border rounded-full w-full sm:w-3/4 md:w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        autocomplete="on"
        name="q"
        required="required"
        id="search"
        type="search"
        >
        <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full border ml-3">
            Search
        </button>
    </form>

</template>

<script setup>

</script>

<style scoped>
    form {
        z-index: 100;
        display: flex;
        justify-content: center;
    }
    input {
        width: 70%;
        height: 35px;
    }
    @media only screen and (min-width: 533px) and (max-width: 980px) {
        input {
            width: 400px;
        }
    }  
    @media only screen and (min-width: 981px)  {
        input {
            width: 600px;
        }
    }
</style>