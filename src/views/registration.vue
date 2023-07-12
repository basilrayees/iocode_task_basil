
<template>
    <v-container fluid="" class="con1" style="">
        <div class="pa-4 rounded" style="max-width: 500px;background: aliceblue;margin-top: 6%;">
            <h3 class="my-4">
                REGISTER
            </h3>
            <v-text-field density="comfortable" variant="outlined" class="mb-4" v-model="username" hide-details="auto"
                :error-messages="v$.username.$errors.map(e => e.$message)" label="Username*">
            </v-text-field>
            <v-text-field density="comfortable" variant="outlined" class="mb-4" v-model="email" hide-details="auto"
                label="E-mail*" :error-messages="v$.email.$errors.map(e => e.$message)">
            </v-text-field>
            <v-text-field density="comfortable" variant="outlined" class="mb-4" v-model="Phone" hide-details="auto"
                :error-messages="v$.Phone.$errors.map(e => e.$message)" label="Phone Number*">
            </v-text-field>

            <v-text-field variant="outlined" density="comfortable" v-model="password" label="password*"
                :error-messages="v$.password.$errors.map(e => e.$message)"
                :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'"
                @click:append-inner="show1 = !show1"></v-text-field>

            <div class="text-end mt-5">
                <v-btn color="grey" class="mr-4 my-4" :to="{ name: 'login' }">
                    Login
                </v-btn>
                <v-btn color="success" class="mr-4 my-4" @click="Register">
                    Register
                </v-btn>

            </div>
        </div>
    </v-container>
</template>

<script>
/* eslint-disable */
import { mapActions, mapState } from 'vuex';
import { useVuelidate } from '@vuelidate/core'
import { required, helpers, numeric, email, maxLength, minLength } from '@vuelidate/validators'
export default {

    name: 'Login',
    data() {
        return {
            v$: useVuelidate(),
            password: '',
            username: '',
            error: null,
            show1: false,
            email: '',
            Phone: '',
        }
    },
    validations() {
        return {

            password: {
                required: helpers.withMessage('Password is required.', required)
            },
            username: {
                required: helpers.withMessage('Username is required.', required)
            },
            email: {
                required: helpers.withMessage('E-mail is required.', required),
                email: helpers.withMessage('Please enter a valid email.', email),
            },
            Phone: {
                required: helpers.withMessage('Phone Number is required.', required),
                numeric: helpers.withMessage('Phone Number must be numeric.', numeric),
                maxLength: helpers.withMessage('Maximum allowed number 10', maxLength(10)),
                minLength: helpers.withMessage('Minimum is 10', minLength(10))

            }
        }
    },
    computed: {
    },
    methods: {
        async Register() {
            const result = await this.v$.$validate()
            if (!result) {

                return
            } else {
                const data = {
                    password: this.password,
                    username: this.username,
                    email: this.email,
                    Phone: this.Phone
                }
                localStorage.setItem('user', JSON.stringify(data))
                this.$router.push({ name: 'quotes' })
                


            }

        }
    }
}
</script>

<style scoped>
p {
    line-height: 1rem;
}

.con1 {
    text-align: -webkit-center;
    height: 100vh;
    background: linear-gradient(120deg, #2980b6, rgb(0 44 75))
}

.card {
    padding: 20px;
}
</style>