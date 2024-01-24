import { _ as _sfc_main$4$1, a as _sfc_main$i, b as _sfc_main$3$1, c as _sfc_main$2$1, d as _sfc_main$1$1 } from './DialogContent-kk3bNr4b.mjs';
import { _ as _sfc_main$j, a as _sfc_main$1$2 } from './Label-p37LmSla.mjs';
import { cva } from 'class-variance-authority';
import { _ as _sfc_main$k } from './Input-7SuzJlwq.mjs';
import { _ as _sfc_main$l } from './Textarea-G63qVAKW.mjs';
import { c as cn, _ as _sfc_main$m } from './index-K3pjwam9.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, ref, withCtx, createTextVNode, createVNode, renderSlot, resolveComponent, openBlock, createBlock } from 'vue';
import { u as useFetch } from './fetch-smb1T55z.mjs';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';
import { MenubarRoot, MenubarItem, MenubarPortal, MenubarContent, MenubarMenu, MenubarRadioGroup, MenubarRadioItem, MenubarItemIndicator, MenubarCheckboxItem, MenubarSeparator, useForwardPropsEmits, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from 'radix-vue';
import { Circle, Check, ChevronRight } from 'lucide-vue-next';
import { useStorage } from '@vueuse/core';
import { _ as __nuxt_component_0 } from './nuxt-link-DpFgkuN3.mjs';
import { u as useRoute } from '../server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';
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
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/vue-fontawesome';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-regular-svg-icons';

const useDarkmode = () => {
  const darkmode = useStorage("darkmode", false);
  function toggleDarkmode() {
    darkmode.value = !darkmode.value;
    setDarkmode();
  }
  function setDarkmode() {
    if (darkmode.value) {
      (void 0).documentElement.classList.add("dark");
    } else {
      (void 0).documentElement.classList.remove("dark");
    }
  }
  return {
    darkmode,
    toggleDarkmode,
    setDarkmode
  };
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "Badge",
  __ssrInlineRender: true,
  props: {
    variant: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)(unref(badgeVariants)({ variant: _ctx.variant }), (_a = _ctx.$attrs.class) != null ? _a : "")
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/badge/Badge.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "email",
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
      }, "$veX7vE1JZn");
    }
    __expose({ onOpen });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Dialog = _sfc_main$4$1;
      const _component_DialogContent = _sfc_main$i;
      const _component_DialogHeader = _sfc_main$3$1;
      const _component_DialogTitle = _sfc_main$2$1;
      const _component_DialogDescription = _sfc_main$1$1;
      const _component_Badge = _sfc_main$h;
      const _component_Label = _sfc_main$j;
      const _component_Input = _sfc_main$k;
      const _component_Textarea = _sfc_main$l;
      const _component_DialogFooter = _sfc_main$1$2;
      const _component_Button = _sfc_main$m;
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
                              _push5(`\uC774\uBA54\uC77C \uC591\uC2DD`);
                            } else {
                              return [
                                createTextVNode("\uC774\uBA54\uC77C \uC591\uC2DD")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DialogDescription, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uB9CC\uB4E0\uC774\uC5D0\uAC8C \uAD81\uAE08\uD55C\uC810\uC774\uB098 \uC9C8\uBB38\uC0AC\uD56D\uC774 \uC788\uC73C\uC2DC\uBA74 \uC774\uBA54\uC77C\uC744 \uBCF4\uB0B4\uC8FC\uC138\uC694. `);
                              _push5(ssrRenderComponent(_component_Badge, { variant: "outline" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\uC5F0\uB77D\uCC98`);
                                  } else {
                                    return [
                                      createTextVNode("\uC5F0\uB77D\uCC98")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`, `);
                              _push5(ssrRenderComponent(_component_Badge, { variant: "outline" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\uC774\uBA54\uC77C \uC8FC\uC18C`);
                                  } else {
                                    return [
                                      createTextVNode("\uC774\uBA54\uC77C \uC8FC\uC18C")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`\uB294 \uD544\uC218\uB294 \uC544\uB2C8\uC9C0\uB9CC, \uB2F5\uBCC0\uC744 \uC6D0\uD558\uC2DC\uBA74 \uB0A8\uACA8\uC8FC\uC138\uC694. `);
                            } else {
                              return [
                                createTextVNode(" \uB9CC\uB4E0\uC774\uC5D0\uAC8C \uAD81\uAE08\uD55C\uC810\uC774\uB098 \uC9C8\uBB38\uC0AC\uD56D\uC774 \uC788\uC73C\uC2DC\uBA74 \uC774\uBA54\uC77C\uC744 \uBCF4\uB0B4\uC8FC\uC138\uC694. "),
                                createVNode(_component_Badge, { variant: "outline" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\uC5F0\uB77D\uCC98")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(", "),
                                createVNode(_component_Badge, { variant: "outline" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\uC774\uBA54\uC77C \uC8FC\uC18C")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode("\uB294 \uD544\uC218\uB294 \uC544\uB2C8\uC9C0\uB9CC, \uB2F5\uBCC0\uC744 \uC6D0\uD558\uC2DC\uBA74 \uB0A8\uACA8\uC8FC\uC138\uC694. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\uC774\uBA54\uC77C \uC591\uC2DD")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DialogDescription, null, {
                            default: withCtx(() => [
                              createTextVNode(" \uB9CC\uB4E0\uC774\uC5D0\uAC8C \uAD81\uAE08\uD55C\uC810\uC774\uB098 \uC9C8\uBB38\uC0AC\uD56D\uC774 \uC788\uC73C\uC2DC\uBA74 \uC774\uBA54\uC77C\uC744 \uBCF4\uB0B4\uC8FC\uC138\uC694. "),
                              createVNode(_component_Badge, { variant: "outline" }, {
                                default: withCtx(() => [
                                  createTextVNode("\uC5F0\uB77D\uCC98")
                                ]),
                                _: 1
                              }),
                              createTextVNode(", "),
                              createVNode(_component_Badge, { variant: "outline" }, {
                                default: withCtx(() => [
                                  createTextVNode("\uC774\uBA54\uC77C \uC8FC\uC18C")
                                ]),
                                _: 1
                              }),
                              createTextVNode("\uB294 \uD544\uC218\uB294 \uC544\uB2C8\uC9C0\uB9CC, \uB2F5\uBCC0\uC744 \uC6D0\uD558\uC2DC\uBA74 \uB0A8\uACA8\uC8FC\uC138\uC694. ")
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
                    placeholder: "\uAD81\uAE08\uD55C \uC0AC\uD56D\uC774 \uC788\uC2B5\uB2C8\uB2E4.",
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
                    placeholder: "Type your message here.",
                    class: "col-span-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid grid-cols-4 items-center gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, {
                    for: "tel",
                    class: "text-right"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uC5F0\uB77D\uCC98 `);
                      } else {
                        return [
                          createTextVNode(" \uC5F0\uB77D\uCC98 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    modelValue: unref(data).tel,
                    "onUpdate:modelValue": ($event) => unref(data).tel = $event,
                    placeholder: "010-000-0000",
                    class: "col-span-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid grid-cols-4 items-center gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, {
                    for: "email",
                    class: "text-right"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uC774\uBA54\uC77C \uC8FC\uC18C `);
                      } else {
                        return [
                          createTextVNode(" \uC774\uBA54\uC77C \uC8FC\uC18C ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    modelValue: unref(data).email,
                    "onUpdate:modelValue": ($event) => unref(data).email = $event,
                    placeholder: "inpiniti@gmail.com",
                    class: "col-span-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  _push3(ssrRenderComponent(_component_DialogFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Button, { onClick: email }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uC774\uBA54\uC77C \uBCF4\uB0B4\uAE30 `);
                            } else {
                              return [
                                createTextVNode(" \uC774\uBA54\uC77C \uBCF4\uB0B4\uAE30 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Button, { onClick: email }, {
                            default: withCtx(() => [
                              createTextVNode(" \uC774\uBA54\uC77C \uBCF4\uB0B4\uAE30 ")
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
                            createTextVNode("\uC774\uBA54\uC77C \uC591\uC2DD")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DialogDescription, null, {
                          default: withCtx(() => [
                            createTextVNode(" \uB9CC\uB4E0\uC774\uC5D0\uAC8C \uAD81\uAE08\uD55C\uC810\uC774\uB098 \uC9C8\uBB38\uC0AC\uD56D\uC774 \uC788\uC73C\uC2DC\uBA74 \uC774\uBA54\uC77C\uC744 \uBCF4\uB0B4\uC8FC\uC138\uC694. "),
                            createVNode(_component_Badge, { variant: "outline" }, {
                              default: withCtx(() => [
                                createTextVNode("\uC5F0\uB77D\uCC98")
                              ]),
                              _: 1
                            }),
                            createTextVNode(", "),
                            createVNode(_component_Badge, { variant: "outline" }, {
                              default: withCtx(() => [
                                createTextVNode("\uC774\uBA54\uC77C \uC8FC\uC18C")
                              ]),
                              _: 1
                            }),
                            createTextVNode("\uB294 \uD544\uC218\uB294 \uC544\uB2C8\uC9C0\uB9CC, \uB2F5\uBCC0\uC744 \uC6D0\uD558\uC2DC\uBA74 \uB0A8\uACA8\uC8FC\uC138\uC694. ")
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
                          placeholder: "\uAD81\uAE08\uD55C \uC0AC\uD56D\uC774 \uC788\uC2B5\uB2C8\uB2E4.",
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
                          placeholder: "Type your message here.",
                          class: "col-span-3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                        createVNode(_component_Label, {
                          for: "tel",
                          class: "text-right"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uC5F0\uB77D\uCC98 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          modelValue: unref(data).tel,
                          "onUpdate:modelValue": ($event) => unref(data).tel = $event,
                          placeholder: "010-000-0000",
                          class: "col-span-3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                        createVNode(_component_Label, {
                          for: "email",
                          class: "text-right"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uC774\uBA54\uC77C \uC8FC\uC18C ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          modelValue: unref(data).email,
                          "onUpdate:modelValue": ($event) => unref(data).email = $event,
                          placeholder: "inpiniti@gmail.com",
                          class: "col-span-3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode(_component_DialogFooter, null, {
                      default: withCtx(() => [
                        createVNode(_component_Button, { onClick: email }, {
                          default: withCtx(() => [
                            createTextVNode(" \uC774\uBA54\uC77C \uBCF4\uB0B4\uAE30 ")
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
                          createTextVNode("\uC774\uBA54\uC77C \uC591\uC2DD")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DialogDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(" \uB9CC\uB4E0\uC774\uC5D0\uAC8C \uAD81\uAE08\uD55C\uC810\uC774\uB098 \uC9C8\uBB38\uC0AC\uD56D\uC774 \uC788\uC73C\uC2DC\uBA74 \uC774\uBA54\uC77C\uC744 \uBCF4\uB0B4\uC8FC\uC138\uC694. "),
                          createVNode(_component_Badge, { variant: "outline" }, {
                            default: withCtx(() => [
                              createTextVNode("\uC5F0\uB77D\uCC98")
                            ]),
                            _: 1
                          }),
                          createTextVNode(", "),
                          createVNode(_component_Badge, { variant: "outline" }, {
                            default: withCtx(() => [
                              createTextVNode("\uC774\uBA54\uC77C \uC8FC\uC18C")
                            ]),
                            _: 1
                          }),
                          createTextVNode("\uB294 \uD544\uC218\uB294 \uC544\uB2C8\uC9C0\uB9CC, \uB2F5\uBCC0\uC744 \uC6D0\uD558\uC2DC\uBA74 \uB0A8\uACA8\uC8FC\uC138\uC694. ")
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
                        placeholder: "\uAD81\uAE08\uD55C \uC0AC\uD56D\uC774 \uC788\uC2B5\uB2C8\uB2E4.",
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
                        placeholder: "Type your message here.",
                        class: "col-span-3"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                      createVNode(_component_Label, {
                        for: "tel",
                        class: "text-right"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC5F0\uB77D\uCC98 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        modelValue: unref(data).tel,
                        "onUpdate:modelValue": ($event) => unref(data).tel = $event,
                        placeholder: "010-000-0000",
                        class: "col-span-3"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                      createVNode(_component_Label, {
                        for: "email",
                        class: "text-right"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC774\uBA54\uC77C \uC8FC\uC18C ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        modelValue: unref(data).email,
                        "onUpdate:modelValue": ($event) => unref(data).email = $event,
                        placeholder: "inpiniti@gmail.com",
                        class: "col-span-3"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  createVNode(_component_DialogFooter, null, {
                    default: withCtx(() => [
                      createVNode(_component_Button, { onClick: email }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC774\uBA54\uC77C \uBCF4\uB0B4\uAE30 ")
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
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dialog/email.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "Menubar",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    defaultValue: {},
    dir: {},
    loop: { type: Boolean },
    class: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(MenubarRoot), mergeProps(props, {
        class: unref(cn)(
          "flex h-10 items-center space-x-1 rounded-md border border-border p-1",
          props.class
        ),
        "onUpdate:modelValue": ($event) => emits("update:modelValue", $event)
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
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/menubar/Menubar.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "MenubarItem",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    inset: { type: Boolean },
    class: {}
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(MenubarItem), mergeProps(props, {
        class: [
          unref(cn)(
            "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            _ctx.inset && "pl-8",
            props.class
          )
        ],
        onSelect: ($event) => emits("select", $event)
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
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/menubar/MenubarItem.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "MenubarContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: { default: 8 },
    align: { default: "start" },
    alignOffset: { default: -4 },
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
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(MenubarPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MenubarContent), {
              loop: props.loop,
              "as-child": props.asChild,
              "side-offset": props.sideOffset,
              side: props.side,
              align: props.align,
              "align-offset": props.alignOffset,
              class: unref(cn)(
                "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                props.class
              )
            }, {
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
              createVNode(unref(MenubarContent), {
                loop: props.loop,
                "as-child": props.asChild,
                "side-offset": props.sideOffset,
                side: props.side,
                align: props.align,
                "align-offset": props.alignOffset,
                class: unref(cn)(
                  "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                  props.class
                )
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 8, ["loop", "as-child", "side-offset", "side", "align", "align-offset", "class"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/menubar/MenubarContent.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "MenubarMenu",
  __ssrInlineRender: true,
  props: {
    value: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(MenubarMenu), mergeProps(props, _attrs), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/menubar/MenubarMenu.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "MenubarRadioGroup",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(MenubarRadioGroup), mergeProps(props, {
        "onUpdate:modelValue": ($event) => emits("update:modelValue", $event)
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
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/menubar/MenubarRadioGroup.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "MenubarRadioItem",
  __ssrInlineRender: true,
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(MenubarRadioItem), mergeProps(props, {
        class: [
          unref(cn)(
            "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            props.class
          )
        ],
        onSelect: ($event) => emits("select", $event)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MenubarItemIndicator), { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Circle), { class: "h-2 w-2 fill-curren" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Circle), { class: "h-2 w-2 fill-curren" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode(unref(MenubarItemIndicator), { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, {
                default: withCtx(() => [
                  createVNode(unref(Circle), { class: "h-2 w-2 fill-curren" })
                ]),
                _: 1
              }),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/menubar/MenubarRadioItem.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "MenubarCheckboxItem",
  __ssrInlineRender: true,
  props: {
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["select", "update:checked"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(MenubarCheckboxItem), mergeProps(props, {
        class: [
          unref(cn)(
            "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            props.class
          )
        ],
        "onUpdate:checked": ($event) => emit("update:checked", $event),
        onSelect: ($event) => emit("select", $event)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MenubarItemIndicator), { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Check), { class: "w-4 h-4" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Check), { class: "w-4 h-4" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode(unref(MenubarItemIndicator), { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, {
                default: withCtx(() => [
                  createVNode(unref(Check), { class: "w-4 h-4" })
                ]),
                _: 1
              }),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/menubar/MenubarCheckboxItem.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "MenubarSeparator",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(MenubarSeparator), mergeProps({
        class: unref(cn)("-mx-1 my-1 h-px bg-secondary", (_a = _ctx.$attrs.class) != null ? _a : "")
      }, props, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/menubar/MenubarSeparator.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "MenubarSub",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(MenubarSub), mergeProps(unref(forwarded), _attrs), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/menubar/MenubarSub.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "MenubarSubContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    disableOutsideScroll: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: { default: 2 },
    align: {},
    alignOffset: { default: 0 },
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
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(MenubarPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MenubarSubContent), {
              loop: props.loop,
              "as-child": props.asChild,
              "side-offset": props.sideOffset,
              side: props.side,
              align: props.align,
              "align-offset": props.alignOffset,
              class: unref(cn)(
                "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                props.class
              )
            }, {
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
              createVNode(unref(MenubarSubContent), {
                loop: props.loop,
                "as-child": props.asChild,
                "side-offset": props.sideOffset,
                side: props.side,
                align: props.align,
                "align-offset": props.alignOffset,
                class: unref(cn)(
                  "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                  props.class
                )
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 8, ["loop", "as-child", "side-offset", "side", "align", "align-offset", "class"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/menubar/MenubarSubContent.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "MenubarSubTrigger",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    inset: { type: Boolean },
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(MenubarSubTrigger), mergeProps(props, {
        class: [
          unref(cn)(
            "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
            _ctx.inset && "pl-8",
            props.class
          )
        ]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(unref(ChevronRight), { class: "ml-auto h-4 w-4" }, null, _parent2, _scopeId));
          } else {
            return [
              renderSlot(_ctx.$slots, "default"),
              createVNode(unref(ChevronRight), { class: "ml-auto h-4 w-4" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/menubar/MenubarSubTrigger.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "MenubarTrigger",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(MenubarTrigger), mergeProps(props, {
        class: unref(cn)(
          "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
          props.class
        )
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/menubar/MenubarTrigger.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "MenubarShortcut",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: unref(cn)("text-xxs ml-auto tracking-widest opacity-50", (_a = _ctx.$attrs.class) != null ? _a : "")
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/menubar/MenubarShortcut.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Menu",
  __ssrInlineRender: true,
  setup(__props) {
    const { darkmode, toggleDarkmode } = useDarkmode();
    const emailRef = ref();
    function email() {
      emailRef.value.onOpen();
    }
    function github() {
      (void 0).open("https://github.com/inpiniti");
    }
    function blog() {
      (void 0).open("https://velog.io/@inpiniti/posts");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogEmail = _sfc_main$g;
      const _component_Menubar = _sfc_main$f;
      const _component_MenubarMenu = _sfc_main$c;
      const _component_MenubarTrigger = _sfc_main$4;
      const _component_MenubarContent = _sfc_main$d;
      const _component_MenubarItem = _sfc_main$e;
      const _component_MenubarShortcut = _sfc_main$3;
      const _component_MenubarSeparator = _sfc_main$8;
      const _component_MenubarSub = _sfc_main$7;
      const _component_MenubarSubTrigger = _sfc_main$5;
      const _component_MenubarSubContent = _sfc_main$6;
      const _component_MenubarCheckboxItem = _sfc_main$9;
      const _component_MenubarRadioGroup = _sfc_main$b;
      const _component_MenubarRadioItem = _sfc_main$a;
      const _component_Button = _sfc_main$m;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_DialogEmail, {
        ref_key: "emailRef",
        ref: emailRef
      }, null, _parent));
      _push(ssrRenderComponent(_component_Menubar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-row justify-between w-full"${_scopeId}><div class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MenubarMenu, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MenubarTrigger, { class: "font-bold" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`inpiniti/app`);
                      } else {
                        return [
                          createTextVNode("inpiniti/app")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_MenubarTrigger, { class: "font-bold" }, {
                      default: withCtx(() => [
                        createTextVNode("inpiniti/app")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_MenubarMenu, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MenubarTrigger, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`File`);
                      } else {
                        return [
                          createTextVNode("File")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_MenubarContent, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_MenubarItem, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` New Tab `);
                              _push5(ssrRenderComponent(_component_MenubarShortcut, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u2318T`);
                                  } else {
                                    return [
                                      createTextVNode("\u2318T")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createTextVNode(" New Tab "),
                                createVNode(_component_MenubarShortcut, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u2318T")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_MenubarItem, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` New Window `);
                              _push5(ssrRenderComponent(_component_MenubarShortcut, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u2318N`);
                                  } else {
                                    return [
                                      createTextVNode("\u2318N")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createTextVNode(" New Window "),
                                createVNode(_component_MenubarShortcut, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u2318N")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_MenubarItem, { disabled: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` New Incognito Window `);
                            } else {
                              return [
                                createTextVNode(" New Incognito Window ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_MenubarSeparator, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_MenubarSub, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_MenubarSubTrigger, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Share`);
                                  } else {
                                    return [
                                      createTextVNode("Share")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_MenubarSubContent, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_MenubarItem, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Email link`);
                                        } else {
                                          return [
                                            createTextVNode("Email link")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_MenubarItem, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Messages`);
                                        } else {
                                          return [
                                            createTextVNode("Messages")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_MenubarItem, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Notes`);
                                        } else {
                                          return [
                                            createTextVNode("Notes")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_MenubarItem, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Email link")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_MenubarItem, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Messages")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_MenubarItem, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Notes")
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
                                createVNode(_component_MenubarSubTrigger, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Share")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_MenubarSubContent, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_MenubarItem, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Email link")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_MenubarItem, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Messages")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_MenubarItem, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Notes")
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
                        _push4(ssrRenderComponent(_component_MenubarSeparator, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_MenubarItem, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Print... `);
                              _push5(ssrRenderComponent(_component_MenubarShortcut, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u2318P`);
                                  } else {
                                    return [
                                      createTextVNode("\u2318P")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createTextVNode(" Print... "),
                                createVNode(_component_MenubarShortcut, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u2318P")
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
                          createVNode(_component_MenubarItem, null, {
                            default: withCtx(() => [
                              createTextVNode(" New Tab "),
                              createVNode(_component_MenubarShortcut, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u2318T")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarItem, null, {
                            default: withCtx(() => [
                              createTextVNode(" New Window "),
                              createVNode(_component_MenubarShortcut, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u2318N")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarItem, { disabled: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" New Incognito Window ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarSeparator),
                          createVNode(_component_MenubarSub, null, {
                            default: withCtx(() => [
                              createVNode(_component_MenubarSubTrigger, null, {
                                default: withCtx(() => [
                                  createTextVNode("Share")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_MenubarSubContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_MenubarItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Email link")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_MenubarItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Messages")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_MenubarItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Notes")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarSeparator),
                          createVNode(_component_MenubarItem, null, {
                            default: withCtx(() => [
                              createTextVNode(" Print... "),
                              createVNode(_component_MenubarShortcut, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u2318P")
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
                    createVNode(_component_MenubarTrigger, null, {
                      default: withCtx(() => [
                        createTextVNode("File")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_MenubarContent, null, {
                      default: withCtx(() => [
                        createVNode(_component_MenubarItem, null, {
                          default: withCtx(() => [
                            createTextVNode(" New Tab "),
                            createVNode(_component_MenubarShortcut, null, {
                              default: withCtx(() => [
                                createTextVNode("\u2318T")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MenubarItem, null, {
                          default: withCtx(() => [
                            createTextVNode(" New Window "),
                            createVNode(_component_MenubarShortcut, null, {
                              default: withCtx(() => [
                                createTextVNode("\u2318N")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MenubarItem, { disabled: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" New Incognito Window ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MenubarSeparator),
                        createVNode(_component_MenubarSub, null, {
                          default: withCtx(() => [
                            createVNode(_component_MenubarSubTrigger, null, {
                              default: withCtx(() => [
                                createTextVNode("Share")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_MenubarSubContent, null, {
                              default: withCtx(() => [
                                createVNode(_component_MenubarItem, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Email link")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_MenubarItem, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Messages")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_MenubarItem, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Notes")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MenubarSeparator),
                        createVNode(_component_MenubarItem, null, {
                          default: withCtx(() => [
                            createTextVNode(" Print... "),
                            createVNode(_component_MenubarShortcut, null, {
                              default: withCtx(() => [
                                createTextVNode("\u2318P")
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
            _push2(ssrRenderComponent(_component_MenubarMenu, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MenubarTrigger, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Edit`);
                      } else {
                        return [
                          createTextVNode("Edit")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_MenubarContent, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_MenubarItem, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Undo `);
                              _push5(ssrRenderComponent(_component_MenubarShortcut, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u2318Z`);
                                  } else {
                                    return [
                                      createTextVNode("\u2318Z")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createTextVNode(" Undo "),
                                createVNode(_component_MenubarShortcut, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u2318Z")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_MenubarItem, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Redo `);
                              _push5(ssrRenderComponent(_component_MenubarShortcut, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u21E7\u2318Z`);
                                  } else {
                                    return [
                                      createTextVNode("\u21E7\u2318Z")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createTextVNode(" Redo "),
                                createVNode(_component_MenubarShortcut, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u21E7\u2318Z")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_MenubarSeparator, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_MenubarSub, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_MenubarSubTrigger, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Find`);
                                  } else {
                                    return [
                                      createTextVNode("Find")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_MenubarSubContent, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_MenubarItem, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Search the web`);
                                        } else {
                                          return [
                                            createTextVNode("Search the web")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_MenubarSeparator, null, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_MenubarItem, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Find...`);
                                        } else {
                                          return [
                                            createTextVNode("Find...")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_MenubarItem, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Find Next`);
                                        } else {
                                          return [
                                            createTextVNode("Find Next")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_MenubarItem, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Find Previous`);
                                        } else {
                                          return [
                                            createTextVNode("Find Previous")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_MenubarItem, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Search the web")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_MenubarSeparator),
                                      createVNode(_component_MenubarItem, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Find...")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_MenubarItem, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Find Next")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_MenubarItem, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Find Previous")
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
                                createVNode(_component_MenubarSubTrigger, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Find")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_MenubarSubContent, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_MenubarItem, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Search the web")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_MenubarSeparator),
                                    createVNode(_component_MenubarItem, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Find...")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_MenubarItem, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Find Next")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_MenubarItem, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Find Previous")
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
                        _push4(ssrRenderComponent(_component_MenubarSeparator, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_MenubarItem, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Cut`);
                            } else {
                              return [
                                createTextVNode("Cut")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_MenubarItem, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Copy`);
                            } else {
                              return [
                                createTextVNode("Copy")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_MenubarItem, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Paste`);
                            } else {
                              return [
                                createTextVNode("Paste")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_MenubarItem, null, {
                            default: withCtx(() => [
                              createTextVNode(" Undo "),
                              createVNode(_component_MenubarShortcut, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u2318Z")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarItem, null, {
                            default: withCtx(() => [
                              createTextVNode(" Redo "),
                              createVNode(_component_MenubarShortcut, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u21E7\u2318Z")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarSeparator),
                          createVNode(_component_MenubarSub, null, {
                            default: withCtx(() => [
                              createVNode(_component_MenubarSubTrigger, null, {
                                default: withCtx(() => [
                                  createTextVNode("Find")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_MenubarSubContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_MenubarItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Search the web")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_MenubarSeparator),
                                  createVNode(_component_MenubarItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Find...")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_MenubarItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Find Next")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_MenubarItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Find Previous")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarSeparator),
                          createVNode(_component_MenubarItem, null, {
                            default: withCtx(() => [
                              createTextVNode("Cut")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarItem, null, {
                            default: withCtx(() => [
                              createTextVNode("Copy")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarItem, null, {
                            default: withCtx(() => [
                              createTextVNode("Paste")
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
                    createVNode(_component_MenubarTrigger, null, {
                      default: withCtx(() => [
                        createTextVNode("Edit")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_MenubarContent, null, {
                      default: withCtx(() => [
                        createVNode(_component_MenubarItem, null, {
                          default: withCtx(() => [
                            createTextVNode(" Undo "),
                            createVNode(_component_MenubarShortcut, null, {
                              default: withCtx(() => [
                                createTextVNode("\u2318Z")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MenubarItem, null, {
                          default: withCtx(() => [
                            createTextVNode(" Redo "),
                            createVNode(_component_MenubarShortcut, null, {
                              default: withCtx(() => [
                                createTextVNode("\u21E7\u2318Z")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MenubarSeparator),
                        createVNode(_component_MenubarSub, null, {
                          default: withCtx(() => [
                            createVNode(_component_MenubarSubTrigger, null, {
                              default: withCtx(() => [
                                createTextVNode("Find")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_MenubarSubContent, null, {
                              default: withCtx(() => [
                                createVNode(_component_MenubarItem, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Search the web")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_MenubarSeparator),
                                createVNode(_component_MenubarItem, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Find...")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_MenubarItem, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Find Next")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_MenubarItem, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Find Previous")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MenubarSeparator),
                        createVNode(_component_MenubarItem, null, {
                          default: withCtx(() => [
                            createTextVNode("Cut")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MenubarItem, null, {
                          default: withCtx(() => [
                            createTextVNode("Copy")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MenubarItem, null, {
                          default: withCtx(() => [
                            createTextVNode("Paste")
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
            _push2(ssrRenderComponent(_component_MenubarMenu, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MenubarTrigger, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`View`);
                      } else {
                        return [
                          createTextVNode("View")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_MenubarContent, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_MenubarCheckboxItem, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Always Show Bookmarks Bar`);
                            } else {
                              return [
                                createTextVNode("Always Show Bookmarks Bar")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_MenubarCheckboxItem, { checked: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Always Show Full URLs `);
                            } else {
                              return [
                                createTextVNode(" Always Show Full URLs ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_MenubarSeparator, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_MenubarItem, { inset: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Reload `);
                              _push5(ssrRenderComponent(_component_MenubarShortcut, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u2318R`);
                                  } else {
                                    return [
                                      createTextVNode("\u2318R")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createTextVNode(" Reload "),
                                createVNode(_component_MenubarShortcut, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u2318R")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_MenubarItem, {
                          disabled: "",
                          inset: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Force Reload `);
                              _push5(ssrRenderComponent(_component_MenubarShortcut, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u21E7\u2318R`);
                                  } else {
                                    return [
                                      createTextVNode("\u21E7\u2318R")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createTextVNode(" Force Reload "),
                                createVNode(_component_MenubarShortcut, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u21E7\u2318R")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_MenubarSeparator, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_MenubarItem, { inset: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Toggle Fullscreen `);
                            } else {
                              return [
                                createTextVNode(" Toggle Fullscreen ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_MenubarSeparator, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_MenubarItem, { inset: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Hide Sidebar `);
                            } else {
                              return [
                                createTextVNode(" Hide Sidebar ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_MenubarCheckboxItem, null, {
                            default: withCtx(() => [
                              createTextVNode("Always Show Bookmarks Bar")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarCheckboxItem, { checked: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" Always Show Full URLs ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarSeparator),
                          createVNode(_component_MenubarItem, { inset: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" Reload "),
                              createVNode(_component_MenubarShortcut, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u2318R")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarItem, {
                            disabled: "",
                            inset: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Force Reload "),
                              createVNode(_component_MenubarShortcut, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u21E7\u2318R")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarSeparator),
                          createVNode(_component_MenubarItem, { inset: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" Toggle Fullscreen ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarSeparator),
                          createVNode(_component_MenubarItem, { inset: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" Hide Sidebar ")
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
                    createVNode(_component_MenubarTrigger, null, {
                      default: withCtx(() => [
                        createTextVNode("View")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_MenubarContent, null, {
                      default: withCtx(() => [
                        createVNode(_component_MenubarCheckboxItem, null, {
                          default: withCtx(() => [
                            createTextVNode("Always Show Bookmarks Bar")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MenubarCheckboxItem, { checked: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" Always Show Full URLs ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MenubarSeparator),
                        createVNode(_component_MenubarItem, { inset: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" Reload "),
                            createVNode(_component_MenubarShortcut, null, {
                              default: withCtx(() => [
                                createTextVNode("\u2318R")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MenubarItem, {
                          disabled: "",
                          inset: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Force Reload "),
                            createVNode(_component_MenubarShortcut, null, {
                              default: withCtx(() => [
                                createTextVNode("\u21E7\u2318R")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MenubarSeparator),
                        createVNode(_component_MenubarItem, { inset: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" Toggle Fullscreen ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MenubarSeparator),
                        createVNode(_component_MenubarItem, { inset: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" Hide Sidebar ")
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
            _push2(ssrRenderComponent(_component_MenubarMenu, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MenubarTrigger, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\uB9CC\uB4E0\uC0AC\uB78C`);
                      } else {
                        return [
                          createTextVNode("\uB9CC\uB4E0\uC0AC\uB78C")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_MenubarContent, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_MenubarRadioGroup, { value: "benoit" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_MenubarRadioItem, {
                                value: "andy",
                                onClick: email
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \uC774\uBA54\uC77C `);
                                  } else {
                                    return [
                                      createTextVNode(" \uC774\uBA54\uC77C ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_MenubarRadioItem, {
                                value: "benoit",
                                onClick: github
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` github `);
                                  } else {
                                    return [
                                      createTextVNode(" github ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_MenubarRadioItem, {
                                value: "Luis",
                                onClick: blog
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` blog `);
                                  } else {
                                    return [
                                      createTextVNode(" blog ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_MenubarRadioItem, {
                                  value: "andy",
                                  onClick: email
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \uC774\uBA54\uC77C ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_MenubarRadioItem, {
                                  value: "benoit",
                                  onClick: github
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" github ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_MenubarRadioItem, {
                                  value: "Luis",
                                  onClick: blog
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" blog ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_MenubarSeparator, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_MenubarItem, { inset: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Edit... `);
                            } else {
                              return [
                                createTextVNode(" Edit... ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_MenubarSeparator, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_MenubarItem, { inset: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Add Profile... `);
                            } else {
                              return [
                                createTextVNode(" Add Profile... ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_MenubarRadioGroup, { value: "benoit" }, {
                            default: withCtx(() => [
                              createVNode(_component_MenubarRadioItem, {
                                value: "andy",
                                onClick: email
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \uC774\uBA54\uC77C ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_MenubarRadioItem, {
                                value: "benoit",
                                onClick: github
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" github ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_MenubarRadioItem, {
                                value: "Luis",
                                onClick: blog
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" blog ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarSeparator),
                          createVNode(_component_MenubarItem, { inset: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" Edit... ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarSeparator),
                          createVNode(_component_MenubarItem, { inset: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" Add Profile... ")
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
                    createVNode(_component_MenubarTrigger, null, {
                      default: withCtx(() => [
                        createTextVNode("\uB9CC\uB4E0\uC0AC\uB78C")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_MenubarContent, null, {
                      default: withCtx(() => [
                        createVNode(_component_MenubarRadioGroup, { value: "benoit" }, {
                          default: withCtx(() => [
                            createVNode(_component_MenubarRadioItem, {
                              value: "andy",
                              onClick: email
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \uC774\uBA54\uC77C ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_MenubarRadioItem, {
                              value: "benoit",
                              onClick: github
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" github ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_MenubarRadioItem, {
                              value: "Luis",
                              onClick: blog
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" blog ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MenubarSeparator),
                        createVNode(_component_MenubarItem, { inset: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" Edit... ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MenubarSeparator),
                        createVNode(_component_MenubarItem, { inset: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" Add Profile... ")
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
            _push2(`</div><div class="flex items-center justify-center pr-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MenubarMenu, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center space-x-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Button, {
                    class: "w-10",
                    variant: "ghost",
                    onClick: unref(toggleDarkmode)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(darkmode)) {
                          _push4(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "moon"] }, null, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(_component_font_awesome_icon, { icon: ["far", "sun"] }, null, _parent4, _scopeId3));
                        }
                      } else {
                        return [
                          unref(darkmode) ? (openBlock(), createBlock(_component_font_awesome_icon, {
                            key: 0,
                            icon: ["fas", "moon"]
                          })) : (openBlock(), createBlock(_component_font_awesome_icon, {
                            key: 1,
                            icon: ["far", "sun"]
                          }))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center space-x-2" }, [
                      createVNode(_component_Button, {
                        class: "w-10",
                        variant: "ghost",
                        onClick: unref(toggleDarkmode)
                      }, {
                        default: withCtx(() => [
                          unref(darkmode) ? (openBlock(), createBlock(_component_font_awesome_icon, {
                            key: 0,
                            icon: ["fas", "moon"]
                          })) : (openBlock(), createBlock(_component_font_awesome_icon, {
                            key: 1,
                            icon: ["far", "sun"]
                          }))
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-row justify-between w-full" }, [
                createVNode("div", { class: "flex" }, [
                  createVNode(_component_MenubarMenu, null, {
                    default: withCtx(() => [
                      createVNode(_component_MenubarTrigger, { class: "font-bold" }, {
                        default: withCtx(() => [
                          createTextVNode("inpiniti/app")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_MenubarMenu, null, {
                    default: withCtx(() => [
                      createVNode(_component_MenubarTrigger, null, {
                        default: withCtx(() => [
                          createTextVNode("File")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_MenubarContent, null, {
                        default: withCtx(() => [
                          createVNode(_component_MenubarItem, null, {
                            default: withCtx(() => [
                              createTextVNode(" New Tab "),
                              createVNode(_component_MenubarShortcut, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u2318T")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarItem, null, {
                            default: withCtx(() => [
                              createTextVNode(" New Window "),
                              createVNode(_component_MenubarShortcut, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u2318N")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarItem, { disabled: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" New Incognito Window ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarSeparator),
                          createVNode(_component_MenubarSub, null, {
                            default: withCtx(() => [
                              createVNode(_component_MenubarSubTrigger, null, {
                                default: withCtx(() => [
                                  createTextVNode("Share")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_MenubarSubContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_MenubarItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Email link")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_MenubarItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Messages")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_MenubarItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Notes")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarSeparator),
                          createVNode(_component_MenubarItem, null, {
                            default: withCtx(() => [
                              createTextVNode(" Print... "),
                              createVNode(_component_MenubarShortcut, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u2318P")
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
                  }),
                  createVNode(_component_MenubarMenu, null, {
                    default: withCtx(() => [
                      createVNode(_component_MenubarTrigger, null, {
                        default: withCtx(() => [
                          createTextVNode("Edit")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_MenubarContent, null, {
                        default: withCtx(() => [
                          createVNode(_component_MenubarItem, null, {
                            default: withCtx(() => [
                              createTextVNode(" Undo "),
                              createVNode(_component_MenubarShortcut, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u2318Z")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarItem, null, {
                            default: withCtx(() => [
                              createTextVNode(" Redo "),
                              createVNode(_component_MenubarShortcut, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u21E7\u2318Z")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarSeparator),
                          createVNode(_component_MenubarSub, null, {
                            default: withCtx(() => [
                              createVNode(_component_MenubarSubTrigger, null, {
                                default: withCtx(() => [
                                  createTextVNode("Find")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_MenubarSubContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_MenubarItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Search the web")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_MenubarSeparator),
                                  createVNode(_component_MenubarItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Find...")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_MenubarItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Find Next")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_MenubarItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Find Previous")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarSeparator),
                          createVNode(_component_MenubarItem, null, {
                            default: withCtx(() => [
                              createTextVNode("Cut")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarItem, null, {
                            default: withCtx(() => [
                              createTextVNode("Copy")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarItem, null, {
                            default: withCtx(() => [
                              createTextVNode("Paste")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_MenubarMenu, null, {
                    default: withCtx(() => [
                      createVNode(_component_MenubarTrigger, null, {
                        default: withCtx(() => [
                          createTextVNode("View")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_MenubarContent, null, {
                        default: withCtx(() => [
                          createVNode(_component_MenubarCheckboxItem, null, {
                            default: withCtx(() => [
                              createTextVNode("Always Show Bookmarks Bar")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarCheckboxItem, { checked: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" Always Show Full URLs ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarSeparator),
                          createVNode(_component_MenubarItem, { inset: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" Reload "),
                              createVNode(_component_MenubarShortcut, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u2318R")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarItem, {
                            disabled: "",
                            inset: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Force Reload "),
                              createVNode(_component_MenubarShortcut, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u21E7\u2318R")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarSeparator),
                          createVNode(_component_MenubarItem, { inset: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" Toggle Fullscreen ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarSeparator),
                          createVNode(_component_MenubarItem, { inset: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" Hide Sidebar ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_MenubarMenu, null, {
                    default: withCtx(() => [
                      createVNode(_component_MenubarTrigger, null, {
                        default: withCtx(() => [
                          createTextVNode("\uB9CC\uB4E0\uC0AC\uB78C")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_MenubarContent, null, {
                        default: withCtx(() => [
                          createVNode(_component_MenubarRadioGroup, { value: "benoit" }, {
                            default: withCtx(() => [
                              createVNode(_component_MenubarRadioItem, {
                                value: "andy",
                                onClick: email
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \uC774\uBA54\uC77C ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_MenubarRadioItem, {
                                value: "benoit",
                                onClick: github
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" github ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_MenubarRadioItem, {
                                value: "Luis",
                                onClick: blog
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" blog ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarSeparator),
                          createVNode(_component_MenubarItem, { inset: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" Edit... ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarSeparator),
                          createVNode(_component_MenubarItem, { inset: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" Add Profile... ")
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
                createVNode("div", { class: "flex items-center justify-center pr-4" }, [
                  createVNode(_component_MenubarMenu, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center space-x-2" }, [
                        createVNode(_component_Button, {
                          class: "w-10",
                          variant: "ghost",
                          onClick: unref(toggleDarkmode)
                        }, {
                          default: withCtx(() => [
                            unref(darkmode) ? (openBlock(), createBlock(_component_font_awesome_icon, {
                              key: 0,
                              icon: ["fas", "moon"]
                            })) : (openBlock(), createBlock(_component_font_awesome_icon, {
                              key: 1,
                              icon: ["far", "sun"]
                            }))
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ]),
                    _: 1
                  })
                ])
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/Menu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Side",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Button = _sfc_main$m;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-56" }, _attrs))}><div class="space-y-4 py-4"><div class="px-3 py-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="mb-2 px-4 text-lg font-semibold tracking-tight"${_scopeId}>\uB9CC\uD654\uCC45</h2>`);
          } else {
            return [
              createVNode("h2", { class: "mb-2 px-4 text-lg font-semibold tracking-tight" }, "\uB9CC\uD654\uCC45")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="space-y-1">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/book/list" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, {
              variant: unref(route).path == "/book/list" ? `secondary` : `ghost`,
              class: "w-full justify-start"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="mr-2 h-4 w-4"${_scopeId2}><circle cx="12" cy="12" r="10"${_scopeId2}></circle><polygon points="10 8 16 12 10 16 10 8"${_scopeId2}></polygon></svg> \uBAA9\uB85D `);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      class: "mr-2 h-4 w-4"
                    }, [
                      createVNode("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10"
                      }),
                      createVNode("polygon", { points: "10 8 16 12 10 16 10 8" })
                    ])),
                    createTextVNode(" \uBAA9\uB85D ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Button, {
                variant: unref(route).path == "/book/list" ? `secondary` : `ghost`,
                class: "w-full justify-start"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    class: "mr-2 h-4 w-4"
                  }, [
                    createVNode("circle", {
                      cx: "12",
                      cy: "12",
                      r: "10"
                    }),
                    createVNode("polygon", { points: "10 8 16 12 10 16 10 8" })
                  ])),
                  createTextVNode(" \uBAA9\uB85D ")
                ]),
                _: 1
              }, 8, ["variant"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/book/chart" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, {
              variant: unref(route).path == "/book/chart" ? `secondary` : `ghost`,
              class: "w-full justify-start"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="mr-2 h-4 w-4"${_scopeId2}><rect width="7" height="7" x="3" y="3" rx="1"${_scopeId2}></rect><rect width="7" height="7" x="14" y="3" rx="1"${_scopeId2}></rect><rect width="7" height="7" x="14" y="14" rx="1"${_scopeId2}></rect><rect width="7" height="7" x="3" y="14" rx="1"${_scopeId2}></rect></svg> \uCC28\uD2B8 `);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      class: "mr-2 h-4 w-4"
                    }, [
                      createVNode("rect", {
                        width: "7",
                        height: "7",
                        x: "3",
                        y: "3",
                        rx: "1"
                      }),
                      createVNode("rect", {
                        width: "7",
                        height: "7",
                        x: "14",
                        y: "3",
                        rx: "1"
                      }),
                      createVNode("rect", {
                        width: "7",
                        height: "7",
                        x: "14",
                        y: "14",
                        rx: "1"
                      }),
                      createVNode("rect", {
                        width: "7",
                        height: "7",
                        x: "3",
                        y: "14",
                        rx: "1"
                      })
                    ])),
                    createTextVNode(" \uCC28\uD2B8 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Button, {
                variant: unref(route).path == "/book/chart" ? `secondary` : `ghost`,
                class: "w-full justify-start"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    class: "mr-2 h-4 w-4"
                  }, [
                    createVNode("rect", {
                      width: "7",
                      height: "7",
                      x: "3",
                      y: "3",
                      rx: "1"
                    }),
                    createVNode("rect", {
                      width: "7",
                      height: "7",
                      x: "14",
                      y: "3",
                      rx: "1"
                    }),
                    createVNode("rect", {
                      width: "7",
                      height: "7",
                      x: "14",
                      y: "14",
                      rx: "1"
                    }),
                    createVNode("rect", {
                      width: "7",
                      height: "7",
                      x: "3",
                      y: "14",
                      rx: "1"
                    })
                  ])),
                  createTextVNode(" \uCC28\uD2B8 ")
                ]),
                _: 1
              }, 8, ["variant"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/book/board" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, {
              variant: unref(route).path == "/book/board" ? `secondary` : `ghost`,
              class: "w-full justify-start"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="mr-2 h-4 w-4"${_scopeId2}><rect width="7" height="7" x="3" y="3" rx="1"${_scopeId2}></rect><rect width="7" height="7" x="14" y="3" rx="1"${_scopeId2}></rect><rect width="7" height="7" x="14" y="14" rx="1"${_scopeId2}></rect><rect width="7" height="7" x="3" y="14" rx="1"${_scopeId2}></rect></svg> \uAC8C\uC2DC\uD310 `);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      class: "mr-2 h-4 w-4"
                    }, [
                      createVNode("rect", {
                        width: "7",
                        height: "7",
                        x: "3",
                        y: "3",
                        rx: "1"
                      }),
                      createVNode("rect", {
                        width: "7",
                        height: "7",
                        x: "14",
                        y: "3",
                        rx: "1"
                      }),
                      createVNode("rect", {
                        width: "7",
                        height: "7",
                        x: "14",
                        y: "14",
                        rx: "1"
                      }),
                      createVNode("rect", {
                        width: "7",
                        height: "7",
                        x: "3",
                        y: "14",
                        rx: "1"
                      })
                    ])),
                    createTextVNode(" \uAC8C\uC2DC\uD310 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Button, {
                variant: unref(route).path == "/book/board" ? `secondary` : `ghost`,
                class: "w-full justify-start"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    class: "mr-2 h-4 w-4"
                  }, [
                    createVNode("rect", {
                      width: "7",
                      height: "7",
                      x: "3",
                      y: "3",
                      rx: "1"
                    }),
                    createVNode("rect", {
                      width: "7",
                      height: "7",
                      x: "14",
                      y: "3",
                      rx: "1"
                    }),
                    createVNode("rect", {
                      width: "7",
                      height: "7",
                      x: "14",
                      y: "14",
                      rx: "1"
                    }),
                    createVNode("rect", {
                      width: "7",
                      height: "7",
                      x: "3",
                      y: "14",
                      rx: "1"
                    })
                  ])),
                  createTextVNode(" \uAC8C\uC2DC\uD310 ")
                ]),
                _: 1
              }, 8, ["variant"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="px-3 py-2"><h2 class="mb-2 px-4 text-lg font-semibold tracking-tight">\uC8FC\uC2DD</h2><div class="space-y-1">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/stock/list" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, {
              variant: unref(route).path == "/stock/list" ? `secondary` : `ghost`,
              class: "w-full justify-start"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="mr-2 h-4 w-4"${_scopeId2}><path d="M21 15V6"${_scopeId2}></path><path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"${_scopeId2}></path><path d="M12 12H3"${_scopeId2}></path><path d="M16 6H3"${_scopeId2}></path><path d="M12 18H3"${_scopeId2}></path></svg> \uC218\uC9D1 \uB370\uC774\uD130 `);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      class: "mr-2 h-4 w-4"
                    }, [
                      createVNode("path", { d: "M21 15V6" }),
                      createVNode("path", { d: "M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" }),
                      createVNode("path", { d: "M12 12H3" }),
                      createVNode("path", { d: "M16 6H3" }),
                      createVNode("path", { d: "M12 18H3" })
                    ])),
                    createTextVNode(" \uC218\uC9D1 \uB370\uC774\uD130 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Button, {
                variant: unref(route).path == "/stock/list" ? `secondary` : `ghost`,
                class: "w-full justify-start"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    class: "mr-2 h-4 w-4"
                  }, [
                    createVNode("path", { d: "M21 15V6" }),
                    createVNode("path", { d: "M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" }),
                    createVNode("path", { d: "M12 12H3" }),
                    createVNode("path", { d: "M16 6H3" }),
                    createVNode("path", { d: "M12 18H3" })
                  ])),
                  createTextVNode(" \uC218\uC9D1 \uB370\uC774\uD130 ")
                ]),
                _: 1
              }, 8, ["variant"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/stock/learning" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, {
              variant: unref(route).path == "/stock/learning" ? `secondary` : `ghost`,
              class: "w-full justify-start"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="mr-2 h-4 w-4"${_scopeId2}><circle cx="8" cy="18" r="4"${_scopeId2}></circle><path d="M12 18V2l7 4"${_scopeId2}></path></svg> \uD559\uC2B5 \uBAA8\uB378 `);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      class: "mr-2 h-4 w-4"
                    }, [
                      createVNode("circle", {
                        cx: "8",
                        cy: "18",
                        r: "4"
                      }),
                      createVNode("path", { d: "M12 18V2l7 4" })
                    ])),
                    createTextVNode(" \uD559\uC2B5 \uBAA8\uB378 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Button, {
                variant: unref(route).path == "/stock/learning" ? `secondary` : `ghost`,
                class: "w-full justify-start"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    class: "mr-2 h-4 w-4"
                  }, [
                    createVNode("circle", {
                      cx: "8",
                      cy: "18",
                      r: "4"
                    }),
                    createVNode("path", { d: "M12 18V2l7 4" })
                  ])),
                  createTextVNode(" \uD559\uC2B5 \uBAA8\uB378 ")
                ]),
                _: 1
              }, 8, ["variant"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/stock/prediction" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, {
              variant: unref(route).path == "/stock/prediction" ? `secondary` : `ghost`,
              class: "w-full justify-start"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="mr-2 h-4 w-4"${_scopeId2}><path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"${_scopeId2}></path><circle cx="17" cy="7" r="5"${_scopeId2}></circle></svg> \uC608\uCE21 `);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      class: "mr-2 h-4 w-4"
                    }, [
                      createVNode("path", { d: "m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" }),
                      createVNode("circle", {
                        cx: "17",
                        cy: "7",
                        r: "5"
                      })
                    ])),
                    createTextVNode(" \uC608\uCE21 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Button, {
                variant: unref(route).path == "/stock/prediction" ? `secondary` : `ghost`,
                class: "w-full justify-start"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    class: "mr-2 h-4 w-4"
                  }, [
                    createVNode("path", { d: "m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" }),
                    createVNode("circle", {
                      cx: "17",
                      cy: "7",
                      r: "5"
                    })
                  ])),
                  createTextVNode(" \uC608\uCE21 ")
                ]),
                _: 1
              }, 8, ["variant"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/Side.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LayoutsMenu = _sfc_main$2;
  const _component_LayoutsSide = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-1 p-1 h-screen overflow-hidden" }, _attrs))}><div class="shrink-0">`);
  _push(ssrRenderComponent(_component_LayoutsMenu, null, null, _parent));
  _push(`</div><div class="flex gap-1 grow-[1] overflow-hidden">`);
  _push(ssrRenderComponent(_component_LayoutsSide, { class: "shrink-0" }, null, _parent));
  _push(`<div class="rounded-md border grow-[1] overflow-y-scroll">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-gVVKDPgZ.mjs.map
