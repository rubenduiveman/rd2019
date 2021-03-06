<template>
  <nav class="mainmenu">
    <div class="mainmenu-container">
      <div class="menu-toggle" @click="isVisible = !isVisible" :class="{ open: isVisible }"></div>
      <router-link :to="{ name: 'home' }" class="logo"/>
      <div class="menu" :class="{ visible: isVisible }">
        <router-link :to="{ name: 'home' }" class="link">home</router-link>
        <router-link :to="{ name: 'vision' }" class="link">vision</router-link>
        <router-link :to="{ name: 'timeline' }" class="link">timeline</router-link>
        <router-link :to="{ name: 'casestudies' }" class="link">case studies</router-link>
        <router-link :to="{ name: 'blog' }" class="link">blog</router-link>
        <router-link :to="{ name: 'designs' }" class="link">design</router-link>
        <router-link :to="{ name: 'links' }" class="link">links</router-link>
      </div>
      <div class="theme-switcher" @click="switchTheme"></div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class MainMenu extends Vue {
  private isVisible: boolean = false;

  private switchTheme() {
    const light = "theme-light";
    const dark = "theme-dark";
    const list = document.body.classList;

    if (list.contains(light)) {
      list.add(dark);
      list.remove(light);
    } else if (list.contains(dark)) {
      list.add(light);
      list.remove(dark);
    }
  }

  @Watch("$route")
  private onRouteChange() {
    this.isVisible = false;
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/theme.scss";

$menu-height: 120px;

.mainmenu {
  width: 100%;
  @include background-color("neutral-0");
  display: flex;
  justify-content: center;
}

.mainmenu-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: $menu-height;
}

.logo:hover,
.theme-switcher:hover {
  transform: scale(1.1);
  transition: transform 0.15s ease-out;
}

.logo,
.theme-switcher,
.menu-toggle {
  width: $menu-height;
  height: $menu-height;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
}

.theme-switcher,
.menu-toggle {
  background-size: 56px;
}

.logo {
  background-size: 40px;
}

.link {
  font-size: 20px;
  font-weight: bold;
  line-height: $menu-height;
  @include color("primary-500");
}

.router-link-exact-active {
  @include color("neutral-900");
  cursor: default;

  &:hover {
    text-decoration: none;
  }
}

.theme-dark .mainmenu {
  .logo {
    background-image: url("../assets/icons/logo-dark.svg");
  }

  .theme-switcher {
    background-image: url("../assets/icons/night-to-day.svg");
  }

  .menu-toggle:not(.open) {
    background-image: url("../assets/icons/menu-dark.svg");
  }

  .menu-toggle.open {
    background-image: url("../assets/icons/close-dark.svg");
  }
}

.theme-light .mainmenu {
  .logo {
    background-image: url("../assets/icons/logo-light.svg");
  }

  .theme-switcher {
    background-image: url("../assets/icons/day-to-night.svg");
  }

  .menu-toggle:not(.open) {
    background-image: url("../assets/icons/menu-light.svg");
  }

  .menu-toggle.open {
    background-image: url("../assets/icons/close-light.svg");
  }
}

.mainmenu-container {
  @include themify-nested(".is-scrolled", "border-color", "neutral-100");
}

@media screen and (min-width: 881px) {
  .menu-toggle {
    display: none;
  }

  .mainmenu-container {
    border-bottom: 1px solid transparent;
    max-width: 1080px;
  }

  .menu {
    flex-grow: 1;
    display: flex;
    justify-content: space-around;
  }
}

@media screen and (max-width: 880px) {
  .menu:not(.visible) {
    display: none;
  }

  .mainmenu .menu {
    position: fixed;
    width: 100%;
    max-height: 0;
    @include background-color("neutral-0");
    border-bottom: 1px solid;
    @include border-color("neutral-100");

    overflow: hidden;
    padding: 0.5em 4vw;

    &.visible {
      max-height: 1000px;
    }

    a {
      display: block;
    }
  }

  $menu-height: 64px;

  .mainmenu-container {
    height: $menu-height;
    @include border-color("neutral-100");
  }

  .logo,
  .theme-switcher,
  .menu-toggle {
    width: $menu-height;
    height: $menu-height;
  }

  .theme-switcher,
  .menu-toggle {
    background-size: 40px;
  }

  .logo {
    background-size: 28px;
  }

  .link {
    line-height: $menu-height;
  }
}

@media screen and (max-width: 880px) and (min-width: 601px) {
  // main menu on top
  .mainmenu-container {
    border-bottom: 1px solid;
  }

  .mainmenu .menu {
    top: 64px;
  }

  .theme-light .menu {
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
  }

  .theme-dark .menu {
    border-bottom: 1px solid;
  }
}

@media screen and (max-width: 600px) {
  // main menu on bottom
  .mainmenu-container {
    border-top: 1px solid;
  }

  .mainmenu .menu {
    bottom: 64px;
  }

  .theme-light .menu {
    box-shadow: 0 -4px 4px 0 rgba(0, 0, 0, 0.1);
  }

  .theme-dark .menu {
    border-top: 1px solid;
  }
}
</style>