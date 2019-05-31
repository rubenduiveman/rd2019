<template>
  <article v-if="data">
    <router-link :to="data.clientUrl">
      <slot/>
    </router-link>
    <PostHeader :link="true" :data="data"/>
    <p class="post-summary" v-if="data.summary">
      <span v-html="data.summary"/>
      <router-link :to="data.clientUrl">Read more</router-link>
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

.post-summary a {
  padding-left: 1em;
  white-space: nowrap;
}
</style>
