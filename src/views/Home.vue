<template>
  <home-layout>
    <div class="mt-5 border mx-5 p-10 text-center">
      <h1
        class="rounded-lg text-6xl text-white text-center bg-blue-400 mx-5 uppercase mx-5 p-10"
      >
        login ok
      </h1>
    </div>
  </home-layout>
</template>

<script>
import { checkToken } from "../utils/localStorageToken";
import HomeLayout from "../layouts/HomeLayout";
export default {
  name: "Home",
  components: {
    HomeLayout,
  },
  methods: {},
  created: function () {
    let token = checkToken();
    //verifico si hay sesion iniciada
    if (!token.login) {
      this.$router.push({ path: "login" });
    }
  },
};
</script>
