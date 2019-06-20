<template>
  <main class="intro">
    <h1>Ruben Duiveman</h1>
    <!-- <h2 class="faded">Full stack frontend developer</h2> -->
    <h2 class="faded">Product & UX</h2>
    <p>My passion is using my experience as a software developer and team lead to grow ideas into reachable targets. My work focuses on the overlap of strategy, process and development.</p>

    <p>
      I'm currently working on a SaaS Monitoring platform used by millions of users, including SpaceX, Microsoft and Volkswagen. I have
      <router-link
        :to="IFSCaseStudyUrl"
      >led a team of 8 developers on a two-year venture to build a PaaS platform</router-link>.
    </p>

    <p>
      Get to know me better by reading about
      <router-link :to="{ name: 'vision' }">my vision</router-link>&nbsp;or checking out
      <router-link :to="{ name: 'timeline' }">my timeline</router-link>. See what inspires me by scrolling through
      <router-link :to="{ name: 'links' }">my list of links</router-link>.
      Find out how I work and think by reading
      <router-link :to="{ name: 'casestudies' }">my case studies</router-link>&nbsp;or by reading
      <router-link :to="{ name: 'blog' }">my blog</router-link>.
      <!-- Alternatively, scroll down to start reading my latest blog post below. -->
    </p>

    <div class="socials">
      <a class="light" href="https://twitter.com/rubenduiveman"></a>
      <a class="light" href="https://linkedin.com/in/rubenduiveman"></a>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import * as Api from "@/logic/api";

@Component
export default class Intro extends Vue {
  private IFSCaseStudyUrl = "";

  public async beforeMount() {
    const study = await Api.getCaseStudy("0");
    this.IFSCaseStudyUrl = study.clientUrl;
  }
}
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
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
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
