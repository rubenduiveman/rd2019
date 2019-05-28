<template>
  <article v-if="data">
    <a :href="data.clientUrl">
      <slot/>
    </a>
    <PostHeader :link="true" :data="data"/>
    <p v-html="data.summary"></p>
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
</style>
