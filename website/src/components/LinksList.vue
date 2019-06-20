<template>
  <ul class="linkslist">
    <li v-for="linkdata in links" :key="linkdata.url">
      <a class="outbound" :href="linkdata.url">{{ linkdata.title }}</a>
      <label class="date">{{ linkdata.date }}</label>
      <div class="desc" v-html="linkdata.description"></div>
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

<style lang="scss">
@import "@/style/theme.scss";

.linkslist {
  padding: 40px 0;
}

.linkslist .desc a {
  @include color("neutral-900");
  text-decoration: underline;
  font-weight: normal;
  background-image: none !important;

  &:hover {
    @include color("primary-500");
  }
}
</style>
