import { defineNuxtPlugin } from "#app";
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    import("@ckeditor/ckeditor5-vue").then((module) => {
      const CKEditor = module.default;
      nuxtApp.vueApp.use(CKEditor);
    });
  }
});
