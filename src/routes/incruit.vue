<template>
  <section class="sub_page incruit">
    <Banner/>
    <Menu :menuItems="incruitMenu"/>

    <div class="contents incruit_inner">
      <div class="content inc" id="part1">
        <div class="title">인사제도</div>
        <div class="inc_box">
          <div class="item"
            v-for="item in incItems"
            :key="item.data_num">
            <div class="photo">
              <img :src="item.image" alt="">
            </div>
            <div class="desc reveal reveal_LTR">
              <h1 :data-text="item.data_num"> {{ item.title }} </h1>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="content wel reveal reveal_BTT" id="part2">
        <div class="title">복리후생</div>
        <div class="wel_box">
          <div class="item"
            v-for="item in welItems"
            :key="item.num">
            <h1>{{ item.title }}</h1>
            <p v-html="item.desc"></p>
            <div class="photo"><img :src="item.icon" alt=""></div>
          </div>
        </div>
      </div>

      <div class="content empl reveal reveal_BTT" id="part3">
        <div class="title">채용공고</div>
        <div class="empl_box">
          <div class="list_box"
            v-for="item in emplItems"
            :key="item.title">
            <div class="info">
              <div class="badge">{{ item.type }}</div>
              <a href="#none">{{ item.title }}</a>
              <span>{{ item.date }}</span>
            </div>
            <div class="btn_box">
              <button 
                class="btnPremary"
                v-if="item.status === '접수중'">
                {{ item.status }}
              </button>
              <button v-else class="btnGy" >
                {{ item.status }}
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>


<script>
import Banner from '~/components/Banner'
import Menu from '~/components/Menu'

export default {
  components: {
    Banner,
    Menu
  },
  data() {
    return {
      incruitMenu: [
        { link: '#part1', text: '인사제도'},
        { link: '#part2', text: '복리후생'},
        { link: '#part3', text: '채용공고'},
      ],
      incItems: [
        {
          data_num: '01',
          title: '승진제도',
          desc: '앤타스는 매년 인사평가 및 인사위원회의 심의를 통해 직급별 일정 자격 취득 자를 승진자로 선정하여 적극적으로 인재 발굴에 힘쓰고 있습니다.',
          image: require('assets/inc_img_01.png')
        },
        {
          data_num: '02',
          title: '학력 및 경력 인정',
          desc: '(전문)학사 이상의 학위 취득자(수료자)에 대해 당사 자체의 기준에 따라 연차(경력)를 인정 합니다. 6개월 이상의 경력은 동일 또는 유사 분야 여부를 판단해 합리적 경력 산정을 실시합니다.',
          image: require('assets/inc_img_02.png')
        },
        {
          data_num: '03',
          title: '평가체계',
          desc: '앤타스는 성과 평가 제도와 직무 및 직위 특성에 따른 역량 평가 제도를 운영 합니다. 성과 및 역량 평가 결과는 임직원 개개인의 연봉, 승진 등의 심사 자료로 사용 합니다.',
          image: require('assets/inc_img_03.png')
        },
        {
          data_num: '04',
          title: '보상체계',
          desc: '앤타스는 매월 10에 지급 하는 누적 급의 기본 연봉과 매년 회사 및 개인 성과에 따라 지급하는 비누적급의 인센티브로 구성된 성과급 형 임금제도를 운영합니다.',
          image: require('assets/inc_img_04.png')
        }
      ],
      welItems: [
        {
          num: 1,
          title: '전직원 복지카드 지급',
          desc: '복지제도 수혜의 형평성 제고 및 개인의 자율적 선택을 존중하기 위한 선택적 복지 제도 운영근속년수 및 직급에 따른 차등 지급',
          icon: require('assets/wel_icon_01.png')
        },
        {
          num: 2,
          title: '장기근속자 우대',
          desc: ' 장기 근속자에 대한 금전적 보상 및 휴가<br>5년: 200만원+3일 특별휴가<br> 10년: 300만원+7일 특별휴가 <br> 15년:400만원+7일 특별휴가',
          icon: require('assets/wel_icon_02.png')
        },
        {
          num: 3,
          title: '휴계 공간 마련',
          desc: '업무 효율을 위한 직원 휴게공간 마련 카페테리아 및 남녀 휴게실 운영',
          icon: require('assets/wel_icon_03.png')
        },
        {
          num: 4,
          title: '상품권 지급',
          desc: '명절 및 생일 상품권 지급',
          icon: require('assets/wel_icon_04.png')
        },
        {
          num: 5,
          title: '교육 훈련',
          desc: '직원의 역량 개발을 위한 온/오프라인 교육훈련 및 도서구입 지원',
          icon: require('assets/wel_icon_05.png')
        },
        {
          num: 6,
          title: '건강관리지원',
          desc: '임직원 종합 건강검진 실시',
          icon: require('assets/wel_icon_06.png')
        },
        {
          num: 7,
          title: '경조사 지원',
          desc: '경조휴가, 경조비, 경조화환 지원',
          icon: require('assets/wel_icon_07.png')
        },
        {
          num: 8,
          title: '동호회',
          desc: '임직원의 즐거운 여가생활을 위한 동호회 활동비 지원',
          icon: require('assets/wel_icon_08.png')
        }
      ],
      emplItems: [
        { 
          type: '공채', 
          title: 'RPA 개발 신입 사원 모집',
          date: '2024.01.01 ~ 2024.01.31',
          status: '접수중'
        },
        { 
          type: '공채', 
          title: 'RPA 개발 신입 사원 모집',
          date: '2024.01.01 ~ 2024.01.31',
          status: '모집'
        },
        { 
          type: '공채', 
          title: 'RPA 개발 신입 사원 모집',
          date: '2024.01.01 ~ 2024.01.31',
          status: '모집'
        }
      ]
    }
  },
  mounted() {
    // 페이지 로드 시에 배너 텍스트 업데이트
    this.$store.dispatch('banner/updateBannerText', '인사제도');
    this.$store.dispatch('banner/updateBannerDesc', '경력과 성과에 따른 합리적인 평가, 앤타스의 인사제도를 안내합니다.');
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";
.incruit_inner {
  padding: $padding-sub 0 !important;
  .inc .title {
    margin: 0 $padding-sub;
    margin-bottom: $padding-title;
  }
  .inc_box .item {
    display: flex; 
    align-items: flex-end;
    .photo {
      flex: 1;
    }
    .desc {
      padding: 8vw 3vw;
      flex: 1;
      h1 {
        font-size: $font-medium;
        font-weight: bold;
        margin-bottom: 1vw;
        position: relative;
        &::before {
          position: absolute;
          content: attr(data-text);
          top: -180px;
          left: -10px;
          font-size: 12.8rem;
          color: $premary-100;
          font-weight: normal;
        }
      }
      p {
        color: $grey-800;
        width: 55%;
      }
    }
  }
  .wel {
    padding: 0 $padding-sub;
    .wel_box {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      .item{
        border: 1px solid $grey-400;
        padding: 1.5vw 1vw 0 1.5vw;
        width: calc(100%/3);
        height: 287px;
        position: relative;
        background-color: #F9F9F9;
        transition: 0.25s;
        &:nth-child(odd) {
          background-color: #fff;
        }
        &:hover {
          transform: scale(1.03);
          z-index: 2;
          box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
          font-weight: bold;
          padding-bottom: 5px;
        }
        p {
          width: 100%;
        }
        .photo {
          width: 170px;
          height: 172px;
          position: absolute;
          right: 5%;
          bottom: 0;
        }
      }
    }
  }
  .empl {
    margin-bottom: 0 !important;
    padding: 0 $padding-sub;
    .empl_box .list_box {
      @include between;
      padding: $padding-list;
      border-bottom: 1px solid $grey-400;
      a {
        font-size: $font-Regular;
        font-weight: bold;
        margin: 0.5vw 0;
        display: block;
        &:hover {
          text-decoration: underline;
        }
      }
      span {
        color: $grey-800;
      }
    }
  }
}
</style>