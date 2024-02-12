import { _ as _sfc_main$1 } from './Header-Ffs2ceUt.mjs';
import { _ as _sfc_main$2 } from './DataTable-L58WYI16.mjs';
import { d as useRuntimeConfig } from '../server.mjs';
import { u as useFetch } from './fetch-fy2p8z4q.mjs';
import { defineComponent, withAsyncContext, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { columns } from './columns-XVT2iRHD.mjs';
import './Input-eHzHGyo6.mjs';
import '@vueuse/core';
import './DropdownMenuContent-1CsI37mc.mjs';
import 'radix-vue';
import './TableRow-SiplgGlM.mjs';
import 'lucide-vue-next';
import './index-VljijB2M.mjs';
import 'class-variance-authority';
import '@tanstack/vue-table';
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
import '@yeger/vue-masonry-wall';
import 'clsx';
import 'tailwind-merge';
import './DataTableDropDown-U4ebnWSx.mjs';
import './state-0C5oRJ7z.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "list",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const runtimeConfig = useRuntimeConfig();
    const { data, error, pending, execute, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${runtimeConfig.public.apiBase}/db/financials`,
      "$A5lh5Ef2OF"
    )), __temp = await __temp, __restore(), __temp);
    const financials = computed(() => {
      if (data.value) {
        return data.value;
      }
      return [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonHeader = _sfc_main$1;
      const _component_PagesBookDataTable = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_CommonHeader, {
        title: "\uC8FC\uC2DD \uB370\uC774\uD130",
        description: "\uC218\uC9D1\uB41C \uC8FC\uC2DD\uC758 \uB370\uC774\uD130\uB97C \uBCF4\uC5EC\uC90D\uB2C8\uB2E4."
      }, null, _parent));
      _push(ssrRenderComponent(_component_PagesBookDataTable, {
        columns: unref(columns),
        data: unref(financials)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/stock/list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=list-whXXXjob.mjs.map
