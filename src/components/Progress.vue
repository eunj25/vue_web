<template>
  <!-- //parallax__scrollTop -->
  <div class="parallax__progress">
    <progress max="100" value="0"></progress>
  </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  methods() {
    gsap.to('progress', {
      value: 100,
      ease: "none",
      scrollTrigger: {
        scrub: 0.3
      }
    })
  }
};
</script>

<style lang="scss" scoped>
@import "~/scss/main";

/* parallax__progress */
.parallax__progress progress {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999999;
  appearance: none;
  width: 100%;
  height: 5px;
  border: none;
  background: transparent;
  &::-webkit-progress-bar {
    background: transparent;
  }
  &::-webkit-progress-value {
    background: linear-gradient(to left, var(--premary-800), var(--premary-600), var(--premary-100));
    /* background-color: var(--premary-600); */
    background-attachment: fixed;
  }
  &::-moz-progress-bar {
    background: linear-gradient(to left, var(--premary-800), var(--premary-600), var(--premary-100));
    /* background-color: var(--premary-600); */
    background-attachment: fixed;
  }
}
</style>./Progress.vue