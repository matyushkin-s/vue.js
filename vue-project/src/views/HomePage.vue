<template>
  <div class="home-page flex flex-col justify-center items-center">
    <h1 class="py-4 text-center font-medium text-4xl uppercase">
      Hey there!<br />
      Welcome to my vue test project
    </h1>
    <img class="h-40 w-auto" src="./../assets/img/logo.svg" alt="vue logo" />
  </div>
</template>

<style lang="scss" scoped>
@import "./../assets/variables.scss";
.home-page {
  height: calc(100vh - $header-height);
}
</style>
