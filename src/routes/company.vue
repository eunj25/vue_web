<template>
  <section class="sub_page company">
    <Banner/>
    <nav class="menu">
      <ul>
        <!-- <li v-for="nav in menu"
          :key="nav.name"
          class="nav-item">
          <RouterLink 
            :to="nav.href"
            active-class="active"
            class="nav-link">
            {{ nav.name }}
          </RouterLink>
        </li> -->
        <li><router-link to="#part1">Company</router-link></li>
        <li><router-link to="#part2">History</router-link></li>
        <li><router-link to="#part3">Structure</router-link></li>
        <li><router-link to="#part4">About</router-link></li>
      </ul>
    </nav>

    <div class="contents company_inner">
      <div class="content int reveal reveal_BTT" id="part1">
        <div class="headline">
          <h1><b>NTAS</b><br>기업과 인간에게 새로운 가치를 제공합니다.</h1>
          <p>
            앤타스는 IT기술과 아이디어의 결합으로 ‘기업과 인간에게 새로운 가치를 제공’하는 정보기술 기업입니다. <br>
            산업과 환경의 변화 가운데 소프트웨어 자동화 원천 기술을 기반으로 자동화를 넘어 초자동화 시대로의 온/오프라인을 아우르는 <br>
            차별화된 앤타스만의 솔루션을 통해 고객과 파트너와 함께 성장해 나아가겠습니다.
          </p>
        </div>
        <div class="photo"><img src="assets/company_img.jpg" alt=""></div>
      </div>
      <div class="content history reveal reveal_BTT" id="part2">
        <div class="title">history</div>
        <div>
          <ul >
            <li class="history_box">
              <div class="year">2024</div>
              <ul class="list_box">
                <li class="list">프로젝트 성과 및 R&D 성과 목록 입니다.</li>
                <li class="list">프로젝트 성과 및 R&D 성과 목록 입니다.</li>
              </ul>
            </li>
            <li class="history_box">
              <div class="year">2023</div>
              <ul class="list_box">
                <li class="list">프로젝트 성과 및 R&D 성과 목록 입니다.</li>
                <li class="list">프로젝트 성과 및 R&D 성과 목록 입니다.</li>
                <li class="list">프로젝트 성과 및 R&D 성과 목록 입니다.</li>
                <li class="list">프로젝트 성과 및 R&D 성과 목록 입니다.</li>
                <li class="list">프로젝트 성과 및 R&D 성과 목록 입니다.</li>
              </ul>
            </li>
            <li class="history_box">
              <div class="year">2022</div>
              <ul class="list_box">
                <li class="list">프로젝트 성과 및 R&D 성과 목록 입니다.</li>
                <li class="list">프로젝트 성과 및 R&D 성과 목록 입니다.</li>
                <li class="list">프로젝트 성과 및 R&D 성과 목록 입니다.</li>
                <li class="list">프로젝트 성과 및 R&D 성과 목록 입니다.</li>
                <li class="list">프로젝트 성과 및 R&D 성과 목록 입니다.</li>
              </ul>
            </li>
            <li class="history_box">
              <div class="year">2021</div>
              <ul class="list_box">
                <li class="list">프로젝트 성과 및 R&D 성과 목록 입니다.</li>
                <li class="list">NTAS 설립</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="content structure reveal reveal_BTT" id="part3">
        <div class="title">structure</div>
        <div class="photo"><img src="assets/structure.svg" alt=""></div>
      </div>
      <div class="content about reveal reveal_BTT" id="part4">
        <div class="title">about</div>
        <div class="items_box about_box">
          <div class="item">
            <h1><span class="material-symbols-outlined"> place </span>Our Address</h1>
            <p>서울특별시 중구 세종대로19길 16, 본관 지상 1층(정동, 성공회빌딩)</p>
          </div>
          <div class="item">
            <h1><span class="material-symbols-outlined"> mail </span>Email Us</h1>
            <p>ntas@ntas.co.kr</p>
          </div>
          <div class="item">
            <h1><span class="material-symbols-outlined">smartphone</span>Call Us</h1>
            <p>+82 70-4797-0042</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Banner from '~/components/Banner.vue'

export default {
  components: {
    Banner
  },
  mounted() {
    // 페이지 로드 시에 배너 텍스트 업데이트
    this.$store.dispatch('banner/updateBannerText', '회사소개');
    this.$store.dispatch('banner/updateBannerDesc', '앤타스는 고객님의 방문을 언제나 환영합니다.');

  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";
.company_inner {
  .int {
    .photo {
    height: 20.20vw;
    overflow: hidden;
    position: relative;
    border-radius: 10px;
      img {
        width: 100%;
        object-fit: cover; 
        position: absolute;
        bottom: -25%;
        left: 0;
      }
    }
  }
  .history .history_box {
    border-bottom: 1px solid $grey-400;
    padding: $padding-list;
    display: flex;
    align-items: center;
    gap: 5vw;
    .year {
      flex: 1;
      font-size: $font-large;
      color: $premary-600;
      font-weight: bold;
    }
    .list_box {
      flex: 6;
    }
  }
  .structure .photo {
    width: 53rem;
    margin: auto;
  }
  .about {
    .item {
      height: 210px;
      &:first-child {
        flex: 2 !important;
      }
      &:last-child {
        border-right: none;
      }
      h1 {
        display: flex;
        align-items: center;
        font-size: $font-Regular;
        font-weight: bold;
        span {
          font-size: 2.6rem;
          padding-right: 0.3vw;
          &.material-symbols-outlined {
            font-variation-settings:
            'FILL' 1,
            'wght' 400,
            'GRAD' 0,
            'opsz' 24
          }
        }
        p {
          color: $grey-800;
        }
      }
    }
  }
}

</style>
