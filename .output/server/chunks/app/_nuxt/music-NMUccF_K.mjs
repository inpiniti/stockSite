import { _ as _sfc_main$1 } from './index-a6dO8h6t.mjs';
import { _ as _sfc_main$2 } from './Separator-SzPKFLHH.mjs';
import { u as useState } from './state-1iJA_-lt.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { n as nowTouTube, u as useYouTube } from './useYouTube-60Rd4hID.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { b as useToast } from '../server.mjs';
import 'class-variance-authority';
import 'radix-vue';
import './useSupabase-m2hz1Dji.mjs';
import '@supabase/supabase-js';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
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
import 'clsx';
import 'tailwind-merge';
import 'lucide-vue-next';

const useMusic = () => useState("useMusic", () => []);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "music",
  __ssrInlineRender: true,
  setup(__props) {
    const { toast } = useToast();
    const musicList = useMusic();
    const youTube = computed(() => nowTouTube());
    function convertViewCount(viewCount) {
      if (viewCount.includes("\uC5B5")) {
        return parseFloat(viewCount.replace("\uC5B5", "")) * 1e8;
      } else if (viewCount.includes("\uB9CC")) {
        return parseFloat(viewCount.replace("\uB9CC", "")) * 1e4;
      } else if (viewCount.includes("\uCC9C")) {
        return parseFloat(viewCount.replace("\uCC9C", "")) * 1e3;
      } else {
        return parseFloat(viewCount);
      }
    }
    const musicListSorted = computed(() => {
      return musicList.value.sort((a, b) => {
        const viewCountA = convertViewCount(a.view_count);
        const viewCountB = convertViewCount(b.view_count);
        return viewCountB - viewCountA;
      });
    });
    function videoAdd(video) {
      useYouTube().value.unshift(video);
      toast({
        title: "\uC7AC\uC0DD\uBAA9\uB85D \uCD94\uAC00",
        description: `${video.title} \uC7AC\uC0DD\uBAA9\uB85D\uC744 \uCD94\uAC00\uD588\uC2B5\uB2C8\uB2E4.`
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Badge = _sfc_main$1;
      const _component_Separator = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(musicListSorted), (music) => {
        var _a;
        _push(`<div><div class="${ssrRenderClass([{ "bg-red-50": ((_a = unref(youTube)) == null ? void 0 : _a.video_id) == music.video_id }, "flex gap-2 p-2"])}"><div class="w-32 text-sm">${ssrInterpolate(music.video_id)}</div><div class="w-96 flex gap-2">`);
        _push(ssrRenderComponent(_component_Badge, { variant: "outline" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(music.kr)} ${ssrInterpolate(music.op_ed)} ${ssrInterpolate(music.season)}\uAE30 ${ssrInterpolate(music.cool)}\uCFE8 `);
            } else {
              return [
                createTextVNode(toDisplayString(music.kr) + " " + toDisplayString(music.op_ed) + " " + toDisplayString(music.season) + "\uAE30 " + toDisplayString(music.cool) + "\uCFE8 ", 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="font-semibold text-sm">${ssrInterpolate(music.title)}</div></div><div class="w-20">`);
        _push(ssrRenderComponent(_component_Badge, { variant: "outline" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(music.view_count)}`);
            } else {
              return [
                createTextVNode(toDisplayString(music.view_count), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="w-28">`);
        _push(ssrRenderComponent(_component_Badge, {
          variant: "outline",
          class: "cursor-pointer",
          onClick: ($event) => videoAdd(music)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \uC7AC\uC0DD\uBAA9\uB85D \uCD94\uAC00 `);
            } else {
              return [
                createTextVNode(" \uC7AC\uC0DD\uBAA9\uB85D \uCD94\uAC00 ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
        _push(ssrRenderComponent(_component_Separator, null, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/book/music.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=music-NMUccF_K.mjs.map
