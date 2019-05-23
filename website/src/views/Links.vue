<template>
  <Section class="links">
    <p class="hero">
        What follows is a list of interesting links and worthwile articles that I've come across. You might find them interesting, too.
    </p>
  </Section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Section from "@/components/Section.vue";

@Component({
  components: {
      Section
  }
})
export default class Links extends Vue { }
</script>
