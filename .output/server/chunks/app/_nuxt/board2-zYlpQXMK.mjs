import { defineComponent, ref, resolveComponent, unref, useSSRContext } from 'vue';
import { r as replaceDomain } from './book-JkoC1KYI.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "board2",
  __ssrInlineRender: true,
  setup(__props) {
    const books = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1>\uAC8C\uC2DC\uD310</h1><ul class="grid grid-cols-3 gap-4"><!--[-->`);
      ssrRenderList(unref(books), (book) => {
        _push(`<li><img class="rounded-md h-72 w-full object-cover"${ssrRenderAttr("src", ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(book.link).replace(/co\.kr/g, "com"))}><div>${ssrInterpolate(book.title)}</div><div class="flex text-xs text-neutral-400 gap-2"><div>`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "user"] }, null, _parent));
        _push(` ${ssrInterpolate(book.writer)}</div><div>`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["far", "calendar-check"] }, null, _parent));
        _push(` ${ssrInterpolate(book.date)}</div></div><div class="flex text-xs text-neutral-400 gap-2"><div>`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["far", "comment"] }, null, _parent));
        _push(` ${ssrInterpolate(book.number)}</div><div>`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["far", "eye"] }, null, _parent));
        _push(` ${ssrInterpolate(book.count)}</div><div>`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "star"] }, null, _parent));
        _push(` ${ssrInterpolate(book.recommend)}</div></div></li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/book/board2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=board2-zYlpQXMK.mjs.map
