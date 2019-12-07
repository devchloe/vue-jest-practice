import Vue from "vue";
import Router from "vue-router";
import Cluster from "./views/Cluster";
import Namespace from "./views/Namespace";
import Modal from "@/views/Modal";
import List from "@/views/List";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "cluster",
      component: Cluster
    },
    { path: "/namespace", name: "namespace", component: Namespace },
    { path: "/modal", name: "modal", component: Modal },
    { path: "/list", name: "list", component: List }
  ]
});
