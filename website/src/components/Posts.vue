<template>
  <div class="posts">
    <Section class="post" type="even">
      <Post :id="activePostId"/>
    </Section>
    <Section v-if="earlier || newer" type="odd">
      <Teaser :data="earlier">Earlier post</Teaser>
      <hr v-if="earlier && newer">
      <Teaser :data="newer">Newer post</Teaser>
    </Section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

import Post from "@/components/Post.vue";
import Section from "@/components/Section.vue";
import Teaser from "@/components/Teaser.vue";

import * as Api from "@/logic/api";
import { SummaryData } from "@/logic/models";

@Component({
  components: {
    Post,
    Section,
    Teaser
  }
})
export default class Posts extends Vue {
  // TODO: allow passing a category to filter posts

  // TODO: show previous post summary but scroll view to start at current post

  @Prop() private startId!: string;

  private activePostId = this.startId;
  private summaries: SummaryData[] = [];

  private get currentIndex() {
    for (const [index, summary] of this.summaries.entries()) {
      if (summary.id.toString() === this.activePostId.toString()) {
        return index;
      }
    }
    return -1;
  }

  private get newer() {
    return this.summaries[this.currentIndex - 1];
  }

  private get earlier() {
    return this.summaries[this.currentIndex + 1];
  }

  public async beforeMount() {
    this.summaries = await Api.getSummaries();
  }

  @Watch("startId")
  private async onIdChanged() {
    this.activePostId = this.startId;
  }

  @Watch("currentIndex")
  private onIndexChanged() {
    this.$emit("changed", {
      hasNewer: !!this.newer,
      hasEarlier: !!this.earlier
    });
  }
}
</script>
<style lang="scss" scoped>
@import "./../style/theme.scss";

hr {
  margin: 2vh 0;
  opacity: 0.5;
  border: none;
  border-bottom: 1px solid;
  @include border-color("neutral-500");
}
</style>
