<template>
  <Summaries type="casestudies"/>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Summaries from "@/components/Summaries.vue";

@Component({
  components: {
    Summaries
  }
})
export default class CaseStudies extends Vue {}
</script>
