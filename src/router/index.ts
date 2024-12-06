import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from "../pages/index.vue";

const routes = [
  { 
    path: '/', 
    component: HomeView,
    meta: {
      breadcrumbs: [
        {
          text: "Home",
          url: "/"
        },
        {
          text: "Region",
          url: "/region"
        },
        {
          text: "Europe"
        }
      ]
    }
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
