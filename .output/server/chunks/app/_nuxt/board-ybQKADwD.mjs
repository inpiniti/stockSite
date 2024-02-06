import { defineComponent, ref, resolveComponent, unref, useSSRContext } from 'vue';
import { r as replaceDomain } from './book-3UXiacyj.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "board",
  __ssrInlineRender: true,
  setup(__props) {
    const books = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="grid sm:grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 xl:md:grid-cols-4 gap-4 overflow-hidden"><!--[-->`);
      ssrRenderList(unref(books), (book) => {
        _push(`<div class="w-screen"><div class="relative w-full"><div class="absolute z-10 p-2 text-white"><div class="font-bold">${ssrInterpolate(book.title)}</div><div class="text-sm">${ssrInterpolate(book.writer)}</div></div><img class="lg:rounded-md md:h-72 w-full object-fill"${ssrRenderAttr(
          "src",
          book.link ? ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(book.link).replace(/co\.kr/g, "com") : ""
        )}><div class="absolute top-0 left-0 w-full h-full lg:rounded-md" style="${ssrRenderStyle({ "background": "linear-gradient(\n                to bottom,\n                rgba(0, 0, 0, 0.5),\n                rgba(0, 0, 0, 0) 50%\n              )" })}"></div></div><div class="px-2 flex flex-col w-full"><div class=""><div class="line-clamp-3 overflow-hidden">${ssrInterpolate(book.content)}</div><div class="flex text-xs text-neutral-400 gap-2"><div>`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["far", "calendar-check"] }, null, _parent));
        _push(` ${ssrInterpolate(book.date)}</div></div><div class="flex text-xs text-neutral-400 gap-2"><div>`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["far", "comment"] }, null, _parent));
        _push(` ${ssrInterpolate(book.number)}</div><div>`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["far", "eye"] }, null, _parent));
        _push(` ${ssrInterpolate(book.count)}</div><div>`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "star"] }, null, _parent));
        _push(` ${ssrInterpolate(book.recommend)}</div></div></div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/book/board.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=board-ybQKADwD.mjs.map
