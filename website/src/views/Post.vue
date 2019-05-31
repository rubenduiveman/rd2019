<template>
  <Posts :startId="startId" @changed="onPostChanged"/>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Posts from "@/components/Posts.vue";

@Component({
  components: {
    Posts
  }
})
export default class Post extends Vue {
  private get startId() {
    return this.$route.params.id;
  }

  private onPostChanged(meta: ChangedParams) {
    if (meta.hasEarlier || meta.hasNewer) {
      this.$store.commit("setFooterAccent", "even");
    } else {
      this.$store.commit("setFooterAccent", "odd");
    }
  }
}

interface ChangedParams {
  hasNewer: boolean;
  hasEarlier: boolean;
}
</script>
