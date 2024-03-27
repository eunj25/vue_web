<template>
  <div 
    class="item"
    v-for="(service, index) in services"
    :key="index">
    <div class="heading">
      <span>{{ service.platform }}</span>
      <h1>{{ service.title }}</h1>
    </div>
    <div class="desc">
      <p>{{ service.description }}</p>
      <button
        @click="downloadFile">
        자세히보기
      </button>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    services: {
      type: Array,
      required: true
    }
  },
  // props: {
  //   platform: String,
  //   title: String,
  //   description: String,
  //   filePath: String
  // },
  methods: {
    downloadFile() {
      const link = document.createElement('a');
      link.href = this.filePath;
      link.setAttribute('download', '');
      link.click();
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";

.item {
  height: 420px;
  .heading {
    width: 100%;
    span {
      color: $premary-600;
      font-size: 1.2rem;
      font-weight: bold;
    }
    h1 {
      font-size: $font-Regular;
      font-weight: bold;
      line-height: 1.5em;
    }
  }
  .desc {
    p {
    color: $grey-800;
    }
    button {
      margin-top: 1.5vw;
      font-size: 1.2rem;
    }
  }
}

</style>