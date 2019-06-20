<template>
  <Summaries type="blog"/>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Summaries from "@/components/Summaries.vue";

@Component({
  components: {
    Summaries
  }
})
export default class Blog extends Vue {}
</script>
