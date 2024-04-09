import { useSSRContext, defineComponent, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, unref, renderSlot, computed, openBlock, createBlock, createCommentVNode, ref, isRef, TransitionGroup, Fragment, renderList, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { TooltipProvider, useForwardPropsEmits, SplitterGroup, SplitterResizeHandle, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaRoot, ScrollAreaViewport, ScrollAreaCorner, SplitterPanel } from 'radix-vue';
import { b as cn } from '../server.mjs';
import { GripVertical } from 'lucide-vue-next';
import { _ as _sfc_main$7$1, a as _sfc_main$5$1, b as _sfc_main$6$1, c as _sfc_main$4$1, d as _sfc_main$3$1, e as _sfc_main$2$1 } from './SelectScrollDownButton-GgNjveX-.mjs';
import { _ as _sfc_main$8 } from './SelectLabel-oSIY10KP.mjs';
import { _ as _sfc_main$9 } from './Separator-TiGeotNu.mjs';
import { _ as _sfc_main$c } from './index-3M1ek3yg.mjs';
import moment from 'moment';
import { a as useBooks } from './useBooks-ld6HDNyL.mjs';
import { _ as _sfc_main$2$2, a as _sfc_main$a, b as _sfc_main$1$1 } from './TabsList-s18EuMbu.mjs';
import { _ as _sfc_main$b } from './TabsContent-rYAoFXhp.mjs';
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
import './useSupabase-4R9Br0h-.mjs';
import './state-JJ2SDzd5.mjs';
import '@vueuse/core';

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tooltip/TooltipProvider.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/resizable/ResizablePanelGroup.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/resizable/ResizableHandle.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
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
      const _component_Button = _sfc_main$c;
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/DateSelection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/scroll-area/ScrollBar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
            _push2(ssrRenderComponent(unref(ScrollAreaViewport), { class: "h-full w-full rounded-[inherit]" }, {
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
            _push2(ssrRenderComponent(_sfc_main$3, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ScrollAreaCorner), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ScrollAreaViewport), { class: "h-full w-full rounded-[inherit]" }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }),
              createVNode(_sfc_main$3),
              createVNode(unref(ScrollAreaCorner))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/scroll-area/ScrollArea.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NavBooks",
  __ssrInlineRender: true,
  setup(__props) {
    const books = useBooks();
    const type = ref("week");
    const date = ref(/* @__PURE__ */ new Date());
    const cBooks = computed(() => {
      if (type.value === "week") {
        return books.value.filter((book) => {
          return moment(book.date).format("YYYY.WW") === moment(date.value).format("YYYY.WW");
        });
      } else if (type.value === "month") {
        return books.value.filter((book) => {
          return moment(book.date).format("YYYY.MM") === moment(date.value).format("YYYY.MM");
        });
      } else if (type.value === "year") {
        return books.value.filter((book) => {
          return moment(book.date).format("YYYY") === moment(date.value).format("YYYY");
        });
      }
    });
    function onChange(arg) {
      type.value = arg.type;
      date.value = arg.date;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutsDateSelection = _sfc_main$4;
      const _component_Separator = _sfc_main$9;
      const _component_ScrollArea = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grow-[1] overflow-hidden flex flex-col" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_LayoutsDateSelection, {
        class: "p-2 shrink-0",
        onChange
      }, null, _parent));
      _push(ssrRenderComponent(_component_Separator, null, null, _parent));
      _push(ssrRenderComponent(_component_ScrollArea, { class: "flex grow-[0]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex-1 flex flex-col gap-2 p-2"${_scopeId}><!--[-->`);
            ssrRenderList(unref(cBooks), (book) => {
              _push2(`<button${_scopeId}><div class="flex w-full flex-col gap-1 border rounded-lg p-2 hover:bg-neutral-100"${_scopeId}><div class="flex gap-2 justify-between items-center"${_scopeId}><div class="grow-[0] text-left font-semibold text-sm"${_scopeId}>${ssrInterpolate(book.kr)} ${ssrInterpolate(book.booknum)}</div><div class="shrink-0 text-xs"${_scopeId}>${ssrInterpolate(book.date)}</div></div><div class="text-xs text-left"${_scopeId}>${ssrInterpolate(book.jp)}</div><div class="text-xs text-left"${_scopeId}>\uD310\uB9E4\uB7C9 : ${ssrInterpolate(book.sales)}</div></div></button>`);
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
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(cBooks), (book) => {
                      return openBlock(), createBlock("button", {
                        key: book.id
                      }, [
                        createVNode("div", { class: "flex w-full flex-col gap-1 border rounded-lg p-2 hover:bg-neutral-100" }, [
                          createVNode("div", { class: "flex gap-2 justify-between items-center" }, [
                            createVNode("div", { class: "grow-[0] text-left font-semibold text-sm" }, toDisplayString(book.kr) + " " + toDisplayString(book.booknum), 1),
                            createVNode("div", { class: "shrink-0 text-xs" }, toDisplayString(book.date), 1)
                          ]),
                          createVNode("div", { class: "text-xs text-left" }, toDisplayString(book.jp), 1),
                          createVNode("div", { class: "text-xs text-left" }, "\uD310\uB9E4\uB7C9 : " + toDisplayString(book.sales), 1)
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/NavBooks.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const navCollapsedSize = 4;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "mail",
  __ssrInlineRender: true,
  setup(__props) {
    const defaultLayout = [440, 265, 655];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TooltipProvider = _sfc_main$7;
      const _component_ResizablePanelGroup = _sfc_main$6;
      const _component_ResizablePanel = SplitterPanel;
      const _component_Select = _sfc_main$7$1;
      const _component_SelectTrigger = _sfc_main$5$1;
      const _component_SelectValue = _sfc_main$6$1;
      const _component_SelectContent = _sfc_main$4$1;
      const _component_SelectGroup = _sfc_main$3$1;
      const _component_SelectLabel = _sfc_main$8;
      const _component_SelectItem = _sfc_main$2$1;
      const _component_Separator = _sfc_main$9;
      const _component_LayoutsNavBooks = _sfc_main$1;
      const _component_ResizableHandle = _sfc_main$5;
      const _component_Tabs = _sfc_main$2$2;
      const _component_TabsList = _sfc_main$a;
      const _component_TabsTrigger = _sfc_main$1$1;
      const _component_Search = resolveComponent("Search");
      const _component_TabsContent = _sfc_main$b;
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
                    "min-size": 15,
                    "max-size": 20,
                    class: "h-screen flex flex-col"
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
                    "default-size": defaultLayout[1],
                    "min-size": 30
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Tabs, { "default-value": "all" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex items-center px-4 py-2"${_scopeId4}><h1 class="text-xl font-bold"${_scopeId4}>Inbox</h1>`);
                              _push5(ssrRenderComponent(_component_TabsList, { class: "ml-auto" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_TabsTrigger, {
                                      value: "all",
                                      class: "text-zinc-600 dark:text-zinc-200"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \uB3C4\uC11C `);
                                        } else {
                                          return [
                                            createTextVNode(" \uB3C4\uC11C ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_TabsTrigger, {
                                      value: "unread",
                                      class: "text-zinc-600 dark:text-zinc-200"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \uC74C\uC545 `);
                                        } else {
                                          return [
                                            createTextVNode(" \uC74C\uC545 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_TabsTrigger, {
                                      value: "unread",
                                      class: "text-zinc-600 dark:text-zinc-200"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \uAC8C\uC2DC\uD310 `);
                                        } else {
                                          return [
                                            createTextVNode(" \uAC8C\uC2DC\uD310 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_TabsTrigger, {
                                      value: "unread",
                                      class: "text-zinc-600 dark:text-zinc-200"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \uD53C\uADDC\uC5B4 `);
                                        } else {
                                          return [
                                            createTextVNode(" \uD53C\uADDC\uC5B4 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_TabsTrigger, {
                                        value: "all",
                                        class: "text-zinc-600 dark:text-zinc-200"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \uB3C4\uC11C ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TabsTrigger, {
                                        value: "unread",
                                        class: "text-zinc-600 dark:text-zinc-200"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \uC74C\uC545 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TabsTrigger, {
                                        value: "unread",
                                        class: "text-zinc-600 dark:text-zinc-200"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \uAC8C\uC2DC\uD310 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TabsTrigger, {
                                        value: "unread",
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
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                              _push5(ssrRenderComponent(_component_Separator, null, null, _parent5, _scopeId4));
                              _push5(`<div class="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60"${_scopeId4}><form${_scopeId4}><div class="relative"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_Search, { class: "absolute left-2 top-2.5 size-4 text-muted-foreground" }, null, _parent5, _scopeId4));
                              _push5(`</div></form></div>`);
                              _push5(ssrRenderComponent(_component_TabsContent, {
                                value: "all",
                                class: "m-0"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_TabsContent, {
                                value: "unread",
                                class: "m-0"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("div", { class: "flex items-center px-4 py-2" }, [
                                  createVNode("h1", { class: "text-xl font-bold" }, "Inbox"),
                                  createVNode(_component_TabsList, { class: "ml-auto" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_TabsTrigger, {
                                        value: "all",
                                        class: "text-zinc-600 dark:text-zinc-200"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \uB3C4\uC11C ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TabsTrigger, {
                                        value: "unread",
                                        class: "text-zinc-600 dark:text-zinc-200"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \uC74C\uC545 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TabsTrigger, {
                                        value: "unread",
                                        class: "text-zinc-600 dark:text-zinc-200"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \uAC8C\uC2DC\uD310 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TabsTrigger, {
                                        value: "unread",
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
                                createVNode(_component_Separator),
                                createVNode("div", { class: "bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60" }, [
                                  createVNode("form", null, [
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_Search, { class: "absolute left-2 top-2.5 size-4 text-muted-foreground" })
                                    ])
                                  ])
                                ]),
                                createVNode(_component_TabsContent, {
                                  value: "all",
                                  class: "m-0"
                                }),
                                createVNode(_component_TabsContent, {
                                  value: "unread",
                                  class: "m-0"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Tabs, { "default-value": "all" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center px-4 py-2" }, [
                                createVNode("h1", { class: "text-xl font-bold" }, "Inbox"),
                                createVNode(_component_TabsList, { class: "ml-auto" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_TabsTrigger, {
                                      value: "all",
                                      class: "text-zinc-600 dark:text-zinc-200"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \uB3C4\uC11C ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TabsTrigger, {
                                      value: "unread",
                                      class: "text-zinc-600 dark:text-zinc-200"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \uC74C\uC545 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TabsTrigger, {
                                      value: "unread",
                                      class: "text-zinc-600 dark:text-zinc-200"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \uAC8C\uC2DC\uD310 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TabsTrigger, {
                                      value: "unread",
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
                              createVNode(_component_Separator),
                              createVNode("div", { class: "bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60" }, [
                                createVNode("form", null, [
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_Search, { class: "absolute left-2 top-2.5 size-4 text-muted-foreground" })
                                  ])
                                ])
                              ]),
                              createVNode(_component_TabsContent, {
                                value: "all",
                                class: "m-0"
                              }),
                              createVNode(_component_TabsContent, {
                                value: "unread",
                                class: "m-0"
                              })
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
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ResizablePanel, {
                      id: "resize-panel-1",
                      "default-size": defaultLayout[0],
                      "collapsed-size": navCollapsedSize,
                      collapsible: "",
                      "min-size": 15,
                      "max-size": 20,
                      class: "h-screen flex flex-col"
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
                      "default-size": defaultLayout[1],
                      "min-size": 30
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Tabs, { "default-value": "all" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center px-4 py-2" }, [
                              createVNode("h1", { class: "text-xl font-bold" }, "Inbox"),
                              createVNode(_component_TabsList, { class: "ml-auto" }, {
                                default: withCtx(() => [
                                  createVNode(_component_TabsTrigger, {
                                    value: "all",
                                    class: "text-zinc-600 dark:text-zinc-200"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \uB3C4\uC11C ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TabsTrigger, {
                                    value: "unread",
                                    class: "text-zinc-600 dark:text-zinc-200"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \uC74C\uC545 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TabsTrigger, {
                                    value: "unread",
                                    class: "text-zinc-600 dark:text-zinc-200"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \uAC8C\uC2DC\uD310 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TabsTrigger, {
                                    value: "unread",
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
                            createVNode(_component_Separator),
                            createVNode("div", { class: "bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60" }, [
                              createVNode("form", null, [
                                createVNode("div", { class: "relative" }, [
                                  createVNode(_component_Search, { class: "absolute left-2 top-2.5 size-4 text-muted-foreground" })
                                ])
                              ])
                            ]),
                            createVNode(_component_TabsContent, {
                              value: "all",
                              class: "m-0"
                            }),
                            createVNode(_component_TabsContent, {
                              value: "unread",
                              class: "m-0"
                            })
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
                    }, null, 8, ["default-size"])
                  ];
                }
              }),
              _: 1
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
                    "min-size": 15,
                    "max-size": 20,
                    class: "h-screen flex flex-col"
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
                    "default-size": defaultLayout[1],
                    "min-size": 30
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Tabs, { "default-value": "all" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center px-4 py-2" }, [
                            createVNode("h1", { class: "text-xl font-bold" }, "Inbox"),
                            createVNode(_component_TabsList, { class: "ml-auto" }, {
                              default: withCtx(() => [
                                createVNode(_component_TabsTrigger, {
                                  value: "all",
                                  class: "text-zinc-600 dark:text-zinc-200"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \uB3C4\uC11C ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TabsTrigger, {
                                  value: "unread",
                                  class: "text-zinc-600 dark:text-zinc-200"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \uC74C\uC545 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TabsTrigger, {
                                  value: "unread",
                                  class: "text-zinc-600 dark:text-zinc-200"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \uAC8C\uC2DC\uD310 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TabsTrigger, {
                                  value: "unread",
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
                          createVNode(_component_Separator),
                          createVNode("div", { class: "bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60" }, [
                            createVNode("form", null, [
                              createVNode("div", { class: "relative" }, [
                                createVNode(_component_Search, { class: "absolute left-2 top-2.5 size-4 text-muted-foreground" })
                              ])
                            ])
                          ]),
                          createVNode(_component_TabsContent, {
                            value: "all",
                            class: "m-0"
                          }),
                          createVNode(_component_TabsContent, {
                            value: "unread",
                            class: "m-0"
                          })
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
                  }, null, 8, ["default-size"])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/mail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=mail-_bqi4Mq9.mjs.map
