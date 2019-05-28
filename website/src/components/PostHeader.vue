<template>
  <header class="post-header" :class="{ 'is-link': linked }">
    <h2>
      <a :href="data.clientUrl">{{ data.title }}</a>
    </h2>
    <span v-if="data.date && !linked" class="timestamp">{{ formattedDate }}</span>
    <aside v-if="!linked && data.tags && data.tags.length">
      <b>BLOG POST</b> on
      <a href="summaries/tag">tag</a>,
      <a href="summaries/tag">tag</a> and
      <a href="summaries/tag">tag</a>.
    </aside>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { formatDate } from "../logic/helpers";
import { HeaderData } from "../logic/models";

@Component
export default class Summary extends Vue {
  @Prop() private data!: HeaderData;
  @Prop() private link?: boolean;

  // TODO: make tags valid links

  private get linked() {
    return this.link || false;
  }

  private get formattedDate() {
    return formatDate(this.data.clientDate);
  }
}
</script>

<style lang="scss" scoped>
@import "./../style/theme.scss";

h2 {
  display: inline-block;

  a {
    @include color("neutral-900");
  }
}

.timestamp {
  padding-left: 16px;
  @include color("neutral-500");
}

main {
  padding-top: 24px;
}

.is-link h2 {
  &::after {
    content: " ›";
  }

  &:hover::after {
    content: " »";
  }
}
</style>
