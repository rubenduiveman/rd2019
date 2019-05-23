<template>
  <main>
    <h1>Ruben Duiveman</h1>
    <!-- <h2 class="faded">Full stack frontend developer</h2> -->
    <h2 class="faded">Product & UX</h2>
    <p>
      In October 2018 I started working at
      <a href="https://uptrends.com">Uptrends</a> as a software developer. Before that, I worked at
      <a href="https://filelinx.com">FileLinx</a> for 7 years as a frontend developer, UI / UX designer, and Development Team Lead.
    </p>

    <p>
      Get to know me better by reading about
      <router-link to="vision">my vision</router-link>&nbsp;or checking out
      <router-link to="timeline">my timeline</router-link>. See what inspires me by scrolling through <router-link to="links">my list of links</router-link>.
      <!-- Find out how I work by reading <router-link to="case-studies">my case studies</router-link>&nbsp;or by reading
      <router-link to="blog">my blog</router-link>. Alternatively, scroll down to start reading my latest blog post below. -->
    </p>

    <div class="socials">
      <a class="light" href="https://twitter.com/rubenduiveman"></a>
      <a class="light" href="https://linkedin.com/in/rubenduiveman"></a>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Intro extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/style/theme.scss";

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10vh 0;
}

a {
  @include color("accented-text");
}

p {
  max-width: 640px;
}

.socials {
  padding-top: 4vh;
}

.socials a {
  opacity: 0.7;
  width: 48px;
  height: 48px;
  display: inline-block;
  background-position: center;
  background-repeat: no-repeat;
  transition: opacity 150ms ease-out;

  &:hover {
    opacity: 1;
  }
}
</style>
