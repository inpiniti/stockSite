import { useSSRContext, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, defineComponent, renderSlot } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { AccordionRoot, useEmitAsProps, AccordionContent, AccordionItem, AccordionHeader, AccordionTrigger } from 'radix-vue';
import { a as cn } from '../server.mjs';
import { ChevronDown } from 'lucide-vue-next';
import { _ as _sfc_main$5 } from './index-64ep_nG4.mjs';
import { _ as _sfc_main$6 } from './Separator-SzPKFLHH.mjs';
import { _ as _sfc_main$7 } from './index-a6dO8h6t.mjs';
import { a as useBooks } from './useBooks-Ypf3XFQB.mjs';
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
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import './useSupabase-vnVKN2Il.mjs';
import './state-0C5oRJ7z.mjs';
import '@vueuse/core';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Accordion",
  __ssrInlineRender: true,
  props: {
    type: {},
    modelValue: {},
    defaultValue: {},
    collapsible: { type: Boolean },
    disabled: { type: Boolean },
    dir: {},
    orientation: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AccordionRoot), mergeProps({ ...props, ...unref(useEmitAsProps)(emits) }, _attrs), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/accordion/Accordion.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AccordionContent",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AccordionContent), mergeProps(props, {
        class: unref(cn)(
          "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pb-4 pt-0"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "pb-4 pt-0" }, [
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/accordion/AccordionContent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AccordionItem",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(AccordionItem), mergeProps(props, {
        class: unref(cn)("border-b", (_a = props.class) != null ? _a : "")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/accordion/AccordionItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AccordionTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AccordionHeader), mergeProps({
        class: "flex",
        as: "div"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(AccordionTrigger), mergeProps(props, {
              class: unref(cn)(
                "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
                props.class
              )
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(ssrRenderComponent(unref(ChevronDown), { class: "h-4 w-4 shrink-0 transition-transform duration-200" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default"),
                    createVNode(unref(ChevronDown), { class: "h-4 w-4 shrink-0 transition-transform duration-200" })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(AccordionTrigger), mergeProps(props, {
                class: unref(cn)(
                  "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
                  props.class
                )
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default"),
                  createVNode(unref(ChevronDown), { class: "h-4 w-4 shrink-0 transition-transform duration-200" })
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/accordion/AccordionTrigger.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "sale",
  __ssrInlineRender: true,
  setup(__props) {
    const books = useBooks();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Accordion = _sfc_main$4;
      const _component_AccordionItem = _sfc_main$2;
      const _component_AccordionTrigger = _sfc_main$1;
      const _component_Button = _sfc_main$5;
      const _component_Separator = _sfc_main$6;
      const _component_Badge = _sfc_main$7;
      const _component_AccordionContent = _sfc_main$3;
      _push(ssrRenderComponent(_component_Accordion, mergeProps({
        type: "single",
        collapsible: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(books), (book) => {
              _push2(ssrRenderComponent(_component_AccordionItem, {
                key: book.id,
                value: book.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_AccordionTrigger, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="px-4 flex flex-col gap-4 w-full"${_scopeId3}><div class="flex gap-4"${_scopeId3}><div class="shrink-0"${_scopeId3}><img class="h-40 rounded-sm object-cover"${ssrRenderAttr("src", book.img)}${_scopeId3}></div><div class="flex flex-col flex-1 items-start text-xs gap-1"${_scopeId3}><div class="flex gap-2 text-nowrap text-sm"${_scopeId3}><div class="text-neutral-500"${_scopeId3}>\uC608\uC57D\uD310\uB9E4</div><div class="font-semibold"${_scopeId3}>${ssrInterpolate(book.kr)}</div></div><div${_scopeId3}>\uC694\uD55C \uBCFC\uD504\uAC15 \uD3F0 \uAD34\uD14C - \uD604\uB300\uC9C0\uC131 - 2024.02.08</div><div${_scopeId3}>${ssrInterpolate(book.jp)}</div><div${_scopeId3}>${ssrInterpolate(book.name)}</div><div class="flex gap-1"${_scopeId3}><div class="text-red-500"${_scopeId3}>10%</div><div class="font-bold"${_scopeId3}>54,00\uC6D0</div><div class="text-neutral-400 line-through"${_scopeId3}>6,000\uC6D0</div><div${_scopeId3}>| 870p</div></div><div class="test-left"${_scopeId3}> \u201C\uC628\uAC16 \uD559\uBB38\uC5D0 \uD1B5\uB2EC\uD558\uACE0 \uB9C8\uBC95\uAE4C\uC9C0 \uC775\uD614\uC9C0\uB9CC, \uC790\uC2E0\uC758 \uB2A5\uB825\uC5D0 \uD55C\uACC4\uB97C \uB290\uAEF4 \uC808\uB9DD\uD55C \uB178\uD559\uC790(\u8001\u5B78\u8005) \uD30C\uC6B0\uC2A4\uD2B8. \uC774\uB7F0 \uADF8 \uC55E\uC5D0 \uBA54\uD53C\uC2A4\uD1A0\uD3A0\uB808\uC2A4\uB77C\uB294 \uC545\uB9C8\uAC00 \uB098\uD0C0\uB098 \uC194\uAE43\uD55C \uC81C\uC548\uC744 \uD55C\uB2E4. \uC720\uD639\uC5D0 \uB118\uC5B4\uAC04 \uD30C\uC6B0\uC2A4 </div></div><div class="shrink-0 flex flex-col justify-center"${_scopeId3}><div${_scopeId3}>1/31(\uC218)</div><div${_scopeId3}>\uCD9C\uACE0\uC608\uC815</div></div><div class="shrink-0 flex flex-col justify-center gap-4"${_scopeId3}><div${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_Button, { variant: "secondary" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\uC7A5\uBC14\uAD6C\uB2C8`);
                              } else {
                                return [
                                  createTextVNode("\uC7A5\uBC14\uAD6C\uB2C8")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div><div${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_Button, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\uAD6C\uB9E4\uD558\uAE30`);
                              } else {
                                return [
                                  createTextVNode("\uAD6C\uB9E4\uD558\uAE30")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div></div></div>`);
                          _push4(ssrRenderComponent(_component_Separator, null, null, _parent4, _scopeId3));
                          _push4(`<div class="flex gap-4"${_scopeId3}><div${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_Badge, { variant: "secondary" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\uB9AC\uBDF0 \uBCF4\uAE30`);
                              } else {
                                return [
                                  createTextVNode("\uB9AC\uBDF0 \uBCF4\uAE30")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div><div${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_Badge, { variant: "secondary" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\uB178\uB798 \uB4E3\uAE30`);
                              } else {
                                return [
                                  createTextVNode("\uB178\uB798 \uB4E3\uAE30")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div><div${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_Badge, { variant: "secondary" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\uAC8C\uC2DC\uD310 \uBCF4\uAE30`);
                              } else {
                                return [
                                  createTextVNode("\uAC8C\uC2DC\uD310 \uBCF4\uAE30")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div><div${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_Badge, { variant: "secondary" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\uCC28\uD2B8 \uBCF4\uB4DC`);
                              } else {
                                return [
                                  createTextVNode("\uCC28\uD2B8 \uBCF4\uB4DC")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "px-4 flex flex-col gap-4 w-full" }, [
                              createVNode("div", { class: "flex gap-4" }, [
                                createVNode("div", { class: "shrink-0" }, [
                                  createVNode("img", {
                                    class: "h-40 rounded-sm object-cover",
                                    src: book.img
                                  }, null, 8, ["src"])
                                ]),
                                createVNode("div", { class: "flex flex-col flex-1 items-start text-xs gap-1" }, [
                                  createVNode("div", { class: "flex gap-2 text-nowrap text-sm" }, [
                                    createVNode("div", { class: "text-neutral-500" }, "\uC608\uC57D\uD310\uB9E4"),
                                    createVNode("div", { class: "font-semibold" }, toDisplayString(book.kr), 1)
                                  ]),
                                  createVNode("div", null, "\uC694\uD55C \uBCFC\uD504\uAC15 \uD3F0 \uAD34\uD14C - \uD604\uB300\uC9C0\uC131 - 2024.02.08"),
                                  createVNode("div", null, toDisplayString(book.jp), 1),
                                  createVNode("div", null, toDisplayString(book.name), 1),
                                  createVNode("div", { class: "flex gap-1" }, [
                                    createVNode("div", { class: "text-red-500" }, "10%"),
                                    createVNode("div", { class: "font-bold" }, "54,00\uC6D0"),
                                    createVNode("div", { class: "text-neutral-400 line-through" }, "6,000\uC6D0"),
                                    createVNode("div", null, "| 870p")
                                  ]),
                                  createVNode("div", { class: "test-left" }, " \u201C\uC628\uAC16 \uD559\uBB38\uC5D0 \uD1B5\uB2EC\uD558\uACE0 \uB9C8\uBC95\uAE4C\uC9C0 \uC775\uD614\uC9C0\uB9CC, \uC790\uC2E0\uC758 \uB2A5\uB825\uC5D0 \uD55C\uACC4\uB97C \uB290\uAEF4 \uC808\uB9DD\uD55C \uB178\uD559\uC790(\u8001\u5B78\u8005) \uD30C\uC6B0\uC2A4\uD2B8. \uC774\uB7F0 \uADF8 \uC55E\uC5D0 \uBA54\uD53C\uC2A4\uD1A0\uD3A0\uB808\uC2A4\uB77C\uB294 \uC545\uB9C8\uAC00 \uB098\uD0C0\uB098 \uC194\uAE43\uD55C \uC81C\uC548\uC744 \uD55C\uB2E4. \uC720\uD639\uC5D0 \uB118\uC5B4\uAC04 \uD30C\uC6B0\uC2A4 ")
                                ]),
                                createVNode("div", { class: "shrink-0 flex flex-col justify-center" }, [
                                  createVNode("div", null, "1/31(\uC218)"),
                                  createVNode("div", null, "\uCD9C\uACE0\uC608\uC815")
                                ]),
                                createVNode("div", { class: "shrink-0 flex flex-col justify-center gap-4" }, [
                                  createVNode("div", null, [
                                    createVNode(_component_Button, { variant: "secondary" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\uC7A5\uBC14\uAD6C\uB2C8")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", null, [
                                    createVNode(_component_Button, null, {
                                      default: withCtx(() => [
                                        createTextVNode("\uAD6C\uB9E4\uD558\uAE30")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ])
                              ]),
                              createVNode(_component_Separator),
                              createVNode("div", { class: "flex gap-4" }, [
                                createVNode("div", null, [
                                  createVNode(_component_Badge, { variant: "secondary" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\uB9AC\uBDF0 \uBCF4\uAE30")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", null, [
                                  createVNode(_component_Badge, { variant: "secondary" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\uB178\uB798 \uB4E3\uAE30")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", null, [
                                  createVNode(_component_Badge, { variant: "secondary" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\uAC8C\uC2DC\uD310 \uBCF4\uAE30")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", null, [
                                  createVNode(_component_Badge, { variant: "secondary" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\uCC28\uD2B8 \uBCF4\uB4DC")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_AccordionContent, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div${_scopeId3}>\uB2E4\uB978 \uCC45 \uB9AC\uC2A4\uD2B8</div>`);
                        } else {
                          return [
                            createVNode("div", null, "\uB2E4\uB978 \uCC45 \uB9AC\uC2A4\uD2B8")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_AccordionTrigger, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "px-4 flex flex-col gap-4 w-full" }, [
                            createVNode("div", { class: "flex gap-4" }, [
                              createVNode("div", { class: "shrink-0" }, [
                                createVNode("img", {
                                  class: "h-40 rounded-sm object-cover",
                                  src: book.img
                                }, null, 8, ["src"])
                              ]),
                              createVNode("div", { class: "flex flex-col flex-1 items-start text-xs gap-1" }, [
                                createVNode("div", { class: "flex gap-2 text-nowrap text-sm" }, [
                                  createVNode("div", { class: "text-neutral-500" }, "\uC608\uC57D\uD310\uB9E4"),
                                  createVNode("div", { class: "font-semibold" }, toDisplayString(book.kr), 1)
                                ]),
                                createVNode("div", null, "\uC694\uD55C \uBCFC\uD504\uAC15 \uD3F0 \uAD34\uD14C - \uD604\uB300\uC9C0\uC131 - 2024.02.08"),
                                createVNode("div", null, toDisplayString(book.jp), 1),
                                createVNode("div", null, toDisplayString(book.name), 1),
                                createVNode("div", { class: "flex gap-1" }, [
                                  createVNode("div", { class: "text-red-500" }, "10%"),
                                  createVNode("div", { class: "font-bold" }, "54,00\uC6D0"),
                                  createVNode("div", { class: "text-neutral-400 line-through" }, "6,000\uC6D0"),
                                  createVNode("div", null, "| 870p")
                                ]),
                                createVNode("div", { class: "test-left" }, " \u201C\uC628\uAC16 \uD559\uBB38\uC5D0 \uD1B5\uB2EC\uD558\uACE0 \uB9C8\uBC95\uAE4C\uC9C0 \uC775\uD614\uC9C0\uB9CC, \uC790\uC2E0\uC758 \uB2A5\uB825\uC5D0 \uD55C\uACC4\uB97C \uB290\uAEF4 \uC808\uB9DD\uD55C \uB178\uD559\uC790(\u8001\u5B78\u8005) \uD30C\uC6B0\uC2A4\uD2B8. \uC774\uB7F0 \uADF8 \uC55E\uC5D0 \uBA54\uD53C\uC2A4\uD1A0\uD3A0\uB808\uC2A4\uB77C\uB294 \uC545\uB9C8\uAC00 \uB098\uD0C0\uB098 \uC194\uAE43\uD55C \uC81C\uC548\uC744 \uD55C\uB2E4. \uC720\uD639\uC5D0 \uB118\uC5B4\uAC04 \uD30C\uC6B0\uC2A4 ")
                              ]),
                              createVNode("div", { class: "shrink-0 flex flex-col justify-center" }, [
                                createVNode("div", null, "1/31(\uC218)"),
                                createVNode("div", null, "\uCD9C\uACE0\uC608\uC815")
                              ]),
                              createVNode("div", { class: "shrink-0 flex flex-col justify-center gap-4" }, [
                                createVNode("div", null, [
                                  createVNode(_component_Button, { variant: "secondary" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\uC7A5\uBC14\uAD6C\uB2C8")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", null, [
                                  createVNode(_component_Button, null, {
                                    default: withCtx(() => [
                                      createTextVNode("\uAD6C\uB9E4\uD558\uAE30")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ]),
                            createVNode(_component_Separator),
                            createVNode("div", { class: "flex gap-4" }, [
                              createVNode("div", null, [
                                createVNode(_component_Badge, { variant: "secondary" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\uB9AC\uBDF0 \uBCF4\uAE30")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", null, [
                                createVNode(_component_Badge, { variant: "secondary" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\uB178\uB798 \uB4E3\uAE30")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", null, [
                                createVNode(_component_Badge, { variant: "secondary" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\uAC8C\uC2DC\uD310 \uBCF4\uAE30")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", null, [
                                createVNode(_component_Badge, { variant: "secondary" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\uCC28\uD2B8 \uBCF4\uB4DC")
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_AccordionContent, null, {
                        default: withCtx(() => [
                          createVNode("div", null, "\uB2E4\uB978 \uCC45 \uB9AC\uC2A4\uD2B8")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(books), (book) => {
                return openBlock(), createBlock(_component_AccordionItem, {
                  key: book.id,
                  value: book.id
                }, {
                  default: withCtx(() => [
                    createVNode(_component_AccordionTrigger, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "px-4 flex flex-col gap-4 w-full" }, [
                          createVNode("div", { class: "flex gap-4" }, [
                            createVNode("div", { class: "shrink-0" }, [
                              createVNode("img", {
                                class: "h-40 rounded-sm object-cover",
                                src: book.img
                              }, null, 8, ["src"])
                            ]),
                            createVNode("div", { class: "flex flex-col flex-1 items-start text-xs gap-1" }, [
                              createVNode("div", { class: "flex gap-2 text-nowrap text-sm" }, [
                                createVNode("div", { class: "text-neutral-500" }, "\uC608\uC57D\uD310\uB9E4"),
                                createVNode("div", { class: "font-semibold" }, toDisplayString(book.kr), 1)
                              ]),
                              createVNode("div", null, "\uC694\uD55C \uBCFC\uD504\uAC15 \uD3F0 \uAD34\uD14C - \uD604\uB300\uC9C0\uC131 - 2024.02.08"),
                              createVNode("div", null, toDisplayString(book.jp), 1),
                              createVNode("div", null, toDisplayString(book.name), 1),
                              createVNode("div", { class: "flex gap-1" }, [
                                createVNode("div", { class: "text-red-500" }, "10%"),
                                createVNode("div", { class: "font-bold" }, "54,00\uC6D0"),
                                createVNode("div", { class: "text-neutral-400 line-through" }, "6,000\uC6D0"),
                                createVNode("div", null, "| 870p")
                              ]),
                              createVNode("div", { class: "test-left" }, " \u201C\uC628\uAC16 \uD559\uBB38\uC5D0 \uD1B5\uB2EC\uD558\uACE0 \uB9C8\uBC95\uAE4C\uC9C0 \uC775\uD614\uC9C0\uB9CC, \uC790\uC2E0\uC758 \uB2A5\uB825\uC5D0 \uD55C\uACC4\uB97C \uB290\uAEF4 \uC808\uB9DD\uD55C \uB178\uD559\uC790(\u8001\u5B78\u8005) \uD30C\uC6B0\uC2A4\uD2B8. \uC774\uB7F0 \uADF8 \uC55E\uC5D0 \uBA54\uD53C\uC2A4\uD1A0\uD3A0\uB808\uC2A4\uB77C\uB294 \uC545\uB9C8\uAC00 \uB098\uD0C0\uB098 \uC194\uAE43\uD55C \uC81C\uC548\uC744 \uD55C\uB2E4. \uC720\uD639\uC5D0 \uB118\uC5B4\uAC04 \uD30C\uC6B0\uC2A4 ")
                            ]),
                            createVNode("div", { class: "shrink-0 flex flex-col justify-center" }, [
                              createVNode("div", null, "1/31(\uC218)"),
                              createVNode("div", null, "\uCD9C\uACE0\uC608\uC815")
                            ]),
                            createVNode("div", { class: "shrink-0 flex flex-col justify-center gap-4" }, [
                              createVNode("div", null, [
                                createVNode(_component_Button, { variant: "secondary" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\uC7A5\uBC14\uAD6C\uB2C8")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", null, [
                                createVNode(_component_Button, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\uAD6C\uB9E4\uD558\uAE30")
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
                          ]),
                          createVNode(_component_Separator),
                          createVNode("div", { class: "flex gap-4" }, [
                            createVNode("div", null, [
                              createVNode(_component_Badge, { variant: "secondary" }, {
                                default: withCtx(() => [
                                  createTextVNode("\uB9AC\uBDF0 \uBCF4\uAE30")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", null, [
                              createVNode(_component_Badge, { variant: "secondary" }, {
                                default: withCtx(() => [
                                  createTextVNode("\uB178\uB798 \uB4E3\uAE30")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", null, [
                              createVNode(_component_Badge, { variant: "secondary" }, {
                                default: withCtx(() => [
                                  createTextVNode("\uAC8C\uC2DC\uD310 \uBCF4\uAE30")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", null, [
                              createVNode(_component_Badge, { variant: "secondary" }, {
                                default: withCtx(() => [
                                  createTextVNode("\uCC28\uD2B8 \uBCF4\uB4DC")
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_AccordionContent, null, {
                      default: withCtx(() => [
                        createVNode("div", null, "\uB2E4\uB978 \uCC45 \uB9AC\uC2A4\uD2B8")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/book/sale.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sale-ClU2fahY.mjs.map
