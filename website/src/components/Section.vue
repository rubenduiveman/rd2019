 <template>
  <section :class="type">
    <div class="container">
      <slot/>
    </div>
  </section>
</template>

<script lang="ts">
import { SectionType } from "@/logic/enums.ts";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Section extends Vue {
  @Prop() public type!: SectionType;
}
</script>

<style lang="scss" scoped>
@import "@/style/theme.scss";

section {
  position: relative;
  display: flex;
  justify-content: center;
  padding: 4vh 8vw 16vw 8vw;
}

.container {
  max-width: 1000px;
  width: 100%;
}

section::before {
  content: "";

  transform: skewY(-8deg);
  transform-origin: top left;

  position: absolute;
  z-index: -1;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 100%;
}


section.odd::before {
  @include background-color("neutral-100");
}

section.even::before {
  @include background-color("neutral-0");
}

section.accented {
  @include color("accented-text");

  &::before {
    @include background-color("accented-bg");
  }
}
</style>
