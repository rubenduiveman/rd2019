<template>
  <article v-if="post">
    <PostHeader :data="post"/>
    <main v-html="post.content"></main>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

import PostHeader from "@/components/PostHeader.vue";

import * as Api from "../logic/api";
import { PostData } from "../logic/models";

@Component({ components: { PostHeader } })
export default class Post extends Vue {
  @Prop() private id!: string;

  private postData: PostData | null = null;

  private get post() {
    return this.postData;
  }

  public async beforeMount() {
    this.postData = await Api.getPost(this.id);
  }

  @Watch("id")
  private async onIdChanged() {
    this.postData = await Api.getPost(this.id);
  }

  @Watch("postData")
  private onPostDataChanged() {
    window.history.pushState(
      null,
      this.postData!.title,
      this.postData!.clientUrl
    );
    window.scrollTo(0, 0);
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
