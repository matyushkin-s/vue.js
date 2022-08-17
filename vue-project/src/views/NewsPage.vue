<script>
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
</script>

<template>
  <h2 class="py-8 text-center font-medium text-3xl sm:text-4xl uppercase">this is News page</h2>
  <div class="container mx-auto">
    <div v-if="news[0]" class="flex flex-wrap justify-center">
      <a
        v-for="item of news[0].articles"
        :key="item.title"
        :href="item.url"
        class="news-card p-3 m-3 border-2 border-neutral-400 rounded-large 2xl:w-1/6 lg:w-1/4 md:w-1/3 w-full bg-gray-50 hover:drop-shadow-xl"
        target="_blank"
      >
        <div class="flex justify-center">
          <img :src="item.urlToImage" alt="news image" class="h-32" />
        </div>
        <h3 class="font-bold py-3">{{ item.title }}</h3>
        <p class="text-sm overflow-hidden">{{ item.description }}</p>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.news-card {
  min-height: 250px;
}
</style>
