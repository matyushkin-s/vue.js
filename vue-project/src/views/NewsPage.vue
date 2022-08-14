<!-- <script lang="ts">
export default {
  computed: {
    news() {
      return this.$store.state.newsList;
    },
  },
  created() {
    this.implementNews();
  },
  methods: {
    implementNews() {
      if (!this.$store.state.newsList.length) {
        this.$store.dispatch("fetchNews");
      }
    },
  },
};
</script> -->

<template>
  <p>this is News page</p>
  <!-- <div class="flex flex-wrap">
    <div class="news-card p-3 m-3" v-for="item of news[0].articles" :key="item.title">
      <h2 class="font-bold">{{ item.title }}</h2>
      <p>{{ item.description }}</p>
    </div>
  </div> -->
</template>

<style lang="scss" scoped>
.news-card {
  height: 400px;
  width: 200px;
}
</style>
