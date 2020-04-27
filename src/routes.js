import HomePage from "./components/HomePage.vue";
import LearnPage from "./components/LearnPage.vue";
import PlacePage from "./components/PlacePage.vue";
import QuizPage from "./components/QuizPage.vue";

const routes = [
    { path: '/', component: HomePage },
    { path: '/learn', component: LearnPage },
    { path: '/learn/:group', component: LearnPage },
    { path: '/learn/place/:id', component: PlacePage },
    { path: '/quiz', component: QuizPage },
];

export default routes;