<template>
  <ul>
    <li v-for="linkdata in links" :key="linkdata.url">
      <a class="outbound" :href="linkdata.url">{{ linkdata.title }}</a>
      <label class="date">{{ linkdata.date }}</label>
      <p class="desc" v-html="linkdata.description"></p>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import * as Api from "@/logic/api";
import { LinkData } from "@/logic/models";

@Component
export default class LinksList extends Vue {
  private links: LinkData[] = [];

  public async beforeMount() {
    this.links = await Api.getLinks();
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/theme.scss";

p a {
  @include color("neutral-900");
  text-decoration: underline;
  font-weight: normal;

  &:hover {
    @include color("primary-500");
  }
}
</style>
