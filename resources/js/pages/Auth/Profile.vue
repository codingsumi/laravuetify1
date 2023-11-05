<template>
    <div class="text-h5 mb-5">Update Profile</div>

    <v-row dense>
        <v-col :cols="3">
            <v-card elevation="2">
                <template>
                    <v-progress-linear
                        :active="isActive"
                        color="deep-purple"
                        height="4"
                        indeterminate
                    ></v-progress-linear>
                </template>

                <v-img
                    cover
                    height="250"
                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                ></v-img>

                <v-card-item>
                    <v-card-title
                        ><v-icon
                            color="error"
                            icon="mdi-fire-circle"
                            size="small"
                        ></v-icon>
                        Someit Jaiswal</v-card-title
                    >

                    <v-row align="center" class="mx-0">
                        <v-card-text>
                            <v-rating
                                :model-value="4.5"
                                color="amber"
                                density="compact"
                                half-increments
                                readonly
                                size="small"
                            ></v-rating>
                        </v-card-text>
                        <div class="text-grey ms-4">4.5 (413)</div>
                    </v-row>

                    <v-card-subtitle>Software Developer</v-card-subtitle>
                    <v-card-subtitle
                        >Jamtech Technologies Pvt Ltd</v-card-subtitle
                    >
                    <v-card-subtitle
                        >Ram Ram Bank Chauraha, Aliganj, Lucknow, Uttar
                        Pradesh</v-card-subtitle
                    >
                </v-card-item>
            </v-card>
        </v-col>

        <v-col :cols="8" class="mx-auto">
            <v-card class="custom-card">
                <v-card-title> Update Profile </v-card-title>


                <v-form ref="form" v-model="valid" lazy-validation>

                    <v-text-field
                        v-model="name"
                        :counter="10"
                        :rules="nameRules"
                        label="Name"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                    ></v-text-field>

                    <v-select
                        v-model="select"
                        :items="items"
                        :rules="[(v) => !!v || 'Item is required']"
                        label="Item"
                        required
                    ></v-select>

                    <v-btn
                        :disabled="!valid"
                        color="success"
                        class="mr-4"
                        @click="validate"
                    >
                        Validate
                    </v-btn>

                    <v-btn color="error" class="mr-4" @click="reset">
                        Reset Form
                    </v-btn>


                </v-form>


            </v-card>
        </v-col>
    </v-row>
</template>

<style>
.custom-card {
    padding: 19px;
}
</style>

<script>
export default {
    data: () => ({
        valid: true,
        name: "",
        nameRules: [
            (v) => !!v || "Name is required",
            (v) =>
                (v && v.length <= 10) || "Name must be less than 10 characters",
        ],
        email: "",
        emailRules: [
            (v) => !!v || "E-mail is required",
            (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],
        select: null,
        items: ["Item 1", "Item 2", "Item 3", "Item 4"],
        checkbox: false,
    }),

    methods: {
        validate() {
            this.$refs.form.validate();
        },
        reset() {
            this.$refs.form.reset();
        },
    },
};
</script>
