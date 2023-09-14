// 
import { createRouter, createWebHistory } from 'vue-router';

export const routes = [
    {
        name: 'Home',
        path: '/',
        component: () => import('../views/Home.vue'),
    }
    // {
    //     path: '/:catchAll(.*)*',
    //     component: () => import('pages/Error404.vue')
    // }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;