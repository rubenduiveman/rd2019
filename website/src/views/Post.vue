<template>
  <Posts :startId="startId" />
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
}
</script>
