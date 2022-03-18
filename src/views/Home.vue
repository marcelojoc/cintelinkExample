<template>
  <home-layout>
    <div class="mt-5 border mx-5 p-10 text-center">
      <h1
        class="rounded-lg text-6xl text-white text-center bg-blue-300 mx-5 uppercase mx-5 p-10"
      >
        ok login
      </h1>
    </div>

    <div class="mt-5 border mx-5 p-10">
      <p class="text-right">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
        minima cupiditate iusto nobis dolores distinctio exercitationem,
        incidunt animi magni illum est. Eaque excepturi sapiente libero quisquam
        aliquid? Vel, accusantium repudiandae?
      </p>
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
    console.log(this.$router);
    if (!token.login) {
      this.$router.push({ path: "login" });
    }
  },
};
</script>
