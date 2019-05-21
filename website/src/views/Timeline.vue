<template>
  <div class="timeline">
    <CaptainsLog/>
    <CTimeline/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import CaptainsLog from "@/components/CaptainsLog.vue";
import CTimeline from "@/components/Timeline.vue";

@Component({
  components: {
    CaptainsLog,
    CTimeline
  }
})
export default class Timeline extends Vue {
  public beforeMount() {
    this.$store.commit("setFooterAccent", "even");
  }
}
</script>
