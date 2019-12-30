import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'
import firebase from 'firebase'

Vue.use(VueRouter)

// Required for side-effects
require('firebase/firestore')

var firebaseConfig = {
  apiKey: 'AIzaSyC1kkPaDuws2I7Jy0g7NtXF87Ozaf6Gy7o',
  authDomain: 'chat-vuejs-e8a8a.firebaseapp.com',
  databaseURL: 'https://chat-vuejs-e8a8a.firebaseio.com',
  projectId: 'chat-vuejs-e8a8a',
  storageBucket: 'chat-vuejs-e8a8a.appspot.com',
  messagingSenderId: '148338809674',
  appId: '1:148338809674:web:e0b82c6979dcba0572ffb3',
  measurementId: 'G-LE0DG512Q9'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

var db = firebase.firestore()

window.db = db

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  return Router
}
