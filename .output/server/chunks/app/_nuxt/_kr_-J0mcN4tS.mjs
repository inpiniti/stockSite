import { _ as _sfc_main$4, a as _sfc_main$5, b as _sfc_main$3$1, c as _sfc_main$2$1, d as _sfc_main$1$1 } from './DialogContent-kk3bNr4b.mjs';
import { useSSRContext, ref, mergeProps, unref, defineComponent, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './Header-Ffs2ceUt.mjs';
import { _ as _sfc_main$3 } from './DataTable-SexWdUK6.mjs';
import { u as useRoute } from '../server.mjs';
import { columns } from './board.columns-66uMJc71.mjs';
import 'radix-vue';
import './index-K3pjwam9.mjs';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import 'lucide-vue-next';
import './Input-7SuzJlwq.mjs';
import '@vueuse/core';
import './DropdownMenuContent-uyRRRG_b.mjs';
import './TableRow-1QbGuGr5.mjs';
import '@tanstack/vue-table';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "boardDetail",
  __ssrInlineRender: true,
  props: {
    isOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    ref({
      title: "",
      content: "",
      tel: "",
      email: ""
    });
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
            _push2(ssrRenderComponent(_component_DialogContent, { class: "w-5/6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`[\uC9E4] \uBC94\uC21C\uC774 \uB1CC\uC808\uC778\uAC74 \uC54C\uC9C0\uB9CC...`);
                            } else {
                              return [
                                createTextVNode("[\uC9E4] \uBC94\uC21C\uC774 \uB1CC\uC808\uC778\uAC74 \uC54C\uC9C0\uB9CC...")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DialogDescription, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex justify-between"${_scopeId4}><div${_scopeId4}>\uB4DC\uB85C\uC6B0!\uD56D\uBCF5 2024.01.23 22:33:14</div><div${_scopeId4}>\uC870\uD68C 53 \uCD94\uCC9C 1 \uB313\uAE00 7</div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex justify-between" }, [
                                  createVNode("div", null, "\uB4DC\uB85C\uC6B0!\uD56D\uBCF5 2024.01.23 22:33:14"),
                                  createVNode("div", null, "\uC870\uD68C 53 \uCD94\uCC9C 1 \uB313\uAE00 7")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("[\uC9E4] \uBC94\uC21C\uC774 \uB1CC\uC808\uC778\uAC74 \uC54C\uC9C0\uB9CC...")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DialogDescription, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex justify-between" }, [
                                createVNode("div", null, "\uB4DC\uB85C\uC6B0!\uD56D\uBCF5 2024.01.23 22:33:14"),
                                createVNode("div", null, "\uC870\uD68C 53 \uCD94\uCC9C 1 \uB313\uAE00 7")
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="grid gap-4 py-4"${_scopeId2}>\uC774\uBBF8\uC9C0 \uBA48\uCD9C\uC218\uAC00 \uC5C6\uC5B4... \uC545\uB9C8\uC758 \uC0B6...</div><div class="flex flex-col gap-3"${_scopeId2}><div${_scopeId2}>\uC804\uCCB4 \uB313\uAE00 7\uAC1C</div><div class="flex flex-col gap-1"${_scopeId2}><p class="text-xs"${_scopeId2}>\u3147\u3147(219.241)</p><div class="flex items-end gap-1"${_scopeId2}><div class="bg-neutral-100 rounded-md px-2 py-1 text-sm w-fit"${_scopeId2}><p${_scopeId2}>\uB354 \uD574\uC918</p></div><p class="text-xs"${_scopeId2}>01.23 22:33:47</p></div></div><div class="flex flex-col items-end"${_scopeId2}><p class="text-xs"${_scopeId2}>\u3147\u3147(219.241)</p><div class="flex items-end gap-1"${_scopeId2}><p class="text-xs"${_scopeId2}>01.23 22:33:47</p><div class="bg-neutral-100 rounded-md px-2 py-1 text-sm w-fit"${_scopeId2}><p${_scopeId2}>\uB354 \uD574\uC918</p></div></div></div><div${_scopeId2}>\uB4DC\uB85C\uC6B0\uD56D\uBCF5 \u3134 \uD560\uC218 \uC788\uC5B4\uC694. 01.23 22:34:33</div></div>`);
                } else {
                  return [
                    createVNode(_component_DialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_DialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("[\uC9E4] \uBC94\uC21C\uC774 \uB1CC\uC808\uC778\uAC74 \uC54C\uC9C0\uB9CC...")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DialogDescription, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex justify-between" }, [
                              createVNode("div", null, "\uB4DC\uB85C\uC6B0!\uD56D\uBCF5 2024.01.23 22:33:14"),
                              createVNode("div", null, "\uC870\uD68C 53 \uCD94\uCC9C 1 \uB313\uAE00 7")
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "grid gap-4 py-4" }, "\uC774\uBBF8\uC9C0 \uBA48\uCD9C\uC218\uAC00 \uC5C6\uC5B4... \uC545\uB9C8\uC758 \uC0B6..."),
                    createVNode("div", { class: "flex flex-col gap-3" }, [
                      createVNode("div", null, "\uC804\uCCB4 \uB313\uAE00 7\uAC1C"),
                      createVNode("div", { class: "flex flex-col gap-1" }, [
                        createVNode("p", { class: "text-xs" }, "\u3147\u3147(219.241)"),
                        createVNode("div", { class: "flex items-end gap-1" }, [
                          createVNode("div", { class: "bg-neutral-100 rounded-md px-2 py-1 text-sm w-fit" }, [
                            createVNode("p", null, "\uB354 \uD574\uC918")
                          ]),
                          createVNode("p", { class: "text-xs" }, "01.23 22:33:47")
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-col items-end" }, [
                        createVNode("p", { class: "text-xs" }, "\u3147\u3147(219.241)"),
                        createVNode("div", { class: "flex items-end gap-1" }, [
                          createVNode("p", { class: "text-xs" }, "01.23 22:33:47"),
                          createVNode("div", { class: "bg-neutral-100 rounded-md px-2 py-1 text-sm w-fit" }, [
                            createVNode("p", null, "\uB354 \uD574\uC918")
                          ])
                        ])
                      ]),
                      createVNode("div", null, "\uB4DC\uB85C\uC6B0\uD56D\uBCF5 \u3134 \uD560\uC218 \uC788\uC5B4\uC694. 01.23 22:34:33")
                    ])
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
                          createTextVNode("[\uC9E4] \uBC94\uC21C\uC774 \uB1CC\uC808\uC778\uAC74 \uC54C\uC9C0\uB9CC...")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DialogDescription, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex justify-between" }, [
                            createVNode("div", null, "\uB4DC\uB85C\uC6B0!\uD56D\uBCF5 2024.01.23 22:33:14"),
                            createVNode("div", null, "\uC870\uD68C 53 \uCD94\uCC9C 1 \uB313\uAE00 7")
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "grid gap-4 py-4" }, "\uC774\uBBF8\uC9C0 \uBA48\uCD9C\uC218\uAC00 \uC5C6\uC5B4... \uC545\uB9C8\uC758 \uC0B6..."),
                  createVNode("div", { class: "flex flex-col gap-3" }, [
                    createVNode("div", null, "\uC804\uCCB4 \uB313\uAE00 7\uAC1C"),
                    createVNode("div", { class: "flex flex-col gap-1" }, [
                      createVNode("p", { class: "text-xs" }, "\u3147\u3147(219.241)"),
                      createVNode("div", { class: "flex items-end gap-1" }, [
                        createVNode("div", { class: "bg-neutral-100 rounded-md px-2 py-1 text-sm w-fit" }, [
                          createVNode("p", null, "\uB354 \uD574\uC918")
                        ]),
                        createVNode("p", { class: "text-xs" }, "01.23 22:33:47")
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-col items-end" }, [
                      createVNode("p", { class: "text-xs" }, "\u3147\u3147(219.241)"),
                      createVNode("div", { class: "flex items-end gap-1" }, [
                        createVNode("p", { class: "text-xs" }, "01.23 22:33:47"),
                        createVNode("div", { class: "bg-neutral-100 rounded-md px-2 py-1 text-sm w-fit" }, [
                          createVNode("p", null, "\uB354 \uD574\uC918")
                        ])
                      ])
                    ]),
                    createVNode("div", null, "\uB4DC\uB85C\uC6B0\uD56D\uBCF5 \u3134 \uD560\uC218 \uC788\uC5B4\uC694. 01.23 22:34:33")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dialog/boardDetail.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
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
      console.log(row.original);
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_DialogBoardDetail = _sfc_main$1;
      const _component_CommonHeader = _sfc_main$2;
      const _component_PagesBoardDataTable = _sfc_main$3;
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
//# sourceMappingURL=_kr_-J0mcN4tS.mjs.map
