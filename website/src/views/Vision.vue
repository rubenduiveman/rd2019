<template>
  <Section class="vision">
    
    <p class="hero">My name is Ruben Duiveman. My passion is using my experience as an interface designer, software developer and team lead to <b>grow ideas into reachable targets</b>. My work focuses on the overlap of strategy, process and development.</p>

    <p><b>Strategy</b> is about progress, about transcending above where you are now. To follow your vision. A living strategy ensures your right to exist: by adapting to what's happening around you, you'll be able to remain the lead.</p>

    <p><b>Process</b> focuses on how you work - as organization, team or end user. Clearly mapped processes allow you to analyze and improve them if necessary, so you feel sure that your solutions will drive the desired outcome.</p>

    <p><b>Development</b> is about living up to your ideas - putting your money where your mouth is. Development shows that you dare to do whatever you think of. And even more important: development results in growth, and in results you can be proud of.</p>

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
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
@import "./../style/theme.scss";

p {
  padding-top: 2vh;
}

</style>