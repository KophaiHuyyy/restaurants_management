import HomeView from "./components/HomeView";
import SignUp from "./components/SignUp";
import LoginView from "./components/LoginView";
import AddView from "./components/AddView.vue";
import UpdateView from "./components/UpdateView";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {   
        name: "HomeView",
        component: HomeView,
        path: "/",
    },
    {
        name: "SignUp",
        component: SignUp,
        path: "/sign-up",
    },
    {
        name: "LoginView",
        component: LoginView,
        path: "/login",
    },
    {
        name: "AddView",
        component: AddView,
        path: "/add-view",
    },
    {
        name: "UpdateView",
        component: UpdateView,
        path: "/update-view/:id",
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
