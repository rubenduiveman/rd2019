<template>
  <div class="posts">
    <div class="earlier" v-if="hasEarlier" @click="loadEarlier">Earlier post: {{ earlier.title }}</div>
    <Section class="post" type="even">
      <Post :id="activePostId"/>
    </Section>
    <div class="newer" v-if="hasNewer" @click="loadNewer">Newer post: {{ newer.title }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Post from "@/components/Post.vue";
import Section from "@/components/Section.vue";

import * as Api from "@/logic/api";
import { SummaryData } from "@/logic/models";

@Component({
  components: {
    Post,
    Section
  }
})
export default class Posts extends Vue {
  // TODO: allow passing a category to filter posts

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

  private get hasEarlier() {
    return this.currentIndex + 1 < this.summaries.length;
  }

  private get hasNewer() {
    return this.currentIndex >= 1;
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

  private loadEarlier() {
    if (!this.hasEarlier) {
      return;
    }

    this.loadPostByIndex(this.currentIndex + 1);
  }

  private loadNewer() {
    if (!this.hasNewer) {
      return;
    }

    this.loadPostByIndex(this.currentIndex - 1);
  }

  private loadPostByIndex(index: number) {
    const post = this.summaries[index];
    this.activePostId = post.id;
  }
}
</script>
<style lang="scss" scoped>
@import "./../style/theme.scss";

.earlier,
.newer {
  border: 0;
  background: none;
  width: 100%;
  height: 8vh;
  position: relative;
  color: #ccc;
  padding-bottom: 2vh;
  display: flex;
  justify-content: center;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    transform: skewY(-8deg);
    transform-origin: top left;
    position: absolute;
    left: 0;
    top: 0;
  }
}

.earlier {
  margin-top: 4vh;
}
</style>
