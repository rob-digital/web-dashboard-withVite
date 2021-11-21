<template>
    <div>
        <form @submit.prevent="onSubmit">
            <div>
                <label for="">Name</label>
                <input v-model="form.name" type="text"/>
            </div>

            <div>
                <label for="">Email</label>
                <input v-model="form.email" type="email" required />
            </div>

            <button type="submit">Create User</button>
        </form>
    </div>
</template>

<script>
import { createUser } from '../firebase'
import { reactive } from 'vue'

export default {
    setup() {
        const form = reactive({
            name: '',
            email: ''
        })

        const onSubmit = async () => {
            await createUser({ ...form })
            form.name = ''
            form.email = ''
        }

        return {form, onSubmit}
    }
}

</script>

<style lang="scss" scoped>

</style>