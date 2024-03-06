<template>
  <!-- 동일하게 출력됨 -->
  <Header />  
  <!--  페이지가 바뀌는 건 해당 태그에서 출력이 됨  -->
  <RouterView /> 
  <Gototop />
  <Footer />
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Gototop from '~/components/Gototop.vue'

export default {
  components: {
    Header,
    Footer,
    Gototop
  }
}
</script>

<style lang="scss">
@import "~/scss/main";
</style>