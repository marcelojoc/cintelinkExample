<template>
  <div class="page-layout">
    <Header></Header>
    <main class="main">
      <slot></slot>
    </main>
    <Footer-partial></Footer-partial>
  </div>
</template>

<script>
import Header from "@/partials/Header";
import FooterPartial from "@/partials/Footer";

export default {
  name: "HomeLayout",
  components: {
    Header,
    FooterPartial,
  },
  methods: {},
};
</script>
