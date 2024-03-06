export default {
  namespaced: true,
  state: () => ({
    // 기본값은 빈 문자열로 설정
    bannerText: '',
    bannerDesc: '' ,
    bannerImg: ''
  }),
  mutations: {
    setBannerText(state, text) {
      state.bannerText = text;
    },
    setBannerDesc(state, Desc) {
      state.bannerDesc = Desc;
    },
    setBannerImg(state, img) {
      state.bannerImg = img;
    }
  },
  actions: {
    updateBannerText({ commit }, text) {
      commit('setBannerText', text);
    },
    updateBannerDesc({ commit }, Desc) {
      commit('setBannerDesc', Desc);
    },
    updateBannerImg({ commit }, img) {
      commit('setBannerImg', img);
    }
  }
}