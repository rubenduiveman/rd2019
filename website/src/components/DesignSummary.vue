<template>
  <div class="design" @click="$emit('click')">
      <div class="image" :style="{ 'background-image': 'url(' + params.coverImageUrl + ')' }"></div>
      <div class="description">{{ params.name }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { DesignData } from "../logic/models";

@Component
export default class DesignSummary extends Vue {
    @Prop() private params!: DesignData;
}
</script>

<style lang="scss" scoped>
@import "@/style/theme.scss";

.design {
  width: 416px;
  display: flex;
  flex-direction: column;
  padding: 8px;
  cursor: pointer;
  @include color("neutral-900");
  transition: all 120ms ease-out;
  border: 1px solid;
  @include border-color("neutral-100")

  &:hover {
      transform: translateY(-2px);
      @include border-color("neutral-200")
  }
}

.image {
    height: 288px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}

.description {
    padding: 8px 2px 0 2px;
    font-size: 14px;
}

.theme-light .design {
  @include theme-color("light", "background-color", "neutral-0");
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

  .image {
      @include theme-color("light", "background-color", "neutral-100");
  }

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
  }
}

.theme-dark .design {
  @include theme-color("dark", "background-color", "neutral-100");

  .image {
      @include theme-color("dark", "background-color", "neutral-0");
  }

  &:hover {
    @include theme-color("dark", "background-color", "neutral-500");
  }
}
</style>
