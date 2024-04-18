import { _ as _sfc_main$4$1, a as _sfc_main$5, b as _sfc_main$3$1, c as _sfc_main$2$2, d as _sfc_main$1$2 } from './DialogContent-gH5cY4B6.mjs';
import { _ as _sfc_main$6 } from './index-VljijB2M.mjs';
import { n as navigateTo } from '../server.mjs';
import { useSSRContext, defineComponent, ref, computed, unref, isRef, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './Header-Ffs2ceUt.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$3, b as _sfc_main$1$1 } from './TabsList-76hBfA3R.mjs';
import { _ as _sfc_main$4 } from './TabsContent-TJ4DkLwy.mjs';
import { g as getSaturday } from './book-lQ5h8MvC.mjs';
import { g as getGenreKrList, u as uniqueGenreByGenre } from './useGenre-L38G2Trn.mjs';
import { u as useSupabase } from './useSupabase-vnVKN2Il.mjs';
import { u as updateCoverImage, a as updateCoverImageFirst } from './useCoverList-oAV9MfWr.mjs';
import { u as useFetch } from './fetch-zfJupE3j.mjs';
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
import '@yeger/vue-masonry-wall';
import 'clsx';
import 'tailwind-merge';
import './state-0C5oRJ7z.mjs';
import './useBooks-AfFfZ3pm.mjs';
import '@vueuse/core';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "namuWiki",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    wiki: {},
    selectedBook: {}
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Dialog = _sfc_main$4$1;
      const _component_DialogContent = _sfc_main$5;
      const _component_DialogHeader = _sfc_main$3$1;
      const _component_DialogTitle = _sfc_main$2$2;
      const _component_DialogDescription = _sfc_main$1$2;
      const _component_Button = _sfc_main$6;
      _push(ssrRenderComponent(_component_Dialog, mergeProps({
        open: _ctx.open,
        "onUpdate:open": ($event) => emit("update:open")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DialogContent, { class: "w-full max-w-7xl h-5/6 overflow-y-scroll" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_DialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\uB9CC\uD654 \uC0C1\uC138`);
                            } else {
                              return [
                                createTextVNode("\uB9CC\uD654 \uC0C1\uC138")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DialogDescription, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uD574\uB2F9 \uB0B4\uC6A9\uC740 \uB098\uBB34\uC704\uD0A4\uC5D0\uC11C \uBC1C\uCDCC\uD55C \uAC83\uC785\uB2C8\uB2E4. `);
                            } else {
                              return [
                                createTextVNode(" \uD574\uB2F9 \uB0B4\uC6A9\uC740 \uB098\uBB34\uC704\uD0A4\uC5D0\uC11C \uBC1C\uCDCC\uD55C \uAC83\uC785\uB2C8\uB2E4. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\uB9CC\uD654 \uC0C1\uC138")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DialogDescription, null, {
                            default: withCtx(() => [
                              createTextVNode(" \uD574\uB2F9 \uB0B4\uC6A9\uC740 \uB098\uBB34\uC704\uD0A4\uC5D0\uC11C \uBC1C\uCDCC\uD55C \uAC83\uC785\uB2C8\uB2E4. ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-4"${_scopeId2}><img${ssrRenderAttr("src", _ctx.selectedBook.img)} class="h-56 w-fit object-cover overflow-hidden rounded-md"${_scopeId2}><div class="flex flex-col gap-4"${_scopeId2}><div${_scopeId2}><div class="text-sm font-bold"${_scopeId2}>kr</div><div${_scopeId2}>${ssrInterpolate(_ctx.selectedBook.kr)}</div></div><div${_scopeId2}><div class="text-sm font-bold"${_scopeId2}>jp</div><div${_scopeId2}>${ssrInterpolate(_ctx.selectedBook.jp)}</div></div>`);
                  if (_ctx.selectedBook.dc) {
                    _push3(`<div class="flex flex-col gap-1"${_scopeId2}><div class="text-sm font-bold"${_scopeId2}>\uAC8C\uC2DC\uD310\uC73C\uB85C</div>`);
                    _push3(ssrRenderComponent(_component_Button, {
                      variant: "outline",
                      onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/book/board/${_ctx.selectedBook.kr}`)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.selectedBook.kr)} \uAC8C\uC2DC\uD310\uC73C\uB85C \uC774\uB3D9 `);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.selectedBook.kr) + " \uAC8C\uC2DC\uD310\uC73C\uB85C \uC774\uB3D9 ", 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div><!--[-->`);
                  ssrRenderList(_ctx.wiki, (data, index) => {
                    _push3(`<div class="flex flex-col gap-1"${_scopeId2}><div class="text-3xl font-bold"${_scopeId2}>${ssrInterpolate(index + 1)}. ${ssrInterpolate(data == null ? void 0 : data.title)}</div><div${_scopeId2}>${ssrInterpolate(data == null ? void 0 : data.content)}</div></div>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-4" }, [
                      createVNode(_component_DialogHeader, null, {
                        default: withCtx(() => [
                          createVNode(_component_DialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\uB9CC\uD654 \uC0C1\uC138")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DialogDescription, null, {
                            default: withCtx(() => [
                              createTextVNode(" \uD574\uB2F9 \uB0B4\uC6A9\uC740 \uB098\uBB34\uC704\uD0A4\uC5D0\uC11C \uBC1C\uCDCC\uD55C \uAC83\uC785\uB2C8\uB2E4. ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "flex gap-4" }, [
                        createVNode("img", {
                          src: _ctx.selectedBook.img,
                          class: "h-56 w-fit object-cover overflow-hidden rounded-md"
                        }, null, 8, ["src"]),
                        createVNode("div", { class: "flex flex-col gap-4" }, [
                          createVNode("div", null, [
                            createVNode("div", { class: "text-sm font-bold" }, "kr"),
                            createVNode("div", null, toDisplayString(_ctx.selectedBook.kr), 1)
                          ]),
                          createVNode("div", null, [
                            createVNode("div", { class: "text-sm font-bold" }, "jp"),
                            createVNode("div", null, toDisplayString(_ctx.selectedBook.jp), 1)
                          ]),
                          _ctx.selectedBook.dc ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "flex flex-col gap-1"
                          }, [
                            createVNode("div", { class: "text-sm font-bold" }, "\uAC8C\uC2DC\uD310\uC73C\uB85C"),
                            createVNode(_component_Button, {
                              variant: "outline",
                              onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/book/board/${_ctx.selectedBook.kr}`)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.selectedBook.kr) + " \uAC8C\uC2DC\uD310\uC73C\uB85C \uC774\uB3D9 ", 1)
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ])) : createCommentVNode("", true)
                        ])
                      ]),
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.wiki, (data, index) => {
                        return openBlock(), createBlock("div", { class: "flex flex-col gap-1" }, [
                          createVNode("div", { class: "text-3xl font-bold" }, toDisplayString(index + 1) + ". " + toDisplayString(data == null ? void 0 : data.title), 1),
                          createVNode("div", null, toDisplayString(data == null ? void 0 : data.content), 1)
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
              createVNode(_component_DialogContent, { class: "w-full max-w-7xl h-5/6 overflow-y-scroll" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col gap-4" }, [
                    createVNode(_component_DialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_DialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\uB9CC\uD654 \uC0C1\uC138")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DialogDescription, null, {
                          default: withCtx(() => [
                            createTextVNode(" \uD574\uB2F9 \uB0B4\uC6A9\uC740 \uB098\uBB34\uC704\uD0A4\uC5D0\uC11C \uBC1C\uCDCC\uD55C \uAC83\uC785\uB2C8\uB2E4. ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex gap-4" }, [
                      createVNode("img", {
                        src: _ctx.selectedBook.img,
                        class: "h-56 w-fit object-cover overflow-hidden rounded-md"
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "flex flex-col gap-4" }, [
                        createVNode("div", null, [
                          createVNode("div", { class: "text-sm font-bold" }, "kr"),
                          createVNode("div", null, toDisplayString(_ctx.selectedBook.kr), 1)
                        ]),
                        createVNode("div", null, [
                          createVNode("div", { class: "text-sm font-bold" }, "jp"),
                          createVNode("div", null, toDisplayString(_ctx.selectedBook.jp), 1)
                        ]),
                        _ctx.selectedBook.dc ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex flex-col gap-1"
                        }, [
                          createVNode("div", { class: "text-sm font-bold" }, "\uAC8C\uC2DC\uD310\uC73C\uB85C"),
                          createVNode(_component_Button, {
                            variant: "outline",
                            onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/book/board/${_ctx.selectedBook.kr}`)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.selectedBook.kr) + " \uAC8C\uC2DC\uD310\uC73C\uB85C \uC774\uB3D9 ", 1)
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])) : createCommentVNode("", true)
                      ])
                    ]),
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.wiki, (data, index) => {
                      return openBlock(), createBlock("div", { class: "flex flex-col gap-1" }, [
                        createVNode("div", { class: "text-3xl font-bold" }, toDisplayString(index + 1) + ". " + toDisplayString(data == null ? void 0 : data.title), 1),
                        createVNode("div", null, toDisplayString(data == null ? void 0 : data.content), 1)
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dialog/namuWiki.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "chart",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedGenre = ref("all");
    async function selecteGenre(genre) {
      selectedGenre.value = genre;
      await thisWeek();
      await fourWeek();
      await oneYear();
      datas.value = [
        {
          title: "week",
          \uB2E8\uD589\uBCF8: book.value.data,
          \uC2DC\uB9AC\uC988: bestSelling.value.series
        },
        {
          title: "month",
          \uB2E8\uD589\uBCF8: weekBook.value.data,
          \uC2DC\uB9AC\uC988: bestSelling.value.week
        },
        {
          title: "year",
          \uB2E8\uD589\uBCF8: yearBook.value.data,
          \uC2DC\uB9AC\uC988: bestSelling.value.year
        }
      ];
    }
    const day = ref(getSaturday());
    const book = ref({
      data: [],
      error: ""
    });
    const weekBook = ref({
      data: [],
      error: ""
    });
    const yearBook = ref({
      data: [],
      error: ""
    });
    const bestSelling = ref({
      series: {},
      week: {},
      year: {}
    });
    const datas = ref([
      {
        title: "week",
        \uB2E8\uD589\uBCF8: [],
        \uC2DC\uB9AC\uC988: []
      },
      {
        title: "month",
        \uB2E8\uD589\uBCF8: [],
        \uC2DC\uB9AC\uC988: []
      },
      {
        title: "year",
        \uB2E8\uD589\uBCF8: [],
        \uC2DC\uB9AC\uC988: []
      }
    ]);
    const selectedBook = ref({});
    const krList = computed(() => {
      if (selectedGenre.value === "all")
        return [];
      return getGenreKrList(selectedGenre.value).map((genre) => {
        return genre.kr;
      });
    });
    async function thisWeek() {
      let query = useSupabase().value.from("book").select().order("sales", { ascending: false });
      if (krList.value.length > 0) {
        query = query.in("kr", krList.value);
      }
      if (book.value.data.length === 0) {
        query = query.eq("date", getSaturday(1));
      } else {
        query = query.eq("date", day.value);
      }
      book.value = await query;
      book.value.data = await updateCoverImage(book.value.data);
      bestSelling.value.series = restructureData(book.value.data);
      bestSelling.value.series = await updateCoverImageFirst(
        bestSelling.value.series
      );
    }
    async function fourWeek() {
      let query = useSupabase().value.from("book").select().gte("date", getSaturday(4)).lte("date", day.value).order("sales", { ascending: false });
      if (krList.value.length > 0) {
        query = query.in("kr", krList.value);
      }
      weekBook.value = await query;
      weekBook.value.data = restructureNumData(weekBook.value.data);
      weekBook.value.data = await updateCoverImage(weekBook.value.data);
      bestSelling.value.week = restructureData(weekBook.value.data);
      bestSelling.value.week = await updateCoverImageFirst(bestSelling.value.week);
    }
    async function oneYear() {
      let query = useSupabase().value.from("book").select().gte("date", getSaturday(52)).lte("date", day.value).order("sales", { ascending: false });
      if (krList.value.length > 0) {
        query = query.in("kr", krList.value);
      }
      yearBook.value = await query;
      yearBook.value.data = restructureNumData(yearBook.value.data);
      yearBook.value.data = await updateCoverImage(yearBook.value.data);
      bestSelling.value.year = restructureData(yearBook.value.data);
      bestSelling.value.year = await updateCoverImageFirst(bestSelling.value.year);
    }
    function restructureNumData(bookList) {
      return sortData(
        bookList.reduce((acc, book2) => {
          const existingBook = acc.find(
            (b) => b.jp === book2.jp && b.booknum === book2.booknum
          );
          if (!existingBook) {
            acc.push({
              jp: book2.jp,
              booknum: book2.booknum,
              kr: book2.kr,
              img: book2.img,
              sales: book2.sales,
              dc: book2.dc
            });
          }
          return acc;
        }, [])
      );
    }
    function restructureData(bookList) {
      return sortData(
        bookList.reduce((acc, book2) => {
          const existingBook = acc.find((b) => b.jp === book2.jp);
          if (existingBook) {
            existingBook.sales += book2.sales;
          } else {
            acc.push({
              jp: book2.jp,
              kr: book2.kr,
              img: book2.img,
              sales: book2.sales,
              dc: book2.dc
            });
          }
          return acc;
        }, [])
      );
    }
    function sortData(bookList) {
      return bookList.sort((a, b) => b.sales - a.sales);
    }
    const open = ref(false);
    const namuWiki = ref([]);
    async function namuOpen(book2) {
      selectedBook.value = book2;
      const bookname = book2.kr;
      const { data } = await useFetch(`/api/namuWiki/${bookname}`, "$sGCsx3DkoJ");
      namuWiki.value = data.value;
      open.value = true;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogNamuWiki = _sfc_main$1;
      const _component_CommonHeader = _sfc_main$2;
      const _component_Tabs = _sfc_main$2$1;
      const _component_TabsList = _sfc_main$3;
      const _component_TabsTrigger = _sfc_main$1$1;
      const _component_TabsContent = _sfc_main$4;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_DialogNamuWiki, {
        open: unref(open),
        wiki: unref(namuWiki),
        selectedBook: unref(selectedBook),
        "onUpdate:open": ($event) => open.value = !unref(open)
      }, null, _parent));
      _push(`<div class="flex flex-col p-4 gap-4 w-full">`);
      _push(ssrRenderComponent(_component_CommonHeader, {
        title: "\uCC45 \uCC28\uD2B8",
        description: "\uCC45\uC758 \uCC28\uD2B8\uB97C \uBCF4\uC5EC\uC90D\uB2C8\uB2E4."
      }, null, _parent));
      _push(ssrRenderComponent(_component_Tabs, {
        class: "w-full overflow-x-scroll",
        modelValue: unref(selectedGenre),
        "onUpdate:modelValue": ($event) => isRef(selectedGenre) ? selectedGenre.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TabsList, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TabsTrigger, {
                    value: "all",
                    onClick: ($event) => selecteGenre("all")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uC804\uCCB4 `);
                      } else {
                        return [
                          createTextVNode(" \uC804\uCCB4 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<!--[-->`);
                  ssrRenderList(("uniqueGenreByGenre" in _ctx ? _ctx.uniqueGenreByGenre : unref(uniqueGenreByGenre))(), (genre) => {
                    _push3(ssrRenderComponent(_component_TabsTrigger, {
                      value: genre.genre_name,
                      onClick: ($event) => selecteGenre(genre.genre_name)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(genre.genre_name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(genre.genre_name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    createVNode(_component_TabsTrigger, {
                      value: "all",
                      onClick: ($event) => selecteGenre("all")
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \uC804\uCCB4 ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    (openBlock(true), createBlock(Fragment, null, renderList(("uniqueGenreByGenre" in _ctx ? _ctx.uniqueGenreByGenre : unref(uniqueGenreByGenre))(), (genre) => {
                      return openBlock(), createBlock(_component_TabsTrigger, {
                        value: genre.genre_name,
                        onClick: ($event) => selecteGenre(genre.genre_name)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(genre.genre_name), 1)
                        ]),
                        _: 2
                      }, 1032, ["value", "onClick"]);
                    }), 256))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TabsList, null, {
                default: withCtx(() => [
                  createVNode(_component_TabsTrigger, {
                    value: "all",
                    onClick: ($event) => selecteGenre("all")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \uC804\uCCB4 ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  (openBlock(true), createBlock(Fragment, null, renderList(("uniqueGenreByGenre" in _ctx ? _ctx.uniqueGenreByGenre : unref(uniqueGenreByGenre))(), (genre) => {
                    return openBlock(), createBlock(_component_TabsTrigger, {
                      value: genre.genre_name,
                      onClick: ($event) => selecteGenre(genre.genre_name)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(genre.genre_name), 1)
                      ]),
                      _: 2
                    }, 1032, ["value", "onClick"]);
                  }), 256))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Tabs, {
        "default-value": "month",
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TabsList, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TabsTrigger, { value: "week" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uC774\uBC88\uC8FC `);
                      } else {
                        return [
                          createTextVNode(" \uC774\uBC88\uC8FC ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TabsTrigger, { value: "month" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 4\uC8FC\uAC04 `);
                      } else {
                        return [
                          createTextVNode(" 4\uC8FC\uAC04 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TabsTrigger, { value: "year" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 1\uB144\uAC04 `);
                      } else {
                        return [
                          createTextVNode(" 1\uB144\uAC04 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TabsTrigger, { value: "week" }, {
                      default: withCtx(() => [
                        createTextVNode(" \uC774\uBC88\uC8FC ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TabsTrigger, { value: "month" }, {
                      default: withCtx(() => [
                        createTextVNode(" 4\uC8FC\uAC04 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TabsTrigger, { value: "year" }, {
                      default: withCtx(() => [
                        createTextVNode(" 1\uB144\uAC04 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(unref(datas), (data) => {
              _push2(ssrRenderComponent(_component_TabsContent, {
                value: data.title
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a, _b, _c, _d, _e, _f, _g, _h;
                  if (_push3) {
                    _push3(`<div class="flex-col flex gap-4"${_scopeId2}><div class="w-full flex flex-col gap-1"${_scopeId2}><div${_scopeId2}><div class="font-bold text-3xl"${_scopeId2}>\uC2DC\uB9AC\uC988</div><div${_scopeId2}>\uC2DC\uB9AC\uC988\uC758 \uC804\uCCB4 \uD310\uB9E4\uB7C9 \uB204\uC801</div></div><div class="border rounded-md p-4 flex flex-row gap-1 overflow-x-scroll"${_scopeId2}>`);
                    if (((_a = data == null ? void 0 : data.\uC2DC\uB9AC\uC988) == null ? void 0 : _a.length) == 0) {
                      _push3(`<div${_scopeId2}>${ssrInterpolate(data.title == "week" ? "\uC774\uBC88\uC8FC" : data.title == "month" ? "\uD55C\uB2EC\uAC04" : "1\uB144\uAC04")}\uC758 ${ssrInterpolate(unref(selectedGenre))} \uC7A5\uB974\uC758 \uC2DC\uB9AC\uC988\uC5D0 \uC9D1\uACC4\uB41C \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. </div>`);
                    } else {
                      _push3(`<!--[-->`);
                      ssrRenderList((_b = data == null ? void 0 : data.\uC2DC\uB9AC\uC988) == null ? void 0 : _b.slice(0, 20), (book2, index) => {
                        var _a2;
                        _push3(`<div${_scopeId2}><div class="flex flex-col w-40 cursor-pointer"${_scopeId2}><div class="shrink-0"${_scopeId2}><img class="h-56 object-cover overflow-hidden rounded-md"${ssrRenderAttr("src", book2 == null ? void 0 : book2.img)}${_scopeId2}></div><div class="grow-[1]"${_scopeId2}><div${_scopeId2}><div class="font-bold"${_scopeId2}>${ssrInterpolate(index + 1)} \uC704</div></div><div${_scopeId2}><div class="font-bold text-xs overflow-hidden whitespace-nowrap overflow-ellipsis"${_scopeId2}>${ssrInterpolate(book2 == null ? void 0 : book2.kr)}</div></div><div class="text-xs"${_scopeId2}> \uD310\uB9E4\uB7C9 ${ssrInterpolate((_a2 = book2 == null ? void 0 : book2.sales) == null ? void 0 : _a2.toLocaleString())}</div></div></div></div>`);
                      });
                      _push3(`<!--]-->`);
                    }
                    _push3(`</div></div><div class="w-full flex flex-col gap-1"${_scopeId2}><div${_scopeId2}><div class="font-bold text-3xl"${_scopeId2}>\uB2E8\uD589\uBCF8</div><div${_scopeId2}>\uB2E8\uD589\uBCF8 \uC804\uCCB4 \uD310\uB9E4\uB7C9 \uB204\uC801</div></div><div class="border rounded-md p-4 flex flex-row gap-1 overflow-x-scroll"${_scopeId2}>`);
                    if (((_c = data == null ? void 0 : data.\uB2E8\uD589\uBCF8) == null ? void 0 : _c.length) == 0) {
                      _push3(`<div${_scopeId2}>${ssrInterpolate(data.title == "week" ? "\uC774\uBC88\uC8FC" : data.title == "month" ? "\uD55C\uB2EC\uAC04" : "1\uB144\uAC04")}\uC758 ${ssrInterpolate(unref(selectedGenre))} \uC7A5\uB974\uC758 \uB2E8\uD589\uBCF8\uC5D0 \uC9D1\uACC4\uB41C \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. </div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<!--[-->`);
                    ssrRenderList((_d = data == null ? void 0 : data.\uB2E8\uD589\uBCF8) == null ? void 0 : _d.slice(0, 20), (book2, index) => {
                      var _a2;
                      _push3(`<div${_scopeId2}><div class="flex flex-col w-40"${_scopeId2}><div class="shrink-0"${_scopeId2}><img class="h-56 object-cover overflow-hidden rounded-md"${ssrRenderAttr("src", book2 == null ? void 0 : book2.img)}${_scopeId2}></div><div class="grow-[1]"${_scopeId2}><div${_scopeId2}><div class="font-bold"${_scopeId2}>${ssrInterpolate(index + 1)} \uC704</div></div><div${_scopeId2}><div class="font-bold text-xs overflow-hidden whitespace-nowrap overflow-ellipsis"${_scopeId2}>${ssrInterpolate(book2 == null ? void 0 : book2.kr)} ${ssrInterpolate(book2 == null ? void 0 : book2.booknum)}</div></div><div class="text-xs"${_scopeId2}> \uD310\uB9E4\uB7C9 ${ssrInterpolate((_a2 = book2 == null ? void 0 : book2.sales) == null ? void 0 : _a2.toLocaleString())}</div></div></div></div>`);
                    });
                    _push3(`<!--]--></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex-col flex gap-4" }, [
                        createVNode("div", { class: "w-full flex flex-col gap-1" }, [
                          createVNode("div", null, [
                            createVNode("div", { class: "font-bold text-3xl" }, "\uC2DC\uB9AC\uC988"),
                            createVNode("div", null, "\uC2DC\uB9AC\uC988\uC758 \uC804\uCCB4 \uD310\uB9E4\uB7C9 \uB204\uC801")
                          ]),
                          createVNode("div", { class: "border rounded-md p-4 flex flex-row gap-1 overflow-x-scroll" }, [
                            ((_e = data == null ? void 0 : data.\uC2DC\uB9AC\uC988) == null ? void 0 : _e.length) == 0 ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(data.title == "week" ? "\uC774\uBC88\uC8FC" : data.title == "month" ? "\uD55C\uB2EC\uAC04" : "1\uB144\uAC04") + "\uC758 " + toDisplayString(unref(selectedGenre)) + " \uC7A5\uB974\uC758 \uC2DC\uB9AC\uC988\uC5D0 \uC9D1\uACC4\uB41C \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. ", 1)) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList((_f = data == null ? void 0 : data.\uC2DC\uB9AC\uC988) == null ? void 0 : _f.slice(0, 20), (book2, index) => {
                              var _a2;
                              return openBlock(), createBlock("div", null, [
                                createVNode("div", {
                                  class: "flex flex-col w-40 cursor-pointer",
                                  onClick: ($event) => namuOpen(book2)
                                }, [
                                  createVNode("div", { class: "shrink-0" }, [
                                    createVNode("img", {
                                      class: "h-56 object-cover overflow-hidden rounded-md",
                                      src: book2 == null ? void 0 : book2.img
                                    }, null, 8, ["src"])
                                  ]),
                                  createVNode("div", { class: "grow-[1]" }, [
                                    createVNode("div", null, [
                                      createVNode("div", { class: "font-bold" }, toDisplayString(index + 1) + " \uC704", 1)
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("div", { class: "font-bold text-xs overflow-hidden whitespace-nowrap overflow-ellipsis" }, toDisplayString(book2 == null ? void 0 : book2.kr), 1)
                                    ]),
                                    createVNode("div", { class: "text-xs" }, " \uD310\uB9E4\uB7C9 " + toDisplayString((_a2 = book2 == null ? void 0 : book2.sales) == null ? void 0 : _a2.toLocaleString()), 1)
                                  ])
                                ], 8, ["onClick"])
                              ]);
                            }), 256))
                          ])
                        ]),
                        createVNode("div", { class: "w-full flex flex-col gap-1" }, [
                          createVNode("div", null, [
                            createVNode("div", { class: "font-bold text-3xl" }, "\uB2E8\uD589\uBCF8"),
                            createVNode("div", null, "\uB2E8\uD589\uBCF8 \uC804\uCCB4 \uD310\uB9E4\uB7C9 \uB204\uC801")
                          ]),
                          createVNode("div", { class: "border rounded-md p-4 flex flex-row gap-1 overflow-x-scroll" }, [
                            ((_g = data == null ? void 0 : data.\uB2E8\uD589\uBCF8) == null ? void 0 : _g.length) == 0 ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(data.title == "week" ? "\uC774\uBC88\uC8FC" : data.title == "month" ? "\uD55C\uB2EC\uAC04" : "1\uB144\uAC04") + "\uC758 " + toDisplayString(unref(selectedGenre)) + " \uC7A5\uB974\uC758 \uB2E8\uD589\uBCF8\uC5D0 \uC9D1\uACC4\uB41C \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. ", 1)) : createCommentVNode("", true),
                            (openBlock(true), createBlock(Fragment, null, renderList((_h = data == null ? void 0 : data.\uB2E8\uD589\uBCF8) == null ? void 0 : _h.slice(0, 20), (book2, index) => {
                              var _a2;
                              return openBlock(), createBlock("div", null, [
                                createVNode("div", { class: "flex flex-col w-40" }, [
                                  createVNode("div", { class: "shrink-0" }, [
                                    createVNode("img", {
                                      class: "h-56 object-cover overflow-hidden rounded-md",
                                      src: book2 == null ? void 0 : book2.img
                                    }, null, 8, ["src"])
                                  ]),
                                  createVNode("div", { class: "grow-[1]" }, [
                                    createVNode("div", null, [
                                      createVNode("div", { class: "font-bold" }, toDisplayString(index + 1) + " \uC704", 1)
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("div", { class: "font-bold text-xs overflow-hidden whitespace-nowrap overflow-ellipsis" }, toDisplayString(book2 == null ? void 0 : book2.kr) + " " + toDisplayString(book2 == null ? void 0 : book2.booknum), 1)
                                    ]),
                                    createVNode("div", { class: "text-xs" }, " \uD310\uB9E4\uB7C9 " + toDisplayString((_a2 = book2 == null ? void 0 : book2.sales) == null ? void 0 : _a2.toLocaleString()), 1)
                                  ])
                                ])
                              ]);
                            }), 256))
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode(_component_TabsList, null, {
                default: withCtx(() => [
                  createVNode(_component_TabsTrigger, { value: "week" }, {
                    default: withCtx(() => [
                      createTextVNode(" \uC774\uBC88\uC8FC ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TabsTrigger, { value: "month" }, {
                    default: withCtx(() => [
                      createTextVNode(" 4\uC8FC\uAC04 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TabsTrigger, { value: "year" }, {
                    default: withCtx(() => [
                      createTextVNode(" 1\uB144\uAC04 ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              (openBlock(true), createBlock(Fragment, null, renderList(unref(datas), (data) => {
                return openBlock(), createBlock(_component_TabsContent, {
                  value: data.title
                }, {
                  default: withCtx(() => {
                    var _a, _b, _c, _d;
                    return [
                      createVNode("div", { class: "flex-col flex gap-4" }, [
                        createVNode("div", { class: "w-full flex flex-col gap-1" }, [
                          createVNode("div", null, [
                            createVNode("div", { class: "font-bold text-3xl" }, "\uC2DC\uB9AC\uC988"),
                            createVNode("div", null, "\uC2DC\uB9AC\uC988\uC758 \uC804\uCCB4 \uD310\uB9E4\uB7C9 \uB204\uC801")
                          ]),
                          createVNode("div", { class: "border rounded-md p-4 flex flex-row gap-1 overflow-x-scroll" }, [
                            ((_a = data == null ? void 0 : data.\uC2DC\uB9AC\uC988) == null ? void 0 : _a.length) == 0 ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(data.title == "week" ? "\uC774\uBC88\uC8FC" : data.title == "month" ? "\uD55C\uB2EC\uAC04" : "1\uB144\uAC04") + "\uC758 " + toDisplayString(unref(selectedGenre)) + " \uC7A5\uB974\uC758 \uC2DC\uB9AC\uC988\uC5D0 \uC9D1\uACC4\uB41C \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. ", 1)) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList((_b = data == null ? void 0 : data.\uC2DC\uB9AC\uC988) == null ? void 0 : _b.slice(0, 20), (book2, index) => {
                              var _a2;
                              return openBlock(), createBlock("div", null, [
                                createVNode("div", {
                                  class: "flex flex-col w-40 cursor-pointer",
                                  onClick: ($event) => namuOpen(book2)
                                }, [
                                  createVNode("div", { class: "shrink-0" }, [
                                    createVNode("img", {
                                      class: "h-56 object-cover overflow-hidden rounded-md",
                                      src: book2 == null ? void 0 : book2.img
                                    }, null, 8, ["src"])
                                  ]),
                                  createVNode("div", { class: "grow-[1]" }, [
                                    createVNode("div", null, [
                                      createVNode("div", { class: "font-bold" }, toDisplayString(index + 1) + " \uC704", 1)
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("div", { class: "font-bold text-xs overflow-hidden whitespace-nowrap overflow-ellipsis" }, toDisplayString(book2 == null ? void 0 : book2.kr), 1)
                                    ]),
                                    createVNode("div", { class: "text-xs" }, " \uD310\uB9E4\uB7C9 " + toDisplayString((_a2 = book2 == null ? void 0 : book2.sales) == null ? void 0 : _a2.toLocaleString()), 1)
                                  ])
                                ], 8, ["onClick"])
                              ]);
                            }), 256))
                          ])
                        ]),
                        createVNode("div", { class: "w-full flex flex-col gap-1" }, [
                          createVNode("div", null, [
                            createVNode("div", { class: "font-bold text-3xl" }, "\uB2E8\uD589\uBCF8"),
                            createVNode("div", null, "\uB2E8\uD589\uBCF8 \uC804\uCCB4 \uD310\uB9E4\uB7C9 \uB204\uC801")
                          ]),
                          createVNode("div", { class: "border rounded-md p-4 flex flex-row gap-1 overflow-x-scroll" }, [
                            ((_c = data == null ? void 0 : data.\uB2E8\uD589\uBCF8) == null ? void 0 : _c.length) == 0 ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(data.title == "week" ? "\uC774\uBC88\uC8FC" : data.title == "month" ? "\uD55C\uB2EC\uAC04" : "1\uB144\uAC04") + "\uC758 " + toDisplayString(unref(selectedGenre)) + " \uC7A5\uB974\uC758 \uB2E8\uD589\uBCF8\uC5D0 \uC9D1\uACC4\uB41C \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. ", 1)) : createCommentVNode("", true),
                            (openBlock(true), createBlock(Fragment, null, renderList((_d = data == null ? void 0 : data.\uB2E8\uD589\uBCF8) == null ? void 0 : _d.slice(0, 20), (book2, index) => {
                              var _a2;
                              return openBlock(), createBlock("div", null, [
                                createVNode("div", { class: "flex flex-col w-40" }, [
                                  createVNode("div", { class: "shrink-0" }, [
                                    createVNode("img", {
                                      class: "h-56 object-cover overflow-hidden rounded-md",
                                      src: book2 == null ? void 0 : book2.img
                                    }, null, 8, ["src"])
                                  ]),
                                  createVNode("div", { class: "grow-[1]" }, [
                                    createVNode("div", null, [
                                      createVNode("div", { class: "font-bold" }, toDisplayString(index + 1) + " \uC704", 1)
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("div", { class: "font-bold text-xs overflow-hidden whitespace-nowrap overflow-ellipsis" }, toDisplayString(book2 == null ? void 0 : book2.kr) + " " + toDisplayString(book2 == null ? void 0 : book2.booknum), 1)
                                    ]),
                                    createVNode("div", { class: "text-xs" }, " \uD310\uB9E4\uB7C9 " + toDisplayString((_a2 = book2 == null ? void 0 : book2.sales) == null ? void 0 : _a2.toLocaleString()), 1)
                                  ])
                                ])
                              ]);
                            }), 256))
                          ])
                        ])
                      ])
                    ];
                  }),
                  _: 2
                }, 1032, ["value"]);
              }), 256))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/book/chart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=chart-V9VVlADs.mjs.map
