<template>
  <Section class="even" v-if="design">
    <h2>{{ design.name }}</h2>
    <p v-html="design.description"/>
    <img v-for="url in design.seriesUrls" :key="url" :src="url" @click="openImage(url)" />
  </Section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { DesignData } from "../logic/models";

import * as Api from "@/logic/api";

import Section from "@/components/Section.vue";

@Component({ components: { Section } })
export default class Design extends Vue {
  private design: DesignData | null = null;

  public async beforeMount() {
    this.design = await Api.getDesign(this.$route.params.name);
  }

  private openImage(url: string) {
      window.open(url, "_blank");
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/theme.scss";

img {
    margin: 2vh auto;
    display: block;
    cursor: pointer;
    @include border-color("neutral-500");

    &:hover {
        @include border-color('primary-500');
    }
}
</style>