import { _ as _sfc_main$4$1, a as _sfc_main$5, b as _sfc_main$3$1, c as _sfc_main$2$1, d as _sfc_main$1$1 } from './DialogContent-kk3bNr4b.mjs';
import { _ as _sfc_main$6, a as _sfc_main$1$2 } from './Label-p37LmSla.mjs';
import { _ as _sfc_main$7 } from './Input-7SuzJlwq.mjs';
import { _ as _sfc_main$8 } from './Textarea-G63qVAKW.mjs';
import { _ as _sfc_main$3 } from './index-K3pjwam9.mjs';
import { useSSRContext, ref, withCtx, createTextVNode, unref, defineComponent, mergeProps, createVNode } from 'vue';
import { u as useFetch } from './fetch-smb1T55z.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './Header-Ffs2ceUt.mjs';
import { _ as _sfc_main$4 } from './DataTable-SexWdUK6.mjs';
import { columns } from './board.columns-rzK5GhPN.mjs';
import 'radix-vue';
import 'lucide-vue-next';
import '@vueuse/core';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import '../server.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/vue-fontawesome';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-regular-svg-icons';
import './DropdownMenuContent-uyRRRG_b.mjs';
import './TableRow-1QbGuGr5.mjs';
import '@tanstack/vue-table';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "board",
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
      }, "$h5GTxi8mRP");
    }
    __expose({ onOpen });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Dialog = _sfc_main$4$1;
      const _component_DialogContent = _sfc_main$5;
      const _component_DialogHeader = _sfc_main$3$1;
      const _component_DialogTitle = _sfc_main$2$1;
      const _component_DialogDescription = _sfc_main$1$1;
      const _component_Label = _sfc_main$6;
      const _component_Input = _sfc_main$7;
      const _component_Textarea = _sfc_main$8;
      const _component_DialogFooter = _sfc_main$1$2;
      const _component_Button = _sfc_main$3;
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
                              _push5(`\uAE00\uC4F0\uAE30`);
                            } else {
                              return [
                                createTextVNode("\uAE00\uC4F0\uAE30")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DialogDescription, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uC560\uB2C8\uBA54\uC774\uC158\uC5D0 \uB300\uD55C \uAE00\uC744 \uB0A8\uACA8\uC8FC\uC138\uC694. `);
                            } else {
                              return [
                                createTextVNode(" \uC560\uB2C8\uBA54\uC774\uC158\uC5D0 \uB300\uD55C \uAE00\uC744 \uB0A8\uACA8\uC8FC\uC138\uC694. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\uAE00\uC4F0\uAE30")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DialogDescription, null, {
                            default: withCtx(() => [
                              createTextVNode(" \uC560\uB2C8\uBA54\uC774\uC158\uC5D0 \uB300\uD55C \uAE00\uC744 \uB0A8\uACA8\uC8FC\uC138\uC694. ")
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
                    class: "col-span-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  _push3(ssrRenderComponent(_component_DialogFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Button, { onClick: email }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uAE00 \uC791\uC131 `);
                            } else {
                              return [
                                createTextVNode(" \uAE00 \uC791\uC131 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Button, { onClick: email }, {
                            default: withCtx(() => [
                              createTextVNode(" \uAE00 \uC791\uC131 ")
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
                            createTextVNode("\uAE00\uC4F0\uAE30")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DialogDescription, null, {
                          default: withCtx(() => [
                            createTextVNode(" \uC560\uB2C8\uBA54\uC774\uC158\uC5D0 \uB300\uD55C \uAE00\uC744 \uB0A8\uACA8\uC8FC\uC138\uC694. ")
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
                          class: "col-span-3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode(_component_DialogFooter, null, {
                      default: withCtx(() => [
                        createVNode(_component_Button, { onClick: email }, {
                          default: withCtx(() => [
                            createTextVNode(" \uAE00 \uC791\uC131 ")
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
                          createTextVNode("\uAE00\uC4F0\uAE30")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DialogDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(" \uC560\uB2C8\uBA54\uC774\uC158\uC5D0 \uB300\uD55C \uAE00\uC744 \uB0A8\uACA8\uC8FC\uC138\uC694. ")
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
                        class: "col-span-3"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  createVNode(_component_DialogFooter, null, {
                    default: withCtx(() => [
                      createVNode(_component_Button, { onClick: email }, {
                        default: withCtx(() => [
                          createTextVNode(" \uAE00 \uC791\uC131 ")
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dialog/board.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const board = ref([]);
    const boardRef = ref();
    function boardWriteOpen() {
      boardRef.value.onOpen();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogBoard = _sfc_main$1;
      const _component_CommonHeader = _sfc_main$2;
      const _component_Button = _sfc_main$3;
      const _component_PagesBoardDataTable = _sfc_main$4;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_DialogBoard, {
        ref_key: "boardRef",
        ref: boardRef
      }, null, _parent));
      _push(`<div class="p-4">`);
      _push(ssrRenderComponent(_component_CommonHeader, {
        title: "\uAC8C\uC2DC\uD310",
        description: "\uCEE4\uBBA4\uB2C8\uD2F0\uC785\uB2C8\uB2E4."
      }, null, _parent));
      _push(`<div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_Button, { onClick: boardWriteOpen }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uAE00\uC4F0\uAE30`);
          } else {
            return [
              createTextVNode("\uAE00\uC4F0\uAE30")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_PagesBoardDataTable, {
        columns: unref(columns),
        data: unref(board)
      }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/book/board/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-rUMMC9ZA.mjs.map
