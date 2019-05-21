<template>
  <div class="summaries">
    <Section class="summary" type="odd" v-for="summary in summaries" :key="summary.id">
      <Summary :data="summary" />
    </Section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Section from "@/components/Section.vue";
import Summary from "@/components/Summary.vue";

import * as Api from "@/logic/api";
import { SummaryData } from "@/logic/models";

@Component({
  components: {
    Summary,
    Section
  }
})
export default class Summaries extends Vue {
  private summaries: SummaryData[] = [];

  public async beforeMount() {
    this.summaries = await Api.getSummaries();
  }
}
</script>


<style lang="scss" scoped>
@import "@/style/theme.scss";

.summaries {
  padding: 6vh 4vw;
}

.summary {
  margin: 4vh 0;
  
  &::before {
    border-radius: 0.25em;
  }
}

</style>
