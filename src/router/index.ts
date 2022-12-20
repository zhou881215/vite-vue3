import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import mainLayoutRouter from "./mainLayoutRouter";
import loginRouter from "./loginRouter";

const routes: RouteRecordRaw[] = [...mainLayoutRouter, ...loginRouter];

export default createRouter({
  history: createWebHistory(), // mode:"history"
  routes,
});
