const components = {
  Login: () => import("@/pages/login/Login.vue"),
};

export default [
  {
    name: "login",
    path: "/login",
    component: components.Login,
  },
];
