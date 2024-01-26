import { _ as _sfc_main$4$1, a as _sfc_main$f, b as _sfc_main$3$1, c as _sfc_main$2$1, d as _sfc_main$1$1 } from './DialogContent-kk3bNr4b.mjs';
import { _ as _sfc_main$g, a as _sfc_main$1$2 } from './Label-p37LmSla.mjs';
import { _ as _sfc_main$h } from './Input-7SuzJlwq.mjs';
import { c as cn, _ as _sfc_main$d } from './index-K3pjwam9.mjs';
import { u as useState } from './state-1CyKPjUP.mjs';
import { useSSRContext, defineComponent, ref, watch, mergeProps, unref, withCtx, createTextVNode, createVNode, renderSlot, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList } from 'vue';
import { u as useToast, a as useBook } from './DataTableDropDown-Nh08_0KG.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { createClient } from '@supabase/supabase-js';
import { _ as _sfc_main$c } from './Header-Ffs2ceUt.mjs';
import { useForwardPropsEmits, PopoverRoot, PopoverTrigger, PopoverPortal, PopoverContent, ComboboxRoot, ComboboxEmpty, ComboboxGroup, ComboboxLabel, ComboboxInput, useEmitAsProps, ComboboxItem, ComboboxContent } from 'radix-vue';
import { Loader2, Search } from 'lucide-vue-next';
import { a as getDatesUntilTarget } from './book-JkoC1KYI.mjs';
import { CaretSortIcon, CheckIcon } from '@radix-icons/vue';
import { _ as _sfc_main$e } from './DataTable-1fJvN7nm.mjs';
import { a as useBooks, f as fetchBooks } from './useBooks-Deguqr8N.mjs';
import { u as useFetch } from './fetch-smb1T55z.mjs';
import { columns } from './columns-DZXMHuc8.mjs';
import { cva } from 'class-variance-authority';
import '@vueuse/core';
import 'clsx';
import 'tailwind-merge';
import '../server.mjs';
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
import './DropdownMenuContent-uyRRRG_b.mjs';
import './TableRow-1QbGuGr5.mjs';
import '@tanstack/vue-table';

const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "book",
  __ssrInlineRender: true,
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const supabase = createClient(
      "https://etnyrefdmddqiuatswhb.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0bnlyZWZkbWRkcWl1YXRzd2hiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4ODc3MDIsImV4cCI6MjAyMDQ2MzcwMn0.IwIU929Y-H6JsZdvZ2QSEsmbmBLKIND7B7_a3UpRfhs"
    );
    const open = useState("bookOpen");
    const loading = ref(false);
    const emit = __emit;
    async function ok() {
      loading.value = true;
      await supabase.from("book").update({
        kr: useBook().selected.value.kr,
        img: useBook().selected.value.img,
        namu: useBook().selected.value.namu,
        dc: useBook().selected.value.dc
      }).eq("jp", useBook().selected.value.jp);
      loading.value = false;
      open.value = false;
      emit("update:open");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Dialog = _sfc_main$4$1;
      const _component_DialogContent = _sfc_main$f;
      const _component_DialogHeader = _sfc_main$3$1;
      const _component_DialogTitle = _sfc_main$2$1;
      const _component_DialogDescription = _sfc_main$1$1;
      const _component_Label = _sfc_main$g;
      const _component_Input = _sfc_main$h;
      const _component_DialogFooter = _sfc_main$1$2;
      const _component_Button = _sfc_main$d;
      _push(ssrRenderComponent(_component_Dialog, mergeProps({
        open: unref(open),
        "onUpdate:open": ($event) => open.value = false
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DialogContent, { class: "sm:max-w-[425px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\uB9CC\uD654\uCC45 \uC218\uC815`);
                            } else {
                              return [
                                createTextVNode("\uB9CC\uD654\uCC45 \uC218\uC815")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DialogDescription, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uB9CC\uD654\uCC45\uC758 \uD55C\uAD6D\uC5B4 \uC81C\uBAA9 \uBC0F \uCC45\uC758 \uC774\uBBF8\uC9C0\uB97C \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. `);
                            } else {
                              return [
                                createTextVNode(" \uB9CC\uD654\uCC45\uC758 \uD55C\uAD6D\uC5B4 \uC81C\uBAA9 \uBC0F \uCC45\uC758 \uC774\uBBF8\uC9C0\uB97C \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\uB9CC\uD654\uCC45 \uC218\uC815")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DialogDescription, null, {
                            default: withCtx(() => [
                              createTextVNode(" \uB9CC\uD654\uCC45\uC758 \uD55C\uAD6D\uC5B4 \uC81C\uBAA9 \uBC0F \uCC45\uC758 \uC774\uBBF8\uC9C0\uB97C \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. ")
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
                    for: "name",
                    class: "text-right"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uC77C\uBCF8\uC5B4 \uC81C\uBAA9 `);
                      } else {
                        return [
                          createTextVNode(" \uC77C\uBCF8\uC5B4 \uC81C\uBAA9 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    id: "name",
                    class: "col-span-3",
                    modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.jp,
                    "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.jp = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid grid-cols-4 items-center gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, {
                    for: "name",
                    class: "text-right"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uD55C\uAD6D\uC5B4 \uC81C\uBAA9 `);
                      } else {
                        return [
                          createTextVNode(" \uD55C\uAD6D\uC5B4 \uC81C\uBAA9 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    id: "name",
                    class: "col-span-3",
                    modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.kr,
                    "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.kr = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid grid-cols-4 items-center gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, {
                    for: "username",
                    class: "text-right"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uC774\uBBF8\uC9C0 url `);
                      } else {
                        return [
                          createTextVNode(" \uC774\uBBF8\uC9C0 url ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    id: "username",
                    class: "col-span-3",
                    modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.img,
                    "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.img = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid grid-cols-4 items-center gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, {
                    for: "namu",
                    class: "text-right"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uB098\uBB34\uC704\uD0A4 url `);
                      } else {
                        return [
                          createTextVNode(" \uB098\uBB34\uC704\uD0A4 url ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    id: "namu",
                    class: "col-span-3",
                    modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.namu,
                    "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.namu = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid grid-cols-4 items-center gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, {
                    for: "namu",
                    class: "text-right"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` dcinside id `);
                      } else {
                        return [
                          createTextVNode(" dcinside id ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    id: "namu",
                    class: "col-span-3",
                    modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.dc,
                    "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.dc = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  _push3(ssrRenderComponent(_component_DialogFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Button, { onClick: ok }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Save changes `);
                            } else {
                              return [
                                createTextVNode(" Save changes ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Button, { onClick: ok }, {
                            default: withCtx(() => [
                              createTextVNode(" Save changes ")
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
                            createTextVNode("\uB9CC\uD654\uCC45 \uC218\uC815")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DialogDescription, null, {
                          default: withCtx(() => [
                            createTextVNode(" \uB9CC\uD654\uCC45\uC758 \uD55C\uAD6D\uC5B4 \uC81C\uBAA9 \uBC0F \uCC45\uC758 \uC774\uBBF8\uC9C0\uB97C \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "grid gap-4 py-4" }, [
                      createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                        createVNode(_component_Label, {
                          for: "name",
                          class: "text-right"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uC77C\uBCF8\uC5B4 \uC81C\uBAA9 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          id: "name",
                          class: "col-span-3",
                          modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.jp,
                          "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.jp = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                        createVNode(_component_Label, {
                          for: "name",
                          class: "text-right"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uD55C\uAD6D\uC5B4 \uC81C\uBAA9 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          id: "name",
                          class: "col-span-3",
                          modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.kr,
                          "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.kr = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                        createVNode(_component_Label, {
                          for: "username",
                          class: "text-right"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uC774\uBBF8\uC9C0 url ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          id: "username",
                          class: "col-span-3",
                          modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.img,
                          "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.img = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                        createVNode(_component_Label, {
                          for: "namu",
                          class: "text-right"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uB098\uBB34\uC704\uD0A4 url ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          id: "namu",
                          class: "col-span-3",
                          modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.namu,
                          "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.namu = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                        createVNode(_component_Label, {
                          for: "namu",
                          class: "text-right"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" dcinside id ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          id: "namu",
                          class: "col-span-3",
                          modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.dc,
                          "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.dc = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode(_component_DialogFooter, null, {
                      default: withCtx(() => [
                        createVNode(_component_Button, { onClick: ok }, {
                          default: withCtx(() => [
                            createTextVNode(" Save changes ")
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
              createVNode(_component_DialogContent, { class: "sm:max-w-[425px]" }, {
                default: withCtx(() => [
                  createVNode(_component_DialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_DialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\uB9CC\uD654\uCC45 \uC218\uC815")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DialogDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(" \uB9CC\uD654\uCC45\uC758 \uD55C\uAD6D\uC5B4 \uC81C\uBAA9 \uBC0F \uCC45\uC758 \uC774\uBBF8\uC9C0\uB97C \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "grid gap-4 py-4" }, [
                    createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                      createVNode(_component_Label, {
                        for: "name",
                        class: "text-right"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC77C\uBCF8\uC5B4 \uC81C\uBAA9 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        id: "name",
                        class: "col-span-3",
                        modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.jp,
                        "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.jp = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                      createVNode(_component_Label, {
                        for: "name",
                        class: "text-right"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uD55C\uAD6D\uC5B4 \uC81C\uBAA9 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        id: "name",
                        class: "col-span-3",
                        modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.kr,
                        "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.kr = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                      createVNode(_component_Label, {
                        for: "username",
                        class: "text-right"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC774\uBBF8\uC9C0 url ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        id: "username",
                        class: "col-span-3",
                        modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.img,
                        "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.img = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                      createVNode(_component_Label, {
                        for: "namu",
                        class: "text-right"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uB098\uBB34\uC704\uD0A4 url ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        id: "namu",
                        class: "col-span-3",
                        modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.namu,
                        "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.namu = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                      createVNode(_component_Label, {
                        for: "namu",
                        class: "text-right"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" dcinside id ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        id: "namu",
                        class: "col-span-3",
                        modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.dc,
                        "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.dc = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  createVNode(_component_DialogFooter, null, {
                    default: withCtx(() => [
                      createVNode(_component_Button, { onClick: ok }, {
                        default: withCtx(() => [
                          createTextVNode(" Save changes ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dialog/book.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "Popover",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(PopoverRoot), mergeProps(unref(forwarded), _attrs), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/popover/Popover.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "PopoverTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(PopoverTrigger), mergeProps(props, _attrs), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/popover/PopoverTrigger.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "PopoverContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: { default: 4 },
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    onPlaced: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean },
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(PopoverPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(PopoverContent), mergeProps({ ...unref(forwarded), ..._ctx.$attrs }, {
              class: unref(cn)(
                "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                props.class
              )
            }), {
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
              createVNode(unref(PopoverContent), mergeProps({ ...unref(forwarded), ..._ctx.$attrs }, {
                class: unref(cn)(
                  "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                  props.class
                )
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16, ["class"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/popover/PopoverContent.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Command",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    defaultValue: {},
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    searchTerm: {},
    multiple: { type: Boolean },
    disabled: { type: Boolean },
    name: {},
    dir: {},
    filterFunction: { type: Function },
    displayValue: { type: Function },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:open", "update:searchTerm"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(ComboboxRoot), mergeProps(unref(forwarded), {
        open: true,
        "model-value": "",
        class: unref(cn)("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", (_a = _ctx.$attrs.class) != null ? _a : "")
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/command/Command.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "CommandEmpty",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(ComboboxEmpty), mergeProps(props, {
        class: unref(cn)("py-6 text-center text-sm", (_a = _ctx.$attrs.class) != null ? _a : "")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/command/CommandEmpty.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "CommandGroup",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    heading: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(ComboboxGroup), mergeProps(props, {
        class: unref(cn)("overflow-hidden p-1 text-foreground", (_a = _ctx.$attrs.class) != null ? _a : "")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.heading) {
              _push2(ssrRenderComponent(unref(ComboboxLabel), { class: "px-2 py-1.5 text-xs font-medium text-muted-foreground" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.heading)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.heading), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              _ctx.heading ? (openBlock(), createBlock(unref(ComboboxLabel), {
                key: 0,
                class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.heading), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/command/CommandGroup.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __default__ = {
  inheritAttrs: false
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "CommandInput",
  __ssrInlineRender: true,
  props: {
    type: {},
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "flex items-center border-b px-3",
        "cmdk-input-wrapper": ""
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Search), { class: "mr-2 h-4 w-4 shrink-0 opacity-50" }, null, _parent));
      _push(ssrRenderComponent(unref(ComboboxInput), mergeProps({ ...props, ..._ctx.$attrs }, {
        "auto-focus": "",
        class: unref(cn)("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", (_a = _ctx.$attrs.class) != null ? _a : "")
      }), null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/command/CommandInput.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CommandItem",
  __ssrInlineRender: true,
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const emitsAsProps = useEmitAsProps(emits);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(ComboboxItem), mergeProps({ ...props, ...unref(emitsAsProps) }, {
        class: unref(cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", (_a = _ctx.$attrs.class) != null ? _a : ""),
        onSelect: () => {
        }
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/command/CommandItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CommandList",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    position: {},
    bodyLock: { type: Boolean },
    dismissable: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    onPlaced: { type: Function },
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(ComboboxContent), mergeProps(unref(forwarded), {
        class: unref(cn)("max-h-[300px] overflow-y-auto overflow-x-hidden", (_a = _ctx.$attrs.class) != null ? _a : "")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div role="presentation"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { role: "presentation" }, [
                renderSlot(_ctx.$slots, "default")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/command/CommandList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Combobox",
  __ssrInlineRender: true,
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const frameworks = getDatesUntilTarget();
    const open = ref(false);
    const value = ref("");
    const emit = __emit;
    function select(ev) {
      if (typeof ev.detail.value === "string") {
        value.value = ev.detail.value;
      }
      open.value = false;
      emit("select", value.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Popover = _sfc_main$a;
      const _component_PopoverTrigger = _sfc_main$9;
      const _component_Button = _sfc_main$d;
      const _component_PopoverContent = _sfc_main$8;
      const _component_Command = _sfc_main$7;
      const _component_CommandInput = _sfc_main$4;
      const _component_CommandEmpty = _sfc_main$6;
      const _component_CommandList = _sfc_main$2;
      const _component_CommandGroup = _sfc_main$5;
      const _component_CommandItem = _sfc_main$3;
      _push(ssrRenderComponent(_component_Popover, mergeProps({
        open: open.value,
        "onUpdate:open": ($event) => open.value = $event
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PopoverTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    variant: "outline",
                    role: "combobox",
                    "aria-expanded": open.value,
                    class: "w-[200px] justify-between"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        _push4(`${ssrInterpolate(value.value ? (_a = unref(frameworks).find((framework) => framework.value === value.value)) == null ? void 0 : _a.label : "Select ")} `);
                        _push4(ssrRenderComponent(unref(CaretSortIcon), { class: "ml-2 h-4 w-4 shrink-0 opacity-50" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode(toDisplayString(value.value ? (_b = unref(frameworks).find((framework) => framework.value === value.value)) == null ? void 0 : _b.label : "Select ") + " ", 1),
                          createVNode(unref(CaretSortIcon), { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      variant: "outline",
                      role: "combobox",
                      "aria-expanded": open.value,
                      class: "w-[200px] justify-between"
                    }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createTextVNode(toDisplayString(value.value ? (_a = unref(frameworks).find((framework) => framework.value === value.value)) == null ? void 0 : _a.label : "Select ") + " ", 1),
                          createVNode(unref(CaretSortIcon), { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                        ];
                      }),
                      _: 1
                    }, 8, ["aria-expanded"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_PopoverContent, { class: "w-[200px] p-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Command, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_CommandInput, {
                          class: "h-9",
                          placeholder: "Search "
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_CommandEmpty, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`No framework found.`);
                            } else {
                              return [
                                createTextVNode("No framework found.")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_CommandList, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_CommandGroup, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(frameworks), (framework) => {
                                      _push6(ssrRenderComponent(_component_CommandItem, {
                                        key: framework.value,
                                        value: framework.value,
                                        onSelect: select
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(framework.label)} `);
                                            _push7(ssrRenderComponent(unref(CheckIcon), {
                                              class: unref(cn)(
                                                "ml-auto h-4 w-4",
                                                value.value === framework.value ? "opacity-100" : "opacity-0"
                                              )
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(framework.label) + " ", 1),
                                              createVNode(unref(CheckIcon), {
                                                class: unref(cn)(
                                                  "ml-auto h-4 w-4",
                                                  value.value === framework.value ? "opacity-100" : "opacity-0"
                                                )
                                              }, null, 8, ["class"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(frameworks), (framework) => {
                                        return openBlock(), createBlock(_component_CommandItem, {
                                          key: framework.value,
                                          value: framework.value,
                                          onSelect: select
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(framework.label) + " ", 1),
                                            createVNode(unref(CheckIcon), {
                                              class: unref(cn)(
                                                "ml-auto h-4 w-4",
                                                value.value === framework.value ? "opacity-100" : "opacity-0"
                                              )
                                            }, null, 8, ["class"])
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_CommandGroup, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(frameworks), (framework) => {
                                      return openBlock(), createBlock(_component_CommandItem, {
                                        key: framework.value,
                                        value: framework.value,
                                        onSelect: select
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(framework.label) + " ", 1),
                                          createVNode(unref(CheckIcon), {
                                            class: unref(cn)(
                                              "ml-auto h-4 w-4",
                                              value.value === framework.value ? "opacity-100" : "opacity-0"
                                            )
                                          }, null, 8, ["class"])
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
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
                          createVNode(_component_CommandInput, {
                            class: "h-9",
                            placeholder: "Search "
                          }),
                          createVNode(_component_CommandEmpty, null, {
                            default: withCtx(() => [
                              createTextVNode("No framework found.")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_CommandList, null, {
                            default: withCtx(() => [
                              createVNode(_component_CommandGroup, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(frameworks), (framework) => {
                                    return openBlock(), createBlock(_component_CommandItem, {
                                      key: framework.value,
                                      value: framework.value,
                                      onSelect: select
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(framework.label) + " ", 1),
                                        createVNode(unref(CheckIcon), {
                                          class: unref(cn)(
                                            "ml-auto h-4 w-4",
                                            value.value === framework.value ? "opacity-100" : "opacity-0"
                                          )
                                        }, null, 8, ["class"])
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]);
                                  }), 128))
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
                    createVNode(_component_Command, null, {
                      default: withCtx(() => [
                        createVNode(_component_CommandInput, {
                          class: "h-9",
                          placeholder: "Search "
                        }),
                        createVNode(_component_CommandEmpty, null, {
                          default: withCtx(() => [
                            createTextVNode("No framework found.")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_CommandList, null, {
                          default: withCtx(() => [
                            createVNode(_component_CommandGroup, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(frameworks), (framework) => {
                                  return openBlock(), createBlock(_component_CommandItem, {
                                    key: framework.value,
                                    value: framework.value,
                                    onSelect: select
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(framework.label) + " ", 1),
                                      createVNode(unref(CheckIcon), {
                                        class: unref(cn)(
                                          "ml-auto h-4 w-4",
                                          value.value === framework.value ? "opacity-100" : "opacity-0"
                                        )
                                      }, null, 8, ["class"])
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
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
          } else {
            return [
              createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_Button, {
                    variant: "outline",
                    role: "combobox",
                    "aria-expanded": open.value,
                    class: "w-[200px] justify-between"
                  }, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createTextVNode(toDisplayString(value.value ? (_a = unref(frameworks).find((framework) => framework.value === value.value)) == null ? void 0 : _a.label : "Select ") + " ", 1),
                        createVNode(unref(CaretSortIcon), { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                      ];
                    }),
                    _: 1
                  }, 8, ["aria-expanded"])
                ]),
                _: 1
              }),
              createVNode(_component_PopoverContent, { class: "w-[200px] p-0" }, {
                default: withCtx(() => [
                  createVNode(_component_Command, null, {
                    default: withCtx(() => [
                      createVNode(_component_CommandInput, {
                        class: "h-9",
                        placeholder: "Search "
                      }),
                      createVNode(_component_CommandEmpty, null, {
                        default: withCtx(() => [
                          createTextVNode("No framework found.")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_CommandList, null, {
                        default: withCtx(() => [
                          createVNode(_component_CommandGroup, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(frameworks), (framework) => {
                                return openBlock(), createBlock(_component_CommandItem, {
                                  key: framework.value,
                                  value: framework.value,
                                  onSelect: select
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(framework.label) + " ", 1),
                                    createVNode(unref(CheckIcon), {
                                      class: unref(cn)(
                                        "ml-auto h-4 w-4",
                                        value.value === framework.value ? "opacity-100" : "opacity-0"
                                      )
                                    }, null, 8, ["class"])
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/book/Combobox.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "list",
  __ssrInlineRender: true,
  setup(__props) {
    const supabase = createClient(
      "https://etnyrefdmddqiuatswhb.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0bnlyZWZkbWRkcWl1YXRzd2hiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4ODc3MDIsImV4cCI6MjAyMDQ2MzcwMn0.IwIU929Y-H6JsZdvZ2QSEsmbmBLKIND7B7_a3UpRfhs"
    );
    const books = useBooks();
    const clicked = useState("clicked", () => false);
    const selectedCombo = ref("");
    const loading = ref(false);
    watch(clicked, () => {
      select();
    });
    async function select(date) {
      const { toast } = useToast();
      toast({
        title: "fetchBooks",
        description: "books \uB97C \uAC00\uC838\uC635\uB2C8\uB2E4."
      });
      await fetchBooks(date);
    }
    function allSelect() {
      select();
    }
    function comboselect(value) {
      select(value);
      selectedCombo.value = value;
    }
    async function collect() {
      await useFetch(`/api/book/${selectedCombo.value}`, "$FMbvadBTOo");
      select(selectedCombo.value);
    }
    function getBookList() {
      const bookList = books.value;
      const bookListWithKr = bookList.filter((book) => book.kr);
      const bookListWithoutKr = bookList.filter((book) => !book.kr);
      return { bookListWithKr, bookListWithoutKr };
    }
    function getBookListWithKr() {
      const { bookListWithKr, bookListWithoutKr } = getBookList();
      const bookListWithKrAndImg = bookListWithoutKr.map((book) => {
        const foundBook = bookListWithKr.find(
          (bookWithKr) => bookWithKr.jp === book.jp
        );
        const { kr, img } = foundBook || { kr: void 0, img: void 0 };
        return { ...book, kr, img };
      });
      return bookListWithKrAndImg;
    }
    function getBookListWithKrAndImgWithoutUndefined() {
      const bookListWithKrAndImg = getBookListWithKr();
      const bookListWithKrAndImgWithoutUndefined = bookListWithKrAndImg.filter(
        (book) => book.kr
      );
      return bookListWithKrAndImgWithoutUndefined;
    }
    function getBookListWithKrAndImg() {
      const bookListWithKrAndImg = getBookListWithKrAndImgWithoutUndefined();
      const bookListWithKrAndImgWithoutDuplication = bookListWithKrAndImg.filter(
        (book, index, self) => index === self.findIndex((t) => t.jp === book.jp)
      );
      return bookListWithKrAndImgWithoutDuplication;
    }
    async function saveBookList() {
      loading.value = true;
      const bookListWithKrAndImgWithoutDuplication = getBookListWithKrAndImg();
      bookListWithKrAndImgWithoutDuplication.forEach(async (book) => {
        await supabase.from("book").update({
          kr: book.kr,
          img: book.img
        }).eq("jp", book.jp);
      });
      loading.value = false;
    }
    function bookUpdated() {
      if (selectedCombo.value == "") {
        select();
      } else {
        select(selectedCombo.value);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogBook = _sfc_main$b;
      const _component_CommonHeader = _sfc_main$c;
      const _component_Button = _sfc_main$d;
      const _component_PagesBookCombobox = _sfc_main$1;
      const _component_PagesBookDataTable = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4 flex flex-col gap-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_DialogBook, { "onUpdate:open": bookUpdated }, null, _parent));
      _push(ssrRenderComponent(_component_CommonHeader, {
        title: "List",
        description: "\uCC45 \uB9AC\uC2A4\uD2B8\uB97C \uBCFC \uC218 \uC788\uC73C\uBA70, \uCC45 \uD3B8\uC9D1\uC744 \uD558\uB294 \uD654\uBA74 \uC785\uB2C8\uB2E4."
      }, null, _parent));
      _push(`<div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_Button, {
        onClick: collect,
        disabled: unref(books).length != 0
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uC218\uC9D1\uD558\uAE30`);
          } else {
            return [
              createTextVNode("\uC218\uC9D1\uD558\uAE30")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(loading)) {
        _push(ssrRenderComponent(_component_Button, { disabled: "" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Loader2), { class: "w-4 h-4 mr-2 animate-spin" }, null, _parent2, _scopeId));
              _push2(` Please wait `);
            } else {
              return [
                createVNode(unref(Loader2), { class: "w-4 h-4 mr-2 animate-spin" }),
                createTextVNode(" Please wait ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_Button, { onClick: saveBookList }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`kr, img \uC5C5\uB370\uC774\uD2B8`);
            } else {
              return [
                createTextVNode("kr, img \uC5C5\uB370\uC774\uD2B8")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(ssrRenderComponent(_component_Button, {
        variant: "secondary",
        onClick: allSelect
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uC804\uCCB4 \uC870\uD68C`);
          } else {
            return [
              createTextVNode("\uC804\uCCB4 \uC870\uD68C")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_PagesBookCombobox, { onSelect: comboselect }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_PagesBookDataTable, {
        columns: unref(columns),
        data: unref(books)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/book/list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=list-jeOlrUFl.mjs.map