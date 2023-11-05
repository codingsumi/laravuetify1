<template>
    <v-navigation-drawer app>
        <v-list>
            <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/45.jpg" title="John Smith"
                subtitle="johnsmith@gmail.com"></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item class="fs-19" to="dashboard" link prepend-icon="mdi-view-dashboard" title="Dashboard"
                value="myfiles"></v-list-item>
            <v-list-item to="students" link prepend-icon="mdi-account-multiple" title="Students"
                value="students"></v-list-item>
            <v-list-item to="employees" link prepend-icon="mdi-account-multiple" title="Employees"
                value="employees"></v-list-item>

            <v-list-item to="contacts" link prepend-icon="mdi-phone-log" title="Contacts" value="contacts"></v-list-item>

            <v-list-item to="profile" link prepend-icon="mdi-account-check" title="Profile" value="profile"></v-list-item>

            <v-list-item to="logout" link prepend-icon="mdi-logout" title="Logout" value="logout"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
