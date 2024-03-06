<template>
  <div class="headline reveal reveal_BTT">
    <span>{{ span }}</span>
    <h1><b>{{ title }}</b><br>{{ description }}</h1>
    <p v-html="paragraph"></p>
  </div>
</template>

<script>
export default {
  props: {
    span: String,
    title: String,
    description: String,
    paragraph: String
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";

.headline {
  margin-top: 14vw;
  b {
    color: $premary-600;
  }
}

</style>