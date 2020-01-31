import Vue from "vue";
import Router from "vue-router";
import SignUp from "@/components/Admin/SignUp.vue";
import SignIn from "@/components/Admin/SignIn.vue";
import ClientList from "@/components/Client/List.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/signup",
      name: "SignUp",
      component: SignUp
    },
    {
      path: "/signin",
      name: "SignIn",
      component: SignIn
    },
    {
      path: "/client/list",
      name: "ClientList",
      component: ClientList
    }
  ]
});
