<template>
  <article v-if="data">
    <PostHeader :data="data"/>
    <p v-html="data.summary"></p>
    <router-link :to="data.clientUrl">Read more</router-link>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import PostHeader from "@/components/PostHeader.vue";

import { ajax } from "../logic/helpers";
import { SummaryData } from "../logic/models";

@Component({ components: { PostHeader } })
export default class Summary extends Vue {
  @Prop() private data!: SummaryData;
}
</script>

<style lang="scss" scoped>
@import "./../style/theme.scss";

main {
  padding-top: 24px;
}
</style>
