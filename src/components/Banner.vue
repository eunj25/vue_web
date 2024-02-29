<template>
  <div class="sub_banner">
    <h1>{{ bannerText }}</h1>
    <P>{{ bannerDesc }}</P>
  </div>
</template>

<script>
export default {
  computed: {
    bannerText() {
      return this.$store.state.banner.bannerText;
    },
    bannerDesc() {
      return this.$store.state.banner.bannerDesc;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";
.sub_banner {
  width: 100%;
  height: 330px;
  @include center;
  flex-direction: column;
  gap: 30px;
  background-size: cover;
  background-position: center;
  color: $wh-color;
  background-color: royalblue;
  h1 {
  font-size: $font-medium;
  font-weight: bold;
  }
  p {
    font-size: $font-Regular;
  }
}
</style>