import Vue from "vue";
import Router from "vue-router";
import SignUp from "../components/Admin/SignUp.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/signup",
      name: "SignUp",
      component: SignUp
    }
  ]
});
