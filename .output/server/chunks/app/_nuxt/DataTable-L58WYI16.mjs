import { _ as _sfc_main$1 } from './Input-eHzHGyo6.mjs';
import { _ as _sfc_main$2, a as _sfc_main$1$1, b as _sfc_main$4 } from './DropdownMenuContent-1CsI37mc.mjs';
import { _ as _sfc_main$6, a as _sfc_main$5, b as _sfc_main$1$2, c as _sfc_main$7, d as _sfc_main$2$1, e as _sfc_main$4$1, f as _sfc_main$3$1 } from './TableRow-SiplgGlM.mjs';
import { _ as _sfc_main$3 } from './index-VljijB2M.mjs';
import { defineComponent, ref, unref, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { v as valueUpdater } from '../server.mjs';
import { useVueTable, getCoreRowModel, getSortedRowModel, getFilteredRowModel, FlexRender } from '@tanstack/vue-table';
import { ChevronDown } from 'lucide-vue-next';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DataTable",
  __ssrInlineRender: true,
  props: {
    columns: {},
    data: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const sorting = ref([]);
    const columnFilters = ref([]);
    const columnVisibility = ref({});
    const rowSelection = ref({});
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
      //getPaginationRowModel: getPaginationRowModel(),
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
    __expose({
      table
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_Input = _sfc_main$1;
      const _component_DropdownMenu = _sfc_main$2;
      const _component_DropdownMenuTrigger = _sfc_main$1$1;
      const _component_Button = _sfc_main$3;
      const _component_DropdownMenuContent = _sfc_main$4;
      const _component_DropdownMenuCheckboxItem = _sfc_main$6;
      const _component_Table = _sfc_main$5;
      const _component_TableHeader = _sfc_main$1$2;
      const _component_TableRow = _sfc_main$7;
      const _component_TableHead = _sfc_main$2$1;
      const _component_TableBody = _sfc_main$4$1;
      const _component_TableCell = _sfc_main$3$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex-1 text-sm text-muted-foreground">${ssrInterpolate(unref(table).getFilteredSelectedRowModel().rows.length)} of ${ssrInterpolate(unref(table).getFilteredRowModel().rows.length)} row(s) selected. </div><div class="flex items-center py-4">`);
      _push(ssrRenderComponent(_component_Input, {
        class: "max-w-sm",
        placeholder: "Filter kr...",
        "model-value": (_a = unref(table).getColumn("kr")) == null ? void 0 : _a.getFilterValue(),
        "onUpdate:modelValue": ($event) => {
          var _a2;
          return (_a2 = unref(table).getColumn("kr")) == null ? void 0 : _a2.setFilterValue($event);
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
                        "data-state": row.getIsSelected() ? "selected" : void 0
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
                        "data-state": row.getIsSelected() ? "selected" : void 0
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
                      }, 1032, ["data-state"]);
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
                        "data-state": row.getIsSelected() ? "selected" : void 0
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
                      }, 1032, ["data-state"]);
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/book/DataTable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=DataTable-L58WYI16.mjs.map
