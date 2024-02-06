import { _ as _sfc_main$4, a as _sfc_main$5, b as _sfc_main$3$1, c as _sfc_main$2$1, d as _sfc_main$1$1 } from './DialogContent-t9sk4rqE.mjs';
import { u as useState } from './state-1iJA_-lt.mjs';
import { useSSRContext, ref, mergeProps, unref, defineComponent, watch, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode } from 'vue';
import { u as useFetch } from './fetch-68oqhdU9.mjs';
import { r as replaceDomain } from './book-3UXiacyj.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _sfc_main$3 } from './Header-Ffs2ceUt.mjs';
import { _ as _sfc_main$6 } from './Input-eHzHGyo6.mjs';
import { _ as _sfc_main$2$2, a as _sfc_main$1$2, b as _sfc_main$8 } from './DropdownMenuContent-9hQLbqa5.mjs';
import { _ as _sfc_main$6$1, a as _sfc_main$5$1, b as _sfc_main$1$3, c as _sfc_main$9, d as _sfc_main$2$3, e as _sfc_main$4$1, f as _sfc_main$3$2 } from './TableRow-SiplgGlM.mjs';
import { _ as _sfc_main$7 } from './index-64ep_nG4.mjs';
import { u as useRoute, v as valueUpdater } from '../server.mjs';
import { useVueTable, getCoreRowModel, getSortedRowModel, getFilteredRowModel, FlexRender } from '@tanstack/vue-table';
import { ChevronDown } from 'lucide-vue-next';
import { columns } from './board.columns-rzK5GhPN.mjs';
import 'radix-vue';
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
import 'class-variance-authority';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "boardDetail",
  __ssrInlineRender: true,
  props: {
    isOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const boardDetail = useState("boardDetail");
    const data = ref(null);
    watch(
      () => boardDetail.value,
      async () => {
        var _a, _b, _c, _d;
        const { data: newData } = await useFetch(
          `/api/dcinside/${boardDetail.value.dc}/${boardDetail.value.num}?kr=${boardDetail.value.kr}`,
          "$9tuCSFDKGj"
        );
        data.value = newData.value;
        if ((_b = (_a = data.value) == null ? void 0 : _a.comment) == null ? void 0 : _b.comments) {
          data.value.comment.comments = (_d = (_c = data.value) == null ? void 0 : _c.comment) == null ? void 0 : _d.comments.filter(
            (comment) => {
              return comment.no != 0;
            }
          );
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Dialog = _sfc_main$4;
      const _component_DialogContent = _sfc_main$5;
      const _component_DialogHeader = _sfc_main$3$1;
      const _component_DialogTitle = _sfc_main$2$1;
      const _component_DialogDescription = _sfc_main$1$1;
      _push(ssrRenderComponent(_component_Dialog, mergeProps({
        "onUpdate:open": ($event) => emit("update:open"),
        open: _ctx.isOpen
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DialogContent, { class: "w-5/6 max-h-192 overflow-y-scroll" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a2, _b2;
                            if (_push5) {
                              _push5(`${ssrInterpolate((_a2 = unref(boardDetail)) == null ? void 0 : _a2.title)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString((_b2 = unref(boardDetail)) == null ? void 0 : _b2.title), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DialogDescription, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
                            if (_push5) {
                              _push5(`<div class="flex justify-between"${_scopeId4}><div${_scopeId4}>${ssrInterpolate((_a2 = unref(boardDetail)) == null ? void 0 : _a2.writer)} ${ssrInterpolate((_b2 = unref(boardDetail)) == null ? void 0 : _b2.date)}</div><div${_scopeId4}> \uC870\uD68C ${ssrInterpolate((_c2 = unref(boardDetail)) == null ? void 0 : _c2.count)} \uCD94\uCC9C ${ssrInterpolate((_d2 = unref(boardDetail)) == null ? void 0 : _d2.recommend)} \uB313\uAE00 ${ssrInterpolate((_e2 = unref(data)) == null ? void 0 : _e2.comment.total_cnt)}</div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex justify-between" }, [
                                  createVNode("div", null, toDisplayString((_f2 = unref(boardDetail)) == null ? void 0 : _f2.writer) + " " + toDisplayString((_g2 = unref(boardDetail)) == null ? void 0 : _g2.date), 1),
                                  createVNode("div", null, " \uC870\uD68C " + toDisplayString((_h2 = unref(boardDetail)) == null ? void 0 : _h2.count) + " \uCD94\uCC9C " + toDisplayString((_i2 = unref(boardDetail)) == null ? void 0 : _i2.recommend) + " \uB313\uAE00 " + toDisplayString((_j2 = unref(data)) == null ? void 0 : _j2.comment.total_cnt), 1)
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DialogTitle, null, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createTextVNode(toDisplayString((_a2 = unref(boardDetail)) == null ? void 0 : _a2.title), 1)
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(_component_DialogDescription, null, {
                            default: withCtx(() => {
                              var _a2, _b2, _c2, _d2, _e2;
                              return [
                                createVNode("div", { class: "flex justify-between" }, [
                                  createVNode("div", null, toDisplayString((_a2 = unref(boardDetail)) == null ? void 0 : _a2.writer) + " " + toDisplayString((_b2 = unref(boardDetail)) == null ? void 0 : _b2.date), 1),
                                  createVNode("div", null, " \uC870\uD68C " + toDisplayString((_c2 = unref(boardDetail)) == null ? void 0 : _c2.count) + " \uCD94\uCC9C " + toDisplayString((_d2 = unref(boardDetail)) == null ? void 0 : _d2.recommend) + " \uB313\uAE00 " + toDisplayString((_e2 = unref(data)) == null ? void 0 : _e2.comment.total_cnt), 1)
                                ])
                              ];
                            }),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="grid gap-4 py-4"${_scopeId2}><!--[-->`);
                  ssrRenderList((_a = unref(data)) == null ? void 0 : _a.images, (img) => {
                    _push3(`<img${ssrRenderAttr("src", ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(img).replace(/co\.kr/g, "com"))}${_scopeId2}>`);
                  });
                  _push3(`<!--]--> ${ssrInterpolate((_b = unref(data)) == null ? void 0 : _b.content)}</div>`);
                  if (((_c = unref(data)) == null ? void 0 : _c.comment.total_cnt) > 0) {
                    _push3(`<div class="flex flex-col gap-3"${_scopeId2}><div${_scopeId2}>\uC804\uCCB4 \uB313\uAE00 ${ssrInterpolate((_d = unref(data)) == null ? void 0 : _d.comment.total_cnt)}\uAC1C</div><!--[-->`);
                    ssrRenderList((_e = unref(data)) == null ? void 0 : _e.comment.comments, (comment) => {
                      _push3(`<div class="${ssrRenderClass([{ "ml-4": comment.depth == 1 }, "flex flex-col gap-1"])}"${_scopeId2}><p class="text-xs"${_scopeId2}>${ssrInterpolate(comment.user_id)}(${ssrInterpolate(comment.name)})</p><div class="flex items-end gap-1"${_scopeId2}><div class="bg-neutral-100 rounded-md px-2 py-1 text-sm w-fit"${_scopeId2}><div${_scopeId2}>${("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(comment.memo).replace(/co\.kr/g, "com")}</div></div><p class="text-xs"${_scopeId2}>${ssrInterpolate(comment.reg_date)}</p></div></div>`);
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(_component_DialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_DialogTitle, null, {
                          default: withCtx(() => {
                            var _a2;
                            return [
                              createTextVNode(toDisplayString((_a2 = unref(boardDetail)) == null ? void 0 : _a2.title), 1)
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(_component_DialogDescription, null, {
                          default: withCtx(() => {
                            var _a2, _b2, _c2, _d2, _e2;
                            return [
                              createVNode("div", { class: "flex justify-between" }, [
                                createVNode("div", null, toDisplayString((_a2 = unref(boardDetail)) == null ? void 0 : _a2.writer) + " " + toDisplayString((_b2 = unref(boardDetail)) == null ? void 0 : _b2.date), 1),
                                createVNode("div", null, " \uC870\uD68C " + toDisplayString((_c2 = unref(boardDetail)) == null ? void 0 : _c2.count) + " \uCD94\uCC9C " + toDisplayString((_d2 = unref(boardDetail)) == null ? void 0 : _d2.recommend) + " \uB313\uAE00 " + toDisplayString((_e2 = unref(data)) == null ? void 0 : _e2.comment.total_cnt), 1)
                              ])
                            ];
                          }),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "grid gap-4 py-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList((_f = unref(data)) == null ? void 0 : _f.images, (img) => {
                        return openBlock(), createBlock("img", {
                          src: ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(img).replace(/co\.kr/g, "com")
                        }, null, 8, ["src"]);
                      }), 256)),
                      createTextVNode(" " + toDisplayString((_g = unref(data)) == null ? void 0 : _g.content), 1)
                    ]),
                    ((_h = unref(data)) == null ? void 0 : _h.comment.total_cnt) > 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex flex-col gap-3"
                    }, [
                      createVNode("div", null, "\uC804\uCCB4 \uB313\uAE00 " + toDisplayString((_i = unref(data)) == null ? void 0 : _i.comment.total_cnt) + "\uAC1C", 1),
                      (openBlock(true), createBlock(Fragment, null, renderList((_j = unref(data)) == null ? void 0 : _j.comment.comments, (comment) => {
                        return openBlock(), createBlock("div", {
                          class: ["flex flex-col gap-1", { "ml-4": comment.depth == 1 }]
                        }, [
                          createVNode("p", { class: "text-xs" }, toDisplayString(comment.user_id) + "(" + toDisplayString(comment.name) + ")", 1),
                          createVNode("div", { class: "flex items-end gap-1" }, [
                            createVNode("div", { class: "bg-neutral-100 rounded-md px-2 py-1 text-sm w-fit" }, [
                              createVNode("div", {
                                innerHTML: ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(comment.memo).replace(/co\.kr/g, "com")
                              }, null, 8, ["innerHTML"])
                            ]),
                            createVNode("p", { class: "text-xs" }, toDisplayString(comment.reg_date), 1)
                          ])
                        ], 2);
                      }), 256))
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DialogContent, { class: "w-5/6 max-h-192 overflow-y-scroll" }, {
                default: withCtx(() => {
                  var _a, _b, _c, _d, _e;
                  return [
                    createVNode(_component_DialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_DialogTitle, null, {
                          default: withCtx(() => {
                            var _a2;
                            return [
                              createTextVNode(toDisplayString((_a2 = unref(boardDetail)) == null ? void 0 : _a2.title), 1)
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(_component_DialogDescription, null, {
                          default: withCtx(() => {
                            var _a2, _b2, _c2, _d2, _e2;
                            return [
                              createVNode("div", { class: "flex justify-between" }, [
                                createVNode("div", null, toDisplayString((_a2 = unref(boardDetail)) == null ? void 0 : _a2.writer) + " " + toDisplayString((_b2 = unref(boardDetail)) == null ? void 0 : _b2.date), 1),
                                createVNode("div", null, " \uC870\uD68C " + toDisplayString((_c2 = unref(boardDetail)) == null ? void 0 : _c2.count) + " \uCD94\uCC9C " + toDisplayString((_d2 = unref(boardDetail)) == null ? void 0 : _d2.recommend) + " \uB313\uAE00 " + toDisplayString((_e2 = unref(data)) == null ? void 0 : _e2.comment.total_cnt), 1)
                              ])
                            ];
                          }),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "grid gap-4 py-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList((_a = unref(data)) == null ? void 0 : _a.images, (img) => {
                        return openBlock(), createBlock("img", {
                          src: ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(img).replace(/co\.kr/g, "com")
                        }, null, 8, ["src"]);
                      }), 256)),
                      createTextVNode(" " + toDisplayString((_b = unref(data)) == null ? void 0 : _b.content), 1)
                    ]),
                    ((_c = unref(data)) == null ? void 0 : _c.comment.total_cnt) > 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex flex-col gap-3"
                    }, [
                      createVNode("div", null, "\uC804\uCCB4 \uB313\uAE00 " + toDisplayString((_d = unref(data)) == null ? void 0 : _d.comment.total_cnt) + "\uAC1C", 1),
                      (openBlock(true), createBlock(Fragment, null, renderList((_e = unref(data)) == null ? void 0 : _e.comment.comments, (comment) => {
                        return openBlock(), createBlock("div", {
                          class: ["flex flex-col gap-1", { "ml-4": comment.depth == 1 }]
                        }, [
                          createVNode("p", { class: "text-xs" }, toDisplayString(comment.user_id) + "(" + toDisplayString(comment.name) + ")", 1),
                          createVNode("div", { class: "flex items-end gap-1" }, [
                            createVNode("div", { class: "bg-neutral-100 rounded-md px-2 py-1 text-sm w-fit" }, [
                              createVNode("div", {
                                innerHTML: ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(comment.memo).replace(/co\.kr/g, "com")
                              }, null, 8, ["innerHTML"])
                            ]),
                            createVNode("p", { class: "text-xs" }, toDisplayString(comment.reg_date), 1)
                          ])
                        ], 2);
                      }), 256))
                    ])) : createCommentVNode("", true)
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dialog/boardDetail.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DataTable",
  __ssrInlineRender: true,
  props: {
    columns: {},
    data: {}
  },
  emits: ["rowClick"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const sorting = ref([]);
    const columnFilters = ref([]);
    const columnVisibility = ref({});
    const rowSelection = ref({});
    const emit = __emit;
    const table = useVueTable({
      get data() {
        return props.data;
      },
      get columns() {
        return props.columns;
      },
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      onSortingChange: (updaterOrValue) => valueUpdater(updaterOrValue, sorting),
      onColumnFiltersChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnFilters),
      getFilteredRowModel: getFilteredRowModel(),
      onColumnVisibilityChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnVisibility),
      onRowSelectionChange: (updaterOrValue) => valueUpdater(updaterOrValue, rowSelection),
      state: {
        get sorting() {
          return sorting.value;
        },
        get columnFilters() {
          return columnFilters.value;
        },
        get columnVisibility() {
          return columnVisibility.value;
        },
        get rowSelection() {
          return rowSelection.value;
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_Input = _sfc_main$6;
      const _component_DropdownMenu = _sfc_main$2$2;
      const _component_DropdownMenuTrigger = _sfc_main$1$2;
      const _component_Button = _sfc_main$7;
      const _component_DropdownMenuContent = _sfc_main$8;
      const _component_DropdownMenuCheckboxItem = _sfc_main$6$1;
      const _component_Table = _sfc_main$5$1;
      const _component_TableHeader = _sfc_main$1$3;
      const _component_TableRow = _sfc_main$9;
      const _component_TableHead = _sfc_main$2$3;
      const _component_TableBody = _sfc_main$4$1;
      const _component_TableCell = _sfc_main$3$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex-1 text-sm text-muted-foreground">${ssrInterpolate(unref(table).getFilteredSelectedRowModel().rows.length)} of ${ssrInterpolate(unref(table).getFilteredRowModel().rows.length)} row(s) selected. </div><div class="flex items-center py-4">`);
      _push(ssrRenderComponent(_component_Input, {
        class: "max-w-sm",
        placeholder: "Filter title...",
        "model-value": (_a = unref(table).getColumn("title")) == null ? void 0 : _a.getFilterValue(),
        "onUpdate:modelValue": ($event) => {
          var _a2;
          return (_a2 = unref(table).getColumn("title")) == null ? void 0 : _a2.setFilterValue($event);
        }
      }, null, _parent));
      _push(ssrRenderComponent(_component_DropdownMenu, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DropdownMenuTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    variant: "outline",
                    class: "ml-auto"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Columns `);
                        _push4(ssrRenderComponent(unref(ChevronDown), { class: "w-4 h-4 ml-2" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode(" Columns "),
                          createVNode(unref(ChevronDown), { class: "w-4 h-4 ml-2" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      variant: "outline",
                      class: "ml-auto"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Columns "),
                        createVNode(unref(ChevronDown), { class: "w-4 h-4 ml-2" })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DropdownMenuContent, { align: "end" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(table).getAllColumns().filter((column) => column.getCanHide()), (column) => {
                    _push3(ssrRenderComponent(_component_DropdownMenuCheckboxItem, {
                      key: column.id,
                      class: "capitalize",
                      checked: column.getIsVisible(),
                      "onUpdate:checked": (value) => {
                        column.toggleVisibility(!!value);
                      }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(column.id)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(column.id), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(table).getAllColumns().filter((column) => column.getCanHide()), (column) => {
                      return openBlock(), createBlock(_component_DropdownMenuCheckboxItem, {
                        key: column.id,
                        class: "capitalize",
                        checked: column.getIsVisible(),
                        "onUpdate:checked": (value) => {
                          column.toggleVisibility(!!value);
                        }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(column.id), 1)
                        ]),
                        _: 2
                      }, 1032, ["checked", "onUpdate:checked"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DropdownMenuTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_Button, {
                    variant: "outline",
                    class: "ml-auto"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Columns "),
                      createVNode(unref(ChevronDown), { class: "w-4 h-4 ml-2" })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_DropdownMenuContent, { align: "end" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(table).getAllColumns().filter((column) => column.getCanHide()), (column) => {
                    return openBlock(), createBlock(_component_DropdownMenuCheckboxItem, {
                      key: column.id,
                      class: "capitalize",
                      checked: column.getIsVisible(),
                      "onUpdate:checked": (value) => {
                        column.toggleVisibility(!!value);
                      }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(column.id), 1)
                      ]),
                      _: 2
                    }, 1032, ["checked", "onUpdate:checked"]);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="border rounded-md">`);
      _push(ssrRenderComponent(_component_Table, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TableHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(table).getHeaderGroups(), (headerGroup) => {
                    _push3(ssrRenderComponent(_component_TableRow, {
                      key: headerGroup.id
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(headerGroup.headers, (header) => {
                            _push4(ssrRenderComponent(_component_TableHead, {
                              key: header.id
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  if (!header.isPlaceholder) {
                                    _push5(ssrRenderComponent(unref(FlexRender), {
                                      render: header.column.columnDef.header,
                                      props: header.getContext()
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                } else {
                                  return [
                                    !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                                      key: 0,
                                      render: header.column.columnDef.header,
                                      props: header.getContext()
                                    }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(headerGroup.headers, (header) => {
                              return openBlock(), createBlock(_component_TableHead, {
                                key: header.id
                              }, {
                                default: withCtx(() => [
                                  !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                                    key: 0,
                                    render: header.column.columnDef.header,
                                    props: header.getContext()
                                  }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(table).getHeaderGroups(), (headerGroup) => {
                      return openBlock(), createBlock(_component_TableRow, {
                        key: headerGroup.id
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(headerGroup.headers, (header) => {
                            return openBlock(), createBlock(_component_TableHead, {
                              key: header.id
                            }, {
                              default: withCtx(() => [
                                !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                                  key: 0,
                                  render: header.column.columnDef.header,
                                  props: header.getContext()
                                }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TableBody, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b;
                if (_push3) {
                  if ((_a2 = unref(table).getRowModel().rows) == null ? void 0 : _a2.length) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(table).getRowModel().rows, (row) => {
                      _push3(ssrRenderComponent(_component_TableRow, {
                        key: row.id,
                        "data-state": row.getIsSelected() ? "selected" : void 0,
                        class: "cursor-pointer hover:bg-gray-100",
                        onClick: ($event) => emit("rowClick", row)
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<!--[-->`);
                            ssrRenderList(row.getVisibleCells(), (cell) => {
                              _push4(ssrRenderComponent(_component_TableCell, {
                                key: cell.id
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(unref(FlexRender), {
                                      render: cell.column.columnDef.cell,
                                      props: cell.getContext()
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(unref(FlexRender), {
                                        render: cell.column.columnDef.cell,
                                        props: cell.getContext()
                                      }, null, 8, ["render", "props"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]-->`);
                          } else {
                            return [
                              (openBlock(true), createBlock(Fragment, null, renderList(row.getVisibleCells(), (cell) => {
                                return openBlock(), createBlock(_component_TableCell, {
                                  key: cell.id
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(FlexRender), {
                                      render: cell.column.columnDef.cell,
                                      props: cell.getContext()
                                    }, null, 8, ["render", "props"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    _push3(ssrRenderComponent(_component_TableRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_TableCell, {
                            colSpan: _ctx.columns.length,
                            class: "h-24 text-center"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` No results. `);
                              } else {
                                return [
                                  createTextVNode(" No results. ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_TableCell, {
                              colSpan: _ctx.columns.length,
                              class: "h-24 text-center"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" No results. ")
                              ]),
                              _: 1
                            }, 8, ["colSpan"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    ((_b = unref(table).getRowModel().rows) == null ? void 0 : _b.length) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(table).getRowModel().rows, (row) => {
                      return openBlock(), createBlock(_component_TableRow, {
                        key: row.id,
                        "data-state": row.getIsSelected() ? "selected" : void 0,
                        class: "cursor-pointer hover:bg-gray-100",
                        onClick: ($event) => emit("rowClick", row)
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(row.getVisibleCells(), (cell) => {
                            return openBlock(), createBlock(_component_TableCell, {
                              key: cell.id
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(FlexRender), {
                                  render: cell.column.columnDef.cell,
                                  props: cell.getContext()
                                }, null, 8, ["render", "props"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1032, ["data-state", "onClick"]);
                    }), 128)) : (openBlock(), createBlock(_component_TableRow, { key: 1 }, {
                      default: withCtx(() => [
                        createVNode(_component_TableCell, {
                          colSpan: _ctx.columns.length,
                          class: "h-24 text-center"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" No results. ")
                          ]),
                          _: 1
                        }, 8, ["colSpan"])
                      ]),
                      _: 1
                    }))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TableHeader, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(table).getHeaderGroups(), (headerGroup) => {
                    return openBlock(), createBlock(_component_TableRow, {
                      key: headerGroup.id
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(headerGroup.headers, (header) => {
                          return openBlock(), createBlock(_component_TableHead, {
                            key: header.id
                          }, {
                            default: withCtx(() => [
                              !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                                key: 0,
                                render: header.column.columnDef.header,
                                props: header.getContext()
                              }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              }),
              createVNode(_component_TableBody, null, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    ((_a2 = unref(table).getRowModel().rows) == null ? void 0 : _a2.length) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(table).getRowModel().rows, (row) => {
                      return openBlock(), createBlock(_component_TableRow, {
                        key: row.id,
                        "data-state": row.getIsSelected() ? "selected" : void 0,
                        class: "cursor-pointer hover:bg-gray-100",
                        onClick: ($event) => emit("rowClick", row)
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(row.getVisibleCells(), (cell) => {
                            return openBlock(), createBlock(_component_TableCell, {
                              key: cell.id
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(FlexRender), {
                                  render: cell.column.columnDef.cell,
                                  props: cell.getContext()
                                }, null, 8, ["render", "props"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1032, ["data-state", "onClick"]);
                    }), 128)) : (openBlock(), createBlock(_component_TableRow, { key: 1 }, {
                      default: withCtx(() => [
                        createVNode(_component_TableCell, {
                          colSpan: _ctx.columns.length,
                          class: "h-24 text-center"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" No results. ")
                          ]),
                          _: 1
                        }, 8, ["colSpan"])
                      ]),
                      _: 1
                    }))
                  ];
                }),
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/board/DataTable.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const useBoardDetail = () => {
  return useState("boardDetail");
};
const _sfc_main = {
  __name: "[kr]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const book = ref({
      kr: "",
      img: ""
    });
    const board = ref([]);
    ref();
    const isOpen = ref(false);
    function rowClick(row) {
      isOpen.value = true;
      useBoardDetail().value = {
        ...row.original,
        ...book.value
      };
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_DialogBoardDetail = _sfc_main$2;
      const _component_CommonHeader = _sfc_main$3;
      const _component_PagesBoardDataTable = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_DialogBoardDetail, {
        isOpen: unref(isOpen),
        "onUpdate:open": ($event) => isOpen.value = false
      }, null, _parent));
      _push(ssrRenderComponent(_component_CommonHeader, {
        title: (_a = unref(book)) == null ? void 0 : _a.kr,
        description: `${(_b = unref(book)) == null ? void 0 : _b.kr}\uC758 \uAC8C\uC2DC\uD310 \uC785\uB2C8\uB2E4`
      }, null, _parent));
      _push(`<div><img class="h-56 object-cover overflow-hidden rounded-md"${ssrRenderAttr("src", (_c = unref(book)) == null ? void 0 : _c.img)}></div>`);
      if (_ctx.pending) {
        _push(`<div>\uC870\uD68C\uC911 ...</div>`);
      } else {
        _push(ssrRenderComponent(_component_PagesBoardDataTable, {
          columns: unref(columns),
          data: unref(board),
          onRowClick: rowClick
        }, null, _parent));
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/book/board/[kr].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_kr_-o8PDUexT.mjs.map
