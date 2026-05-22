import { createHead } from "@vueuse/head";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/components/splash/loading-splash.css";
import "./style.css";

const app = createApp(App);

app.use(createHead());
app.use(router);
app.mount("#app");
