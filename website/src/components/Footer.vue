<template>
  <footer :class="accent">
    <a href="https://twitter.com/rubenduiveman"></a>
    <a href="https://linkedin.com/in/rubenduiveman"></a>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
  private get accent(): string {
    return this.$store.state.footerAccent;
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/theme.scss";

footer {
  position: relative;

  height: 15vw;
  min-height: 104px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
}

footer::before {
  content: "";

  transform: skewY(-8deg);
  transform-origin: top left;

  position: absolute;
  bottom: 0px;
  left: 0px;
  z-index: -1;

  height: 100%;
  min-height: 104px;
  width: 100%;
}

footer.odd,
footer.odd::before {
  @include background-color("neutral-100");
}

footer.even,
footer.even::before {
  @include background-color("neutral-0");
}

footer a {
  opacity: 0.4;
  width: 48px;
  height: 48px;
  display: inline-block;
  background-position: center;
  background-repeat: no-repeat;
  transition: opacity 150ms ease-out;

  &:hover {
    opacity: 0.7;
  }
}
</style>
