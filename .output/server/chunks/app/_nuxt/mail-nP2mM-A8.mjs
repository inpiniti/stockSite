import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode, createTextVNode, renderSlot, unref, computed, openBlock, createBlock, createCommentVNode, ref, isRef, resolveComponent, toDisplayString, Fragment, renderList, TransitionGroup } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { TooltipProvider, useForwardPropsEmits, SplitterGroup, SplitterResizeHandle, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaRoot, ScrollAreaCorner, SplitterPanel } from 'radix-vue';
import { a as cn } from '../server.mjs';
import { GripVertical } from 'lucide-vue-next';
import { _ as _sfc_main$7$1, a as _sfc_main$5$1, b as _sfc_main$6$1, c as _sfc_main$4$1, d as _sfc_main$3$1, e as _sfc_main$2$1 } from './SelectScrollDownButton-28V17fsQ.mjs';
import { _ as _sfc_main$e } from './SelectLabel-GuQjqCsE.mjs';
import { _ as _sfc_main$f } from './Separator-SzPKFLHH.mjs';
import { u as useBookInfoList, _ as _sfc_main$k } from './book-4uqaRAlh.mjs';
import { _ as _sfc_main$i } from './index-VljijB2M.mjs';
import moment from 'moment';
import { _ as _sfc_main$j } from './index-a6dO8h6t.mjs';
import { u as useSelectedBook, b as useBooks } from './useBooks-P5ZbZrgP.mjs';
import { u as useBook } from './useBook-jIPfxSlK.mjs';
import { _ as _sfc_main$2$2, a as _sfc_main$g, b as _sfc_main$1$1 } from './TabsList-76hBfA3R.mjs';
import { _ as _sfc_main$h } from './TabsContent-TJ4DkLwy.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-FXH7HDwx.mjs';
import { b as useCoverList } from './useCoverList-kQSAeCJm.mjs';
import { u as useMusic } from './useMusic-QD8ydXc6.mjs';
import { t as timeAgo } from './book-lQ5h8MvC.mjs';
import { u as useBoardDetail } from './useBoardDetail-05OADXrM.mjs';
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
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import './DialogContent-gH5cY4B6.mjs';
import './DialogFooter-d_oHvfoT.mjs';
import './Label-qeIRde0b.mjs';
import './Input-eHzHGyo6.mjs';
import '@vueuse/core';
import './state-t0JlwV5Q.mjs';
import './useSupabase-g_fbflW8.mjs';

const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "TooltipProvider",
  __ssrInlineRender: true,
  props: {
    delayDuration: {},
    skipDelayDuration: {},
    disableHoverableContent: { type: Boolean },
    disableClosingTrigger: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipProvider), mergeProps(props, _attrs), {
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
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tooltip/TooltipProvider.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "ResizablePanelGroup",
  __ssrInlineRender: true,
  props: {
    id: {},
    autoSaveId: {},
    direction: {},
    keyboardResizeBy: {},
    storage: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["layout"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SplitterGroup), mergeProps(unref(forwarded), {
        class: unref(cn)("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", props.class)
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
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/resizable/ResizablePanelGroup.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "ResizableHandle",
  __ssrInlineRender: true,
  props: {
    id: {},
    hitAreaMargins: {},
    tabindex: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {},
    withHandle: { type: Boolean }
  },
  emits: ["dragging"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SplitterResizeHandle), mergeProps(unref(forwarded), {
        class: unref(cn)("relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 [&[data-orientation=vertical]]:h-px [&[data-orientation=vertical]]:w-full [&[data-orientation=vertical]]:after:left-0 [&[data-orientation=vertical]]:after:h-1 [&[data-orientation=vertical]]:after:w-full [&[data-orientation=vertical]]:after:-translate-y-1/2 [&[data-orientation=vertical]]:after:translate-x-0 [&[data-orientation=vertical]>div]:rotate-90", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (props.withHandle) {
              _push2(`<div class="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(GripVertical), { class: "h-2.5 w-2.5" }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              props.withHandle ? (openBlock(), createBlock("div", {
                key: 0,
                class: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border"
              }, [
                createVNode(unref(GripVertical), { class: "h-2.5 w-2.5" })
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/resizable/ResizableHandle.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "DateSelection",
  __ssrInlineRender: true,
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const type = ref("week");
    const date = ref(moment());
    function onChange() {
      emit("change", {
        type: type.value,
        date: date.value
      });
    }
    const formattedDate = computed(() => {
      if (type.value === "month") {
        return date.value.format("YYYY.MM");
      } else if (type.value === "year") {
        return date.value.format("YYYY");
      } else if (type.value === "week") {
        return date.value.format("YYYY.MM.DD");
      }
    });
    function down() {
      if (type.value === "week") {
        date.value = date.value.clone().subtract(1, "weeks");
      } else if (type.value === "month") {
        date.value = date.value.clone().subtract(1, "months");
      } else if (type.value === "year") {
        date.value = date.value.clone().subtract(1, "years");
      }
      onChange();
    }
    function up() {
      if (type.value === "week") {
        date.value = date.value.clone().add(1, "weeks");
      } else if (type.value === "month") {
        date.value = date.value.clone().add(1, "months");
      } else if (type.value === "year") {
        date.value = date.value.clone().add(1, "years");
      }
      onChange();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$i;
      const _component_Select = _sfc_main$7$1;
      const _component_SelectTrigger = _sfc_main$5$1;
      const _component_SelectValue = _sfc_main$6$1;
      const _component_SelectContent = _sfc_main$4$1;
      const _component_SelectGroup = _sfc_main$3$1;
      const _component_SelectItem = _sfc_main$2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-2 justify-between" }, _attrs))}><div class="flex gap-2 items-center">`);
      _push(ssrRenderComponent(_component_Button, {
        variant: "outline",
        size: "sm",
        onClick: down
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`&lt;`);
          } else {
            return [
              createTextVNode("<")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        variant: "outline",
        size: "sm",
        onClick: up
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`&gt;`);
          } else {
            return [
              createTextVNode(">")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="font-semibold whitespace-nowrap">${ssrInterpolate(unref(formattedDate))}</div></div>`);
      _push(ssrRenderComponent(_component_Select, {
        modelValue: unref(type),
        "onUpdate:modelValue": [($event) => isRef(type) ? type.value = $event : null, onChange]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SelectTrigger, { class: "w-[100px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SelectValue, { placeholder: "Select" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SelectValue, { placeholder: "Select" })
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
                        _push4(ssrRenderComponent(_component_SelectItem, { value: "week" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\uC8FC`);
                            } else {
                              return [
                                createTextVNode("\uC8FC")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectItem, { value: "month" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\uC6D4`);
                            } else {
                              return [
                                createTextVNode("\uC6D4")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectItem, { value: "year" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\uB144`);
                            } else {
                              return [
                                createTextVNode("\uB144")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_SelectItem, { value: "week" }, {
                            default: withCtx(() => [
                              createTextVNode("\uC8FC")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, { value: "month" }, {
                            default: withCtx(() => [
                              createTextVNode("\uC6D4")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, { value: "year" }, {
                            default: withCtx(() => [
                              createTextVNode("\uB144")
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
                    createVNode(_component_SelectGroup, null, {
                      default: withCtx(() => [
                        createVNode(_component_SelectItem, { value: "week" }, {
                          default: withCtx(() => [
                            createTextVNode("\uC8FC")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectItem, { value: "month" }, {
                          default: withCtx(() => [
                            createTextVNode("\uC6D4")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectItem, { value: "year" }, {
                          default: withCtx(() => [
                            createTextVNode("\uB144")
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
              createVNode(_component_SelectTrigger, { class: "w-[100px]" }, {
                default: withCtx(() => [
                  createVNode(_component_SelectValue, { placeholder: "Select" })
                ]),
                _: 1
              }),
              createVNode(_component_SelectContent, null, {
                default: withCtx(() => [
                  createVNode(_component_SelectGroup, null, {
                    default: withCtx(() => [
                      createVNode(_component_SelectItem, { value: "week" }, {
                        default: withCtx(() => [
                          createTextVNode("\uC8FC")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_SelectItem, { value: "month" }, {
                        default: withCtx(() => [
                          createTextVNode("\uC6D4")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_SelectItem, { value: "year" }, {
                        default: withCtx(() => [
                          createTextVNode("\uB144")
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/DateSelection.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "ScrollBar",
  __ssrInlineRender: true,
  props: {
    orientation: { default: "vertical" },
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(ScrollAreaScrollbar), mergeProps(props, {
        class: unref(cn)(
          "flex touch-none select-none transition-colors",
          _ctx.orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
          _ctx.orientation === "horizontal" && "h-2.5 border-t border-t-transparent p-[1px]",
          (_a = _ctx.$attrs.class) != null ? _a : ""
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ScrollAreaThumb), { class: "relative flex-1 rounded-full bg-border" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ScrollAreaThumb), { class: "relative flex-1 rounded-full bg-border" })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/scroll-area/ScrollBar.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ScrollArea",
  __ssrInlineRender: true,
  props: {
    type: {},
    dir: {},
    scrollHideDelay: {},
    asChild: { type: Boolean },
    as: {},
    class: { default: "" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ScrollAreaRoot), mergeProps({
        type: _ctx.type,
        class: unref(cn)("relative overflow-hidden", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-radix-scroll-area-viewport class="h-full w-full rounded-[inherit] overflow-y-scroll"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$9, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ScrollAreaCorner), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", {
                "data-radix-scroll-area-viewport": "",
                class: "h-full w-full rounded-[inherit] overflow-y-scroll"
              }, [
                renderSlot(_ctx.$slots, "default")
              ]),
              createVNode(_sfc_main$9),
              createVNode(unref(ScrollAreaCorner))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/scroll-area/ScrollArea.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Oricon",
  __ssrInlineRender: true,
  props: {
    book: {}
  },
  setup(__props) {
    const props = __props;
    const selectedBook = useSelectedBook();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Badge = _sfc_main$j;
      const _component_Button = _sfc_main$i;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex w-full flex-col gap-1 border rounded-lg p-2 hover:bg-neutral-50 cursor-pointer", { "bg-neutral-100": unref(selectedBook).id == props.book.id }]
      }, _attrs))}><div class="flex gap-2 justify-between items-center"><div class="grow-[0] text-left font-semibold text-sm">${ssrInterpolate(_ctx.book.kr)} ${ssrInterpolate(_ctx.book.booknum)} <div class="text-xs text-left font-normal">${ssrInterpolate(_ctx.book.jp)}</div></div><div class="shrink-0 text-xs">${ssrInterpolate(_ctx.book.date)}</div></div><div class="text-xs text-left overflow-hidden overflow-ellipsis" style="${ssrRenderStyle({ "display": "-webkit-box", "-webkit-line-clamp": "3", "-webkit-box-orient": "vertical" })}">${ssrInterpolate(_ctx.book.description)}</div><div class="text-xs text-neutral-400 text-left overflow-hidden overflow-ellipsis" style="${ssrRenderStyle({ "display": "-webkit-box", "-webkit-line-clamp": "3", "-webkit-box-orient": "vertical" })}">${ssrInterpolate(_ctx.book.summary)}</div><div class="flex justify-between items-end"><div class="flex flex-col justify-left text-xs text-left gap-1"><div class="w-fit flex gap-2 items-center"> \uC800\uC790 `);
      _push(ssrRenderComponent(_component_Badge, { variant: "outline" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.book.author)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.book.author), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-fit flex gap-2"> \uCD9C\uD310\uC0AC `);
      _push(ssrRenderComponent(_component_Badge, { variant: "outline" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.book.publisher)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.book.publisher), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-fit flex gap-2"> \uC8FC\uAC04 \uD310\uB9E4\uB7C9 `);
      _push(ssrRenderComponent(_component_Badge, { variant: "outline" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.book.sales)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.book.sales), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_Button, {
        variant: "ghost",
        onClick: ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().openBook(_ctx.book)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "ellipsis"] }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_font_awesome_icon, { icon: ["fas", "ellipsis"] })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/Oricon.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "NavBooks",
  __ssrInlineRender: true,
  setup(__props) {
    const books = useBooks();
    const bookInfoList = useBookInfoList();
    const type = ref("week");
    const date = ref(/* @__PURE__ */ new Date());
    ref(false);
    const cBooks = computed(() => {
      if (type.value === "week") {
        const week = books.value.filter((book) => {
          return moment(book.date).format("YYYY.WW") === moment(date.value).format("YYYY.WW");
        });
        return addBookInfo(week);
      } else if (type.value === "month") {
        const month = books.value.filter((book) => {
          return moment(book.date).format("YYYY.MM") === moment(date.value).format("YYYY.MM");
        });
        return addBookInfo(month);
      } else if (type.value === "year") {
        const year = books.value.filter((book) => {
          return moment(book.date).format("YYYY") === moment(date.value).format("YYYY");
        });
        return addBookInfo(year);
      }
    });
    const bookInfoMap = computed(() => {
      return Object.fromEntries(
        bookInfoList.value.map((bookInfo) => [bookInfo.kr, bookInfo])
      );
    });
    function addBookInfo(books2) {
      return books2 == null ? void 0 : books2.map((book) => {
        const bookInfo = bookInfoMap.value[book.kr];
        if (bookInfo) {
          return {
            ...book,
            ...bookInfo
          };
        } else {
          return {
            ...book
          };
        }
      });
    }
    function onChange(arg) {
      type.value = arg.type;
      date.value = arg.date;
    }
    function bookUpdated() {
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogBook = _sfc_main$k;
      const _component_LayoutsDateSelection = _sfc_main$a;
      const _component_Separator = _sfc_main$f;
      const _component_ScrollArea = _sfc_main$8;
      const _component_LayoutsOricon = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grow-[1] overflow-hidden flex flex-col" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_DialogBook, { "onUpdate:open": bookUpdated }, null, _parent));
      _push(ssrRenderComponent(_component_LayoutsDateSelection, {
        class: "p-2 shrink-0",
        onChange
      }, null, _parent));
      _push(ssrRenderComponent(_component_Separator, null, null, _parent));
      _push(ssrRenderComponent(_component_ScrollArea, { class: "flex grow-[0]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex-1 flex flex-col gap-2 p-2"${_scopeId}><!--[-->`);
            ssrRenderList(unref(cBooks), (book, index) => {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_LayoutsOricon, { book }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex-1 flex flex-col gap-2 p-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(cBooks), (book, index) => {
                  return openBlock(), createBlock("div", { key: index }, [
                    createVNode(_component_LayoutsOricon, { book }, null, 8, ["book"])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/NavBooks.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "bookList",
  __ssrInlineRender: true,
  setup(__props) {
    const coverList = useCoverList();
    const selectedBook = useSelectedBook();
    const cCoverList = computed(() => {
      return coverList.value.filter((cover) => {
        console.log(cover.kr);
        return cover.kr == selectedBook.value.kr;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ScrollArea = _sfc_main$8;
      _push(ssrRenderComponent(_component_ScrollArea, mergeProps({ class: "flex h-full" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex-1 flex flex-col gap-2 p-2"${_scopeId}><!--[-->`);
            ssrRenderList(unref(cCoverList), (cover, index) => {
              _push2(`<div${_scopeId}><div class="flex border rounded-lg p-2 bg-neutral-100 gap-2"${_scopeId}><div class="h-32 w-24 rounded-md overflow-hidden relative"${_scopeId}><img${ssrRenderAttr("src", cover.cover_image)} class="min-w-full min-h-full object-cover"${_scopeId}></div><div class="flex flex-col text-xs"${_scopeId}><div class="text-sm"${_scopeId}>${ssrInterpolate(cover.kr)} ${ssrInterpolate(cover.booknum)}</div><div class="flex gap-1 items-center"${_scopeId}><div class="text-sm font-bold"${_scopeId}>5,400\uC6D0</div><span class="text-neutral-400"${_scopeId}>\uBC30\uC1A1 \uBB34\uB8CC</span></div><div class="text-neutral-400 ring-1 ring-neutral-400 w-fit rounded-md px-1 my-1"${_scopeId}> \uC624\uB298\uCD9C\uBC1C </div><div class="flex gap-2 items-center"${_scopeId}><div class="text-neutral-400"${_scopeId}>inpiniti</div><span class="text-white font-semibold px-2 bg-green-400 rounded-full"${_scopeId}>naver pay</span></div><div class="flex gap-1 overflow-ellipsis"${_scopeId}><div class="text-neutral-400 font-thin"${_scopeId}>\uBC30\uC1A1</div> \uC624\uB298 <div class="text-neutral-400"${_scopeId}>15:00</div> \uAE4C\uC9C0 \uC8FC\uBB38 \uC2DC </div></div></div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex-1 flex flex-col gap-2 p-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(cCoverList), (cover, index) => {
                  return openBlock(), createBlock("div", { key: index }, [
                    createVNode("div", { class: "flex border rounded-lg p-2 bg-neutral-100 gap-2" }, [
                      createVNode("div", { class: "h-32 w-24 rounded-md overflow-hidden relative" }, [
                        createVNode("img", {
                          src: cover.cover_image,
                          class: "min-w-full min-h-full object-cover"
                        }, null, 8, ["src"])
                      ]),
                      createVNode("div", { class: "flex flex-col text-xs" }, [
                        createVNode("div", { class: "text-sm" }, toDisplayString(cover.kr) + " " + toDisplayString(cover.booknum), 1),
                        createVNode("div", { class: "flex gap-1 items-center" }, [
                          createVNode("div", { class: "text-sm font-bold" }, "5,400\uC6D0"),
                          createVNode("span", { class: "text-neutral-400" }, "\uBC30\uC1A1 \uBB34\uB8CC")
                        ]),
                        createVNode("div", { class: "text-neutral-400 ring-1 ring-neutral-400 w-fit rounded-md px-1 my-1" }, " \uC624\uB298\uCD9C\uBC1C "),
                        createVNode("div", { class: "flex gap-2 items-center" }, [
                          createVNode("div", { class: "text-neutral-400" }, "inpiniti"),
                          createVNode("span", { class: "text-white font-semibold px-2 bg-green-400 rounded-full" }, "naver pay")
                        ]),
                        createVNode("div", { class: "flex gap-1 overflow-ellipsis" }, [
                          createVNode("div", { class: "text-neutral-400 font-thin" }, "\uBC30\uC1A1"),
                          createTextVNode(" \uC624\uB298 "),
                          createVNode("div", { class: "text-neutral-400" }, "15:00"),
                          createTextVNode(" \uAE4C\uC9C0 \uC8FC\uBB38 \uC2DC ")
                        ])
                      ])
                    ])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/bookList.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "musicList",
  __ssrInlineRender: true,
  setup(__props) {
    const musicList = useMusic();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ScrollArea = _sfc_main$8;
      _push(ssrRenderComponent(_component_ScrollArea, mergeProps({ class: "flex h-full" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex-1 flex flex-col gap-2 p-2"${_scopeId}><!--[-->`);
            ssrRenderList(unref(musicList), (music) => {
              _push2(`<button${_scopeId}><div class="flex border rounded-lg p-2 hover:bg-neutral-100 gap-2"${_scopeId}><div class="flex w-full flex-col gap-1"${_scopeId}><div class="flex gap-2 justify-between items-center"${_scopeId}><div class="grow-[0] text-left font-semibold text-sm"${_scopeId}>${ssrInterpolate(music.kr)}</div><div class="grow-[0] text-left font-semibold text-sm"${_scopeId}>${ssrInterpolate(music.title)} ${ssrInterpolate(music.season)}\uAE30 ${ssrInterpolate(music.cool)}\uCFE8 </div></div></div></div></button>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex-1 flex flex-col gap-2 p-2" }, [
                createVNode(TransitionGroup, {
                  name: "list",
                  appear: ""
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(musicList), (music) => {
                      return openBlock(), createBlock("button", {
                        key: music.id
                      }, [
                        createVNode("div", { class: "flex border rounded-lg p-2 hover:bg-neutral-100 gap-2" }, [
                          createVNode("div", { class: "flex w-full flex-col gap-1" }, [
                            createVNode("div", { class: "flex gap-2 justify-between items-center" }, [
                              createVNode("div", { class: "grow-[0] text-left font-semibold text-sm" }, toDisplayString(music.kr), 1),
                              createVNode("div", { class: "grow-[0] text-left font-semibold text-sm" }, toDisplayString(music.title) + " " + toDisplayString(music.season) + "\uAE30 " + toDisplayString(music.cool) + "\uCFE8 ", 1)
                            ])
                          ])
                        ])
                      ]);
                    }), 128))
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/musicList.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "board",
  __ssrInlineRender: true,
  props: {
    board: {}
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Badge = _sfc_main$j;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex rounded-lg overflow-hidden hover:bg-neutral-100 gap-2 cursor-pointer border" }, _attrs))}><div class="w-full p-4"><div class="flex gap-2"><div class="flex flex-col gap-2 grow-[0] w-full"><div class="flex gap-2 items-center text-sm">`);
      _push(ssrRenderComponent(_component_Badge, { class: "overflow-hidden whitespace-nowrap overflow-ellipsis max-w-24" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.board.kr)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.board.kr), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="overflow-hidden whitespace-nowrap overflow-ellipsis">${ssrInterpolate(_ctx.board.writer)}</div><div>\xB7</div><div>${ssrInterpolate(("timeAgo" in _ctx ? _ctx.timeAgo : unref(timeAgo))(_ctx.board.date))}</div></div><div style="${ssrRenderStyle({ "pointer-events": "none" })}"><div class="font-semibold line-clamp-2">${ssrInterpolate(_ctx.board.title)}</div></div><div class="flex justify-between"><div class="flex gap-1">`);
      _push(ssrRenderComponent(_component_Badge, { variant: "secondary" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.board.type)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.board.type), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Badge, { variant: "outline" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.board.subject)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.board.subject), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex gap-2 text-xs items-center justify-end shrink-0"><div class="flex gap-1 items-center" style="${ssrRenderStyle({ "pointer-events": "auto" })}">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["far", "comment"] }, null, _parent));
      _push(`<div class="text-sm">${ssrInterpolate(_ctx.board.number)}</div></div><div class="flex gap-1 items-center">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["far", "eye"] }, null, _parent));
      _push(`<div class="text-sm">${ssrInterpolate(_ctx.board.count)}</div></div><div class="flex gap-1 items-center">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "star"] }, null, _parent));
      _push(`<div class="text-sm">${ssrInterpolate(_ctx.board.recommend)}</div></div></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mail/board.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "boardList",
  __ssrInlineRender: true,
  setup(__props) {
    ref(1);
    ref(1);
    ref(100);
    ref(0);
    ref();
    ref();
    ref();
    ref("date");
    ref([]);
    const boards = ref([]);
    const board = useBoardDetail();
    async function onClickBoardDetail(newBoard) {
      board.value = newBoard;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ScrollArea = _sfc_main$8;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_MailBoard = _sfc_main$3;
      _push(ssrRenderComponent(_component_ScrollArea, mergeProps({ class: "flex h-full" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex-1 flex flex-col gap-2 p-2"${_scopeId}><!--[--><div class="flex border rounded-lg px-4 py-2 hover:bg-neutral-100 cursor-pointer items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "pen"] }, null, _parent2, _scopeId));
            _push2(` \uAE00 \uC4F0\uAE30 </div>`);
            ssrRenderList(unref(boards), (board2, index) => {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_MailBoard, {
                board: board2,
                onClick: onClickBoardDetail
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex-1 flex flex-col gap-2 p-2" }, [
                createVNode(TransitionGroup, {
                  name: "list",
                  appear: ""
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex border rounded-lg px-4 py-2 hover:bg-neutral-100 cursor-pointer items-center gap-2" }, [
                      createVNode(_component_font_awesome_icon, { icon: ["fas", "pen"] }),
                      createTextVNode(" \uAE00 \uC4F0\uAE30 ")
                    ]),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(boards), (board2, index) => {
                      return openBlock(), createBlock("div", { key: index }, [
                        createVNode(_component_MailBoard, {
                          board: board2,
                          onClick: onClickBoardDetail
                        }, null, 8, ["board"])
                      ]);
                    }), 128))
                  ]),
                  _: 1
                })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/boardList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "figureList",
  __ssrInlineRender: true,
  setup(__props) {
    useCoverList();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-full items-center justify-center bg-neutral-100" }, _attrs))}><div class="flex flex-col gap-2 p-2">\uC544\uC9C1 \uAC1C\uBC1C\uC911\uC5D0 \uC788\uC2B5\uB2C8\uB2E4</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/figureList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const navCollapsedSize = 4;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "mail",
  __ssrInlineRender: true,
  setup(__props) {
    const defaultLayout = [300, 200, 800];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TooltipProvider = _sfc_main$d;
      const _component_ResizablePanelGroup = _sfc_main$c;
      const _component_ResizablePanel = SplitterPanel;
      const _component_Select = _sfc_main$7$1;
      const _component_SelectTrigger = _sfc_main$5$1;
      const _component_SelectValue = _sfc_main$6$1;
      const _component_SelectContent = _sfc_main$4$1;
      const _component_SelectGroup = _sfc_main$3$1;
      const _component_SelectLabel = _sfc_main$e;
      const _component_SelectItem = _sfc_main$2$1;
      const _component_Separator = _sfc_main$f;
      const _component_LayoutsNavBooks = _sfc_main$6;
      const _component_ResizableHandle = _sfc_main$b;
      const _component_Tabs = _sfc_main$2$2;
      const _component_TabsList = _sfc_main$g;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_TabsTrigger = _sfc_main$1$1;
      const _component_TabsContent = _sfc_main$h;
      const _component_BookList = _sfc_main$5;
      const _component_MusicList = _sfc_main$4;
      const _component_BoardList = _sfc_main$2;
      const _component_FigureList = _sfc_main$1;
      _push(ssrRenderComponent(_component_TooltipProvider, mergeProps({ "delay-duration": 0 }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ResizablePanelGroup, {
              id: "resize-panel-group-1",
              direction: "horizontal",
              class: "h-full items-stretch"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ResizablePanel, {
                    id: "resize-panel-1",
                    "default-size": defaultLayout[0],
                    "collapsed-size": navCollapsedSize,
                    collapsible: "",
                    class: "h-screen flex flex-col min-w-[250px] max-w-[350px]"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="pl-4 p-2 shrink-0"${_scopeId3}><div class="flex items-center justify-between"${_scopeId3}><div class="font-bold text-xl"${_scopeId3}>Inpiniti</div>`);
                        _push4(ssrRenderComponent(_component_Select, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectTrigger, { class: "w-fit" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_SelectValue, { placeholder: "select" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_SelectValue, { placeholder: "select" })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_SelectContent, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_SelectGroup, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_SelectLabel, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Fruits`);
                                              } else {
                                                return [
                                                  createTextVNode("Fruits")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_SelectItem, { value: "apple" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Apple `);
                                              } else {
                                                return [
                                                  createTextVNode(" Apple ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_SelectLabel, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Fruits")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_SelectItem, { value: "apple" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Apple ")
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
                                      createVNode(_component_SelectGroup, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_SelectLabel, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Fruits")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_SelectItem, { value: "apple" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Apple ")
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
                            } else {
                              return [
                                createVNode(_component_SelectTrigger, { class: "w-fit" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_SelectValue, { placeholder: "select" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_SelectContent, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_SelectGroup, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_SelectLabel, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Fruits")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_SelectItem, { value: "apple" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Apple ")
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
                        }, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                        _push4(ssrRenderComponent(_component_Separator, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_LayoutsNavBooks, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "pl-4 p-2 shrink-0" }, [
                            createVNode("div", { class: "flex items-center justify-between" }, [
                              createVNode("div", { class: "font-bold text-xl" }, "Inpiniti"),
                              createVNode(_component_Select, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SelectTrigger, { class: "w-fit" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_SelectValue, { placeholder: "select" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_SelectContent, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_SelectGroup, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_SelectLabel, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Fruits")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_SelectItem, { value: "apple" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Apple ")
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
                            ])
                          ]),
                          createVNode(_component_Separator),
                          createVNode(_component_LayoutsNavBooks)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ResizableHandle, {
                    id: "resize-handle-1",
                    "with-handle": ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ResizablePanel, {
                    id: "resize-panel-2",
                    class: "min-w-[400px] max-w-[400px]",
                    "default-size": defaultLayout[1]
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Tabs, {
                          class: "h-screen overflow-hidden flex flex-col",
                          "default-value": "book"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex items-center px-4 py-2 shrink-0"${_scopeId4}><h1 class="text-xl font-bold"${_scopeId4}>Inbox</h1>`);
                              _push5(ssrRenderComponent(_component_TabsList, { class: "ml-auto" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_nuxt_link, { to: "/book" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_TabsTrigger, {
                                            value: "book",
                                            class: "text-zinc-600 dark:text-zinc-200"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` \uB3C4\uC11C `);
                                              } else {
                                                return [
                                                  createTextVNode(" \uB3C4\uC11C ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_TabsTrigger, {
                                              value: "book",
                                              class: "text-zinc-600 dark:text-zinc-200"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" \uB3C4\uC11C ")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_nuxt_link, { to: "/music" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_TabsTrigger, {
                                            value: "music",
                                            class: "text-zinc-600 dark:text-zinc-200"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` \uC74C\uC545 `);
                                              } else {
                                                return [
                                                  createTextVNode(" \uC74C\uC545 ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_TabsTrigger, {
                                              value: "music",
                                              class: "text-zinc-600 dark:text-zinc-200"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" \uC74C\uC545 ")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_nuxt_link, { to: "/board/read" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_TabsTrigger, {
                                            value: "board",
                                            class: "text-zinc-600 dark:text-zinc-200"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` \uAC8C\uC2DC\uD310 `);
                                              } else {
                                                return [
                                                  createTextVNode(" \uAC8C\uC2DC\uD310 ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_TabsTrigger, {
                                              value: "board",
                                              class: "text-zinc-600 dark:text-zinc-200"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" \uAC8C\uC2DC\uD310 ")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_nuxt_link, { to: "/figure" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_TabsTrigger, {
                                            value: "figure",
                                            class: "text-zinc-600 dark:text-zinc-200"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` \uD53C\uADDC\uC5B4 `);
                                              } else {
                                                return [
                                                  createTextVNode(" \uD53C\uADDC\uC5B4 ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_TabsTrigger, {
                                              value: "figure",
                                              class: "text-zinc-600 dark:text-zinc-200"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" \uD53C\uADDC\uC5B4 ")
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
                                      createVNode(_component_nuxt_link, { to: "/book" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_TabsTrigger, {
                                            value: "book",
                                            class: "text-zinc-600 dark:text-zinc-200"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" \uB3C4\uC11C ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_nuxt_link, { to: "/music" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_TabsTrigger, {
                                            value: "music",
                                            class: "text-zinc-600 dark:text-zinc-200"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" \uC74C\uC545 ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_nuxt_link, { to: "/board/read" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_TabsTrigger, {
                                            value: "board",
                                            class: "text-zinc-600 dark:text-zinc-200"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" \uAC8C\uC2DC\uD310 ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_nuxt_link, { to: "/figure" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_TabsTrigger, {
                                            value: "figure",
                                            class: "text-zinc-600 dark:text-zinc-200"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" \uD53C\uADDC\uC5B4 ")
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
                              _push5(`</div>`);
                              _push5(ssrRenderComponent(_component_Separator, null, null, _parent5, _scopeId4));
                              _push5(`<div class="grow-[0] h-full overflow-hidden flex flex-col"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_TabsContent, {
                                value: "book",
                                class: "m-0 overflow-hidden"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_BookList, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_BookList)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_TabsContent, {
                                value: "music",
                                class: "m-0 overflow-hidden"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_MusicList, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_MusicList)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_TabsContent, {
                                value: "board",
                                class: "m-0 overflow-hidden"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_BoardList, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_BoardList)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_TabsContent, {
                                value: "figure",
                                class: "m-0 overflow-hidden h-full"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_FigureList, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_FigureList)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex items-center px-4 py-2 shrink-0" }, [
                                  createVNode("h1", { class: "text-xl font-bold" }, "Inbox"),
                                  createVNode(_component_TabsList, { class: "ml-auto" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_nuxt_link, { to: "/book" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_TabsTrigger, {
                                            value: "book",
                                            class: "text-zinc-600 dark:text-zinc-200"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" \uB3C4\uC11C ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_nuxt_link, { to: "/music" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_TabsTrigger, {
                                            value: "music",
                                            class: "text-zinc-600 dark:text-zinc-200"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" \uC74C\uC545 ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_nuxt_link, { to: "/board/read" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_TabsTrigger, {
                                            value: "board",
                                            class: "text-zinc-600 dark:text-zinc-200"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" \uAC8C\uC2DC\uD310 ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_nuxt_link, { to: "/figure" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_TabsTrigger, {
                                            value: "figure",
                                            class: "text-zinc-600 dark:text-zinc-200"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" \uD53C\uADDC\uC5B4 ")
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
                                createVNode(_component_Separator),
                                createVNode("div", { class: "grow-[0] h-full overflow-hidden flex flex-col" }, [
                                  createVNode(_component_TabsContent, {
                                    value: "book",
                                    class: "m-0 overflow-hidden"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_BookList)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TabsContent, {
                                    value: "music",
                                    class: "m-0 overflow-hidden"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_MusicList)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TabsContent, {
                                    value: "board",
                                    class: "m-0 overflow-hidden"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_BoardList)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TabsContent, {
                                    value: "figure",
                                    class: "m-0 overflow-hidden h-full"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_FigureList)
                                    ]),
                                    _: 1
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Tabs, {
                            class: "h-screen overflow-hidden flex flex-col",
                            "default-value": "book"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center px-4 py-2 shrink-0" }, [
                                createVNode("h1", { class: "text-xl font-bold" }, "Inbox"),
                                createVNode(_component_TabsList, { class: "ml-auto" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_nuxt_link, { to: "/book" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_TabsTrigger, {
                                          value: "book",
                                          class: "text-zinc-600 dark:text-zinc-200"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \uB3C4\uC11C ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_nuxt_link, { to: "/music" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_TabsTrigger, {
                                          value: "music",
                                          class: "text-zinc-600 dark:text-zinc-200"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \uC74C\uC545 ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_nuxt_link, { to: "/board/read" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_TabsTrigger, {
                                          value: "board",
                                          class: "text-zinc-600 dark:text-zinc-200"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \uAC8C\uC2DC\uD310 ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_nuxt_link, { to: "/figure" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_TabsTrigger, {
                                          value: "figure",
                                          class: "text-zinc-600 dark:text-zinc-200"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \uD53C\uADDC\uC5B4 ")
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
                              createVNode(_component_Separator),
                              createVNode("div", { class: "grow-[0] h-full overflow-hidden flex flex-col" }, [
                                createVNode(_component_TabsContent, {
                                  value: "book",
                                  class: "m-0 overflow-hidden"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_BookList)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TabsContent, {
                                  value: "music",
                                  class: "m-0 overflow-hidden"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_MusicList)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TabsContent, {
                                  value: "board",
                                  class: "m-0 overflow-hidden"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_BoardList)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TabsContent, {
                                  value: "figure",
                                  class: "m-0 overflow-hidden h-full"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_FigureList)
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ResizableHandle, {
                    id: "resiz-handle-2",
                    "with-handle": ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ResizablePanel, {
                    id: "resize-panel-3",
                    "default-size": defaultLayout[2]
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="h-screen overflow-hidden flex flex-col"${_scopeId3}><div class="pl-4 p-2 shrink-0"${_scopeId3}><div class="flex items-center justify-between"${_scopeId3}><div class="font-bold text-xl"${_scopeId3}>Inpiniti</div>`);
                        _push4(ssrRenderComponent(_component_Select, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectTrigger, { class: "w-fit" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_SelectValue, { placeholder: "select" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_SelectValue, { placeholder: "select" })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_SelectContent, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_SelectGroup, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_SelectLabel, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Fruits`);
                                              } else {
                                                return [
                                                  createTextVNode("Fruits")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_SelectItem, { value: "apple" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Apple `);
                                              } else {
                                                return [
                                                  createTextVNode(" Apple ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_SelectLabel, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Fruits")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_SelectItem, { value: "apple" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Apple ")
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
                                      createVNode(_component_SelectGroup, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_SelectLabel, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Fruits")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_SelectItem, { value: "apple" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Apple ")
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
                            } else {
                              return [
                                createVNode(_component_SelectTrigger, { class: "w-fit" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_SelectValue, { placeholder: "select" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_SelectContent, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_SelectGroup, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_SelectLabel, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Fruits")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_SelectItem, { value: "apple" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Apple ")
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
                        }, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                        _push4(ssrRenderComponent(_component_Separator, null, null, _parent4, _scopeId3));
                        _push4(`<div class="grow-[0] overflow-hidden"${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "h-screen overflow-hidden flex flex-col" }, [
                            createVNode("div", { class: "pl-4 p-2 shrink-0" }, [
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("div", { class: "font-bold text-xl" }, "Inpiniti"),
                                createVNode(_component_Select, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_SelectTrigger, { class: "w-fit" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_SelectValue, { placeholder: "select" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_SelectContent, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_SelectGroup, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_SelectLabel, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Fruits")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_SelectItem, { value: "apple" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Apple ")
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
                              ])
                            ]),
                            createVNode(_component_Separator),
                            createVNode("div", { class: "grow-[0] overflow-hidden" }, [
                              renderSlot(_ctx.$slots, "default")
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ResizablePanel, {
                      id: "resize-panel-1",
                      "default-size": defaultLayout[0],
                      "collapsed-size": navCollapsedSize,
                      collapsible: "",
                      class: "h-screen flex flex-col min-w-[250px] max-w-[350px]"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "pl-4 p-2 shrink-0" }, [
                          createVNode("div", { class: "flex items-center justify-between" }, [
                            createVNode("div", { class: "font-bold text-xl" }, "Inpiniti"),
                            createVNode(_component_Select, null, {
                              default: withCtx(() => [
                                createVNode(_component_SelectTrigger, { class: "w-fit" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_SelectValue, { placeholder: "select" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_SelectContent, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_SelectGroup, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_SelectLabel, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Fruits")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_SelectItem, { value: "apple" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Apple ")
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
                          ])
                        ]),
                        createVNode(_component_Separator),
                        createVNode(_component_LayoutsNavBooks)
                      ]),
                      _: 1
                    }, 8, ["default-size"]),
                    createVNode(_component_ResizableHandle, {
                      id: "resize-handle-1",
                      "with-handle": ""
                    }),
                    createVNode(_component_ResizablePanel, {
                      id: "resize-panel-2",
                      class: "min-w-[400px] max-w-[400px]",
                      "default-size": defaultLayout[1]
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Tabs, {
                          class: "h-screen overflow-hidden flex flex-col",
                          "default-value": "book"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center px-4 py-2 shrink-0" }, [
                              createVNode("h1", { class: "text-xl font-bold" }, "Inbox"),
                              createVNode(_component_TabsList, { class: "ml-auto" }, {
                                default: withCtx(() => [
                                  createVNode(_component_nuxt_link, { to: "/book" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_TabsTrigger, {
                                        value: "book",
                                        class: "text-zinc-600 dark:text-zinc-200"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \uB3C4\uC11C ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_nuxt_link, { to: "/music" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_TabsTrigger, {
                                        value: "music",
                                        class: "text-zinc-600 dark:text-zinc-200"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \uC74C\uC545 ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_nuxt_link, { to: "/board/read" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_TabsTrigger, {
                                        value: "board",
                                        class: "text-zinc-600 dark:text-zinc-200"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \uAC8C\uC2DC\uD310 ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_nuxt_link, { to: "/figure" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_TabsTrigger, {
                                        value: "figure",
                                        class: "text-zinc-600 dark:text-zinc-200"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \uD53C\uADDC\uC5B4 ")
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
                            createVNode(_component_Separator),
                            createVNode("div", { class: "grow-[0] h-full overflow-hidden flex flex-col" }, [
                              createVNode(_component_TabsContent, {
                                value: "book",
                                class: "m-0 overflow-hidden"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_BookList)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TabsContent, {
                                value: "music",
                                class: "m-0 overflow-hidden"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_MusicList)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TabsContent, {
                                value: "board",
                                class: "m-0 overflow-hidden"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_BoardList)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TabsContent, {
                                value: "figure",
                                class: "m-0 overflow-hidden h-full"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_FigureList)
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["default-size"]),
                    createVNode(_component_ResizableHandle, {
                      id: "resiz-handle-2",
                      "with-handle": ""
                    }),
                    createVNode(_component_ResizablePanel, {
                      id: "resize-panel-3",
                      "default-size": defaultLayout[2]
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "h-screen overflow-hidden flex flex-col" }, [
                          createVNode("div", { class: "pl-4 p-2 shrink-0" }, [
                            createVNode("div", { class: "flex items-center justify-between" }, [
                              createVNode("div", { class: "font-bold text-xl" }, "Inpiniti"),
                              createVNode(_component_Select, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SelectTrigger, { class: "w-fit" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_SelectValue, { placeholder: "select" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_SelectContent, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_SelectGroup, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_SelectLabel, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Fruits")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_SelectItem, { value: "apple" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Apple ")
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
                            ])
                          ]),
                          createVNode(_component_Separator),
                          createVNode("div", { class: "grow-[0] overflow-hidden" }, [
                            renderSlot(_ctx.$slots, "default")
                          ])
                        ])
                      ]),
                      _: 3
                    }, 8, ["default-size"])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ResizablePanelGroup, {
                id: "resize-panel-group-1",
                direction: "horizontal",
                class: "h-full items-stretch"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ResizablePanel, {
                    id: "resize-panel-1",
                    "default-size": defaultLayout[0],
                    "collapsed-size": navCollapsedSize,
                    collapsible: "",
                    class: "h-screen flex flex-col min-w-[250px] max-w-[350px]"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "pl-4 p-2 shrink-0" }, [
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("div", { class: "font-bold text-xl" }, "Inpiniti"),
                          createVNode(_component_Select, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectTrigger, { class: "w-fit" }, {
                                default: withCtx(() => [
                                  createVNode(_component_SelectValue, { placeholder: "select" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SelectGroup, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_SelectLabel, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Fruits")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_SelectItem, { value: "apple" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Apple ")
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
                        ])
                      ]),
                      createVNode(_component_Separator),
                      createVNode(_component_LayoutsNavBooks)
                    ]),
                    _: 1
                  }, 8, ["default-size"]),
                  createVNode(_component_ResizableHandle, {
                    id: "resize-handle-1",
                    "with-handle": ""
                  }),
                  createVNode(_component_ResizablePanel, {
                    id: "resize-panel-2",
                    class: "min-w-[400px] max-w-[400px]",
                    "default-size": defaultLayout[1]
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Tabs, {
                        class: "h-screen overflow-hidden flex flex-col",
                        "default-value": "book"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center px-4 py-2 shrink-0" }, [
                            createVNode("h1", { class: "text-xl font-bold" }, "Inbox"),
                            createVNode(_component_TabsList, { class: "ml-auto" }, {
                              default: withCtx(() => [
                                createVNode(_component_nuxt_link, { to: "/book" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_TabsTrigger, {
                                      value: "book",
                                      class: "text-zinc-600 dark:text-zinc-200"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \uB3C4\uC11C ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_nuxt_link, { to: "/music" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_TabsTrigger, {
                                      value: "music",
                                      class: "text-zinc-600 dark:text-zinc-200"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \uC74C\uC545 ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_nuxt_link, { to: "/board/read" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_TabsTrigger, {
                                      value: "board",
                                      class: "text-zinc-600 dark:text-zinc-200"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \uAC8C\uC2DC\uD310 ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_nuxt_link, { to: "/figure" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_TabsTrigger, {
                                      value: "figure",
                                      class: "text-zinc-600 dark:text-zinc-200"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \uD53C\uADDC\uC5B4 ")
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
                          createVNode(_component_Separator),
                          createVNode("div", { class: "grow-[0] h-full overflow-hidden flex flex-col" }, [
                            createVNode(_component_TabsContent, {
                              value: "book",
                              class: "m-0 overflow-hidden"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BookList)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TabsContent, {
                              value: "music",
                              class: "m-0 overflow-hidden"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_MusicList)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TabsContent, {
                              value: "board",
                              class: "m-0 overflow-hidden"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BoardList)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TabsContent, {
                              value: "figure",
                              class: "m-0 overflow-hidden h-full"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_FigureList)
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["default-size"]),
                  createVNode(_component_ResizableHandle, {
                    id: "resiz-handle-2",
                    "with-handle": ""
                  }),
                  createVNode(_component_ResizablePanel, {
                    id: "resize-panel-3",
                    "default-size": defaultLayout[2]
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "h-screen overflow-hidden flex flex-col" }, [
                        createVNode("div", { class: "pl-4 p-2 shrink-0" }, [
                          createVNode("div", { class: "flex items-center justify-between" }, [
                            createVNode("div", { class: "font-bold text-xl" }, "Inpiniti"),
                            createVNode(_component_Select, null, {
                              default: withCtx(() => [
                                createVNode(_component_SelectTrigger, { class: "w-fit" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_SelectValue, { placeholder: "select" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_SelectContent, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_SelectGroup, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_SelectLabel, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Fruits")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_SelectItem, { value: "apple" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Apple ")
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
                          ])
                        ]),
                        createVNode(_component_Separator),
                        createVNode("div", { class: "grow-[0] overflow-hidden" }, [
                          renderSlot(_ctx.$slots, "default")
                        ])
                      ])
                    ]),
                    _: 3
                  }, 8, ["default-size"])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/mail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=mail-nP2mM-A8.mjs.map
