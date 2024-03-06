<template>
  <footer>
    <div class="footer_inner">
      <div class="logo_box">
        <RouterLink 
          to="/"
          class="logo">
          <img :src="image" class="logo" alt="Logo">
        </RouterLink>
        <p>© Copyright NTAS Co., Ltd.. All Rights Reserved</p>
      </div>
      <div class="contact">
        <p><span class="material-symbols-outlined"> smartphone</span>{{ phone }}</p>
        <p><span class="material-symbols-outlined"> mail </span>{{ email }}</p>
        <p><span class="material-symbols-outlined"> place </span>{{ address }}</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('about', [
      'email',
      'address',
      'phone',
      'image'
    ])
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";

footer {
  background-color: #111;
  padding: 40px 80px;
  color: $wh-color;
  min-height: 180px;
  .footer_inner {
    display: flex;
    justify-content: space-between;
    align-items: self-start;
    .logo_box {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: calc(180px - 80px);
      .logo {
        width: 130px;
      }
    }
    .contact {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: calc(180px - 80px);
      p {
        display: flex;
        align-items: center;
        gap: 8px;
        span {
          font-size: $font-small;
        }
      }
    }
  }
}
</style>