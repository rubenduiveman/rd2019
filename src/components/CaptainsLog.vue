<template>
  <Section class="captains-log even">
    <!-- <b>date</b>
    <p>work</p>
    <p>life</p>
    <p>thought</p> -->

    <b>May 17th, 2019</b>
    <p>At work, I don't always feel I'm working on things that match my expertise. Because of the open culture at Uptrends, I felt safe to discuss this with my team lead. He and I are looking at fixing this in a way that works for both parties.</p>
    <p>At home Renske and I are almost done preparing the birth of my daughter halfway June! We've got almost everything set up. Unfortunately our car broke down last week, so we're in the middle of replacing it with something bigger.</p>
    <p>One of the things I'm trying to be more mindful of is how little I know of what other people think. "Don't compare your inside to someone else's outside" is a household saying. That goes for how I might feel about myself when I compare myself to others, but it's also a good pointer for when I don't understand other people's decisions, or the reasoning behind it. You get to be you, with your experiences, and I get to be me.</p>

    <!-- <b>March 12th, 2019</b>
    <p>After switching jobs last October, I'm slowly adjusting to the pace of Uptrends. It's a great team to be a part of, and working from home two days a week is really nice.</p>
    <p>Outside of work, Renske and I are slowly starting preparations for the birth of our daughter, expected halfway June. This means Jona has moved to his new room, freeing up the nursery.</p>
    <p>I'm thinking about generations a lot lately. It's probably because my second kid is on the way, and my dad retired last year. I feel like I'm not spending enough time with either of them, even though I get to enjoy time with Jona every day and see my parents at least once a week. I'm looking forward to a long weekend with my dad in May, sipping whisky in Schotland. Time is precious and people won't be around forever.</p> -->
  </Section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Section from "@/components/Section.vue";

@Component({ components: { Section } })
export default class CaptainsLog extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/style/theme.scss";

</style>
