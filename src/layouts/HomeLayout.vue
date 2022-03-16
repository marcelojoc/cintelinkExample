<template>
  <div class="page-layout">
    <Header></Header>
    <main class="main">
      <slot></slot>
    </main>
  </div>
</template>

<script>
import Header from "@/partials/Header";
export default {
  name: "HomeLayout",
  components: {
    Header,
  },
};
</script>
