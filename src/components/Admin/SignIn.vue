<template>
    <section class='section'>
        <div class='columns'>
            <div class='column is-4 is-offset-4'>
                <h2 class='title has-text-centered'>Login</h2>

                <form method='POST' @submit.prevent='signin'>

                    <div class='field'>
                        <label class='label'>E-Mail</label>

                        <p class='control'>
                            <input
                                type='email'
                                class='input'
                                v-model='email'>
                        </p>
                    </div>

                    <div class='field'>
                        <label class='label'>Senha</label>

                        <p class='control'>
                            <input
                                type='password'
                                class='input'
                                v-model='password'>
                        </p>
                    </div>

                    <p class='control'>
                        <button class='button is-primary is-fullwidth is-uppercase'>Entrar</button>
                    </p>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import { SIGNIN_MUTATION } from '../../gql/auth'

export default {
    name: 'SignUp',
    data () {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        signup () {
            this.$apollo
                .mutate({
                    mutation: SIGNIN_MUTATION,
                    variables: {
                        email: this.email,
                        password: this.password
                    }
                })
                .then(response => {
                    // redirect to login page
                    this.$router.replace('/clients')
                })
            }
        }
    }
</script>