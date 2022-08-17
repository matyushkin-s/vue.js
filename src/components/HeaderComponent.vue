<template>
  <header class="w-full shadow-md">
    <nav class="container mx-auto h-full px-6 flex justify-between items-center">
      <RouterLink to="/">Your Logo</RouterLink>
      <RouterLink to="/news">News</RouterLink>
      <RouterLink to="/user">User</RouterLink>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import "./../assets/variables.scss";

header {
  height: $header-height;
  color: black;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
}
</style>
