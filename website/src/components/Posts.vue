<template>
  <div class="posts">
    <Section class="post" type="even">
      <Post :id="activePostId"/>
    </Section>
    <Section  v-if="newer" type="odd">
      <Summary :data="newer" />
    </Section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

import Post from "@/components/Post.vue";
import Section from "@/components/Section.vue";
import Summary from "@/components/Summary.vue";

import * as Api from "@/logic/api";
import { SummaryData } from "@/logic/models";

@Component({
  components: {
    Post,
    Section,
    Summary
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
