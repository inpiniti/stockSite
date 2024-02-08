import { _ as _sfc_main$1$1, a as _sfc_main$6 } from './SheetContent-ome715M8.mjs';
import { _ as _sfc_main$1$2, a as _sfc_main$7 } from './SheetTitle-FI5IT0Z7.mjs';
import { r as replaceDomain, t as timeAgo } from './book-lQ5h8MvC.mjs';
import { useSSRContext, ref, defineComponent, computed, resolveComponent, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { createInjectionState } from '@vueuse/core';
import emblaCarouselVue from 'embla-carousel-vue';
import { a as cn } from '../server.mjs';
import { _ as _sfc_main$5 } from './index-a6dO8h6t.mjs';
import InfiniteLoading from 'v3-infinite-loading';
import 'radix-vue';
import 'lucide-vue-next';
import 'class-variance-authority';
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
import 'clsx';
import 'tailwind-merge';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "boardDetail",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    reply: {}
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Sheet = _sfc_main$1$1;
      const _component_SheetContent = _sfc_main$6;
      const _component_SheetHeader = _sfc_main$1$2;
      const _component_SheetTitle = _sfc_main$7;
      _push(ssrRenderComponent(_component_Sheet, mergeProps({
        open: _ctx.open,
        "onUpdate:open": ($event) => emit("update:open")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SheetContent, {
              side: "bottom",
              class: "p-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SheetHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SheetTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\uB313\uAE00`);
                            } else {
                              return [
                                createTextVNode("\uB313\uAE00")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_SheetTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\uB313\uAE00")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex flex-col gap-4 max-h-160 overflow-y-scroll"${_scopeId2}><!--[-->`);
                  ssrRenderList(_ctx.reply.comment.comments, (comment) => {
                    _push3(`<div class="flex flex-col gap-1"${_scopeId2}><p class="text-xs"${_scopeId2}>${ssrInterpolate(comment.user_id)}(${ssrInterpolate(comment.name)})</p><div class="flex items-end gap-1"${_scopeId2}><div class="bg-neutral-100 rounded-md px-2 py-1 text-sm w-fit"${_scopeId2}><div${_scopeId2}>${("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(comment.memo).replace(/co\.kr/g, "com")}</div></div><p class="text-xs"${_scopeId2}>${ssrInterpolate(comment.reg_date)}</p></div></div>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode(_component_SheetHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_SheetTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\uB313\uAE00")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex flex-col gap-4 max-h-160 overflow-y-scroll" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.reply.comment.comments, (comment) => {
                        return openBlock(), createBlock("div", { class: "flex flex-col gap-1" }, [
                          createVNode("p", { class: "text-xs" }, toDisplayString(comment.user_id) + "(" + toDisplayString(comment.name) + ")", 1),
                          createVNode("div", { class: "flex items-end gap-1" }, [
                            createVNode("div", { class: "bg-neutral-100 rounded-md px-2 py-1 text-sm w-fit" }, [
                              createVNode("div", {
                                innerHTML: ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(comment.memo).replace(/co\.kr/g, "com")
                              }, null, 8, ["innerHTML"])
                            ]),
                            createVNode("p", { class: "text-xs" }, toDisplayString(comment.reg_date), 1)
                          ])
                        ]);
                      }), 256))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SheetContent, {
                side: "bottom",
                class: "p-2"
              }, {
                default: withCtx(() => [
                  createVNode(_component_SheetHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_SheetTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\uB313\uAE00")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex flex-col gap-4 max-h-160 overflow-y-scroll" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.reply.comment.comments, (comment) => {
                      return openBlock(), createBlock("div", { class: "flex flex-col gap-1" }, [
                        createVNode("p", { class: "text-xs" }, toDisplayString(comment.user_id) + "(" + toDisplayString(comment.name) + ")", 1),
                        createVNode("div", { class: "flex items-end gap-1" }, [
                          createVNode("div", { class: "bg-neutral-100 rounded-md px-2 py-1 text-sm w-fit" }, [
                            createVNode("div", {
                              innerHTML: ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(comment.memo).replace(/co\.kr/g, "com")
                            }, null, 8, ["innerHTML"])
                          ]),
                          createVNode("p", { class: "text-xs" }, toDisplayString(comment.reg_date), 1)
                        ])
                      ]);
                    }), 256))
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sheet/boardDetail.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const [useProvideCarousel, useInjectCarousel] = createInjectionState(
  ({
    opts,
    orientation,
    plugins
  }, emits) => {
    const [emblaNode, emblaApi] = emblaCarouselVue({
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    }, plugins);
    function scrollPrev() {
      var _a;
      (_a = emblaApi.value) == null ? void 0 : _a.scrollPrev();
    }
    function scrollNext() {
      var _a;
      (_a = emblaApi.value) == null ? void 0 : _a.scrollNext();
    }
    const canScrollNext = ref(true);
    const canScrollPrev = ref(true);
    return { carouselRef: emblaNode, carouselApi: emblaApi, canScrollPrev, canScrollNext, scrollPrev, scrollNext, orientation };
  }
);
function useCarousel() {
  const carouselState = useInjectCarousel();
  if (!carouselState)
    throw new Error("useCarousel must be used within a <Carousel />");
  return carouselState;
}
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Carousel",
  __ssrInlineRender: true,
  props: {
    opts: {},
    plugins: {},
    orientation: { default: "horizontal" },
    class: {}
  },
  emits: ["init-api"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const carouselArgs = useProvideCarousel(props, emits);
    __expose(carouselArgs);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("relative", props.class),
        role: "region",
        "aria-roledescription": "carousel",
        tabindex: "0"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", unref(carouselArgs), null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/carousel/Carousel.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "CarouselContent",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { carouselRef, orientation } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "carouselRef",
        ref: carouselRef,
        class: "overflow-hidden"
      }, _attrs))}><div${ssrRenderAttrs(mergeProps({
        class: unref(cn)(
          "flex",
          unref(orientation) === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          props.class
        )
      }, _ctx.$attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/carousel/CarouselContent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CarouselItem",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { orientation } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        role: "group",
        "aria-roledescription": "slide",
        class: unref(cn)(
          "min-w-0 shrink-0 grow-0 basis-full",
          unref(orientation) === "horizontal" ? "pl-4" : "pt-4",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/carousel/CarouselItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "board",
  __ssrInlineRender: true,
  setup(__props) {
    const boards = ref([]);
    const page = ref(1);
    const pageBoards = computed(() => {
      return boards.value.slice(0, page.value * 20);
    });
    function infiniteHandler($state) {
      page.value++;
      $state.loaded();
    }
    function imgLinkParse(link) {
      if (link.includes("[")) {
        return JSON.parse(link);
      } else {
        let arr = [];
        arr.push(link);
        return arr;
      }
    }
    const boardDetail = ref(false);
    const reply = ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SheetBoardDetail = _sfc_main$4;
      const _component_Carousel = _sfc_main$3;
      const _component_CarouselContent = _sfc_main$2;
      const _component_CarouselItem = _sfc_main$1;
      const _component_Badge = _sfc_main$5;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_SheetBoardDetail, {
        open: unref(boardDetail),
        reply: unref(reply),
        "onUpdate:open": ($event) => boardDetail.value = !unref(boardDetail)
      }, null, _parent));
      _push(`<div><div class="grid sm:grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 xl:md:grid-cols-4 gap-4 overflow-hidden"><!--[-->`);
      ssrRenderList(unref(pageBoards), (board) => {
        _push(`<div class="w-screen"><div class="relative w-full"><div class="absolute z-10 p-2 text-white" style="${ssrRenderStyle({ "pointer-events": "none" })}"><div class="font-bold">${ssrInterpolate(board.title)}</div><div class="text-sm">${ssrInterpolate(board.writer)}</div></div>`);
        _push(ssrRenderComponent(_component_Carousel, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_CarouselContent, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(imgLinkParse(board.link), (img, index) => {
                      _push3(ssrRenderComponent(_component_CarouselItem, { key: index }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="relative h-full"${_scopeId3}><img class="lg:rounded-md md:h-72 min-h-96 max-h-256 h-full w-full object-scale-down"${ssrRenderAttr("src", ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(img).replace(/co\.kr/g, "com"))}${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_Badge, { class: "absolute top-4 right-4 bg-opacity-50 bg-black" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(index + 1)} / ${ssrInterpolate(imgLinkParse(board.link).length)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(index + 1) + " / " + toDisplayString(imgLinkParse(board.link).length), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div>`);
                          } else {
                            return [
                              createVNode("div", { class: "relative h-full" }, [
                                createVNode("img", {
                                  class: "lg:rounded-md md:h-72 min-h-96 max-h-256 h-full w-full object-scale-down",
                                  src: ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(img).replace(/co\.kr/g, "com")
                                }, null, 8, ["src"]),
                                createVNode(_component_Badge, { class: "absolute top-4 right-4 bg-opacity-50 bg-black" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(index + 1) + " / " + toDisplayString(imgLinkParse(board.link).length), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(imgLinkParse(board.link), (img, index) => {
                        return openBlock(), createBlock(_component_CarouselItem, { key: index }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "relative h-full" }, [
                              createVNode("img", {
                                class: "lg:rounded-md md:h-72 min-h-96 max-h-256 h-full w-full object-scale-down",
                                src: ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(img).replace(/co\.kr/g, "com")
                              }, null, 8, ["src"]),
                              createVNode(_component_Badge, { class: "absolute top-4 right-4 bg-opacity-50 bg-black" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(index + 1) + " / " + toDisplayString(imgLinkParse(board.link).length), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_CarouselContent, null, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(imgLinkParse(board.link), (img, index) => {
                      return openBlock(), createBlock(_component_CarouselItem, { key: index }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "relative h-full" }, [
                            createVNode("img", {
                              class: "lg:rounded-md md:h-72 min-h-96 max-h-256 h-full w-full object-scale-down",
                              src: ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(img).replace(/co\.kr/g, "com")
                            }, null, 8, ["src"]),
                            createVNode(_component_Badge, { class: "absolute top-4 right-4 bg-opacity-50 bg-black" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(index + 1) + " / " + toDisplayString(imgLinkParse(board.link).length), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="absolute top-0 left-0 w-full h-full lg:rounded-md" style="${ssrRenderStyle({ "background": "linear-gradient(\n                to bottom,\n                rgba(0, 0, 0, 0.5),\n                rgba(0, 0, 0, 0) 50%,\n                rgba(0, 0, 0, 0) 50%,\n                rgba(0, 0, 0, 0.5)\n              )", "pointer-events": "none" })}"></div><div class="p-4 flex w-full absolute bottom-0 text-white justify-between gap-4 items-end"><div class="flex-col" style="${ssrRenderStyle({ "pointer-events": "none" })}"><div class="line-clamp-3 overflow-hidden">${ssrInterpolate(board.content)}</div><div class="flex text-xs gap-2"><div class="font-normal">${ssrInterpolate(("timeAgo" in _ctx ? _ctx.timeAgo : unref(timeAgo))(board.date))}</div></div></div><div class="flex flex-col gap-2 text-xl items-center"><div class="flex flex-col gap-1 items-center">`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["far", "comment"] }, null, _parent));
        _push(`<div class="text-sm">${ssrInterpolate(board.number)}</div></div><div class="flex flex-col gap-1 items-center" style="${ssrRenderStyle({ "pointer-events": "none" })}">`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["far", "eye"] }, null, _parent));
        _push(`<div class="text-sm">${ssrInterpolate(board.count)}</div></div><div class="flex flex-col gap-1 items-center" style="${ssrRenderStyle({ "pointer-events": "none" })}">`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "star"] }, null, _parent));
        _push(`<div class="text-sm">${ssrInterpolate(board.recommend)}</div></div></div></div></div></div>`);
      });
      _push(`<!--]--></div>`);
      if (unref(pageBoards).length > 0) {
        _push(ssrRenderComponent(unref(InfiniteLoading), { onInfinite: infiniteHandler }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/book/board.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=board--5Wu1Jm2.mjs.map
