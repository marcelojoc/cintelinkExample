<template>
  <div
    class="flex items-center justify-center min-h-screen bg-cover bg-center background--image"
  >
    <div class="px-8 py-6 mt-4 text-left bg-white rounded-lg flex-0">
      <div class="flex justify-center mb-9">
        <img
          src="@/assets/img/cintelink-logo-big.png"
          class="max-w-sm h-auto w-auto"
          alt=""
        />
      </div>

      <form action="">
        <div class="mt-4">
          <div
            class="mt-4 flex w-full items-center rounded bg-gray-200 px-4 placeholder-gray-400 outline-none"
            :class="[errors.onUsername ? 'ring-1 ring-red-600' : '']"
          >
            <input
              v-model="formLogin.username"
              type="text"
              placeholder="Usuario"
              class="fos:outline-none my-2 w-full border-none bg-transparent outline-none"
            />
            <font-awesome-icon
              icon="circle-exclamation"
              class="text-red-600"
              :class="[errors.onUsername ? '' : 'invisible']"
            />
          </div>
          <span class="text-xs text-red-600" v-if="errors.onUsername"
            ><small
              >El nombre de usuario debe tener entre 3 y 20 caracteres</small
            >
          </span>

          <div
            class="mt-4 flex w-full items-center rounded bg-gray-200 px-4 placeholder-gray-400 outline-none"
            :class="[errors.onLogin ? 'ring-1 ring-red-600' : '']"
          >
            <input
              v-model="formLogin.password"
              type="password"
              placeholder="Password"
              class="fos:outline-none my-2 w-full border-none bg-transparent outline-none"
            />
            <font-awesome-icon
              :class="[errors.onLogin ? '' : 'invisible']"
              icon="circle-exclamation"
              class="text-red-600"
            />
          </div>
          <span class="text-xs text-red-600" v-if="errors.onLogin"
            ><small>Nombre de usuario o contraseña incorrectos</small>
          </span>

          <div class="flex items-baseline justify-center">
            <button
              type="button"
              @click="checkLogin"
              class="px-6 py-2 mt-9 text-white bg-blue-400 rounded-full hover:bg-blue-500 inline-flex items-center"
            >
              <font-awesome-icon icon="unlock-alt" class="text-white pr-3" />
              <span class="uppercase font-bold">Login</span>
            </button>
          </div>
          <div class="flex items-baseline justify-center mt-4">
            <a href="#" class="text-sm text-blue-600 hover:underline"
              >¿Olvidaste tu contraseña?</a
            >
          </div>

          <div class="flex items-baseline justify-center mt-2 mb-6">
            <a href="#" class="text-sm text-black hover:underline"
              >Crear cuenta</a
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { getLogin } from "../Api/";
import { checkToken, saveToken } from "../utils/localStorageToken";
export default {
  name: "Login",
  computed: {},
  components: {},
  data() {
    return {
      formLogin: {
        // ,modelo  de formulario de login
        username: "",
        password: "asd11qwf",
      },
      errors: {
        onLogin: false,
        onUsername: false,
      },
      isLogin: false,
    };
  },
  methods: {
    async checkLogin() {
      let login = await getLogin(this.formLogin);
      let response = login.data;
      if (response.error == 0) {
        // si es 0
        let { data } = response;
        let token = saveToken(data[0]);
        this.isLogin = token.login;
        this.$router.push({ path: "home" });
      } else {
        alert("datos incorrectos");
        // dispara los errores en el form
        this.errors.onLogin = true;
      }
    },
  },
  watch: {
    // cada vez que la pregunta cambie, esta función será ejecutada
    "formLogin.username": function (newitem) {
      newitem.valueOf().length > 3
        ? (this.errors.onUsername = false)
        : (this.errors.onUsername = true);
    },
  },
  created: function () {
    let token = checkToken();
    if (token.login) {
      this.$router.push({ path: "home" });
    } else {
      this.isLogin = false;
    }
  },
};
</script>
