import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserView from "@/views/UserView.vue";
import UserList from "@/components/user/UserList.vue";
import UserCreate from "@/components/user/UserCreate.vue";
import UserDetail from "@/components/user/UserDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: '/user',
    name: 'user',
    component: UserView,
    children: [
      {
        path: "",
        name: "userList",
        component: UserList
      },
      {
        path: "create",
        name: "userCreate",
        component: UserCreate
      },
      {
        path: ":id",
        name: "userDetail",
        component: UserDetail
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
