import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import Calculator from "./components/CalculatorContent.vue";
import Relation from "./components/Relation.vue";
import Choice from "./components/Choice.vue";
import Touzi from "./components/Touzi.vue";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
  {
     path:"/",
     component: Calculator
  },
    {
        path:"/cal",
        component: Calculator
    },
    {
        path: "/rel",
        component: Relation
    },
    {
        path: "/choice",
        component: Choice
    },
    {
        path: "/touzi",
        component: Touzi
    },
]

var router =  new VueRouter({
    routes
})
export default router;
