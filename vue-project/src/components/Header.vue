<script setup lang="ts"></script>

<template>
  <header>
    <nav class="h-full px-12 flex justify-between items-center shadow-md">
      <RouterLink to="/">Home / Logo</RouterLink>
      <RouterLink to="/news">News</RouterLink>
      <RouterLink to="/user">User</RouterLink>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import "./../assets/variables.scss";

header {
  width: 100%;
  height: $header-height;
  color: black;
}
</style>
