import { _ as _sfc_main$1 } from './Separator-SzPKFLHH.mjs';
import { _ as _sfc_main$2 } from './index-VljijB2M.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$3, b as _sfc_main$1$1 } from './TabsList-76hBfA3R.mjs';
import { _ as _sfc_main$4 } from './TabsContent-TJ4DkLwy.mjs';
import { unref, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { u as useSelectedBook } from './useBooks-AfFfZ3pm.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import 'radix-vue';
import '../server.mjs';
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
import 'lucide-vue-next';
import './useSupabase-vnVKN2Il.mjs';
import './state-0C5oRJ7z.mjs';
import '@vueuse/core';

const _sfc_main = {
  __name: "book",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedBook = useSelectedBook();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Separator = _sfc_main$1;
      const _component_Button = _sfc_main$2;
      const _component_Tabs = _sfc_main$2$1;
      const _component_TabsList = _sfc_main$3;
      const _component_TabsTrigger = _sfc_main$1$1;
      const _component_TabsContent = _sfc_main$4;
      if (unref(selectedBook).kr) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><div class="flex justify-center"><div class="grid-cols-2 grid min-w-[600px] max-w-[600px]"><div class="p-5"><img${ssrRenderAttr("src", unref(selectedBook).img)}></div><div class="flex flex-col p-5 border-l"><div class="text-lg font-semibold">\uC8FC\uC220\uD68C\uC804 \uACF5\uC2DD \uD32C\uBD81 \uB9CC\uD654 \uCC45</div><div class="flex text-xl justify-end items-center gap-2 font-bold"><div class="text-neutral-400 line-through">9,000\uC6D0</div><div class="text-2xl">8,550\uC6D0</div></div>`);
        _push(ssrRenderComponent(_component_Separator, { class: "my-4" }, null, _parent));
        _push(`<div class="text-sm"><div>\uD0DD\uBC30\uBC30\uC1A1 <span class="text-neutral-200">|</span> \uBB34\uB8CC\uBC30\uC1A1 \uC6B0\uCCB4\uAD6D\uD0DD\uBC30</div><div class="text-neutral-400">\uC81C\uC8FC, \uB3C4\uC11C\uC9C0\uC5ED \uCD94\uAC00 6,000\uC6D0</div></div>`);
        _push(ssrRenderComponent(_component_Separator, { class: "my-4" }, null, _parent));
        _push(`<div>\uC218\uB7C9</div><div class="flex items-end justify-between"><div class="flex border w-fit"><div class="bg-neutral-200 py-2 px-4">-</div><div class="py-2 px-4">1</div><div class="bg-neutral-200 py-2 px-4">+</div></div><div>8,500\uC6D0</div></div>`);
        _push(ssrRenderComponent(_component_Separator, { class: "my-4" }, null, _parent));
        _push(`<div class="flex items-center justify-between pb-4"><div class="text-sm font-bold">\uCD1D \uC0C1\uD488 \uAE08\uC561</div><div class="flex gap-2 items-center"><div class="text-sm text-neutral-400">\uCD1D \uC218\uB7C9 1\uAC1C</div><div class="text-2xl text-red-400 font-bold">8,550\uC6D0</div></div></div><div class="flex flex-col gap-2"><div>`);
        _push(ssrRenderComponent(_component_Button, {
          size: "lg",
          class: "w-full"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\uAD6C\uB9E4\uD558\uAE30`);
            } else {
              return [
                createTextVNode("\uAD6C\uB9E4\uD558\uAE30")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="flex gap-2"><div class="flex-1">`);
        _push(ssrRenderComponent(_component_Button, {
          variant: "secondary",
          class: "w-full"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\uCC1C\uD558\uAE30`);
            } else {
              return [
                createTextVNode("\uCC1C\uD558\uAE30")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="flex-1">`);
        _push(ssrRenderComponent(_component_Button, {
          variant: "outline",
          class: "w-full"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\uC7A5\uBC14\uAD6C\uB2C8`);
            } else {
              return [
                createTextVNode("\uC7A5\uBC14\uAD6C\uB2C8")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div></div></div><div class="border-t flex justify-center"><div class="w-full">`);
        _push(ssrRenderComponent(_component_Tabs, { "default-value": "book" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex justify-center"${_scopeId}><div class="p-2 px-5 min-w-[600px] max-w-[600px]"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_TabsList, { class: "w-full" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_TabsTrigger, {
                      value: "book",
                      class: "text-zinc-600 dark:text-zinc-200"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \uC0C1\uC138\uC815\uBCF4 `);
                        } else {
                          return [
                            createTextVNode(" \uC0C1\uC138\uC815\uBCF4 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TabsTrigger, {
                      value: "music",
                      class: "text-zinc-600 dark:text-zinc-200"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \uB9AC\uBDF0 0 `);
                        } else {
                          return [
                            createTextVNode(" \uB9AC\uBDF0 0 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TabsTrigger, {
                      value: "board",
                      class: "text-zinc-600 dark:text-zinc-200"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Q&amp;A 0 `);
                        } else {
                          return [
                            createTextVNode(" Q&A 0 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TabsTrigger, {
                      value: "figure",
                      class: "text-zinc-600 dark:text-zinc-200"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \uBC18\uD488/\uAD50\uD658\uC815\uBCF4 `);
                        } else {
                          return [
                            createTextVNode(" \uBC18\uD488/\uAD50\uD658\uC815\uBCF4 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_TabsTrigger, {
                        value: "book",
                        class: "text-zinc-600 dark:text-zinc-200"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC0C1\uC138\uC815\uBCF4 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TabsTrigger, {
                        value: "music",
                        class: "text-zinc-600 dark:text-zinc-200"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uB9AC\uBDF0 0 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TabsTrigger, {
                        value: "board",
                        class: "text-zinc-600 dark:text-zinc-200"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Q&A 0 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TabsTrigger, {
                        value: "figure",
                        class: "text-zinc-600 dark:text-zinc-200"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uBC18\uD488/\uAD50\uD658\uC815\uBCF4 ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
              _push2(ssrRenderComponent(_component_Separator, { class: "mb-2" }, null, _parent2, _scopeId));
              _push2(`<div class="grow-[0] overflow-hidden flex flex-col p-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_TabsContent, {
                value: "book",
                class: "m-0 overflow-hidden"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \uC0C1\uC138\uC815\uBCF4 `);
                  } else {
                    return [
                      createTextVNode(" \uC0C1\uC138\uC815\uBCF4 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_TabsContent, {
                value: "music",
                class: "m-0 overflow-hidden"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \uB9AC\uBDF0 0 `);
                  } else {
                    return [
                      createTextVNode(" \uB9AC\uBDF0 0 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_TabsContent, {
                value: "board",
                class: "m-0 overflow-hidden"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Q&amp;A 0 `);
                  } else {
                    return [
                      createTextVNode(" Q&A 0 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_TabsContent, {
                value: "figure",
                class: "m-0 overflow-hidden"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \uBC18\uD488/\uAD50\uD658\uC815\uBCF4 `);
                  } else {
                    return [
                      createTextVNode(" \uBC18\uD488/\uAD50\uD658\uC815\uBCF4 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex justify-center" }, [
                  createVNode("div", { class: "p-2 px-5 min-w-[600px] max-w-[600px]" }, [
                    createVNode(_component_TabsList, { class: "w-full" }, {
                      default: withCtx(() => [
                        createVNode(_component_TabsTrigger, {
                          value: "book",
                          class: "text-zinc-600 dark:text-zinc-200"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uC0C1\uC138\uC815\uBCF4 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TabsTrigger, {
                          value: "music",
                          class: "text-zinc-600 dark:text-zinc-200"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uB9AC\uBDF0 0 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TabsTrigger, {
                          value: "board",
                          class: "text-zinc-600 dark:text-zinc-200"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Q&A 0 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TabsTrigger, {
                          value: "figure",
                          class: "text-zinc-600 dark:text-zinc-200"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uBC18\uD488/\uAD50\uD658\uC815\uBCF4 ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode(_component_Separator, { class: "mb-2" }),
                createVNode("div", { class: "grow-[0] overflow-hidden flex flex-col p-2" }, [
                  createVNode(_component_TabsContent, {
                    value: "book",
                    class: "m-0 overflow-hidden"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \uC0C1\uC138\uC815\uBCF4 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TabsContent, {
                    value: "music",
                    class: "m-0 overflow-hidden"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \uB9AC\uBDF0 0 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TabsContent, {
                    value: "board",
                    class: "m-0 overflow-hidden"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Q&A 0 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TabsContent, {
                    value: "figure",
                    class: "m-0 overflow-hidden"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \uBC18\uD488/\uAD50\uD658\uC815\uBCF4 ")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/book.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=book-heJGCx_-.mjs.map
