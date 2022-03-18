<template>
  <header class="bg-white py-5 shadow">
    <div class="container">
      <div class="flex items-center justify-between flex-wrap">
        <div class="flex items-center flex-no-shrink mr-6">
          <a
            class="text-black hover:text-grey-darkest no-underline font-semibold text-lg ml-6"
            href="#"
            >cintelink.com.ar</a
          >
        </div>
        <div class="flex items-center w-auto">
          <div class="items__controls">
            <button
              class="ring-4 ring-blue-200 ring-opacity-3 bg-blue-300 text-white font-bold hover:bg-blue-500 rounded-full py-2 px-6"
              @click="getLogout"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {
    getLogout: function () {
      alert("Usted va a salir del sistema");
      this.$emit("logout");
    },
  },
  computed: {},
};
</script>
