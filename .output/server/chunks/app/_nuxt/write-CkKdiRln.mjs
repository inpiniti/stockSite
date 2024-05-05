import { _ as _sfc_main$1 } from './Separator-SzPKFLHH.mjs';
import { _ as _sfc_main$2 } from './Input-eHzHGyo6.mjs';
import { _ as _sfc_main$3 } from './index-VljijB2M.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { u as useSupabase } from './useSupabase-g_fbflW8.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import 'radix-vue';
import '../server.mjs';
import '../../user.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@supabase/supabase-js';
import 'axios';
import 'cheerio';
import 'iconv-lite';
import 'node-cron';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/vue-fontawesome';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-regular-svg-icons';
import '@fortawesome/free-brands-svg-icons';
import '@yeger/vue-masonry-wall';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import 'lucide-vue-next';
import '@vueuse/core';
import './state-t0JlwV5Q.mjs';

async function writeBoard(board) {
  const { data, error } = await useSupabase().value.from("board").insert([board]);
  if (error) {
    console.error(error);
    return false;
  } else {
    return true;
  }
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "write",
  __ssrInlineRender: true,
  setup(__props) {
    const board = ref({});
    ref(null);
    ref({
      toolbar: [
        "bold",
        "italic",
        "link",
        "bulletedList",
        "numberedList",
        "blockQuote",
        "imageUpload"
      ],
      image: {
        toolbar: [
          "imageTextAlternative",
          "|",
          "imageStyle:alignLeft",
          "imageStyle:full",
          "imageStyle:alignRight"
        ],
        styles: ["full", "alignLeft", "alignRight"]
      },
      ckfinder: {
        uploadUrl: "/api/image/upload"
        // 여기에 이미지를 업로드할 서버 측 엔드포인트를 지정하세요.
      }
    });
    function registerPost() {
      console.log("\uB4F1\uB85D");
      writeBoard(board.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Separator = _sfc_main$1;
      const _component_Input = _sfc_main$2;
      const _component_Button = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4 flex flex-col gap-6" }, _attrs))}><div><h3 class="text-lg font-medium">\uAC8C\uC2DC\uD310 \uAE00\uC791\uC131</h3><p class="text-sm text-muted-foreground"> \uC8FC\uC220\uD68C\uC804 \uAC8C\uC2DC\uD310 \uC785\uB2C8\uB2E4. \uB2E4\uB978 \uAC8C\uC2DC\uD310\uC5D0 \uAE00\uC744 \uC791\uC131\uD558\uACE0\uC790 \uD55C\uB2E4\uBA74 \uB2E4\uB978 \uAC8C\uC2DC\uD310\uC744 \uC120\uD0DD\uD574 \uC8FC\uC138\uC694. </p></div>`);
      _push(ssrRenderComponent(_component_Separator, null, null, _parent));
      _push(`<div class="flex flex-col gap-2"><h5 class="text-sm font-semibold text-neutral-600">\uC81C\uBAA9</h5>`);
      _push(ssrRenderComponent(_component_Input, {
        modelValue: unref(board).title,
        "onUpdate:modelValue": ($event) => unref(board).title = $event,
        placeholder: "\uC81C\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."
      }, null, _parent));
      _push(`</div><div class="flex flex-col gap-2"><h5 class="text-sm font-semibold text-neutral-600">\uC791\uC131\uC790</h5>`);
      _push(ssrRenderComponent(_component_Input, {
        modelValue: unref(board).writer,
        "onUpdate:modelValue": ($event) => unref(board).writer = $event,
        placeholder: "\uC791\uC131\uC790\uB97C \uC791\uC131\uD574\uC8FC\uC138\uC694."
      }, null, _parent));
      _push(`</div><div class="flex flex-col gap-2"><h5 class="text-sm font-semibold text-neutral-600">\uB3C4\uC11C</h5>`);
      _push(ssrRenderComponent(_component_Input, {
        modelValue: unref(board).kr,
        "onUpdate:modelValue": ($event) => unref(board).kr = $event,
        placeholder: "\uB3C4\uC11C\uB97C \uC120\uD0DD\uD574 \uC8FC\uC138\uC694."
      }, null, _parent));
      _push(`</div><div class="flex flex-col gap-2"><h5 class="text-sm font-semibold text-neutral-600">\uB9D0\uBA38\uB9AC</h5>`);
      _push(ssrRenderComponent(_component_Input, {
        modelValue: unref(board).subject,
        "onUpdate:modelValue": ($event) => unref(board).subject = $event,
        placeholder: "\uB9D0\uBA38\uB9AC\uB97C \uC120\uD0DD\uD574 \uC8FC\uC138\uC694."
      }, null, _parent));
      _push(`</div><div class="flex flex-col gap-2"><h5 class="text-sm font-semibold text-neutral-600">\uB0B4\uC6A9</h5><div></div></div><div class="flex flex-col gap-2"><h5 class="text-sm font-semibold text-neutral-600">Image</h5>`);
      _push(ssrRenderComponent(_component_Input, {
        modelValue: unref(board).link,
        "onUpdate:modelValue": ($event) => unref(board).link = $event,
        placeholder: "Select an email"
      }, null, _parent));
      _push(`</div><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_Button, {
        size: "sm",
        onClick: registerPost
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uB4F1\uB85D`);
          } else {
            return [
              createTextVNode("\uB4F1\uB85D")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        size: "sm",
        variant: "outline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uCDE8\uC18C`);
          } else {
            return [
              createTextVNode("\uCDE8\uC18C")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/board/write.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=write-CkKdiRln.mjs.map
