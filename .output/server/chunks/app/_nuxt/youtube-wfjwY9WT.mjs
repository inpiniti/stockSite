import { _ as _sfc_main$1$1, a as _sfc_main$a } from './SheetContent-ome715M8.mjs';
import { _ as _sfc_main$1$2, a as _sfc_main$b } from './SheetTitle-FI5IT0Z7.mjs';
import { useSSRContext, defineComponent, unref, mergeProps, withCtx, renderSlot, createVNode, ref, onUpdated, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { DialogDescription, useForwardPropsEmits, SelectRoot, SelectValue, SelectTrigger, SelectIcon, SelectPortal, SelectContent, SelectViewport, SelectGroup, SelectItem, SelectItemIndicator, SelectItemText, SelectLabel } from 'radix-vue';
import { a as cn, b as useToast } from '../server.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$1$3, b as _sfc_main$d } from './PopoverContent-JgkLdybM.mjs';
import { _ as _sfc_main$c } from './index-64ep_nG4.mjs';
import { _ as _sfc_main$e } from './Label-qeIRde0b.mjs';
import { _ as _sfc_main$f } from './Input-eHzHGyo6.mjs';
import { ChevronDown, Check } from 'lucide-vue-next';
import { u as useYouTube, g as addYouTube, f as firstPlay } from './player-EyVZwR93.mjs';
import { u as useSupabase } from './useSupabase-vnVKN2Il.mjs';
import { _ as _sfc_main$g } from './board-2PDmtHzM.mjs';
import { _ as _sfc_main$h } from './Header-Ffs2ceUt.mjs';
import { _ as _sfc_main$i } from './Card-AGwdWt8g.mjs';
import { _ as _sfc_main$3$1, a as _sfc_main$2$2, b as _sfc_main$1$4, c as _sfc_main$j } from './CardContent-aByUFUrt.mjs';
import { u as uniqueBooks } from './useBooks-Ypf3XFQB.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';
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
import 'clsx';
import 'tailwind-merge';
import '@vueuse/core';
import './state-0C5oRJ7z.mjs';
import './DialogContent-t9sk4rqE.mjs';
import './DialogFooter-d_oHvfoT.mjs';
import './Textarea-wJGe8b5L.mjs';
import './fetch-fy2p8z4q.mjs';

const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "SheetDescription",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogDescription), mergeProps({
        class: unref(cn)("text-sm text-muted-foreground", props.class)
      }, props, _attrs), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sheet/SheetDescription.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Select",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    defaultValue: {},
    modelValue: {},
    dir: {},
    name: {},
    autocomplete: {},
    disabled: { type: Boolean },
    required: { type: Boolean }
  },
  emits: ["update:modelValue", "update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SelectRoot), mergeProps(unref(forwarded), _attrs), {
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/select/Select.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "SelectValue",
  __ssrInlineRender: true,
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SelectValue), mergeProps(props, _attrs), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/select/SelectValue.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "SelectTrigger",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { default: "" },
    invalid: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SelectTrigger), mergeProps(props, {
        class: [
          unref(cn)(
            "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 whitespace-nowrap [&>span]:truncate [&>span]:min-w-0",
            props.class
          ),
          props.invalid ? "!ring-destructive ring-2 placeholder:!text-destructive" : ""
        ]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(unref(SelectIcon), { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ChevronDown), { class: "w-4 h-4 opacity-50" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ChevronDown), { class: "w-4 h-4 opacity-50" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              renderSlot(_ctx.$slots, "default"),
              createVNode(unref(SelectIcon), { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(unref(ChevronDown), { class: "w-4 h-4 opacity-50" })
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/select/SelectTrigger.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "SelectContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    position: { default: "popper" },
    side: {},
    sideOffset: { default: 4 },
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean, default: true },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SelectPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SelectContent), mergeProps({ ...unref(forwarded), ..._ctx.$attrs }, {
              class: unref(cn)(
                "relative z-50 min-w-[10rem] overflow-hidden rounded-md bg-background border border-border text-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 max-h-[--radix-popper-available-height]",
                _ctx.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
                props.class
              )
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(SelectViewport), {
                    class: unref(cn)(
                      "p-1",
                      _ctx.position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
                    )
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "default")
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(SelectViewport), {
                      class: unref(cn)(
                        "p-1",
                        _ctx.position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
                      )
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    }, 8, ["class"])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SelectContent), mergeProps({ ...unref(forwarded), ..._ctx.$attrs }, {
                class: unref(cn)(
                  "relative z-50 min-w-[10rem] overflow-hidden rounded-md bg-background border border-border text-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 max-h-[--radix-popper-available-height]",
                  _ctx.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
                  props.class
                )
              }), {
                default: withCtx(() => [
                  createVNode(unref(SelectViewport), {
                    class: unref(cn)(
                      "p-1",
                      _ctx.position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
                    )
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 3
                  }, 8, ["class"])
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/select/SelectContent.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SelectGroup",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SelectGroup), mergeProps({
        class: unref(cn)("p-1 w-full", props.class)
      }, props, _attrs), {
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/select/SelectGroup.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SelectItem",
  __ssrInlineRender: true,
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SelectItem), mergeProps(props, {
        class: unref(cn)(
          "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(SelectItemIndicator), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Check), { class: "h-4 w-4" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Check), { class: "h-4 w-4" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</span>`);
            _push2(ssrRenderComponent(unref(SelectItemText), null, {
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
              createVNode("span", { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, [
                createVNode(unref(SelectItemIndicator), null, {
                  default: withCtx(() => [
                    createVNode(unref(Check), { class: "h-4 w-4" })
                  ]),
                  _: 1
                })
              ]),
              createVNode(unref(SelectItemText), null, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/select/SelectItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SelectLabel",
  __ssrInlineRender: true,
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SelectLabel), mergeProps({
        class: unref(cn)("py-1.5 pl-8 pr-2 text-sm font-semibold", props.class)
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/select/SelectLabel.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "youtube",
  __ssrInlineRender: true,
  props: {
    isOpen: { type: Boolean },
    kr: {}
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    useYouTube();
    const youtubeList = ref();
    const { toast } = useToast();
    const props = __props;
    const emit = __emit;
    const popoverOpen = ref(false);
    const popoverData = ref({
      title: "",
      video_id: "",
      op_ed: "",
      season: "",
      cool: ""
    });
    async function add() {
      popoverOpen.value = false;
      await addYouTube({ ...popoverData.value, kr: props.kr });
      toast({
        title: "addYouTube",
        description: "\uC720\uD29C\uBE0C\uB97C \uCD94\uAC00\uD588\uC2B5\uB2C8\uB2E4."
      });
      refresh();
    }
    function videoAdd(video) {
      useYouTube().value.unshift(video);
      firstPlay();
      toast({
        title: "\uC7AC\uC0DD\uBAA9\uB85D \uCD94\uAC00",
        description: `${video.title} \uC7AC\uC0DD\uBAA9\uB85D\uC744 \uCD94\uAC00\uD588\uC2B5\uB2C8\uB2E4.`
      });
    }
    onUpdated(async () => {
      console.log(props.isOpen);
      console.log(props);
      if (props.isOpen) {
        refresh();
      }
    });
    async function refresh() {
      const { data } = await useSupabase().value.from("youtube").select("*").eq("kr", props.kr);
      youtubeList.value = data;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Sheet = _sfc_main$1$1;
      const _component_SheetContent = _sfc_main$a;
      const _component_SheetHeader = _sfc_main$1$2;
      const _component_SheetTitle = _sfc_main$b;
      const _component_SheetDescription = _sfc_main$9;
      const _component_Popover = _sfc_main$2$1;
      const _component_PopoverTrigger = _sfc_main$1$3;
      const _component_Button = _sfc_main$c;
      const _component_PopoverContent = _sfc_main$d;
      const _component_Label = _sfc_main$e;
      const _component_Input = _sfc_main$f;
      const _component_Select = _sfc_main$8;
      const _component_SelectTrigger = _sfc_main$6;
      const _component_SelectValue = _sfc_main$7;
      const _component_SelectContent = _sfc_main$5;
      const _component_SelectGroup = _sfc_main$4;
      const _component_SelectLabel = _sfc_main$2;
      const _component_SelectItem = _sfc_main$3;
      _push(ssrRenderComponent(_component_Sheet, mergeProps({
        open: _ctx.isOpen,
        "onUpdate:open": ($event) => emit("update:open")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SheetContent, { class: "overflow-y-scroll" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SheetHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SheetTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.kr)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.kr), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SheetDescription, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Make changes to your profile here. Click save when you&#39;re done. `);
                            } else {
                              return [
                                createTextVNode(" Make changes to your profile here. Click save when you're done. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_SheetTitle, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.kr), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SheetDescription, null, {
                            default: withCtx(() => [
                              createTextVNode(" Make changes to your profile here. Click save when you're done. ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Popover, { open: unref(popoverOpen) }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_PopoverTrigger, {
                          "as-child": "",
                          class: "mt-2 w-full"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Button, {
                                variant: "outline",
                                onClick: ($event) => popoverOpen.value = true
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \uC720\uD29C\uBE0C \uC601\uC0C1 \uBAA9\uB85D\uC5D0 \uCD94\uAC00 `);
                                  } else {
                                    return [
                                      createTextVNode(" \uC720\uD29C\uBE0C \uC601\uC0C1 \uBAA9\uB85D\uC5D0 \uCD94\uAC00 ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_Button, {
                                  variant: "outline",
                                  onClick: ($event) => popoverOpen.value = true
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \uC720\uD29C\uBE0C \uC601\uC0C1 \uBAA9\uB85D\uC5D0 \uCD94\uAC00 ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_PopoverContent, { class: "w-80" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="grid gap-4"${_scopeId4}><div class="space-y-2"${_scopeId4}><h4 class="font-medium leading-none"${_scopeId4}>Dimensions</h4><p class="text-sm text-muted-foreground"${_scopeId4}> Set the dimensions for the layer. </p></div><div class="grid gap-2"${_scopeId4}><div class="grid grid-cols-3 items-center gap-4"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_Label, { for: "width" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`title`);
                                  } else {
                                    return [
                                      createTextVNode("title")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_Input, {
                                modelValue: unref(popoverData).title,
                                "onUpdate:modelValue": ($event) => unref(popoverData).title = $event,
                                id: "width",
                                type: "text",
                                class: "col-span-2 h-8"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="grid grid-cols-3 items-center gap-4"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_Label, { for: "width" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`videoId`);
                                  } else {
                                    return [
                                      createTextVNode("videoId")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_Input, {
                                modelValue: unref(popoverData).video_id,
                                "onUpdate:modelValue": ($event) => unref(popoverData).video_id = $event,
                                id: "width",
                                type: "text",
                                class: "col-span-2 h-8"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="grid grid-cols-3 items-center gap-4"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_Label, { for: "maxWidth" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`op/ed`);
                                  } else {
                                    return [
                                      createTextVNode("op/ed")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_Select, {
                                modelValue: unref(popoverData).op_ed,
                                "onUpdate:modelValue": ($event) => unref(popoverData).op_ed = $event
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_SelectTrigger, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_SelectValue, { placeholder: "Select a fruit" }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_SelectValue, { placeholder: "Select a fruit" })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_SelectContent, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_SelectGroup, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_SelectLabel, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`op/ed`);
                                                    } else {
                                                      return [
                                                        createTextVNode("op/ed")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_SelectItem, { value: "op" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` op `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" op ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_SelectItem, { value: "ed" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` ed `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" ed ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_SelectLabel, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("op/ed")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_SelectItem, { value: "op" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" op ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_SelectItem, { value: "ed" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" ed ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_SelectGroup, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_SelectLabel, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("op/ed")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_SelectItem, { value: "op" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" op ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_SelectItem, { value: "ed" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" ed ")
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_SelectTrigger, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_SelectValue, { placeholder: "Select a fruit" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_SelectContent, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_SelectGroup, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_SelectLabel, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("op/ed")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_SelectItem, { value: "op" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" op ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_SelectItem, { value: "ed" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" ed ")
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
                              }, _parent5, _scopeId4));
                              _push5(`</div><div class="grid grid-cols-3 items-center gap-4"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_Label, { for: "height" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\uC2DC\uC98C`);
                                  } else {
                                    return [
                                      createTextVNode("\uC2DC\uC98C")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_Select, {
                                modelValue: unref(popoverData).season,
                                "onUpdate:modelValue": ($event) => unref(popoverData).season = $event
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_SelectTrigger, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_SelectValue, { placeholder: "Select a fruit" }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_SelectValue, { placeholder: "Select a fruit" })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_SelectContent, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_SelectGroup, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_SelectLabel, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`\uC2DC\uC98C`);
                                                    } else {
                                                      return [
                                                        createTextVNode("\uC2DC\uC98C")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_SelectItem, { value: "1" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`1\uAE30`);
                                                    } else {
                                                      return [
                                                        createTextVNode("1\uAE30")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_SelectItem, { value: "2" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`2\uAE30`);
                                                    } else {
                                                      return [
                                                        createTextVNode("2\uAE30")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_SelectItem, { value: "3" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`3\uAE30`);
                                                    } else {
                                                      return [
                                                        createTextVNode("3\uAE30")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_SelectItem, { value: "4" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`4\uAE30`);
                                                    } else {
                                                      return [
                                                        createTextVNode("4\uAE30")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_SelectItem, { value: "movie" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`\uADF9\uC7A5\uD310`);
                                                    } else {
                                                      return [
                                                        createTextVNode("\uADF9\uC7A5\uD310")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_SelectLabel, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("\uC2DC\uC98C")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_SelectItem, { value: "1" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("1\uAE30")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_SelectItem, { value: "2" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("2\uAE30")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_SelectItem, { value: "3" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("3\uAE30")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_SelectItem, { value: "4" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("4\uAE30")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_SelectItem, { value: "movie" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("\uADF9\uC7A5\uD310")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_SelectGroup, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_SelectLabel, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("\uC2DC\uC98C")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_SelectItem, { value: "1" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("1\uAE30")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_SelectItem, { value: "2" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("2\uAE30")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_SelectItem, { value: "3" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("3\uAE30")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_SelectItem, { value: "4" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("4\uAE30")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_SelectItem, { value: "movie" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("\uADF9\uC7A5\uD310")
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_SelectTrigger, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_SelectValue, { placeholder: "Select a fruit" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_SelectContent, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_SelectGroup, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_SelectLabel, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("\uC2DC\uC98C")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_SelectItem, { value: "1" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("1\uAE30")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_SelectItem, { value: "2" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("2\uAE30")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_SelectItem, { value: "3" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("3\uAE30")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_SelectItem, { value: "4" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("4\uAE30")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_SelectItem, { value: "movie" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("\uADF9\uC7A5\uD310")
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
                              }, _parent5, _scopeId4));
                              _push5(`</div><div class="grid grid-cols-3 items-center gap-4"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_Label, { for: "height" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\uCFE8`);
                                  } else {
                                    return [
                                      createTextVNode("\uCFE8")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_Select, {
                                modelValue: unref(popoverData).cool,
                                "onUpdate:modelValue": ($event) => unref(popoverData).cool = $event
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_SelectTrigger, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_SelectValue, { placeholder: "Select a fruit" }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_SelectValue, { placeholder: "Select a fruit" })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_SelectContent, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_SelectGroup, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_SelectLabel, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`\uCFE8`);
                                                    } else {
                                                      return [
                                                        createTextVNode("\uCFE8")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_SelectItem, { value: "1" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`1`);
                                                    } else {
                                                      return [
                                                        createTextVNode("1")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_SelectItem, { value: "2" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`2`);
                                                    } else {
                                                      return [
                                                        createTextVNode("2")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_SelectItem, { value: "3" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`3`);
                                                    } else {
                                                      return [
                                                        createTextVNode("3")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_SelectItem, { value: "4" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`4`);
                                                    } else {
                                                      return [
                                                        createTextVNode("4")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_SelectLabel, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("\uCFE8")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_SelectItem, { value: "1" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("1")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_SelectItem, { value: "2" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("2")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_SelectItem, { value: "3" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("3")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_SelectItem, { value: "4" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("4")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_SelectGroup, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_SelectLabel, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("\uCFE8")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_SelectItem, { value: "1" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("1")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_SelectItem, { value: "2" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("2")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_SelectItem, { value: "3" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("3")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_SelectItem, { value: "4" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("4")
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_SelectTrigger, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_SelectValue, { placeholder: "Select a fruit" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_SelectContent, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_SelectGroup, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_SelectLabel, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("\uCFE8")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_SelectItem, { value: "1" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("1")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_SelectItem, { value: "2" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("2")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_SelectItem, { value: "3" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("3")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_SelectItem, { value: "4" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("4")
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
                              }, _parent5, _scopeId4));
                              _push5(`</div></div><div class="flex gap-2"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_Button, {
                                variant: "outline",
                                onClick: add
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` add `);
                                  } else {
                                    return [
                                      createTextVNode(" add ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "grid gap-4" }, [
                                  createVNode("div", { class: "space-y-2" }, [
                                    createVNode("h4", { class: "font-medium leading-none" }, "Dimensions"),
                                    createVNode("p", { class: "text-sm text-muted-foreground" }, " Set the dimensions for the layer. ")
                                  ]),
                                  createVNode("div", { class: "grid gap-2" }, [
                                    createVNode("div", { class: "grid grid-cols-3 items-center gap-4" }, [
                                      createVNode(_component_Label, { for: "width" }, {
                                        default: withCtx(() => [
                                          createTextVNode("title")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_Input, {
                                        modelValue: unref(popoverData).title,
                                        "onUpdate:modelValue": ($event) => unref(popoverData).title = $event,
                                        id: "width",
                                        type: "text",
                                        class: "col-span-2 h-8"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "grid grid-cols-3 items-center gap-4" }, [
                                      createVNode(_component_Label, { for: "width" }, {
                                        default: withCtx(() => [
                                          createTextVNode("videoId")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_Input, {
                                        modelValue: unref(popoverData).video_id,
                                        "onUpdate:modelValue": ($event) => unref(popoverData).video_id = $event,
                                        id: "width",
                                        type: "text",
                                        class: "col-span-2 h-8"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "grid grid-cols-3 items-center gap-4" }, [
                                      createVNode(_component_Label, { for: "maxWidth" }, {
                                        default: withCtx(() => [
                                          createTextVNode("op/ed")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_Select, {
                                        modelValue: unref(popoverData).op_ed,
                                        "onUpdate:modelValue": ($event) => unref(popoverData).op_ed = $event
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_SelectTrigger, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_SelectValue, { placeholder: "Select a fruit" })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_SelectContent, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_SelectGroup, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_SelectLabel, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("op/ed")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_SelectItem, { value: "op" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" op ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_SelectItem, { value: "ed" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" ed ")
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
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "grid grid-cols-3 items-center gap-4" }, [
                                      createVNode(_component_Label, { for: "height" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\uC2DC\uC98C")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_Select, {
                                        modelValue: unref(popoverData).season,
                                        "onUpdate:modelValue": ($event) => unref(popoverData).season = $event
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_SelectTrigger, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_SelectValue, { placeholder: "Select a fruit" })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_SelectContent, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_SelectGroup, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_SelectLabel, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("\uC2DC\uC98C")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_SelectItem, { value: "1" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("1\uAE30")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_SelectItem, { value: "2" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("2\uAE30")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_SelectItem, { value: "3" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("3\uAE30")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_SelectItem, { value: "4" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("4\uAE30")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_SelectItem, { value: "movie" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("\uADF9\uC7A5\uD310")
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
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "grid grid-cols-3 items-center gap-4" }, [
                                      createVNode(_component_Label, { for: "height" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\uCFE8")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_Select, {
                                        modelValue: unref(popoverData).cool,
                                        "onUpdate:modelValue": ($event) => unref(popoverData).cool = $event
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_SelectTrigger, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_SelectValue, { placeholder: "Select a fruit" })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_SelectContent, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_SelectGroup, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_SelectLabel, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("\uCFE8")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_SelectItem, { value: "1" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("1")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_SelectItem, { value: "2" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("2")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_SelectItem, { value: "3" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("3")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_SelectItem, { value: "4" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("4")
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
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex gap-2" }, [
                                    createVNode(_component_Button, {
                                      variant: "outline",
                                      onClick: add
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" add ")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_PopoverTrigger, {
                            "as-child": "",
                            class: "mt-2 w-full"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Button, {
                                variant: "outline",
                                onClick: ($event) => popoverOpen.value = true
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \uC720\uD29C\uBE0C \uC601\uC0C1 \uBAA9\uB85D\uC5D0 \uCD94\uAC00 ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_PopoverContent, { class: "w-80" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "grid gap-4" }, [
                                createVNode("div", { class: "space-y-2" }, [
                                  createVNode("h4", { class: "font-medium leading-none" }, "Dimensions"),
                                  createVNode("p", { class: "text-sm text-muted-foreground" }, " Set the dimensions for the layer. ")
                                ]),
                                createVNode("div", { class: "grid gap-2" }, [
                                  createVNode("div", { class: "grid grid-cols-3 items-center gap-4" }, [
                                    createVNode(_component_Label, { for: "width" }, {
                                      default: withCtx(() => [
                                        createTextVNode("title")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_Input, {
                                      modelValue: unref(popoverData).title,
                                      "onUpdate:modelValue": ($event) => unref(popoverData).title = $event,
                                      id: "width",
                                      type: "text",
                                      class: "col-span-2 h-8"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "grid grid-cols-3 items-center gap-4" }, [
                                    createVNode(_component_Label, { for: "width" }, {
                                      default: withCtx(() => [
                                        createTextVNode("videoId")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_Input, {
                                      modelValue: unref(popoverData).video_id,
                                      "onUpdate:modelValue": ($event) => unref(popoverData).video_id = $event,
                                      id: "width",
                                      type: "text",
                                      class: "col-span-2 h-8"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "grid grid-cols-3 items-center gap-4" }, [
                                    createVNode(_component_Label, { for: "maxWidth" }, {
                                      default: withCtx(() => [
                                        createTextVNode("op/ed")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_Select, {
                                      modelValue: unref(popoverData).op_ed,
                                      "onUpdate:modelValue": ($event) => unref(popoverData).op_ed = $event
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_SelectTrigger, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_SelectValue, { placeholder: "Select a fruit" })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_SelectContent, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_SelectGroup, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_SelectLabel, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("op/ed")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_SelectItem, { value: "op" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" op ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_SelectItem, { value: "ed" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" ed ")
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
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "grid grid-cols-3 items-center gap-4" }, [
                                    createVNode(_component_Label, { for: "height" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\uC2DC\uC98C")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_Select, {
                                      modelValue: unref(popoverData).season,
                                      "onUpdate:modelValue": ($event) => unref(popoverData).season = $event
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_SelectTrigger, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_SelectValue, { placeholder: "Select a fruit" })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_SelectContent, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_SelectGroup, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_SelectLabel, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("\uC2DC\uC98C")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_SelectItem, { value: "1" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("1\uAE30")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_SelectItem, { value: "2" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("2\uAE30")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_SelectItem, { value: "3" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("3\uAE30")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_SelectItem, { value: "4" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("4\uAE30")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_SelectItem, { value: "movie" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("\uADF9\uC7A5\uD310")
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
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "grid grid-cols-3 items-center gap-4" }, [
                                    createVNode(_component_Label, { for: "height" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\uCFE8")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_Select, {
                                      modelValue: unref(popoverData).cool,
                                      "onUpdate:modelValue": ($event) => unref(popoverData).cool = $event
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_SelectTrigger, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_SelectValue, { placeholder: "Select a fruit" })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_SelectContent, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_SelectGroup, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_SelectLabel, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("\uCFE8")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_SelectItem, { value: "1" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("1")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_SelectItem, { value: "2" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("2")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_SelectItem, { value: "3" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("3")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_SelectItem, { value: "4" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("4")
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
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ]),
                                createVNode("div", { class: "flex gap-2" }, [
                                  createVNode(_component_Button, {
                                    variant: "outline",
                                    onClick: add
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" add ")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex flex-col gap-2 mt-2"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(youtubeList), (video) => {
                    _push3(`<div${_scopeId2}><div class="flex gap-2"${_scopeId2}><iframe class="w-36 h-20 rounded-md" id="player" type="text/html"${ssrRenderAttr("src", `http://www.youtube.com/embed/${video.video_id}?enablejsapi=1`)} frameborder="0"${_scopeId2}></iframe><div class="flex flex-col grow-[0]"${_scopeId2}><div class="text-sm font-bold text-clamp"${_scopeId2}>${ssrInterpolate(video.title)}</div><div class="text-xs"${_scopeId2}>${ssrInterpolate(video.season)}\uAE30 ${ssrInterpolate(video.cool)}\uCFE8 ${ssrInterpolate(video.op_ed)}</div><div class="text-xs"${_scopeId2}>${ssrInterpolate(video.view_count)}</div><div class="text-xs mt-1 px-2 py-1 rounded-md ring-1 ring-neutral-200 w-fit cursor-pointer"${_scopeId2}> \uC7AC\uC0DD\uBAA9\uB85D\uC5D0 \uCD94\uAC00 </div></div></div></div>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode(_component_SheetHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_SheetTitle, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.kr), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SheetDescription, null, {
                          default: withCtx(() => [
                            createTextVNode(" Make changes to your profile here. Click save when you're done. ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Popover, { open: unref(popoverOpen) }, {
                      default: withCtx(() => [
                        createVNode(_component_PopoverTrigger, {
                          "as-child": "",
                          class: "mt-2 w-full"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_Button, {
                              variant: "outline",
                              onClick: ($event) => popoverOpen.value = true
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \uC720\uD29C\uBE0C \uC601\uC0C1 \uBAA9\uB85D\uC5D0 \uCD94\uAC00 ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_PopoverContent, { class: "w-80" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "grid gap-4" }, [
                              createVNode("div", { class: "space-y-2" }, [
                                createVNode("h4", { class: "font-medium leading-none" }, "Dimensions"),
                                createVNode("p", { class: "text-sm text-muted-foreground" }, " Set the dimensions for the layer. ")
                              ]),
                              createVNode("div", { class: "grid gap-2" }, [
                                createVNode("div", { class: "grid grid-cols-3 items-center gap-4" }, [
                                  createVNode(_component_Label, { for: "width" }, {
                                    default: withCtx(() => [
                                      createTextVNode("title")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_Input, {
                                    modelValue: unref(popoverData).title,
                                    "onUpdate:modelValue": ($event) => unref(popoverData).title = $event,
                                    id: "width",
                                    type: "text",
                                    class: "col-span-2 h-8"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "grid grid-cols-3 items-center gap-4" }, [
                                  createVNode(_component_Label, { for: "width" }, {
                                    default: withCtx(() => [
                                      createTextVNode("videoId")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_Input, {
                                    modelValue: unref(popoverData).video_id,
                                    "onUpdate:modelValue": ($event) => unref(popoverData).video_id = $event,
                                    id: "width",
                                    type: "text",
                                    class: "col-span-2 h-8"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "grid grid-cols-3 items-center gap-4" }, [
                                  createVNode(_component_Label, { for: "maxWidth" }, {
                                    default: withCtx(() => [
                                      createTextVNode("op/ed")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_Select, {
                                    modelValue: unref(popoverData).op_ed,
                                    "onUpdate:modelValue": ($event) => unref(popoverData).op_ed = $event
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_SelectTrigger, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_SelectValue, { placeholder: "Select a fruit" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_SelectContent, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_SelectGroup, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_SelectLabel, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("op/ed")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_SelectItem, { value: "op" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" op ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_SelectItem, { value: "ed" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" ed ")
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
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "grid grid-cols-3 items-center gap-4" }, [
                                  createVNode(_component_Label, { for: "height" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\uC2DC\uC98C")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_Select, {
                                    modelValue: unref(popoverData).season,
                                    "onUpdate:modelValue": ($event) => unref(popoverData).season = $event
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_SelectTrigger, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_SelectValue, { placeholder: "Select a fruit" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_SelectContent, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_SelectGroup, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_SelectLabel, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("\uC2DC\uC98C")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_SelectItem, { value: "1" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("1\uAE30")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_SelectItem, { value: "2" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("2\uAE30")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_SelectItem, { value: "3" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("3\uAE30")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_SelectItem, { value: "4" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("4\uAE30")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_SelectItem, { value: "movie" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("\uADF9\uC7A5\uD310")
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
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "grid grid-cols-3 items-center gap-4" }, [
                                  createVNode(_component_Label, { for: "height" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\uCFE8")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_Select, {
                                    modelValue: unref(popoverData).cool,
                                    "onUpdate:modelValue": ($event) => unref(popoverData).cool = $event
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_SelectTrigger, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_SelectValue, { placeholder: "Select a fruit" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_SelectContent, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_SelectGroup, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_SelectLabel, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("\uCFE8")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_SelectItem, { value: "1" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("1")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_SelectItem, { value: "2" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("2")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_SelectItem, { value: "3" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("3")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_SelectItem, { value: "4" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("4")
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
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ])
                              ]),
                              createVNode("div", { class: "flex gap-2" }, [
                                createVNode(_component_Button, {
                                  variant: "outline",
                                  onClick: add
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" add ")
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["open"]),
                    createVNode("div", { class: "flex flex-col gap-2 mt-2" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(youtubeList), (video) => {
                        return openBlock(), createBlock("div", {
                          key: video.id.videoId
                        }, [
                          createVNode("div", { class: "flex gap-2" }, [
                            createVNode("iframe", {
                              class: "w-36 h-20 rounded-md",
                              id: "player",
                              type: "text/html",
                              src: `http://www.youtube.com/embed/${video.video_id}?enablejsapi=1`,
                              frameborder: "0"
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "flex flex-col grow-[0]" }, [
                              createVNode("div", { class: "text-sm font-bold text-clamp" }, toDisplayString(video.title), 1),
                              createVNode("div", { class: "text-xs" }, toDisplayString(video.season) + "\uAE30 " + toDisplayString(video.cool) + "\uCFE8 " + toDisplayString(video.op_ed), 1),
                              createVNode("div", { class: "text-xs" }, toDisplayString(video.view_count), 1),
                              createVNode("div", {
                                class: "text-xs mt-1 px-2 py-1 rounded-md ring-1 ring-neutral-200 w-fit cursor-pointer",
                                onClick: ($event) => videoAdd(video)
                              }, " \uC7AC\uC0DD\uBAA9\uB85D\uC5D0 \uCD94\uAC00 ", 8, ["onClick"])
                            ])
                          ])
                        ]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SheetContent, { class: "overflow-y-scroll" }, {
                default: withCtx(() => [
                  createVNode(_component_SheetHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_SheetTitle, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.kr), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_SheetDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(" Make changes to your profile here. Click save when you're done. ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Popover, { open: unref(popoverOpen) }, {
                    default: withCtx(() => [
                      createVNode(_component_PopoverTrigger, {
                        "as-child": "",
                        class: "mt-2 w-full"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Button, {
                            variant: "outline",
                            onClick: ($event) => popoverOpen.value = true
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \uC720\uD29C\uBE0C \uC601\uC0C1 \uBAA9\uB85D\uC5D0 \uCD94\uAC00 ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_PopoverContent, { class: "w-80" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "grid gap-4" }, [
                            createVNode("div", { class: "space-y-2" }, [
                              createVNode("h4", { class: "font-medium leading-none" }, "Dimensions"),
                              createVNode("p", { class: "text-sm text-muted-foreground" }, " Set the dimensions for the layer. ")
                            ]),
                            createVNode("div", { class: "grid gap-2" }, [
                              createVNode("div", { class: "grid grid-cols-3 items-center gap-4" }, [
                                createVNode(_component_Label, { for: "width" }, {
                                  default: withCtx(() => [
                                    createTextVNode("title")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Input, {
                                  modelValue: unref(popoverData).title,
                                  "onUpdate:modelValue": ($event) => unref(popoverData).title = $event,
                                  id: "width",
                                  type: "text",
                                  class: "col-span-2 h-8"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "grid grid-cols-3 items-center gap-4" }, [
                                createVNode(_component_Label, { for: "width" }, {
                                  default: withCtx(() => [
                                    createTextVNode("videoId")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Input, {
                                  modelValue: unref(popoverData).video_id,
                                  "onUpdate:modelValue": ($event) => unref(popoverData).video_id = $event,
                                  id: "width",
                                  type: "text",
                                  class: "col-span-2 h-8"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "grid grid-cols-3 items-center gap-4" }, [
                                createVNode(_component_Label, { for: "maxWidth" }, {
                                  default: withCtx(() => [
                                    createTextVNode("op/ed")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Select, {
                                  modelValue: unref(popoverData).op_ed,
                                  "onUpdate:modelValue": ($event) => unref(popoverData).op_ed = $event
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_SelectTrigger, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_SelectValue, { placeholder: "Select a fruit" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_SelectContent, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_SelectGroup, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_SelectLabel, null, {
                                              default: withCtx(() => [
                                                createTextVNode("op/ed")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_SelectItem, { value: "op" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" op ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_SelectItem, { value: "ed" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" ed ")
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
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "grid grid-cols-3 items-center gap-4" }, [
                                createVNode(_component_Label, { for: "height" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\uC2DC\uC98C")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Select, {
                                  modelValue: unref(popoverData).season,
                                  "onUpdate:modelValue": ($event) => unref(popoverData).season = $event
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_SelectTrigger, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_SelectValue, { placeholder: "Select a fruit" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_SelectContent, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_SelectGroup, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_SelectLabel, null, {
                                              default: withCtx(() => [
                                                createTextVNode("\uC2DC\uC98C")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_SelectItem, { value: "1" }, {
                                              default: withCtx(() => [
                                                createTextVNode("1\uAE30")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_SelectItem, { value: "2" }, {
                                              default: withCtx(() => [
                                                createTextVNode("2\uAE30")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_SelectItem, { value: "3" }, {
                                              default: withCtx(() => [
                                                createTextVNode("3\uAE30")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_SelectItem, { value: "4" }, {
                                              default: withCtx(() => [
                                                createTextVNode("4\uAE30")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_SelectItem, { value: "movie" }, {
                                              default: withCtx(() => [
                                                createTextVNode("\uADF9\uC7A5\uD310")
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
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "grid grid-cols-3 items-center gap-4" }, [
                                createVNode(_component_Label, { for: "height" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\uCFE8")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Select, {
                                  modelValue: unref(popoverData).cool,
                                  "onUpdate:modelValue": ($event) => unref(popoverData).cool = $event
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_SelectTrigger, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_SelectValue, { placeholder: "Select a fruit" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_SelectContent, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_SelectGroup, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_SelectLabel, null, {
                                              default: withCtx(() => [
                                                createTextVNode("\uCFE8")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_SelectItem, { value: "1" }, {
                                              default: withCtx(() => [
                                                createTextVNode("1")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_SelectItem, { value: "2" }, {
                                              default: withCtx(() => [
                                                createTextVNode("2")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_SelectItem, { value: "3" }, {
                                              default: withCtx(() => [
                                                createTextVNode("3")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_SelectItem, { value: "4" }, {
                                              default: withCtx(() => [
                                                createTextVNode("4")
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
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ])
                            ]),
                            createVNode("div", { class: "flex gap-2" }, [
                              createVNode(_component_Button, {
                                variant: "outline",
                                onClick: add
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" add ")
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["open"]),
                  createVNode("div", { class: "flex flex-col gap-2 mt-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(youtubeList), (video) => {
                      return openBlock(), createBlock("div", {
                        key: video.id.videoId
                      }, [
                        createVNode("div", { class: "flex gap-2" }, [
                          createVNode("iframe", {
                            class: "w-36 h-20 rounded-md",
                            id: "player",
                            type: "text/html",
                            src: `http://www.youtube.com/embed/${video.video_id}?enablejsapi=1`,
                            frameborder: "0"
                          }, null, 8, ["src"]),
                          createVNode("div", { class: "flex flex-col grow-[0]" }, [
                            createVNode("div", { class: "text-sm font-bold text-clamp" }, toDisplayString(video.title), 1),
                            createVNode("div", { class: "text-xs" }, toDisplayString(video.season) + "\uAE30 " + toDisplayString(video.cool) + "\uCFE8 " + toDisplayString(video.op_ed), 1),
                            createVNode("div", { class: "text-xs" }, toDisplayString(video.view_count), 1),
                            createVNode("div", {
                              class: "text-xs mt-1 px-2 py-1 rounded-md ring-1 ring-neutral-200 w-fit cursor-pointer",
                              onClick: ($event) => videoAdd(video)
                            }, " \uC7AC\uC0DD\uBAA9\uB85D\uC5D0 \uCD94\uAC00 ", 8, ["onClick"])
                          ])
                        ])
                      ]);
                    }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sheet/youtube.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "youtube",
  __ssrInlineRender: true,
  setup(__props) {
    const books = uniqueBooks();
    const isOpen = ref(false);
    ref("AIzaSyDE-WnHKaxA4y9LAYYsBg6lmMfMxEPvvRE");
    ref(
      "532479810296-7ap8aci48tgs1ak6de80qe1a2oiuf3mk.apps.googleusercontent.com"
    );
    ref("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");
    ref();
    const searchQuery = ref("");
    async function youtubeListOpen(book) {
      searchQuery.value = book.kr;
      isOpen.value = true;
      console.log(isOpen.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SheetYoutube = _sfc_main$1;
      const _component_DialogBoard = _sfc_main$g;
      const _component_CommonHeader = _sfc_main$h;
      const _component_Card = _sfc_main$i;
      const _component_CardHeader = _sfc_main$3$1;
      const _component_CardTitle = _sfc_main$2$2;
      const _component_CardDescription = _sfc_main$1$4;
      const _component_CardContent = _sfc_main$j;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_SheetYoutube, {
        isOpen: unref(isOpen),
        "onUpdate:open": ($event) => isOpen.value = !unref(isOpen),
        kr: unref(searchQuery)
      }, null, _parent));
      _push(ssrRenderComponent(_component_DialogBoard, { ref: "boardRef" }, null, _parent));
      _push(`<div class="p-4" data-v-87bcb623>`);
      _push(ssrRenderComponent(_component_CommonHeader, {
        title: "youtube",
        description: "\uC720\uD29C\uBE0C\uB97C \uC5F0\uB3D9\uD574\uC11C \uC74C\uC545\uC744 \uC7AC\uC0DD\uC2DC\uD0AC\uC218 \uC788\uC2B5\uB2C8\uB2E4."
      }, null, _parent));
      _push(`<div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-4" data-v-87bcb623><!--[-->`);
      ssrRenderList(unref(books), (book) => {
        _push(ssrRenderComponent(_component_Card, {
          class: { "opacity-50": !book.dc, "cursor-pointer": book.dc },
          onClick: ($event) => youtubeListOpen(book)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_CardHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_CardTitle, { class: "overflow-hidden overflow-ellipsis whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(book.kr)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(book.kr), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_CardDescription, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Deploy your new project in one-click.`);
                        } else {
                          return [
                            createTextVNode("Deploy your new project in one-click.")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_CardTitle, { class: "overflow-hidden overflow-ellipsis whitespace-nowrap" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(book.kr), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_CardDescription, null, {
                        default: withCtx(() => [
                          createTextVNode("Deploy your new project in one-click.")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_CardContent, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", book.img)} data-v-87bcb623${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: book.img
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_CardHeader, null, {
                  default: withCtx(() => [
                    createVNode(_component_CardTitle, { class: "overflow-hidden overflow-ellipsis whitespace-nowrap" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(book.kr), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_CardDescription, null, {
                      default: withCtx(() => [
                        createTextVNode("Deploy your new project in one-click.")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024),
                createVNode(_component_CardContent, null, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: book.img
                    }, null, 8, ["src"])
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/book/youtube.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const youtube = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-87bcb623"]]);

export { youtube as default };
//# sourceMappingURL=youtube-wfjwY9WT.mjs.map
