import { _ as _sfc_main$1 } from './Header-Ffs2ceUt.mjs';
import { _ as _sfc_main$2 } from './Card-AGwdWt8g.mjs';
import { _ as _sfc_main$3 } from './Separator-SzPKFLHH.mjs';
import { _ as _sfc_main$4 } from './index-a6dO8h6t.mjs';
import { u as useMusic } from './useMusic-QD8ydXc6.mjs';
import { u as useYouTube, n as nowTouTube, a as useYoutubeState, b as usePlayer, c as useNowYouTube, p as play, d as pause, e as next, f as firstPlay } from './player-QNo6EtRm.mjs';
import { defineComponent, computed, ref, onUnmounted, resolveComponent, mergeProps, withCtx, unref, openBlock, createBlock, Fragment, renderList, createVNode, toDisplayString, createCommentVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { e as useToast } from '../server.mjs';
import 'radix-vue';
import 'class-variance-authority';
import './state-t0JlwV5Q.mjs';
import './useSupabase-g_fbflW8.mjs';
import '@supabase/supabase-js';
import '../../user.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
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
import 'lucide-vue-next';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "music",
  __ssrInlineRender: true,
  setup(__props) {
    const { toast } = useToast();
    const musicList = useMusic();
    const youTubeList = useYouTube();
    const youTube = computed(() => nowTouTube());
    const playerState = useYoutubeState();
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
      firstPlay();
      toast({
        title: "\uC7AC\uC0DD\uBAA9\uB85D \uCD94\uAC00",
        description: `${video.title} \uC7AC\uC0DD\uBAA9\uB85D\uC744 \uCD94\uAC00\uD588\uC2B5\uB2C8\uB2E4.`
      });
    }
    usePlayer();
    ref();
    computed(() => {
      if (useNowYouTube().value == null)
        return;
      return `https://img.youtube.com/vi/${useNowYouTube().value.video_id}/default.jpg`;
    });
    const interval = ref();
    const videoDuration = ref(0);
    const currentTime = ref([0]);
    const state = computed(() => {
      return currentTime.value[0] / videoDuration.value * 100;
    });
    const videoDurationFormatted = computed(() => {
      const minutes = Math.floor(videoDuration.value / 60);
      const seconds = Math.floor(videoDuration.value - minutes * 60);
      return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    });
    const currentTimeFormatted = computed(() => {
      const minutes = Math.floor(currentTime.value[0] / 60);
      const seconds = Math.floor(currentTime.value[0] - minutes * 60);
      return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    });
    onUnmounted(() => {
      clearInterval(interval.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_CommonHeader = _sfc_main$1;
      const _component_Card = _sfc_main$2;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_Separator = _sfc_main$3;
      const _component_Badge = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-full overflow-hidden p-4 gap-4" }, _attrs))}><div class="flex flex-col grow-[1]"><div class="h-full overflow-hidden flex flex-col gap-4">`);
      _push(ssrRenderComponent(_component_CommonHeader, {
        title: "\uC74C\uC545 \uCC28\uD2B8",
        description: "\uC77C\uBCC4, \uC6D4\uBCC4, \uB204\uC801 \uCC28\uD2B8\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."
      }, null, _parent));
      _push(ssrRenderComponent(_component_Card, { class: "grow-[1] overflow-y-scroll rounded-lg border" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(musicListSorted), (music) => {
              var _a2;
              _push2(`<div${_scopeId}><div class="${ssrRenderClass([{ "bg-red-50": ((_a2 = unref(youTube)) == null ? void 0 : _a2.video_id) == music.video_id }, "flex gap-2 p-2 justify-between"])}"${_scopeId}><div class="flex gap-2"${_scopeId}><img class="w-12 h-12 object-none rounded-md"${ssrRenderAttr("src", `https://img.youtube.com/vi/${music.video_id}/default.jpg`)}${_scopeId}><div class="flex flex-col gap-1 justify-center"${_scopeId}><div class="text-xs text-neutral-400"${_scopeId}>${ssrInterpolate(music.kr)} ${ssrInterpolate(music.op_ed)} ${ssrInterpolate(music.season ? `${music.season}\uAE30` : "")} ${ssrInterpolate(music.cool ? `${music.cool}\uCFE8` : "")}</div><div class="font-semibold text-sm"${_scopeId}>${ssrInterpolate(music.title)}</div></div></div><div class="flex text-neutral-500 text-sm gap-2 pr-2"${_scopeId}><div class="flex items-center"${_scopeId}>${ssrInterpolate(music.view_count)}</div><div class="flex items-center cursor-pointer"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "play"] }, null, _parent2, _scopeId));
              _push2(`</div></div></div>`);
              _push2(ssrRenderComponent(_component_Separator, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(musicListSorted), (music) => {
                var _a2;
                return openBlock(), createBlock("div", null, [
                  createVNode("div", {
                    class: ["flex gap-2 p-2 justify-between", { "bg-red-50": ((_a2 = unref(youTube)) == null ? void 0 : _a2.video_id) == music.video_id }]
                  }, [
                    createVNode("div", { class: "flex gap-2" }, [
                      createVNode("img", {
                        class: "w-12 h-12 object-none rounded-md",
                        src: `https://img.youtube.com/vi/${music.video_id}/default.jpg`
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "flex flex-col gap-1 justify-center" }, [
                        createVNode("div", { class: "text-xs text-neutral-400" }, toDisplayString(music.kr) + " " + toDisplayString(music.op_ed) + " " + toDisplayString(music.season ? `${music.season}\uAE30` : "") + " " + toDisplayString(music.cool ? `${music.cool}\uCFE8` : ""), 1),
                        createVNode("div", { class: "font-semibold text-sm" }, toDisplayString(music.title), 1)
                      ])
                    ]),
                    createVNode("div", { class: "flex text-neutral-500 text-sm gap-2 pr-2" }, [
                      createVNode("div", { class: "flex items-center" }, toDisplayString(music.view_count), 1),
                      createVNode("div", {
                        class: "flex items-center cursor-pointer",
                        onClick: ($event) => videoAdd(music)
                      }, [
                        createVNode(_component_font_awesome_icon, { icon: ["fas", "play"] })
                      ], 8, ["onClick"])
                    ])
                  ], 2),
                  createVNode(_component_Separator)
                ]);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Card, { class: "lg:hidden flex shrink-0 bg-neutral-50 w-full p-2 justify-between" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2, _e2, _f2, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
          if (_push2) {
            _push2(`<div class="flex gap-2"${_scopeId}><img class="w-12 h-12 object-none rounded-md"${ssrRenderAttr("src", `https://img.youtube.com/vi/${(_a2 = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _a2.video_id}/default.jpg`)}${_scopeId}><div class="flex flex-col gap-1 justify-center"${_scopeId}><div class="text-xs text-neutral-400"${_scopeId}>${ssrInterpolate((_b2 = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _b2.kr)} ${ssrInterpolate((_c2 = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _c2.op_ed)} ${ssrInterpolate(((_d2 = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _d2.season) ? `${(_e2 = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _e2.season}\uAE30` : "")} ${ssrInterpolate(((_f2 = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _f2.cool) ? `${(_g = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _g.cool}\uCFE8` : "")}</div><div class="font-semibold text-sm"${_scopeId}>${ssrInterpolate((_h = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _h.title)}</div></div></div><div class="flex items-center"${_scopeId}>`);
            if (unref(playerState) != 1) {
              _push2(`<div class="cursor-pointer p-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "play"] }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(playerState) == 1) {
              _push2(`<div class="cursor-pointer p-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "stop"] }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="cursor-pointer p-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "forward-step"] }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex gap-2" }, [
                createVNode("img", {
                  class: "w-12 h-12 object-none rounded-md",
                  src: `https://img.youtube.com/vi/${(_i = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _i.video_id}/default.jpg`
                }, null, 8, ["src"]),
                createVNode("div", { class: "flex flex-col gap-1 justify-center" }, [
                  createVNode("div", { class: "text-xs text-neutral-400" }, toDisplayString((_j = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _j.kr) + " " + toDisplayString((_k = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _k.op_ed) + " " + toDisplayString(((_l = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _l.season) ? `${(_m = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _m.season}\uAE30` : "") + " " + toDisplayString(((_n = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _n.cool) ? `${(_o = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _o.cool}\uCFE8` : ""), 1),
                  createVNode("div", { class: "font-semibold text-sm" }, toDisplayString((_p = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _p.title), 1)
                ])
              ]),
              createVNode("div", { class: "flex items-center" }, [
                unref(playerState) != 1 ? (openBlock(), createBlock("div", {
                  key: 0,
                  onClick: "play" in _ctx ? _ctx.play : unref(play),
                  class: "cursor-pointer p-2"
                }, [
                  createVNode(_component_font_awesome_icon, { icon: ["fas", "play"] })
                ], 8, ["onClick"])) : createCommentVNode("", true),
                unref(playerState) == 1 ? (openBlock(), createBlock("div", {
                  key: 1,
                  onClick: "pause" in _ctx ? _ctx.pause : unref(pause),
                  class: "cursor-pointer p-2"
                }, [
                  createVNode(_component_font_awesome_icon, { icon: ["fas", "stop"] })
                ], 8, ["onClick"])) : createCommentVNode("", true),
                createVNode("div", {
                  onClick: "next" in _ctx ? _ctx.next : unref(next),
                  class: "cursor-pointer p-2"
                }, [
                  createVNode(_component_font_awesome_icon, { icon: ["fas", "forward-step"] })
                ], 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="w-80 shrink-0 h-full lg:block hidden"><div class="h-full flex flex-col gap-4">`);
      _push(ssrRenderComponent(_component_CommonHeader, {
        title: "\uD50C\uB808\uC774\uC5B4",
        description: "\uD604\uC7AC \uC7AC\uC0DD\uC911\uC778 \uC74C\uC545\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4."
      }, null, _parent));
      _push(`<div class="shrink-0"><div><img${ssrRenderAttr("src", `https://img.youtube.com/vi/${(_a = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _a.video_id}/maxresdefault.jpg`)}><div class="text-center">${ssrInterpolate((_b = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _b.title)}</div><div class="text-center text-sm text-neutral-400">${ssrInterpolate((_c = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _c.kr)} ${ssrInterpolate((_d = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _d.season)}\uAE30 ${ssrInterpolate((_e = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _e.cool)}\uCFE8 ${ssrInterpolate((_f = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _f.op_ed)}</div><div class="w-full h-2 bg-neutral-100 rounded-md"><div class="h-2 bg-red-100 rounded-md" style="${ssrRenderStyle({ width: `${unref(state)}%` })}"></div></div><div class="text-xs flex gap-2"><div>${ssrInterpolate(unref(currentTimeFormatted))}</div><div class="text-neutral-400">${ssrInterpolate(unref(videoDurationFormatted))}</div></div></div><div class="flex gap-4 justify-center text-2xl"><div class="cursor-pointer p-2">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "backward-step"] }, null, _parent));
      _push(`</div>`);
      if (unref(playerState) != 1) {
        _push(`<div class="cursor-pointer p-2">`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "play"] }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(playerState) == 1) {
        _push(`<div class="cursor-pointer p-2">`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "stop"] }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="cursor-pointer p-2">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "forward-step"] }, null, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_Card, { class: "grow-[1] overflow-y-scroll" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(youTubeList), (music) => {
              var _a2;
              _push2(`<div${_scopeId}><div class="${ssrRenderClass([{ "bg-red-50": ((_a2 = unref(youTube)) == null ? void 0 : _a2.video_id) == music.video_id }, "flex gap-2 p-2"])}"${_scopeId}><div class="flex gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Badge, { variant: "outline" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(music.kr)} ${ssrInterpolate(music.op_ed)} ${ssrInterpolate(music.season)}\uAE30 ${ssrInterpolate(music.cool)}\uCFE8 `);
                  } else {
                    return [
                      createTextVNode(toDisplayString(music.kr) + " " + toDisplayString(music.op_ed) + " " + toDisplayString(music.season) + "\uAE30 " + toDisplayString(music.cool) + "\uCFE8 ", 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<div class="font-semibold text-sm"${_scopeId}>${ssrInterpolate(music.title)}</div></div></div>`);
              _push2(ssrRenderComponent(_component_Separator, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(youTubeList), (music) => {
                var _a2;
                return openBlock(), createBlock("div", null, [
                  createVNode("div", {
                    class: ["flex gap-2 p-2", { "bg-red-50": ((_a2 = unref(youTube)) == null ? void 0 : _a2.video_id) == music.video_id }]
                  }, [
                    createVNode("div", { class: "flex gap-2" }, [
                      createVNode(_component_Badge, { variant: "outline" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(music.kr) + " " + toDisplayString(music.op_ed) + " " + toDisplayString(music.season) + "\uAE30 " + toDisplayString(music.cool) + "\uCFE8 ", 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode("div", { class: "font-semibold text-sm" }, toDisplayString(music.title), 1)
                    ])
                  ], 2),
                  createVNode(_component_Separator)
                ]);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/old/music.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=music-Sra2o6gf.mjs.map
