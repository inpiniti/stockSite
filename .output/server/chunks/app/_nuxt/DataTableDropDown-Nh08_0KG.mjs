import { _ as _sfc_main$2$1, a as _sfc_main$1$1, b as _sfc_main$5 } from './DropdownMenuContent-uyRRRG_b.mjs';
import { useSSRContext, ref, computed, defineComponent, withCtx, unref, createVNode, createTextVNode, mergeProps, renderSlot } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel } from 'radix-vue';
import { c as cn, _ as _sfc_main$4 } from './index-K3pjwam9.mjs';
import { u as useState } from './state-1CyKPjUP.mjs';
import { MoreHorizontal } from 'lucide-vue-next';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuItem",
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
      _push(ssrRenderComponent(unref(DropdownMenuItem), mergeProps(props, {
        class: [
          unref(cn)(
            "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            _ctx.inset && "pl-8",
            props.class
          )
        ]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuSeparator",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuSeparator), mergeProps(props, { class: "-mx-1 my-1 h-px bg-muted" }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuSeparator.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuLabel",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    inset: { type: Boolean },
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuLabel), mergeProps(props, {
        class: unref(cn)(
          "px-2 py-1.5 text-sm font-semibold",
          _ctx.inset && "pl-8",
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuLabel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1e6;
const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
}
const toastTimeouts = /* @__PURE__ */ new Map();
function addToRemoveQueue(toastId) {
  if (toastTimeouts.has(toastId))
    return;
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: actionTypes.REMOVE_TOAST,
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
}
const state = ref({
  toasts: []
});
function dispatch(action) {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      state.value.toasts = [action.toast, ...state.value.toasts].slice(0, TOAST_LIMIT);
      break;
    case actionTypes.UPDATE_TOAST:
      state.value.toasts = state.value.toasts.map(
        (t) => t.id === action.toast.id ? { ...t, ...action.toast } : t
      );
      break;
    case actionTypes.DISMISS_TOAST: {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.value.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      state.value.toasts = state.value.toasts.map(
        (t) => t.id === toastId || toastId === void 0 ? {
          ...t,
          open: false
        } : t
      );
      break;
    }
    case actionTypes.REMOVE_TOAST:
      if (action.toastId === void 0)
        state.value.toasts = [];
      else
        state.value.toasts = state.value.toasts.filter((t) => t.id !== action.toastId);
      break;
  }
}
function useToast() {
  return {
    toasts: computed(() => state.value.toasts),
    toast,
    dismiss: (toastId) => dispatch({ type: actionTypes.DISMISS_TOAST, toastId })
  };
}
function toast(props) {
  const id = genId();
  const update = (props2) => dispatch({
    type: actionTypes.UPDATE_TOAST,
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: actionTypes.DISMISS_TOAST, toastId: id });
  dispatch({
    type: actionTypes.ADD_TOAST,
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open)
          dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
useToast();
const useBook = () => {
  const open = useState("bookOpen", () => false);
  const selected = useState("bookSelected", () => ({}));
  function openBook(newSelectedBook) {
    selected.value = newSelectedBook;
    open.value = true;
  }
  return {
    open,
    selected,
    openBook
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DataTableDropDown",
  __ssrInlineRender: true,
  props: {
    book: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DropdownMenu = _sfc_main$2$1;
      const _component_DropdownMenuTrigger = _sfc_main$1$1;
      const _component_Button = _sfc_main$4;
      const _component_DropdownMenuContent = _sfc_main$5;
      const _component_DropdownMenuLabel = _sfc_main$1;
      const _component_DropdownMenuItem = _sfc_main$3;
      const _component_DropdownMenuSeparator = _sfc_main$2;
      _push(ssrRenderComponent(_component_DropdownMenu, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DropdownMenuTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    variant: "ghost",
                    class: "w-8 h-8 p-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="sr-only"${_scopeId3}>Open menu</span>`);
                        _push4(ssrRenderComponent(unref(MoreHorizontal), { class: "w-4 h-4" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("span", { class: "sr-only" }, "Open menu"),
                          createVNode(unref(MoreHorizontal), { class: "w-4 h-4" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      variant: "ghost",
                      class: "w-8 h-8 p-0"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "sr-only" }, "Open menu"),
                        createVNode(unref(MoreHorizontal), { class: "w-4 h-4" })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DropdownMenuContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DropdownMenuLabel, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Actions`);
                      } else {
                        return [
                          createTextVNode("Actions")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_DropdownMenuItem, {
                    onClick: ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().openBook(_ctx.book)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uB3C4\uC11C \uC815\uBCF4 \uC218\uC815 `);
                      } else {
                        return [
                          createTextVNode(" \uB3C4\uC11C \uC815\uBCF4 \uC218\uC815 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_DropdownMenuSeparator, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_DropdownMenuItem, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`View \uB098\uBB34\uC704\uD0A4`);
                      } else {
                        return [
                          createTextVNode("View \uB098\uBB34\uC704\uD0A4")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_DropdownMenuItem, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`View \uAC8C\uC2DC\uD310 \uC774\uB3D9`);
                      } else {
                        return [
                          createTextVNode("View \uAC8C\uC2DC\uD310 \uC774\uB3D9")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DropdownMenuLabel, null, {
                      default: withCtx(() => [
                        createTextVNode("Actions")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_DropdownMenuItem, {
                      onClick: ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().openBook(_ctx.book)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \uB3C4\uC11C \uC815\uBCF4 \uC218\uC815 ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_DropdownMenuSeparator),
                    createVNode(_component_DropdownMenuItem, null, {
                      default: withCtx(() => [
                        createTextVNode("View \uB098\uBB34\uC704\uD0A4")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_DropdownMenuItem, null, {
                      default: withCtx(() => [
                        createTextVNode("View \uAC8C\uC2DC\uD310 \uC774\uB3D9")
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
              createVNode(_component_DropdownMenuTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_Button, {
                    variant: "ghost",
                    class: "w-8 h-8 p-0"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "sr-only" }, "Open menu"),
                      createVNode(unref(MoreHorizontal), { class: "w-4 h-4" })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_DropdownMenuContent, null, {
                default: withCtx(() => [
                  createVNode(_component_DropdownMenuLabel, null, {
                    default: withCtx(() => [
                      createTextVNode("Actions")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_DropdownMenuItem, {
                    onClick: ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().openBook(_ctx.book)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \uB3C4\uC11C \uC815\uBCF4 \uC218\uC815 ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_DropdownMenuSeparator),
                  createVNode(_component_DropdownMenuItem, null, {
                    default: withCtx(() => [
                      createTextVNode("View \uB098\uBB34\uC704\uD0A4")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_DropdownMenuItem, null, {
                    default: withCtx(() => [
                      createTextVNode("View \uAC8C\uC2DC\uD310 \uC774\uB3D9")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/book/DataTableDropDown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, useBook as a, useToast as u };
//# sourceMappingURL=DataTableDropDown-Nh08_0KG.mjs.map
