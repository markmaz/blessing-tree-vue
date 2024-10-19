import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import Family from "../views/Family.vue";
import Users from "../views/Users.vue";

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { requiresAuth: true },
    },
    {
        path: '/families',
        name: 'Families',
        component: Family,
        meta: {requiresAuth: true},
    },
    {
        path: '/users',
        name: 'Users',
        component: Users,
        meta: {requiresAuth: true},
    },
    {
        path: '/:catchAll(.*)', // Updated catch-all route
        redirect: '/login',
    },
];

const router = createRouter({
    history: createWebHistory(), // Use createWebHistory for Vue 3
    routes,
});


// Navigation guard to protect routes
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('authToken');
    if (to.matched.some(record => record.meta.requiresAuth) && !token) {
        next('/login');
    } else {
        next();
    }
});

export default router;
