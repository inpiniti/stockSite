import { _ as _sfc_main$1 } from './index-K3pjwam9.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';
import 'radix-vue';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Button = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-5/6 flex flex-col items-center justify-center p-48 gap-10" }, _attrs))}><div class="flex flex-col gap-4"><h1 class="text-7xl font-extrabold">Inpiniti</h1><h1 class="text-7xl font-extrabold text-red-400">Stock App</h1></div><div class="flex flex-col gap-2"><h2>\uC5B4\uC11C\uC624\uC138\uC694, inpiniti/app \uC5D0 \uC5EC\uB7EC\uBD84\uC744 \uCD08\uB300\uD569\uB2C8\uB2E4!</h2><h2>\uC5EC\uAE30\uB294 \uB9CC\uD654\uC640 \uC8FC\uC2DD\uC758 \uBA4B\uC9C4 \uC138\uACC4\uAC00 \uB9CC\uB098 \uB9CC\uB4E4\uC5B4\uC9C4 \uACF3\uC785\uB2C8\uB2E4.</h2><h2> \uB9CC\uD654\uC5D0 \uBE60\uC838\uB4E0 \uB2F9\uC2E0\uACFC \uC8FC\uC2DD\uC5D0 \uD479 \uBE60\uC9C4 \uB2F9\uC2E0\uC744 \uC704\uD55C \uCD5C\uACE0\uC758 \uB9CC\uB0A8\uC758 \uC7A5\uC744 \uC5F4\uC5B4\uBD24\uC2B5\uB2C8\uB2E4. </h2><h2> inpiniti/app \uB294 \uC5EC\uB7EC\uBD84\uC774 \uB9CC\uD654\uC640 \uC8FC\uC2DD\uC5D0 \uB300\uD55C \uC990\uAC70\uC6B4 \uC2DC\uAC04\uC744 \uBCF4\uB0BC \uC218 \uC788\uB294 \uB3D9\uC2DC\uC5D0 \uC18C\uC911\uD55C \uC815\uBCF4\uB97C \uC5BB\uC744 \uC218 \uC788\uB294 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4. </h2><h2> \uC6B0\uB9AC\uC758 \uB2E4\uC591\uD55C \uCEE4\uBBA4\uB2C8\uD2F0\uC5D0\uC11C\uB294 \uB9CC\uD654\uC640 \uC8FC\uC2DD\uC5D0 \uB300\uD55C \uC18C\uB2E4\uC640 \uACBD\uD5D8\uC744 \uB098\uB204\uACE0, \uD568\uAED8 \uC131\uC7A5\uD560 \uC218 \uC788\uB294 \uB3D9\uB8CC\uB4E4\uACFC \uC18C\uD1B5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. </h2></div>`);
  _push(ssrRenderComponent(_component_Button, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Get Start`);
      } else {
        return [
          createTextVNode("Get Start")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-9Q5qfgND.mjs.map
