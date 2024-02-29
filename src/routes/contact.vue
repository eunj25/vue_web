<template>
  <section class="sub_page contact">
    <Banner/>
    <!-- sub_banner -->
      <div class="contact_inner">
        <div class="reveal">
          <h1>기업에 맞는</h1>
          <h1 style="font-weight: bold;">맞춤 컨설팅</h1>
        </div>
        <div class="contact_box reveal reveal_BTT">
          <form action="" method="" role="" class="">
            <div class="name_box">
              <p class="title"><span>01</span>기본 정보를 적어주세요.</p>
              <input type="text" id="name"  placeholder="이름">
              <input type="email" id="email" placeholder="이메일">
            </div>
            <div class="inquiry_box">
              <p class="title"><span>02</span>문의 사항을 적어주세요.</p>
              <input type="text" id="subject" placeholder="문의 제목">
              <textarea name="message" id="message" cols="30" rows="10" placeholder="문의 내용"></textarea>
            </div>
            <button type="submit" class="btnPremary">문의하기</button>
          </form>
        </div>
      </div>
  </section>
</template>

<script>
import Banner from '~/components/Banner'

export default {
  components: {
    Banner
  },
  mounted() {
    // 페이지 로드 시에 배너 텍스트 업데이트
    this.$store.dispatch('banner/updateBannerText', '문의하기');
    this.$store.dispatch('banner/updateBannerDesc', '앤타스에 궁금한 점이 있으면 문의주세요.');
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";
.contact_inner {
  margin: auto;
  width: 730px;
  padding: 100px 0;
  h1 {
    font-size: $font-large;
    line-height: 1.5em;
  }
  .contact_box {
    padding: 80px 0;
    .title {
      padding-bottom: 1vw;
      font-size: 2rem;
      span {
        color: $premary-600;
        padding-right: 5px;
        font-weight: bold;
      }
    }
    .inquiry_box {
      margin-top: 60px;
    }
    .btnPremary {
      font-size: $font-Regular;
      width: 100%;
      border-radius: 10px;
      border: 1px solid $premary-600;
    }
  }
}
</style>