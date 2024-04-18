import { _ as _sfc_main$1 } from './Separator-SzPKFLHH.mjs';
import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import 'radix-vue';
import '../server.mjs';
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
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import 'lucide-vue-next';

const _sfc_main = {
  __name: "board",
  __ssrInlineRender: true,
  setup(__props) {
    ref(["m@example.com", "m@google.com", "m@support.com"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Separator = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))}><div><h3 class="text-lg font-medium">Profile</h3><p class="text-sm text-muted-foreground">This is how others will see you on the site.</p></div>`);
      _push(ssrRenderComponent(_component_Separator, { class: "my-4" }, null, _parent));
      _push(`<div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/board.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=board-Eoj-ggmX.mjs.map
