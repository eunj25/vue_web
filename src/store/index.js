import { createStore } from "vuex";
import about from './about'
import banner from './banner'

export default createStore({
  modules: {
    about,
    banner
  }
})