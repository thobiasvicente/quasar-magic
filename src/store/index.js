import Vue from 'vue'
import Vuex from 'vuex'
import VueParticles from 'vue-particles'
import { ParallaxContainer, ParallaxElement } from 'vue-mouse-parallax'

// import example from './module-example'

Vue.use(Vuex)
Vue.use(VueParticles)
Vue.component('parallax-container', ParallaxContainer)
Vue.component('parallax-element', ParallaxElement)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
