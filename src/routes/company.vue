<template>
  <section class="sub_page company">
    <Banner/>
    <Menu :menuItems="companyMenu" baseRoute="#/company/" />
    <div class="contents company_inner">
      <div class="content int reveal reveal_BTT" id="part1">
        <Headline
        :style="{ marginTop: 0 }"
        title="NTAS"
        description="기업과 인간에게 새로운 가치를 제공합니다."
        paragraph=" 앤타스는 IT기술과 아이디어의 결합으로 ‘기업과 인간에게 새로운 가치를 제공’하는 정보기술 기업입니다. <br>
            산업과 환경의 변화 가운데 소프트웨어 자동화 원천 기술을 기반으로 자동화를 넘어 초자동화 시대로의 온/오프라인을 아우르는 <br>
            차별화된 앤타스만의 솔루션을 통해 고객과 파트너와 함께 성장해 나아가겠습니다."  />
        <div class="photo"><img :src="require('assets/company_img.jpg')" alt=""></div>
      </div>

      <div class="content history reveal reveal_BTT" id="part2">
        <div class="title">history</div>
        <div>
          <ul>
            <li class="history_box"
              v-for="item in historyItems" 
              :key="item.year">
              <div class="year">{{ item.year }}</div>
              <ul class="list_box">
                  <li class="list" 
                    v-for="achievement in item.achievements" 
                    :key="achievement">
                    {{ achievement }}
                  </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div class="content structure reveal reveal_BTT" id="part3">
        <div class="title">structure</div>
        <div class="photo"><img src="assets/structure.svg" alt=""></div>
      </div>
      
      <div class="content about reveal reveal_BTT" id="part04">
        <div class="title">about</div>
        <div class="items_box about_box">
          <div class="item">
            <h1><span class="material-symbols-outlined"> place </span>Our Address</h1>
            <p>{{ address }}</p>
          </div>
          <div class="item">
            <h1><span class="material-symbols-outlined"> mail </span>Email Us</h1>
            <p>{{ email }}</p>
          </div>
          <div class="item">
            <h1><span class="material-symbols-outlined">smartphone</span>Call Us</h1>
            <p>{{ phone }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import Banner from '~/components/Banner'
import Menu from '~/components/Menu'
import Headline from '~/components/Headline'


export default {
  components: {
    Banner,
    Menu,
    Headline
  },
  computed: {
    ...mapState('about', [
      'email',
      'address',
      'phone',
    ])
  },
  data() {
    return {
      companyMenu: [
        { link: '#part1', text: 'Company'},
        { link: '#part2', text: 'History'},
        { link: '#part3', text: 'Structure'},
        { link: '#part04', text: 'About'}
      ],
      historyItems: [
        { 
          year: 2024, 
          achievements: [
            '프로젝트 성과 및 R&D 성과 목록 입니다.', 
            '프로젝트 성과 및 R&D 성과 목록 입니다.', 
            '프로젝트 성과 및 R&D 성과 목록 입니다.'
          ] 
        },
        { 
          year: 2023,
          achievements: [
            '프로젝트 성과 및 R&D 성과 목록 입니다.', 
            '프로젝트 성과 및 R&D 성과 목록 입니다.', 
            '프로젝트 성과 및 R&D 성과 목록 입니다.'
          ] 
        },
        { 
          year: 2022, 
          achievements: [
            '프로젝트 성과 및 R&D 성과 목록 입니다.', 
            '프로젝트 성과 및 R&D 성과 목록 입니다.', 
            '프로젝트 성과 및 R&D 성과 목록 입니다.'
          ] 
        },
        { 
          year: 2021, 
          achievements: [
            '프로젝트 성과 및 R&D 성과 목록 입니다.', 
            'NTAS 설립'
          ] 
        },
      ]
    }
  },
  mounted() {
    // 페이지 로드 시에 배너 텍스트 업데이트
    this.$store.dispatch('banner/updateBannerText', '회사소개');
    this.$store.dispatch('banner/updateBannerDesc', '앤타스는 고객님의 방문을 언제나 환영합니다.');
    this.$store.dispatch('banner/updateBannerImg', 'assets/sub_banner_01.png');
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
