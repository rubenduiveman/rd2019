<template>
  <div class="summaries">
    <Section
      class="summary"
      :type="(index % 2 === 0) ? 'odd' : 'even'"
      v-for="(summary, index) in summaries"
      :key="summary.id"
    >
      <Summary :data="summary"/>
    </Section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Section from "@/components/Section.vue";
import Summary from "@/components/Summary.vue";

import * as Api from "@/logic/api";
import { DataType } from "@/logic/enums";
import { SummaryData } from "@/logic/models";

@Component({
  components: {
    Summary,
    Section
  }
})
export default class Summaries extends Vue {
  @Prop() private type!: DataType;

  private summaries: SummaryData[] = [];

  public async beforeMount() {
    switch (this.type) {
      case DataType.CASESTUDIES:
        this.summaries = await Api.getCaseStudySummaries();
        break;
      case DataType.BLOG:
      default:
        this.summaries = await Api.getPostSummaries();
        break;
    }

    const footerAccent = this.summaries.length % 2 === 0 ? "odd" : "even";
    this.$store.commit("setFooterAccent", footerAccent);
  }
}
</script>


<style lang="scss" scoped>
@import "@/style/theme.scss";

.summaries {
  padding-top: 6vh;
}

.summary {
  &::before {
    border-radius: 0.25em;
  }
}
</style>
