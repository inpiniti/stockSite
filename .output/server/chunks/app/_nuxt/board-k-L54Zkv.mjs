import { _ as _sfc_main$4 } from './style-DzneHoYd.mjs';
import { ref, useSSRContext, defineComponent, mergeProps, unref, resolveComponent, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, nextTick } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { createInjectionState } from '@vueuse/core';
import emblaCarouselVue from 'embla-carousel-vue';
import { a as cn } from '../server.mjs';
import { _ as _sfc_main$5 } from './index-a6dO8h6t.mjs';
import { k as krImgBooks, f as findBook } from './useBooks-7b4_Z3OE.mjs';
import { u as useState } from './state-0C5oRJ7z.mjs';
import { u as useFetch } from './fetch-fy2p8z4q.mjs';
import { r as replaceDomain, t as timeAgo } from './book-lQ5h8MvC.mjs';
import InfiniteLoading from 'v3-infinite-loading';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';
import './SheetContent-ome715M8.mjs';
import 'radix-vue';
import 'lucide-vue-next';
import 'class-variance-authority';
import './SheetTitle-FI5IT0Z7.mjs';
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
import './useSupabase-vnVKN2Il.mjs';

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
    const KR_IMG_BOOKS = krImgBooks();
    const page = ref(1);
    const pageBoards = ref([]);
    const boardAddState = ref(false);
    const scrollContainer = useState("scrollContainer", () => null);
    function infiniteHandler($state) {
      if (boardAddState.value)
        return;
      boardAddState.value = true;
      let scrollPosition = 0;
      const time = setTimeout(() => {
        try {
          scrollPosition = scrollContainer.value.scrollTop;
          page.value++;
          const nextpage = [
            ...boards.value.slice((page.value - 1) * 20, page.value * 20)
          ];
          pageBoards.value = [...pageBoards.value, ...nextpage];
          setTimeout(() => {
            $state.loaded();
          });
        } catch (error) {
          console.error(error);
        } finally {
          clearTimeout(time);
          boardAddState.value = false;
          setTimeout(() => {
            nextTick(() => {
              console.log(scrollPosition);
              scrollContainer.value.scrollTo(0, scrollPosition);
            });
          });
        }
      });
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
    async function onClickBoardDetail(board2) {
      var _a, _b, _c, _d;
      const { dc } = findBook(board2.kr);
      const { data: newData } = await useFetch(
        `/api/dcinside/${dc}/${board2.num}?kr=${board2.kr}`,
        "$Hg2q9B5c9C"
      );
      reply.value = newData.value;
      if ((_b = (_a = reply.value) == null ? void 0 : _a.comment) == null ? void 0 : _b.comments) {
        reply.value.comment.comments = (_d = (_c = reply.value) == null ? void 0 : _c.comment) == null ? void 0 : _d.comments.filter(
          (comment) => {
            return comment.no != 0;
          }
        );
      }
      boardDetail.value = !boardDetail.value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SheetBoardDetail = _sfc_main$4;
      const _component_masonry_wall = resolveComponent("masonry-wall");
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
      _push(`<div data-v-6cbbb137>`);
      _push(ssrRenderComponent(_component_masonry_wall, {
        items: unref(pageBoards),
        "ssr-columns": 20,
        "column-width": 300,
        gap: 16
      }, {
        default: withCtx(({ item: board2 }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative w-full" data-v-6cbbb137${_scopeId}><div class="absolute z-10 p-2 text-white" style="${ssrRenderStyle({ "pointer-events": "none" })}" data-v-6cbbb137${_scopeId}><div class="font-bold" data-v-6cbbb137${_scopeId}>${ssrInterpolate(board2.title)}</div><div class="text-sm" data-v-6cbbb137${_scopeId}>${ssrInterpolate(board2.writer)}</div></div>`);
            _push2(ssrRenderComponent(_component_Carousel, null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CarouselContent, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(imgLinkParse(board2.link), (img, index) => {
                          _push4(ssrRenderComponent(_component_CarouselItem, { key: index }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="relative h-full" data-v-6cbbb137${_scopeId4}><img class="lg:rounded-md min-h-96 max-h-256 h-full w-full object-scale-down"${ssrRenderAttr("src", ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(img).replace(/co\.kr/g, "com"))} data-v-6cbbb137${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_Badge, { class: "absolute top-4 right-4 bg-opacity-50 bg-black" }, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(index + 1)} / ${ssrInterpolate(imgLinkParse(board2.link).length)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(index + 1) + " / " + toDisplayString(imgLinkParse(board2.link).length), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "relative h-full" }, [
                                    createVNode("img", {
                                      class: "lg:rounded-md min-h-96 max-h-256 h-full w-full object-scale-down",
                                      src: ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(img).replace(/co\.kr/g, "com")
                                    }, null, 8, ["src"]),
                                    createVNode(_component_Badge, { class: "absolute top-4 right-4 bg-opacity-50 bg-black" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(index + 1) + " / " + toDisplayString(imgLinkParse(board2.link).length), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(imgLinkParse(board2.link), (img, index) => {
                            return openBlock(), createBlock(_component_CarouselItem, { key: index }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "relative h-full" }, [
                                  createVNode("img", {
                                    class: "lg:rounded-md min-h-96 max-h-256 h-full w-full object-scale-down",
                                    src: ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(img).replace(/co\.kr/g, "com")
                                  }, null, 8, ["src"]),
                                  createVNode(_component_Badge, { class: "absolute top-4 right-4 bg-opacity-50 bg-black" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(index + 1) + " / " + toDisplayString(imgLinkParse(board2.link).length), 1)
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CarouselContent, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(imgLinkParse(board2.link), (img, index) => {
                          return openBlock(), createBlock(_component_CarouselItem, { key: index }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "relative h-full" }, [
                                createVNode("img", {
                                  class: "lg:rounded-md min-h-96 max-h-256 h-full w-full object-scale-down",
                                  src: ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(img).replace(/co\.kr/g, "com")
                                }, null, 8, ["src"]),
                                createVNode(_component_Badge, { class: "absolute top-4 right-4 bg-opacity-50 bg-black" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(index + 1) + " / " + toDisplayString(imgLinkParse(board2.link).length), 1)
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
            }, _parent2, _scopeId));
            _push2(`<div class="absolute top-0 left-0 w-full h-full lg:rounded-md" style="${ssrRenderStyle({ "background": "linear-gradient(\n                to bottom,\n                rgba(0, 0, 0, 0.5),\n                rgba(0, 0, 0, 0) 50%,\n                rgba(0, 0, 0, 0) 50%,\n                rgba(0, 0, 0, 0.5)\n              )", "pointer-events": "none" })}" data-v-6cbbb137${_scopeId}></div><div class="p-4 flex w-full absolute bottom-0 text-white justify-between gap-4 items-end" style="${ssrRenderStyle({ "pointer-events": "none" })}" data-v-6cbbb137${_scopeId}><div class="flex gap-4 items-end" data-v-6cbbb137${_scopeId}><img class="h-16 rounded-md object-cover"${ssrRenderAttr("src", unref(KR_IMG_BOOKS)[board2.kr])} data-v-6cbbb137${_scopeId}><div class="flex-col" data-v-6cbbb137${_scopeId}><div class="line-clamp-3 overflow-hidden" data-v-6cbbb137${_scopeId}>${ssrInterpolate(board2.content)}</div><div class="flex text-xs gap-2" data-v-6cbbb137${_scopeId}><div class="font-normal" data-v-6cbbb137${_scopeId}>${ssrInterpolate(("timeAgo" in _ctx ? _ctx.timeAgo : unref(timeAgo))(board2.date))}</div></div></div></div><div class="flex flex-col gap-2 text-xl items-center" data-v-6cbbb137${_scopeId}><div class="flex flex-col gap-1 items-center" style="${ssrRenderStyle({ "pointer-events": "auto" })}" data-v-6cbbb137${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["far", "comment"] }, null, _parent2, _scopeId));
            _push2(`<div class="text-sm" data-v-6cbbb137${_scopeId}>${ssrInterpolate(board2.number)}</div></div><div class="flex flex-col gap-1 items-center" data-v-6cbbb137${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["far", "eye"] }, null, _parent2, _scopeId));
            _push2(`<div class="text-sm" data-v-6cbbb137${_scopeId}>${ssrInterpolate(board2.count)}</div></div><div class="flex flex-col gap-1 items-center" data-v-6cbbb137${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "star"] }, null, _parent2, _scopeId));
            _push2(`<div class="text-sm" data-v-6cbbb137${_scopeId}>${ssrInterpolate(board2.recommend)}</div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative w-full" }, [
                createVNode("div", {
                  class: "absolute z-10 p-2 text-white",
                  style: { "pointer-events": "none" }
                }, [
                  createVNode("div", { class: "font-bold" }, toDisplayString(board2.title), 1),
                  createVNode("div", { class: "text-sm" }, toDisplayString(board2.writer), 1)
                ]),
                createVNode(_component_Carousel, null, {
                  default: withCtx(() => [
                    createVNode(_component_CarouselContent, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(imgLinkParse(board2.link), (img, index) => {
                          return openBlock(), createBlock(_component_CarouselItem, { key: index }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "relative h-full" }, [
                                createVNode("img", {
                                  class: "lg:rounded-md min-h-96 max-h-256 h-full w-full object-scale-down",
                                  src: ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(img).replace(/co\.kr/g, "com")
                                }, null, 8, ["src"]),
                                createVNode(_component_Badge, { class: "absolute top-4 right-4 bg-opacity-50 bg-black" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(index + 1) + " / " + toDisplayString(imgLinkParse(board2.link).length), 1)
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
                  ]),
                  _: 2
                }, 1024),
                createVNode("div", {
                  class: "absolute top-0 left-0 w-full h-full lg:rounded-md",
                  style: { "background": "linear-gradient(\n                to bottom,\n                rgba(0, 0, 0, 0.5),\n                rgba(0, 0, 0, 0) 50%,\n                rgba(0, 0, 0, 0) 50%,\n                rgba(0, 0, 0, 0.5)\n              )", "pointer-events": "none" }
                }),
                createVNode("div", {
                  class: "p-4 flex w-full absolute bottom-0 text-white justify-between gap-4 items-end",
                  style: { "pointer-events": "none" }
                }, [
                  createVNode("div", { class: "flex gap-4 items-end" }, [
                    createVNode("img", {
                      class: "h-16 rounded-md object-cover",
                      src: unref(KR_IMG_BOOKS)[board2.kr]
                    }, null, 8, ["src"]),
                    createVNode("div", { class: "flex-col" }, [
                      createVNode("div", { class: "line-clamp-3 overflow-hidden" }, toDisplayString(board2.content), 1),
                      createVNode("div", { class: "flex text-xs gap-2" }, [
                        createVNode("div", { class: "font-normal" }, toDisplayString(("timeAgo" in _ctx ? _ctx.timeAgo : unref(timeAgo))(board2.date)), 1)
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-col gap-2 text-xl items-center" }, [
                    createVNode("div", {
                      class: "flex flex-col gap-1 items-center",
                      style: { "pointer-events": "auto" },
                      onClick: ($event) => onClickBoardDetail(board2)
                    }, [
                      createVNode(_component_font_awesome_icon, { icon: ["far", "comment"] }),
                      createVNode("div", { class: "text-sm" }, toDisplayString(board2.number), 1)
                    ], 8, ["onClick"]),
                    createVNode("div", { class: "flex flex-col gap-1 items-center" }, [
                      createVNode(_component_font_awesome_icon, { icon: ["far", "eye"] }),
                      createVNode("div", { class: "text-sm" }, toDisplayString(board2.count), 1)
                    ]),
                    createVNode("div", { class: "flex flex-col gap-1 items-center" }, [
                      createVNode(_component_font_awesome_icon, { icon: ["fas", "star"] }),
                      createVNode("div", { class: "text-sm" }, toDisplayString(board2.recommend), 1)
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="w-full rounded-md p-2 flex items-center justify-center" data-v-6cbbb137>`);
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        icon: ["fas", "circle-notch"],
        spin: ""
      }, null, _parent));
      _push(`</div>`);
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
const board = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6cbbb137"]]);

export { board as default };
//# sourceMappingURL=board-k-L54Zkv.mjs.map
