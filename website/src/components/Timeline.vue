<template>
  <Section class="odd">
    <h2>Timeline</h2>
    <ul>
      <li>
        <label class="life">LIFE</label><label class="date">DEC 2018</label>
        <p class="desc">We're expecting! A baby girl will be added to our little family halfway June 2019.</p>
      </li>
      <li>
        <label class="work">WORK</label><label class="date">OCT 2018</label>
        <p class="desc">Job switch! I started working at Uptrends after 7 years at FileLinx. I’m very exited to start as a Software Developer and get my skills to the next level!</p>
      </li>
      <li>
        <label class="life">LIFE</label><label class="date">JUL 2018</label>
        <p class="desc">Moved to our new and super big house! We’re still living in Bodegraven, but in a single family home instead of an apartment.</p>
      </li>
      <li>
        <label class="work">WORK</label><label class="date">AUG 2017</label>
        <p class="desc">Took on a Development Team Lead role in addition to my developing and designing. Added responsibilities include planning and coaching the Development Team.</p>
      </li>
      <li>
        <label class="life">LIFE</label><label class="date">SEP 2016</label>
        <p class="desc">It’s a boy! Renske and I just welcomed our son Jona to the world. He’s doing great!</p>
      </li>
      <li>
        <label class="life">LIFE</label><label class="date">OCT 2014</label>
        <p class="desc">Got married to Renske! We celebrated our marriage on a wonderful day full of love, happiness, family and friends. I moved from Alphen to Bodegraven to live with her.</p>
      </li>
      <li>
        <label class="work">WORK</label><label class="date">SEP 2011</label>
        <p class="desc">Started working at FileLinx as a User Interface Designer. Excited to put my college knowledge to the test!</p>
      </li>
      <li>
        <label class="work">WORK</label><label class="date">AUG 2011</label>
        <p class="desc">Whoo-hoo! I’m officially a Bachelor of Applied Science after wrapping up my Communication & Multimedia Design studies at Avans University!</p>
      </li>
    </ul>
  </Section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Section from "@/components/Section.vue";

@Component({ components: { Section } })
export default class Timeline extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/style/theme.scss";

li {  
  @include themify-bg-line(5px, 6px, "neutral-500");
  
  &::before {
    top: 29px;
  }

  &:last-child {
    background-size: 100% 40px;
  }
}

.life, .work {
  font-size: 16px;
  line-height: 32px;
}

.life, .work {
  font-weight: bold;
}

.life {
  @include color("primary-500");
}

.work {
  @include color("accent-500");
}

</style>
