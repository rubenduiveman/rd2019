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
    store.commit("setFooterAccent", "odd");
    window.scrollTo(0, 0);
    next();
});
