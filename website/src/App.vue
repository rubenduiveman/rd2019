<template>
  <div id="app">
    <MainMenu/>
    <transition name="fade" mode="out-in">
      <router-view id="content"/>
    </transition>
    <Footer v-if="!isAtHome"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Footer from "@/components/Footer.vue";
import MainMenu from "@/components/MainMenu.vue";

@Component({ components: { Footer, MainMenu } })
export default class App extends Vue {
  public get isAtHome(): boolean {
    return this.$route.name === "home";
  }
}
</script>

<style lang="scss">
@import "./style/defaults.scss";

.mainmenu {
  position: fixed;
  z-index: 1;
}

#app {
  display: flex;
  flex-direction: column;
}

#content {
  flex-grow: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.1s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

@media screen and (min-width: 681px) {
  #app {
    padding-top: 120px;
    min-height: calc(100% - 120px);
  }

  .mainmenu {
    top: 0;
  }
}

@media screen and (max-width: 680px) {
  #app {
    padding-bottom: 64px;
    min-height: calc(100% - 64px);
  }

  .mainmenu {
    position: fixed;
    bottom: 0;
  }
}
</style>