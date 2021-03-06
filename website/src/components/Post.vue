<template>
  <article v-if="post">
    <PostHeader :data="post"/>
    <main v-html="content"></main>
    <aside>
      Want to react?
      <a :href="shareLink" target="_blank">Discuss this post on twitter</a> or
      <a href="https://twitter.com/rubenduiveman">tweet to me</a>.
    </aside>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

import PostHeader from "@/components/PostHeader.vue";

import * as Api from "../logic/api";
import { DataType } from "../logic/enums";
import { PostData } from "../logic/models";

@Component({ components: { PostHeader } })
export default class Post extends Vue {
  @Prop() private id!: string;
  @Prop() private type!: DataType;

  private postData: PostData | null = null;

  private get post() {
    return this.postData;
  }

  private get content() {
    let content = this.post!.content;

    // replace description
    content = content.replace(
      "{{ $page.frontmatter.description}}",
      this.post!.summary || ""
    );

    return content;
  }

  private get shareLink() {
    const postName = encodeURIComponent(this.post!.title);
    const postLink = encodeURIComponent(this.post!.shareUrl);
    // tslint:disable-next-line:max-line-length
    return `https://twitter.com/intent/tweet?text=I%20just%20read%20%22${postName}%22%20by%20%40rubenduiveman&url=${postLink}`;
  }

  public async beforeMount() {
    this.loadPost();
  }

  @Watch("id")
  private async onIdChanged() {
    this.loadPost();
  }

  @Watch("postData")
  private onPostDataChanged() {
    window.scrollTo(0, 0);
  }

  private async loadPost() {
    switch (this.type) {
      case DataType.CASESTUDIES:
        this.postData = await Api.getCaseStudy(this.id);
        break;
      default:
        this.postData = await Api.getPost(this.id);
        break;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./../style/theme.scss";

.timestamp {
  padding-left: 16px;
  @include color("neutral-500");
}

main {
  padding-top: 24px;
}

.theme-dark aside a,
.theme-light aside a {
  background-image: none;
  margin: 0;
}

aside {
  border-top: 1px solid;
  @include border-color("neutral-500");
  margin-top: 2em;
  padding-top: 0.5em;
  width: 50%;

  a {
    white-space: nowrap;
  }
}
</style>
