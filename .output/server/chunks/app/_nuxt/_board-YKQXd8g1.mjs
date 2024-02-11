import { _ as _sfc_main$1 } from './style-DzneHoYd.mjs';
import { useSSRContext, defineComponent, ref, resolveComponent, unref, withCtx, createVNode, toDisplayString, nextTick } from 'vue';
import { k as krImgBooks } from './useBooks-Ypf3XFQB.mjs';
import { u as useState } from './state-0C5oRJ7z.mjs';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';
import './SheetContent-ome715M8.mjs';
import 'radix-vue';
import 'lucide-vue-next';
import 'class-variance-authority';
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
import 'clsx';
import 'tailwind-merge';
import './SheetTitle-FI5IT0Z7.mjs';
import './book-lQ5h8MvC.mjs';
import './useSupabase-vnVKN2Il.mjs';
import '@vueuse/core';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "_board",
  __ssrInlineRender: true,
  setup(__props) {
    const boards = ref([]);
    krImgBooks();
    const page = ref(1);
    const pageBoards = ref([]);
    ref(false);
    function test() {
      const scrollContainer = useState("scrollContainer", () => null);
      let scrollPosition = scrollContainer.value.scrollTop;
      page.value++;
      const nextpage = [
        ...boards.value.slice((page.value - 1) * 20, page.value * 20)
      ];
      pageBoards.value = [...pageBoards.value, ...nextpage];
      setTimeout(() => {
        nextTick(() => {
          scrollContainer.value.scrollTo(0, scrollPosition);
        });
      });
    }
    const boardDetail = ref(false);
    const reply = ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SheetBoardDetail = _sfc_main$1;
      const _component_masonry_wall = resolveComponent("masonry-wall");
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_SheetBoardDetail, {
        open: unref(boardDetail),
        reply: unref(reply),
        "onUpdate:open": ($event) => boardDetail.value = !unref(boardDetail)
      }, null, _parent));
      _push(`<div data-v-9e06b237>`);
      _push(ssrRenderComponent(_component_masonry_wall, {
        items: unref(pageBoards),
        "ssr-columns": 20,
        "column-width": 300,
        gap: 16
      }, {
        default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button data-v-9e06b237${_scopeId}>test</button><div data-v-9e06b237${_scopeId}>${ssrInterpolate(item.kr)}</div><div data-v-9e06b237${_scopeId}>${ssrInterpolate(item.kr)}</div><div data-v-9e06b237${_scopeId}>${ssrInterpolate(item.kr)}</div><div data-v-9e06b237${_scopeId}>${ssrInterpolate(item.kr)}</div><div data-v-9e06b237${_scopeId}>${ssrInterpolate(item.kr)}</div><div data-v-9e06b237${_scopeId}>${ssrInterpolate(item.kr)}</div><div data-v-9e06b237${_scopeId}>${ssrInterpolate(item.kr)}</div><div data-v-9e06b237${_scopeId}>${ssrInterpolate(item.kr)}</div><div data-v-9e06b237${_scopeId}>${ssrInterpolate(item.kr)}</div><div data-v-9e06b237${_scopeId}>${ssrInterpolate(item.kr)}</div>`);
          } else {
            return [
              createVNode("button", { onClick: test }, "test"),
              createVNode("div", null, toDisplayString(item.kr), 1),
              createVNode("div", null, toDisplayString(item.kr), 1),
              createVNode("div", null, toDisplayString(item.kr), 1),
              createVNode("div", null, toDisplayString(item.kr), 1),
              createVNode("div", null, toDisplayString(item.kr), 1),
              createVNode("div", null, toDisplayString(item.kr), 1),
              createVNode("div", null, toDisplayString(item.kr), 1),
              createVNode("div", null, toDisplayString(item.kr), 1),
              createVNode("div", null, toDisplayString(item.kr), 1),
              createVNode("div", null, toDisplayString(item.kr), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="w-full rounded-md p-2 flex items-center justify-center" data-v-9e06b237>`);
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        icon: ["fas", "circle-notch"],
        spin: ""
      }, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/book/_board.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _board = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9e06b237"]]);

export { _board as default };
//# sourceMappingURL=_board-YKQXd8g1.mjs.map
