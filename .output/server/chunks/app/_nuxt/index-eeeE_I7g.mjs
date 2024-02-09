import { _ as _sfc_main$1 } from './board-2PDmtHzM.mjs';
import { _ as _sfc_main$2 } from './Header-Ffs2ceUt.mjs';
import { _ as _sfc_main$3 } from './Card-AGwdWt8g.mjs';
import { _ as _sfc_main$3$1, a as _sfc_main$2$1, b as _sfc_main$1$1, c as _sfc_main$4 } from './CardContent-aByUFUrt.mjs';
import { u as uniqueBooks } from './useBooks-Ypf3XFQB.mjs';
import { n as navigateTo } from '../server.mjs';
import { unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import './DialogContent-t9sk4rqE.mjs';
import 'radix-vue';
import 'lucide-vue-next';
import './DialogFooter-d_oHvfoT.mjs';
import './Label-qeIRde0b.mjs';
import './Input-eHzHGyo6.mjs';
import '@vueuse/core';
import './Textarea-wJGe8b5L.mjs';
import './index-64ep_nG4.mjs';
import 'class-variance-authority';
import './fetch-fy2p8z4q.mjs';
import '../../user.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import './useSupabase-vnVKN2Il.mjs';
import './state-0C5oRJ7z.mjs';
import '@supabase/supabase-js';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/vue-fontawesome';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-regular-svg-icons';
import '@fortawesome/free-brands-svg-icons';
import '@yeger/vue-masonry-wall';
import 'clsx';
import 'tailwind-merge';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const books = uniqueBooks();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogBoard = _sfc_main$1;
      const _component_CommonHeader = _sfc_main$2;
      const _component_Card = _sfc_main$3;
      const _component_CardHeader = _sfc_main$3$1;
      const _component_CardTitle = _sfc_main$2$1;
      const _component_CardDescription = _sfc_main$1$1;
      const _component_CardContent = _sfc_main$4;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_DialogBoard, { ref: "boardRef" }, null, _parent));
      _push(`<div class="p-4">`);
      _push(ssrRenderComponent(_component_CommonHeader, {
        title: "\uAC8C\uC2DC\uD310",
        description: "\uCEE4\uBBA4\uB2C8\uD2F0\uC785\uB2C8\uB2E4. \uC55E\uC73C\uB85C \uB354 \uCD94\uAC00\uAC00 \uB420 \uC608\uC815\uC785\uB2C8\uB2E4."
      }, null, _parent));
      _push(`<div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-4"><!--[-->`);
      ssrRenderList(unref(books), (book) => {
        _push(ssrRenderComponent(_component_Card, {
          class: { "opacity-50": !book.dc, "cursor-pointer": book.dc },
          onClick: ($event) => {
            if (book.dc)
              ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/book/board/${book.kr}`);
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_CardHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_CardTitle, { class: "overflow-hidden overflow-ellipsis whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(book.kr)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(book.kr), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_CardDescription, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Deploy your new project in one-click.`);
                        } else {
                          return [
                            createTextVNode("Deploy your new project in one-click.")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_CardTitle, { class: "overflow-hidden overflow-ellipsis whitespace-nowrap" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(book.kr), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_CardDescription, null, {
                        default: withCtx(() => [
                          createTextVNode("Deploy your new project in one-click.")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_CardContent, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", book.img)}${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: book.img
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_CardHeader, null, {
                  default: withCtx(() => [
                    createVNode(_component_CardTitle, { class: "overflow-hidden overflow-ellipsis whitespace-nowrap" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(book.kr), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_CardDescription, null, {
                      default: withCtx(() => [
                        createTextVNode("Deploy your new project in one-click.")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024),
                createVNode(_component_CardContent, null, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: book.img
                    }, null, 8, ["src"])
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/book/board/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-eeeE_I7g.mjs.map
