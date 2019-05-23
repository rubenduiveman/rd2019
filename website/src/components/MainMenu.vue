<template>
  <nav class="mainmenu">
    <router-link to="/" class="logo"/>
    <router-link to="/vision" class="link">vision</router-link>
    <router-link to="/timeline" class="link">timeline</router-link>
    <!-- <router-link to="/case studies" class="link">case studies</router-link> -->
    <!-- <router-link to="/blog" class="link">blog</router-link> -->
    <router-link to="links" class="link">links</router-link>
    <div class="theme-switcher" @click="switchTheme"></div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class MainMenu extends Vue {
  // TODO: CSS breakpoint for small screens: hamburger menu

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
  border-bottom: 1px solid transparent;
}


.logo:hover, .theme-switcher:hover {
  transform: scale(1.1);
  transition: transform 0.15s ease-out;
}

.logo,
.theme-switcher {
  width: $menu-height;
  height: $menu-height;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 56px;
  cursor: pointer;
}

.link {
  display: inline-block;
  padding: 0 2vw;
  font-size: 20px;
  font-weight: bold;
  line-height: $menu-height;
  @include color("primary-500");
}

  .router-link-active {
    @include color("neutral-900");

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
}

.theme-light .mainmenu {
  .logo {
    background-image: url("../assets/icons/logo-light.svg");
  }

  .theme-switcher {
    background-image: url("../assets/icons/day-to-night.svg");
  }
}

.mainmenu {
  @include themify-nested(".is-scrolled", "border-color", "neutral-100");
}
</style>