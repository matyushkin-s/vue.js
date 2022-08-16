import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      newsList: [],
      userData: { login: "admin", pass: "12345" },
      isUserLoginned: false,
    };
  },
  mutations: {
    addNewsToNewsList(state, newsItem) {
      state.newsList.push(newsItem);
    },

    loginUser(state) {
      state.isUserLoginned = true;
    },
  },
  actions: {
    async fetchNews({ commit }) {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=Ukraine&from=2022-08-14&sortBy=popularity&apiKey=6843038e8a924539af7a4ec70c03e969"
      );

      const responseJson = await response.json();

      commit("addNewsToNewsList", responseJson);
    },

    loginUser({ commit }) {
      commit("loginUser");
    },

    saveUserToken() {
      localStorage.setItem("admin", "true");
    },

    checkUserToken({ commit }) {
      const isLoginned = localStorage.getItem("admin");

      if (isLoginned) {
        commit("loginUser");
      }
    },
  },
});
