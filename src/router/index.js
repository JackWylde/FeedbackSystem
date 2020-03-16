import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import QuestionOne from "../components/QuestionOne";
import QuestionTwo from "../components/QuestionTwo";
import QuestionThree from "../components/QuestionThree";
import QuestionFour from "../components/QuestionFour";
import QuestionFive from "../components/QuestionFive";
import Finished from "../components/Finished";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/QuestionOne",
    name: "QuestionOne",
    component: QuestionOne
  },
  {
    path: "/QuestionTwo",
    name: "QuestionTwo",
    component: QuestionTwo
  },
  {
    path: "/QuestionThree",
    name: "QuestionThree",
    component: QuestionThree
  },
  {
    path: "/QuestionFour",
    name: "QuestionFour",
    component: QuestionFour
  },
  {
    path: "/QuestionFive",
    name: "QuestionFive",
    component: QuestionFive
  },
  {
    path: "/Finished",
    name: "Finished",
    component: Finished
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
