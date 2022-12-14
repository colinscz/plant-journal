import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import {
  IButton,
  ICheckbox,
  ICheckboxGroup,
  IForm,
  IFormGroup,
  IFormLabel,
  IInput,
  INav,
  INavItem,
  INavbar,
  INavbarBrand,
  INavbarCollapsible,
  INumberInput,
  IRadio,
  IRadioGroup,
  ISelect,
  ITable,
  ITextarea,
  IToggle,
  Inkline,
} from '@inkline/inkline'
import App from './App.vue'
import router from './router'

import '@inkline/inkline/inkline.scss'

import './assets/main.css'

const i18n = createI18n({
  locale: 'en',
  // something vue-i18n options here ...
})

const app = createApp(App)

app.use(i18n)

app.use(createPinia())
app.use(router)

app.use(Inkline, {
  components: {
    IForm,
    IFormGroup,
    IFormLabel,
    ISelect,
    IInput,
    INumberInput,
    ICheckbox,
    ICheckboxGroup,
    IRadioGroup,
    IRadio,
    ITextarea,
    IToggle,
    IButton,
    INavbar,
    INav,
    INavbarBrand,
    INavItem,
    INavbarCollapsible,
    ITable,
  },
  icons: {},
  colorMode: 'system',
  locale: 'de',
  validateOn: ['input', 'blur'],
  color: '',
  size: '',
  routerComponent: 'router-link',
  componentOptions: {},
})

app.mount('#app')
