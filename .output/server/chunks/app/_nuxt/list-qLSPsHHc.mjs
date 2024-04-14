import { _ as _sfc_main$8 } from './book-lMq45ub5.mjs';
import { _ as _sfc_main$9 } from './Header-Ffs2ceUt.mjs';
import { _ as _sfc_main$a } from './index-3M1ek3yg.mjs';
import { _ as _sfc_main$2$1, b as _sfc_main$1$1, a as _sfc_main$c } from './PopoverContent-8-0qTYxQ.mjs';
import { useSSRContext, defineComponent, ref, computed, mergeProps, unref, withCtx, createTextVNode, renderSlot, toDisplayString, openBlock, createBlock, createCommentVNode, createVNode, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { useForwardPropsEmits, ComboboxRoot, ComboboxEmpty, ComboboxGroup, ComboboxLabel, ComboboxInput, useEmitAsProps, ComboboxItem, ComboboxContent } from 'radix-vue';
import { e as useToast, b as cn } from '../server.mjs';
import { Search } from 'lucide-vue-next';
import { a as getDatesUntilTarget } from './book-lQ5h8MvC.mjs';
import { CaretSortIcon, CheckIcon } from '@radix-icons/vue';
import { _ as _sfc_main$b } from './DataTable-nWOu9zhf.mjs';
import { a as useUniqueGenre } from './useGenre-oWvBfDWg.mjs';
import { a as useBooks, u as uniqueBooks, f as fetchBooks } from './useBooks-whKMjU-y.mjs';
import { b as useCoverList } from './useCoverList-Oa6k-9AK.mjs';
import { u as useFetch } from './fetch-rDAPzNnW.mjs';
import { u as useSupabase } from './useSupabase-4R9Br0h-.mjs';
import { columns } from './columns-GHm6X_23.mjs';
import './DialogContent-clV1XwJL.mjs';
import './DialogFooter--xqbtV5_.mjs';
import './Label--5nwJFB5.mjs';
import './Input-SV5XZJM8.mjs';
import '@vueuse/core';
import './state-JJ2SDzd5.mjs';
import './useBook-R2o0-Sb3.mjs';
import '@supabase/supabase-js';
import 'class-variance-authority';
import '../../user.mjs';
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
import '@fortawesome/free-brands-svg-icons';
import '@yeger/vue-masonry-wall';
import 'clsx';
import 'tailwind-merge';
import './DropdownMenuContent--QZH5Ua4.mjs';
import './TableRow-JExC2DXi.mjs';
import '@tanstack/vue-table';
import './DataTableDropDown-ZHpnVUbk.mjs';

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
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
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
      const _component_Popover = _sfc_main$2$1;
      const _component_PopoverTrigger = _sfc_main$1$1;
      const _component_Button = _sfc_main$a;
      const _component_PopoverContent = _sfc_main$c;
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "list",
  __ssrInlineRender: true,
  setup(__props) {
    const { toast } = useToast();
    const uniqueGenre = useUniqueGenre().value;
    const books = useBooks();
    const coverList = useCoverList();
    const selectedCombo = ref("");
    const computedBooks = computed(() => {
      return books.value.map((book) => {
        const isGenre = uniqueGenre.filter((genre) => genre.kr === book.kr).length > 0;
        const matchingCover = coverList.value.find((cover) => cover.kr === book.kr && cover.booknum === book.booknum);
        if (matchingCover) {
          book.img = matchingCover.cover_image;
        }
        return { ...book, isGenre };
      });
    });
    async function select(date) {
      toast({
        title: "fetchBooks",
        description: "books \uB97C \uAC00\uC838\uC624\uB294\uC911"
      });
      await fetchBooks(date);
      toast({
        title: "fetchBooks",
        description: "books \uB97C \uAC00\uC838\uC634"
      });
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
      const bookListWithKr = bookList.filter((book) => book.kr && book.img);
      const bookListWithoutKr = bookList.filter((book) => !book.kr || !book.img);
      return { bookListWithKr, bookListWithoutKr };
    }
    function getBookListWithKr() {
      const { bookListWithKr, bookListWithoutKr } = getBookList();
      const bookListWithKrAndImg = bookListWithoutKr.map((book) => {
        const foundBook = bookListWithKr.find((bookWithKr) => bookWithKr.jp === book.jp);
        const { kr, img } = foundBook || { kr: void 0, img: void 0 };
        return { ...book, kr, img };
      });
      return bookListWithKrAndImg;
    }
    function getBookListWithKrAndImgWithoutUndefined() {
      const bookListWithKrAndImg = getBookListWithKr();
      const bookListWithKrAndImgWithoutUndefined = bookListWithKrAndImg.filter((book) => book.kr);
      return bookListWithKrAndImgWithoutUndefined;
    }
    function getBookListWithKrAndImg() {
      const bookListWithKrAndImg = getBookListWithKrAndImgWithoutUndefined();
      const bookListWithKrAndImgWithoutDuplication = bookListWithKrAndImg.filter((book, index, self) => index === self.findIndex((t) => t.jp === book.jp));
      return bookListWithKrAndImgWithoutDuplication;
    }
    async function saveBookList() {
      const bookListWithKrAndImgWithoutDuplication = getBookListWithKrAndImg();
      bookListWithKrAndImgWithoutDuplication.forEach(async (book) => {
        await useSupabase().value.from("book").update({
          kr: book.kr,
          img: book.img
        }).eq("jp", book.jp);
      });
    }
    function bookUpdated() {
      if (selectedCombo.value == "") {
        select();
      } else {
        select(selectedCombo.value);
      }
    }
    async function genreUpdate() {
      var _a, _b;
      const _uniqueBooks = uniqueBooks();
      const result = _uniqueBooks.filter((book) => !uniqueGenre.some((genre) => genre.kr === book.kr));
      for (const book of result) {
        const book_name = book.namu ? book.namu : book.kr;
        const { data } = await useFetch(`/api/namuWiki/${book_name}`, "$vlOMEK4siZ");
        if ((_a = data.value) == null ? void 0 : _a.gneres) {
          await useSupabase().value.from("genre").insert(
            (_b = data.value) == null ? void 0 : _b.gneres.map((gnere) => {
              return {
                kr: book.kr,
                genre_name: gnere
              };
            })
          );
          toast({
            title: "fetchGenre",
            description: `${book.kr} \uC758 \uC7A5\uB974\uB97C \uC5C5\uB370\uC774\uD2B8 \uD568`
          });
        } else {
          toast({
            title: "fetchGenre",
            description: `${book.kr} \uC758 \uC7A5\uB974\uB97C \uC5C5\uB370\uC774\uD2B8 \uC2E4\uD328\uD568`
          });
        }
        await new Promise((resolve) => setTimeout(resolve, 1e3));
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogBook = _sfc_main$8;
      const _component_CommonHeader = _sfc_main$9;
      const _component_Button = _sfc_main$a;
      const _component_PagesBookCombobox = _sfc_main$1;
      const _component_PagesBookDataTable = _sfc_main$b;
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
      _push(ssrRenderComponent(_component_Button, { onClick: genreUpdate }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uC7A5\uB974 \uC5C5\uB370\uC774\uD2B8`);
          } else {
            return [
              createTextVNode("\uC7A5\uB974 \uC5C5\uB370\uC774\uD2B8")
            ];
          }
        }),
        _: 1
      }, _parent));
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
        data: unref(computedBooks)
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
//# sourceMappingURL=list-qLSPsHHc.mjs.map
