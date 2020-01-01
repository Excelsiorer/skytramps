import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Performances from "./views/Performances.vue";
import Performance from "c@/cPerformance.vue";
import Actors from "./views/Actors.vue";
import Events from "./views/Events.vue";
import Contacts from "./views/Contacts.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      component: Index,
      props: true
    },
    {
      path: "/performances",
      name: "performances",
      component: Performances,
      props: true
    },
    {
      path: "/actors",
      name: "actors",
      component: Actors,
      props: true
    },
    {
      path: "/events",
      name: "events",
      component: Events,
      props: true
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts,
      props: true
    },
    {
      path: "/performances/:name",
      name: "singlePerformance",
      component: Performance,
      props: true
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});
