<template>
  <!-- intro -->
  <section class="full intro">
    <div class="intro_title">
      <h1>초자동화(HYPER AUTOMATION) 기술 리더</h1>
      <span>& Technologies Automation Services</span>
    </div>
    <div class="scroll_icon">
      <span>scroll</span>
      <img src="assets/mouse.png" alt="">
    </div>
    <div class="bg">
      <img src="assets/company_img.jpg" alt="">
    </div>
  </section>

  <!-- mouse -->
  <div class="mouse__wrap">
    <div class="mouse__cursor"></div>
    <div class="mouse__cursor2"></div>
  </div>

  <div class="full_box">
    <div class="scroll_box">
      <div class="home_title">
        <span>BIZ STRATEGY</span>
        <h1>NTAS는 지속적인 수익 확보가 가능한 핵심 사업을 발굴하고 <br>
          독자적인 기술을 접목한 다양한 서비스 상용화를 통해 기술적인 우위 실현합니다.</h1>
        <!-- <nav id="parallax__nav">
          <ul>
            <li><a href="#part01" class="active">01</a></li>
            <li><a href="#part02">02</a></li>
            <li><a href="#part03">03</a></li>
            <li><a href="#part04">04</a></li>
          </ul>
        </nav> -->
      </div>
      <section id="part01" class="full banner">
        <div class="home_desc">
          <div class="icon">
            <img src="assets/icon01.png" alt="">
          </div>
          <div class="desc">
            우리가 제공하는 기술을 통해 고객이 이루고자 하는<br>
            본연의 가치를 실현할 수 있도록 지원
          </div>
        </div>
        <!-- <div class="parallax_img"></div> -->
      </section>
  
      <section id="part02" class="full banner">
        <div class="home_desc">
          <div class="icon">
            <img src="assets/icon02.png" alt="">
          </div>
          <div class="desc">
            디지털 환경의 변화에 따른 비즈니스 프로세스 혁신 가속화를 위한 <br>
            ‘4차 산업 혁신 전략 기술 제품 및 서비스’ 제공
          </div>
        </div>
        <!-- <div class="parallax_img"></div> -->
      </section>
  
      <section  id="part03" class="full banner">
        <div class="home_desc">
          <div class="icon">
            <img src="assets/icon03.png" alt="">
          </div>
          <div class="desc">
            No.1 초자동화(Hyper Automation) 전문 기술 서비스 기업
          </div>
        </div>
        <!-- <div class="parallax_img"></div> -->
      </section>
  
      <section id="part04" class="full banner">
        <div class="home_desc">
          <div class="icon">
            <img src="assets/icon04.png" alt="">
          </div>
          <div class="desc">
            초자동화 기술을 지원하는 자체 서비스 플랫폼 보유 사업자
          </div>
        </div>
        <!-- <div class="parallax_img"></div> -->
      </section>
    </div>
  </div>

  <section class="shortbanner">
    <div class="shortbanner_inner">
      <div class="short_box">
        <div class="short_title">
          <h2>사업분야</h2>
          <p>NTAS는 자동화 관련 기술 연구에 끊임없는 노력을 기울이고 있습니다.</p>
        </div>
        <div class="btn_box">
          <button  onclick="location.href='/company.html';">자세히 보기</button>
        </div>
      </div>
      <div class="short_box">
        <div class="short_title">
          <h2>인사제도</h2>
          <p>경력과 성과에 따른 합리적인 평가, 앤타스의 인사제도를 안내합니다.</p>
        </div>
        <div class="btn_box">
          <button class="btnLine"  onclick="location.href='/incruit.html';">자세히 보기</button>
        </div>
      </div>
    </div>
  </section>
  <section class="shortbanner contact">
    <div class="short_box">
      <div class="short_title">
        <h1>앤타스는 고객님의 방문을<br>언제나 환영합니다.</h1>
      </div>
      <div class="btn_box">
        <button class="btnWh" onclick="location.href='/contact.html';">문의하기</button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "~/scss/main";
section.full {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}
section.intro .bg {
  width: 100%;
  height: 100vh;
  position: relative;
  
}
section.intro .bg img {
  position: absolute;
  object-fit: cover;
  bottom: 0;
  animation: scale 100s infinite linear;
  width: auto;
}
@keyframes scale {
  0% {
    transform:  scale(1);
  }
  50% {
    transform:  scale(1.3);
  }
  100% {
    transform:  scale(1);
  }
}
section.intro .intro_title {
  color: #fff;
  font-size: $font-large;
  position: absolute;
  top: 35%;
  left: 10%;
  font-weight: bold;
  text-align: right;
  z-index: 1;
  text-shadow: 5px 5px 20px #5f5f5f77;
}
section.intro .intro_title span {
  font-size: $font-small;
  font-weight: normal;
  padding-top: 1.5vw;
  display: inline-block;
}
section.intro .scroll_icon {
  position: absolute;
  bottom: 3%;
  right: 50%;
  animation: scroll 1s infinite linear;
  color: #fff;
  z-index: 1;
}
@keyframes scroll {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
    transform: translateY(-5%);
  }
  100% {
    opacity: 0.5;
  }

}

section.intro .scroll_icon img {
  margin: auto;
  padding-top: 10px;
}

/* full_box */
.full_box {
  overflow: hidden;
  position: relative;
  /* transform: rotate(0); */
}
.full_box .home_title {
  position: absolute;
  top: 20%;
  left: 3%;
  z-index: 999;
  color: $wh-color;
}
.home_title h1 {
  font-size: 2.8rem;
  line-height: 1.5em;
}
.home_title #parallax__nav li {
  padding-top: 1.5vw;
}
.home_title #parallax__nav li a {
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px; 
  height: 30px;
  text-align: center;
}
.home_title #parallax__nav li a.active {
  background: #fff;
  color: #000;
  border-radius: 50%;
}
/* scroll_box */
.scroll_box {
  position: relative;
  transform: rotate(0);
  width: 400%;
  display: flex;
  flex-wrap: nowrap;
}
.scroll_box > section {
  width: 100%;
  padding: 230px;
  color: $wh-color;
  transform: rotate(0);
  background-size: cover;
  background-position: center;
  transition: 0.25s;
}
.scroll_box section:nth-child(2) {background-image: url('assets/main_img_01.png');}
.scroll_box section:nth-child(3) {background-image: url('assets/main_img_02.png');}
.scroll_box section:nth-child(4) {background-image: url('assets/main_img_03.png');}
.scroll_box section:nth-child(5) {background-image: url('assets/main_img_04.png');}

.scroll_box .home_desc {
  position: absolute;
  bottom: 10%;
  left: 12%;
  border-bottom: 1px solid #f9f9f980;
  padding: 48px 30px;
  width: 75%;
  font-size: $font-medium;
  line-height: 1.5em;
  z-index: 1;
}
.scroll_box .home_desc .desc {
  font-weight: 300;
}
.scroll_box .home_desc .icon {
  width: 60px;
  margin-bottom: 1vw;
}

/* shortbanner */
section.shortbanner {
  width: 100%;
}
section.shortbanner .shortbanner_inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
section.shortbanner .short_box {
  flex: 1;
  padding: 10vw 9vw;
  background-size: 100%;
  background-position: center;
  background-attachment: 0.25s;
  transition: background-size .3s ease;
}
section.shortbanner .short_box:hover {
  background-size: 105%;
}
section.shortbanner .shortbanner_inner .short_box:nth-child(1) {background-image: url(assets/banner_01.png);}
section.shortbanner .shortbanner_inner .short_box:nth-child(2) {background-image: url(assets/banner_02.png);}

section.shortbanner .short_title {
  padding-bottom: 10vw;
}
section.shortbanner .short_title h2 {
  font-size: $font-medium;
  margin-bottom: 16px;
  font-weight: 700;
}
section.shortbanner .short_title p {
  font-size: $font-small;
}
section.shortbanner.contact {
  background-image: url(assets/banner_03.png);
  background-size: cover;
}
section.contact .short_title h1 {
  font-size: $font-large;
  color: $wh-color;
  font-weight: 700;
  line-height: 160%;
}

</style>
