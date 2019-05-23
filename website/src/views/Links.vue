<template>
  <Section class="links">
    <p class="hero">
        What follows is a list of interesting links and worthwile articles that I've come across. You might find them interesting, too.
    </p>
    <LinksList/>
  </Section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import LinksList from "@/components/LinksList.vue";
import Section from "@/components/Section.vue";

@Component({
  components: {
      LinksList,
      Section
  }
})
export default class Links extends Vue { }
</script>
