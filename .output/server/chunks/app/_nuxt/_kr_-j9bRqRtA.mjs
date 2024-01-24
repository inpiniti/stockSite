import { _ as _sfc_main$4, a as _sfc_main$5, b as _sfc_main$3$1, c as _sfc_main$2$1, d as _sfc_main$1$1 } from './DialogContent-kk3bNr4b.mjs';
import { u as useState } from './state-1CyKPjUP.mjs';
import { useSSRContext, ref, mergeProps, unref, defineComponent, watch, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode } from 'vue';
import { u as useFetch } from './fetch-smb1T55z.mjs';
import { r as replaceDomain } from './book-JkoC1KYI.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './Header-Ffs2ceUt.mjs';
import { _ as _sfc_main$3 } from './DataTable-SexWdUK6.mjs';
import { u as useRoute } from '../server.mjs';
import { columns } from './board.columns-rzK5GhPN.mjs';
import 'radix-vue';
import './index-K3pjwam9.mjs';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import 'lucide-vue-next';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import './Input-7SuzJlwq.mjs';
import '@vueuse/core';
import './DropdownMenuContent-uyRRRG_b.mjs';
import './TableRow-1QbGuGr5.mjs';
import '@tanstack/vue-table';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/vue-fontawesome';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-regular-svg-icons';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "boardDetail",
  __ssrInlineRender: true,
  props: {
    isOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const boardDetail = useState("boardDetail");
    const data = ref(null);
    watch(
      () => boardDetail.value,
      async () => {
        var _a, _b, _c, _d;
        const { data: newData } = await useFetch(
          `/api/dcinside/${boardDetail.value.dc}/${boardDetail.value.num}?kr=${boardDetail.value.kr}`,
          "$9tuCSFDKGj"
        );
        data.value = newData.value;
        if ((_b = (_a = data.value) == null ? void 0 : _a.comment) == null ? void 0 : _b.comments) {
          data.value.comment.comments = (_d = (_c = data.value) == null ? void 0 : _c.comment) == null ? void 0 : _d.comments.filter(
            (comment) => {
              return comment.no != 0;
            }
          );
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Dialog = _sfc_main$4;
      const _component_DialogContent = _sfc_main$5;
      const _component_DialogHeader = _sfc_main$3$1;
      const _component_DialogTitle = _sfc_main$2$1;
      const _component_DialogDescription = _sfc_main$1$1;
      _push(ssrRenderComponent(_component_Dialog, mergeProps({
        "onUpdate:open": ($event) => emit("update:open"),
        open: _ctx.isOpen
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DialogContent, { class: "w-5/6 max-h-192 overflow-y-scroll" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a2, _b2;
                            if (_push5) {
                              _push5(`${ssrInterpolate((_a2 = unref(boardDetail)) == null ? void 0 : _a2.title)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString((_b2 = unref(boardDetail)) == null ? void 0 : _b2.title), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DialogDescription, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
                            if (_push5) {
                              _push5(`<div class="flex justify-between"${_scopeId4}><div${_scopeId4}>${ssrInterpolate((_a2 = unref(boardDetail)) == null ? void 0 : _a2.writer)} ${ssrInterpolate((_b2 = unref(boardDetail)) == null ? void 0 : _b2.date)}</div><div${_scopeId4}> \uC870\uD68C ${ssrInterpolate((_c2 = unref(boardDetail)) == null ? void 0 : _c2.count)} \uCD94\uCC9C ${ssrInterpolate((_d2 = unref(boardDetail)) == null ? void 0 : _d2.recommend)} \uB313\uAE00 ${ssrInterpolate((_e2 = unref(data)) == null ? void 0 : _e2.comment.total_cnt)}</div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex justify-between" }, [
                                  createVNode("div", null, toDisplayString((_f2 = unref(boardDetail)) == null ? void 0 : _f2.writer) + " " + toDisplayString((_g2 = unref(boardDetail)) == null ? void 0 : _g2.date), 1),
                                  createVNode("div", null, " \uC870\uD68C " + toDisplayString((_h2 = unref(boardDetail)) == null ? void 0 : _h2.count) + " \uCD94\uCC9C " + toDisplayString((_i2 = unref(boardDetail)) == null ? void 0 : _i2.recommend) + " \uB313\uAE00 " + toDisplayString((_j2 = unref(data)) == null ? void 0 : _j2.comment.total_cnt), 1)
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DialogTitle, null, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createTextVNode(toDisplayString((_a2 = unref(boardDetail)) == null ? void 0 : _a2.title), 1)
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(_component_DialogDescription, null, {
                            default: withCtx(() => {
                              var _a2, _b2, _c2, _d2, _e2;
                              return [
                                createVNode("div", { class: "flex justify-between" }, [
                                  createVNode("div", null, toDisplayString((_a2 = unref(boardDetail)) == null ? void 0 : _a2.writer) + " " + toDisplayString((_b2 = unref(boardDetail)) == null ? void 0 : _b2.date), 1),
                                  createVNode("div", null, " \uC870\uD68C " + toDisplayString((_c2 = unref(boardDetail)) == null ? void 0 : _c2.count) + " \uCD94\uCC9C " + toDisplayString((_d2 = unref(boardDetail)) == null ? void 0 : _d2.recommend) + " \uB313\uAE00 " + toDisplayString((_e2 = unref(data)) == null ? void 0 : _e2.comment.total_cnt), 1)
                                ])
                              ];
                            }),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="grid gap-4 py-4"${_scopeId2}><!--[-->`);
                  ssrRenderList((_a = unref(data)) == null ? void 0 : _a.images, (img) => {
                    _push3(`<img${ssrRenderAttr("src", ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(img).replace(/co\.kr/g, "com"))}${_scopeId2}>`);
                  });
                  _push3(`<!--]--> ${ssrInterpolate((_b = unref(data)) == null ? void 0 : _b.content)}</div>`);
                  if (((_c = unref(data)) == null ? void 0 : _c.comment.total_cnt) > 0) {
                    _push3(`<div class="flex flex-col gap-3"${_scopeId2}><div${_scopeId2}>\uC804\uCCB4 \uB313\uAE00 ${ssrInterpolate((_d = unref(data)) == null ? void 0 : _d.comment.total_cnt)}\uAC1C</div><!--[-->`);
                    ssrRenderList((_e = unref(data)) == null ? void 0 : _e.comment.comments, (comment) => {
                      _push3(`<div class="${ssrRenderClass([{ "ml-4": comment.depth == 1 }, "flex flex-col gap-1"])}"${_scopeId2}><p class="text-xs"${_scopeId2}>${ssrInterpolate(comment.user_id)}(${ssrInterpolate(comment.name)})</p><div class="flex items-end gap-1"${_scopeId2}><div class="bg-neutral-100 rounded-md px-2 py-1 text-sm w-fit"${_scopeId2}><div${_scopeId2}>${("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(comment.memo).replace(/co\.kr/g, "com")}</div></div><p class="text-xs"${_scopeId2}>${ssrInterpolate(comment.reg_date)}</p></div></div>`);
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(_component_DialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_DialogTitle, null, {
                          default: withCtx(() => {
                            var _a2;
                            return [
                              createTextVNode(toDisplayString((_a2 = unref(boardDetail)) == null ? void 0 : _a2.title), 1)
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(_component_DialogDescription, null, {
                          default: withCtx(() => {
                            var _a2, _b2, _c2, _d2, _e2;
                            return [
                              createVNode("div", { class: "flex justify-between" }, [
                                createVNode("div", null, toDisplayString((_a2 = unref(boardDetail)) == null ? void 0 : _a2.writer) + " " + toDisplayString((_b2 = unref(boardDetail)) == null ? void 0 : _b2.date), 1),
                                createVNode("div", null, " \uC870\uD68C " + toDisplayString((_c2 = unref(boardDetail)) == null ? void 0 : _c2.count) + " \uCD94\uCC9C " + toDisplayString((_d2 = unref(boardDetail)) == null ? void 0 : _d2.recommend) + " \uB313\uAE00 " + toDisplayString((_e2 = unref(data)) == null ? void 0 : _e2.comment.total_cnt), 1)
                              ])
                            ];
                          }),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "grid gap-4 py-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList((_f = unref(data)) == null ? void 0 : _f.images, (img) => {
                        return openBlock(), createBlock("img", {
                          src: ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(img).replace(/co\.kr/g, "com")
                        }, null, 8, ["src"]);
                      }), 256)),
                      createTextVNode(" " + toDisplayString((_g = unref(data)) == null ? void 0 : _g.content), 1)
                    ]),
                    ((_h = unref(data)) == null ? void 0 : _h.comment.total_cnt) > 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex flex-col gap-3"
                    }, [
                      createVNode("div", null, "\uC804\uCCB4 \uB313\uAE00 " + toDisplayString((_i = unref(data)) == null ? void 0 : _i.comment.total_cnt) + "\uAC1C", 1),
                      (openBlock(true), createBlock(Fragment, null, renderList((_j = unref(data)) == null ? void 0 : _j.comment.comments, (comment) => {
                        return openBlock(), createBlock("div", {
                          class: ["flex flex-col gap-1", { "ml-4": comment.depth == 1 }]
                        }, [
                          createVNode("p", { class: "text-xs" }, toDisplayString(comment.user_id) + "(" + toDisplayString(comment.name) + ")", 1),
                          createVNode("div", { class: "flex items-end gap-1" }, [
                            createVNode("div", { class: "bg-neutral-100 rounded-md px-2 py-1 text-sm w-fit" }, [
                              createVNode("div", {
                                innerHTML: ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(comment.memo).replace(/co\.kr/g, "com")
                              }, null, 8, ["innerHTML"])
                            ]),
                            createVNode("p", { class: "text-xs" }, toDisplayString(comment.reg_date), 1)
                          ])
                        ], 2);
                      }), 256))
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DialogContent, { class: "w-5/6 max-h-192 overflow-y-scroll" }, {
                default: withCtx(() => {
                  var _a, _b, _c, _d, _e;
                  return [
                    createVNode(_component_DialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_DialogTitle, null, {
                          default: withCtx(() => {
                            var _a2;
                            return [
                              createTextVNode(toDisplayString((_a2 = unref(boardDetail)) == null ? void 0 : _a2.title), 1)
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(_component_DialogDescription, null, {
                          default: withCtx(() => {
                            var _a2, _b2, _c2, _d2, _e2;
                            return [
                              createVNode("div", { class: "flex justify-between" }, [
                                createVNode("div", null, toDisplayString((_a2 = unref(boardDetail)) == null ? void 0 : _a2.writer) + " " + toDisplayString((_b2 = unref(boardDetail)) == null ? void 0 : _b2.date), 1),
                                createVNode("div", null, " \uC870\uD68C " + toDisplayString((_c2 = unref(boardDetail)) == null ? void 0 : _c2.count) + " \uCD94\uCC9C " + toDisplayString((_d2 = unref(boardDetail)) == null ? void 0 : _d2.recommend) + " \uB313\uAE00 " + toDisplayString((_e2 = unref(data)) == null ? void 0 : _e2.comment.total_cnt), 1)
                              ])
                            ];
                          }),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "grid gap-4 py-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList((_a = unref(data)) == null ? void 0 : _a.images, (img) => {
                        return openBlock(), createBlock("img", {
                          src: ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(img).replace(/co\.kr/g, "com")
                        }, null, 8, ["src"]);
                      }), 256)),
                      createTextVNode(" " + toDisplayString((_b = unref(data)) == null ? void 0 : _b.content), 1)
                    ]),
                    ((_c = unref(data)) == null ? void 0 : _c.comment.total_cnt) > 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex flex-col gap-3"
                    }, [
                      createVNode("div", null, "\uC804\uCCB4 \uB313\uAE00 " + toDisplayString((_d = unref(data)) == null ? void 0 : _d.comment.total_cnt) + "\uAC1C", 1),
                      (openBlock(true), createBlock(Fragment, null, renderList((_e = unref(data)) == null ? void 0 : _e.comment.comments, (comment) => {
                        return openBlock(), createBlock("div", {
                          class: ["flex flex-col gap-1", { "ml-4": comment.depth == 1 }]
                        }, [
                          createVNode("p", { class: "text-xs" }, toDisplayString(comment.user_id) + "(" + toDisplayString(comment.name) + ")", 1),
                          createVNode("div", { class: "flex items-end gap-1" }, [
                            createVNode("div", { class: "bg-neutral-100 rounded-md px-2 py-1 text-sm w-fit" }, [
                              createVNode("div", {
                                innerHTML: ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(comment.memo).replace(/co\.kr/g, "com")
                              }, null, 8, ["innerHTML"])
                            ]),
                            createVNode("p", { class: "text-xs" }, toDisplayString(comment.reg_date), 1)
                          ])
                        ], 2);
                      }), 256))
                    ])) : createCommentVNode("", true)
                  ];
                }),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dialog/boardDetail.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const useBoardDetail = () => {
  return useState("boardDetail");
};
const _sfc_main = {
  __name: "[kr]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const book = ref({
      kr: "",
      img: ""
    });
    const board = ref([]);
    ref();
    const isOpen = ref(false);
    function rowClick(row) {
      isOpen.value = true;
      useBoardDetail().value = {
        ...row.original,
        ...book.value
      };
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_DialogBoardDetail = _sfc_main$1;
      const _component_CommonHeader = _sfc_main$2;
      const _component_PagesBoardDataTable = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_DialogBoardDetail, {
        isOpen: unref(isOpen),
        "onUpdate:open": ($event) => isOpen.value = false
      }, null, _parent));
      _push(ssrRenderComponent(_component_CommonHeader, {
        title: (_a = unref(book)) == null ? void 0 : _a.kr,
        description: `${(_b = unref(book)) == null ? void 0 : _b.kr}\uC758 \uAC8C\uC2DC\uD310 \uC785\uB2C8\uB2E4`
      }, null, _parent));
      _push(`<div><img class="h-56 object-cover overflow-hidden rounded-md"${ssrRenderAttr("src", (_c = unref(book)) == null ? void 0 : _c.img)}></div>`);
      if (_ctx.pending) {
        _push(`<div>\uC870\uD68C\uC911 ...</div>`);
      } else {
        _push(ssrRenderComponent(_component_PagesBoardDataTable, {
          columns: unref(columns),
          data: unref(board),
          onRowClick: rowClick
        }, null, _parent));
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/book/board/[kr].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_kr_-j9bRqRtA.mjs.map
