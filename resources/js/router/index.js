import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../pages/Dashboard.vue';
import Students from '../pages/Students/Index.vue';
import StudentCreate from '../pages/Students/Create.vue';
import Employees from '../pages/employees/Index.vue';
import Contacts from '../pages/contacts/Index.vue';
import Profile from '../pages/Auth/Profile.vue';

const routes = [
    {path: '/dashboard',component: Dashboard},
    {path: '/students',component: Students},
    {path: '/students/create',component: StudentCreate},
    {path: '/employees',component: Employees},
    {path: '/contacts',component: Contacts},
    {path: '/profile',component: Profile}
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
