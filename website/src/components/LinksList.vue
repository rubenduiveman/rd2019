<template>
  <ul>
    <li>
      <a
        class="outbound"
        href="https://www.forbes.com/sites/tracybrower/2019/05/27/agile-why-your-efforts-will-fail-and-what-to-do-about-it/"
      >Agile: why your efforts will fail and what to do about it</a>
      <label class="date">May 28, 2019</label>
      <p
        class="desc"
      >This is an article on common pitfalls Agile development teams might come across. There are no real solutions offered in this piece, but naming issues is the first step towards solving them.</p>
    </li>
    <li>
      <a
        class="outbound"
        href="https://medium.com/@jasonyuan/the-desktop-metaphor-must-die-676fbb34afdb"
      >The Desktop Metaphor Must Die</a>
      <label class="date">May 23, 2019</label>
      <p class="desc">
        Thought-provoking article on how the desktop metafore is reaching its due date. Focuses on how human-focused a desktop really is, since it allows us to get overwhelmed by multitasking, and how it should stimulate us to get in
        <a
          href="https://en.wikipedia.org/wiki/Flow_(psychology)"
        >a state of flow</a>.
      </p>
    </li>
    <li>
      <a class="outbound" href="https://palettte.app/">Palette App</a>
      <label class="date">Feb 10, 2019</label>
      <p class="desc">
        Color palette generator that actually feels well thought-out. This tool enables you to create consistent and logical color palettes that work. Also super fun to visualize the
        <a
          href="https://en.wikipedia.org/wiki/HSL_and_HSV"
        >HSL</a> relationship between the colors in a palette.
      </p>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class LinksList extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/style/theme.scss";

p a {
  @include color("neutral-900");
  text-decoration: underline;
  font-weight: normal;

  &:hover {
    @include color("primary-500");
  }
}
</style>
