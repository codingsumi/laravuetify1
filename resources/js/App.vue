<template>

    <v-app>
        <v-expand-x-transition>
        <v-navigation-drawer app v-show="drawer" class="shrink">
            <v-list>
                <v-list-item
                    prepend-avatar="https://randomuser.me/api/portraits/men/45.jpg"
                    title="John Smith"
                    subtitle="johnsmith@gmail.com"
                ></v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list density="compact" nav>
                <v-list-item
                    to="dashboard"
                    link
                    prepend-icon="mdi-view-dashboard"
                    title="Dashboard"
                    value="myfiles"
                ></v-list-item>
                <v-list-item
                    to="students"
                    link
                    prepend-icon="mdi-account-multiple"
                    title="Students"
                    value="students"
                ></v-list-item>
                <v-list-item
                    to="employees"
                    link
                    prepend-icon="mdi-account-multiple"
                    title="Employees"
                    value="employees"
                ></v-list-item>

                <v-list-item
                    to="contacts"
                    link
                    prepend-icon="mdi-phone-log"
                    title="Contacts"
                    value="contacts"
                ></v-list-item>

                <v-list-item
                    to="profile"
                    link
                    prepend-icon="mdi-account-check"
                    title="Profile"
                    value="profile"
                ></v-list-item>

                <v-list-item
                    to="logout"
                    link
                    prepend-icon="mdi-logout"
                    title="Logout"
                    value="logout"
                ></v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-expand-x-transition>

        <v-app-bar :elevation="0" app>
            <template v-slot:prepend>
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            </template>

            <v-app-bar-title>Laravel Vuetify</v-app-bar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>

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


<script>
  export default {
    data: () => ({
      drawer: false,
    }),
  }
</script>
