<template>
  <a @click="goToTop" v-show="showButton" class="gototop">
    <span class="material-symbols-outlined">arrow_upward</span>
  </a>
</template>

<script>
export default {
  data() {
    return {
      showButton: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    goToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    handleScroll() {
      if (window.scrollY > 2500) {
        this.showButton = true;
      } else {
        this.showButton = false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";

.gototop {
  @include center;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  border: 1px solid $premary-600;
  color: $premary-600;
  position: fixed;
  // bottom: -10%;
  bottom: 30%;
  right: 5%;
  cursor: pointer;
  transition: 0.5s;
  z-index: 999;
  &:hover {
    background-color: $premary-600;
    color: #fff;
    box-shadow: 5px 0 10px rgba(0, 0, 0, 0.1);
  }
  span {
    font-size: 4.1rem;
  }
  &.show {
    bottom: 30%;
  }
}
</style>