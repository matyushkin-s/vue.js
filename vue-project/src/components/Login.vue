<template>
  <div class="container mx-auto pt-9">
    <div class="flex justify-center lg:justify-between content-center">
      <form
        action=""
        class="m-4 border-1 rounded-form fill-white pt-9 pr-6 sm:pr-9 pl-6 sm:pl-12 pb-9 sm:pb-10"
      >
        <p class="welcome-text">Welcome !</p>
        <h3 class="text-xl sm:text-2xl font-medium pt-5">Sign in to</h3>
        <p>Lorem Ipsum is simply</p>
        <label class="block pt-10 pb-2" for="userName">User name</label>
        <input
          class="block border-1 rounded-md"
          type="text"
          id="userName"
          placeholder="Enter your user name"
        />
        <label class="block pt-10 pb-2" for="userPass">Password</label>
        <input
          class="block border-1 rounded-md"
          type="password"
          id="userPass"
          placeholder="Enter your Password"
        />
        <div class="flex justify-between pb-10 pt-6">
          <div class="text-sm font-normal flex justify-between items-center">
            <input type="checkbox" name="rememberUser" id="rememberUser" />
            <span class="pl-1">Remember me</span>
          </div>
          <a class="text-sm font-normal" href="#">Forgot password?</a>
        </div>
        <button class="py-4 bg-black text-white w-full rounded-md" type="submit">Login</button>
        <p class="pt-8 text-center">Don’t have an Account ? <a href="#">Register</a></p>
      </form>
      <img class="hidden lg:block" src="./../assets/img/people.svg" alt="talking people" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
form {
  border-color: #878787;
  box-shadow: 0px 4px 64px 0px rgba(0, 0, 0, 0.05);

  @media screen and (min-width: 640px) {
    min-width: 505px;
  }

  .welcome-text {
    font-size: 19px;
    line-height: 28.5px;

    @media screen and (min-width: 640px) {
      font-size: 25px;
      line-height: 37.5px;
    }
  }

  input:not([type="checkbox"]) {
    height: 59px;
    width: 100%;
    border-color: #282828;
    padding: 0 18px;

    &::placeholder {
      font-size: 14px;
      line-height: 21px;
    }
  }

  a {
    color: rgba(77, 77, 77, 1);
  }
}
</style>
