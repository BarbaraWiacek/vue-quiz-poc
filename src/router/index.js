import Vue from "vue";
import VueRouter from "vue-router";
import Form from "../views/Form.vue";
import Summary from "../views/Summary.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/1",
    name: "1",
    component: Form
  },
  {
    path: "/2",
    name: "2",
    component: Form
  },
  {
    path: "/3",
    name: "3",
    component: Form
  },
  {
    path: "/4",
    name: "4",
    component: Form
  },
  {
    path: "/5",
    name: "5",
    component: Form
  },
  {
    path: "/6",
    name: "Summary",
    component: Summary
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
