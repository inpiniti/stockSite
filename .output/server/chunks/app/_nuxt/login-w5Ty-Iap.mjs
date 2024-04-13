import { _ as _sfc_main$2 } from './Card-DmnhLAzz.mjs';
import { _ as _sfc_main$3, a as _sfc_main$2$1, b as _sfc_main$1$1, c as _sfc_main$4 } from './CardContent-Ik0SebIz.mjs';
import { useSSRContext, defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, openBlock, createBlock, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { b as cn } from '../server.mjs';
import { _ as _sfc_main$5 } from './index-3M1ek3yg.mjs';
import { _ as _sfc_main$6 } from './Label--5nwJFB5.mjs';
import { _ as _sfc_main$7 } from './Input-SV5XZJM8.mjs';
import { u as useSupabase } from './useSupabase-4R9Br0h-.mjs';
import { u as useAuth } from './useAuth-CAZhKivd.mjs';
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
import 'class-variance-authority';
import 'radix-vue';
import 'clsx';
import 'tailwind-merge';
import 'lucide-vue-next';
import '@vueuse/core';
import './state-JJ2SDzd5.mjs';
import '@supabase/supabase-js';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CardFooter",
  __ssrInlineRender: true,
  props: {
    class: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("p-6 pt-0", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/card/CardFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    async function kakao() {
      const { data: kakao2, error } = await useSupabase().value.auth.signInWithOAuth(
        {
          provider: "kakao"
        }
      );
      useAuth().value = kakao2;
      useAuth().value = await useSupabase().value.auth.getUser();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Container = resolveComponent("Container");
      const _component_Card = _sfc_main$2;
      const _component_CardHeader = _sfc_main$3;
      const _component_CardTitle = _sfc_main$2$1;
      const _component_CardDescription = _sfc_main$1$1;
      const _component_CardContent = _sfc_main$4;
      const _component_Button = _sfc_main$5;
      const _component_Label = _sfc_main$6;
      const _component_Input = _sfc_main$7;
      const _component_CardFooter = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-screen flex items-center justify-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Container, { class: "w-fit" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Card, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardHeader, { class: "space-y-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_CardTitle, { class: "text-2xl" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Create an account `);
                            } else {
                              return [
                                createTextVNode(" Create an account ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_CardDescription, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Enter your email below to create your account `);
                            } else {
                              return [
                                createTextVNode(" Enter your email below to create your account ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_CardTitle, { class: "text-2xl" }, {
                            default: withCtx(() => [
                              createTextVNode(" Create an account ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_CardDescription, null, {
                            default: withCtx(() => [
                              createTextVNode(" Enter your email below to create your account ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_CardContent, { class: "grid gap-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="grid grid-cols-2 gap-6"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Button, {
                          variant: "outline",
                          onClick: kakao
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Kakao `);
                            } else {
                              return [
                                createTextVNode(" Kakao ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Button, { variant: "outline" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<svg role="img" viewBox="0 0 24 24" class="mr-2 h-4 w-4"${_scopeId4}><path fill="currentColor" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"${_scopeId4}></path></svg> Google `);
                            } else {
                              return [
                                (openBlock(), createBlock("svg", {
                                  role: "img",
                                  viewBox: "0 0 24 24",
                                  class: "mr-2 h-4 w-4"
                                }, [
                                  createVNode("path", {
                                    fill: "currentColor",
                                    d: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                  })
                                ])),
                                createTextVNode(" Google ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="relative"${_scopeId3}><div class="absolute inset-0 flex items-center"${_scopeId3}><span class="w-full border-t"${_scopeId3}></span></div><div class="relative flex justify-center text-xs uppercase"${_scopeId3}><span class="bg-background px-2 text-muted-foreground"${_scopeId3}> Or continue with </span></div></div><div class="grid gap-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Label, { for: "email" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Email`);
                            } else {
                              return [
                                createTextVNode("Email")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Input, {
                          id: "email",
                          type: "email",
                          placeholder: "m@example.com"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="grid gap-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Label, { for: "password" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Password`);
                            } else {
                              return [
                                createTextVNode("Password")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Input, {
                          id: "password",
                          type: "password"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "grid grid-cols-2 gap-6" }, [
                            createVNode(_component_Button, {
                              variant: "outline",
                              onClick: kakao
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Kakao ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_Button, { variant: "outline" }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  role: "img",
                                  viewBox: "0 0 24 24",
                                  class: "mr-2 h-4 w-4"
                                }, [
                                  createVNode("path", {
                                    fill: "currentColor",
                                    d: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                  })
                                ])),
                                createTextVNode(" Google ")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "relative" }, [
                            createVNode("div", { class: "absolute inset-0 flex items-center" }, [
                              createVNode("span", { class: "w-full border-t" })
                            ]),
                            createVNode("div", { class: "relative flex justify-center text-xs uppercase" }, [
                              createVNode("span", { class: "bg-background px-2 text-muted-foreground" }, " Or continue with ")
                            ])
                          ]),
                          createVNode("div", { class: "grid gap-2" }, [
                            createVNode(_component_Label, { for: "email" }, {
                              default: withCtx(() => [
                                createTextVNode("Email")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_Input, {
                              id: "email",
                              type: "email",
                              placeholder: "m@example.com"
                            })
                          ]),
                          createVNode("div", { class: "grid gap-2" }, [
                            createVNode(_component_Label, { for: "password" }, {
                              default: withCtx(() => [
                                createTextVNode("Password")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_Input, {
                              id: "password",
                              type: "password"
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_CardFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Button, { class: "w-full" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Create account `);
                            } else {
                              return [
                                createTextVNode(" Create account ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Button, { class: "w-full" }, {
                            default: withCtx(() => [
                              createTextVNode(" Create account ")
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
                    createVNode(_component_CardHeader, { class: "space-y-1" }, {
                      default: withCtx(() => [
                        createVNode(_component_CardTitle, { class: "text-2xl" }, {
                          default: withCtx(() => [
                            createTextVNode(" Create an account ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_CardDescription, null, {
                          default: withCtx(() => [
                            createTextVNode(" Enter your email below to create your account ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_CardContent, { class: "grid gap-4" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "grid grid-cols-2 gap-6" }, [
                          createVNode(_component_Button, {
                            variant: "outline",
                            onClick: kakao
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Kakao ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Button, { variant: "outline" }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                role: "img",
                                viewBox: "0 0 24 24",
                                class: "mr-2 h-4 w-4"
                              }, [
                                createVNode("path", {
                                  fill: "currentColor",
                                  d: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                })
                              ])),
                              createTextVNode(" Google ")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode("div", { class: "absolute inset-0 flex items-center" }, [
                            createVNode("span", { class: "w-full border-t" })
                          ]),
                          createVNode("div", { class: "relative flex justify-center text-xs uppercase" }, [
                            createVNode("span", { class: "bg-background px-2 text-muted-foreground" }, " Or continue with ")
                          ])
                        ]),
                        createVNode("div", { class: "grid gap-2" }, [
                          createVNode(_component_Label, { for: "email" }, {
                            default: withCtx(() => [
                              createTextVNode("Email")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Input, {
                            id: "email",
                            type: "email",
                            placeholder: "m@example.com"
                          })
                        ]),
                        createVNode("div", { class: "grid gap-2" }, [
                          createVNode(_component_Label, { for: "password" }, {
                            default: withCtx(() => [
                              createTextVNode("Password")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Input, {
                            id: "password",
                            type: "password"
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_CardFooter, null, {
                      default: withCtx(() => [
                        createVNode(_component_Button, { class: "w-full" }, {
                          default: withCtx(() => [
                            createTextVNode(" Create account ")
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
              createVNode(_component_Card, null, {
                default: withCtx(() => [
                  createVNode(_component_CardHeader, { class: "space-y-1" }, {
                    default: withCtx(() => [
                      createVNode(_component_CardTitle, { class: "text-2xl" }, {
                        default: withCtx(() => [
                          createTextVNode(" Create an account ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_CardDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(" Enter your email below to create your account ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_CardContent, { class: "grid gap-4" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "grid grid-cols-2 gap-6" }, [
                        createVNode(_component_Button, {
                          variant: "outline",
                          onClick: kakao
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Kakao ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Button, { variant: "outline" }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              role: "img",
                              viewBox: "0 0 24 24",
                              class: "mr-2 h-4 w-4"
                            }, [
                              createVNode("path", {
                                fill: "currentColor",
                                d: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                              })
                            ])),
                            createTextVNode(" Google ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode("div", { class: "absolute inset-0 flex items-center" }, [
                          createVNode("span", { class: "w-full border-t" })
                        ]),
                        createVNode("div", { class: "relative flex justify-center text-xs uppercase" }, [
                          createVNode("span", { class: "bg-background px-2 text-muted-foreground" }, " Or continue with ")
                        ])
                      ]),
                      createVNode("div", { class: "grid gap-2" }, [
                        createVNode(_component_Label, { for: "email" }, {
                          default: withCtx(() => [
                            createTextVNode("Email")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          id: "email",
                          type: "email",
                          placeholder: "m@example.com"
                        })
                      ]),
                      createVNode("div", { class: "grid gap-2" }, [
                        createVNode(_component_Label, { for: "password" }, {
                          default: withCtx(() => [
                            createTextVNode("Password")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          id: "password",
                          type: "password"
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_CardFooter, null, {
                    default: withCtx(() => [
                      createVNode(_component_Button, { class: "w-full" }, {
                        default: withCtx(() => [
                          createTextVNode(" Create account ")
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-w5Ty-Iap.mjs.map
