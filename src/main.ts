import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

import { createI18n } from 'vue-i18n'

const app = createApp(App)

const i18n = createI18n({
  locale: 'en',
  allowComposition: true, // you need to specify that!
  messages: {
    en: {
      hello: 'Hello {name}!'
    },
    ja: {
      hello: 'こんにちは {name}!'
    }
  }
})

app.use(i18n)

app.mount('#app')
