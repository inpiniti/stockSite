import { _ as _sfc_main$1 } from './Separator-SzPKFLHH.mjs';
import { _ as _sfc_main$2 } from './Textarea-wJGe8b5L.mjs';
import { _ as _sfc_main$3 } from './index-VljijB2M.mjs';
import { ref, watch, unref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { u as useBoardDetail } from './useBoardDetail-05OADXrM.mjs';
import { f as findBook } from './useBooks-P5ZbZrgP.mjs';
import { u as useFetch } from './fetch-ak_YyZbN.mjs';
import { t as timeAgo, r as replaceDomain } from './book-lQ5h8MvC.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
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
import './useSupabase-g_fbflW8.mjs';

const _sfc_main = {
  __name: "read",
  __ssrInlineRender: true,
  setup(__props) {
    const board = useBoardDetail();
    const reply = ref(null);
    const scrollContainer = ref(null);
    watch(
      () => {
        var _a;
        return (_a = board.value) == null ? void 0 : _a.id;
      },
      () => {
        getReply();
        if (scrollContainer.value) {
          scrollContainer.value.scrollTop = 0;
        }
      }
    );
    async function getReply() {
      var _a, _b, _c, _d;
      console.log("getReply");
      if (!board.value) {
        console.error("board.value is not defined");
        return;
      }
      const { dc } = findBook(board.value.kr);
      const { data: newData } = await useFetch(
        `/api/dcinside/${dc}/${board.value.num}?kr=${board.value.kr}`,
        "$lQcvoauu2Y"
      );
      reply.value = newData.value;
      if ((_b = (_a = reply.value) == null ? void 0 : _a.comment) == null ? void 0 : _b.comments) {
        reply.value.comment.comments = (_d = (_c = reply.value) == null ? void 0 : _c.comment) == null ? void 0 : _d.comments.filter(
          (comment) => {
            return comment.no != 0;
          }
        );
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_Separator = _sfc_main$1;
      const _component_Textarea = _sfc_main$2;
      const _component_Button = _sfc_main$3;
      if (unref(board)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full overflow-hidden flex flex-col" }, _attrs))}><div class="shrink-0 flex flex-col p-4 gap-4"><div class="flex justify-between text-xs"><div class="flex gap-1"><h3 class="text-blue-500">${ssrInterpolate(unref(board).kr)}</h3><div class="text-neutral-300">/</div> ${ssrInterpolate(unref(board).num)}</div><div class="flex gap-1"><div>${ssrInterpolate(unref(board).id)}</div><div class="text-neutral-300">/</div><div>${ssrInterpolate(unref(board).subject)}</div><div class="text-neutral-300">/</div><div>${ssrInterpolate(unref(board).type)}</div></div></div><div class="flex items-center gap-2"><div class="w-10 h-10 bg-neutral-100 rounded-full"></div><div class="flex flex-col text-sm"><div>${ssrInterpolate(unref(board).writer)}</div><div class="flex gap-2"><div>\uC870\uD68C ${ssrInterpolate(unref(board).count)}</div><div class="text-neutral-300">|</div><div>\uB367\uAE00 ${ssrInterpolate(unref(board).number)}</div><div class="text-neutral-300">|</div><div>\uCD94\uCC9C ${ssrInterpolate(unref(board).recommend)}</div><div class="text-neutral-300">|</div><div>${ssrInterpolate(("timeAgo" in _ctx ? _ctx.timeAgo : unref(timeAgo))(unref(board).date))}</div></div></div></div><div class="text-3xl font-bold">${ssrInterpolate(unref(board).title)}</div></div>`);
        _push(ssrRenderComponent(_component_Separator, null, null, _parent));
        _push(`<div class="grow-[0] overflow-y-scroll"><div class="p-4 flex flex-col gap-4"><div>${(_a = unref(board).content) == null ? void 0 : _a.replace(
          /https:\/\/dcimg\d\.dcinside/g,
          "https://images.dcinside"
        ).replace(/co\.kr/g, "com")}</div></div>`);
        _push(ssrRenderComponent(_component_Separator, null, null, _parent));
        _push(`<div class="p-4"><div class="flex gap-4"><div class="shrink-0 w-10 h-10 bg-neutral-100 rounded-full"></div><div class="grow-[0] w-full">`);
        _push(ssrRenderComponent(_component_Textarea, { placeholder: "Type your message here." }, null, _parent));
        _push(`</div></div>`);
        _push(ssrRenderComponent(_component_Button, { class: "w-full mt-4" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\uC791\uC131`);
            } else {
              return [
                createTextVNode("\uC791\uC131")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_Separator, null, null, _parent));
        _push(`<div><!--[-->`);
        ssrRenderList((_c = (_b = unref(reply)) == null ? void 0 : _b.comment) == null ? void 0 : _c.comments, (comment) => {
          _push(`<div class="p-4 flex flex-col gap-2"><p class="text-xs">${ssrInterpolate(comment.user_id)}(${ssrInterpolate(comment.name)})</p><div class="flex items-end gap-1"><div class="bg-neutral-100 rounded-md px-2 py-1 text-sm w-fit"><div>${("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(comment.memo).replace(/co\.kr/g, "com")}</div></div><p class="text-xs">${ssrInterpolate(comment.reg_date)}</p></div></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/board/read.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=read-7pbScM2p.mjs.map
