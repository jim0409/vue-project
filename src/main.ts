import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// const i18nConfig = {
//   locale: 'en',
//   fallbackLocale: 'en',
//   messages: {
//     en: require('@/i18n/en.json'),
//     ch: require('@/i18n/cn.json'),
//     es: require('@/i18n/es.json'),
//     ir: require('@/i18n/ir.json'),
//     br: require('@/i18n/br.json')
//   }
// }

const app = createApp(App)
// app.use(store)
app.use(router)
// if (process.env.VUE_APP_GTM_ENABLED === 'true') {
//   const gtmConfig = {
//     id: process.env.VUE_APP_GTM_KEY,
//     debug: false,
//     vueRouter: router,
//   }
//   app.use(createGtm(gtmConfig))
// }
// app.use(createI18n(i18nConfig))
// app.use(VuesticPlugin, vuesticGlobalConfig)
app.mount('#app')

