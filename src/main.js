import { createApp } from 'vue';

import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import TeamList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/teams', component: TeamList }, //our-domain.com/teams => TeamList
    { path: '/users', component: UsersList },
  ],
});

const app = createApp(App);
app.use(router);

app.mount('#app');
