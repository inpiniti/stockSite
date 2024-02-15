import { _ as _sfc_main$1 } from './style-DzneHoYd.mjs';
import { _ as _sfc_main$2 } from './Menubar-y4vSvdbp.mjs';
import { _ as _sfc_main$7, a as _sfc_main$5, b as _sfc_main$6, c as _sfc_main$4, d as _sfc_main$3, e as _sfc_main$2$1 } from './SelectScrollDownButton-28V17fsQ.mjs';
import { _ as __nuxt_component_8, a as _sfc_main$8$1, b as _sfc_main$7$1, c as _sfc_main$6$1, d as _sfc_main$5$1, e as _sfc_main$3$1, f as _sfc_main$b, g as _sfc_main$4$1, h as _sfc_main$1$2, i as _sfc_main$2$3 } from './PaginationPrev-WUIkiufD.mjs';
import { _ as _sfc_main$2$2, a as _sfc_main$8, b as _sfc_main$1$1 } from './PopoverContent-gqtQrpzl.mjs';
import { _ as _sfc_main$9 } from './index-VljijB2M.mjs';
import { _ as _sfc_main$a } from './index-a6dO8h6t.mjs';
import { PaginationRoot, PaginationList, PaginationListItem } from 'radix-vue';
import { useSSRContext, defineComponent, ref, watch, resolveComponent, unref, withCtx, isRef, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { u as useState } from './state-t0JlwV5Q.mjs';
import { k as krImgBooks, u as uniqueBooks } from './useBooks-1H3Heu6x.mjs';
import { u as useSupabase } from './useSupabase-d0Lj6ZDC.mjs';
import { r as replaceDomain, t as timeAgo } from './book-lQ5h8MvC.mjs';
import { ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import InfiniteLoading from 'v3-infinite-loading';
import { format } from 'date-fns';
import { Calendar } from 'lucide-vue-next';
import { a as cn } from '../server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';
import './SheetContent-ome715M8.mjs';
import 'class-variance-authority';
import './SheetTitle-FI5IT0Z7.mjs';
import './index-tbNGurtz.mjs';
import '@unhead/shared';
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
import '@vueuse/core';
import 'v-calendar';
import 'embla-carousel-vue';
import 'unhead';
import 'vue-router';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/vue-fontawesome';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-regular-svg-icons';
import '@fortawesome/free-brands-svg-icons';
import '@yeger/vue-masonry-wall';
import 'clsx';
import 'tailwind-merge';

const PAGE = 10;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "board_23.02.15",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref(1);
    const server_page = ref(1);
    const server_limit = ref(100);
    const totalPage = ref(0);
    const isScrollingDown = useState("isScrollingDown");
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
    const date = ref();
    function updateSelectedOrderBy() {
      boardAddState.value = false;
      server_page.value = 1;
      page.value = 1;
      (void 0).documentElement.scrollTop = 0;
      pageBoards.value = [];
      searchBooks();
    }
    watch(date, () => {
      console.log("date");
      boardAddState.value = false;
      server_page.value = 1;
      page.value = 1;
      (void 0).documentElement.scrollTop = 0;
      pageBoards.value = [];
      searchBooks();
    });
    let grid = null;
    const KR_IMG_BOOKS = krImgBooks();
    uniqueBooks();
    const selectedBook = ref();
    function changeSelectedBook() {
      boardAddState.value = false;
      server_page.value = 1;
      page.value = 1;
      (void 0).documentElement.scrollTop = 0;
      pageBoards.value = [];
      searchBooks();
    }
    const pageBoards = ref([]);
    async function searchBooks() {
      let query = useSupabase().value.from("board").select().neq("link", null).range(
        (server_page.value - 1) * server_limit.value,
        server_page.value * server_limit.value - 1
      );
      let count_query = useSupabase().value.from("board").select("*", { count: "exact", head: true }).neq("link", null);
      if (selectedSubject.value && selectedSubject.value != "all") {
        query = query.ilike("subject", `%${selectedSubject.value}%`);
        count_query = count_query.ilike("subject", `%${selectedSubject.value}%`);
      }
      if (selectedBook.value && selectedBook.value != "all") {
        query = query.eq("kr", selectedBook.value);
        count_query = count_query.eq("kr", selectedBook.value);
      }
      console.log(date.value);
      if (date.value) {
        console.log(date.value);
        const _date = format(date.value, "yyyy-MM-dd");
        query = query.gte("date", `${_date}T00:00:00`).lte("date", `${_date}T23:59:59`);
        count_query = count_query.gte("date", `${_date}T00:00:00`).lte("date", `${_date}T23:59:59`);
      }
      const { data, error } = await query.order(selectedOrderBy.value, {
        ascending: false
      });
      if (error) {
        console.error(error);
      } else {
        boards.value = data != null ? data : [];
        pageBoards.value = [
          ...pageBoards.value,
          ...boards.value.slice(0, page.value * PAGE)
        ];
        gridReorder();
      }
      const {
        data: countData,
        error: countError,
        status,
        count
      } = await count_query;
      if (countError) {
        console.error(countError);
      } else {
        console.log(countData);
        console.log(status);
        console.log(count);
        totalPage.value = count || 0;
      }
    }
    function changePage(newPage) {
      page.value = 1;
      server_page.value = newPage;
      boardAddState.value = false;
      (void 0).documentElement.scrollTop = 0;
      pageBoards.value = [];
      searchBooks();
    }
    const boardAddState = ref(false);
    function infiniteHandler($state) {
      console.log("infiniteHandler");
      if (boardAddState.value)
        return;
      console.log(`${boards.value.length} < ${(page.value - 1) * PAGE}`);
      if (boards.value.length == page.value * PAGE) {
        page.value = 1;
        server_page.value = server_page.value + 1;
        boardAddState.value = false;
        searchBooks();
        return;
      }
      boardAddState.value = true;
      const time = setTimeout(() => {
        try {
          page.value++;
          const nextpage = [
            ...boards.value.slice((page.value - 1) * PAGE, page.value * PAGE)
          ];
          if (nextpage.length == 0)
            return;
          pageBoards.value.push(...nextpage);
          setTimeout(() => {
            if (boards.value.length < page.value * PAGE) {
              $state.loaded();
            } else {
              $state.complete();
            }
            clearTimeout(time);
            boardAddState.value = false;
          });
        } catch (error) {
          console.error(error);
          $state.error();
        }
      });
    }
    function gridReorder() {
      console.log("gridReorder");
      grid = (void 0).querySelector(".grid");
      console.log(grid);
      for (let i = 0; i < 100; i++) {
        setTimeout(() => {
          new Masonry(grid, {
            itemSelector: ".grid-item",
            percentPosition: true
          });
        }, 1e3 * i);
      }
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
      const _component_SheetBoardDetail = _sfc_main$1;
      const _component_Menubar = _sfc_main$2;
      const _component_Select = _sfc_main$7;
      const _component_SelectTrigger = _sfc_main$5;
      const _component_SelectValue = _sfc_main$6;
      const _component_SelectContent = _sfc_main$4;
      const _component_SelectGroup = _sfc_main$3;
      const _component_SelectItem = _sfc_main$2$1;
      const _component_NuxtImg = __nuxt_component_8;
      const _component_Popover = _sfc_main$2$2;
      const _component_PopoverContent = _sfc_main$8;
      const _component_Calendar = _sfc_main$8$1;
      const _component_PopoverTrigger = _sfc_main$1$1;
      const _component_Button = _sfc_main$9;
      const _component_Carousel = _sfc_main$7$1;
      const _component_CarouselContent = _sfc_main$6$1;
      const _component_CarouselItem = _sfc_main$5$1;
      const _component_Badge = _sfc_main$a;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_Pagination = PaginationRoot;
      const _component_PaginationList = PaginationList;
      const _component_PaginationFirst = _sfc_main$3$1;
      const _component_PaginationPrev = _sfc_main$b;
      const _component_PaginationListItem = PaginationListItem;
      const _component_PaginationEllipsis = _sfc_main$4$1;
      const _component_PaginationNext = _sfc_main$1$2;
      const _component_PaginationLast = _sfc_main$2$3;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_SheetBoardDetail, {
        open: unref(boardDetail),
        reply: unref(reply),
        "onUpdate:open": ($event) => boardDetail.value = !unref(boardDetail)
      }, null, _parent));
      _push(`<div class="${ssrRenderClass([{ hidden: unref(isScrollingDown) }, "fixed top-13 w-full z-20 border-y bg-white dark:bg-black"])}" data-v-4b31fb80>`);
      _push(ssrRenderComponent(_component_Menubar, { class: "border-0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Select, {
              modelValue: unref(selectedBook),
              "onUpdate:modelValue": [($event) => isRef(selectedBook) ? selectedBook.value = $event : null, changeSelectedBook]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SelectTrigger, { class: "w-fit border-0 max-w-48" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectValue, { placeholder: "comic" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_SelectValue, { placeholder: "comic" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SelectContent, { class: "max-w-96" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectGroup, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectItem, { value: "all" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\uC804\uCCB4`);
                                  } else {
                                    return [
                                      createTextVNode("\uC804\uCCB4")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(boards_kr), (book) => {
                                _push5(ssrRenderComponent(_component_SelectItem, {
                                  class: "pl-0",
                                  value: book.kr
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="flex items-center gap-2" data-v-4b31fb80${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_component_NuxtImg, {
                                        loading: "lazy",
                                        class: "h-8 rounded-md object-scale-down",
                                        src: unref(KR_IMG_BOOKS)[book.kr]
                                      }, null, _parent6, _scopeId5));
                                      _push6(`<div data-v-4b31fb80${_scopeId5}>${ssrInterpolate(book.kr)}</div></div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "flex items-center gap-2" }, [
                                          createVNode(_component_NuxtImg, {
                                            loading: "lazy",
                                            class: "h-8 rounded-md object-scale-down",
                                            src: unref(KR_IMG_BOOKS)[book.kr]
                                          }, null, 8, ["src"]),
                                          createVNode("div", null, toDisplayString(book.kr), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                createVNode(_component_SelectItem, { value: "all" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\uC804\uCCB4")
                                  ]),
                                  _: 1
                                }),
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(boards_kr), (book) => {
                                  return openBlock(), createBlock(_component_SelectItem, {
                                    class: "pl-0",
                                    value: book.kr
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex items-center gap-2" }, [
                                        createVNode(_component_NuxtImg, {
                                          loading: "lazy",
                                          class: "h-8 rounded-md object-scale-down",
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_SelectGroup, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectItem, { value: "all" }, {
                                default: withCtx(() => [
                                  createTextVNode("\uC804\uCCB4")
                                ]),
                                _: 1
                              }),
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(boards_kr), (book) => {
                                return openBlock(), createBlock(_component_SelectItem, {
                                  class: "pl-0",
                                  value: book.kr
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex items-center gap-2" }, [
                                      createVNode(_component_NuxtImg, {
                                        loading: "lazy",
                                        class: "h-8 rounded-md object-scale-down",
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SelectTrigger, { class: "w-fit border-0 max-w-48" }, {
                      default: withCtx(() => [
                        createVNode(_component_SelectValue, { placeholder: "comic" })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_SelectContent, { class: "max-w-96" }, {
                      default: withCtx(() => [
                        createVNode(_component_SelectGroup, null, {
                          default: withCtx(() => [
                            createVNode(_component_SelectItem, { value: "all" }, {
                              default: withCtx(() => [
                                createTextVNode("\uC804\uCCB4")
                              ]),
                              _: 1
                            }),
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(boards_kr), (book) => {
                              return openBlock(), createBlock(_component_SelectItem, {
                                class: "pl-0",
                                value: book.kr
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center gap-2" }, [
                                    createVNode(_component_NuxtImg, {
                                      loading: "lazy",
                                      class: "h-8 rounded-md object-scale-down",
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Select, {
              modelValue: unref(selectedSubject),
              "onUpdate:modelValue": [($event) => isRef(selectedSubject) ? selectedSubject.value = $event : null, changeSelectedBook]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SelectTrigger, { class: "w-fit border-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectValue, { placeholder: "sub" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_SelectValue, { placeholder: "sub" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SelectContent, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectGroup, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectItem, {
                                class: "pl-0",
                                value: "all"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\uC804\uCCB4`);
                                  } else {
                                    return [
                                      createTextVNode("\uC804\uCCB4")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(boards_subject), (subject) => {
                                _push5(ssrRenderComponent(_component_SelectItem, {
                                  class: "pl-0",
                                  value: subject
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(subject)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(subject), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                createVNode(_component_SelectItem, {
                                  class: "pl-0",
                                  value: "all"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\uC804\uCCB4")
                                  ]),
                                  _: 1
                                }),
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(boards_subject), (subject) => {
                                  return openBlock(), createBlock(_component_SelectItem, {
                                    class: "pl-0",
                                    value: subject
                                  }, {
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_SelectGroup, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectItem, {
                                class: "pl-0",
                                value: "all"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\uC804\uCCB4")
                                ]),
                                _: 1
                              }),
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(boards_subject), (subject) => {
                                return openBlock(), createBlock(_component_SelectItem, {
                                  class: "pl-0",
                                  value: subject
                                }, {
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SelectTrigger, { class: "w-fit border-0" }, {
                      default: withCtx(() => [
                        createVNode(_component_SelectValue, { placeholder: "sub" })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_SelectContent, null, {
                      default: withCtx(() => [
                        createVNode(_component_SelectGroup, null, {
                          default: withCtx(() => [
                            createVNode(_component_SelectItem, {
                              class: "pl-0",
                              value: "all"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\uC804\uCCB4")
                              ]),
                              _: 1
                            }),
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(boards_subject), (subject) => {
                              return openBlock(), createBlock(_component_SelectItem, {
                                class: "pl-0",
                                value: subject
                              }, {
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Select, {
              modelValue: unref(selectedOrderBy),
              "onUpdate:modelValue": [($event) => isRef(selectedOrderBy) ? selectedOrderBy.value = $event : null, updateSelectedOrderBy]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SelectTrigger, { class: "w-fit border-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectValue, { placeholder: "order" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_SelectValue, { placeholder: "order" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SelectContent, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectGroup, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectItem, {
                                class: "pl-0",
                                value: "date"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \uC2DC\uAC04\uC21C `);
                                  } else {
                                    return [
                                      createTextVNode(" \uC2DC\uAC04\uC21C ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_SelectItem, {
                                class: "pl-0",
                                value: "recommend"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \uCD94\uCC9C\uC21C `);
                                  } else {
                                    return [
                                      createTextVNode(" \uCD94\uCC9C\uC21C ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_SelectItem, {
                                class: "pl-0",
                                value: "number"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \uB367\uAE00\uC21C `);
                                  } else {
                                    return [
                                      createTextVNode(" \uB367\uAE00\uC21C ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_SelectItem, {
                                class: "pl-0",
                                value: "count"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \uC870\uD68C\uC21C `);
                                  } else {
                                    return [
                                      createTextVNode(" \uC870\uD68C\uC21C ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectItem, {
                                  class: "pl-0",
                                  value: "date"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \uC2DC\uAC04\uC21C ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_SelectItem, {
                                  class: "pl-0",
                                  value: "recommend"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \uCD94\uCC9C\uC21C ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_SelectItem, {
                                  class: "pl-0",
                                  value: "number"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \uB367\uAE00\uC21C ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_SelectItem, {
                                  class: "pl-0",
                                  value: "count"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \uC870\uD68C\uC21C ")
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
                          createVNode(_component_SelectGroup, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectItem, {
                                class: "pl-0",
                                value: "date"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \uC2DC\uAC04\uC21C ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectItem, {
                                class: "pl-0",
                                value: "recommend"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \uCD94\uCC9C\uC21C ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectItem, {
                                class: "pl-0",
                                value: "number"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \uB367\uAE00\uC21C ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectItem, {
                                class: "pl-0",
                                value: "count"
                              }, {
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SelectTrigger, { class: "w-fit border-0" }, {
                      default: withCtx(() => [
                        createVNode(_component_SelectValue, { placeholder: "order" })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_SelectContent, null, {
                      default: withCtx(() => [
                        createVNode(_component_SelectGroup, null, {
                          default: withCtx(() => [
                            createVNode(_component_SelectItem, {
                              class: "pl-0",
                              value: "date"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \uC2DC\uAC04\uC21C ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_SelectItem, {
                              class: "pl-0",
                              value: "recommend"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \uCD94\uCC9C\uC21C ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_SelectItem, {
                              class: "pl-0",
                              value: "number"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \uB367\uAE00\uC21C ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_SelectItem, {
                              class: "pl-0",
                              value: "count"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \uC870\uD68C\uC21C ")
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Popover, { class: "hidden" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PopoverContent, { class: "w-auto p-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Calendar, {
                          modelValue: unref(date),
                          "onUpdate:modelValue": ($event) => isRef(date) ? date.value = $event : null
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Calendar, {
                            modelValue: unref(date),
                            "onUpdate:modelValue": ($event) => isRef(date) ? date.value = $event : null
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PopoverContent, { class: "w-auto p-0" }, {
                      default: withCtx(() => [
                        createVNode(_component_Calendar, {
                          modelValue: unref(date),
                          "onUpdate:modelValue": ($event) => isRef(date) ? date.value = $event : null
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Popover, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PopoverTrigger, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Button, {
                          variant: "ghost",
                          class: unref(cn)(
                            "justify-start text-left font-normal",
                            !unref(date) && "text-muted-foreground"
                          )
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Calendar), { class: "mr-2 h-4 w-4" }, null, _parent5, _scopeId4));
                              _push5(`<span data-v-4b31fb80${_scopeId4}>${ssrInterpolate(unref(date) ? unref(format)(unref(date), "yyyy-MM-dd") : "\uB0A0\uC9DC")}</span>`);
                            } else {
                              return [
                                createVNode(unref(Calendar), { class: "mr-2 h-4 w-4" }),
                                createVNode("span", null, toDisplayString(unref(date) ? unref(format)(unref(date), "yyyy-MM-dd") : "\uB0A0\uC9DC"), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Button, {
                            variant: "ghost",
                            class: unref(cn)(
                              "justify-start text-left font-normal",
                              !unref(date) && "text-muted-foreground"
                            )
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Calendar), { class: "mr-2 h-4 w-4" }),
                              createVNode("span", null, toDisplayString(unref(date) ? unref(format)(unref(date), "yyyy-MM-dd") : "\uB0A0\uC9DC"), 1)
                            ]),
                            _: 1
                          }, 8, ["class"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_PopoverContent, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Calendar, {
                          modelValue: unref(date),
                          "onUpdate:modelValue": ($event) => isRef(date) ? date.value = $event : null
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Calendar, {
                            modelValue: unref(date),
                            "onUpdate:modelValue": ($event) => isRef(date) ? date.value = $event : null
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PopoverTrigger, null, {
                      default: withCtx(() => [
                        createVNode(_component_Button, {
                          variant: "ghost",
                          class: unref(cn)(
                            "justify-start text-left font-normal",
                            !unref(date) && "text-muted-foreground"
                          )
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Calendar), { class: "mr-2 h-4 w-4" }),
                            createVNode("span", null, toDisplayString(unref(date) ? unref(format)(unref(date), "yyyy-MM-dd") : "\uB0A0\uC9DC"), 1)
                          ]),
                          _: 1
                        }, 8, ["class"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_PopoverContent, null, {
                      default: withCtx(() => [
                        createVNode(_component_Calendar, {
                          modelValue: unref(date),
                          "onUpdate:modelValue": ($event) => isRef(date) ? date.value = $event : null
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
              createVNode(_component_Select, {
                modelValue: unref(selectedBook),
                "onUpdate:modelValue": [($event) => isRef(selectedBook) ? selectedBook.value = $event : null, changeSelectedBook]
              }, {
                default: withCtx(() => [
                  createVNode(_component_SelectTrigger, { class: "w-fit border-0 max-w-48" }, {
                    default: withCtx(() => [
                      createVNode(_component_SelectValue, { placeholder: "comic" })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_SelectContent, { class: "max-w-96" }, {
                    default: withCtx(() => [
                      createVNode(_component_SelectGroup, null, {
                        default: withCtx(() => [
                          createVNode(_component_SelectItem, { value: "all" }, {
                            default: withCtx(() => [
                              createTextVNode("\uC804\uCCB4")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(boards_kr), (book) => {
                            return openBlock(), createBlock(_component_SelectItem, {
                              class: "pl-0",
                              value: book.kr
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  createVNode(_component_NuxtImg, {
                                    loading: "lazy",
                                    class: "h-8 rounded-md object-scale-down",
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
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_Select, {
                modelValue: unref(selectedSubject),
                "onUpdate:modelValue": [($event) => isRef(selectedSubject) ? selectedSubject.value = $event : null, changeSelectedBook]
              }, {
                default: withCtx(() => [
                  createVNode(_component_SelectTrigger, { class: "w-fit border-0" }, {
                    default: withCtx(() => [
                      createVNode(_component_SelectValue, { placeholder: "sub" })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_SelectContent, null, {
                    default: withCtx(() => [
                      createVNode(_component_SelectGroup, null, {
                        default: withCtx(() => [
                          createVNode(_component_SelectItem, {
                            class: "pl-0",
                            value: "all"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\uC804\uCCB4")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(boards_subject), (subject) => {
                            return openBlock(), createBlock(_component_SelectItem, {
                              class: "pl-0",
                              value: subject
                            }, {
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
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_Select, {
                modelValue: unref(selectedOrderBy),
                "onUpdate:modelValue": [($event) => isRef(selectedOrderBy) ? selectedOrderBy.value = $event : null, updateSelectedOrderBy]
              }, {
                default: withCtx(() => [
                  createVNode(_component_SelectTrigger, { class: "w-fit border-0" }, {
                    default: withCtx(() => [
                      createVNode(_component_SelectValue, { placeholder: "order" })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_SelectContent, null, {
                    default: withCtx(() => [
                      createVNode(_component_SelectGroup, null, {
                        default: withCtx(() => [
                          createVNode(_component_SelectItem, {
                            class: "pl-0",
                            value: "date"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \uC2DC\uAC04\uC21C ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, {
                            class: "pl-0",
                            value: "recommend"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \uCD94\uCC9C\uC21C ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, {
                            class: "pl-0",
                            value: "number"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \uB367\uAE00\uC21C ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, {
                            class: "pl-0",
                            value: "count"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \uC870\uD68C\uC21C ")
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
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_Popover, { class: "hidden" }, {
                default: withCtx(() => [
                  createVNode(_component_PopoverContent, { class: "w-auto p-0" }, {
                    default: withCtx(() => [
                      createVNode(_component_Calendar, {
                        modelValue: unref(date),
                        "onUpdate:modelValue": ($event) => isRef(date) ? date.value = $event : null
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_Popover, null, {
                default: withCtx(() => [
                  createVNode(_component_PopoverTrigger, null, {
                    default: withCtx(() => [
                      createVNode(_component_Button, {
                        variant: "ghost",
                        class: unref(cn)(
                          "justify-start text-left font-normal",
                          !unref(date) && "text-muted-foreground"
                        )
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Calendar), { class: "mr-2 h-4 w-4" }),
                          createVNode("span", null, toDisplayString(unref(date) ? unref(format)(unref(date), "yyyy-MM-dd") : "\uB0A0\uC9DC"), 1)
                        ]),
                        _: 1
                      }, 8, ["class"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_PopoverContent, null, {
                    default: withCtx(() => [
                      createVNode(_component_Calendar, {
                        modelValue: unref(date),
                        "onUpdate:modelValue": ($event) => isRef(date) ? date.value = $event : null
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
      _push(`</div><div class="sm:hidden pt-10" data-v-4b31fb80><!--[-->`);
      ssrRenderList(unref(pageBoards), (board) => {
        _push(`<div class="w-screen mb-4" data-v-4b31fb80><div class="relative w-full" data-v-4b31fb80><div class="absolute z-10 p-2 text-white w-2/3" style="${ssrRenderStyle({ "pointer-events": "none" })}" data-v-4b31fb80><div class="font-bold line-clamp-2" data-v-4b31fb80>${ssrInterpolate(board.title)}</div><div class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis" data-v-4b31fb80>${ssrInterpolate(board.writer)}</div></div>`);
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
                            _push4(`<div class="relative h-full" data-v-4b31fb80${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_NuxtImg, {
                              loading: "lazy",
                              class: "md:rounded-md min-h-56 max-h-256 h-full w-full object-scale-down",
                              src: ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(img).replace(/co\.kr/g, "com")
                            }, null, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_Badge, { class: "absolute top-3 right-3 bg-opacity-50 bg-black" }, {
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
                                createVNode(_component_NuxtImg, {
                                  loading: "lazy",
                                  class: "md:rounded-md min-h-56 max-h-256 h-full w-full object-scale-down",
                                  src: ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(img).replace(/co\.kr/g, "com")
                                }, null, 8, ["src"]),
                                createVNode(_component_Badge, { class: "absolute top-3 right-3 bg-opacity-50 bg-black" }, {
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
                              createVNode(_component_NuxtImg, {
                                loading: "lazy",
                                class: "md:rounded-md min-h-56 max-h-256 h-full w-full object-scale-down",
                                src: ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(img).replace(/co\.kr/g, "com")
                              }, null, 8, ["src"]),
                              createVNode(_component_Badge, { class: "absolute top-3 right-3 bg-opacity-50 bg-black" }, {
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
                            createVNode(_component_NuxtImg, {
                              loading: "lazy",
                              class: "md:rounded-md min-h-56 max-h-256 h-full w-full object-scale-down",
                              src: ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(img).replace(/co\.kr/g, "com")
                            }, null, 8, ["src"]),
                            createVNode(_component_Badge, { class: "absolute top-3 right-3 bg-opacity-50 bg-black" }, {
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
        _push(`<div class="absolute top-0 left-0 w-full h-full md:rounded-md" style="${ssrRenderStyle({ "background": "linear-gradient(\n              to bottom,\n              rgba(0, 0, 0, 0.5),\n              rgba(0, 0, 0, 0) 50%,\n              rgba(0, 0, 0, 0) 50%,\n              rgba(0, 0, 0, 0.5)\n            )", "pointer-events": "none" })}" data-v-4b31fb80></div><div class="p-4 flex w-full absolute bottom-0 text-white justify-between gap-4 items-end overflow-hidden" style="${ssrRenderStyle({ "pointer-events": "none" })}" data-v-4b31fb80><div class="flex gap-4 items-end flex-1 overflow-hidden" data-v-4b31fb80>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          loading: "lazy",
          class: "h-16 rounded-md object-cover shrink-0",
          src: unref(KR_IMG_BOOKS)[board.kr]
        }, null, _parent));
        _push(`<div class="flex-col flex-1 overflow-hidden" data-v-4b31fb80><div class="line-clamp-2" data-v-4b31fb80>${ssrInterpolate(board.content)}</div><div class="flex text-xs gap-2" data-v-4b31fb80><div class="font-normal" data-v-4b31fb80>${ssrInterpolate(("timeAgo" in _ctx ? _ctx.timeAgo : unref(timeAgo))(board.date))}</div></div></div></div><div class="flex flex-col gap-2 text-xl items-center shrink-0" data-v-4b31fb80><div class="flex flex-col gap-1 items-center" style="${ssrRenderStyle({ "pointer-events": "auto" })}" data-v-4b31fb80>`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["far", "comment"] }, null, _parent));
        _push(`<div class="text-sm" data-v-4b31fb80>${ssrInterpolate(board.number)}</div></div><div class="flex flex-col gap-1 items-center" data-v-4b31fb80>`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["far", "eye"] }, null, _parent));
        _push(`<div class="text-sm" data-v-4b31fb80>${ssrInterpolate(board.count)}</div></div><div class="flex flex-col gap-1 items-center" data-v-4b31fb80>`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "star"] }, null, _parent));
        _push(`<div class="text-sm" data-v-4b31fb80>${ssrInterpolate(board.recommend)}</div></div></div></div></div></div>`);
      });
      _push(`<!--]--><div class="w-full rounded-md p-2 flex items-center justify-center" data-v-4b31fb80>`);
      if (unref(pageBoards).length > 0 && unref(boardAddState) == false) {
        _push(ssrRenderComponent(unref(InfiniteLoading), { onInfinite: infiniteHandler }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="md:p-2 md:py-4 md:pt-14 hidden sm:block" data-v-4b31fb80><div class="grid" data-v-4b31fb80><div class="grid-sizer" data-v-4b31fb80></div><!--[-->`);
      ssrRenderList(unref(boards), (board) => {
        _push(`<div class="w-screen mb-4 grid-item md:px-2 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 3xl:w-1/6 4xl:w-1/7" data-v-4b31fb80><div class="relative w-full" data-v-4b31fb80><div class="absolute z-10 p-2 text-white w-2/3" style="${ssrRenderStyle({ "pointer-events": "none" })}" data-v-4b31fb80><div class="font-bold line-clamp-2" data-v-4b31fb80>${ssrInterpolate(board.title)}</div><div class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis" data-v-4b31fb80>${ssrInterpolate(board.writer)}</div></div>`);
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
                            _push4(`<div class="relative h-full" data-v-4b31fb80${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_NuxtImg, {
                              loading: "lazy",
                              class: "md:rounded-md min-h-56 max-h-256 h-full w-full object-scale-down",
                              src: ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(img).replace(/co\.kr/g, "com")
                            }, null, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_Badge, { class: "absolute top-3 right-3 bg-opacity-50 bg-black" }, {
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
                                createVNode(_component_NuxtImg, {
                                  loading: "lazy",
                                  class: "md:rounded-md min-h-56 max-h-256 h-full w-full object-scale-down",
                                  src: ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(img).replace(/co\.kr/g, "com")
                                }, null, 8, ["src"]),
                                createVNode(_component_Badge, { class: "absolute top-3 right-3 bg-opacity-50 bg-black" }, {
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
                              createVNode(_component_NuxtImg, {
                                loading: "lazy",
                                class: "md:rounded-md min-h-56 max-h-256 h-full w-full object-scale-down",
                                src: ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(img).replace(/co\.kr/g, "com")
                              }, null, 8, ["src"]),
                              createVNode(_component_Badge, { class: "absolute top-3 right-3 bg-opacity-50 bg-black" }, {
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
                            createVNode(_component_NuxtImg, {
                              loading: "lazy",
                              class: "md:rounded-md min-h-56 max-h-256 h-full w-full object-scale-down",
                              src: ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(img).replace(/co\.kr/g, "com")
                            }, null, 8, ["src"]),
                            createVNode(_component_Badge, { class: "absolute top-3 right-3 bg-opacity-50 bg-black" }, {
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
        _push(`<div class="absolute top-0 left-0 w-full h-full md:rounded-md" style="${ssrRenderStyle({ "background": "linear-gradient(\n                to bottom,\n                rgba(0, 0, 0, 0.5),\n                rgba(0, 0, 0, 0) 50%,\n                rgba(0, 0, 0, 0) 50%,\n                rgba(0, 0, 0, 0.5)\n              )", "pointer-events": "none" })}" data-v-4b31fb80></div><div class="p-4 flex w-full absolute bottom-0 text-white justify-between gap-4 items-end overflow-hidden" style="${ssrRenderStyle({ "pointer-events": "none" })}" data-v-4b31fb80><div class="flex gap-4 items-end flex-1 overflow-hidden" data-v-4b31fb80>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          loading: "lazy",
          class: "h-16 rounded-md object-cover shrink-0",
          src: unref(KR_IMG_BOOKS)[board.kr]
        }, null, _parent));
        _push(`<div class="flex-col flex-1 overflow-hidden" data-v-4b31fb80><div class="line-clamp-2" data-v-4b31fb80>${ssrInterpolate(board.content)}</div><div class="flex text-xs gap-2" data-v-4b31fb80><div class="font-normal" data-v-4b31fb80>${ssrInterpolate(("timeAgo" in _ctx ? _ctx.timeAgo : unref(timeAgo))(board.date))}</div></div></div></div><div class="flex flex-col gap-2 text-xl items-center shrink-0" data-v-4b31fb80><div class="flex flex-col gap-1 items-center" style="${ssrRenderStyle({ "pointer-events": "auto" })}" data-v-4b31fb80>`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["far", "comment"] }, null, _parent));
        _push(`<div class="text-sm" data-v-4b31fb80>${ssrInterpolate(board.number)}</div></div><div class="flex flex-col gap-1 items-center" data-v-4b31fb80>`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["far", "eye"] }, null, _parent));
        _push(`<div class="text-sm" data-v-4b31fb80>${ssrInterpolate(board.count)}</div></div><div class="flex flex-col gap-1 items-center" data-v-4b31fb80>`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "star"] }, null, _parent));
        _push(`<div class="text-sm" data-v-4b31fb80>${ssrInterpolate(board.recommend)}</div></div></div></div></div></div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_Pagination, {
        class: "flex justify-center",
        total: unref(totalPage) / 10,
        "sibling-count": 1,
        "show-edges": "",
        "default-page": 1
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PaginationList, { class: "flex items-center gap-1" }, {
              default: withCtx(({ items }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PaginationFirst, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_PaginationPrev, null, null, _parent3, _scopeId2));
                  _push3(`<!--[-->`);
                  ssrRenderList(items, (item, index) => {
                    _push3(`<!--[-->`);
                    if (item.type === "page") {
                      _push3(ssrRenderComponent(_component_PaginationListItem, {
                        key: index,
                        value: item.value,
                        "as-child": ""
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_Button, {
                              class: "w-10 h-10 p-0",
                              variant: item.value === unref(server_page) ? "default" : "outline",
                              onClick: ($event) => changePage(item.value)
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.value)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.value), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_Button, {
                                class: "w-10 h-10 p-0",
                                variant: item.value === unref(server_page) ? "default" : "outline",
                                onClick: ($event) => changePage(item.value)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.value), 1)
                                ]),
                                _: 2
                              }, 1032, ["variant", "onClick"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(_component_PaginationEllipsis, {
                        key: item.type,
                        index
                      }, null, _parent3, _scopeId2));
                    }
                    _push3(`<!--]-->`);
                  });
                  _push3(`<!--]-->`);
                  _push3(ssrRenderComponent(_component_PaginationNext, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_PaginationLast, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PaginationFirst),
                    createVNode(_component_PaginationPrev),
                    (openBlock(true), createBlock(Fragment, null, renderList(items, (item, index) => {
                      return openBlock(), createBlock(Fragment, null, [
                        item.type === "page" ? (openBlock(), createBlock(_component_PaginationListItem, {
                          key: index,
                          value: item.value,
                          "as-child": ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_Button, {
                              class: "w-10 h-10 p-0",
                              variant: item.value === unref(server_page) ? "default" : "outline",
                              onClick: ($event) => changePage(item.value)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.value), 1)
                              ]),
                              _: 2
                            }, 1032, ["variant", "onClick"])
                          ]),
                          _: 2
                        }, 1032, ["value"])) : (openBlock(), createBlock(_component_PaginationEllipsis, {
                          key: item.type,
                          index
                        }, null, 8, ["index"]))
                      ], 64);
                    }), 256)),
                    createVNode(_component_PaginationNext),
                    createVNode(_component_PaginationLast)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_PaginationList, { class: "flex items-center gap-1" }, {
                default: withCtx(({ items }) => [
                  createVNode(_component_PaginationFirst),
                  createVNode(_component_PaginationPrev),
                  (openBlock(true), createBlock(Fragment, null, renderList(items, (item, index) => {
                    return openBlock(), createBlock(Fragment, null, [
                      item.type === "page" ? (openBlock(), createBlock(_component_PaginationListItem, {
                        key: index,
                        value: item.value,
                        "as-child": ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Button, {
                            class: "w-10 h-10 p-0",
                            variant: item.value === unref(server_page) ? "default" : "outline",
                            onClick: ($event) => changePage(item.value)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.value), 1)
                            ]),
                            _: 2
                          }, 1032, ["variant", "onClick"])
                        ]),
                        _: 2
                      }, 1032, ["value"])) : (openBlock(), createBlock(_component_PaginationEllipsis, {
                        key: item.type,
                        index
                      }, null, 8, ["index"]))
                    ], 64);
                  }), 256)),
                  createVNode(_component_PaginationNext),
                  createVNode(_component_PaginationLast)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/book/board_23.02.15.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const board_23_02_15 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4b31fb80"]]);

export { board_23_02_15 as default };
//# sourceMappingURL=board_23.02.15-4E3OsvaJ.mjs.map
