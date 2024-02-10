import { _ as _sfc_main$4 } from './style-DzneHoYd.mjs';
import { _ as _sfc_main$7, a as _sfc_main$5, b as _sfc_main$6, c as _sfc_main$4$1, d as _sfc_main$3$1, e as _sfc_main$2$1 } from './SelectScrollDownButton-28V17fsQ.mjs';
import { _ as _sfc_main$2$2, a as _sfc_main$8, b as _sfc_main$1$1 } from './TabsList-76hBfA3R.mjs';
import { ref, useSSRContext, defineComponent, mergeProps, unref, resolveComponent, isRef, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { createInjectionState } from '@vueuse/core';
import emblaCarouselVue from 'embla-carousel-vue';
import { a as cn, u as useToast } from '../server.mjs';
import { _ as _sfc_main$9 } from './index-a6dO8h6t.mjs';
import { k as krImgBooks, u as uniqueBooks } from './useBooks-Ypf3XFQB.mjs';
import { u as useSupabase } from './useSupabase-vnVKN2Il.mjs';
import { r as replaceDomain, t as timeAgo } from './book-lQ5h8MvC.mjs';
import InfiniteLoading from 'v3-infinite-loading';
import imagesLoaded from 'imagesloaded';
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
import './state-0C5oRJ7z.mjs';

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
const PAGE = 1;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "board",
  __ssrInlineRender: true,
  setup(__props) {
    const boards = ref([]);
    const boards_kr = ref([]);
    const boards_subject = ref([
      "\uC2A4\uD3EC",
      "\uD56B\uC0B0",
      "\uAC74\uAD6D\uB2F4",
      "\uCC3D\uC791",
      "\uBC88\uC5ED",
      "\uC9E4",
      "\uC720\uCD9C",
      "\uAC8C\uC784",
      "\uD32C\uC544\uD2B8",
      "\uBD84\uC11D",
      "\uCC3D\uC870",
      "\uC815\uBCF4",
      "\uC77C\uBC18",
      "\uC774\uBCA4\uD2B8",
      "\uAD6C\uB9E4",
      "\uC6D0\uC791",
      "\uC9C8\uBB38",
      "\uC131\uC9C0",
      "\uC7A1\uB2F4"
    ]);
    const selectedOrderBy = ref("date");
    const selectedSubject = ref();
    function updateSelectedOrderBy() {
      searchBooks(selectedBook.value);
    }
    let grid = null;
    const KR_IMG_BOOKS = krImgBooks();
    uniqueBooks();
    const selectedBook = ref();
    function changeSelectedBook() {
      page.value = 1;
      console.log("changeSelectedBook");
      searchBooks(selectedBook.value);
    }
    const page = ref(1);
    const pageBoards = ref([]);
    async function searchBooks(kr) {
      let query = useSupabase().value.from("board").select().neq("link", null);
      if (kr) {
        query = query.eq("kr", kr);
      }
      if (selectedSubject.value) {
        query = query.ilike("subject", `%${selectedSubject.value}%`);
      }
      const { data, error } = await query.order(selectedOrderBy.value, {
        ascending: false
      });
      if (error) {
        console.error(error);
      } else {
        boards.value = data != null ? data : [];
        pageBoards.value = [...boards.value.slice(0, page.value * PAGE)];
        grid = (void 0).querySelector(".grid");
        imagesLoaded(grid, function() {
          new Masonry(grid, {
            itemSelector: ".grid-item",
            percentPosition: true
          });
        });
      }
    }
    const boardAddState = ref(false);
    function infiniteHandler($state) {
      if (boardAddState.value)
        return;
      console.log(`${boards.value.length} < ${(page.value - 1) * PAGE}`);
      if (boards.value.length < (page.value - 1) * PAGE) {
        const { toast } = useToast();
        toast({
          title: "\uAC8C\uC2DC\uD310 \uB05D\uC5D0 \uB3C4\uB2EC\uD558\uC600\uC2B5\uB2C8\uB2E4."
        });
        return;
      }
      boardAddState.value = true;
      const time = setTimeout(() => {
        try {
          page.value++;
          const nextpage = [
            ...boards.value.slice((page.value - 1) * PAGE, page.value * PAGE)
          ];
          pageBoards.value.push(...nextpage);
          grid = (void 0).querySelector(".grid");
          imagesLoaded(grid, function() {
            new Masonry(grid, {
              itemSelector: ".grid-item",
              percentPosition: true
            });
          });
          setTimeout(() => {
            if (boards.value.length < page.value * PAGE) {
              $state.loaded();
            } else {
              $state.complete();
            }
            clearTimeout(time);
            boardAddState.value = false;
          }, 300);
        } catch (error) {
          console.error(error);
          $state.error();
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SheetBoardDetail = _sfc_main$4;
      const _component_Select = _sfc_main$7;
      const _component_SelectTrigger = _sfc_main$5;
      const _component_SelectValue = _sfc_main$6;
      const _component_SelectContent = _sfc_main$4$1;
      const _component_SelectGroup = _sfc_main$3$1;
      const _component_SelectItem = _sfc_main$2$1;
      const _component_Tabs = _sfc_main$2$2;
      const _component_TabsList = _sfc_main$8;
      const _component_TabsTrigger = _sfc_main$1$1;
      const _component_Carousel = _sfc_main$3;
      const _component_CarouselContent = _sfc_main$2;
      const _component_CarouselItem = _sfc_main$1;
      const _component_Badge = _sfc_main$9;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_SheetBoardDetail, {
        open: unref(boardDetail),
        reply: unref(reply),
        "onUpdate:open": ($event) => boardDetail.value = !unref(boardDetail)
      }, null, _parent));
      _push(`<div class="p-4 flex gap-4 fixed top-13 rounded-t-sm w-full z-20 bg-white border-b" data-v-a1dcd133>`);
      _push(ssrRenderComponent(_component_Select, {
        modelValue: unref(selectedBook),
        "onUpdate:modelValue": [($event) => isRef(selectedBook) ? selectedBook.value = $event : null, changeSelectedBook]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SelectTrigger, { class: "w-fit" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SelectValue, { placeholder: "Select \uB9CC\uD654\uCC45" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SelectValue, { placeholder: "Select \uB9CC\uD654\uCC45" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SelectContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SelectGroup, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(boards_kr), (book) => {
                          _push4(ssrRenderComponent(_component_SelectItem, {
                            value: book.kr
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="flex items-center gap-2" data-v-a1dcd133${_scopeId4}><img class="h-8 w-fit rounded-md object-cover"${ssrRenderAttr("src", unref(KR_IMG_BOOKS)[book.kr])} data-v-a1dcd133${_scopeId4}><div data-v-a1dcd133${_scopeId4}>${ssrInterpolate(book.kr)}</div></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "flex items-center gap-2" }, [
                                    createVNode("img", {
                                      class: "h-8 w-fit rounded-md object-cover",
                                      src: unref(KR_IMG_BOOKS)[book.kr]
                                    }, null, 8, ["src"]),
                                    createVNode("div", null, toDisplayString(book.kr), 1)
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
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(boards_kr), (book) => {
                            return openBlock(), createBlock(_component_SelectItem, {
                              value: book.kr
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  createVNode("img", {
                                    class: "h-8 w-fit rounded-md object-cover",
                                    src: unref(KR_IMG_BOOKS)[book.kr]
                                  }, null, 8, ["src"]),
                                  createVNode("div", null, toDisplayString(book.kr), 1)
                                ])
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 256))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SelectGroup, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(boards_kr), (book) => {
                          return openBlock(), createBlock(_component_SelectItem, {
                            value: book.kr
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                createVNode("img", {
                                  class: "h-8 w-fit rounded-md object-cover",
                                  src: unref(KR_IMG_BOOKS)[book.kr]
                                }, null, 8, ["src"]),
                                createVNode("div", null, toDisplayString(book.kr), 1)
                              ])
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 256))
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
              createVNode(_component_SelectTrigger, { class: "w-fit" }, {
                default: withCtx(() => [
                  createVNode(_component_SelectValue, { placeholder: "Select \uB9CC\uD654\uCC45" })
                ]),
                _: 1
              }),
              createVNode(_component_SelectContent, null, {
                default: withCtx(() => [
                  createVNode(_component_SelectGroup, null, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(boards_kr), (book) => {
                        return openBlock(), createBlock(_component_SelectItem, {
                          value: book.kr
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createVNode("img", {
                                class: "h-8 w-fit rounded-md object-cover",
                                src: unref(KR_IMG_BOOKS)[book.kr]
                              }, null, 8, ["src"]),
                              createVNode("div", null, toDisplayString(book.kr), 1)
                            ])
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 256))
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
      _push(ssrRenderComponent(_component_Select, {
        modelValue: unref(selectedSubject),
        "onUpdate:modelValue": [($event) => isRef(selectedSubject) ? selectedSubject.value = $event : null, changeSelectedBook]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SelectTrigger, { class: "w-fit" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SelectValue, { placeholder: "Select Subject" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SelectValue, { placeholder: "Select Subject" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SelectContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SelectGroup, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(boards_subject), (subject) => {
                          _push4(ssrRenderComponent(_component_SelectItem, { value: subject }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(subject)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(subject), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(boards_subject), (subject) => {
                            return openBlock(), createBlock(_component_SelectItem, { value: subject }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(subject), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 256))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SelectGroup, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(boards_subject), (subject) => {
                          return openBlock(), createBlock(_component_SelectItem, { value: subject }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(subject), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 256))
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
              createVNode(_component_SelectTrigger, { class: "w-fit" }, {
                default: withCtx(() => [
                  createVNode(_component_SelectValue, { placeholder: "Select Subject" })
                ]),
                _: 1
              }),
              createVNode(_component_SelectContent, null, {
                default: withCtx(() => [
                  createVNode(_component_SelectGroup, null, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(boards_subject), (subject) => {
                        return openBlock(), createBlock(_component_SelectItem, { value: subject }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(subject), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 256))
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
      _push(ssrRenderComponent(_component_Tabs, {
        modelValue: unref(selectedOrderBy),
        "onUpdate:modelValue": [($event) => isRef(selectedOrderBy) ? selectedOrderBy.value = $event : null, updateSelectedOrderBy],
        class: "w-[400px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TabsList, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TabsTrigger, { value: "date" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uC2DC\uAC04\uC21C `);
                      } else {
                        return [
                          createTextVNode(" \uC2DC\uAC04\uC21C ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TabsTrigger, { value: "recommend" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uCD94\uCC9C\uC21C `);
                      } else {
                        return [
                          createTextVNode(" \uCD94\uCC9C\uC21C ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TabsTrigger, { value: "number" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uB367\uAE00\uC21C `);
                      } else {
                        return [
                          createTextVNode(" \uB367\uAE00\uC21C ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TabsTrigger, { value: "count" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uC870\uD68C\uC21C `);
                      } else {
                        return [
                          createTextVNode(" \uC870\uD68C\uC21C ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TabsTrigger, { value: "date" }, {
                      default: withCtx(() => [
                        createTextVNode(" \uC2DC\uAC04\uC21C ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TabsTrigger, { value: "recommend" }, {
                      default: withCtx(() => [
                        createTextVNode(" \uCD94\uCC9C\uC21C ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TabsTrigger, { value: "number" }, {
                      default: withCtx(() => [
                        createTextVNode(" \uB367\uAE00\uC21C ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TabsTrigger, { value: "count" }, {
                      default: withCtx(() => [
                        createTextVNode(" \uC870\uD68C\uC21C ")
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
              createVNode(_component_TabsList, null, {
                default: withCtx(() => [
                  createVNode(_component_TabsTrigger, { value: "date" }, {
                    default: withCtx(() => [
                      createTextVNode(" \uC2DC\uAC04\uC21C ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TabsTrigger, { value: "recommend" }, {
                    default: withCtx(() => [
                      createTextVNode(" \uCD94\uCC9C\uC21C ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TabsTrigger, { value: "number" }, {
                    default: withCtx(() => [
                      createTextVNode(" \uB367\uAE00\uC21C ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TabsTrigger, { value: "count" }, {
                    default: withCtx(() => [
                      createTextVNode(" \uC870\uD68C\uC21C ")
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
      _push(`</div><div class="sm:hidden" data-v-a1dcd133><!--[-->`);
      ssrRenderList(unref(pageBoards), (board2) => {
        _push(`<div class="w-screen mb-4" data-v-a1dcd133><div class="relative w-full" data-v-a1dcd133><div class="absolute z-10 p-2 text-white w-2/3" style="${ssrRenderStyle({ "pointer-events": "none" })}" data-v-a1dcd133><div class="font-bold line-clamp-2" data-v-a1dcd133>${ssrInterpolate(board2.title)}</div><div class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis" data-v-a1dcd133>${ssrInterpolate(board2.writer)}</div></div>`);
        _push(ssrRenderComponent(_component_Carousel, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_CarouselContent, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(imgLinkParse(board2.link), (img, index) => {
                      _push3(ssrRenderComponent(_component_CarouselItem, { key: index }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="relative h-full" data-v-a1dcd133${_scopeId3}><img class="md:rounded-md min-h-56 max-h-256 h-full w-full object-scale-down"${ssrRenderAttr("src", ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(img).replace(/co\.kr/g, "com"))} data-v-a1dcd133${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_Badge, { class: "absolute top-3 right-3 bg-opacity-50 bg-black" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(index + 1)} / ${ssrInterpolate(imgLinkParse(board2.link).length)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(index + 1) + " / " + toDisplayString(imgLinkParse(board2.link).length), 1)
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
                                  class: "md:rounded-md min-h-56 max-h-256 h-full w-full object-scale-down",
                                  src: ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(img).replace(/co\.kr/g, "com")
                                }, null, 8, ["src"]),
                                createVNode(_component_Badge, { class: "absolute top-3 right-3 bg-opacity-50 bg-black" }, {
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
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(imgLinkParse(board2.link), (img, index) => {
                        return openBlock(), createBlock(_component_CarouselItem, { key: index }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "relative h-full" }, [
                              createVNode("img", {
                                class: "md:rounded-md min-h-56 max-h-256 h-full w-full object-scale-down",
                                src: ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(img).replace(/co\.kr/g, "com")
                              }, null, 8, ["src"]),
                              createVNode(_component_Badge, { class: "absolute top-3 right-3 bg-opacity-50 bg-black" }, {
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
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_CarouselContent, null, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(imgLinkParse(board2.link), (img, index) => {
                      return openBlock(), createBlock(_component_CarouselItem, { key: index }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "relative h-full" }, [
                            createVNode("img", {
                              class: "md:rounded-md min-h-56 max-h-256 h-full w-full object-scale-down",
                              src: ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(img).replace(/co\.kr/g, "com")
                            }, null, 8, ["src"]),
                            createVNode(_component_Badge, { class: "absolute top-3 right-3 bg-opacity-50 bg-black" }, {
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
        }, _parent));
        _push(`<div class="absolute top-0 left-0 w-full h-full md:rounded-md" style="${ssrRenderStyle({ "background": "linear-gradient(\n              to bottom,\n              rgba(0, 0, 0, 0.5),\n              rgba(0, 0, 0, 0) 50%,\n              rgba(0, 0, 0, 0) 50%,\n              rgba(0, 0, 0, 0.5)\n            )", "pointer-events": "none" })}" data-v-a1dcd133></div><div class="p-4 flex w-full absolute bottom-0 text-white justify-between gap-4 items-end overflow-hidden" style="${ssrRenderStyle({ "pointer-events": "none" })}" data-v-a1dcd133><div class="flex gap-4 items-end flex-1 overflow-hidden" data-v-a1dcd133><img class="h-16 rounded-md object-cover shrink-0"${ssrRenderAttr("src", unref(KR_IMG_BOOKS)[board2.kr])} data-v-a1dcd133><div class="flex-col flex-1 overflow-hidden" data-v-a1dcd133><div class="line-clamp-2" data-v-a1dcd133>${ssrInterpolate(board2.content)}</div><div class="flex text-xs gap-2" data-v-a1dcd133><div class="font-normal" data-v-a1dcd133>${ssrInterpolate(("timeAgo" in _ctx ? _ctx.timeAgo : unref(timeAgo))(board2.date))}</div></div></div></div><div class="flex flex-col gap-2 text-xl items-center shrink-0" data-v-a1dcd133><div class="flex flex-col gap-1 items-center" style="${ssrRenderStyle({ "pointer-events": "auto" })}" data-v-a1dcd133>`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["far", "comment"] }, null, _parent));
        _push(`<div class="text-sm" data-v-a1dcd133>${ssrInterpolate(board2.number)}</div></div><div class="flex flex-col gap-1 items-center" data-v-a1dcd133>`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["far", "eye"] }, null, _parent));
        _push(`<div class="text-sm" data-v-a1dcd133>${ssrInterpolate(board2.count)}</div></div><div class="flex flex-col gap-1 items-center" data-v-a1dcd133>`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "star"] }, null, _parent));
        _push(`<div class="text-sm" data-v-a1dcd133>${ssrInterpolate(board2.recommend)}</div></div></div></div></div></div>`);
      });
      _push(`<!--]--><div class="w-full rounded-md p-2 flex items-center justify-center" data-v-a1dcd133>`);
      if (unref(pageBoards).length > 0 && unref(boardAddState) == false) {
        _push(ssrRenderComponent(unref(InfiniteLoading), { onInfinite: infiniteHandler }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="md:p-2 md:py-4 md:pt-20 hidden sm:block" data-v-a1dcd133><div class="grid" data-v-a1dcd133><div class="grid-sizer" data-v-a1dcd133></div><!--[-->`);
      ssrRenderList(unref(pageBoards), (board2) => {
        _push(`<div class="w-screen mb-4 grid-item md:px-2 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 3xl:w-1/6 4xl:w-1/7" data-v-a1dcd133><div class="relative w-full" data-v-a1dcd133><div class="absolute z-10 p-2 text-white w-2/3" style="${ssrRenderStyle({ "pointer-events": "none" })}" data-v-a1dcd133><div class="font-bold line-clamp-2" data-v-a1dcd133>${ssrInterpolate(board2.title)}</div><div class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis" data-v-a1dcd133>${ssrInterpolate(board2.writer)}</div></div>`);
        _push(ssrRenderComponent(_component_Carousel, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_CarouselContent, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(imgLinkParse(board2.link), (img, index) => {
                      _push3(ssrRenderComponent(_component_CarouselItem, { key: index }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="relative h-full" data-v-a1dcd133${_scopeId3}><img class="md:rounded-md min-h-56 max-h-256 h-full w-full object-scale-down"${ssrRenderAttr("src", ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(img).replace(/co\.kr/g, "com"))} data-v-a1dcd133${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_Badge, { class: "absolute top-3 right-3 bg-opacity-50 bg-black" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(index + 1)} / ${ssrInterpolate(imgLinkParse(board2.link).length)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(index + 1) + " / " + toDisplayString(imgLinkParse(board2.link).length), 1)
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
                                  class: "md:rounded-md min-h-56 max-h-256 h-full w-full object-scale-down",
                                  src: ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(img).replace(/co\.kr/g, "com")
                                }, null, 8, ["src"]),
                                createVNode(_component_Badge, { class: "absolute top-3 right-3 bg-opacity-50 bg-black" }, {
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
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(imgLinkParse(board2.link), (img, index) => {
                        return openBlock(), createBlock(_component_CarouselItem, { key: index }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "relative h-full" }, [
                              createVNode("img", {
                                class: "md:rounded-md min-h-56 max-h-256 h-full w-full object-scale-down",
                                src: ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(img).replace(/co\.kr/g, "com")
                              }, null, 8, ["src"]),
                              createVNode(_component_Badge, { class: "absolute top-3 right-3 bg-opacity-50 bg-black" }, {
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
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_CarouselContent, null, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(imgLinkParse(board2.link), (img, index) => {
                      return openBlock(), createBlock(_component_CarouselItem, { key: index }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "relative h-full" }, [
                            createVNode("img", {
                              class: "md:rounded-md min-h-56 max-h-256 h-full w-full object-scale-down",
                              src: ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(img).replace(/co\.kr/g, "com")
                            }, null, 8, ["src"]),
                            createVNode(_component_Badge, { class: "absolute top-3 right-3 bg-opacity-50 bg-black" }, {
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
        }, _parent));
        _push(`<div class="absolute top-0 left-0 w-full h-full md:rounded-md" style="${ssrRenderStyle({ "background": "linear-gradient(\n                to bottom,\n                rgba(0, 0, 0, 0.5),\n                rgba(0, 0, 0, 0) 50%,\n                rgba(0, 0, 0, 0) 50%,\n                rgba(0, 0, 0, 0.5)\n              )", "pointer-events": "none" })}" data-v-a1dcd133></div><div class="p-4 flex w-full absolute bottom-0 text-white justify-between gap-4 items-end overflow-hidden" style="${ssrRenderStyle({ "pointer-events": "none" })}" data-v-a1dcd133><div class="flex gap-4 items-end flex-1 overflow-hidden" data-v-a1dcd133><img class="h-16 rounded-md object-cover shrink-0"${ssrRenderAttr("src", unref(KR_IMG_BOOKS)[board2.kr])} data-v-a1dcd133><div class="flex-col flex-1 overflow-hidden" data-v-a1dcd133><div class="line-clamp-2" data-v-a1dcd133>${ssrInterpolate(board2.content)}</div><div class="flex text-xs gap-2" data-v-a1dcd133><div class="font-normal" data-v-a1dcd133>${ssrInterpolate(("timeAgo" in _ctx ? _ctx.timeAgo : unref(timeAgo))(board2.date))}</div></div></div></div><div class="flex flex-col gap-2 text-xl items-center shrink-0" data-v-a1dcd133><div class="flex flex-col gap-1 items-center" style="${ssrRenderStyle({ "pointer-events": "auto" })}" data-v-a1dcd133>`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["far", "comment"] }, null, _parent));
        _push(`<div class="text-sm" data-v-a1dcd133>${ssrInterpolate(board2.number)}</div></div><div class="flex flex-col gap-1 items-center" data-v-a1dcd133>`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["far", "eye"] }, null, _parent));
        _push(`<div class="text-sm" data-v-a1dcd133>${ssrInterpolate(board2.count)}</div></div><div class="flex flex-col gap-1 items-center" data-v-a1dcd133>`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "star"] }, null, _parent));
        _push(`<div class="text-sm" data-v-a1dcd133>${ssrInterpolate(board2.recommend)}</div></div></div></div></div></div>`);
      });
      _push(`<!--]--></div><div class="w-full rounded-md p-2 flex items-center justify-center" data-v-a1dcd133>`);
      if (unref(pageBoards).length > 0 && unref(boardAddState) == false) {
        _push(ssrRenderComponent(unref(InfiniteLoading), { onInfinite: infiniteHandler }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/book/board.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const board = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a1dcd133"]]);

export { board as default };
//# sourceMappingURL=board-B7ORCraD.mjs.map
