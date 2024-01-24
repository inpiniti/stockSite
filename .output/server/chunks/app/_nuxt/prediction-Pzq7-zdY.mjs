import { _ as _sfc_main$1 } from './Header-Ffs2ceUt.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_CommonHeader = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_CommonHeader, {
    title: "\uC8FC\uC2DD \uC608\uCE21",
    description: "\uBAA8\uB378\uB85C \uBD80\uD130 \uC8FC\uC2DD \uC608\uCE21\uC744 \uD569\uB2C8\uB2E4."
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/stock/prediction.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const prediction = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { prediction as default };
//# sourceMappingURL=prediction-Pzq7-zdY.mjs.map
