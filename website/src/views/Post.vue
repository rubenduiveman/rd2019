<template>
  <Posts :startId="startId" :type="type" @changed="onPostChanged"/>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Posts from "@/components/Posts.vue";
import { DataType } from "@/logic/enums";

@Component({
  components: {
    Posts
  }
})
export default class Post extends Vue {
  private get startId() {
    return this.$route.params.id;
  }

  private get type() {
    return this.$route.meta.type || DataType.BLOG;
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
