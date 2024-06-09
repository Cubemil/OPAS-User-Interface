import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import InputForm from './components/InputForm.vue';
import CaseOverview from './components/CaseOverview.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/input-form', component: InputForm },
    { path: '/case-overview', component: CaseOverview },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;