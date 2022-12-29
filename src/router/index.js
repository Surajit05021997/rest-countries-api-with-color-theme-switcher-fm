import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import CountryDetails from '@/views/CountryDetails.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/country-details/:countryCode',
    name: 'Country Details',
    component: CountryDetails, 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
