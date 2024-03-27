export default {
  namespaced: true,
  state: () => ({
    // 기본값은 빈 문자열로 설정
    bannerText: '',
    bannerDesc: ''
  }),
  mutations: {
    setBannerText(state, text) {
      state.bannerText = text;
    },
    setBannerDesc(state, Desc) {
      state.bannerDesc = Desc;
    }
  },
  actions: {
    updateBannerText({ commit }, text) {
      commit('setBannerText', text);
    },
    updateBannerDesc({ commit }, Desc) {
      commit('setBannerDesc', Desc);
    }
  }
}