import { createApp } from 'vue'
import VueRecaptcha from 'vue3-recaptcha-v2'
import './style.css'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faFacebook, faLinkedin, faGithub, faYoutube, } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faFacebook, faLinkedin, faGithub, faYoutube, faEnvelope)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(VueRecaptcha, {
  siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
  alterDomain: false,
})
app.mount('#app')
