import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { pinia, PrimeVue } from "./plugins";
import "primevue/resources/themes/aura-light-green/theme.css";

const app = createApp(App);

app.use(pinia);
app.use(PrimeVue);
app.mount("#app");
