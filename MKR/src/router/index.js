import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Products from "@/pages/Products";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/products",
      name: "products",
      component: Products,
    },
    {
      path: "/about_1",
      name: "about_1",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
