<template>
  <nav class="mainmenu">
    <div class="menu-toggle" @click="isVisible = !isVisible" :class="{ open: isVisible }"></div>
    <router-link :to="{ name: 'home' }" class="logo"/>
    <div class="menu" :class="{ visible: isVisible }">
      <router-link :to="{ name: 'home' }" class="link">home</router-link>
      <router-link :to="{ name: 'vision' }" class="link">vision</router-link>
      <router-link :to="{ name: 'timeline' }" class="link">timeline</router-link>
      <!-- <router-link :to="{ name: 'case-studies' }" class="link">case studies</router-link> -->
      <!-- <router-link :to="{ name: 'blog' }" class="link">blog</router-link> -->
      <router-link :to="{ name: 'links' }" class="link">links</router-link>
    </div>
    <div class="theme-switcher" @click="switchTheme"></div>
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
  height: $menu-height;
  display: flex;
  justify-content: space-between;
  @include background-color("neutral-0");
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
  display: inline-block;
  padding: 0 2vw;
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

.mainmenu {
  @include themify-nested(".is-scrolled", "border-color", "neutral-100");
}

@media screen and (min-width: 681px) {
  .menu-toggle {
    display: none;
  }

  .mainmenu {
    border-bottom: 1px solid transparent;
    max-width: 1080px;
    align-self: center;
  }
}

@media screen and (max-width: 680px) {
  .menu:not(.visible) {
    display: none;
  }

  .mainmenu .menu {
    position: fixed;
    width: 100%;
    bottom: 64px;
    max-height: 0;
    @include background-color("neutral-0");
    border-bottom: 1px solid;
    @include border-color("neutral-100");

    overflow: hidden;
    padding: 0.5em 0;

    &.visible {
      max-height: 1000px;
    }

    a {
      display: block;
    }
  }

  .theme-light .menu {
    box-shadow: 0 -4px 4px 0 rgba(0, 0, 0, 0.1);
  }

  .theme-dark .menu {
    border-top: 1px solid;
  }

  $menu-height: 64px;

  .mainmenu {
    height: $menu-height;
    border-top: 1px solid;
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
</style>