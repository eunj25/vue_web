<template>
  <header>
    <div class="inner">
      <RouterLink 
        to="/"
        class="logo">
        <img :src="image" class="logo" alt="Logo">
      </RouterLink>
      <nav>
        <ul>
          <li v-for="nav in navigations"
            :key="nav.name"
            class="nav-item">
            <RouterLink 
              :to="nav.href"
              active-class="active"
              class="nav-link">
              {{ nav.name }}
            </RouterLink>
          </li>
          <!-- <li><a href="#"><span class="material-symbols-outlined">
            public
            </span></a></li> -->
        </ul>
      </nav>
    </div>
    <div class="trigger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      navigations: [
        {
          name: '회사소개',
          href: '/company'
        },
        {
          name: '사업분야',
          href: '/strategy',
        },
        {
          name: '인사제도',
          href: '/incruit'
        },
        {
          name: '문의하기',
          href: '/contact'
        }
      ]
    }
  },
  computed: {
    ...mapState('about', [
      'image'
    ])
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";

header {
  position: fixed;
  border-bottom: 1px solid #f9f9f980;
  z-index: 999999;
  width: 100%;
  backdrop-filter: blur(10px);
  .inner {
    @include between;
    padding: 17px 23px;
    .logo {
      width: 129px;
    }
    nav ul {
      display: flex;
      align-items: flex-start;
      gap: 40px;
      li a {
        color: $wh-color;
        &:hover {
          font-weight: bold;
          color: $premary-600;
        }
        &:active {
          color: $premary-600;
        }
      }
    }
  }
}
</style>