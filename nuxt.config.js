export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "SportsWire - Up-to-date Sports News and Analysis App",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Stay up-to-date with the latest sports news and analysis anytime, anywhere with Sportswire - a fun and engaging app built with Nuxt.js PWA.",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/styles.css", "@/assets/css/tailwind.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  pwa: {
    // https://pwa.nuxtjs.org/manifest
    manifest: {
      name: "SportsWire",
      short_name: "SportsWire",
      description: "Up-to-date Sports News and Analysis App.",
      theme_color: "#6a5acd",
      lang: "en",
      background_color: "#6a5acd",
    },
    // https://pwa.nuxtjs.org/icon
    icon: {
      sizes: [64, 120, 144, 152, 192, 384, 512],
    },
    meta: {
      name: "SportsWire",
      description: "Up-to-date Sports News and Analysis App.",
      author: "🆚",
      theme_color: "#6a5acd",
      nativeUi: true,
      appleStatusBarStyle: "black",
      mobileAppIOS: true,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
