import { ref, useSSRContext, defineComponent, computed, resolveComponent, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import { createInjectionState } from '@vueuse/core';
import emblaCarouselVue from 'embla-carousel-vue';
import { a as cn } from '../server.mjs';
import { r as replaceDomain } from './book-UYRGbw0c.mjs';
import InfiniteLoading from 'v3-infinite-loading';
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
import 'class-variance-authority';
import 'radix-vue';
import 'clsx';
import 'tailwind-merge';
import 'lucide-vue-next';

const [useProvideCarousel, useInjectCarousel] = createInjectionState(
  ({
    opts,
    orientation,
    plugins
  }, emits) => {
    const [emblaNode, emblaApi] = emblaCarouselVue({
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    }, plugins);
    function scrollPrev() {
      var _a;
      (_a = emblaApi.value) == null ? void 0 : _a.scrollPrev();
    }
    function scrollNext() {
      var _a;
      (_a = emblaApi.value) == null ? void 0 : _a.scrollNext();
    }
    const canScrollNext = ref(true);
    const canScrollPrev = ref(true);
    return { carouselRef: emblaNode, carouselApi: emblaApi, canScrollPrev, canScrollNext, scrollPrev, scrollNext, orientation };
  }
);
function useCarousel() {
  const carouselState = useInjectCarousel();
  if (!carouselState)
    throw new Error("useCarousel must be used within a <Carousel />");
  return carouselState;
}
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Carousel",
  __ssrInlineRender: true,
  props: {
    opts: {},
    plugins: {},
    orientation: { default: "horizontal" },
    class: {}
  },
  emits: ["init-api"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const carouselArgs = useProvideCarousel(props, emits);
    __expose(carouselArgs);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("relative", props.class),
        role: "region",
        "aria-roledescription": "carousel",
        tabindex: "0"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", unref(carouselArgs), null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/carousel/Carousel.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "CarouselContent",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { carouselRef, orientation } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "carouselRef",
        ref: carouselRef,
        class: "overflow-hidden"
      }, _attrs))}><div${ssrRenderAttrs(mergeProps({
        class: unref(cn)(
          "flex",
          unref(orientation) === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          props.class
        )
      }, _ctx.$attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/carousel/CarouselContent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CarouselItem",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { orientation } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        role: "group",
        "aria-roledescription": "slide",
        class: unref(cn)(
          "min-w-0 shrink-0 grow-0 basis-full",
          unref(orientation) === "horizontal" ? "pl-4" : "pt-4",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/carousel/CarouselItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "board",
  __ssrInlineRender: true,
  setup(__props) {
    const books = ref([]);
    const page = ref(1);
    const pageBooks = computed(() => {
      return books.value.slice(0, page.value * 20);
    });
    function infiniteHandler($state) {
      page.value++;
      $state.loaded();
    }
    function imgLinkParse(link) {
      if (link.includes("[")) {
        console.log(JSON.parse(link));
        return JSON.parse(link);
      } else {
        let arr = [];
        arr.push(link);
        return arr;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Carousel = _sfc_main$3;
      const _component_CarouselContent = _sfc_main$2;
      const _component_CarouselItem = _sfc_main$1;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="grid sm:grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 xl:md:grid-cols-4 gap-4 overflow-hidden"><!--[-->`);
      ssrRenderList(unref(pageBooks), (book) => {
        _push(`<div class="w-screen"><div class="relative w-full"><div class="absolute z-10 p-2 text-white"><div class="font-bold">${ssrInterpolate(book.title)}</div><div class="text-sm">${ssrInterpolate(book.writer)}</div></div>`);
        _push(ssrRenderComponent(_component_Carousel, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_CarouselContent, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(imgLinkParse(book.link), (img) => {
                      _push3(ssrRenderComponent(_component_CarouselItem, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<img class="lg:rounded-md md:h-72 w-full object-fill"${ssrRenderAttr("src", ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(img).replace(/co\.kr/g, "com"))}${_scopeId3}>`);
                          } else {
                            return [
                              createVNode("img", {
                                class: "lg:rounded-md md:h-72 w-full object-fill",
                                src: ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(img).replace(/co\.kr/g, "com")
                              }, null, 8, ["src"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(imgLinkParse(book.link), (img) => {
                        return openBlock(), createBlock(_component_CarouselItem, null, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "lg:rounded-md md:h-72 w-full object-fill",
                              src: ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(img).replace(/co\.kr/g, "com")
                            }, null, 8, ["src"])
                          ]),
                          _: 2
                        }, 1024);
                      }), 256))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_CarouselContent, null, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(imgLinkParse(book.link), (img) => {
                      return openBlock(), createBlock(_component_CarouselItem, null, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "lg:rounded-md md:h-72 w-full object-fill",
                            src: ("replaceDomain" in _ctx ? _ctx.replaceDomain : unref(replaceDomain))(img).replace(/co\.kr/g, "com")
                          }, null, 8, ["src"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 256))
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="absolute top-0 left-0 w-full h-full lg:rounded-md" style="${ssrRenderStyle({ "background": "linear-gradient(\r\n                to bottom,\r\n                rgba(0, 0, 0, 0.5),\r\n                rgba(0, 0, 0, 0) 50%\r\n              )", "pointer-events": "none" })}"></div></div><div class="px-2 flex flex-col w-full"><div class=""><div class="line-clamp-3 overflow-hidden">${ssrInterpolate(book.content)}</div><div class="flex text-xs text-neutral-400 gap-2"><div>`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["far", "calendar-check"] }, null, _parent));
        _push(` ${ssrInterpolate(book.date)}</div></div><div class="flex text-xs text-neutral-400 gap-2"><div>`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["far", "comment"] }, null, _parent));
        _push(` ${ssrInterpolate(book.number)}</div><div>`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["far", "eye"] }, null, _parent));
        _push(` ${ssrInterpolate(book.count)}</div><div>`);
        _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "star"] }, null, _parent));
        _push(` ${ssrInterpolate(book.recommend)}</div></div></div></div></div>`);
      });
      _push(`<!--]--></div>`);
      if (unref(pageBooks).length > 0) {
        _push(ssrRenderComponent(unref(InfiniteLoading), { onInfinite: infiniteHandler }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
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
//# sourceMappingURL=board-PG5yGWn1.mjs.map
