import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// #region set theme based on time of day
const hours = new Date().getHours();
const isDayTime = hours > 6 && hours < 20;
const theme = (isDayTime) ? "theme-light" : "theme-dark";
document.body.classList.add(theme);
// #endregion

// #region set body scrolled class
window.addEventListener("scroll", (e: Event) => {
    const scrollClass = "is-scrolled";
    if (window.scrollY > 0) {
        document.body.classList.add(scrollClass);
    } else {
        document.body.classList.remove(scrollClass);
    }
});
// #endregion

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");

router.beforeEach((to, from, next) => {
    // track page visit
    (window as any).gtag("config", "UA-44368134-1", { page_path: to.fullPath });
    // update footer
    store.commit("setFooterAccent", "odd");

    // scroll to top
    window.scrollTo(0, 0);

    next();
});
