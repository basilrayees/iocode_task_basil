
<template>
    <v-container fluid="" class="con1" style="">
        <v-form ref="form" class="pa-4 rounded" v-model="valid" lazy-validation
            style="max-width: 500px;background: aliceblue;margin-top: 10%;">
            <h3 class="my-6">
                LOGIN
            </h3>
            <v-text-field variant="outlined" class="mb-4" v-model="username" hide-details="auto" label="user name"
                :error-messages="v$.username.$errors.map(e => e.$message)">
            </v-text-field>

            <v-text-field variant="outlined" v-model="password" label="password" @keyup.enter="login"
                :error-messages="v$.password.$errors.map(e => e.$message)"
                :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'"
                @click:append-inner="show1 = !show1"></v-text-field>
            <div class="text-end">
                <v-btn color="success" class="mr-4 my-4" @click="login">
                    login
                </v-btn>
                <v-btn color="grey" class="mr-4 my-4" :to="{ name: 'register' }" >
                    Register
                </v-btn>
            </div>
        </v-form>
        <snackbarVue :visible="snackbar" :text="mssg" :button="false" :color="snackColor" @close="snackbar = false" />

    </v-container>
</template>

<script>
/* eslint-disable */
import { mapActions, mapState } from 'vuex'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers, numeric, email, maxLength, minLength } from '@vuelidate/validators';
import snackbarVue from '@/components/snackbar.vue';

export default {

    name: 'Login',
    data() {
        return {
            v$: useVuelidate(),
            password: '',
            username: '',
            error: null,
            show1: false,
            snackbar: false,
            mssg: '',
            snackColor: ''
        }
    },
    components: {
        snackbarVue
    },
    validations() {
        return {

            password: {
                required: helpers.withMessage('Password is required.', required)
            },
            username: {
                required: helpers.withMessage('Username is required.', required)
            },

        }
    },
    computed: {
        ...mapState('user', ['userData'])
    },
    methods: {
        ...mapActions('user', ['USER_LOGIN']),
        async login() {
            const userData = JSON.parse(localStorage.getItem('user'));
            if (!userData) {
                this.mssg = 'Invalid username or password';
                this.snackColor = 'error';
                return this.snackbar = true
            }
            const result = await this.v$.$validate()
            if (!result) {
                return
            } else {
                // console.log('success');
                if (this.username == userData.username && this.password == userData.password) {
                    this.$router.push({ name: 'quotes' })
                } else {
                    this.mssg = 'Invalid username or password';
                    this.snackColor = 'error';
                    this.snackbar = true
                }
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


.error {
    animation-name: errorShake;
    animation-duration: 0.3s;
}

@keyframes errorShake {
    0% {
        transform: translateX(-25px);
    }

    25% {
        transform: translateX(25px);
    }

    50% {
        transform: translateX(-25px);
    }

    75% {
        transform: translateX(25px);
    }

    100% {
        transform: translateX(0);
    }
}
</style>