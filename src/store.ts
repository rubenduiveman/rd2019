import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        footerAccent: "odd"
    },
    mutations: {
        setFooterAccent(state, accent: "odd" | "even") {
            state.footerAccent = accent;
        }
    },
    actions: {

    }
});
