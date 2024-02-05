// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/image",
    "nuxt-scheduler",
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  runtimeConfig: {
    public: {
      apiBase: "http://110.46.192.54:5000",
    },
  },
  tailwindcss: {
    config: {
      theme: {
        darkMode: "media",
      },
    },
  },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  app: {
    head: {
      script: [{ src: "https://apis.google.com/js/api.js" }],
    },
  },
  devServer: {
    host: "0,0,0,0",
    port: 3000,
  },
});
