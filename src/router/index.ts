import { createWebHistory, createRouter } from "vue-router";
import TodoApp from "@/views/todoApp.vue";
import Home from "@/views/home.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/todo-app",
    component: TodoApp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
