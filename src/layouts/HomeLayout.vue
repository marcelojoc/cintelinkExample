<template>
  <div class="page-layout">
    <Header @logout="logoutSis"></Header>
    <main class="main">
      <slot></slot>
    </main>
    <Footer-partial></Footer-partial>
  </div>
</template>

<script>
import Header from "@/partials/Header";
import FooterPartial from "@/partials/Footer";
import { deleteToken } from "../utils/localStorageToken";

export default {
  name: "HomeLayout",
  components: {
    Header,
    FooterPartial,
  },
  methods: {
    logoutSis: function () {
      deleteToken();
      this.$router.push({ path: "login" });
    },
  },
};
</script>
