<template>
  <div
    v-for="(benefit, index) in benefits"
    :key="index"
    :class="'reveal'+(index % 2 === 0 ? 'reveal_TTR':'reveal_LTR')">
    <div class="item">
      <h1>{{ benefit.title }}</h1>
      <p>{{ benefit.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    benefits: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";

.benefits_box > div {
  display: flex;
  &:nth-child(odd){
    justify-content: flex-end;
  }
  .item {
    width: calc(100%/2.3);
    padding: 3vw;
    h1 {
      font-size: $font-medium;
      font-weight: bold;
      line-height: 1.5em;
      margin-bottom: 2vw;
    }
    p {
      color: $grey-800;
    }
  }
}
</style>