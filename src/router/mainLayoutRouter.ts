const components = {
  MainLayout: () => import("@/pages/mainLayout/index.vue"),
};

export default [
  {
    name: "mainLayout",
    path: "/",
    component: components.MainLayout,
    // redirect: "/",
    children: [],
  },
];
