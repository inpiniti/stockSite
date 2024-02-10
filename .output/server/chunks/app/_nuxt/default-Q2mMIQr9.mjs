import { _ as _sfc_main$1$1, a as _sfc_main$j } from './SheetContent-ome715M8.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-RHDp7XtA.mjs';
import { _ as _sfc_main$k } from './index-64ep_nG4.mjs';
import { b as useRoute, a as cn } from '../server.mjs';
import { useSSRContext, defineComponent, mergeProps, resolveComponent, withCtx, createVNode, unref, createTextVNode, renderSlot, isRef, toDisplayString, openBlock, createBlock, Fragment, renderList, ref, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _sfc_main$4$1, a as _sfc_main$l, b as _sfc_main$3$1, c as _sfc_main$2$1, d as _sfc_main$1$2 } from './DialogContent-t9sk4rqE.mjs';
import { u as useSupabase } from './useSupabase-vnVKN2Il.mjs';
import { cva } from 'class-variance-authority';
import { _ as _sfc_main$2$2, a as _sfc_main$m, b as _sfc_main$1$3 } from './TabsList-76hBfA3R.mjs';
import { AvatarRoot, AvatarImage, useForwardPropsEmits, SwitchRoot, SwitchThumb, MenubarRoot, MenubarItem, MenubarPortal, MenubarContent, MenubarMenu, MenubarRadioGroup, MenubarRadioItem, MenubarItemIndicator, MenubarSeparator, MenubarTrigger } from 'radix-vue';
import { _ as _sfc_main$n } from './Label-qeIRde0b.mjs';
import { useStorage } from '@vueuse/core';
import { u as useAuth } from './useAuth-x7XRM3hW.mjs';
import moment from 'moment';
import { _ as _sfc_main$o } from './Card-AGwdWt8g.mjs';
import { u as useYouTube, b as usePlayer, h as useYoutubePlayerRef, c as useNowYouTube, a as useYoutubeState, i as prev, p as play, d as pause, e as next } from './player-EyVZwR93.mjs';
import { _ as _sfc_main$s } from './DialogFooter-d_oHvfoT.mjs';
import { _ as _sfc_main$p } from './index-a6dO8h6t.mjs';
import { _ as _sfc_main$q } from './Input-eHzHGyo6.mjs';
import { _ as _sfc_main$r } from './Textarea-wJGe8b5L.mjs';
import { u as useFetch } from './fetch-fy2p8z4q.mjs';
import { Circle } from 'lucide-vue-next';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';
import { u as useState } from './state-0C5oRJ7z.mjs';
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

const useDarkmode = () => {
  const darkmode = useStorage("darkmode", false);
  function toggleDarkmode() {
    darkmode.value = !darkmode.value;
    setDarkmode();
  }
  function setDarkmode() {
    if (darkmode.value) {
      (void 0).documentElement.classList.add("dark");
    } else {
      (void 0).documentElement.classList.remove("dark");
    }
  }
  return {
    darkmode,
    toggleDarkmode,
    setDarkmode
  };
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "side",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Sheet = _sfc_main$1$1;
      const _component_SheetContent = _sfc_main$j;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Button = _sfc_main$k;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(ssrRenderComponent(_component_Sheet, mergeProps({
        open: _ctx.open,
        "onUpdate:open": ($event) => emit("update:open")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SheetContent, {
              side: "left",
              class: "w-48"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "/",
                    onClick: ($event) => emit("update:open")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 class="mb-2 px-4 text-lg font-semibold tracking-tight"${_scopeId3}>\uB9CC\uD654\uCC45</h2>`);
                      } else {
                        return [
                          createVNode("h2", { class: "mb-2 px-4 text-lg font-semibold tracking-tight" }, "\uB9CC\uD654\uCC45")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="space-y-1"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "/book/list",
                    onClick: ($event) => emit("update:open")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Button, {
                          variant: unref(route).path == "/book/list" ? `secondary` : `ghost`,
                          class: "w-full justify-start flex gap-2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "database"] }, null, _parent5, _scopeId4));
                              _push5(` \uB370\uC774\uD130\uBCA0\uC774\uC2A4 `);
                            } else {
                              return [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "database"] }),
                                createTextVNode(" \uB370\uC774\uD130\uBCA0\uC774\uC2A4 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Button, {
                            variant: unref(route).path == "/book/list" ? `secondary` : `ghost`,
                            class: "w-full justify-start flex gap-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "database"] }),
                              createTextVNode(" \uB370\uC774\uD130\uBCA0\uC774\uC2A4 ")
                            ]),
                            _: 1
                          }, 8, ["variant"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "/book/chart",
                    onClick: ($event) => emit("update:open")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Button, {
                          variant: unref(route).path == "/book/chart" ? `secondary` : `ghost`,
                          class: "w-full justify-start flex gap-2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chart-line"] }, null, _parent5, _scopeId4));
                              _push5(` \uCC28\uD2B8 `);
                            } else {
                              return [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chart-line"] }),
                                createTextVNode(" \uCC28\uD2B8 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Button, {
                            variant: unref(route).path == "/book/chart" ? `secondary` : `ghost`,
                            class: "w-full justify-start flex gap-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chart-line"] }),
                              createTextVNode(" \uCC28\uD2B8 ")
                            ]),
                            _: 1
                          }, 8, ["variant"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "/book/board",
                    onClick: ($event) => emit("update:open")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Button, {
                          variant: unref(route).path == "/book/board" ? `secondary` : `ghost`,
                          class: "w-full justify-start flex gap-2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_font_awesome_icon, { icon: ["far", "newspaper"] }, null, _parent5, _scopeId4));
                              _push5(` \uAC8C\uC2DC\uD310 `);
                            } else {
                              return [
                                createVNode(_component_font_awesome_icon, { icon: ["far", "newspaper"] }),
                                createTextVNode(" \uAC8C\uC2DC\uD310 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Button, {
                            variant: unref(route).path == "/book/board" ? `secondary` : `ghost`,
                            class: "w-full justify-start flex gap-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_font_awesome_icon, { icon: ["far", "newspaper"] }),
                              createTextVNode(" \uAC8C\uC2DC\uD310 ")
                            ]),
                            _: 1
                          }, 8, ["variant"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "/book/youtube",
                    onClick: ($event) => emit("update:open")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Button, {
                          variant: unref(route).path == "/book/youtube" ? `secondary` : `ghost`,
                          class: "w-full justify-start flex gap-2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fab", "youtube"] }, null, _parent5, _scopeId4));
                              _push5(` \uC720\uD29C\uBE0C `);
                            } else {
                              return [
                                createVNode(_component_font_awesome_icon, { icon: ["fab", "youtube"] }),
                                createTextVNode(" \uC720\uD29C\uBE0C ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Button, {
                            variant: unref(route).path == "/book/youtube" ? `secondary` : `ghost`,
                            class: "w-full justify-start flex gap-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_font_awesome_icon, { icon: ["fab", "youtube"] }),
                              createTextVNode(" \uC720\uD29C\uBE0C ")
                            ]),
                            _: 1
                          }, 8, ["variant"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "/book/music",
                    onClick: ($event) => emit("update:open")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Button, {
                          variant: unref(route).path == "/book/music" ? `secondary` : `ghost`,
                          class: "w-full justify-start flex gap-2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "music"] }, null, _parent5, _scopeId4));
                              _push5(` \uC74C\uC545 `);
                            } else {
                              return [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "music"] }),
                                createTextVNode(" \uC74C\uC545 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Button, {
                            variant: unref(route).path == "/book/music" ? `secondary` : `ghost`,
                            class: "w-full justify-start flex gap-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "music"] }),
                              createTextVNode(" \uC74C\uC545 ")
                            ]),
                            _: 1
                          }, 8, ["variant"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "/book/sale",
                    onClick: ($event) => emit("update:open")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Button, {
                          variant: unref(route).path == "/book/sale" ? `secondary` : `ghost`,
                          class: "w-full justify-start flex gap-2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "book"] }, null, _parent5, _scopeId4));
                              _push5(` \uB3C4\uC11C `);
                            } else {
                              return [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "book"] }),
                                createTextVNode(" \uB3C4\uC11C ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Button, {
                            variant: unref(route).path == "/book/sale" ? `secondary` : `ghost`,
                            class: "w-full justify-start flex gap-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "book"] }),
                              createTextVNode(" \uB3C4\uC11C ")
                            ]),
                            _: 1
                          }, 8, ["variant"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_NuxtLink, {
                      to: "/",
                      onClick: ($event) => emit("update:open")
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "mb-2 px-4 text-lg font-semibold tracking-tight" }, "\uB9CC\uD654\uCC45")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode("div", { class: "space-y-1" }, [
                      createVNode(_component_NuxtLink, {
                        to: "/book/list",
                        onClick: ($event) => emit("update:open")
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Button, {
                            variant: unref(route).path == "/book/list" ? `secondary` : `ghost`,
                            class: "w-full justify-start flex gap-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "database"] }),
                              createTextVNode(" \uB370\uC774\uD130\uBCA0\uC774\uC2A4 ")
                            ]),
                            _: 1
                          }, 8, ["variant"])
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_NuxtLink, {
                        to: "/book/chart",
                        onClick: ($event) => emit("update:open")
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Button, {
                            variant: unref(route).path == "/book/chart" ? `secondary` : `ghost`,
                            class: "w-full justify-start flex gap-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chart-line"] }),
                              createTextVNode(" \uCC28\uD2B8 ")
                            ]),
                            _: 1
                          }, 8, ["variant"])
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_NuxtLink, {
                        to: "/book/board",
                        onClick: ($event) => emit("update:open")
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Button, {
                            variant: unref(route).path == "/book/board" ? `secondary` : `ghost`,
                            class: "w-full justify-start flex gap-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_font_awesome_icon, { icon: ["far", "newspaper"] }),
                              createTextVNode(" \uAC8C\uC2DC\uD310 ")
                            ]),
                            _: 1
                          }, 8, ["variant"])
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_NuxtLink, {
                        to: "/book/youtube",
                        onClick: ($event) => emit("update:open")
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Button, {
                            variant: unref(route).path == "/book/youtube" ? `secondary` : `ghost`,
                            class: "w-full justify-start flex gap-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_font_awesome_icon, { icon: ["fab", "youtube"] }),
                              createTextVNode(" \uC720\uD29C\uBE0C ")
                            ]),
                            _: 1
                          }, 8, ["variant"])
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_NuxtLink, {
                        to: "/book/music",
                        onClick: ($event) => emit("update:open")
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Button, {
                            variant: unref(route).path == "/book/music" ? `secondary` : `ghost`,
                            class: "w-full justify-start flex gap-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "music"] }),
                              createTextVNode(" \uC74C\uC545 ")
                            ]),
                            _: 1
                          }, 8, ["variant"])
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_NuxtLink, {
                        to: "/book/sale",
                        onClick: ($event) => emit("update:open")
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Button, {
                            variant: unref(route).path == "/book/sale" ? `secondary` : `ghost`,
                            class: "w-full justify-start flex gap-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "book"] }),
                              createTextVNode(" \uB3C4\uC11C ")
                            ]),
                            _: 1
                          }, 8, ["variant"])
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SheetContent, {
                side: "left",
                class: "w-48"
              }, {
                default: withCtx(() => [
                  createVNode(_component_NuxtLink, {
                    to: "/",
                    onClick: ($event) => emit("update:open")
                  }, {
                    default: withCtx(() => [
                      createVNode("h2", { class: "mb-2 px-4 text-lg font-semibold tracking-tight" }, "\uB9CC\uD654\uCC45")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode("div", { class: "space-y-1" }, [
                    createVNode(_component_NuxtLink, {
                      to: "/book/list",
                      onClick: ($event) => emit("update:open")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Button, {
                          variant: unref(route).path == "/book/list" ? `secondary` : `ghost`,
                          class: "w-full justify-start flex gap-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_font_awesome_icon, { icon: ["fas", "database"] }),
                            createTextVNode(" \uB370\uC774\uD130\uBCA0\uC774\uC2A4 ")
                          ]),
                          _: 1
                        }, 8, ["variant"])
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_NuxtLink, {
                      to: "/book/chart",
                      onClick: ($event) => emit("update:open")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Button, {
                          variant: unref(route).path == "/book/chart" ? `secondary` : `ghost`,
                          class: "w-full justify-start flex gap-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_font_awesome_icon, { icon: ["fas", "chart-line"] }),
                            createTextVNode(" \uCC28\uD2B8 ")
                          ]),
                          _: 1
                        }, 8, ["variant"])
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_NuxtLink, {
                      to: "/book/board",
                      onClick: ($event) => emit("update:open")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Button, {
                          variant: unref(route).path == "/book/board" ? `secondary` : `ghost`,
                          class: "w-full justify-start flex gap-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_font_awesome_icon, { icon: ["far", "newspaper"] }),
                            createTextVNode(" \uAC8C\uC2DC\uD310 ")
                          ]),
                          _: 1
                        }, 8, ["variant"])
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_NuxtLink, {
                      to: "/book/youtube",
                      onClick: ($event) => emit("update:open")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Button, {
                          variant: unref(route).path == "/book/youtube" ? `secondary` : `ghost`,
                          class: "w-full justify-start flex gap-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_font_awesome_icon, { icon: ["fab", "youtube"] }),
                            createTextVNode(" \uC720\uD29C\uBE0C ")
                          ]),
                          _: 1
                        }, 8, ["variant"])
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_NuxtLink, {
                      to: "/book/music",
                      onClick: ($event) => emit("update:open")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Button, {
                          variant: unref(route).path == "/book/music" ? `secondary` : `ghost`,
                          class: "w-full justify-start flex gap-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_font_awesome_icon, { icon: ["fas", "music"] }),
                            createTextVNode(" \uC74C\uC545 ")
                          ]),
                          _: 1
                        }, 8, ["variant"])
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_NuxtLink, {
                      to: "/book/sale",
                      onClick: ($event) => emit("update:open")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Button, {
                          variant: unref(route).path == "/book/sale" ? `secondary` : `ghost`,
                          class: "w-full justify-start flex gap-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_font_awesome_icon, { icon: ["fas", "book"] }),
                            createTextVNode(" \uB3C4\uC11C ")
                          ]),
                          _: 1
                        }, 8, ["variant"])
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sheet/side.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  props: {
    isOpen: { type: Boolean },
    onOpen: { type: Function }
  },
  setup(__props) {
    async function kakao() {
      await useSupabase().value.auth.signInWithOAuth(
        {
          provider: "kakao"
        }
      );
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Dialog = _sfc_main$4$1;
      const _component_DialogContent = _sfc_main$l;
      const _component_DialogHeader = _sfc_main$3$1;
      const _component_DialogTitle = _sfc_main$2$1;
      const _component_DialogDescription = _sfc_main$1$2;
      const _component_Button = _sfc_main$k;
      _push(ssrRenderComponent(_component_Dialog, mergeProps({
        open: _ctx.isOpen,
        "onUpdate:open": _ctx.onOpen
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DialogContent, { class: "w-fit" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogHeader, { class: "space-y-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DialogTitle, { class: "text-2xl" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uB85C\uADF8\uC778 `);
                            } else {
                              return [
                                createTextVNode(" \uB85C\uADF8\uC778 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DialogDescription, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uC778\uD53C\uB2C8\uD2F0 \uCF54\uBBF9\uC2A4\uB294 \uCE74\uCE74\uC624 \uB85C\uADF8\uC778\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4. `);
                            } else {
                              return [
                                createTextVNode(" \uC778\uD53C\uB2C8\uD2F0 \uCF54\uBBF9\uC2A4\uB294 \uCE74\uCE74\uC624 \uB85C\uADF8\uC778\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DialogTitle, { class: "text-2xl" }, {
                            default: withCtx(() => [
                              createTextVNode(" \uB85C\uADF8\uC778 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DialogDescription, null, {
                            default: withCtx(() => [
                              createTextVNode(" \uC778\uD53C\uB2C8\uD2F0 \uCF54\uBBF9\uC2A4\uB294 \uCE74\uCE74\uC624 \uB85C\uADF8\uC778\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4. ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Button, {
                    variant: "outline",
                    onClick: kakao
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Kakao login `);
                      } else {
                        return [
                          createTextVNode(" Kakao login ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DialogHeader, { class: "space-y-1" }, {
                      default: withCtx(() => [
                        createVNode(_component_DialogTitle, { class: "text-2xl" }, {
                          default: withCtx(() => [
                            createTextVNode(" \uB85C\uADF8\uC778 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DialogDescription, null, {
                          default: withCtx(() => [
                            createTextVNode(" \uC778\uD53C\uB2C8\uD2F0 \uCF54\uBBF9\uC2A4\uB294 \uCE74\uCE74\uC624 \uB85C\uADF8\uC778\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4. ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Button, {
                      variant: "outline",
                      onClick: kakao
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Kakao login ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DialogContent, { class: "w-fit" }, {
                default: withCtx(() => [
                  createVNode(_component_DialogHeader, { class: "space-y-1" }, {
                    default: withCtx(() => [
                      createVNode(_component_DialogTitle, { class: "text-2xl" }, {
                        default: withCtx(() => [
                          createTextVNode(" \uB85C\uADF8\uC778 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DialogDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(" \uC778\uD53C\uB2C8\uD2F0 \uCF54\uBBF9\uC2A4\uB294 \uCE74\uCE74\uC624 \uB85C\uADF8\uC778\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4. ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Button, {
                    variant: "outline",
                    onClick: kakao
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Kakao login ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dialog/login.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "Avatar",
  __ssrInlineRender: true,
  props: {
    size: { default: "sm" },
    shape: { default: "circle" },
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AvatarRoot), mergeProps({
        class: unref(cn)(unref(avatarVariant)({ size: _ctx.size, shape: _ctx.shape }), props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/avatar/Avatar.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "AvatarImage",
  __ssrInlineRender: true,
  props: {
    src: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AvatarImage), mergeProps(props, { class: "h-full w-full object-cover" }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/avatar/AvatarImage.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const avatarVariant = cva(
  "inline-flex items-center justify-center font-normal text-foreground select-none shrink-0 bg-secondary overflow-hidden",
  {
    variants: {
      size: {
        sm: "h-10 w-10 text-xs",
        base: "h-16 w-16 text-2xl",
        lg: "h-32 w-32 text-5xl"
      },
      shape: {
        circle: "rounded-full",
        square: "rounded-md"
      }
    }
  }
);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "Switch",
  __ssrInlineRender: true,
  props: {
    defaultChecked: { type: Boolean },
    checked: { type: Boolean },
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    id: {},
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:checked"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SwitchRoot), mergeProps(unref(forwarded), {
        class: unref(cn)(
          "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwitchThumb), {
              class: unref(cn)(
                "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
              )
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwitchThumb), {
                class: unref(cn)(
                  "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
                )
              }, null, 8, ["class"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/switch/Switch.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "user",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const { darkmode, toggleDarkmode } = useDarkmode();
    const auth = useAuth();
    const emit = __emit;
    function onLogout() {
      useSupabase().value.auth.signOut();
      auth.value = false;
      emit("update:open");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Dialog = _sfc_main$4$1;
      const _component_DialogContent = _sfc_main$l;
      const _component_DialogHeader = _sfc_main$3$1;
      const _component_DialogTitle = _sfc_main$2$1;
      const _component_DialogDescription = _sfc_main$1$2;
      const _component_Avatar = _sfc_main$g;
      const _component_AvatarImage = _sfc_main$f;
      const _component_Tabs = _sfc_main$2$2;
      const _component_TabsList = _sfc_main$m;
      const _component_TabsTrigger = _sfc_main$1$3;
      const _component_Switch = _sfc_main$e;
      const _component_Label = _sfc_main$n;
      const _component_Button = _sfc_main$k;
      _push(ssrRenderComponent(_component_Dialog, mergeProps({
        open: _ctx.open,
        "onUpdate:open": ($event) => emit("update:open")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DialogContent, { class: "sm:max-w-[425px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                if (_push3) {
                  _push3(`<div class="flex flex-col gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_DialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\uC720\uC800 \uC815\uBCF4`);
                            } else {
                              return [
                                createTextVNode("\uC720\uC800 \uC815\uBCF4")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DialogDescription, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uC720\uC800 \uC815\uBCF4 \uD654\uBA74 \uC785\uB2C8\uB2E4. `);
                            } else {
                              return [
                                createTextVNode(" \uC720\uC800 \uC815\uBCF4 \uD654\uBA74 \uC785\uB2C8\uB2E4. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\uC720\uC800 \uC815\uBCF4")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DialogDescription, null, {
                            default: withCtx(() => [
                              createTextVNode(" \uC720\uC800 \uC815\uBCF4 \uD654\uBA74 \uC785\uB2C8\uB2E4. ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex flex-col gap-3 text-sm"${_scopeId2}><div class="flex gap-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Avatar, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a2, _b2, _c2, _d2;
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AvatarImage, {
                          src: (_b2 = (_a2 = unref(auth)) == null ? void 0 : _a2.user_metadata) == null ? void 0 : _b2.avatar_url
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AvatarImage, {
                            src: (_d2 = (_c2 = unref(auth)) == null ? void 0 : _c2.user_metadata) == null ? void 0 : _d2.avatar_url
                          }, null, 8, ["src"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div${_scopeId2}><div${_scopeId2}>${ssrInterpolate((_b = (_a = unref(auth)) == null ? void 0 : _a.user_metadata) == null ? void 0 : _b.name)}</div><div class="text-neutral-400"${_scopeId2}>${ssrInterpolate((_c = unref(auth)) == null ? void 0 : _c.email)}</div></div></div><div class="flex gap-2"${_scopeId2}><div${_scopeId2}>\uAC00\uC785\uC77C</div><div class="text-neutral-400"${_scopeId2}>${ssrInterpolate(unref(moment)((_d = unref(auth)) == null ? void 0 : _d.created_at).format("YYYY-MM-DD"))}</div></div>`);
                  _push3(ssrRenderComponent(_component_Tabs, {
                    "default-value": "account",
                    class: "w-[400px]"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_TabsList, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_TabsTrigger, { value: "account" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \uC7A5\uBC14\uAD6C\uB2C8 `);
                                  } else {
                                    return [
                                      createTextVNode(" \uC7A5\uBC14\uAD6C\uB2C8 ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_TabsTrigger, { value: "password" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \uC791\uC131\uD55C \uAE00 `);
                                  } else {
                                    return [
                                      createTextVNode(" \uC791\uC131\uD55C \uAE00 ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_TabsTrigger, { value: "password" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \uC791\uC131\uD55C \uB367\uAE00 `);
                                  } else {
                                    return [
                                      createTextVNode(" \uC791\uC131\uD55C \uB367\uAE00 ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_TabsTrigger, { value: "account" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \uC7A5\uBC14\uAD6C\uB2C8 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TabsTrigger, { value: "password" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \uC791\uC131\uD55C \uAE00 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TabsTrigger, { value: "password" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \uC791\uC131\uD55C \uB367\uAE00 ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_TabsList, null, {
                            default: withCtx(() => [
                              createVNode(_component_TabsTrigger, { value: "account" }, {
                                default: withCtx(() => [
                                  createTextVNode(" \uC7A5\uBC14\uAD6C\uB2C8 ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TabsTrigger, { value: "password" }, {
                                default: withCtx(() => [
                                  createTextVNode(" \uC791\uC131\uD55C \uAE00 ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TabsTrigger, { value: "password" }, {
                                default: withCtx(() => [
                                  createTextVNode(" \uC791\uC131\uD55C \uB367\uAE00 ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex items-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Switch, {
                    id: "airplane-mode",
                    modelValue: unref(darkmode),
                    "onUpdate:modelValue": ($event) => isRef(darkmode) ? darkmode.value = $event : null,
                    onClick: unref(toggleDarkmode)
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Label, { for: "airplane-mode" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Dark Mode`);
                      } else {
                        return [
                          createTextVNode("Dark Mode")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_Button, {
                    class: "w-fit",
                    size: "sm",
                    onClick: onLogout
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\uB85C\uADF8\uC544\uC6C3`);
                      } else {
                        return [
                          createTextVNode("\uB85C\uADF8\uC544\uC6C3")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-4" }, [
                      createVNode(_component_DialogHeader, null, {
                        default: withCtx(() => [
                          createVNode(_component_DialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\uC720\uC800 \uC815\uBCF4")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DialogDescription, null, {
                            default: withCtx(() => [
                              createTextVNode(" \uC720\uC800 \uC815\uBCF4 \uD654\uBA74 \uC785\uB2C8\uB2E4. ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "flex flex-col gap-3 text-sm" }, [
                        createVNode("div", { class: "flex gap-3" }, [
                          createVNode(_component_Avatar, null, {
                            default: withCtx(() => {
                              var _a2, _b2;
                              return [
                                createVNode(_component_AvatarImage, {
                                  src: (_b2 = (_a2 = unref(auth)) == null ? void 0 : _a2.user_metadata) == null ? void 0 : _b2.avatar_url
                                }, null, 8, ["src"])
                              ];
                            }),
                            _: 1
                          }),
                          createVNode("div", null, [
                            createVNode("div", null, toDisplayString((_f = (_e = unref(auth)) == null ? void 0 : _e.user_metadata) == null ? void 0 : _f.name), 1),
                            createVNode("div", { class: "text-neutral-400" }, toDisplayString((_g = unref(auth)) == null ? void 0 : _g.email), 1)
                          ])
                        ]),
                        createVNode("div", { class: "flex gap-2" }, [
                          createVNode("div", null, "\uAC00\uC785\uC77C"),
                          createVNode("div", { class: "text-neutral-400" }, toDisplayString(unref(moment)((_h = unref(auth)) == null ? void 0 : _h.created_at).format("YYYY-MM-DD")), 1)
                        ]),
                        createVNode(_component_Tabs, {
                          "default-value": "account",
                          class: "w-[400px]"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_TabsList, null, {
                              default: withCtx(() => [
                                createVNode(_component_TabsTrigger, { value: "account" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \uC7A5\uBC14\uAD6C\uB2C8 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TabsTrigger, { value: "password" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \uC791\uC131\uD55C \uAE00 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TabsTrigger, { value: "password" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \uC791\uC131\uD55C \uB367\uAE00 ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_Switch, {
                            id: "airplane-mode",
                            modelValue: unref(darkmode),
                            "onUpdate:modelValue": ($event) => isRef(darkmode) ? darkmode.value = $event : null,
                            onClick: unref(toggleDarkmode)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onClick"]),
                          createVNode(_component_Label, { for: "airplane-mode" }, {
                            default: withCtx(() => [
                              createTextVNode("Dark Mode")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(_component_Button, {
                          class: "w-fit",
                          size: "sm",
                          onClick: onLogout
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\uB85C\uADF8\uC544\uC6C3")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DialogContent, { class: "sm:max-w-[425px]" }, {
                default: withCtx(() => {
                  var _a, _b, _c, _d;
                  return [
                    createVNode("div", { class: "flex flex-col gap-4" }, [
                      createVNode(_component_DialogHeader, null, {
                        default: withCtx(() => [
                          createVNode(_component_DialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\uC720\uC800 \uC815\uBCF4")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DialogDescription, null, {
                            default: withCtx(() => [
                              createTextVNode(" \uC720\uC800 \uC815\uBCF4 \uD654\uBA74 \uC785\uB2C8\uB2E4. ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "flex flex-col gap-3 text-sm" }, [
                        createVNode("div", { class: "flex gap-3" }, [
                          createVNode(_component_Avatar, null, {
                            default: withCtx(() => {
                              var _a2, _b2;
                              return [
                                createVNode(_component_AvatarImage, {
                                  src: (_b2 = (_a2 = unref(auth)) == null ? void 0 : _a2.user_metadata) == null ? void 0 : _b2.avatar_url
                                }, null, 8, ["src"])
                              ];
                            }),
                            _: 1
                          }),
                          createVNode("div", null, [
                            createVNode("div", null, toDisplayString((_b = (_a = unref(auth)) == null ? void 0 : _a.user_metadata) == null ? void 0 : _b.name), 1),
                            createVNode("div", { class: "text-neutral-400" }, toDisplayString((_c = unref(auth)) == null ? void 0 : _c.email), 1)
                          ])
                        ]),
                        createVNode("div", { class: "flex gap-2" }, [
                          createVNode("div", null, "\uAC00\uC785\uC77C"),
                          createVNode("div", { class: "text-neutral-400" }, toDisplayString(unref(moment)((_d = unref(auth)) == null ? void 0 : _d.created_at).format("YYYY-MM-DD")), 1)
                        ]),
                        createVNode(_component_Tabs, {
                          "default-value": "account",
                          class: "w-[400px]"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_TabsList, null, {
                              default: withCtx(() => [
                                createVNode(_component_TabsTrigger, { value: "account" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \uC7A5\uBC14\uAD6C\uB2C8 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TabsTrigger, { value: "password" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \uC791\uC131\uD55C \uAE00 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TabsTrigger, { value: "password" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \uC791\uC131\uD55C \uB367\uAE00 ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_Switch, {
                            id: "airplane-mode",
                            modelValue: unref(darkmode),
                            "onUpdate:modelValue": ($event) => isRef(darkmode) ? darkmode.value = $event : null,
                            onClick: unref(toggleDarkmode)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onClick"]),
                          createVNode(_component_Label, { for: "airplane-mode" }, {
                            default: withCtx(() => [
                              createTextVNode("Dark Mode")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(_component_Button, {
                          class: "w-fit",
                          size: "sm",
                          onClick: onLogout
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\uB85C\uADF8\uC544\uC6C3")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dialog/user.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "youtubeList",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    wiki: {},
    selectedBook: {}
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const youTube = useYouTube();
    const emit = __emit;
    function listDelete(video_id) {
      youTube.value = youTube.value.filter(
        (item) => item.video_id !== video_id
      );
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Dialog = _sfc_main$4$1;
      const _component_DialogContent = _sfc_main$l;
      const _component_DialogHeader = _sfc_main$3$1;
      const _component_DialogTitle = _sfc_main$2$1;
      const _component_DialogDescription = _sfc_main$1$2;
      const _component_Card = _sfc_main$o;
      const _component_Button = _sfc_main$k;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(ssrRenderComponent(_component_Dialog, mergeProps({
        open: _ctx.open,
        "onUpdate:open": ($event) => emit("update:open")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DialogContent, { class: "w-5/6 max-h-96 overflow-y-scroll" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_DialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\uC7AC\uC0DD\uBAA9\uB85D`);
                            } else {
                              return [
                                createTextVNode("\uC7AC\uC0DD\uBAA9\uB85D")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DialogDescription, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uD604\uC7AC \uB4F1\uB85D\uD55C \uC7AC\uC0DD \uBAA9\uB85D\uC785\uB2C8\uB2E4. `);
                            } else {
                              return [
                                createTextVNode(" \uD604\uC7AC \uB4F1\uB85D\uD55C \uC7AC\uC0DD \uBAA9\uB85D\uC785\uB2C8\uB2E4. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\uC7AC\uC0DD\uBAA9\uB85D")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DialogDescription, null, {
                            default: withCtx(() => [
                              createTextVNode(" \uD604\uC7AC \uB4F1\uB85D\uD55C \uC7AC\uC0DD \uBAA9\uB85D\uC785\uB2C8\uB2E4. ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex flex-col gap-1"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(youTube), (data, index) => {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Card, { class: "p-2 flex flex-row justify-between gap-2 items-center" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="grow-[1]"${_scopeId3}><div class="text-sm font-bold flex gap-2"${_scopeId3}><div class="flex gap-2"${_scopeId3}><div${_scopeId3}>${ssrInterpolate(data == null ? void 0 : data.title)}</div></div><div class="flex gap-1 font-normal"${_scopeId3}><div${_scopeId3}>\uC870\uD68C\uC218</div><div${_scopeId3}>${ssrInterpolate(data == null ? void 0 : data.view_count)}</div></div></div><div class="text-sm text-neutral-400"${_scopeId3}>${ssrInterpolate(data == null ? void 0 : data.kr)} ${ssrInterpolate(data == null ? void 0 : data.op_ed)} ${ssrInterpolate(data == null ? void 0 : data.season)}\uAE30 ${ssrInterpolate(data == null ? void 0 : data.cool)}\uCFE8 </div></div><div class="shrink-0"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_Button, {
                            size: "sm",
                            variant: "secondary",
                            onClick: ($event) => listDelete(data.video_id)
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "xmark"] }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "xmark"] })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "grow-[1]" }, [
                              createVNode("div", { class: "text-sm font-bold flex gap-2" }, [
                                createVNode("div", { class: "flex gap-2" }, [
                                  createVNode("div", null, toDisplayString(data == null ? void 0 : data.title), 1)
                                ]),
                                createVNode("div", { class: "flex gap-1 font-normal" }, [
                                  createVNode("div", null, "\uC870\uD68C\uC218"),
                                  createVNode("div", null, toDisplayString(data == null ? void 0 : data.view_count), 1)
                                ])
                              ]),
                              createVNode("div", { class: "text-sm text-neutral-400" }, toDisplayString(data == null ? void 0 : data.kr) + " " + toDisplayString(data == null ? void 0 : data.op_ed) + " " + toDisplayString(data == null ? void 0 : data.season) + "\uAE30 " + toDisplayString(data == null ? void 0 : data.cool) + "\uCFE8 ", 1)
                            ]),
                            createVNode("div", { class: "shrink-0" }, [
                              createVNode(_component_Button, {
                                size: "sm",
                                variant: "secondary",
                                onClick: ($event) => listDelete(data.video_id)
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "xmark"] })
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  });
                  _push3(`<!--]--></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-4" }, [
                      createVNode(_component_DialogHeader, null, {
                        default: withCtx(() => [
                          createVNode(_component_DialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\uC7AC\uC0DD\uBAA9\uB85D")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DialogDescription, null, {
                            default: withCtx(() => [
                              createTextVNode(" \uD604\uC7AC \uB4F1\uB85D\uD55C \uC7AC\uC0DD \uBAA9\uB85D\uC785\uB2C8\uB2E4. ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "flex flex-col gap-1" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(youTube), (data, index) => {
                          return openBlock(), createBlock("div", null, [
                            createVNode(_component_Card, { class: "p-2 flex flex-row justify-between gap-2 items-center" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "grow-[1]" }, [
                                  createVNode("div", { class: "text-sm font-bold flex gap-2" }, [
                                    createVNode("div", { class: "flex gap-2" }, [
                                      createVNode("div", null, toDisplayString(data == null ? void 0 : data.title), 1)
                                    ]),
                                    createVNode("div", { class: "flex gap-1 font-normal" }, [
                                      createVNode("div", null, "\uC870\uD68C\uC218"),
                                      createVNode("div", null, toDisplayString(data == null ? void 0 : data.view_count), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "text-sm text-neutral-400" }, toDisplayString(data == null ? void 0 : data.kr) + " " + toDisplayString(data == null ? void 0 : data.op_ed) + " " + toDisplayString(data == null ? void 0 : data.season) + "\uAE30 " + toDisplayString(data == null ? void 0 : data.cool) + "\uCFE8 ", 1)
                                ]),
                                createVNode("div", { class: "shrink-0" }, [
                                  createVNode(_component_Button, {
                                    size: "sm",
                                    variant: "secondary",
                                    onClick: ($event) => listDelete(data.video_id)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "xmark"] })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ]);
                        }), 256))
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DialogContent, { class: "w-5/6 max-h-96 overflow-y-scroll" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col gap-4" }, [
                    createVNode(_component_DialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_DialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\uC7AC\uC0DD\uBAA9\uB85D")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DialogDescription, null, {
                          default: withCtx(() => [
                            createTextVNode(" \uD604\uC7AC \uB4F1\uB85D\uD55C \uC7AC\uC0DD \uBAA9\uB85D\uC785\uB2C8\uB2E4. ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex flex-col gap-1" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(youTube), (data, index) => {
                        return openBlock(), createBlock("div", null, [
                          createVNode(_component_Card, { class: "p-2 flex flex-row justify-between gap-2 items-center" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "grow-[1]" }, [
                                createVNode("div", { class: "text-sm font-bold flex gap-2" }, [
                                  createVNode("div", { class: "flex gap-2" }, [
                                    createVNode("div", null, toDisplayString(data == null ? void 0 : data.title), 1)
                                  ]),
                                  createVNode("div", { class: "flex gap-1 font-normal" }, [
                                    createVNode("div", null, "\uC870\uD68C\uC218"),
                                    createVNode("div", null, toDisplayString(data == null ? void 0 : data.view_count), 1)
                                  ])
                                ]),
                                createVNode("div", { class: "text-sm text-neutral-400" }, toDisplayString(data == null ? void 0 : data.kr) + " " + toDisplayString(data == null ? void 0 : data.op_ed) + " " + toDisplayString(data == null ? void 0 : data.season) + "\uAE30 " + toDisplayString(data == null ? void 0 : data.cool) + "\uCFE8 ", 1)
                              ]),
                              createVNode("div", { class: "shrink-0" }, [
                                createVNode(_component_Button, {
                                  size: "sm",
                                  variant: "secondary",
                                  onClick: ($event) => listDelete(data.video_id)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "xmark"] })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]);
                      }), 256))
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dialog/youtubeList.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "email",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const isOpen = ref(false);
    const data = ref({
      title: "",
      content: "",
      tel: "",
      email: ""
    });
    function onOpen() {
      isOpen.value = !isOpen.value;
    }
    async function email() {
      await useFetch("/api/email", {
        method: "POST",
        body: JSON.stringify(data.value),
        onResponse({ request, response, options }) {
          console.log(response);
        }
      }, "$veX7vE1JZn");
    }
    __expose({ onOpen });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Dialog = _sfc_main$4$1;
      const _component_DialogContent = _sfc_main$l;
      const _component_DialogHeader = _sfc_main$3$1;
      const _component_DialogTitle = _sfc_main$2$1;
      const _component_DialogDescription = _sfc_main$1$2;
      const _component_Badge = _sfc_main$p;
      const _component_Label = _sfc_main$n;
      const _component_Input = _sfc_main$q;
      const _component_Textarea = _sfc_main$r;
      const _component_DialogFooter = _sfc_main$s;
      const _component_Button = _sfc_main$k;
      _push(ssrRenderComponent(_component_Dialog, mergeProps({
        "onUpdate:open": onOpen,
        open: unref(isOpen)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DialogContent, { class: "w-5/6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\uC774\uBA54\uC77C \uC591\uC2DD`);
                            } else {
                              return [
                                createTextVNode("\uC774\uBA54\uC77C \uC591\uC2DD")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DialogDescription, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uB9CC\uB4E0\uC774\uC5D0\uAC8C \uAD81\uAE08\uD55C\uC810\uC774\uB098 \uC9C8\uBB38\uC0AC\uD56D\uC774 \uC788\uC73C\uC2DC\uBA74 \uC774\uBA54\uC77C\uC744 \uBCF4\uB0B4\uC8FC\uC138\uC694. `);
                              _push5(ssrRenderComponent(_component_Badge, { variant: "outline" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\uC5F0\uB77D\uCC98`);
                                  } else {
                                    return [
                                      createTextVNode("\uC5F0\uB77D\uCC98")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`, `);
                              _push5(ssrRenderComponent(_component_Badge, { variant: "outline" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\uC774\uBA54\uC77C \uC8FC\uC18C`);
                                  } else {
                                    return [
                                      createTextVNode("\uC774\uBA54\uC77C \uC8FC\uC18C")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`\uB294 \uD544\uC218\uB294 \uC544\uB2C8\uC9C0\uB9CC, \uB2F5\uBCC0\uC744 \uC6D0\uD558\uC2DC\uBA74 \uB0A8\uACA8\uC8FC\uC138\uC694. (\uAD6C\uC9C1\uB3C4 \uC6D0\uD569\uB2C8\uB2E4 ^^;;) `);
                            } else {
                              return [
                                createTextVNode(" \uB9CC\uB4E0\uC774\uC5D0\uAC8C \uAD81\uAE08\uD55C\uC810\uC774\uB098 \uC9C8\uBB38\uC0AC\uD56D\uC774 \uC788\uC73C\uC2DC\uBA74 \uC774\uBA54\uC77C\uC744 \uBCF4\uB0B4\uC8FC\uC138\uC694. "),
                                createVNode(_component_Badge, { variant: "outline" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\uC5F0\uB77D\uCC98")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(", "),
                                createVNode(_component_Badge, { variant: "outline" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\uC774\uBA54\uC77C \uC8FC\uC18C")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode("\uB294 \uD544\uC218\uB294 \uC544\uB2C8\uC9C0\uB9CC, \uB2F5\uBCC0\uC744 \uC6D0\uD558\uC2DC\uBA74 \uB0A8\uACA8\uC8FC\uC138\uC694. (\uAD6C\uC9C1\uB3C4 \uC6D0\uD569\uB2C8\uB2E4 ^^;;) ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\uC774\uBA54\uC77C \uC591\uC2DD")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DialogDescription, null, {
                            default: withCtx(() => [
                              createTextVNode(" \uB9CC\uB4E0\uC774\uC5D0\uAC8C \uAD81\uAE08\uD55C\uC810\uC774\uB098 \uC9C8\uBB38\uC0AC\uD56D\uC774 \uC788\uC73C\uC2DC\uBA74 \uC774\uBA54\uC77C\uC744 \uBCF4\uB0B4\uC8FC\uC138\uC694. "),
                              createVNode(_component_Badge, { variant: "outline" }, {
                                default: withCtx(() => [
                                  createTextVNode("\uC5F0\uB77D\uCC98")
                                ]),
                                _: 1
                              }),
                              createTextVNode(", "),
                              createVNode(_component_Badge, { variant: "outline" }, {
                                default: withCtx(() => [
                                  createTextVNode("\uC774\uBA54\uC77C \uC8FC\uC18C")
                                ]),
                                _: 1
                              }),
                              createTextVNode("\uB294 \uD544\uC218\uB294 \uC544\uB2C8\uC9C0\uB9CC, \uB2F5\uBCC0\uC744 \uC6D0\uD558\uC2DC\uBA74 \uB0A8\uACA8\uC8FC\uC138\uC694. (\uAD6C\uC9C1\uB3C4 \uC6D0\uD569\uB2C8\uB2E4 ^^;;) ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="grid gap-4 py-4"${_scopeId2}><div class="grid grid-cols-4 items-center gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, {
                    for: "title",
                    class: "text-right"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uC81C\uBAA9 `);
                      } else {
                        return [
                          createTextVNode(" \uC81C\uBAA9 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    modelValue: unref(data).title,
                    "onUpdate:modelValue": ($event) => unref(data).title = $event,
                    placeholder: "\uAD81\uAE08\uD55C \uC0AC\uD56D\uC774 \uC788\uC2B5\uB2C8\uB2E4.",
                    class: "col-span-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid grid-cols-4 items-center gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, {
                    for: "content",
                    class: "text-right"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uB0B4\uC6A9 `);
                      } else {
                        return [
                          createTextVNode(" \uB0B4\uC6A9 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Textarea, {
                    modelValue: unref(data).content,
                    "onUpdate:modelValue": ($event) => unref(data).content = $event,
                    placeholder: "Type your message here.",
                    class: "col-span-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid grid-cols-4 items-center gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, {
                    for: "tel",
                    class: "text-right"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uC5F0\uB77D\uCC98 `);
                      } else {
                        return [
                          createTextVNode(" \uC5F0\uB77D\uCC98 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    modelValue: unref(data).tel,
                    "onUpdate:modelValue": ($event) => unref(data).tel = $event,
                    placeholder: "010-000-0000",
                    class: "col-span-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid grid-cols-4 items-center gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, {
                    for: "email",
                    class: "text-right"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uC774\uBA54\uC77C \uC8FC\uC18C `);
                      } else {
                        return [
                          createTextVNode(" \uC774\uBA54\uC77C \uC8FC\uC18C ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    modelValue: unref(data).email,
                    "onUpdate:modelValue": ($event) => unref(data).email = $event,
                    placeholder: "inpiniti@gmail.com",
                    class: "col-span-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  _push3(ssrRenderComponent(_component_DialogFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Button, { onClick: email }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uC774\uBA54\uC77C \uBCF4\uB0B4\uAE30 `);
                            } else {
                              return [
                                createTextVNode(" \uC774\uBA54\uC77C \uBCF4\uB0B4\uAE30 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Button, { onClick: email }, {
                            default: withCtx(() => [
                              createTextVNode(" \uC774\uBA54\uC77C \uBCF4\uB0B4\uAE30 ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_DialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\uC774\uBA54\uC77C \uC591\uC2DD")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DialogDescription, null, {
                          default: withCtx(() => [
                            createTextVNode(" \uB9CC\uB4E0\uC774\uC5D0\uAC8C \uAD81\uAE08\uD55C\uC810\uC774\uB098 \uC9C8\uBB38\uC0AC\uD56D\uC774 \uC788\uC73C\uC2DC\uBA74 \uC774\uBA54\uC77C\uC744 \uBCF4\uB0B4\uC8FC\uC138\uC694. "),
                            createVNode(_component_Badge, { variant: "outline" }, {
                              default: withCtx(() => [
                                createTextVNode("\uC5F0\uB77D\uCC98")
                              ]),
                              _: 1
                            }),
                            createTextVNode(", "),
                            createVNode(_component_Badge, { variant: "outline" }, {
                              default: withCtx(() => [
                                createTextVNode("\uC774\uBA54\uC77C \uC8FC\uC18C")
                              ]),
                              _: 1
                            }),
                            createTextVNode("\uB294 \uD544\uC218\uB294 \uC544\uB2C8\uC9C0\uB9CC, \uB2F5\uBCC0\uC744 \uC6D0\uD558\uC2DC\uBA74 \uB0A8\uACA8\uC8FC\uC138\uC694. (\uAD6C\uC9C1\uB3C4 \uC6D0\uD569\uB2C8\uB2E4 ^^;;) ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "grid gap-4 py-4" }, [
                      createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                        createVNode(_component_Label, {
                          for: "title",
                          class: "text-right"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uC81C\uBAA9 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          modelValue: unref(data).title,
                          "onUpdate:modelValue": ($event) => unref(data).title = $event,
                          placeholder: "\uAD81\uAE08\uD55C \uC0AC\uD56D\uC774 \uC788\uC2B5\uB2C8\uB2E4.",
                          class: "col-span-3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                        createVNode(_component_Label, {
                          for: "content",
                          class: "text-right"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uB0B4\uC6A9 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Textarea, {
                          modelValue: unref(data).content,
                          "onUpdate:modelValue": ($event) => unref(data).content = $event,
                          placeholder: "Type your message here.",
                          class: "col-span-3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                        createVNode(_component_Label, {
                          for: "tel",
                          class: "text-right"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uC5F0\uB77D\uCC98 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          modelValue: unref(data).tel,
                          "onUpdate:modelValue": ($event) => unref(data).tel = $event,
                          placeholder: "010-000-0000",
                          class: "col-span-3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                        createVNode(_component_Label, {
                          for: "email",
                          class: "text-right"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uC774\uBA54\uC77C \uC8FC\uC18C ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          modelValue: unref(data).email,
                          "onUpdate:modelValue": ($event) => unref(data).email = $event,
                          placeholder: "inpiniti@gmail.com",
                          class: "col-span-3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode(_component_DialogFooter, null, {
                      default: withCtx(() => [
                        createVNode(_component_Button, { onClick: email }, {
                          default: withCtx(() => [
                            createTextVNode(" \uC774\uBA54\uC77C \uBCF4\uB0B4\uAE30 ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DialogContent, { class: "w-5/6" }, {
                default: withCtx(() => [
                  createVNode(_component_DialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_DialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\uC774\uBA54\uC77C \uC591\uC2DD")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DialogDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(" \uB9CC\uB4E0\uC774\uC5D0\uAC8C \uAD81\uAE08\uD55C\uC810\uC774\uB098 \uC9C8\uBB38\uC0AC\uD56D\uC774 \uC788\uC73C\uC2DC\uBA74 \uC774\uBA54\uC77C\uC744 \uBCF4\uB0B4\uC8FC\uC138\uC694. "),
                          createVNode(_component_Badge, { variant: "outline" }, {
                            default: withCtx(() => [
                              createTextVNode("\uC5F0\uB77D\uCC98")
                            ]),
                            _: 1
                          }),
                          createTextVNode(", "),
                          createVNode(_component_Badge, { variant: "outline" }, {
                            default: withCtx(() => [
                              createTextVNode("\uC774\uBA54\uC77C \uC8FC\uC18C")
                            ]),
                            _: 1
                          }),
                          createTextVNode("\uB294 \uD544\uC218\uB294 \uC544\uB2C8\uC9C0\uB9CC, \uB2F5\uBCC0\uC744 \uC6D0\uD558\uC2DC\uBA74 \uB0A8\uACA8\uC8FC\uC138\uC694. (\uAD6C\uC9C1\uB3C4 \uC6D0\uD569\uB2C8\uB2E4 ^^;;) ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "grid gap-4 py-4" }, [
                    createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                      createVNode(_component_Label, {
                        for: "title",
                        class: "text-right"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC81C\uBAA9 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        modelValue: unref(data).title,
                        "onUpdate:modelValue": ($event) => unref(data).title = $event,
                        placeholder: "\uAD81\uAE08\uD55C \uC0AC\uD56D\uC774 \uC788\uC2B5\uB2C8\uB2E4.",
                        class: "col-span-3"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                      createVNode(_component_Label, {
                        for: "content",
                        class: "text-right"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uB0B4\uC6A9 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Textarea, {
                        modelValue: unref(data).content,
                        "onUpdate:modelValue": ($event) => unref(data).content = $event,
                        placeholder: "Type your message here.",
                        class: "col-span-3"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                      createVNode(_component_Label, {
                        for: "tel",
                        class: "text-right"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC5F0\uB77D\uCC98 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        modelValue: unref(data).tel,
                        "onUpdate:modelValue": ($event) => unref(data).tel = $event,
                        placeholder: "010-000-0000",
                        class: "col-span-3"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                      createVNode(_component_Label, {
                        for: "email",
                        class: "text-right"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC774\uBA54\uC77C \uC8FC\uC18C ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        modelValue: unref(data).email,
                        "onUpdate:modelValue": ($event) => unref(data).email = $event,
                        placeholder: "inpiniti@gmail.com",
                        class: "col-span-3"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  createVNode(_component_DialogFooter, null, {
                    default: withCtx(() => [
                      createVNode(_component_Button, { onClick: email }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC774\uBA54\uC77C \uBCF4\uB0B4\uAE30 ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dialog/email.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "Menubar",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    defaultValue: {},
    dir: {},
    loop: { type: Boolean },
    class: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(MenubarRoot), mergeProps(props, {
        class: unref(cn)(
          "flex h-10 items-center space-x-1 rounded-md border border-border p-1",
          props.class
        ),
        "onUpdate:modelValue": ($event) => emits("update:modelValue", $event)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/menubar/Menubar.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "MenubarItem",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    inset: { type: Boolean },
    class: {}
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(MenubarItem), mergeProps(props, {
        class: [
          unref(cn)(
            "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            _ctx.inset && "pl-8",
            props.class
          )
        ],
        onSelect: ($event) => emits("select", $event)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/menubar/MenubarItem.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "MenubarContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: { default: 8 },
    align: { default: "start" },
    alignOffset: { default: -4 },
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(MenubarPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MenubarContent), {
              loop: props.loop,
              "as-child": props.asChild,
              "side-offset": props.sideOffset,
              side: props.side,
              align: props.align,
              "align-offset": props.alignOffset,
              class: unref(cn)(
                "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                props.class
              )
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MenubarContent), {
                loop: props.loop,
                "as-child": props.asChild,
                "side-offset": props.sideOffset,
                side: props.side,
                align: props.align,
                "align-offset": props.alignOffset,
                class: unref(cn)(
                  "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                  props.class
                )
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 8, ["loop", "as-child", "side-offset", "side", "align", "align-offset", "class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/menubar/MenubarContent.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "MenubarMenu",
  __ssrInlineRender: true,
  props: {
    value: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(MenubarMenu), mergeProps(props, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/menubar/MenubarMenu.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "MenubarRadioGroup",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(MenubarRadioGroup), mergeProps(props, {
        "onUpdate:modelValue": ($event) => emits("update:modelValue", $event)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/menubar/MenubarRadioGroup.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "MenubarRadioItem",
  __ssrInlineRender: true,
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(MenubarRadioItem), mergeProps(props, {
        class: [
          unref(cn)(
            "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            props.class
          )
        ],
        onSelect: ($event) => emits("select", $event)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MenubarItemIndicator), { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Circle), { class: "h-2 w-2 fill-curren" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Circle), { class: "h-2 w-2 fill-curren" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode(unref(MenubarItemIndicator), { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, {
                default: withCtx(() => [
                  createVNode(unref(Circle), { class: "h-2 w-2 fill-curren" })
                ]),
                _: 1
              }),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/menubar/MenubarRadioItem.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "MenubarSeparator",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(MenubarSeparator), mergeProps({
        class: unref(cn)("-mx-1 my-1 h-px bg-secondary", (_a = _ctx.$attrs.class) != null ? _a : "")
      }, props, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/menubar/MenubarSeparator.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "MenubarTrigger",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(MenubarTrigger), mergeProps(props, {
        class: unref(cn)(
          "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/menubar/MenubarTrigger.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Menu",
  __ssrInlineRender: true,
  setup(__props) {
    const auth = useAuth();
    usePlayer();
    useYoutubePlayerRef();
    const nowVideo = useNowYouTube();
    const state = useYoutubeState();
    function email() {
      emailRef.value.onOpen();
    }
    function github() {
      (void 0).open("https://github.com/inpiniti");
    }
    function blog() {
      (void 0).open("https://velog.io/@inpiniti/posts");
    }
    const emailRef = ref();
    const youtubePlayerRef = ref();
    const sheetSideMenuOpen = ref(false);
    const dialogLoginOpen = ref(false);
    const dialogUserOpen = ref(false);
    const dialogYoutubeListOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SheetSide = _sfc_main$i;
      const _component_DialogLogin = _sfc_main$h;
      const _component_DialogUser = _sfc_main$d;
      const _component_DialogYoutubeList = _sfc_main$c;
      const _component_DialogEmail = _sfc_main$b;
      const _component_Menubar = _sfc_main$a;
      const _component_MenubarMenu = _sfc_main$7;
      const _component_MenubarTrigger = _sfc_main$3;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_MenubarContent = _sfc_main$8;
      const _component_MenubarRadioGroup = _sfc_main$6;
      const _component_MenubarRadioItem = _sfc_main$5;
      const _component_MenubarSeparator = _sfc_main$4;
      const _component_MenubarItem = _sfc_main$9;
      const _component_Badge = _sfc_main$p;
      const _component_Avatar = _sfc_main$g;
      const _component_AvatarImage = _sfc_main$f;
      const _component_Button = _sfc_main$k;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-9ad5bb0d>`);
      _push(ssrRenderComponent(_component_SheetSide, {
        open: unref(sheetSideMenuOpen),
        "onUpdate:open": ($event) => sheetSideMenuOpen.value = false
      }, null, _parent));
      _push(ssrRenderComponent(_component_DialogLogin, {
        open: unref(dialogLoginOpen),
        "onUpdate:open": ($event) => dialogLoginOpen.value = false
      }, null, _parent));
      _push(ssrRenderComponent(_component_DialogUser, {
        open: unref(dialogUserOpen),
        "onUpdate:open": ($event) => dialogUserOpen.value = false
      }, null, _parent));
      _push(ssrRenderComponent(_component_DialogYoutubeList, {
        open: unref(dialogYoutubeListOpen),
        "onUpdate:open": ($event) => dialogYoutubeListOpen.value = !unref(dialogYoutubeListOpen)
      }, null, _parent));
      _push(ssrRenderComponent(_component_DialogEmail, {
        ref_key: "emailRef",
        ref: emailRef
      }, null, _parent));
      _push(ssrRenderComponent(_component_Menubar, { class: "lg:border-border border-0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-row justify-between w-full" data-v-9ad5bb0d${_scopeId}><div class="flex" data-v-9ad5bb0d${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MenubarMenu, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MenubarTrigger, {
                    class: "xl:hidden block",
                    onClick: ($event) => sheetSideMenuOpen.value = true
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "bars"] }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_font_awesome_icon, { icon: ["fas", "bars"] })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_MenubarTrigger, {
                      class: "xl:hidden block",
                      onClick: ($event) => sheetSideMenuOpen.value = true
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_font_awesome_icon, { icon: ["fas", "bars"] })
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_MenubarMenu, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MenubarTrigger, { class: "font-bold" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`inpiniti`);
                      } else {
                        return [
                          createTextVNode("inpiniti")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_MenubarContent, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_MenubarRadioGroup, { value: "benoit" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_MenubarRadioItem, {
                                value: "andy",
                                onClick: email
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \uC774\uBA54\uC77C `);
                                  } else {
                                    return [
                                      createTextVNode(" \uC774\uBA54\uC77C ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_MenubarRadioItem, {
                                value: "benoit",
                                onClick: github
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` github `);
                                  } else {
                                    return [
                                      createTextVNode(" github ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_MenubarRadioItem, {
                                value: "Luis",
                                onClick: blog
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` blog `);
                                  } else {
                                    return [
                                      createTextVNode(" blog ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_MenubarRadioItem, {
                                  value: "andy",
                                  onClick: email
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \uC774\uBA54\uC77C ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_MenubarRadioItem, {
                                  value: "benoit",
                                  onClick: github
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" github ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_MenubarRadioItem, {
                                  value: "Luis",
                                  onClick: blog
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" blog ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_MenubarSeparator, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_MenubarItem, { inset: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Edit... `);
                            } else {
                              return [
                                createTextVNode(" Edit... ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_MenubarSeparator, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_MenubarItem, { inset: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Add Profile... `);
                            } else {
                              return [
                                createTextVNode(" Add Profile... ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_MenubarRadioGroup, { value: "benoit" }, {
                            default: withCtx(() => [
                              createVNode(_component_MenubarRadioItem, {
                                value: "andy",
                                onClick: email
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \uC774\uBA54\uC77C ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_MenubarRadioItem, {
                                value: "benoit",
                                onClick: github
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" github ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_MenubarRadioItem, {
                                value: "Luis",
                                onClick: blog
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" blog ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarSeparator),
                          createVNode(_component_MenubarItem, { inset: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" Edit... ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarSeparator),
                          createVNode(_component_MenubarItem, { inset: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" Add Profile... ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_MenubarTrigger, { class: "font-bold" }, {
                      default: withCtx(() => [
                        createTextVNode("inpiniti")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_MenubarContent, null, {
                      default: withCtx(() => [
                        createVNode(_component_MenubarRadioGroup, { value: "benoit" }, {
                          default: withCtx(() => [
                            createVNode(_component_MenubarRadioItem, {
                              value: "andy",
                              onClick: email
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \uC774\uBA54\uC77C ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_MenubarRadioItem, {
                              value: "benoit",
                              onClick: github
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" github ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_MenubarRadioItem, {
                              value: "Luis",
                              onClick: blog
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" blog ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MenubarSeparator),
                        createVNode(_component_MenubarItem, { inset: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" Edit... ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MenubarSeparator),
                        createVNode(_component_MenubarItem, { inset: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" Add Profile... ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-center pr-4" data-v-9ad5bb0d${_scopeId}><div class="youtube-player" data-v-9ad5bb0d${_scopeId}><div data-v-9ad5bb0d${_scopeId}></div></div><div class="flex items-center" data-v-9ad5bb0d${_scopeId}>`);
            if (unref(nowVideo)) {
              _push2(ssrRenderComponent(_component_Badge, {
                variant: "outline",
                class: "w-20 marquee cursor-pointer",
                onClick: ($event) => dialogYoutubeListOpen.value = true
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
                  if (_push3) {
                    _push3(`${ssrInterpolate((_a = unref(nowVideo)) == null ? void 0 : _a.title)} ${ssrInterpolate((_b = unref(nowVideo)) == null ? void 0 : _b.kr)} ${ssrInterpolate((_c = unref(nowVideo)) == null ? void 0 : _c.season)}\uAE30 ${ssrInterpolate((_d = unref(nowVideo)) == null ? void 0 : _d.cool)}\uCFE8 ${ssrInterpolate((_e = unref(nowVideo)) == null ? void 0 : _e.op_ed)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString((_f = unref(nowVideo)) == null ? void 0 : _f.title) + " " + toDisplayString((_g = unref(nowVideo)) == null ? void 0 : _g.kr) + " " + toDisplayString((_h = unref(nowVideo)) == null ? void 0 : _h.season) + "\uAE30 " + toDisplayString((_i = unref(nowVideo)) == null ? void 0 : _i.cool) + "\uCFE8 " + toDisplayString((_j = unref(nowVideo)) == null ? void 0 : _j.op_ed), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="cursor-pointer p-2" data-v-9ad5bb0d${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "backward-step"] }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (unref(state) != 1) {
              _push2(`<div class="cursor-pointer p-2" data-v-9ad5bb0d${_scopeId}>`);
              _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "play"] }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(state) == 1) {
              _push2(`<div class="cursor-pointer p-2" data-v-9ad5bb0d${_scopeId}>`);
              _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "stop"] }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="cursor-pointer p-2" data-v-9ad5bb0d${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "forward-step"] }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            if (unref(auth)) {
              _push2(ssrRenderComponent(_component_Avatar, {
                class: "w-7 h-7 cursor-pointer",
                onClick: ($event) => dialogUserOpen.value = true
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a, _b, _c, _d;
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_AvatarImage, {
                      src: (_b = (_a = unref(auth)) == null ? void 0 : _a.user_metadata) == null ? void 0 : _b.avatar_url
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_AvatarImage, {
                        src: (_d = (_c = unref(auth)) == null ? void 0 : _c.user_metadata) == null ? void 0 : _d.avatar_url
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_Button, {
                variant: "ghost",
                onClick: ($event) => dialogLoginOpen.value = true
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \uC548\uB155\uD558\uC138\uC694. `);
                  } else {
                    return [
                      createTextVNode(" \uC548\uB155\uD558\uC138\uC694. ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
            _push2(ssrRenderComponent(_component_Button, {
              variant: "ghost",
              onClick: ($event) => ("useDarkmode" in _ctx ? _ctx.useDarkmode : unref(useDarkmode))().toggleDarkmode()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` dark `);
                } else {
                  return [
                    createTextVNode(" dark ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-row justify-between w-full" }, [
                createVNode("div", { class: "flex" }, [
                  createVNode(_component_MenubarMenu, null, {
                    default: withCtx(() => [
                      createVNode(_component_MenubarTrigger, {
                        class: "xl:hidden block",
                        onClick: ($event) => sheetSideMenuOpen.value = true
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_font_awesome_icon, { icon: ["fas", "bars"] })
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_MenubarMenu, null, {
                    default: withCtx(() => [
                      createVNode(_component_MenubarTrigger, { class: "font-bold" }, {
                        default: withCtx(() => [
                          createTextVNode("inpiniti")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_MenubarContent, null, {
                        default: withCtx(() => [
                          createVNode(_component_MenubarRadioGroup, { value: "benoit" }, {
                            default: withCtx(() => [
                              createVNode(_component_MenubarRadioItem, {
                                value: "andy",
                                onClick: email
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \uC774\uBA54\uC77C ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_MenubarRadioItem, {
                                value: "benoit",
                                onClick: github
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" github ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_MenubarRadioItem, {
                                value: "Luis",
                                onClick: blog
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" blog ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarSeparator),
                          createVNode(_component_MenubarItem, { inset: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" Edit... ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarSeparator),
                          createVNode(_component_MenubarItem, { inset: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" Add Profile... ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "flex items-center justify-center pr-4" }, [
                  createVNode("div", { class: "youtube-player" }, [
                    createVNode("div", {
                      ref_key: "youtubePlayerRef",
                      ref: youtubePlayerRef
                    }, null, 512)
                  ]),
                  createVNode("div", { class: "flex items-center" }, [
                    unref(nowVideo) ? (openBlock(), createBlock(_component_Badge, {
                      key: 0,
                      variant: "outline",
                      class: "w-20 marquee cursor-pointer",
                      onClick: ($event) => dialogYoutubeListOpen.value = true
                    }, {
                      default: withCtx(() => {
                        var _a, _b, _c, _d, _e;
                        return [
                          createTextVNode(toDisplayString((_a = unref(nowVideo)) == null ? void 0 : _a.title) + " " + toDisplayString((_b = unref(nowVideo)) == null ? void 0 : _b.kr) + " " + toDisplayString((_c = unref(nowVideo)) == null ? void 0 : _c.season) + "\uAE30 " + toDisplayString((_d = unref(nowVideo)) == null ? void 0 : _d.cool) + "\uCFE8 " + toDisplayString((_e = unref(nowVideo)) == null ? void 0 : _e.op_ed), 1)
                        ];
                      }),
                      _: 1
                    }, 8, ["onClick"])) : createCommentVNode("", true),
                    createVNode("div", {
                      onClick: "prev" in _ctx ? _ctx.prev : unref(prev),
                      class: "cursor-pointer p-2"
                    }, [
                      createVNode(_component_font_awesome_icon, { icon: ["fas", "backward-step"] })
                    ], 8, ["onClick"]),
                    unref(state) != 1 ? (openBlock(), createBlock("div", {
                      key: 1,
                      onClick: "play" in _ctx ? _ctx.play : unref(play),
                      class: "cursor-pointer p-2"
                    }, [
                      createVNode(_component_font_awesome_icon, { icon: ["fas", "play"] })
                    ], 8, ["onClick"])) : createCommentVNode("", true),
                    unref(state) == 1 ? (openBlock(), createBlock("div", {
                      key: 2,
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
                  ]),
                  unref(auth) ? (openBlock(), createBlock(_component_Avatar, {
                    key: 0,
                    class: "w-7 h-7 cursor-pointer",
                    onClick: ($event) => dialogUserOpen.value = true
                  }, {
                    default: withCtx(() => {
                      var _a, _b;
                      return [
                        createVNode(_component_AvatarImage, {
                          src: (_b = (_a = unref(auth)) == null ? void 0 : _a.user_metadata) == null ? void 0 : _b.avatar_url
                        }, null, 8, ["src"])
                      ];
                    }),
                    _: 1
                  }, 8, ["onClick"])) : (openBlock(), createBlock(_component_Button, {
                    key: 2,
                    variant: "ghost",
                    onClick: ($event) => dialogLoginOpen.value = true
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \uC548\uB155\uD558\uC138\uC694. ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])),
                  createVNode(_component_Button, {
                    variant: "ghost",
                    onClick: ($event) => ("useDarkmode" in _ctx ? _ctx.useDarkmode : unref(useDarkmode))().toggleDarkmode()
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" dark ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/Menu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-9ad5bb0d"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Side",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = _sfc_main$o;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Button = _sfc_main$k;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(ssrRenderComponent(_component_Card, mergeProps({ class: "w-56" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4 py-4"${_scopeId}><div class="px-3 py-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2 class="mb-2 px-4 text-lg font-semibold tracking-tight"${_scopeId2}>\uB9CC\uD654\uCC45</h2>`);
                } else {
                  return [
                    createVNode("h2", { class: "mb-2 px-4 text-lg font-semibold tracking-tight" }, "\uB9CC\uD654\uCC45")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="space-y-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/book/list" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    variant: unref(route).path == "/book/list" ? `secondary` : `ghost`,
                    class: "w-full justify-start flex gap-2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "database"] }, null, _parent4, _scopeId3));
                        _push4(` \uB370\uC774\uD130\uBCA0\uC774\uC2A4 `);
                      } else {
                        return [
                          createVNode(_component_font_awesome_icon, { icon: ["fas", "database"] }),
                          createTextVNode(" \uB370\uC774\uD130\uBCA0\uC774\uC2A4 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      variant: unref(route).path == "/book/list" ? `secondary` : `ghost`,
                      class: "w-full justify-start flex gap-2"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_font_awesome_icon, { icon: ["fas", "database"] }),
                        createTextVNode(" \uB370\uC774\uD130\uBCA0\uC774\uC2A4 ")
                      ]),
                      _: 1
                    }, 8, ["variant"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/book/chart" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    variant: unref(route).path == "/book/chart" ? `secondary` : `ghost`,
                    class: "w-full justify-start flex gap-2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chart-line"] }, null, _parent4, _scopeId3));
                        _push4(` \uCC28\uD2B8 `);
                      } else {
                        return [
                          createVNode(_component_font_awesome_icon, { icon: ["fas", "chart-line"] }),
                          createTextVNode(" \uCC28\uD2B8 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      variant: unref(route).path == "/book/chart" ? `secondary` : `ghost`,
                      class: "w-full justify-start flex gap-2"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_font_awesome_icon, { icon: ["fas", "chart-line"] }),
                        createTextVNode(" \uCC28\uD2B8 ")
                      ]),
                      _: 1
                    }, 8, ["variant"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/book/board" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    variant: unref(route).path == "/book/board" ? `secondary` : `ghost`,
                    class: "w-full justify-start flex gap-2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_font_awesome_icon, { icon: ["far", "newspaper"] }, null, _parent4, _scopeId3));
                        _push4(` \uAC8C\uC2DC\uD310 `);
                      } else {
                        return [
                          createVNode(_component_font_awesome_icon, { icon: ["far", "newspaper"] }),
                          createTextVNode(" \uAC8C\uC2DC\uD310 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      variant: unref(route).path == "/book/board" ? `secondary` : `ghost`,
                      class: "w-full justify-start flex gap-2"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_font_awesome_icon, { icon: ["far", "newspaper"] }),
                        createTextVNode(" \uAC8C\uC2DC\uD310 ")
                      ]),
                      _: 1
                    }, 8, ["variant"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/book/youtube" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    variant: unref(route).path == "/book/youtube" ? `secondary` : `ghost`,
                    class: "w-full justify-start flex gap-2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fab", "youtube"] }, null, _parent4, _scopeId3));
                        _push4(` \uC720\uD29C\uBE0C `);
                      } else {
                        return [
                          createVNode(_component_font_awesome_icon, { icon: ["fab", "youtube"] }),
                          createTextVNode(" \uC720\uD29C\uBE0C ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      variant: unref(route).path == "/book/youtube" ? `secondary` : `ghost`,
                      class: "w-full justify-start flex gap-2"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_font_awesome_icon, { icon: ["fab", "youtube"] }),
                        createTextVNode(" \uC720\uD29C\uBE0C ")
                      ]),
                      _: 1
                    }, 8, ["variant"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/book/music" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    variant: unref(route).path == "/book/music" ? `secondary` : `ghost`,
                    class: "w-full justify-start flex gap-2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "music"] }, null, _parent4, _scopeId3));
                        _push4(` \uC74C\uC545 `);
                      } else {
                        return [
                          createVNode(_component_font_awesome_icon, { icon: ["fas", "music"] }),
                          createTextVNode(" \uC74C\uC545 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      variant: unref(route).path == "/book/music" ? `secondary` : `ghost`,
                      class: "w-full justify-start flex gap-2"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_font_awesome_icon, { icon: ["fas", "music"] }),
                        createTextVNode(" \uC74C\uC545 ")
                      ]),
                      _: 1
                    }, 8, ["variant"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/book/sale" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    variant: unref(route).path == "/book/sale" ? `secondary` : `ghost`,
                    class: "w-full justify-start flex gap-2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "book"] }, null, _parent4, _scopeId3));
                        _push4(` \uB3C4\uC11C `);
                      } else {
                        return [
                          createVNode(_component_font_awesome_icon, { icon: ["fas", "book"] }),
                          createTextVNode(" \uB3C4\uC11C ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      variant: unref(route).path == "/book/sale" ? `secondary` : `ghost`,
                      class: "w-full justify-start flex gap-2"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_font_awesome_icon, { icon: ["fas", "book"] }),
                        createTextVNode(" \uB3C4\uC11C ")
                      ]),
                      _: 1
                    }, 8, ["variant"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="px-3 py-2"${_scopeId}><h2 class="mb-2 px-4 text-lg font-semibold tracking-tight"${_scopeId}>\uC8FC\uC2DD</h2><div class="space-y-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/stock/list" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    variant: unref(route).path == "/stock/list" ? `secondary` : `ghost`,
                    class: "w-full justify-start"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="mr-2 h-4 w-4"${_scopeId3}><path d="M21 15V6"${_scopeId3}></path><path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"${_scopeId3}></path><path d="M12 12H3"${_scopeId3}></path><path d="M16 6H3"${_scopeId3}></path><path d="M12 18H3"${_scopeId3}></path></svg> \uC218\uC9D1 \uB370\uC774\uD130 `);
                      } else {
                        return [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            class: "mr-2 h-4 w-4"
                          }, [
                            createVNode("path", { d: "M21 15V6" }),
                            createVNode("path", { d: "M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" }),
                            createVNode("path", { d: "M12 12H3" }),
                            createVNode("path", { d: "M16 6H3" }),
                            createVNode("path", { d: "M12 18H3" })
                          ])),
                          createTextVNode(" \uC218\uC9D1 \uB370\uC774\uD130 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      variant: unref(route).path == "/stock/list" ? `secondary` : `ghost`,
                      class: "w-full justify-start"
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          class: "mr-2 h-4 w-4"
                        }, [
                          createVNode("path", { d: "M21 15V6" }),
                          createVNode("path", { d: "M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" }),
                          createVNode("path", { d: "M12 12H3" }),
                          createVNode("path", { d: "M16 6H3" }),
                          createVNode("path", { d: "M12 18H3" })
                        ])),
                        createTextVNode(" \uC218\uC9D1 \uB370\uC774\uD130 ")
                      ]),
                      _: 1
                    }, 8, ["variant"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/stock/learning" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    variant: unref(route).path == "/stock/learning" ? `secondary` : `ghost`,
                    class: "w-full justify-start"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="mr-2 h-4 w-4"${_scopeId3}><circle cx="8" cy="18" r="4"${_scopeId3}></circle><path d="M12 18V2l7 4"${_scopeId3}></path></svg> \uD559\uC2B5 \uBAA8\uB378 `);
                      } else {
                        return [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            class: "mr-2 h-4 w-4"
                          }, [
                            createVNode("circle", {
                              cx: "8",
                              cy: "18",
                              r: "4"
                            }),
                            createVNode("path", { d: "M12 18V2l7 4" })
                          ])),
                          createTextVNode(" \uD559\uC2B5 \uBAA8\uB378 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      variant: unref(route).path == "/stock/learning" ? `secondary` : `ghost`,
                      class: "w-full justify-start"
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          class: "mr-2 h-4 w-4"
                        }, [
                          createVNode("circle", {
                            cx: "8",
                            cy: "18",
                            r: "4"
                          }),
                          createVNode("path", { d: "M12 18V2l7 4" })
                        ])),
                        createTextVNode(" \uD559\uC2B5 \uBAA8\uB378 ")
                      ]),
                      _: 1
                    }, 8, ["variant"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/stock/prediction" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    variant: unref(route).path == "/stock/prediction" ? `secondary` : `ghost`,
                    class: "w-full justify-start"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="mr-2 h-4 w-4"${_scopeId3}><path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"${_scopeId3}></path><circle cx="17" cy="7" r="5"${_scopeId3}></circle></svg> \uC608\uCE21 `);
                      } else {
                        return [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            class: "mr-2 h-4 w-4"
                          }, [
                            createVNode("path", { d: "m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" }),
                            createVNode("circle", {
                              cx: "17",
                              cy: "7",
                              r: "5"
                            })
                          ])),
                          createTextVNode(" \uC608\uCE21 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      variant: unref(route).path == "/stock/prediction" ? `secondary` : `ghost`,
                      class: "w-full justify-start"
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          class: "mr-2 h-4 w-4"
                        }, [
                          createVNode("path", { d: "m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" }),
                          createVNode("circle", {
                            cx: "17",
                            cy: "7",
                            r: "5"
                          })
                        ])),
                        createTextVNode(" \uC608\uCE21 ")
                      ]),
                      _: 1
                    }, 8, ["variant"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4 py-4" }, [
                createVNode("div", { class: "px-3 py-2" }, [
                  createVNode(_component_NuxtLink, { to: "/" }, {
                    default: withCtx(() => [
                      createVNode("h2", { class: "mb-2 px-4 text-lg font-semibold tracking-tight" }, "\uB9CC\uD654\uCC45")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "space-y-1" }, [
                    createVNode(_component_NuxtLink, { to: "/book/list" }, {
                      default: withCtx(() => [
                        createVNode(_component_Button, {
                          variant: unref(route).path == "/book/list" ? `secondary` : `ghost`,
                          class: "w-full justify-start flex gap-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_font_awesome_icon, { icon: ["fas", "database"] }),
                            createTextVNode(" \uB370\uC774\uD130\uBCA0\uC774\uC2A4 ")
                          ]),
                          _: 1
                        }, 8, ["variant"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtLink, { to: "/book/chart" }, {
                      default: withCtx(() => [
                        createVNode(_component_Button, {
                          variant: unref(route).path == "/book/chart" ? `secondary` : `ghost`,
                          class: "w-full justify-start flex gap-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_font_awesome_icon, { icon: ["fas", "chart-line"] }),
                            createTextVNode(" \uCC28\uD2B8 ")
                          ]),
                          _: 1
                        }, 8, ["variant"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtLink, { to: "/book/board" }, {
                      default: withCtx(() => [
                        createVNode(_component_Button, {
                          variant: unref(route).path == "/book/board" ? `secondary` : `ghost`,
                          class: "w-full justify-start flex gap-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_font_awesome_icon, { icon: ["far", "newspaper"] }),
                            createTextVNode(" \uAC8C\uC2DC\uD310 ")
                          ]),
                          _: 1
                        }, 8, ["variant"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtLink, { to: "/book/youtube" }, {
                      default: withCtx(() => [
                        createVNode(_component_Button, {
                          variant: unref(route).path == "/book/youtube" ? `secondary` : `ghost`,
                          class: "w-full justify-start flex gap-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_font_awesome_icon, { icon: ["fab", "youtube"] }),
                            createTextVNode(" \uC720\uD29C\uBE0C ")
                          ]),
                          _: 1
                        }, 8, ["variant"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtLink, { to: "/book/music" }, {
                      default: withCtx(() => [
                        createVNode(_component_Button, {
                          variant: unref(route).path == "/book/music" ? `secondary` : `ghost`,
                          class: "w-full justify-start flex gap-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_font_awesome_icon, { icon: ["fas", "music"] }),
                            createTextVNode(" \uC74C\uC545 ")
                          ]),
                          _: 1
                        }, 8, ["variant"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtLink, { to: "/book/sale" }, {
                      default: withCtx(() => [
                        createVNode(_component_Button, {
                          variant: unref(route).path == "/book/sale" ? `secondary` : `ghost`,
                          class: "w-full justify-start flex gap-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_font_awesome_icon, { icon: ["fas", "book"] }),
                            createTextVNode(" \uB3C4\uC11C ")
                          ]),
                          _: 1
                        }, 8, ["variant"])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "px-3 py-2" }, [
                  createVNode("h2", { class: "mb-2 px-4 text-lg font-semibold tracking-tight" }, "\uC8FC\uC2DD"),
                  createVNode("div", { class: "space-y-1" }, [
                    createVNode(_component_NuxtLink, { to: "/stock/list" }, {
                      default: withCtx(() => [
                        createVNode(_component_Button, {
                          variant: unref(route).path == "/stock/list" ? `secondary` : `ghost`,
                          class: "w-full justify-start"
                        }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              class: "mr-2 h-4 w-4"
                            }, [
                              createVNode("path", { d: "M21 15V6" }),
                              createVNode("path", { d: "M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" }),
                              createVNode("path", { d: "M12 12H3" }),
                              createVNode("path", { d: "M16 6H3" }),
                              createVNode("path", { d: "M12 18H3" })
                            ])),
                            createTextVNode(" \uC218\uC9D1 \uB370\uC774\uD130 ")
                          ]),
                          _: 1
                        }, 8, ["variant"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtLink, { to: "/stock/learning" }, {
                      default: withCtx(() => [
                        createVNode(_component_Button, {
                          variant: unref(route).path == "/stock/learning" ? `secondary` : `ghost`,
                          class: "w-full justify-start"
                        }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              class: "mr-2 h-4 w-4"
                            }, [
                              createVNode("circle", {
                                cx: "8",
                                cy: "18",
                                r: "4"
                              }),
                              createVNode("path", { d: "M12 18V2l7 4" })
                            ])),
                            createTextVNode(" \uD559\uC2B5 \uBAA8\uB378 ")
                          ]),
                          _: 1
                        }, 8, ["variant"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtLink, { to: "/stock/prediction" }, {
                      default: withCtx(() => [
                        createVNode(_component_Button, {
                          variant: unref(route).path == "/stock/prediction" ? `secondary` : `ghost`,
                          class: "w-full justify-start"
                        }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              class: "mr-2 h-4 w-4"
                            }, [
                              createVNode("path", { d: "m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" }),
                              createVNode("circle", {
                                cx: "17",
                                cy: "7",
                                r: "5"
                              })
                            ])),
                            createTextVNode(" \uC608\uCE21 ")
                          ]),
                          _: 1
                        }, 8, ["variant"])
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/Side.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useState("scrollContainer", () => null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutsMenu = __nuxt_component_0;
      const _component_LayoutsSide = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col lg:gap-1 lg:p-1 h-svh overflow-hidden" }, _attrs))}><div class="shrink-0">`);
      _push(ssrRenderComponent(_component_LayoutsMenu, null, null, _parent));
      _push(`</div><div class="flex xl:flex-row flex-col gap-1 grow-[1] overflow-hidden">`);
      _push(ssrRenderComponent(_component_LayoutsSide, { class: "shrink-0 xl:block hidden" }, null, _parent));
      _push(`<div class="lg:rounded-md lg:border grow-[1] overflow-y-scroll">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-Q2mMIQr9.mjs.map
