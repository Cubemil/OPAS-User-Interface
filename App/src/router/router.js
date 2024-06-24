import {createRouter, createWebHistory} from 'vue-router';
import Startseite from '../views/Startseite.vue';
import Verwaltung from '../views/Verwaltung.vue';
import Ersterfassung from '../views/Ersterfassung.vue';
import Falluebersicht from '../views/Falluebersicht.vue';

const routes = [
    {path: '/', component: Startseite},
    {path: '/ordnungswidrigkeiten-verwalten', component: Verwaltung},
    {path: '/ersterfassung', component: Ersterfassung},
    {path: '/falluebersicht', component: Falluebersicht},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;