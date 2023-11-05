<template>

    <v-app>
        
        <app-drawer></app-drawer>
        <app-header></app-header>

        <!-- Sizes your content based upon application components -->
        <v-main>
            <!-- Provides the application the proper gutter -->
            <v-container fluid>
                <!-- If using vue-router -->
                <router-view></router-view>
            </v-container>
        </v-main>

        <v-footer app> </v-footer>
    </v-app>
</template>



