<template>
  <div>
    <Section class="designs">
      <p
        class="intro"
      >Below is a couple of designs I've made over the years. Enjoy them at your leisure.</p>
      <p>
        Unfortunately, I haven't had the time to document my design process. I am well aware that the designs below hardly provide any insight in how they came into being. I will try and document this in the future. What I can tell you now is that it involves whiteboards, sketches, user flows and lots of discussions. Some hints and clues about my design methodologies might be discovered in my
        <router-link :to="{ name: 'casestudies' }">case studies</router-link>. For now, enjoy the pretty pictures.
      </p>
      <div class="designs-list">
        <DesignSummary
          class="design-item"
          v-for="design in designs"
          :key="design.name"
          :params="design"
          @click="openDesign(design)"
        />
      </div>
    </Section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import * as Api from "@/logic/api";

import DesignSummary from "@/components/DesignSummary.vue";
import Section from "@/components/Section.vue";
import { DesignData } from "../logic/models";

@Component({
  components: {
    DesignSummary,
    Section
  }
})
export default class Designs extends Vue {
  private designs: DesignData[] = [];

  private IFSCaseStudyUrl = "";

  public async beforeMount() {
    Api.getCaseStudy("2019-06-19").then((study) => {
      this.IFSCaseStudyUrl = study.clientUrl;
    });

    Api.getDesigns().then((designs) => {
      this.designs = designs;
    });
  }

  private openDesign(design: DesignData) {
    this.$router.push({ name: "design", params: { name: design.urlName } });
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/theme.scss";

.designs-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 4vh;
}

.design-item {
  margin: 1vh;
}
</style>
