import { _ as _sfc_main$1, a as _sfc_main$2 } from './SheetContent-3AkwZngb.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$3 } from './SheetTitle-3QUDQv0c.mjs';
import { r as replaceDomain } from './book-lQ5h8MvC.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, createVNode, unref, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "boardDetail",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    reply: {}
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Sheet = _sfc_main$1;
      const _component_SheetContent = _sfc_main$2;
      const _component_SheetHeader = _sfc_main$1$1;
      const _component_SheetTitle = _sfc_main$3;
      _push(ssrRenderComponent(_component_Sheet, mergeProps({
        open: _ctx.open,
        "onUpdate:open": ($event) => emit("update:open")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SheetContent, {
              side: "bottom",
              class: "p-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SheetHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SheetTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\uB313\uAE00`);
                            } else {
                              return [
                                createTextVNode("\uB313\uAE00")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_SheetTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\uB313\uAE00")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex flex-col gap-4 max-h-160 overflow-y-scroll"${_scopeId2}><!--[-->`);
                  ssrRenderList(_ctx.reply.comment.comments, (comment) => {
                    _push3(`<div class="flex flex-col gap-1"${_scopeId2}><p class="text-xs"${_scopeId2}>${ssrInterpolate(comment.user_id)}(${ssrInterpolate(comment.name)})</p><div class="flex items-end gap-1"${_scopeId2}><div class="bg-neutral-100 rounded-md px-2 py-1 text-sm w-fit"${_scopeId2}><div${_scopeId2}>${("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(comment.memo).replace(/co\.kr/g, "com")}</div></div><p class="text-xs"${_scopeId2}>${ssrInterpolate(comment.reg_date)}</p></div></div>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode(_component_SheetHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_SheetTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\uB313\uAE00")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex flex-col gap-4 max-h-160 overflow-y-scroll" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.reply.comment.comments, (comment) => {
                        return openBlock(), createBlock("div", { class: "flex flex-col gap-1" }, [
                          createVNode("p", { class: "text-xs" }, toDisplayString(comment.user_id) + "(" + toDisplayString(comment.name) + ")", 1),
                          createVNode("div", { class: "flex items-end gap-1" }, [
                            createVNode("div", { class: "bg-neutral-100 rounded-md px-2 py-1 text-sm w-fit" }, [
                              createVNode("div", {
                                innerHTML: ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(comment.memo).replace(/co\.kr/g, "com")
                              }, null, 8, ["innerHTML"])
                            ]),
                            createVNode("p", { class: "text-xs" }, toDisplayString(comment.reg_date), 1)
                          ])
                        ]);
                      }), 256))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SheetContent, {
                side: "bottom",
                class: "p-2"
              }, {
                default: withCtx(() => [
                  createVNode(_component_SheetHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_SheetTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\uB313\uAE00")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex flex-col gap-4 max-h-160 overflow-y-scroll" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.reply.comment.comments, (comment) => {
                      return openBlock(), createBlock("div", { class: "flex flex-col gap-1" }, [
                        createVNode("p", { class: "text-xs" }, toDisplayString(comment.user_id) + "(" + toDisplayString(comment.name) + ")", 1),
                        createVNode("div", { class: "flex items-end gap-1" }, [
                          createVNode("div", { class: "bg-neutral-100 rounded-md px-2 py-1 text-sm w-fit" }, [
                            createVNode("div", {
                              innerHTML: ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(comment.memo).replace(/co\.kr/g, "com")
                            }, null, 8, ["innerHTML"])
                          ]),
                          createVNode("p", { class: "text-xs" }, toDisplayString(comment.reg_date), 1)
                        ])
                      ]);
                    }), 256))
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sheet/boardDetail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=style-KYxr16zm.mjs.map
