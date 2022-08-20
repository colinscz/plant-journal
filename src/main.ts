import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import {
  Inkline,
  components,
  IForm,
  IButton,
  ICheckbox,
  IFormGroup,
  IFormLabel,
  INumberInput,
  IRadio,
  ISelect,
  IToggle,
  IInput,
  ICheckboxGroup,
  IRadioGroup,
  ITextarea,
} from "@inkline/inkline";
import "@inkline/inkline/inkline.scss";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

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
  },
  icons: {},
  colorMode: "system",
  locale: "en",
  validateOn: ["input", "blur"],
  color: "",
  size: "",
  routerComponent: "router-link",
  componentOptions: {},
});

app.mount("#app");
