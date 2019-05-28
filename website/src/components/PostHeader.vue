<template>
  <header>
    <h2>{{ data.title }}</h2>
    <span class="timestamp">{{ formattedDate }}</span>
    <aside>
      <b>BLOG POST</b> on
      <a href="summaries/tag">tag</a>,
      <a href="summaries/tag">tag</a> and
      <a href="summaries/tag">tag</a>.
    </aside>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { ajax, formatDate } from "../logic/helpers";
import { HeaderData } from "../logic/models";

@Component
export default class Summary extends Vue {
  @Prop() private data!: HeaderData;

  // TODO: make post title a link

  // TODO: make tags valid links

  private get formattedDate() {
    return formatDate(this.data.clientDate);
  }
}
</script>

<style lang="scss" scoped>
@import "./../style/theme.scss";

h2 {
  display: inline-block;
}

.timestamp {
  padding-left: 16px;
  @include color("neutral-500");
}

main {
  padding-top: 24px;
}
</style>
