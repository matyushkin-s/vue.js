import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import UserPage from "../views/UserPage.vue";
import LoginPage from "../views/LoginPage.vue";
import NewsPage from "../views/NewsPage.vue";
import { store } from "./../store/index";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/news",
      name: "news",
      component: NewsPage,
    },
    {
      path: "/user",
      name: "user",
      component: UserPage,
      beforeEnter(to, from) {
        store.dispatch("checkUserToken");
        const isAuthorized = store.state.isUserLoginned;

        if (!isAuthorized) return { name: "LoginPage" };
      },
    },
    {
      path: "/LoginPage",
      name: "LoginPage",
      component: LoginPage,
    },
    {
      path: "/LoginError",
      name: "LoginError",
      component: () => import("../views/LoginError.vue"),
    },
  ],
});

export default router;
