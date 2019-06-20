import Vue from "vue";
import Router from "vue-router";
import { DataType } from "./logic/enums";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/vision",
            name: "vision",
            component: () => import(/* webpackChunkName: "vision" */ "./views/Vision.vue")
        },
        {
            path: "/timeline",
            name: "timeline",
            component: () => import(/* webpackChunkName: "timeline" */ "./views/Timeline.vue")
        },
        {
            path: "/now",
            redirect: "/timeline"
        },
        {
            path: "/casestudies",
            name: "casestudies",
            component: () => import(/* webpackChunkName: "case-studies" */ "./views/CaseStudies.vue")
        },
        {
            path: "/casestudy",
            redirect: "/casestudies"
        },
        {
            path: "/casestudy/:id/",
            alias: "/casestudy/:id/:title",
            name: "casestudy",
            meta: { type: DataType.CASESTUDIES },
            component: () => import(/* webpackChunkName: "post" */ "./views/Post.vue")
        },
        {
            path: "/blog",
            name: "blog",
            component: () => import(/* webpackChunkName: "blog" */ "./views/Blog.vue")
        },
        {
            path: "/post",
            redirect: "/blog"
        },
        {
            path: "/posts",
            redirect: "/blog"
        },
        {
            path: "/post/:id/",
            alias: "/post/:id/:title",
            name: "post",
            meta: { type: DataType.BLOG },
            component: () => import(/* webpackChunkName: "post" */ "./views/Post.vue")
        },
        {
            path: "/links",
            name: "links",
            component: () => import(/* webpackChunkName: "links" */ "./views/Links.vue")
        }
    ],
});
