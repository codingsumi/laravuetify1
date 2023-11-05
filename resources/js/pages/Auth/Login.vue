<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" sm="10" md="4" lg="4">
                <v-card ref="form">
                    <v-card-text>
                        <v-card-title class="mx-auto text-center my-4 text-h4">Login</v-card-title>
                        <v-form v-model="form" @submit.prevent="onSubmit">

                            <v-text-field persistent-hint variant="outlined" label="Email Address"
                                append-inner-icon="mdi-email"></v-text-field>

                            <v-text-field persistent-hint variant="outlined" label="Password"
                                append-inner-icon="mdi-lock"></v-text-field>

                            <br>

                            <v-btn :disabled="!form" :loading="loading" block color="success" size="large" type="submit"
                                variant="elevated">
                                Sign In
                            </v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        form: false,
        email: null,
        password: null,
        loading: false,
    }),

    methods: {
        onSubmit() {
            if (!this.form) return

            this.loading = true

            setTimeout(() => (this.loading = false), 2000)
        },
        required(v) {
            return !!v || 'Field is required'
        },
    },
}
</script>