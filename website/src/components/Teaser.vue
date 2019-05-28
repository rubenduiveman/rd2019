<template>
  <article v-if="data">
    <a :href="data.clientUrl">
      <slot/>
    </a>
    <PostHeader :link="true" :data="data"/>
    <p class="summary" v-if="data.summary">
      <span v-html="data.summary"/>
      <a :href="data.clientUrl">Read more</a>
    </p>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import PostHeader from "@/components/PostHeader.vue";

import { ajax } from "../logic/helpers";
import { SummaryData } from "../logic/models";

@Component({ components: { PostHeader } })
export default class Teaser extends Vue {
  @Prop() private data!: SummaryData;
}
</script>

<style lang="scss" scoped>
@import "./../style/theme.scss";

.summary a {
  padding-left: 1em;
}
</style>
