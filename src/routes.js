import HomePage from "./components/HomePage.vue";
import LearnPage from "./components/LearnPage.vue"
import QuizPage from "./components/QuizPage.vue";

const routes = [
    { path: '/', component: HomePage },
    { path: '/learn', component: LearnPage },
    { path: '/quiz', component: QuizPage },
];

export default routes;