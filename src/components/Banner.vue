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

$sub_img: (
  company: url('~assets/sub_banner_01.png'),
  strategy: url('~assets/sub_banner_02.png'),
  incruit: url('~assets/sub_banner_03.png'),
  contact: url('~assets/sub_banner_04.png')
);
@each $key, $vlue in $sub_img {
  .sub_page.#{$key} .sub_banner {
    background-image: $vlue !important;
  }
}

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