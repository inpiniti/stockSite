import { _ as _sfc_main$1 } from './Card-AGwdWt8g.mjs';
import { _ as _sfc_main$3, a as _sfc_main$2, b as _sfc_main$1$1, c as _sfc_main$6 } from './CardContent-aByUFUrt.mjs';
import { _ as _sfc_main$4 } from './index-a6dO8h6t.mjs';
import { _ as _sfc_main$5 } from './Separator-SzPKFLHH.mjs';
import { u as useState } from './state-1iJA_-lt.mjs';
import { u as useYouTube, n as nowTouTube, a as useYoutubeState, b as usePlayer, c as useNowYouTube, p as prev, d as play, e as pause, f as next, g as firstPlay } from './player-6eR9jqFZ.mjs';
import { defineComponent, computed, ref, onUnmounted, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
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
import '@fortawesome/free-brands-svg-icons';
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
      const _component_Card = _sfc_main$1;
      const _component_CardHeader = _sfc_main$3;
      const _component_CardTitle = _sfc_main$2;
      const _component_CardDescription = _sfc_main$1$1;
      const _component_Badge = _sfc_main$4;
      const _component_Separator = _sfc_main$5;
      const _component_CardContent = _sfc_main$6;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-full overflow-hidden p-4 gap-4" }, _attrs))}><div class="flex flex-col grow-[1]">`);
      _push(ssrRenderComponent(_component_Card, { class: "h-full overflow-hidden flex flex-col" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, { class: "shrink-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\uC74C\uC545 \uCC28\uD2B8`);
                      } else {
                        return [
                          createTextVNode("\uC74C\uC545 \uCC28\uD2B8")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_CardDescription, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\uC77C\uBCC4, \uC6D4\uBCC4, \uB204\uC801 \uCC28\uD2B8\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.`);
                      } else {
                        return [
                          createTextVNode("\uC77C\uBCC4, \uC6D4\uBCC4, \uB204\uC801 \uCC28\uD2B8\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("\uC74C\uC545 \uCC28\uD2B8")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_CardDescription, null, {
                      default: withCtx(() => [
                        createTextVNode("\uC77C\uBCC4, \uC6D4\uBCC4, \uB204\uC801 \uCC28\uD2B8\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Card, { class: "grow-[1] overflow-y-scroll rounded-lg border mx-6 mb-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(musicListSorted), (music) => {
                    var _a;
                    _push3(`<div${_scopeId2}><div class="${ssrRenderClass([{ "bg-red-50": ((_a = unref(youTube)) == null ? void 0 : _a.video_id) == music.video_id }, "flex gap-2 p-2"])}"${_scopeId2}><div class="w-96 flex gap-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Badge, { variant: "outline" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(music.kr)} ${ssrInterpolate(music.op_ed)} ${ssrInterpolate(music.season)}\uAE30 ${ssrInterpolate(music.cool)}\uCFE8 `);
                        } else {
                          return [
                            createTextVNode(toDisplayString(music.kr) + " " + toDisplayString(music.op_ed) + " " + toDisplayString(music.season) + "\uAE30 " + toDisplayString(music.cool) + "\uCFE8 ", 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<div class="font-semibold text-sm"${_scopeId2}>${ssrInterpolate(music.title)}</div></div><div class="w-20"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Badge, { variant: "outline" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(music.view_count)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(music.view_count), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="w-28"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Badge, {
                      variant: "outline",
                      class: "cursor-pointer",
                      onClick: ($event) => videoAdd(music)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \uC7AC\uC0DD\uBAA9\uB85D \uCD94\uAC00 `);
                        } else {
                          return [
                            createTextVNode(" \uC7AC\uC0DD\uBAA9\uB85D \uCD94\uAC00 ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                    _push3(ssrRenderComponent(_component_Separator, null, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(musicListSorted), (music) => {
                      var _a;
                      return openBlock(), createBlock("div", null, [
                        createVNode("div", {
                          class: ["flex gap-2 p-2", { "bg-red-50": ((_a = unref(youTube)) == null ? void 0 : _a.video_id) == music.video_id }]
                        }, [
                          createVNode("div", { class: "w-96 flex gap-2" }, [
                            createVNode(_component_Badge, { variant: "outline" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(music.kr) + " " + toDisplayString(music.op_ed) + " " + toDisplayString(music.season) + "\uAE30 " + toDisplayString(music.cool) + "\uCFE8 ", 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("div", { class: "font-semibold text-sm" }, toDisplayString(music.title), 1)
                          ]),
                          createVNode("div", { class: "w-20" }, [
                            createVNode(_component_Badge, { variant: "outline" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(music.view_count), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          createVNode("div", { class: "w-28" }, [
                            createVNode(_component_Badge, {
                              variant: "outline",
                              class: "cursor-pointer",
                              onClick: ($event) => videoAdd(music)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \uC7AC\uC0DD\uBAA9\uB85D \uCD94\uAC00 ")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ])
                        ], 2),
                        createVNode(_component_Separator)
                      ]);
                    }), 256))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardHeader, { class: "shrink-0" }, {
                default: withCtx(() => [
                  createVNode(_component_CardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("\uC74C\uC545 \uCC28\uD2B8")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_CardDescription, null, {
                    default: withCtx(() => [
                      createTextVNode("\uC77C\uBCC4, \uC6D4\uBCC4, \uB204\uC801 \uCC28\uD2B8\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_Card, { class: "grow-[1] overflow-y-scroll rounded-lg border mx-6 mb-6" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(musicListSorted), (music) => {
                    var _a;
                    return openBlock(), createBlock("div", null, [
                      createVNode("div", {
                        class: ["flex gap-2 p-2", { "bg-red-50": ((_a = unref(youTube)) == null ? void 0 : _a.video_id) == music.video_id }]
                      }, [
                        createVNode("div", { class: "w-96 flex gap-2" }, [
                          createVNode(_component_Badge, { variant: "outline" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(music.kr) + " " + toDisplayString(music.op_ed) + " " + toDisplayString(music.season) + "\uAE30 " + toDisplayString(music.cool) + "\uCFE8 ", 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode("div", { class: "font-semibold text-sm" }, toDisplayString(music.title), 1)
                        ]),
                        createVNode("div", { class: "w-20" }, [
                          createVNode(_component_Badge, { variant: "outline" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(music.view_count), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        createVNode("div", { class: "w-28" }, [
                          createVNode(_component_Badge, {
                            variant: "outline",
                            class: "cursor-pointer",
                            onClick: ($event) => videoAdd(music)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \uC7AC\uC0DD\uBAA9\uB85D \uCD94\uAC00 ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ])
                      ], 2),
                      createVNode(_component_Separator)
                    ]);
                  }), 256))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-96 shrink-0 h-full">`);
      _push(ssrRenderComponent(_component_Card, { class: "h-full flex flex-col" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, { class: "shrink-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\uC778\uD53C\uB2C8\uD2F0 \uD50C\uB808\uC774\uC5B4`);
                      } else {
                        return [
                          createTextVNode("\uC778\uD53C\uB2C8\uD2F0 \uD50C\uB808\uC774\uC5B4")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_CardDescription, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\uD604\uC7AC \uC7AC\uC0DD\uC911\uC778 \uC74C\uC545\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.`);
                      } else {
                        return [
                          createTextVNode("\uD604\uC7AC \uC7AC\uC0DD\uC911\uC778 \uC74C\uC545\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("\uC778\uD53C\uB2C8\uD2F0 \uD50C\uB808\uC774\uC5B4")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_CardDescription, null, {
                      default: withCtx(() => [
                        createTextVNode("\uD604\uC7AC \uC7AC\uC0DD\uC911\uC778 \uC74C\uC545\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CardContent, { class: "shrink-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
                if (_push3) {
                  _push3(`<div${_scopeId2}><img${ssrRenderAttr("src", `https://img.youtube.com/vi/${(_a = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _a.video_id}/maxresdefault.jpg`)}${_scopeId2}><div class="text-center"${_scopeId2}>${ssrInterpolate((_b = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _b.title)}</div><div class="text-center text-sm text-neutral-400"${_scopeId2}>${ssrInterpolate((_c = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _c.kr)} ${ssrInterpolate((_d = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _d.season)}\uAE30 ${ssrInterpolate((_e = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _e.cool)}\uCFE8 ${ssrInterpolate((_f = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _f.op_ed)}</div><div class="w-full h-2 bg-neutral-100 rounded-md"${_scopeId2}><div class="h-2 bg-red-100 rounded-md" style="${ssrRenderStyle({ width: `${unref(state)}%` })}"${_scopeId2}></div></div><div class="text-xs flex gap-2"${_scopeId2}><div${_scopeId2}>${ssrInterpolate(unref(currentTimeFormatted))}</div><div class="text-neutral-400"${_scopeId2}>${ssrInterpolate(unref(videoDurationFormatted))}</div></div></div><div class="flex gap-4 justify-center text-2xl"${_scopeId2}><div class="cursor-pointer p-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "backward-step"] }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (unref(playerState) != 1) {
                    _push3(`<div class="cursor-pointer p-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "play"] }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(playerState) == 1) {
                    _push3(`<div class="cursor-pointer p-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "stop"] }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="cursor-pointer p-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "forward-step"] }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("img", {
                        src: `https://img.youtube.com/vi/${(_g = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _g.video_id}/maxresdefault.jpg`
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "text-center" }, toDisplayString((_h = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _h.title), 1),
                      createVNode("div", { class: "text-center text-sm text-neutral-400" }, toDisplayString((_i = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _i.kr) + " " + toDisplayString((_j = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _j.season) + "\uAE30 " + toDisplayString((_k = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _k.cool) + "\uCFE8 " + toDisplayString((_l = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _l.op_ed), 1),
                      createVNode("div", { class: "w-full h-2 bg-neutral-100 rounded-md" }, [
                        createVNode("div", {
                          class: "h-2 bg-red-100 rounded-md",
                          style: { width: `${unref(state)}%` }
                        }, null, 4)
                      ]),
                      createVNode("div", { class: "text-xs flex gap-2" }, [
                        createVNode("div", null, toDisplayString(unref(currentTimeFormatted)), 1),
                        createVNode("div", { class: "text-neutral-400" }, toDisplayString(unref(videoDurationFormatted)), 1)
                      ])
                    ]),
                    createVNode("div", { class: "flex gap-4 justify-center text-2xl" }, [
                      createVNode("div", {
                        onClick: "prev" in _ctx ? _ctx.prev : unref(prev),
                        class: "cursor-pointer p-2"
                      }, [
                        createVNode(_component_font_awesome_icon, { icon: ["fas", "backward-step"] })
                      ], 8, ["onClick"]),
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Card, { class: "mx-6 mb-6 grow-[1] overflow-y-scroll" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(youTubeList), (music) => {
                    var _a;
                    _push3(`<div${_scopeId2}><div class="${ssrRenderClass([{ "bg-red-50": ((_a = unref(youTube)) == null ? void 0 : _a.video_id) == music.video_id }, "flex gap-2 p-2"])}"${_scopeId2}><div class="flex gap-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Badge, { variant: "outline" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(music.kr)} ${ssrInterpolate(music.op_ed)} ${ssrInterpolate(music.season)}\uAE30 ${ssrInterpolate(music.cool)}\uCFE8 `);
                        } else {
                          return [
                            createTextVNode(toDisplayString(music.kr) + " " + toDisplayString(music.op_ed) + " " + toDisplayString(music.season) + "\uAE30 " + toDisplayString(music.cool) + "\uCFE8 ", 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<div class="font-semibold text-sm"${_scopeId2}>${ssrInterpolate(music.title)}</div></div></div>`);
                    _push3(ssrRenderComponent(_component_Separator, null, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(youTubeList), (music) => {
                      var _a;
                      return openBlock(), createBlock("div", null, [
                        createVNode("div", {
                          class: ["flex gap-2 p-2", { "bg-red-50": ((_a = unref(youTube)) == null ? void 0 : _a.video_id) == music.video_id }]
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardHeader, { class: "shrink-0" }, {
                default: withCtx(() => [
                  createVNode(_component_CardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("\uC778\uD53C\uB2C8\uD2F0 \uD50C\uB808\uC774\uC5B4")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_CardDescription, null, {
                    default: withCtx(() => [
                      createTextVNode("\uD604\uC7AC \uC7AC\uC0DD\uC911\uC778 \uC74C\uC545\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, { class: "shrink-0" }, {
                default: withCtx(() => {
                  var _a, _b, _c, _d, _e, _f;
                  return [
                    createVNode("div", null, [
                      createVNode("img", {
                        src: `https://img.youtube.com/vi/${(_a = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _a.video_id}/maxresdefault.jpg`
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "text-center" }, toDisplayString((_b = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _b.title), 1),
                      createVNode("div", { class: "text-center text-sm text-neutral-400" }, toDisplayString((_c = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _c.kr) + " " + toDisplayString((_d = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _d.season) + "\uAE30 " + toDisplayString((_e = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _e.cool) + "\uCFE8 " + toDisplayString((_f = ("useNowYouTube" in _ctx ? _ctx.useNowYouTube : unref(useNowYouTube))().value) == null ? void 0 : _f.op_ed), 1),
                      createVNode("div", { class: "w-full h-2 bg-neutral-100 rounded-md" }, [
                        createVNode("div", {
                          class: "h-2 bg-red-100 rounded-md",
                          style: { width: `${unref(state)}%` }
                        }, null, 4)
                      ]),
                      createVNode("div", { class: "text-xs flex gap-2" }, [
                        createVNode("div", null, toDisplayString(unref(currentTimeFormatted)), 1),
                        createVNode("div", { class: "text-neutral-400" }, toDisplayString(unref(videoDurationFormatted)), 1)
                      ])
                    ]),
                    createVNode("div", { class: "flex gap-4 justify-center text-2xl" }, [
                      createVNode("div", {
                        onClick: "prev" in _ctx ? _ctx.prev : unref(prev),
                        class: "cursor-pointer p-2"
                      }, [
                        createVNode(_component_font_awesome_icon, { icon: ["fas", "backward-step"] })
                      ], 8, ["onClick"]),
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
                }),
                _: 1
              }),
              createVNode(_component_Card, { class: "mx-6 mb-6 grow-[1] overflow-y-scroll" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(youTubeList), (music) => {
                    var _a;
                    return openBlock(), createBlock("div", null, [
                      createVNode("div", {
                        class: ["flex gap-2 p-2", { "bg-red-50": ((_a = unref(youTube)) == null ? void 0 : _a.video_id) == music.video_id }]
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
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/book/music.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=music-PTMeqdf_.mjs.map
