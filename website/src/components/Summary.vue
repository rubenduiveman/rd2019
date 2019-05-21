<template>
  <article v-if="data">
    <PostHeader :data="data" />
    <p v-html="data.summary"></p>
    <a :href="data.clientUrl">Read more</a>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import PostHeader from "@/components/PostHeader.vue";

import { ajax } from "../logic/helpers";
import { SummaryData } from "../logic/models";

@Component({ components: { PostHeader }})
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
