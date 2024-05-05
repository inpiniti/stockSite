import { _ as _sfc_main$4, a as _sfc_main$1, b as _sfc_main$3, c as _sfc_main$2, d as _sfc_main$1$1 } from './DialogContent-gH5cY4B6.mjs';
import { _ as _sfc_main$8 } from './DialogFooter-d_oHvfoT.mjs';
import { _ as _sfc_main$5 } from './Label-qeIRde0b.mjs';
import { _ as _sfc_main$6 } from './Input-eHzHGyo6.mjs';
import { _ as _sfc_main$7 } from './Textarea-wJGe8b5L.mjs';
import { _ as _sfc_main$9 } from './index-VljijB2M.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-ak_YyZbN.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
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
      const _component_Dialog = _sfc_main$4;
      const _component_DialogContent = _sfc_main$1;
      const _component_DialogHeader = _sfc_main$3;
      const _component_DialogTitle = _sfc_main$2;
      const _component_DialogDescription = _sfc_main$1$1;
      const _component_Label = _sfc_main$5;
      const _component_Input = _sfc_main$6;
      const _component_Textarea = _sfc_main$7;
      const _component_DialogFooter = _sfc_main$8;
      const _component_Button = _sfc_main$9;
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dialog/board.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=board-dTBLODiI.mjs.map
