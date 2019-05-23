<template>
  <ul>
    <li>
      <a class='outbound'
        href="https://medium.com/@jasonyuan/the-desktop-metaphor-must-die-676fbb34afdb"
      >The Desktop Metaphor Must Die</a>
      <label class="date">May 23, 2019</label>
      <p class="desc">Thought-provoking article on how the desktop metafore is reaching its due date. Focuses on how human-focused a desktop really is, since it allows us to get overwhelmed by multitasking, and how it should stimulate us to get in <a href="https://en.wikipedia.org/wiki/Flow_(psychology)">a state of flow</a>.</p>
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
