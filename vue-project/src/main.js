import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store/index";

import "./assets/main.scss";

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");

// 6843038e8a924539af7a4ec70c03e969 api-key for NewsApi
