import { _ as _sfc_main$4, a as _sfc_main$1, b as _sfc_main$3, c as _sfc_main$2, d as _sfc_main$1$1 } from './DialogContent-gH5cY4B6.mjs';
import { _ as _sfc_main$7 } from './DialogFooter-d_oHvfoT.mjs';
import { _ as _sfc_main$5 } from './Label-qeIRde0b.mjs';
import { _ as _sfc_main$6 } from './Input-eHzHGyo6.mjs';
import { _ as _sfc_main$8 } from './index-VljijB2M.mjs';
import { u as useState } from './state-t0JlwV5Q.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { u as useBook } from './useBook-jIPfxSlK.mjs';
import { f as fetchBooks } from './useBooks-TTm7ObzJ.mjs';
import { f as fetchBookInfoList } from './useBookInfoList-lxAGGPA0.mjs';
import { f as fetchCoverList } from './useCoverList-TFpT3_Hs.mjs';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { createClient } from '@supabase/supabase-js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "book",
  __ssrInlineRender: true,
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const supabase = createClient(
      "https://etnyrefdmddqiuatswhb.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0bnlyZWZkbWRkcWl1YXRzd2hiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4ODc3MDIsImV4cCI6MjAyMDQ2MzcwMn0.IwIU929Y-H6JsZdvZ2QSEsmbmBLKIND7B7_a3UpRfhs"
    );
    const open = useState("bookOpen");
    const loading = ref(false);
    const coverImageUploadLoading = ref(false);
    const emit = __emit;
    async function ok() {
      loading.value = true;
      await supabase.from("book").update({
        kr: useBook().selected.value.kr,
        img: useBook().selected.value.img
      }).eq("jp", useBook().selected.value.jp);
      const { data, error } = await supabase.from("book_info").select("*").eq("kr", useBook().selected.value.kr);
      if (data && data.length > 0) {
        await supabase.from("book_info").update({
          author: useBook().selected.value.author,
          publisher: useBook().selected.value.publisher,
          description: useBook().selected.value.description,
          summary: useBook().selected.value.summary,
          dc: useBook().selected.value.dc,
          namu: useBook().selected.value.namu
        }).eq("kr", useBook().selected.value.kr);
      } else {
        await supabase.from("book_info").insert([
          {
            kr: useBook().selected.value.kr,
            author: useBook().selected.value.author,
            publisher: useBook().selected.value.publisher,
            description: useBook().selected.value.description,
            summary: useBook().selected.value.summary,
            dc: useBook().selected.value.dc,
            namu: useBook().selected.value.namu
          }
        ]);
      }
      await fetchBooks();
      await fetchBookInfoList();
      loading.value = false;
      open.value = false;
      emit("update:open");
    }
    async function coverImageUpload() {
      coverImageUploadLoading.value = true;
      try {
        await fetch(`/api/namuWiki/${useBook().selected.value.namu}`);
        await fetchCoverList();
      } catch (error) {
        console.error(error);
      } finally {
        coverImageUploadLoading.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Dialog = _sfc_main$4;
      const _component_DialogContent = _sfc_main$1;
      const _component_DialogHeader = _sfc_main$3;
      const _component_DialogTitle = _sfc_main$2;
      const _component_DialogDescription = _sfc_main$1$1;
      const _component_Label = _sfc_main$5;
      const _component_Input = _sfc_main$6;
      const _component_DialogFooter = _sfc_main$7;
      const _component_Button = _sfc_main$8;
      _push(ssrRenderComponent(_component_Dialog, mergeProps({
        open: unref(open),
        "onUpdate:open": ($event) => open.value = false
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DialogContent, { class: "sm:max-w-[425px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\uB9CC\uD654\uCC45 \uC218\uC815`);
                            } else {
                              return [
                                createTextVNode("\uB9CC\uD654\uCC45 \uC218\uC815")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DialogDescription, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uB9CC\uD654\uCC45\uC758 \uD55C\uAD6D\uC5B4 \uC81C\uBAA9 \uBC0F \uCC45\uC758 \uC774\uBBF8\uC9C0\uB97C \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. `);
                            } else {
                              return [
                                createTextVNode(" \uB9CC\uD654\uCC45\uC758 \uD55C\uAD6D\uC5B4 \uC81C\uBAA9 \uBC0F \uCC45\uC758 \uC774\uBBF8\uC9C0\uB97C \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\uB9CC\uD654\uCC45 \uC218\uC815")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DialogDescription, null, {
                            default: withCtx(() => [
                              createTextVNode(" \uB9CC\uD654\uCC45\uC758 \uD55C\uAD6D\uC5B4 \uC81C\uBAA9 \uBC0F \uCC45\uC758 \uC774\uBBF8\uC9C0\uB97C \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. ")
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
                    for: "name",
                    class: "text-right"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uC77C\uBCF8\uC5B4 \uC81C\uBAA9 `);
                      } else {
                        return [
                          createTextVNode(" \uC77C\uBCF8\uC5B4 \uC81C\uBAA9 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    id: "name",
                    class: "col-span-3",
                    modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.jp,
                    "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.jp = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid grid-cols-4 items-center gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, {
                    for: "name",
                    class: "text-right"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uD55C\uAD6D\uC5B4 \uC81C\uBAA9 `);
                      } else {
                        return [
                          createTextVNode(" \uD55C\uAD6D\uC5B4 \uC81C\uBAA9 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    id: "name",
                    class: "col-span-3",
                    modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.kr,
                    "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.kr = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid grid-cols-4 items-center gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, {
                    for: "username",
                    class: "text-right"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uC774\uBBF8\uC9C0 url `);
                      } else {
                        return [
                          createTextVNode(" \uC774\uBBF8\uC9C0 url ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    id: "username",
                    class: "col-span-3",
                    modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.img,
                    "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.img = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid grid-cols-4 items-center gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, {
                    for: "namu",
                    class: "text-right"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uB098\uBB34\uC704\uD0A4 url `);
                      } else {
                        return [
                          createTextVNode(" \uB098\uBB34\uC704\uD0A4 url ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    id: "namu",
                    class: "col-span-3",
                    modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.namu,
                    "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.namu = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid grid-cols-4 items-center gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, {
                    for: "namu",
                    class: "text-right"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` dcinside id `);
                      } else {
                        return [
                          createTextVNode(" dcinside id ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    id: "namu",
                    class: "col-span-3",
                    modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.dc,
                    "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.dc = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid grid-cols-4 items-center gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, {
                    for: "namu",
                    class: "text-right"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uC800\uC790 `);
                      } else {
                        return [
                          createTextVNode(" \uC800\uC790 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    id: "namu",
                    class: "col-span-3",
                    modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.author,
                    "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.author = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid grid-cols-4 items-center gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, {
                    for: "namu",
                    class: "text-right"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uCD9C\uD310\uC0AC `);
                      } else {
                        return [
                          createTextVNode(" \uCD9C\uD310\uC0AC ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    id: "namu",
                    class: "col-span-3",
                    modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.publisher,
                    "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.publisher = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid grid-cols-4 items-center gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, {
                    for: "namu",
                    class: "text-right"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uC694\uC57D `);
                      } else {
                        return [
                          createTextVNode(" \uC694\uC57D ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    id: "namu",
                    class: "col-span-3",
                    modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.description,
                    "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.description = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid grid-cols-4 items-center gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, {
                    for: "namu",
                    class: "text-right"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uC904\uAC70\uB9AC `);
                      } else {
                        return [
                          createTextVNode(" \uC904\uAC70\uB9AC ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    id: "namu",
                    class: "col-span-3",
                    modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.summary,
                    "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.summary = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  _push3(ssrRenderComponent(_component_DialogFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Button, {
                          variant: "secondary",
                          onClick: coverImageUpload,
                          disabled: !("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.namu
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(unref(coverImageUploadLoading) ? "Uploading..." : "Cover Image Upload")}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(unref(coverImageUploadLoading) ? "Uploading..." : "Cover Image Upload"), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Button, { onClick: ok }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Save changes`);
                            } else {
                              return [
                                createTextVNode("Save changes")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Button, {
                            variant: "secondary",
                            onClick: coverImageUpload,
                            disabled: !("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.namu
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(coverImageUploadLoading) ? "Uploading..." : "Cover Image Upload"), 1)
                            ]),
                            _: 1
                          }, 8, ["disabled"]),
                          createVNode(_component_Button, { onClick: ok }, {
                            default: withCtx(() => [
                              createTextVNode("Save changes")
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
                            createTextVNode("\uB9CC\uD654\uCC45 \uC218\uC815")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DialogDescription, null, {
                          default: withCtx(() => [
                            createTextVNode(" \uB9CC\uD654\uCC45\uC758 \uD55C\uAD6D\uC5B4 \uC81C\uBAA9 \uBC0F \uCC45\uC758 \uC774\uBBF8\uC9C0\uB97C \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "grid gap-4 py-4" }, [
                      createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                        createVNode(_component_Label, {
                          for: "name",
                          class: "text-right"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uC77C\uBCF8\uC5B4 \uC81C\uBAA9 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          id: "name",
                          class: "col-span-3",
                          modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.jp,
                          "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.jp = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                        createVNode(_component_Label, {
                          for: "name",
                          class: "text-right"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uD55C\uAD6D\uC5B4 \uC81C\uBAA9 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          id: "name",
                          class: "col-span-3",
                          modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.kr,
                          "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.kr = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                        createVNode(_component_Label, {
                          for: "username",
                          class: "text-right"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uC774\uBBF8\uC9C0 url ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          id: "username",
                          class: "col-span-3",
                          modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.img,
                          "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.img = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                        createVNode(_component_Label, {
                          for: "namu",
                          class: "text-right"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uB098\uBB34\uC704\uD0A4 url ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          id: "namu",
                          class: "col-span-3",
                          modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.namu,
                          "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.namu = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                        createVNode(_component_Label, {
                          for: "namu",
                          class: "text-right"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" dcinside id ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          id: "namu",
                          class: "col-span-3",
                          modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.dc,
                          "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.dc = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                        createVNode(_component_Label, {
                          for: "namu",
                          class: "text-right"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uC800\uC790 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          id: "namu",
                          class: "col-span-3",
                          modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.author,
                          "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.author = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                        createVNode(_component_Label, {
                          for: "namu",
                          class: "text-right"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uCD9C\uD310\uC0AC ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          id: "namu",
                          class: "col-span-3",
                          modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.publisher,
                          "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.publisher = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                        createVNode(_component_Label, {
                          for: "namu",
                          class: "text-right"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uC694\uC57D ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          id: "namu",
                          class: "col-span-3",
                          modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.description,
                          "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.description = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                        createVNode(_component_Label, {
                          for: "namu",
                          class: "text-right"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uC904\uAC70\uB9AC ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          id: "namu",
                          class: "col-span-3",
                          modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.summary,
                          "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.summary = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode(_component_DialogFooter, null, {
                      default: withCtx(() => [
                        createVNode(_component_Button, {
                          variant: "secondary",
                          onClick: coverImageUpload,
                          disabled: !("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.namu
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(coverImageUploadLoading) ? "Uploading..." : "Cover Image Upload"), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        createVNode(_component_Button, { onClick: ok }, {
                          default: withCtx(() => [
                            createTextVNode("Save changes")
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
              createVNode(_component_DialogContent, { class: "sm:max-w-[425px]" }, {
                default: withCtx(() => [
                  createVNode(_component_DialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_DialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\uB9CC\uD654\uCC45 \uC218\uC815")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DialogDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(" \uB9CC\uD654\uCC45\uC758 \uD55C\uAD6D\uC5B4 \uC81C\uBAA9 \uBC0F \uCC45\uC758 \uC774\uBBF8\uC9C0\uB97C \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "grid gap-4 py-4" }, [
                    createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                      createVNode(_component_Label, {
                        for: "name",
                        class: "text-right"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC77C\uBCF8\uC5B4 \uC81C\uBAA9 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        id: "name",
                        class: "col-span-3",
                        modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.jp,
                        "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.jp = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                      createVNode(_component_Label, {
                        for: "name",
                        class: "text-right"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uD55C\uAD6D\uC5B4 \uC81C\uBAA9 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        id: "name",
                        class: "col-span-3",
                        modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.kr,
                        "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.kr = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                      createVNode(_component_Label, {
                        for: "username",
                        class: "text-right"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC774\uBBF8\uC9C0 url ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        id: "username",
                        class: "col-span-3",
                        modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.img,
                        "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.img = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                      createVNode(_component_Label, {
                        for: "namu",
                        class: "text-right"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uB098\uBB34\uC704\uD0A4 url ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        id: "namu",
                        class: "col-span-3",
                        modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.namu,
                        "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.namu = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                      createVNode(_component_Label, {
                        for: "namu",
                        class: "text-right"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" dcinside id ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        id: "namu",
                        class: "col-span-3",
                        modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.dc,
                        "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.dc = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                      createVNode(_component_Label, {
                        for: "namu",
                        class: "text-right"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC800\uC790 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        id: "namu",
                        class: "col-span-3",
                        modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.author,
                        "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.author = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                      createVNode(_component_Label, {
                        for: "namu",
                        class: "text-right"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uCD9C\uD310\uC0AC ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        id: "namu",
                        class: "col-span-3",
                        modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.publisher,
                        "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.publisher = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                      createVNode(_component_Label, {
                        for: "namu",
                        class: "text-right"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC694\uC57D ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        id: "namu",
                        class: "col-span-3",
                        modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.description,
                        "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.description = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                      createVNode(_component_Label, {
                        for: "namu",
                        class: "text-right"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC904\uAC70\uB9AC ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        id: "namu",
                        class: "col-span-3",
                        modelValue: ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.summary,
                        "onUpdate:modelValue": ($event) => ("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.summary = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  createVNode(_component_DialogFooter, null, {
                    default: withCtx(() => [
                      createVNode(_component_Button, {
                        variant: "secondary",
                        onClick: coverImageUpload,
                        disabled: !("useBook" in _ctx ? _ctx.useBook : unref(useBook))().selected.value.namu
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(coverImageUploadLoading) ? "Uploading..." : "Cover Image Upload"), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled"]),
                      createVNode(_component_Button, { onClick: ok }, {
                        default: withCtx(() => [
                          createTextVNode("Save changes")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dialog/book.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=book-7BGUHoYl.mjs.map
