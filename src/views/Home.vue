<template>
  <div class="home">
    <Section type="accented" class="intro-section">
      <Intro/>
    </Section>
    <!-- <Posts/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Intro from "@/components/Intro.vue";
import Posts from "@/components/Posts.vue";
import Section from "@/components/Section.vue";

@Component({
  components: {
    Intro,
    Posts,
    Section
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/style/theme.scss";

@media only screen and (max-width: 799px) {
  .home {
    padding-top: 10vh;
  }
}

@media only screen and (min-width: 800px) and (max-width: 1199px) {
  .home {
    padding-top: 16vh;
  }
}

@media only screen and (min-width: 1200px) {
  .home {
    padding-top: 14vh;
  }
}
</style>
