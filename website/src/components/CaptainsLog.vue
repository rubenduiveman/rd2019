<template>
  <Section class="captains-log even">
    <h2>What I'm doing now</h2>
    <!-- <label class="date">date</label>
    <p>work</p>
    <p>life</p>
    <p>thought</p> -->

    <label class="date">Aug 13th, 2019</label>
    <p>Before summer, I discussed my career options and interests with my team lead. This led to me being involved in more interesting and challenging projects, which allow me to make more of an impact in the Uptrends product. I'm very much enjoying the team at Uptrends, they're such a joy to work with! Rainy days are the most fun, because then we take some time after lunch to play various oldschool games (all of which I'm not very good at).</p>
    <p>At home Renske, Jona and I are enjoying our time with our baby girl Linde. She's starting to react to her environment and to us, so she's a great source of smiles for all of us. Even though she's not the easiest baby, providing us with pretty tiring days, we love to see her grow - she's so big already!</p>
    <p>Life moves fast, you know? One second I'm fresh out of college, the next there's a wife and two kids! It's a great adventure, but sometimes I feel I need more time to look at the bigger picture - how do I want to make an impact on the world? How can I be a positive change for the world around me? I'm more and more aware that I've only just started living and definitely haven't figured everything out yet. Some things take time. In the meantime, I'm happy to separate my trash and ride my bike more than my car.</p>

    <!-- <label class="date">May 17th, 2019</label>
    <p>At work, sometimes I'm searching to find how I can add value the most. Because of the open culture at Uptrends, I felt safe to discuss this with my team lead. He and I are looking at improving this in a way that works for both parties.</p>
    <p>At home Renske and I are almost done preparing the birth of my daughter halfway June! We've got almost everything set up. Unfortunately our car broke down last week, so we're in the middle of replacing it with something bigger.</p>
    <p>One of the things I'm trying to be more mindful of is how little I know of what other people think. "Don't compare your inside to someone else's outside" is a household saying. That goes for how I might feel about myself when I compare myself to others, but it's also a good pointer for when I don't understand other people's decisions, or the reasoning behind it. You get to be you, with your experiences, and I get to be me.</p> -->

    <!-- <label class="date">March 12th, 2019</label>
    <p>After switching jobs last October, I'm slowly adjusting to the pace of Uptrends. It's a great team to be a part of, and working from home two days a week is really nice.</p>
    <p>Outside of work, Renske and I are slowly starting preparations for the birth of our daughter, expected halfway June. This means Jona has moved to his new room, freeing up the nursery.</p>
    <p>I'm thinking about generations a lot lately. It's probably because my second kid is on the way, and my dad retired last year. I feel like I'm not spending enough time with either of them, even though I get to enjoy time with Jona every day and see my parents at least once a week. I'm looking forward to a long weekend with my dad in May, sipping whisky in Scotland. Time is precious and people won't be around forever.</p> -->

    <aside>This section is an idea of <a href="https://sivers.org/nowff">Derek Sivers</a>.</aside>
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

h2 {
  display: inline;
}

aside {
  border-top: 1px solid;
  @include border-color("neutral-500");
  margin-top: 2em;
  padding-top: 0.5em;
  width: 50%;
}

</style>
