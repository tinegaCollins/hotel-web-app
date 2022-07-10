
// --------------------
// Request: /home/tinega/Desktop/dont/hotel-web-app-1/node_modules/nuxt/dist/app/entry
// Parents: 
// - <entry> ($id_c757eb9e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/ohmyfetch/dist/index.mjs ($id_780217c4)
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/paths.mjs ($id_910a916e)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/css.mjs ($id_ea848319)
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/plugins/server.mjs ($id_ebe77c79)
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/root-component.mjs ($id_cc2a1ddf)
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/app-component.mjs ($id_fd901148)
// --------------------
const $id_dff74673 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ohmyfetch/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/paths.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/css.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/plugins/server.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/root-component.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/app-component.mjs");

if (!globalThis.$fetch) {
  globalThis.$fetch = __vite_ssr_import_1__.$fetch.create({
    baseURL: __vite_ssr_import_2__.baseURL()
  });
}
let entry;
const plugins = __vite_ssr_import_3__.normalizePlugins(__vite_ssr_import_5__.default);
if (true) {
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp, ssrContext });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      ssrContext.error = ssrContext.error || err;
    }
    return vueApp;
  };
}
if (false) {
  if (true && __vite_ssr_import_meta__.webpackHot) {
    __vite_ssr_import_meta__.webpackHot.accept();
  }
  entry = async function initApp() {
    const isSSR = Boolean(window.__NUXT__?.serverRendered);
    const vueApp = isSSR ? __vite_ssr_import_0__.createSSRApp(__vite_ssr_import_6__.default) : __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp });
    nuxt.hooks.hookOnce("app:suspense:resolve", () => {
      nuxt.isHydrating = false;
    });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    try {
      await nuxt.hooks.callHook("app:created", vueApp);
      await nuxt.hooks.callHook("app:beforeMount", vueApp);
      vueApp.mount("#__nuxt");
      await nuxt.hooks.callHook("app:mounted", vueApp);
      await __vite_ssr_import_0__.nextTick();
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
  };
  entry().catch((error) => {
    console.error("Error while mounting app:", error);
  });
}
__vite_ssr_exports__.default = (ctx) => entry(ctx);
;
}


// --------------------
// Request: /node_modules/vue/dist/vue.cjs.js
// Parents: 
// - /home/tinega/Desktop/dont/hotel-web-app-1/node_modules/nuxt/dist/app/entry ($id_dff74673)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_df511336)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_7d872108)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/components.plugin.mjs ($id_34960b57)
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_b2a29d6f)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_80f433aa)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_69c52686)
// - /components/nav-bar.vue ($id_12afc13c)
// - /pages/account.vue?macro=true ($id_1aee8f25)
// - /pages/cart/checkout.vue?macro=true ($id_f03203d7)
// - /pages/cart/index.vue?macro=true ($id_7c49fc15)
// - /components/location.vue ($id_a4c810b5)
// - /components/landing-page.vue ($id_f281e5fb)
// - /components/specials-today.vue ($id_8de6d258)
// - /components/other-meals.vue ($id_72602127)
// - /pages/index/index.vue?macro=true ($id_5878fe75)
// - /pages/login.vue?macro=true ($id_213baa8a)
// - /pages/menu/index.vue?macro=true ($id_0a7b1a7f)
// - /pages/menu/index/[filter].vue?macro=true ($id_df565390)
// - /pages/signup.vue?macro=true ($id_ae8d024a)
// - /pages/account.vue ($id_ce2c396d)
// - /pages/cart/checkout.vue ($id_541d3871)
// - /pages/cart/index.vue ($id_3fa45d07)
// - /pages/index/index.vue ($id_a200782a)
// - /pages/login.vue ($id_b0922173)
// - /pages/menu/index/[filter].vue ($id_8eae100f)
// - /pages/menu/index.vue ($id_30db1f12)
// - /pages/signup.vue ($id_31eb92be)
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/dist.plugin.01f1902c.mjs ($id_05f14bc4)
// - /node_modules/nuxt/dist/app/compat/capi.mjs ($id_0c5717a4)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/imports.mjs ($id_ed628c0d)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/layouts.mjs ($id_73cfc864)
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_6c61010f)
// Dependencies: 

// --------------------
const $id_60f0615f = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///home/tinega/Desktop/dont/hotel-web-app-1/node_modules/vue/dist/vue.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/home/tinega/Desktop/dont/hotel-web-app-1/node_modules/vue/dist/vue.cjs.js\".")
  })


// --------------------
// Request: /node_modules/ohmyfetch/dist/index.mjs
// Parents: 
// - /home/tinega/Desktop/dont/hotel-web-app-1/node_modules/nuxt/dist/app/entry ($id_dff74673)
// Dependencies: 

// --------------------
const $id_780217c4 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///home/tinega/Desktop/dont/hotel-web-app-1/node_modules/ohmyfetch/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/home/tinega/Desktop/dont/hotel-web-app-1/node_modules/ohmyfetch/dist/index.mjs\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/paths.mjs
// Parents: 
// - /home/tinega/Desktop/dont/hotel-web-app-1/node_modules/nuxt/dist/app/entry ($id_dff74673)
// Dependencies: 
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// --------------------
const $id_910a916e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const appConfig = {"baseURL":"/","buildAssetsDir":"/_nuxt/","assetsPath":{},"cdnURL":"","head":{"charset":"utf-8","viewport":"width=device-width, initial-scale=1","meta":[],"link":[],"style":[],"script":[]}}
const baseURL = () => appConfig.baseURL
Object.defineProperty(__vite_ssr_exports__, "baseURL", { enumerable: true, configurable: true, get(){ return baseURL }});
const buildAssetsDir = () => appConfig.buildAssetsDir
Object.defineProperty(__vite_ssr_exports__, "buildAssetsDir", { enumerable: true, configurable: true, get(){ return buildAssetsDir }});
const buildAssetsURL = (...path) => __vite_ssr_import_0__.joinURL(publicAssetsURL(), buildAssetsDir(), ...path)
Object.defineProperty(__vite_ssr_exports__, "buildAssetsURL", { enumerable: true, configurable: true, get(){ return buildAssetsURL }});
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL
  return path.length ? __vite_ssr_import_0__.joinURL(publicBase, ...path) : publicBase
}
Object.defineProperty(__vite_ssr_exports__, "publicAssetsURL", { enumerable: true, configurable: true, get(){ return publicAssetsURL }});;
}


// --------------------
// Request: /node_modules/ufo/dist/index.mjs
// Parents: 
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/paths.mjs ($id_910a916e)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_614de060 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///home/tinega/Desktop/dont/hotel-web-app-1/node_modules/ufo/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/home/tinega/Desktop/dont/hotel-web-app-1/node_modules/ufo/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/index.mjs
// Parents: 
// - /home/tinega/Desktop/dont/hotel-web-app-1/node_modules/nuxt/dist/app/entry ($id_dff74673)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_0063df1b)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_7d872108)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_6fe050f1)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_c4866ba7)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// - /node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_9871bba0)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /pages/account.vue?macro=true ($id_1aee8f25)
// - /pages/cart/index.vue?macro=true ($id_7c49fc15)
// - /pages/login.vue?macro=true ($id_213baa8a)
// - /pages/menu/index.vue?macro=true ($id_0a7b1a7f)
// - /pages/menu/index/[filter].vue?macro=true ($id_df565390)
// - /pages/signup.vue?macro=true ($id_ae8d024a)
// - /pages/account.vue ($id_ce2c396d)
// - /pages/cart/index.vue ($id_3fa45d07)
// - /pages/login.vue ($id_b0922173)
// - /pages/menu/index/[filter].vue ($id_8eae100f)
// - /pages/menu/index.vue ($id_30db1f12)
// - /pages/signup.vue ($id_31eb92be)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/imports.mjs ($id_ed628c0d)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// Dependencies: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// - /node_modules/nuxt/dist/app/components/index.mjs ($id_161bfe9f)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// --------------------
const $id_36927477 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_2__);
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useHead }});
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useMeta }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/nuxt.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a48341bc)
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/hookable/dist/index.mjs ($id_a2c811c4)
// - /node_modules/unctx/dist/index.mjs ($id_a569ca2d)
// - /node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a48341bc)
// --------------------
const $id_e069d411 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/hookable/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/unctx/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/legacy-app.mjs");

const nuxtAppCtx = __vite_ssr_import_2__.getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
Object.defineProperty(__vite_ssr_exports__, "NuxtPluginIndicator", { enumerable: true, configurable: true, get(){ return NuxtPluginIndicator }});
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: __vite_ssr_import_0__.reactive({
      data: {},
      state: {},
      _errors: {},
      ...false ? window.__NUXT__ : { serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    ...options
  };
  nuxtApp.hooks = __vite_ssr_import_1__.createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (nuxtApp.ssrContext) {
    nuxtApp.ssrContext.nuxt = nuxtApp;
  }
  if (true) {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  if (true) {
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = true ? options.ssrContext.runtimeConfig : __vite_ssr_import_0__.reactive(nuxtApp.payload.config);
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      if (prop === "public") {
        return target.public;
      }
      return target[prop] ?? target.public[prop];
    },
    set(target, prop, value) {
      if (true || prop === "public" || prop === "app") {
        return false;
      }
      target[prop] = value;
      target.public[prop] = value;
      return true;
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
Object.defineProperty(__vite_ssr_exports__, "createNuxtApp", { enumerable: true, configurable: true, get(){ return createNuxtApp }});
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide && typeof provide === "object") {
    for (const key in provide) {
      nuxtApp.provide(key, provide[key]);
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugin", { enumerable: true, configurable: true, get(){ return applyPlugin }});
async function applyPlugins(nuxtApp, plugins) {
  for (const plugin of plugins) {
    await applyPlugin(nuxtApp, plugin);
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugins", { enumerable: true, configurable: true, get(){ return applyPlugins }});
function normalizePlugins(_plugins) {
  let needsLegacyContext = false;
  const plugins = _plugins.map((plugin) => {
    if (typeof plugin !== "function") {
      return () => {
      };
    }
    if (isLegacyPlugin(plugin)) {
      needsLegacyContext = true;
      return (nuxtApp) => plugin(nuxtApp._legacyContext, nuxtApp.provide);
    }
    return plugin;
  });
  if (needsLegacyContext) {
    plugins.unshift(__vite_ssr_import_3__.legacyPlugin);
  }
  return plugins;
}
Object.defineProperty(__vite_ssr_exports__, "normalizePlugins", { enumerable: true, configurable: true, get(){ return normalizePlugins }});
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return defineNuxtPlugin }});
function isLegacyPlugin(plugin) {
  return !plugin[NuxtPluginIndicator];
}
Object.defineProperty(__vite_ssr_exports__, "isLegacyPlugin", { enumerable: true, configurable: true, get(){ return isLegacyPlugin }});
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  if (true) {
    return nuxtAppCtx.callAsync(nuxt, fn);
  } else {
    nuxtAppCtx.set(nuxt);
    return fn();
  }
}
Object.defineProperty(__vite_ssr_exports__, "callWithNuxt", { enumerable: true, configurable: true, get(){ return callWithNuxt }});
function useNuxtApp() {
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  if (!vm) {
    const nuxtAppInstance = nuxtAppCtx.use();
    if (!nuxtAppInstance) {
      throw new Error("nuxt instance unavailable");
    }
    return nuxtAppInstance;
  }
  return vm.appContext.app.$nuxt;
}
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return useNuxtApp }});
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return useRuntimeConfig }});
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
;
}


// --------------------
// Request: /node_modules/hookable/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// Dependencies: 

// --------------------
const $id_a2c811c4 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///home/tinega/Desktop/dont/hotel-web-app-1/node_modules/hookable/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/home/tinega/Desktop/dont/hotel-web-app-1/node_modules/hookable/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/unctx/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// Dependencies: 

// --------------------
const $id_a569ca2d = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///home/tinega/Desktop/dont/hotel-web-app-1/node_modules/unctx/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/home/tinega/Desktop/dont/hotel-web-app-1/node_modules/unctx/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/legacy-app.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// Dependencies: 
// - /node_modules/unenv/runtime/mock/proxy.mjs ($id_39e12da7)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// --------------------
const $id_a48341bc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/unenv/runtime/mock/proxy.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");

function mock(warning) {
  console.warn(warning);
  return __vite_ssr_import_0__.default;
}
const unsupported = new Set([
  "store",
  "spa",
  "fetchCounters"
]);
const todo = new Set([
  "isHMR",
  "base",
  "payload",
  "from",
  "next",
  "error",
  "redirect",
  "redirected",
  "enablePreview",
  "$preview",
  "beforeNuxtRender",
  "beforeSerialize"
]);
const serverProperties = new Set([
  "req",
  "res",
  "ssrContext"
]);
const routerKeys = ["route", "params", "query"];
const staticFlags = {
  isClient: false,
  isServer: true,
  isDev: true,
  isStatic: void 0,
  target: "server",
  modern: false
};
const legacyPlugin = (nuxtApp) => {
  nuxtApp._legacyContext = new Proxy(nuxtApp, {
    get(nuxt, p) {
      if (unsupported.has(p)) {
        return mock(`Accessing ${p} is not supported in Nuxt 3.`);
      }
      if (todo.has(p)) {
        return mock(`Accessing ${p} is not yet supported in Nuxt 3.`);
      }
      if (routerKeys.includes(p)) {
        if (!("$router" in nuxtApp)) {
          return mock("vue-router is not being used in this project.");
        }
        switch (p) {
          case "route":
            return nuxt.$router.currentRoute.value;
          case "params":
          case "query":
            return nuxt.$router.currentRoute.value[p];
        }
      }
      if (p === "$config" || p === "env") {
        return __vite_ssr_import_1__.useRuntimeConfig();
      }
      if (p in staticFlags) {
        return staticFlags[p];
      }
      if (false && serverProperties.has(p)) {
        return void 0;
      }
      if (p === "ssrContext") {
        return nuxt._legacyContext;
      }
      if (nuxt.ssrContext && p in nuxt.ssrContext) {
        return nuxt.ssrContext[p];
      }
      if (p === "nuxt") {
        return nuxt.payload;
      }
      if (p === "nuxtState") {
        return nuxt.payload.data;
      }
      if (p in nuxtApp.vueApp) {
        return nuxtApp.vueApp[p];
      }
      if (p in nuxtApp) {
        return nuxtApp[p];
      }
      return mock(`Accessing ${p} is not supported in Nuxt3.`);
    }
  });
  if (false) {
    nuxtApp.hook("app:created", () => {
      const legacyApp = new Proxy(nuxtApp.vueApp, {
        get(source, p) {
          if (["$root", "constructor"].includes(p)) {
            return legacyApp;
          }
          return source[p] || nuxtApp[p];
        }
      });
      window[`$${nuxtApp.globalName}`] = legacyApp;
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "legacyPlugin", { enumerable: true, configurable: true, get(){ return legacyPlugin }});
;
}


// --------------------
// Request: /node_modules/unenv/runtime/mock/proxy.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a48341bc)
// Dependencies: 

// --------------------
const $id_39e12da7 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///home/tinega/Desktop/dont/hotel-web-app-1/node_modules/unenv/runtime/mock/proxy.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/home/tinega/Desktop/dont/hotel-web-app-1/node_modules/unenv/runtime/mock/proxy.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// Dependencies: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_0063df1b)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_7d872108)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_6fe050f1)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_c4866ba7)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// --------------------
const $id_b067a79a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/component.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtComponent }});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useLazyAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.refreshNuxtData }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/hydrate.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useHydration }});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/state.mjs");

Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useState }});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/error.mjs");

Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.throwError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useError }});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/fetch.mjs");

Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useLazyFetch }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/cookie.mjs");

Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useCookie }});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.mjs");

Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestEvent }});
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/router.mjs");

Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useActiveRoute }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRouter }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// --------------------
const $id_53345950 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

const NuxtComponentIndicator = "__nuxt_component";
Object.defineProperty(__vite_ssr_exports__, "NuxtComponentIndicator", { enumerable: true, configurable: true, get(){ return NuxtComponentIndicator }});
async function runLegacyAsyncData(res, fn) {
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const route = __vite_ssr_import_1__.useRoute();
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  const { fetchKey } = vm.proxy.$options;
  const key = typeof fetchKey === "function" ? fetchKey(() => "") : fetchKey || route.fullPath;
  const { data } = await __vite_ssr_import_3__.useAsyncData(`options:asyncdata:${key}`, () => fn(nuxt._legacyContext));
  if (data.value && typeof data.value === "object") {
    Object.assign(await res, __vite_ssr_import_0__.toRefs(__vite_ssr_import_0__.reactive(data.value)));
  } else if (true) {
    console.warn("[nuxt] asyncData should return an object", data);
  }
}
const defineNuxtComponent = function defineNuxtComponent2(options) {
  const { setup } = options;
  if (!setup && !options.asyncData) {
    return {
      [NuxtComponentIndicator]: true,
      ...options
    };
  }
  return {
    [NuxtComponentIndicator]: true,
    ...options,
    setup(props, ctx) {
      const res = setup?.(props, ctx) || {};
      let promises = [];
      promises = promises || [];
      if (options.asyncData) {
        promises.push(runLegacyAsyncData(res, options.asyncData));
      }
      return Promise.resolve(res).then(() => Promise.all(promises)).then(() => res).finally(() => {
        promises.length = 0;
        promises = null;
      });
    }
  };
};
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return defineNuxtComponent }});
;
}


// --------------------
// Request: /node_modules/vue-router/dist/vue-router.cjs.js
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// Dependencies: 

// --------------------
const $id_f9a4a698 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///home/tinega/Desktop/dont/hotel-web-app-1/node_modules/vue-router/dist/vue-router.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/home/tinega/Desktop/dont/hotel-web-app-1/node_modules/vue-router/dist/vue-router.cjs.js\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/asyncData.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_df511336)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_d5b6a221 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const getDefault = () => null;
function useAsyncData(key, handler, options = {}) {
  if (typeof key !== "string") {
    throw new TypeError("asyncData key must be a string");
  }
  if (typeof handler !== "function") {
    throw new TypeError("asyncData handler must be a function");
  }
  options = { server: true, default: getDefault, ...options };
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = options.lazy ?? options.defer ?? false;
  options.initialCache = options.initialCache ?? true;
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const instance = __vite_ssr_import_0__.getCurrentInstance();
  if (instance && !instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      __vite_ssr_import_0__.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      __vite_ssr_import_0__.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const useInitialCache = () => options.initialCache && nuxt.payload.data[key] !== void 0;
  const asyncData = {
    data: __vite_ssr_import_1__.wrapInRef(nuxt.payload.data[key] ?? options.default()),
    pending: __vite_ssr_import_0__.ref(!useInitialCache()),
    error: __vite_ssr_import_0__.ref(nuxt.payload._errors[key] ?? null)
  };
  asyncData.refresh = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      return nuxt._asyncDataPromises[key];
    }
    if (opts._initial && useInitialCache()) {
      return nuxt.payload.data[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = Promise.resolve(handler(nuxt)).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      asyncData.error.value = error;
      asyncData.data.value = __vite_ssr_import_0__.unref(options.default());
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (true && fetchOnServer) {
    const promise = initialFetch();
    __vite_ssr_import_0__.onServerPrefetch(() => promise);
  }
  if (false) {
    if (fetchOnServer && nuxt.isHydrating && key in nuxt.payload.data) {
      asyncData.pending.value = false;
    } else if (instance && nuxt.payload.serverRendered && (nuxt.isHydrating || options.lazy)) {
      instance._nuxtOnBeforeMountCbs.push(initialFetch);
    } else {
      initialFetch();
    }
    if (options.watch) {
      __vite_ssr_import_0__.watch(options.watch, () => asyncData.refresh());
    }
    const off = nuxt.hook("app:data:refresh", (keys) => {
      if (!keys || keys.includes(key)) {
        return asyncData.refresh();
      }
    });
    if (instance) {
      __vite_ssr_import_0__.onUnmounted(off);
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return useAsyncData }});
function useLazyAsyncData(key, handler, options = {}) {
  return useAsyncData(key, handler, { ...options, lazy: true });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return useLazyAsyncData }});
function refreshNuxtData(keys) {
  if (true) {
    return Promise.resolve();
  }
  const _keys = keys ? Array.isArray(keys) ? keys : [keys] : void 0;
  return __vite_ssr_import_2__.useNuxtApp().callHook("app:data:refresh", _keys);
}
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return refreshNuxtData }});
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_df511336 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const wrapInRef = (value) => __vite_ssr_import_0__.isRef(value) ? value : __vite_ssr_import_0__.ref(value);
Object.defineProperty(__vite_ssr_exports__, "wrapInRef", { enumerable: true, configurable: true, get(){ return wrapInRef }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/hydrate.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_0063df1b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useHydration = (key, get, set) => {
  const nuxt = __vite_ssr_import_0__.useNuxtApp();
  if (true) {
    nuxt.hooks.hook("app:rendered", () => {
      nuxt.payload[key] = get();
    });
  }
  if (false) {
    nuxt.hooks.hook("app:created", () => {
      set(nuxt.payload[key]);
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return useHydration }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/state.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_7d872108 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useState = (key, init) => {
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const state = __vite_ssr_import_0__.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (__vite_ssr_import_0__.isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
};
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return useState }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/error.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_6fe050f1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useError = () => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  return __vite_ssr_import_0__.useState("error", () => true ? nuxtApp.ssrContext.error : nuxtApp.payload.error);
};
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return useError }});
const throwError = (_err) => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  const error = useError();
  const err = typeof _err === "string" ? new Error(_err) : _err;
  nuxtApp.callHook("app:error", err);
  if (true) {
    nuxtApp.ssrContext.error = nuxtApp.ssrContext.error || err;
  } else {
    error.value = error.value || err;
  }
  return err;
};
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return throwError }});
const clearError = async (options = {}) => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  const error = useError();
  nuxtApp.callHook("app:error:cleared", options);
  if (options.redirect) {
    await nuxtApp.$router.replace(options.redirect);
  }
  error.value = null;
};
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return clearError }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/fetch.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/ohash/dist/index.mjs ($id_b1b82cf3)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// --------------------
const $id_41f5ae4e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ohash/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

function useFetch(request, opts = {}) {
  if (true && opts.transform && !opts.key) {
    console.warn("[nuxt] You should provide a key for `useFetch` when using a custom transform function.");
  }
  const key = "$f_" + (opts.key || __vite_ssr_import_0__.hash([request, { ...opts, transform: null }]));
  const _request = __vite_ssr_import_1__.computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return __vite_ssr_import_1__.isRef(r) ? r.value : r;
  });
  const _fetchOptions = {
    ...opts,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  };
  const _asyncDataOptions = {
    ...opts,
    watch: [
      _request,
      ...opts.watch || []
    ]
  };
  const asyncData = __vite_ssr_import_2__.useAsyncData(key, () => {
    return $fetch(_request.value, _fetchOptions);
  }, _asyncDataOptions);
  return asyncData;
}
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return useFetch }});
function useLazyFetch(request, opts = {}) {
  return useFetch(request, {
    ...opts,
    lazy: true
  });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return useLazyFetch }});
;
}


// --------------------
// Request: /node_modules/ohash/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// Dependencies: 

// --------------------
const $id_b1b82cf3 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///home/tinega/Desktop/dont/hotel-web-app-1/node_modules/ohash/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/home/tinega/Desktop/dont/hotel-web-app-1/node_modules/ohash/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/cookie.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/cookie-es/dist/index.mjs ($id_f4975261)
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/destr/dist/index.mjs ($id_03d15ecd)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_c4866ba7)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_df511336)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_511b441d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/cookie-es/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/destr/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const CookieDefaults = {
  path: "/",
  decode: (val) => __vite_ssr_import_3__.default(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts);
  const cookie = __vite_ssr_import_5__.wrapInRef(cookies[name] ?? opts.default?.());
  if (false) {
    __vite_ssr_import_0__.watch(cookie, () => {
      writeClientCookie(name, cookie.value, opts);
    });
  } else if (true) {
    const nuxtApp = __vite_ssr_import_6__.useNuxtApp();
    const writeFinalCookieValue = () => {
      if (cookie.value !== cookies[name]) {
        writeServerCookie(__vite_ssr_import_4__.useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:redirected", writeFinalCookieValue);
  }
  return cookie;
}
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return useCookie }});
function readRawCookies(opts = {}) {
  if (true) {
    return __vite_ssr_import_1__.parse(__vite_ssr_import_4__.useRequestEvent()?.req.headers.cookie || "", opts);
  } else if (false) {
    return __vite_ssr_import_1__.parse(document.cookie, opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return __vite_ssr_import_1__.serialize(name, value, { ...opts, maxAge: -1 });
  }
  return __vite_ssr_import_1__.serialize(name, value, opts);
}
function writeClientCookie(name, value, opts = {}) {
  if (false) {
    document.cookie = serializeCookie(name, value, opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    __vite_ssr_import_2__.appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
;
}


// --------------------
// Request: /node_modules/cookie-es/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// Dependencies: 

// --------------------
const $id_f4975261 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///home/tinega/Desktop/dont/hotel-web-app-1/node_modules/cookie-es/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/home/tinega/Desktop/dont/hotel-web-app-1/node_modules/cookie-es/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/h3/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_57d7ded6 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///home/tinega/Desktop/dont/hotel-web-app-1/node_modules/h3/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/home/tinega/Desktop/dont/hotel-web-app-1/node_modules/h3/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/destr/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// Dependencies: 

// --------------------
const $id_03d15ecd = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///home/tinega/Desktop/dont/hotel-web-app-1/node_modules/destr/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/home/tinega/Desktop/dont/hotel-web-app-1/node_modules/destr/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/ssr.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_c4866ba7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useRequestHeaders(include) {
  if (false) {
    return {};
  }
  const headers = __vite_ssr_import_0__.useNuxtApp().ssrContext?.event.req.headers ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return useRequestHeaders }});
function useRequestEvent(nuxtApp = __vite_ssr_import_0__.useNuxtApp()) {
  return nuxtApp.ssrContext?.event;
}
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return useRequestEvent }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/router.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_db4d90a8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useRouter = () => {
  return __vite_ssr_import_2__.useNuxtApp()?.$router;
};
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return useRouter }});
const useRoute = () => {
  return __vite_ssr_import_2__.useNuxtApp()._route;
};
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return useRoute }});
const useActiveRoute = () => {
  return __vite_ssr_import_2__.useNuxtApp()._activeRoute;
};
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return useActiveRoute }});
const defineNuxtRouteMiddleware = (middleware) => middleware;
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return defineNuxtRouteMiddleware }});
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
  if (options.global || typeof name === "function") {
    nuxtApp._middleware.global.push(typeof name === "function" ? name : middleware);
  } else {
    nuxtApp._middleware.named[name] = middleware;
  }
};
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return addRouteMiddleware }});
const isProcessingMiddleware = () => {
  try {
    if (__vite_ssr_import_2__.useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options = {}) => {
  if (!to) {
    to = "/";
  }
  if (false && isProcessingMiddleware()) {
    return to;
  }
  const router = useRouter();
  if (true) {
    const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = __vite_ssr_import_1__.joinURL(__vite_ssr_import_2__.useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => __vite_ssr_import_0__.sendRedirect(nuxtApp.ssrContext.event, redirectLocation, options.redirectCode || 302));
    }
  }
  return options.replace ? router.replace(to) : router.push(to);
};
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return navigateTo }});
const abortNavigation = (err) => {
  if (true && !isProcessingMiddleware()) {
    throw new Error("abortNavigation() is only usable inside a route middleware handler.");
  }
  if (err) {
    throw err instanceof Error ? err : new Error(err);
  }
  return false;
};
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return abortNavigation }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// --------------------
const $id_161bfe9f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtLink }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-link.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/index.mjs ($id_161bfe9f)
// - /components/nav-bar.vue ($id_12afc13c)
// - /pages/login.vue?macro=true ($id_213baa8a)
// - /pages/menu/index.vue?macro=true ($id_0a7b1a7f)
// - /pages/signup.vue?macro=true ($id_ae8d024a)
// - /pages/login.vue ($id_b0922173)
// - /pages/menu/index.vue ($id_30db1f12)
// - /pages/signup.vue ($id_31eb92be)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_ffac87b5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const checkPropConflicts = (props, main, sub) => {
    if (true && props[main] !== void 0 && props[sub] !== void 0) {
      console.warn(`[${componentName}] \`${main}\` and \`${sub}\` cannot be used together. \`${sub}\` will be ignored.`);
    }
  };
  return __vite_ssr_import_0__.defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = __vite_ssr_import_2__.useRouter();
      const to = __vite_ssr_import_0__.computed(() => {
        checkPropConflicts(props, "to", "href");
        return props.to || props.href || "";
      });
      const isExternal = __vite_ssr_import_0__.computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || __vite_ssr_import_1__.hasProtocol(to.value, true);
      });
      return () => {
        if (!isExternal.value) {
          return __vite_ssr_import_0__.h(__vite_ssr_import_0__.resolveComponent("RouterLink"), {
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue
          }, slots.default);
        }
        const href = typeof to.value === "object" ? router.resolve(to.value)?.href ?? null : to.value || null;
        const target = props.target || null;
        checkPropConflicts(props, "noRel", "rel");
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        return __vite_ssr_import_0__.h("a", { href, rel, target }, slots.default?.());
      };
    }
  });
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return defineNuxtLink }});
__vite_ssr_exports__.default = defineNuxtLink({ componentName: "NuxtLink" });
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /pages/account.vue?macro=true ($id_1aee8f25)
// - /pages/cart/checkout.vue?macro=true ($id_f03203d7)
// - /pages/cart/index.vue?macro=true ($id_7c49fc15)
// - /pages/index/index.vue?macro=true ($id_5878fe75)
// - /pages/login.vue?macro=true ($id_213baa8a)
// - /pages/menu/index.vue?macro=true ($id_0a7b1a7f)
// - /pages/menu/index/[filter].vue?macro=true ($id_df565390)
// - /pages/signup.vue?macro=true ($id_ae8d024a)
// - /pages/account.vue ($id_ce2c396d)
// - /pages/cart/checkout.vue ($id_541d3871)
// - /pages/cart/index.vue ($id_3fa45d07)
// - /pages/index/index.vue ($id_a200782a)
// - /pages/login.vue ($id_b0922173)
// - /pages/menu/index/[filter].vue ($id_8eae100f)
// - /pages/menu/index.vue ($id_30db1f12)
// - /pages/signup.vue ($id_31eb92be)
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/imports.mjs ($id_ed628c0d)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// --------------------
const $id_b7351483 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/composables.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_b2a29d6f)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// Dependencies: 
// - /node_modules/@vue/shared/dist/shared.cjs.js ($id_852b06a2)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_04ea9504 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vue/shared/dist/shared.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useHead(meta) {
  const resolvedMeta = __vite_ssr_import_0__.isFunction(meta) ? __vite_ssr_import_1__.computed(meta) : meta;
  __vite_ssr_import_2__.useNuxtApp()._useHead(resolvedMeta);
}
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
function useMeta(meta) {
  return useHead(meta);
}
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return useMeta }});
;
}


// --------------------
// Request: /node_modules/@vue/shared/dist/shared.cjs.js
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// Dependencies: 

// --------------------
const $id_852b06a2 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///home/tinega/Desktop/dont/hotel-web-app-1/node_modules/@vue/shared/dist/shared.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/home/tinega/Desktop/dont/hotel-web-app-1/node_modules/@vue/shared/dist/shared.cjs.js\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/css.mjs
// Parents: 
// - /home/tinega/Desktop/dont/hotel-web-app-1/node_modules/nuxt/dist/app/entry ($id_dff74673)
// Dependencies: 

// --------------------
const $id_ea848319 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/* empty */;
}


// --------------------
// Request: /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/plugins/server.mjs
// Parents: 
// - /home/tinega/Desktop/dont/hotel-web-app-1/node_modules/nuxt/dist/app/entry ($id_dff74673)
// Dependencies: 
// - /node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_9871bba0)
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/components.plugin.mjs ($id_34960b57)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/dist.plugin.01f1902c.mjs ($id_05f14bc4)
// --------------------
const $id_ebe77c79 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/plugins/preload.server.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/components.plugin.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/plugin.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/router.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/dist.plugin.01f1902c.mjs");

__vite_ssr_exports__.default = [
  __vite_ssr_import_0__.default,
  __vite_ssr_import_1__.default,
  __vite_ssr_import_2__.default,
  __vite_ssr_import_3__.default,
  __vite_ssr_import_4__.default,
  __vite_ssr_import_5__.default
];
}


// --------------------
// Request: /node_modules/nuxt/dist/app/plugins/preload.server.mjs
// Parents: 
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/plugins/server.mjs ($id_ebe77c79)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_9871bba0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/components.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/plugins/server.mjs ($id_ebe77c79)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_34960b57 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const components = {}

__vite_ssr_exports__.default = function (nuxtApp) {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name])
    nuxtApp.vueApp.component('Lazy' + name, components[name])
  }
}
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/plugins/server.mjs ($id_ebe77c79)
// Dependencies: 
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/defu/dist/defu.mjs ($id_d7afab65)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_e6f12003 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vueuse/head/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/defu/dist/defu.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  const head = __vite_ssr_import_0__.createHead();
  nuxtApp.vueApp.use(head);
  let headReady = false;
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    __vite_ssr_import_1__.watchEffect(() => {
      head.updateDOM();
    });
    headReady = true;
  });
  const titleTemplate = __vite_ssr_import_1__.ref();
  nuxtApp._useHead = (_meta) => {
    const meta = __vite_ssr_import_1__.ref(_meta);
    if ("titleTemplate" in meta.value) {
      titleTemplate.value = meta.value.titleTemplate;
    }
    const headObj = __vite_ssr_import_1__.computed(() => {
      const overrides = { meta: [] };
      if (titleTemplate.value && "title" in meta.value) {
        overrides.title = typeof titleTemplate.value === "function" ? titleTemplate.value(meta.value.title) : titleTemplate.value.replace(/%s/g, meta.value.title);
      }
      if (meta.value.charset) {
        overrides.meta.push({ key: "charset", charset: meta.value.charset });
      }
      if (meta.value.viewport) {
        overrides.meta.push({ name: "viewport", content: meta.value.viewport });
      }
      return __vite_ssr_import_2__.default(overrides, meta.value);
    });
    head.addHeadObjs(headObj);
    if (true) {
      return;
    }
    if (headReady) {
      __vite_ssr_import_1__.watchEffect(() => {
        head.updateDOM();
      });
    }
    const vm = __vite_ssr_import_1__.getCurrentInstance();
    if (!vm) {
      return;
    }
    __vite_ssr_import_1__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  };
  if (true) {
    nuxtApp.ssrContext.renderMeta = () => __vite_ssr_import_0__.renderHeadToString(head);
  }
});
;
}


// --------------------
// Request: /node_modules/@vueuse/head/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_c032264e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/index.ts
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


// src/constants.ts
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];

// src/create-element.ts
var createElement = (tag, attrs, document) => {
  const el = document.createElement(tag);
  for (const key of Object.keys(attrs)) {
    let value = attrs[key];
    if (key === "key" || value === false) {
      continue;
    }
    if (key === "children") {
      el.textContent = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
};

// src/stringify-attrs.ts
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};

// src/utils.ts
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}

// src/index.ts
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var injectHead = () => {
  const head = __vite_ssr_import_0__.inject(PROVIDE_KEY);
  if (!head) {
    throw new Error(`You may forget to apply app.use(head)`);
  }
  return head;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
var headObjToTags = (obj) => {
  const tags = [];
  for (const key of Object.keys(obj)) {
    if (obj[key] == null)
      continue;
    if (key === "title") {
      tags.push({ tag: key, props: { children: obj[key] } });
    } else if (key === "base") {
      tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
    } else if (acceptFields.includes(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          tags.push({ tag: key, props: item });
        });
      } else if (value) {
        tags.push({ tag: key, props: value });
      }
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document = window.document, type, tags) => {
  var _a;
  const head = document.head;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldElements = [];
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_a = j == null ? void 0 : j.tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldElements.push(j);
      }
    }
  } else {
    headCountEl = document.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => createElement(tag.tag, tag.props, document));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldElements.length; i++) {
      const oldEl = oldElements[i];
      if (isEqualNode(oldEl, newEl)) {
        oldElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    head.insertBefore(t, headCountEl);
  });
  headCountEl.setAttribute("content", "" + (headCount - oldElements.length + newElements.length));
};
var createHead = () => {
  let allHeadObjs = [];
  let previousTags = /* @__PURE__ */ new Set();
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(objs.value);
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document.title = title;
      }
      setAttrs(document.documentElement, htmlAttrs);
      setAttrs(document.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i) => previousTags.add(i));
    }
  };
  return head;
};
var IS_BROWSER = "undefined" !== "undefined";
var useHead = (obj) => {
  const headObj = __vite_ssr_import_0__.ref(obj);
  const head = injectHead();
  head.addHeadObjs(headObj);
  if (IS_BROWSER) {
    __vite_ssr_import_0__.watchEffect(() => {
      head.updateDOM();
    });
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  }
};
var tagToString = (tag) => {
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}>`;
  }
  return `<${tag.tag}${attrs}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
var vnodesToHeadObj = (nodes) => {
  const obj = {
    title: void 0,
    htmlAttrs: void 0,
    bodyAttrs: void 0,
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: []
  };
  for (const node of nodes) {
    const type = node.type === "html" ? "htmlAttrs" : node.type === "body" ? "bodyAttrs" : node.type;
    if (typeof type !== "string" || !(type in obj))
      continue;
    const props = __spreadProps(__spreadValues({}, node.props), {
      children: Array.isArray(node.children) ? node.children[0].children : node.children
    });
    if (Array.isArray(obj[type])) {
      ;
      obj[type].push(props);
    } else if (type === "title") {
      obj.title = props.children;
    } else {
      ;
      obj[type] = props;
    }
  }
  return obj;
};
var Head = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup(_, { slots }) {
    const head = injectHead();
    let obj;
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      if (obj) {
        head.removeHeadObjs(obj);
        head.updateDOM();
      }
    });
    return () => {
      __vite_ssr_import_0__.watchEffect(() => {
        if (!slots.default)
          return;
        if (obj) {
          head.removeHeadObjs(obj);
        }
        obj = __vite_ssr_import_0__.ref(vnodesToHeadObj(slots.default()));
        head.addHeadObjs(obj);
        if (IS_BROWSER) {
          head.updateDOM();
        }
      });
      return null;
    };
  }
});

Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
Object.defineProperty(__vite_ssr_exports__, "createHead", { enumerable: true, configurable: true, get(){ return createHead }});
Object.defineProperty(__vite_ssr_exports__, "injectHead", { enumerable: true, configurable: true, get(){ return injectHead }});
Object.defineProperty(__vite_ssr_exports__, "renderHeadToString", { enumerable: true, configurable: true, get(){ return renderHeadToString }});
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
;
}


// --------------------
// Request: /node_modules/defu/dist/defu.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// Dependencies: 

// --------------------
const $id_d7afab65 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///home/tinega/Desktop/dont/hotel-web-app-1/node_modules/defu/dist/defu.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/home/tinega/Desktop/dont/hotel-web-app-1/node_modules/defu/dist/defu.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/plugins/server.mjs ($id_ebe77c79)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_b2a29d6f)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/meta.config.mjs ($id_338fcf87)
// --------------------
const $id_a2650341 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/components.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/meta.config.mjs");

const metaMixin = {
  created() {
    const instance = __vite_ssr_import_0__.getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const source = typeof options.head === "function" ? __vite_ssr_import_0__.computed(() => options.head(nuxtApp)) : options.head;
    __vite_ssr_import_2__.useHead(source);
  }
};
__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  __vite_ssr_import_2__.useHead(__vite_ssr_import_0__.markRaw({ title: "", ...__vite_ssr_import_4__.default.globalMeta }));
  nuxtApp.vueApp.mixin(metaMixin);
  for (const name in __vite_ssr_import_1__) {
    nuxtApp.vueApp.component(name, __vite_ssr_import_1__[name]);
  }
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/components.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// --------------------
const $id_b2a29d6f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  __vite_ssr_import_1__.useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => renderChild ? ctx.slots.default?.() : null;
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = __vite_ssr_import_0__.defineComponent({
  name: "Script",
  inheritAttrs: false,
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Script", { enumerable: true, configurable: true, get(){ return Script }});
const Link = __vite_ssr_import_0__.defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Link", { enumerable: true, configurable: true, get(){ return Link }});
const Base = __vite_ssr_import_0__.defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Base", { enumerable: true, configurable: true, get(){ return Base }});
const Title = __vite_ssr_import_0__.defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    const title = slots.default?.()?.[0]?.children || null;
    if (true && title && typeof title !== "string") {
      console.error("<Title> can only take a string in its default slot.");
    }
    return {
      title
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Title", { enumerable: true, configurable: true, get(){ return Title }});
const Meta = __vite_ssr_import_0__.defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  },
  setup: setupForUseMeta((meta) => ({
    meta: [meta]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Meta", { enumerable: true, configurable: true, get(){ return Meta }});
const Style = __vite_ssr_import_0__.defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    const style = { ...props };
    const textContent = slots.default?.()?.[0]?.children;
    if (textContent) {
      if (true && typeof textContent !== "string") {
        console.error("<Style> can only take a string in its default slot.");
      }
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Style", { enumerable: true, configurable: true, get(){ return Style }});
const Head = __vite_ssr_import_0__.defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => ctx.slots.default?.()
});
Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
const Html = __vite_ssr_import_0__.defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Html", { enumerable: true, configurable: true, get(){ return Html }});
const Body = __vite_ssr_import_0__.defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Body", { enumerable: true, configurable: true, get(){ return Body }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/meta.config.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// Dependencies: 

// --------------------
const $id_338fcf87 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {"globalMeta":{"charset":"utf-8","viewport":"width=device-width, initial-scale=1","meta":[],"link":[],"style":[],"script":[]}};
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/router.mjs
// Parents: 
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/plugins/server.mjs ($id_ebe77c79)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/routes.mjs ($id_93c17e08)
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/router.options.mjs ($id_df1a4934)
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/middleware.mjs ($id_9d6fa9e7)
// --------------------
const $id_a090977b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/page.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/routes.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/router.options.mjs");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/middleware.mjs");

function createCurrentLocation(base, location) {
  const { pathname, search, hash } = location;
  const hashPos = base.indexOf("#");
  if (hashPos > -1) {
    const slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/") {
      pathFromHash = "/" + pathFromHash;
    }
    return __vite_ssr_import_3__.withoutBase(pathFromHash, "");
  }
  const path = __vite_ssr_import_3__.withoutBase(pathname, base);
  return path + search + hash;
}
__vite_ssr_exports__.default = __vite_ssr_import_5__.defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.component("NuxtPage", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtNestedPage", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtChild", __vite_ssr_import_4__.default);
  const baseURL = __vite_ssr_import_5__.useRuntimeConfig().app.baseURL;
  const routerHistory = false ? __vite_ssr_import_1__.createWebHistory(baseURL) : __vite_ssr_import_1__.createMemoryHistory(baseURL);
  const initialURL = true ? nuxtApp.ssrContext.url : createCurrentLocation(baseURL, window.location);
  const router = __vite_ssr_import_1__.createRouter({
    ...__vite_ssr_import_7__.default,
    history: routerHistory,
    routes: __vite_ssr_import_6__.default
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = __vite_ssr_import_0__.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const route = {};
  for (const key in router.currentRoute.value) {
    route[key] = __vite_ssr_import_0__.computed(() => router.currentRoute.value[key]);
  }
  const _activeRoute = __vite_ssr_import_0__.shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _activeRoute.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    if (to.matched[0]?.components?.default === from.matched[0]?.components?.default) {
      syncCurrentRoute();
    }
  });
  const activeRoute = {};
  for (const key in _activeRoute.value) {
    activeRoute[key] = __vite_ssr_import_0__.computed(() => _activeRoute.value[key]);
  }
  nuxtApp._route = __vite_ssr_import_0__.reactive(route);
  nuxtApp._activeRoute = __vite_ssr_import_0__.reactive(activeRoute);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  const error = __vite_ssr_import_5__.useError();
  try {
    if (true) {
      await router.push(initialURL);
    }
    await router.isReady();
  } catch (error2) {
    __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
  }
  router.beforeEach(async (to, from) => {
    to.meta = __vite_ssr_import_0__.reactive(to.meta);
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = new Set([...__vite_ssr_import_8__.globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry of componentMiddleware) {
          middlewareEntries.add(entry);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry of middlewareEntries) {
      const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await __vite_ssr_import_8__.namedMiddleware[entry]?.().then((r) => r.default || r) : entry;
      if (!middleware) {
        if (true) {
          throw new Error(`Unknown route middleware: '${entry}'. Valid middleware: ${Object.keys(__vite_ssr_import_8__.namedMiddleware).map((mw) => `'${mw}'`).join(", ")}.`);
        }
        throw new Error(`Unknown route middleware: '${entry}'.`);
      }
      const result = await __vite_ssr_import_5__.callWithNuxt(nuxtApp, middleware, [to, from]);
      if (true) {
        if (result === false || result instanceof Error) {
          const error2 = result || __vite_ssr_import_2__.createError({
            statusMessage: `Route navigation aborted: ${initialURL}`
          });
          return __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (false && !nuxtApp.isHydrating && error.value) {
      await __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.clearError);
    }
    if (to.matched.length === 0) {
      __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [__vite_ssr_import_2__.createError({
        statusCode: 404,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else if (true && to.matched[0].name === "404" && nuxtApp.ssrContext) {
      nuxtApp.ssrContext.res.statusCode = 404;
    } else if (true) {
      const currentURL = to.fullPath || "/";
      if (!__vite_ssr_import_3__.isEqual(currentURL, initialURL)) {
        await __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        force: true
      });
    } catch (error2) {
      __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
    }
  });
  return { provide: { router } };
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/page.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_80f433aa)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_69c52686)
// --------------------
const $id_5fc14cdc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/utils.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/utils.mjs");

const isNestedKey = Symbol("isNested");
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const isNested = __vite_ssr_import_0__.inject(isNestedKey, false);
    __vite_ssr_import_0__.provide(isNestedKey, true);
    return () => {
      return __vite_ssr_import_0__.h(__vite_ssr_import_1__.RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => routeProps.Component && __vite_ssr_import_4__._wrapIf(__vite_ssr_import_0__.Transition, routeProps.route.meta.pageTransition ?? defaultPageTransition, __vite_ssr_import_2__.wrapInKeepAlive(routeProps.route.meta.keepalive, isNested && nuxtApp.isHydrating ? __vite_ssr_import_0__.h(routeProps.Component, { key: __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps) }) : __vite_ssr_import_0__.h(__vite_ssr_import_0__.Suspense, {
          onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
          onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
        }, { default: () => __vite_ssr_import_0__.h(routeProps.Component, { key: __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps) }) }))).default()
      });
    };
  }
});
const defaultPageTransition = { name: "page", mode: "out-in" };
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_80f433aa = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => route.params[r.slice(1)]?.toString() || "");
};
const generateRouteKey = (override, routeProps) => {
  const matchedRoute = routeProps.route.matched.find((m) => m.components.default === routeProps.Component.type);
  const source = override ?? matchedRoute?.meta.key ?? interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
Object.defineProperty(__vite_ssr_exports__, "generateRouteKey", { enumerable: true, configurable: true, get(){ return generateRouteKey }});
const wrapInKeepAlive = (props, children) => {
  return { default: () => false && props ? __vite_ssr_import_0__.h(__vite_ssr_import_0__.KeepAlive, props === true ? {} : props, children) : children };
};
Object.defineProperty(__vite_ssr_exports__, "wrapInKeepAlive", { enumerable: true, configurable: true, get(){ return wrapInKeepAlive }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_69c52686 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const Fragment = {
  setup(_props, { slots }) {
    return () => slots.default?.();
  }
};
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? __vite_ssr_import_0__.h(component, props === true ? {} : props, slots) : __vite_ssr_import_0__.h(Fragment, {}, slots) };
};
Object.defineProperty(__vite_ssr_exports__, "_wrapIf", { enumerable: true, configurable: true, get(){ return _wrapIf }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/routes.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 
// - /pages/account.vue?macro=true ($id_1aee8f25)
// - /pages/cart/checkout.vue?macro=true ($id_f03203d7)
// - /pages/cart/index.vue?macro=true ($id_7c49fc15)
// - /pages/index/index.vue?macro=true ($id_5878fe75)
// - /pages/login.vue?macro=true ($id_213baa8a)
// - /pages/menu/index.vue?macro=true ($id_0a7b1a7f)
// - /pages/menu/index/[filter].vue?macro=true ($id_df565390)
// - /pages/signup.vue?macro=true ($id_ae8d024a)
// - /pages/account.vue ($id_ce2c396d)
// - /pages/cart/checkout.vue ($id_541d3871)
// - /pages/cart/index.vue ($id_3fa45d07)
// - /pages/index/index.vue ($id_a200782a)
// - /pages/login.vue ($id_b0922173)
// - /pages/menu/index/[filter].vue ($id_8eae100f)
// - /pages/menu/index.vue ($id_30db1f12)
// - /pages/signup.vue ($id_31eb92be)
// --------------------
const $id_93c17e08 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/pages/account.vue?macro=true");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/pages/cart/checkout.vue?macro=true");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/pages/cart/index.vue?macro=true");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/pages/index/index.vue?macro=true");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/pages/login.vue?macro=true");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/pages/menu/index.vue?macro=true");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/pages/menu/index/[filter].vue?macro=true");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/pages/signup.vue?macro=true");

__vite_ssr_exports__.default = [
  {
    name: "account",
    path: "/account",
    file: "/home/tinega/Desktop/dont/hotel-web-app-1/pages/account.vue",
    children: [],
    meta: __vite_ssr_import_0__.meta,
    alias: __vite_ssr_import_0__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/account.vue')
  },
  {
    name: "cart-checkout",
    path: "/cart/checkout",
    file: "/home/tinega/Desktop/dont/hotel-web-app-1/pages/cart/checkout.vue",
    children: [],
    meta: __vite_ssr_import_1__.meta,
    alias: __vite_ssr_import_1__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/cart/checkout.vue')
  },
  {
    name: "cart",
    path: "/cart",
    file: "/home/tinega/Desktop/dont/hotel-web-app-1/pages/cart/index.vue",
    children: [],
    meta: __vite_ssr_import_2__.meta,
    alias: __vite_ssr_import_2__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/cart/index.vue')
  },
  {
    name: "index",
    path: "/",
    file: "/home/tinega/Desktop/dont/hotel-web-app-1/pages/index/index.vue",
    children: [],
    meta: __vite_ssr_import_3__.meta,
    alias: __vite_ssr_import_3__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/index/index.vue')
  },
  {
    name: "login",
    path: "/login",
    file: "/home/tinega/Desktop/dont/hotel-web-app-1/pages/login.vue",
    children: [],
    meta: __vite_ssr_import_4__.meta,
    alias: __vite_ssr_import_4__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/login.vue')
  },
  {
    name: "menu",
    path: "/menu",
    file: "/home/tinega/Desktop/dont/hotel-web-app-1/pages/menu/index.vue",
    children: [
  {
    name: "menu-index-filter",
    path: ":filter",
    file: "/home/tinega/Desktop/dont/hotel-web-app-1/pages/menu/index/[filter].vue",
    children: [],
    meta: __vite_ssr_import_6__.meta,
    alias: __vite_ssr_import_6__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/menu/index/[filter].vue')
  }
],
    meta: __vite_ssr_import_5__.meta,
    alias: __vite_ssr_import_5__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/menu/index.vue')
  },
  {
    name: "signup",
    path: "/signup",
    file: "/home/tinega/Desktop/dont/hotel-web-app-1/pages/signup.vue",
    children: [],
    meta: __vite_ssr_import_7__.meta,
    alias: __vite_ssr_import_7__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/signup.vue')
  }
];
}


// --------------------
// Request: /pages/account.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/routes.mjs ($id_93c17e08)
// Dependencies: 
// - /components/nav-bar.vue ($id_12afc13c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /stores/useLoginStore.ts ($id_49ef1b29)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /pages/account.vue?vue&type=style&index=0&lang.css ($id_c8cedaf5)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_1aee8f25 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/nav-bar.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/stores/useLoginStore.ts");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_4__.defineComponent({
  __name: "account",
  setup(__props, { expose }) {
    expose();
    const logins = __vite_ssr_import_5__.useLoginStore();
    let userID;
    let userData = __vite_ssr_import_1__.ref();
    __vite_ssr_import_1__.onMounted(async () => {
      userID = logins.getID;
      try {
        console.log(userID);
        const dataToSend = {
          userID
        };
        const response = await fetch("http://localhost:8000/get-user-data", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataToSend)
        });
        userData.value = await response.json();
      } catch {
        console.log("catch");
      }
    });
    __vite_ssr_import_2__.useHead({
      title: `account details`,
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      charset: "utf-8",
      meta: [
        { name: "description", content: "My amazing site." }
      ],
      link: [
        { rel: "icon", href: "../assets/icons/undraw_breakfast_psiw.svg" }
      ]
    });
    const logOut = () => {
      logins.$reset();
      localStorage.clear();
      sessionStorage.clear();
      const router = __vite_ssr_import_3__.useRouter();
      const after = async () => {
        await router.push("/");
        await window.location.reload();
      };
      after();
    };
    const __returned__ = { logins, userID, userData, logOut };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nav_bar = __vite_ssr_import_0__.default;
  _push(`<div${__vite_ssr_import_7__.ssrRenderAttrs(__vite_ssr_import_6__.mergeProps({ class: "account-wrapper" }, _attrs))}>`);
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_nav_bar, null, null, _parent));
  if ($setup.userData) {
    _push(`<div class="account-details"><h3>not much to show here</h3><p>phone: ${__vite_ssr_import_7__.ssrInterpolate($setup.userData.phone)}</p><p>location: ${__vite_ssr_import_7__.ssrInterpolate($setup.userData.location)}</p><button>log out</button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const __vite_ssr_import_8__ = await __vite_ssr_import__("/pages/account.vue?vue&type=style&index=0&lang.css");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_9__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_10__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_10__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/tinega/Desktop/dont/hotel-web-app-1/pages/account.vue"]]);

const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/nav-bar.vue
// Parents: 
// - /pages/account.vue?macro=true ($id_1aee8f25)
// - /pages/cart/checkout.vue?macro=true ($id_f03203d7)
// - /pages/cart/index.vue?macro=true ($id_7c49fc15)
// - /pages/index/index.vue?macro=true ($id_5878fe75)
// - /pages/login.vue?macro=true ($id_213baa8a)
// - /pages/menu/index.vue?macro=true ($id_0a7b1a7f)
// - /pages/signup.vue?macro=true ($id_ae8d024a)
// - /pages/account.vue ($id_ce2c396d)
// - /pages/cart/checkout.vue ($id_541d3871)
// - /pages/cart/index.vue ($id_3fa45d07)
// - /pages/index/index.vue ($id_a200782a)
// - /pages/login.vue ($id_b0922173)
// - /pages/menu/index.vue ($id_30db1f12)
// - /pages/signup.vue ($id_31eb92be)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /stores/useCart.ts ($id_1a94a962)
// - /stores/useLoginStore.ts ($id_49ef1b29)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /assets/icons/undraw_breakfast_psiw.svg ($id_0fb468a0)
// - /assets/icons/cart-svgrepo-com.svg ($id_c48e205a)
// - /components/nav-bar.vue?vue&type=style&index=0&scoped=true&lang.css ($id_711c814c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_12afc13c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/stores/useCart.ts");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/stores/useLoginStore.ts");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_2__.defineComponent({
  __name: "nav-bar",
  setup(__props, { expose }) {
    expose();
    const main = __vite_ssr_import_3__.useCartStore();
    const logins = __vite_ssr_import_4__.useLoginStore();
    const barsPath = "M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM64 256C64 238.3 78.33 224 96 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H96C78.33 288 64 273.7 64 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z";
    const xPath = "M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z";
    const path = __vite_ssr_import_1__.ref(barsPath);
    const links = __vite_ssr_import_1__.ref(null);
    function slideShow() {
      links.value.classList.toggle("show");
      path.value = path.value === barsPath ? xPath : barsPath;
    }
    let userID;
    const ifNotLoggedIn = __vite_ssr_import_1__.ref(false);
    __vite_ssr_import_1__.onMounted(() => {
      userID = localStorage.getItem("userID");
      if (userID === null) {
        userID = sessionStorage.getItem("userID");
      }
      if (userID === null) {
        ifNotLoggedIn.value = true;
      } else {
        logins.setId(userID);
        try {
          const getCart = async () => {
            const response = await fetch(`http://localhost:8000/get-cart/${userID}`);
            const data = await response.json();
            for (let i = 0; i < data.length; i++) {
              main.addtoCart(data[i]);
            }
          };
          getCart().then(() => {
            let cartLength = main.cart.length;
            if (cartLength > 0) {
              cartClass.value.classList.add("cart1");
              cartNumber.value = cartLength;
            } else {
              cartClass.value.classList.remove("cart1");
            }
          });
        } catch {
          console.log("couldnt get da data");
        }
      }
    });
    const cartNumber = __vite_ssr_import_1__.ref();
    const cartClass = __vite_ssr_import_1__.ref();
    main.$subscribe((state) => {
      let cartLength = main.cart.length;
      if (cartLength > 0) {
        cartClass.value.classList.add("cart1");
        cartNumber.value = cartLength;
      } else {
        cartClass.value.classList.remove("cart1");
      }
    });
    const __returned__ = { main, logins, barsPath, xPath, path, links, slideShow, userID, ifNotLoggedIn, cartNumber, cartClass };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/assets/icons/undraw_breakfast_psiw.svg");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/assets/icons/cart-svgrepo-com.svg");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Nuxt_link = __vite_ssr_import_0__.default;
  _push(`<nav${__vite_ssr_import_6__.ssrRenderAttrs(_attrs)} data-v-bc67b704><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-v-bc67b704><path${__vite_ssr_import_6__.ssrRenderAttr("d", $setup.path)} data-v-bc67b704></path></svg><h3 data-v-bc67b704> hotel app <a href="/" data-v-bc67b704><img${__vite_ssr_import_6__.ssrRenderAttr("src", __vite_ssr_import_7__.default)} alt="icon" srcset="" data-v-bc67b704></a></h3><div class="links" data-v-bc67b704><a href="/menu/main-meal" data-v-bc67b704>menu</a><a href="/menu" data-v-bc67b704>gallery</a><a href="/menu" data-v-bc67b704>contact us</a>`);
  if ($setup.ifNotLoggedIn) {
    _push(`<a href="/login" data-v-bc67b704>login</a>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.ifNotLoggedIn) {
    _push(`<a href="/signup" data-v-bc67b704>Sign up</a>`);
  } else {
    _push(`<a href="/account" data-v-bc67b704>Your Account</a>`);
  }
  _push(`</div><div class="cart"${__vite_ssr_import_6__.ssrRenderAttr("data-count", $setup.cartNumber)} data-v-bc67b704>`);
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_Nuxt_link, { to: "/cart" }, {
    default: __vite_ssr_import_5__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${__vite_ssr_import_6__.ssrRenderAttr("src", __vite_ssr_import_8__.default)} data-v-bc67b704${_scopeId}>`);
      } else {
        return [
          __vite_ssr_import_5__.createVNode("img", { src: __vite_ssr_import_8__.default })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></nav>`);
}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/components/nav-bar.vue?vue&type=style&index=0&scoped=true&lang.css");

const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_10__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/nav-bar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_11__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_11__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-bc67b704"], ["__file", "/home/tinega/Desktop/dont/hotel-web-app-1/components/nav-bar.vue"]]);
;
}


// --------------------
// Request: /stores/useCart.ts
// Parents: 
// - /components/nav-bar.vue ($id_12afc13c)
// - /pages/cart/index.vue?macro=true ($id_7c49fc15)
// - /components/specials-today.vue ($id_8de6d258)
// - /components/other-meals.vue ($id_72602127)
// - /pages/menu/index/[filter].vue?macro=true ($id_df565390)
// - /pages/cart/index.vue ($id_3fa45d07)
// - /pages/menu/index/[filter].vue ($id_8eae100f)
// Dependencies: 
// - /node_modules/pinia/dist/pinia.mjs ($id_b1920624)
// --------------------
const $id_1a94a962 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/pinia/dist/pinia.mjs");

const useCartStore = __vite_ssr_import_0__.defineStore("cart1", {
  state: () => ({
    cart: [],
    order: []
  }),
  getters: {
    getCartNumber: (state) => state.cart.length
  },
  actions: {
    addtoCart(item) {
      const ifItemInCart = this.cart.indexOf(item);
      if (ifItemInCart === -1) {
        this.cart.push(item);
      }
    },
    removeFromCart(item) {
      const index = this.cart.indexOf(item);
      if (index != -1) {
        this.cart.splice(index, 1);
      }
    },
    clearCart() {
      this.cart = [];
    },
    updateOrder(order) {
      this.order = order;
    }
  }
});
Object.defineProperty(__vite_ssr_exports__, "useCartStore", { enumerable: true, configurable: true, get(){ return useCartStore }});
;
}


// --------------------
// Request: /node_modules/pinia/dist/pinia.mjs
// Parents: 
// - /stores/useCart.ts ($id_1a94a962)
// - /stores/useLoginStore.ts ($id_49ef1b29)
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/dist.plugin.01f1902c.mjs ($id_05f14bc4)
// Dependencies: 

// --------------------
const $id_b1920624 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///home/tinega/Desktop/dont/hotel-web-app-1/node_modules/pinia/dist/pinia.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/home/tinega/Desktop/dont/hotel-web-app-1/node_modules/pinia/dist/pinia.mjs\".")
  })


// --------------------
// Request: /stores/useLoginStore.ts
// Parents: 
// - /components/nav-bar.vue ($id_12afc13c)
// - /pages/account.vue?macro=true ($id_1aee8f25)
// - /pages/cart/index.vue?macro=true ($id_7c49fc15)
// - /components/specials-today.vue ($id_8de6d258)
// - /components/other-meals.vue ($id_72602127)
// - /pages/menu/index/[filter].vue?macro=true ($id_df565390)
// - /pages/account.vue ($id_ce2c396d)
// - /pages/cart/index.vue ($id_3fa45d07)
// - /pages/menu/index/[filter].vue ($id_8eae100f)
// Dependencies: 
// - /node_modules/pinia/dist/pinia.mjs ($id_b1920624)
// --------------------
const $id_49ef1b29 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/pinia/dist/pinia.mjs");

const useLoginStore = __vite_ssr_import_0__.defineStore("logins", {
  state: () => ({
    userID: ""
  }),
  getters: {
    getID: (state) => state.userID
  },
  actions: {
    setId(id) {
      this.userID = id;
    },
    delete(id) {
      this.userID = "";
    }
  }
});
Object.defineProperty(__vite_ssr_exports__, "useLoginStore", { enumerable: true, configurable: true, get(){ return useLoginStore }});
;
}


// --------------------
// Request: /node_modules/vue/server-renderer/index.js
// Parents: 
// - /components/nav-bar.vue ($id_12afc13c)
// - /pages/account.vue?macro=true ($id_1aee8f25)
// - /pages/cart/checkout.vue?macro=true ($id_f03203d7)
// - /pages/cart/index.vue?macro=true ($id_7c49fc15)
// - /components/location.vue ($id_a4c810b5)
// - /components/landing-page.vue ($id_f281e5fb)
// - /components/specials-today.vue ($id_8de6d258)
// - /components/other-meals.vue ($id_72602127)
// - /pages/index/index.vue?macro=true ($id_5878fe75)
// - /pages/login.vue?macro=true ($id_213baa8a)
// - /pages/menu/index.vue?macro=true ($id_0a7b1a7f)
// - /pages/menu/index/[filter].vue?macro=true ($id_df565390)
// - /pages/signup.vue?macro=true ($id_ae8d024a)
// - /pages/account.vue ($id_ce2c396d)
// - /pages/cart/checkout.vue ($id_541d3871)
// - /pages/cart/index.vue ($id_3fa45d07)
// - /pages/index/index.vue ($id_a200782a)
// - /pages/login.vue ($id_b0922173)
// - /pages/menu/index/[filter].vue ($id_8eae100f)
// - /pages/menu/index.vue ($id_30db1f12)
// - /pages/signup.vue ($id_31eb92be)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_6c61010f)
// Dependencies: 

// --------------------
const $id_b215fa1c = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///home/tinega/Desktop/dont/hotel-web-app-1/node_modules/vue/server-renderer/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/home/tinega/Desktop/dont/hotel-web-app-1/node_modules/vue/server-renderer/index.js\".")
  })


// --------------------
// Request: /assets/icons/undraw_breakfast_psiw.svg
// Parents: 
// - /components/nav-bar.vue ($id_12afc13c)
// - /pages/index/index.vue?macro=true ($id_5878fe75)
// - /pages/login.vue?macro=true ($id_213baa8a)
// - /pages/menu/index.vue?macro=true ($id_0a7b1a7f)
// - /pages/signup.vue?macro=true ($id_ae8d024a)
// - /pages/index/index.vue ($id_a200782a)
// - /pages/login.vue ($id_b0922173)
// - /pages/menu/index.vue ($id_30db1f12)
// - /pages/signup.vue ($id_31eb92be)
// Dependencies: 

// --------------------
const $id_0fb468a0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/icons/undraw_breakfast_psiw.svg";
}


// --------------------
// Request: /assets/icons/cart-svgrepo-com.svg
// Parents: 
// - /components/nav-bar.vue ($id_12afc13c)
// Dependencies: 

// --------------------
const $id_c48e205a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/icons/cart-svgrepo-com.svg";
}


// --------------------
// Request: /components/nav-bar.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /components/nav-bar.vue ($id_12afc13c)
// Dependencies: 

// --------------------
const $id_711c814c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "nav svg[data-v-bc67b704]{height:20px}nav[data-v-bc67b704]{align-items:center;background-color:#fff;box-shadow:5px 5px 5px 3px rgba(0,0,0,.2);-moz-column-gap:20px;column-gap:20px;display:flex;font-family:var(--title-font);height:60px;padding:0 20px;position:-webkit-sticky;position:sticky;text-align:left;top:0;z-index:1}.cart[data-v-bc67b704]{position:absolute;right:5%}.cart img[data-v-bc67b704]{height:30px;transform:rotateY(180deg);width:30px}.cart1[data-v-bc67b704]:before{background-color:var(--main-orange);border-radius:50%;color:#333;content:attr(data-count);display:grid;font-size:.7rem;height:15px;left:5px;place-items:center;position:absolute;top:7px;width:15px;z-index:1}nav h3[data-v-bc67b704]{align-items:center;-moz-column-gap:7px;column-gap:7px;display:flex}nav h3 img[data-v-bc67b704]{height:50px;width:50px}nav .links[data-v-bc67b704]{background-color:var(--main-orange);display:flex;flex-direction:column;height:30vh;justify-content:space-around;left:-100%;padding-left:40px;position:absolute;top:60px;transition:left .3s cubic-bezier(.175,.885,.32,1.275);width:100%;z-index:1}.show[data-v-bc67b704]{left:0!important}nav .links a[data-v-bc67b704]{color:#333;text-decoration:none}nav .links .sign-up[data-v-bc67b704],nav .links a[data-v-bc67b704]{font-family:var(--title-font);font-size:1.2rem;font-weight:700}nav .links .sign-up[data-v-bc67b704]{background-color:var(--side-orange);border-radius:5px;padding:10px;width:-webkit-max-content;width:-moz-max-content;width:max-content}@media screen and (min-width:968px){nav[data-v-bc67b704]{height:80px}nav svg[data-v-bc67b704]{display:none}nav h3[data-v-bc67b704]{-moz-column-gap:20px;column-gap:20px;margin-left:40px}nav h3 img[data-v-bc67b704]{height:70px;width:70px}nav .links[data-v-bc67b704]{align-items:center;background:transparent;-moz-column-gap:30px;column-gap:30px;flex-direction:row;height:100%;left:50%;padding-left:0;top:0;width:-webkit-max-content;width:-moz-max-content;width:max-content}nav .links .sign-up[data-v-bc67b704]{background-color:var(--main-orange);transition:background-color .3s cubic-bezier(.175,.885,.32,1.275)}nav .links .sign-up[data-v-bc67b704]:hover{background-color:var(--side-orange)}nav .links[data-v-bc67b704]{left:55%}}";
}


// --------------------
// Request: /@id/plugin-vue:export-helper
// Parents: 
// - /components/nav-bar.vue ($id_12afc13c)
// - /pages/account.vue?macro=true ($id_1aee8f25)
// - /pages/cart/checkout.vue?macro=true ($id_f03203d7)
// - /pages/cart/index.vue?macro=true ($id_7c49fc15)
// - /components/location.vue ($id_a4c810b5)
// - /components/landing-page.vue ($id_f281e5fb)
// - /components/specials-today.vue ($id_8de6d258)
// - /components/other-meals.vue ($id_72602127)
// - /pages/index/index.vue?macro=true ($id_5878fe75)
// - /pages/login.vue?macro=true ($id_213baa8a)
// - /pages/menu/index.vue?macro=true ($id_0a7b1a7f)
// - /pages/menu/index/[filter].vue?macro=true ($id_df565390)
// - /pages/signup.vue?macro=true ($id_ae8d024a)
// - /pages/account.vue ($id_ce2c396d)
// - /pages/cart/checkout.vue ($id_541d3871)
// - /pages/cart/index.vue ($id_3fa45d07)
// - /pages/index/index.vue ($id_a200782a)
// - /pages/login.vue ($id_b0922173)
// - /pages/menu/index/[filter].vue ($id_8eae100f)
// - /pages/menu/index.vue ($id_30db1f12)
// - /pages/signup.vue ($id_31eb92be)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_6c61010f)
// Dependencies: 

// --------------------
const $id_bbb863c1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

__vite_ssr_exports__.default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
}
;
}


// --------------------
// Request: /pages/account.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /pages/account.vue?macro=true ($id_1aee8f25)
// - /pages/account.vue ($id_ce2c396d)
// Dependencies: 

// --------------------
const $id_c8cedaf5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".account-details{font-family:var(--title-font);padding-top:40px;text-align:center}.account-details>*{margin-top:10px}.account-details button{background-color:#fff;border:1px solid var(--side-orange);font-size:.9rem;padding:9px;transition:all .3s ease-out}.account-details button:hover{background-color:var(--side-orange);color:#fff;cursor:pointer}";
}


// --------------------
// Request: /pages/cart/checkout.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/routes.mjs ($id_93c17e08)
// Dependencies: 
// - /components/nav-bar.vue ($id_12afc13c)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f03203d7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/nav-bar.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_2__.defineComponent({
  __name: "checkout",
  setup(__props, { expose }) {
    expose();
    __vite_ssr_import_1__.useHead({
      title: "check out",
      link: [
        { rel: "icon", href: "../assets/icons/undraw_breakfast_psiw.svg" }
      ]
    });
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nav_bar = __vite_ssr_import_0__.default;
  _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({ class: "checkout-wrapper" }, _attrs))}>`);
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_nav_bar, null, null, _parent));
  _push(`</div>`);
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart/checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_6__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/tinega/Desktop/dont/hotel-web-app-1/pages/cart/checkout.vue"]]);

const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/cart/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/routes.mjs ($id_93c17e08)
// Dependencies: 
// - /components/nav-bar.vue ($id_12afc13c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /stores/useCart.ts ($id_1a94a962)
// - /stores/useLoginStore.ts ($id_49ef1b29)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /assets/icons/x-svgrepo-com.svg ($id_9c69f974)
// - /pages/cart/index.vue?vue&type=style&index=0&lang.css ($id_b6616365)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_7c49fc15 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/nav-bar.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/stores/useCart.ts");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/stores/useLoginStore.ts");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_4__.defineComponent({
  __name: "index",
  setup(__props, { expose }) {
    expose();
    const logins = __vite_ssr_import_6__.useLoginStore();
    const cart = __vite_ssr_import_5__.useCartStore();
    const cartNumber = __vite_ssr_import_1__.ref();
    cart.$subscribe((state) => {
      cartNumber.value = cart.cart.length;
    });
    __vite_ssr_import_2__.useHead({
      title: "cart",
      link: [
        { rel: "icon", href: "../assets/icons/undraw_breakfast_psiw.svg" }
      ]
    });
    const cartItemsDisplay = __vite_ssr_import_1__.ref();
    const emptyCart = __vite_ssr_import_1__.ref(false);
    let phone;
    __vite_ssr_import_1__.onMounted(async () => {
      const messageToSend = {
        ids: cart.cart
      };
      const response = await fetch("http://localhost:8000/get-specific-ids", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(messageToSend)
      });
      const data = await response.json();
      if (data == []) {
        emptyCart.value = true;
      } else {
        cartItemsDisplay.value = data;
        balanceToPay();
      }
      cartNumber.value = cart.cart.length;
      try {
        const phoneResponse = await fetch(`http://localhost:8000/get-phone/${logins.getID}`);
        const phoneData = await phoneResponse.json();
        phone = phoneData.phone;
      } catch {
        console.log("could get number");
      }
    });
    const changeQuantity = async (id, b) => {
      let elementToChange = cartItemsDisplay.value.find((element) => {
        return element._id === id;
      });
      const response = await fetch(`http://localhost:8000/get-price/${id}`);
      const price = await response.json();
      if (b === true) {
        elementToChange.quantity++;
        elementToChange.price = elementToChange.price + price.price;
      } else if (b === false) {
        if (elementToChange.quantity > 1) {
          elementToChange.quantity--;
          elementToChange.price = elementToChange.price - price.price;
        }
      }
      balanceToPay();
    };
    const total = __vite_ssr_import_1__.ref();
    const checkout = __vite_ssr_import_1__.ref();
    const balanceToPay = () => {
      const totalPaid = cartItemsDisplay.value.reduce((accumulator, element) => {
        let total2 = accumulator + element.price;
        return total2;
      }, 0);
      checkout.value = totalPaid;
      total.value = totalPaid + 300;
    };
    const stateChange = () => {
      cart.$subscribe(async () => {
        const dataToSend = {
          id: logins.getID,
          newCart: cart.cart
        };
        const response = await fetch(`http://localhost:8000/update-cart`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataToSend)
        });
        const ress = await response.json();
      });
    };
    const removeFromCart = (id) => {
      const itemToRemove = cartItemsDisplay.value.find((element) => {
        return element._id == id;
      });
      let index = cartItemsDisplay.value.indexOf(itemToRemove);
      cartItemsDisplay.value.splice(index, 1);
      cart.removeFromCart(id);
      balanceToPay();
    };
    const router = __vite_ssr_import_3__.useRouter();
    const pay = async () => {
      const order = cartItemsDisplay.value.map((element) => {
        return {
          item: element._id,
          price: element.price,
          quantity: element.quantity
        };
      });
      cart.updateOrder(order);
      if (phone == void 0) {
        router.push("/login");
      } else {
        const response = await fetch("https://tinypesa.com/api/v1/express/initialize", {
          method: "POST",
          headers: {
            Apikey: "Me3s8tLM8vW",
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: `amount=${total.value}&msisdn=${phone}&account_no=200`
        });
        const data = await response.json();
      }
    };
    const __returned__ = { logins, cart, cartNumber, cartItemsDisplay, emptyCart, phone, changeQuantity, total, checkout, balanceToPay, stateChange, removeFromCart, router, pay };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/assets/icons/x-svgrepo-com.svg");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nav_bar = __vite_ssr_import_0__.default;
  _push(`<main${__vite_ssr_import_8__.ssrRenderAttrs(_attrs)}>`);
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_nav_bar, null, null, _parent));
  _push(`<div class="top-cart-bar"><h2> cart (<strong>${__vite_ssr_import_8__.ssrInterpolate($setup.cartNumber)}</strong>) </h2><p>sub total KSH ${__vite_ssr_import_8__.ssrInterpolate($setup.checkout)}</p></div>`);
  if ($setup.cartItemsDisplay) {
    _push(`<div class="cart"><div class="items"><!--[-->`);
    __vite_ssr_import_8__.ssrRenderList($setup.cartItemsDisplay, (item) => {
      _push(`<div class="single-item"><img${__vite_ssr_import_8__.ssrRenderAttr("src", item.image)} alt="" srcset=""><div class="details"><h4>KSH ${__vite_ssr_import_8__.ssrInterpolate(item.price)}</h4><p>${__vite_ssr_import_8__.ssrInterpolate(item.name)}</p><div class="quantity"><p class="add">+</p><h5>${__vite_ssr_import_8__.ssrInterpolate(item.quantity)}</h5><p class="minus">-</p></div></div><div class="delete"><img${__vite_ssr_import_8__.ssrRenderAttr("src", __vite_ssr_import_9__.default)} alt="" srcset=""></div></div>`);
    });
    _push(`<!--]--></div><div class="checkout"><div class="sub"><p>sub total</p><h4>Ksh ${__vite_ssr_import_8__.ssrInterpolate($setup.checkout)}</h4></div><div class="delivery-fee"><p>delivery</p><h4>KSH 300</h4></div><div class="total"><p>total</p><h4>${__vite_ssr_import_8__.ssrInterpolate($setup.total)}</h4></div><button>proceed to pay</button></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</main>`);
}
const __vite_ssr_import_10__ = await __vite_ssr_import__("/pages/cart/index.vue?vue&type=style&index=0&lang.css");

const __vite_ssr_import_11__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_11__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_12__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_12__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/tinega/Desktop/dont/hotel-web-app-1/pages/cart/index.vue"]]);

const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /assets/icons/x-svgrepo-com.svg
// Parents: 
// - /pages/cart/index.vue?macro=true ($id_7c49fc15)
// - /pages/cart/index.vue ($id_3fa45d07)
// Dependencies: 

// --------------------
const $id_9c69f974 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/icons/x-svgrepo-com.svg";
}


// --------------------
// Request: /pages/cart/index.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /pages/cart/index.vue?macro=true ($id_7c49fc15)
// - /pages/cart/index.vue ($id_3fa45d07)
// Dependencies: 

// --------------------
const $id_b6616365 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".top-cart-bar{align-items:center;display:flex;font-family:var(--title-font);justify-content:space-between;margin-top:10px;padding:0 15px}.top-cart-bar p{background-color:var(--carolina-blue);padding:8px}.top-cart-bar h2{margin:15px 0 10px;padding:0 10px}.top-cart-bar h2 strong{color:var(--carolina-blue)}.cart{display:flex;flex-wrap:wrap;font-family:var(--title-font);padding:10px;row-gap:20px}.cart .items{width:100%}.cart .single-item{border:1px solid #000;display:flex;margin-top:10px;padding:.5em;position:relative}.cart .single-item>img{height:80px;-o-object-fit:cover;object-fit:cover;width:80px}.cart .single-item .details{margin-left:10px}.cart .single-item .details .quantity{align-items:center;-moz-column-gap:10px;column-gap:10px;display:flex;font-size:1.5rem;margin-top:15px;width:-webkit-max-content;width:-moz-max-content;width:max-content}.cart .single-item .delete{margin-left:auto}.add:hover,.delete:hover,.minus:hover{cursor:pointer}.checkout{border-top:3px solid var(--main-orange);display:grid;padding:5px;width:100%}.checkout>*{align-items:center;display:flex;justify-content:space-between;padding:10px}.checkout button{background-color:var(--main-orange);border:none;border-radius:5px;color:#fff;margin-left:auto;margin-top:10px;padding:.7em}@media screen and (min-width:768px){.cart{display:grid;grid-template-columns:1fr 1fr}.checkout{border-top:none}}";
}


// --------------------
// Request: /pages/index/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/routes.mjs ($id_93c17e08)
// Dependencies: 
// - /components/nav-bar.vue ($id_12afc13c)
// - /components/landing-page.vue ($id_f281e5fb)
// - /components/specials-today.vue ($id_8de6d258)
// - /components/other-meals.vue ($id_72602127)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /assets/styles/global.css ($id_39795c03)
// - /assets/icons/undraw_breakfast_psiw.svg ($id_0fb468a0)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /assets/icons/photo1.png ($id_84bbe196)
// - /assets/icons/photo2.png ($id_a1980dd9)
// - /pages/index/index.vue?vue&type=style&index=0&lang.css ($id_64728f64)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5878fe75 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/nav-bar.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/landing-page.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/specials-today.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/other-meals.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/assets/styles/global.css");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/assets/icons/undraw_breakfast_psiw.svg");


const _sfc_main = {
  __name: 'index',
  setup(__props, { expose }) {
  expose();


__vite_ssr_import_4__.useHead({
  title: 'hotel web app',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  link: [
    { rel: 'icon', href: __vite_ssr_import_6__.default}
  ]
})


const __returned__ = { icon: __vite_ssr_import_6__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/assets/icons/photo1.png");

const __vite_ssr_import_10__ = await __vite_ssr_import__("/assets/icons/photo2.png");



function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nav_bar = __vite_ssr_import_0__.default
  const _component_landing_page = __vite_ssr_import_1__.default
  const _component_specials_today = __vite_ssr_import_2__.default
  const _component_other_meals = __vite_ssr_import_3__.default

  _push(`<div${__vite_ssr_import_8__.ssrRenderAttrs(__vite_ssr_import_7__.mergeProps({ class: "home-wrapper" }, _attrs))}>`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_nav_bar, null, null, _parent))
  _push(`<main class="all-wrapper"><div class="left"><img${__vite_ssr_import_8__.ssrRenderAttr("src", __vite_ssr_import_9__.default)} alt="random photo" srcset=""><h2>Cooked by kenyans</h2></div><div class="mains">`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_landing_page, null, null, _parent))
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_specials_today, null, null, _parent))
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_other_meals, null, null, _parent))
  _push(`</div><div class="right"><img${__vite_ssr_import_8__.ssrRenderAttr("src", __vite_ssr_import_10__.default)} alt="random photo " srcset=""><h2> for kenyans</h2></div></main></div>`)
}

const __vite_ssr_import_11__ = await __vite_ssr_import__("/pages/index/index.vue?vue&type=style&index=0&lang.css");


const __vite_ssr_import_12__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_12__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_13__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_13__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/tinega/Desktop/dont/hotel-web-app-1/pages/index/index.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/landing-page.vue
// Parents: 
// - /pages/index/index.vue?macro=true ($id_5878fe75)
// - /pages/index/index.vue ($id_a200782a)
// Dependencies: 
// - /components/location.vue ($id_a4c810b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/landing-page.vue?vue&type=style&index=0&scoped=true&lang.css ($id_7d116001)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f281e5fb = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/location.vue");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_location = __vite_ssr_import_0__.default

  _push(`<main${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "main-wrapper" }, _attrs))} data-v-7919a0c0><h1 data-v-7919a0c0> Hungry? We&#39;ll deliver it to your doorstep </h1>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_location, null, null, _parent))
  _push(`</main>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/landing-page.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/landing-page.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-7919a0c0"],['__file',"/home/tinega/Desktop/dont/hotel-web-app-1/components/landing-page.vue"]]);
}


// --------------------
// Request: /components/location.vue
// Parents: 
// - /components/landing-page.vue ($id_f281e5fb)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /assets/icons/location-svgrepo-com.svg ($id_7576eb66)
// - /assets/icons/arrow-down-svgrepo-com.svg ($id_5f240f89)
// - /components/location.vue?vue&type=style&index=0&scoped=true&lang.css ($id_7a1e1e60)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_a4c810b5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "location",
  setup(__props, { expose }) {
    expose();
    const locationSelected = __vite_ssr_import_0__.ref();
    const ifLocationAvailable = __vite_ssr_import_0__.ref();
    const arrow = __vite_ssr_import_0__.ref(null);
    const classSelected = __vite_ssr_import_0__.ref("hide");
    function toggleSearch() {
      classSelected.value = classSelected.value === "show" ? "hide" : "show";
      arrow.value.classList.toggle("up");
    }
    const getLocation = async (id) => {
      const response = await fetch(`http://localhost:8000/get-location/${id}`);
      const locationData = await response.json();
      locationSelected.value = locationData.location;
    };
    let userID;
    __vite_ssr_import_0__.onMounted(() => {
      if (localStorage.getItem("userID") === null) {
        if (sessionStorage.getItem("userID") === null) {
          locationSelected.value = "add a location";
        } else {
          userID = sessionStorage.getItem("userID");
          getLocation(userID);
        }
      } else {
        userID = localStorage.getItem("userID");
        getLocation(userID);
      }
    });
    const __returned__ = { locationSelected, ifLocationAvailable, arrow, classSelected, toggleSearch, getLocation, userID };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/assets/icons/location-svgrepo-com.svg");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/assets/icons/arrow-down-svgrepo-com.svg");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div class="location" data-v-c6d09d20><img${__vite_ssr_import_2__.ssrRenderAttr("src", __vite_ssr_import_3__.default)} alt="location" srcset="" data-v-c6d09d20><div class="toggle" data-v-c6d09d20><h5 data-v-c6d09d20>${__vite_ssr_import_2__.ssrInterpolate($setup.locationSelected)}</h5><img${__vite_ssr_import_2__.ssrRenderAttr("src", __vite_ssr_import_4__.default)} alt="" srcset="" data-v-c6d09d20></div></div><input class="${__vite_ssr_import_2__.ssrRenderClass($setup.classSelected)}" type="text" placeholder="delivering to ..." data-v-c6d09d20><!--]-->`);
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/location.vue?vue&type=style&index=0&scoped=true&lang.css");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/location.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_7__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c6d09d20"], ["__file", "/home/tinega/Desktop/dont/hotel-web-app-1/components/location.vue"]]);
;
}


// --------------------
// Request: /assets/icons/location-svgrepo-com.svg
// Parents: 
// - /components/location.vue ($id_a4c810b5)
// Dependencies: 

// --------------------
const $id_7576eb66 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/icons/location-svgrepo-com.svg";
}


// --------------------
// Request: /assets/icons/arrow-down-svgrepo-com.svg
// Parents: 
// - /components/location.vue ($id_a4c810b5)
// - /pages/menu/index.vue?macro=true ($id_0a7b1a7f)
// - /pages/menu/index.vue ($id_30db1f12)
// Dependencies: 

// --------------------
const $id_5f240f89 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/icons/arrow-down-svgrepo-com.svg";
}


// --------------------
// Request: /components/location.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /components/location.vue ($id_a4c810b5)
// Dependencies: 

// --------------------
const $id_7a1e1e60 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".location[data-v-c6d09d20]{-moz-column-gap:20px;column-gap:20px;margin-top:30px}.location[data-v-c6d09d20],.location .toggle[data-v-c6d09d20]{align-items:center;display:flex}.location .toggle[data-v-c6d09d20]{-moz-column-gap:10px;column-gap:10px}.location[data-v-c6d09d20]:hover{cursor:pointer}.location img[data-v-c6d09d20]{height:25px;transition:transform .15s cubic-bezier(.39,.575,.565,1);width:25px}.up[data-v-c6d09d20]{transform:rotate(180deg)}input[data-v-c6d09d20]{border:1px solid var(--main-orange);border-radius:5px;font-family:var(--title-font);font-size:1.2rem;font-weight:700;margin-top:20px;padding:7px;width:70%}@media screen and (max-width:768px){input[data-v-c6d09d20]{width:90%}}.show[data-v-c6d09d20]{visibility:visible}.hide[data-v-c6d09d20]{visibility:hidden}";
}


// --------------------
// Request: /components/landing-page.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /components/landing-page.vue ($id_f281e5fb)
// Dependencies: 

// --------------------
const $id_7d116001 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".main-wrapper[data-v-7919a0c0]{display:grid;font-family:var(--title-font);padding:50px 20px 0;place-items:center}.main-wrapper h1[data-v-7919a0c0]{color:#333;font-size:2.5rem;font-weight:700;text-align:center}";
}


// --------------------
// Request: /components/specials-today.vue
// Parents: 
// - /pages/index/index.vue?macro=true ($id_5878fe75)
// - /pages/index/index.vue ($id_a200782a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /stores/useCart.ts ($id_1a94a962)
// - /stores/useLoginStore.ts ($id_49ef1b29)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/specials-today.vue?vue&type=style&index=0&lang.css ($id_b62ff068)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_8de6d258 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/stores/useCart.ts");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/stores/useLoginStore.ts");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "specials-today",
  setup(__props, { expose }) {
    expose();
    const logins = __vite_ssr_import_3__.useLoginStore();
    const main = __vite_ssr_import_2__.useCartStore();
    const data = __vite_ssr_import_0__.ref();
    let userID;
    __vite_ssr_import_0__.onMounted(async () => {
      try {
        const resonse = await fetch("http://localhost:8000/specials", {
          method: "GET"
        });
        data.value = await resonse.json();
      } catch {
        console.log("couldnt get the data");
      }
      userID = logins.getID;
      stateChange();
    });
    const stateChange = () => {
      main.$subscribe(async (mutation, state) => {
        const dataToSend = {
          id: userID,
          newCart: main.cart
        };
        const response = await fetch(`http://localhost:8000/update-cart`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataToSend)
        });
        const ress = await response.json();
      });
    };
    const addToCart = (id) => {
      main.addtoCart(id);
    };
    const __returned__ = { logins, main, data, userID, stateChange, addToCart };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.data) {
    _push(`<div${__vite_ssr_import_5__.ssrRenderAttrs(__vite_ssr_import_4__.mergeProps({ class: "specials-wrapper" }, _attrs))}><h2> specials today</h2><div class="specials-cards"><!--[-->`);
    __vite_ssr_import_5__.ssrRenderList($setup.data, (item) => {
      _push(`<div class="single-card"><img${__vite_ssr_import_5__.ssrRenderAttr("src", item.image)} alt="food" srcset=""><div class="details"><h3>${__vite_ssr_import_5__.ssrInterpolate(item.name)}</h3><p>By Chef Ali</p><p>${__vite_ssr_import_5__.ssrInterpolate(item.price)} ksh + delivery fee</p></div><div class="add-to-cart"><p>add to cart</p></div></div>`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/components/specials-today.vue?vue&type=style&index=0&lang.css");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/specials-today.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_8__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/tinega/Desktop/dont/hotel-web-app-1/components/specials-today.vue"]]);
;
}


// --------------------
// Request: /components/specials-today.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /components/specials-today.vue ($id_8de6d258)
// Dependencies: 

// --------------------
const $id_b62ff068 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".specials-wrapper{font-family:var(--title-font);margin-top:30px;padding:20px}.specials-wrapper h2{position:relative}.specials-wrapper h2:before{background-color:var(--main-orange);bottom:-5px;content:\"\";height:3px;left:0;position:absolute;transform:translateY(-1px);width:10%}.specials-cards{display:flex;flex-wrap:wrap;gap:30px;margin-top:20px}.single-card{border:1px solid var(--side-orange);border-radius:5px;-moz-column-gap:20px;column-gap:20px;display:flex;flex-wrap:nowrap;padding:8px;position:relative;transition:border .2s cubic-bezier(.23,1,.32,1);width:100%}.single-card .add-to-cart{border:1px solid var(--side-orange);font-size:.7rem;padding:7px;position:absolute;right:10px;top:10px;transition:all .3s ease-out}.single-card .add-to-cart:hover{background-color:var(--side-orange);color:#fff;cursor:pointer}.single-card img{height:120px;-o-object-fit:cover;object-fit:cover;width:120px}.single-card .details{display:flex;flex-direction:column;justify-content:center;row-gap:5px}@media screen and (min-width:768px){.specials-cards{display:grid;grid-template-columns:auto auto;padding:20px}.single-card{border:1px solid transparent}.single-card:hover{border:1px solid var(--side-orange)}}";
}


// --------------------
// Request: /components/other-meals.vue
// Parents: 
// - /pages/index/index.vue?macro=true ($id_5878fe75)
// - /pages/index/index.vue ($id_a200782a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /stores/useCart.ts ($id_1a94a962)
// - /stores/useLoginStore.ts ($id_49ef1b29)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/other-meals.vue?vue&type=style&index=0&scoped=true&lang.css ($id_bee35f7e)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_72602127 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/stores/useCart.ts");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/stores/useLoginStore.ts");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "other-meals",
  setup(__props, { expose }) {
    expose();
    const logins = __vite_ssr_import_3__.useLoginStore();
    const cart = __vite_ssr_import_2__.useCartStore();
    let userID;
    const items = __vite_ssr_import_0__.ref();
    __vite_ssr_import_0__.onMounted(async () => {
      userID = logins.getID;
      const response = await fetch("http://localhost:8000/get-three-random");
      const data = await response.json();
      items.value = data;
      stateChange();
    });
    const stateChange = () => {
      cart.$subscribe(async (mutation, state) => {
        const dataToSend = {
          id: logins.getID,
          newCart: cart.cart
        };
        const response = await fetch(`http://localhost:8000/update-cart`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataToSend)
        });
        const ress = await response.json();
      });
    };
    const addToCart = async (id) => {
      cart.addtoCart(id);
    };
    const __returned__ = { logins, cart, userID, items, stateChange, addToCart };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.items) {
    _push(`<div${__vite_ssr_import_5__.ssrRenderAttrs(__vite_ssr_import_4__.mergeProps({ class: "other-meals" }, _attrs))} data-v-551514a8><h2 data-v-551514a8>chef specials</h2><main data-v-551514a8><!--[-->`);
    __vite_ssr_import_5__.ssrRenderList($setup.items, (item) => {
      _push(`<div class="chefs-special" data-v-551514a8><h3 data-v-551514a8>chef Lorem&#39;s ${__vite_ssr_import_5__.ssrInterpolate(item.name)}</h3><img${__vite_ssr_import_5__.ssrRenderAttr("src", item.image)} alt="" srcset="" data-v-551514a8><ul data-v-551514a8><h3 data-v-551514a8>ingredients</h3><li data-v-551514a8>chicken</li><li data-v-551514a8>tomatoes</li><li data-v-551514a8>briani</li></ul><div class="add-to-cart" data-v-551514a8><p data-v-551514a8>add to cart</p></div></div>`);
    });
    _push(`<!--]--></main></div>`);
  } else {
    _push(`<!---->`);
  }
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/components/other-meals.vue?vue&type=style&index=0&scoped=true&lang.css");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/other-meals.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_8__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-551514a8"], ["__file", "/home/tinega/Desktop/dont/hotel-web-app-1/components/other-meals.vue"]]);
;
}


// --------------------
// Request: /components/other-meals.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /components/other-meals.vue ($id_72602127)
// Dependencies: 

// --------------------
const $id_bee35f7e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".other-meals[data-v-551514a8]{font-family:var(--title-font);height:100vh;left:0;padding:20px;position:absolute;width:95vw}.other-meals main[data-v-551514a8]{display:flex;flex-wrap:wrap;padding-top:20px;row-gap:20px}.chefs-special[data-v-551514a8]{align-items:center;border:1px solid #333;border-radius:10px;display:flex;flex-direction:column;gap:20px;padding:6px;position:relative;width:100%}.chefs-special .add-to-cart[data-v-551514a8]{border:1px solid var(--side-orange);font-size:.7rem;padding:10px;transition:all .3s ease-out}.chefs-special .add-to-cart[data-v-551514a8]:hover{background-color:var(--side-orange);color:#fff;cursor:pointer}@media screen and (min-width:520px){.other-meals main[data-v-551514a8]{justify-content:space-around;width:100%}.chefs-special[data-v-551514a8]{width:300px}}.chefs-special img[data-v-551514a8]{border-radius:10%;height:200px;-o-object-fit:cover;object-fit:cover;width:200px}ul[data-v-551514a8]{align-self:flex-start;margin-left:10px;position:relative;width:100%}#chefs-pic[data-v-551514a8]{border-radius:50%;height:40px;-o-object-fit:cover;object-fit:cover;position:absolute;right:10%;top:20%;width:40px}";
}


// --------------------
// Request: /assets/styles/global.css
// Parents: 
// - /pages/index/index.vue?macro=true ($id_5878fe75)
// - /pages/index/index.vue ($id_a200782a)
// Dependencies: 

// --------------------
const $id_39795c03 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "@import url(\"https://fonts.googleapis.com/css2?family=Puritan&display=swap\");*{box-sizing:border-box;list-style:none;margin:0;padding:0}:root{--title-font:\"Puritan\",sans-serif;--main-orange:#fe9900;--side-orange:#ea4d22;--food-red:#710000;--light-blue:#c6ffff;--main-yellow:#ff0;--orange-web:#ffa400;--carolina-blue:#009ffd;--patrick-blue:#2a2a72;--raisin-blue:#232528;--alice-blue:#eaf6ff}body{background-color:#fff;color:#333}";
}


// --------------------
// Request: /assets/icons/photo1.png
// Parents: 
// - /pages/index/index.vue?macro=true ($id_5878fe75)
// - /pages/index/index.vue ($id_a200782a)
// Dependencies: 

// --------------------
const $id_84bbe196 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/icons/photo1.png";
}


// --------------------
// Request: /assets/icons/photo2.png
// Parents: 
// - /pages/index/index.vue?macro=true ($id_5878fe75)
// - /pages/index/index.vue ($id_a200782a)
// Dependencies: 

// --------------------
const $id_a1980dd9 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/icons/photo2.png";
}


// --------------------
// Request: /pages/index/index.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /pages/index/index.vue?macro=true ($id_5878fe75)
// - /pages/index/index.vue ($id_a200782a)
// Dependencies: 

// --------------------
const $id_64728f64 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".all-wrapper{display:flex;position:relative;width:100%}.left,.right{display:none;position:-webkit-sticky;position:sticky}.left img,.right img{display:none;height:calc(100vh - 80px);-o-object-fit:cover;object-fit:cover;position:relative;width:200px;z-index:-1}.left:before,.right:before{background-color:rgba(0,0,0,.8)}.left:before,.right:before{content:\"\";height:calc(100vh - 80px);left:0;position:absolute;top:0;width:200px;z-index:1}.left:before{background-color:hsla(0,0%,100%,.5)}.right h2{color:var(--main-orange);font-size:2rem;top:10%}.left h2,.right h2{display:none;font-family:var(--title-font);left:50%;position:absolute;transform:translate(-50%,-50%);width:100%;z-index:2}.left h2{color:#333;font-size:2.5rem;top:40%}.mains{padding-top:20px;width:100%}@media screen and (min-width:1024px){.left,.left h2,.left img,.right,.right h2,.right img{display:block}}";
}


// --------------------
// Request: /pages/login.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/routes.mjs ($id_93c17e08)
// Dependencies: 
// - /components/nav-bar.vue ($id_12afc13c)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /assets/icons/undraw_breakfast_psiw.svg ($id_0fb468a0)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /pages/login.vue?vue&type=style&index=0&lang.css ($id_af77e8ef)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_213baa8a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/nav-bar.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/assets/icons/undraw_breakfast_psiw.svg");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_5__.defineComponent({
  __name: "login",
  setup(__props, { expose }) {
    expose();
    __vite_ssr_import_2__.useHead({
      title: "log in",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      charset: "utf-8",
      meta: [
        { name: "description", content: "My amazing site." }
      ],
      link: [
        { rel: "icon", href: __vite_ssr_import_6__.default }
      ]
    });
    const phone = __vite_ssr_import_3__.ref();
    const userResponse = __vite_ssr_import_3__.ref();
    const messageResponse = __vite_ssr_import_3__.ref();
    const res = __vite_ssr_import_3__.ref();
    const checkPhone = async () => {
      const phoneToSend = {
        phone: phone.value
      };
      const response = await fetch("http://localhost:8000/check-number", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(phoneToSend)
      });
      const data = await response.json();
      if (data != true) {
        res.value.classList.add("drop");
        messageResponse.value = "invalid phone number";
        setTimeout(() => {
          messageResponse.value = null;
          res.value.classList.remove("drop");
        }, 700);
      } else {
        userResponse.value = null;
      }
    };
    const password = __vite_ssr_import_3__.ref();
    const ifCorrectData = __vite_ssr_import_3__.ref(true);
    const checkPassword = () => {
      wrongPassword.value = null;
      if (password.value != "" || userResponse == null) {
        ifCorrectData.value = false;
      }
    };
    const wrongPassword = __vite_ssr_import_3__.ref();
    const userID = __vite_ssr_import_3__.ref();
    const ifKeepLogged = __vite_ssr_import_3__.ref();
    const login = async () => {
      const dataToSend = {
        phone: phone.value,
        password: password.value
      };
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend)
      });
      const data = await response.json();
      if (data === false) {
        res.value.classList.add("drop");
        messageResponse.value = "wrong password";
        setTimeout(() => {
          messageResponse.value = null;
          res.value.classList.remove("drop");
        }, 1500);
      } else {
        res.value.classList.add("drop");
        messageResponse.value = "log in succesfull";
        setTimeout(() => {
          messageResponse.value = null;
          res.value.classList.remove("drop");
        }, 1500);
        userID.value = data._id;
        if (ifKeepLogged.value == true) {
          localStorage.setItem("userID", userID.value);
        } else {
          sessionStorage.setItem("userID", userID.value);
        }
        const route = __vite_ssr_import_4__.useRouter();
        route.push("/");
      }
    };
    const __returned__ = { phone, userResponse, messageResponse, res, checkPhone, password, ifCorrectData, checkPassword, wrongPassword, userID, ifKeepLogged, login };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/assets/icons/undraw_breakfast_psiw.svg");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_navBar = __vite_ssr_import_0__.default;
  const _component_nuxt_link = __vite_ssr_import_1__.default;
  _push(`<main${__vite_ssr_import_8__.ssrRenderAttrs(_attrs)}>`);
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_navBar, null, null, _parent));
  _push(`<div class="login-wrapper"><p class="alert">${__vite_ssr_import_8__.ssrInterpolate($setup.messageResponse)}</p><img${__vite_ssr_import_8__.ssrRenderAttr("src", __vite_ssr_import_9__.default)} alt=""><h1>log in</h1><div class="form"><p>${__vite_ssr_import_8__.ssrInterpolate($setup.userResponse)}</p><p>${__vite_ssr_import_8__.ssrInterpolate($setup.wrongPassword)}</p><input type="text" placeholder="phone number"${__vite_ssr_import_8__.ssrRenderAttr("value", $setup.phone)}><input type="password" name="" id="" placeholder="password"${__vite_ssr_import_8__.ssrRenderAttr("value", $setup.password)}><div class="keep-logged"><label for="checkbox"> keep me logged in</label><input type="checkbox" id="checkbox"${__vite_ssr_import_8__.ssrIncludeBooleanAttr(Array.isArray($setup.ifKeepLogged) ? __vite_ssr_import_8__.ssrLooseContain($setup.ifKeepLogged, null) : $setup.ifKeepLogged) ? " checked" : ""}></div><button${__vite_ssr_import_8__.ssrIncludeBooleanAttr($setup.ifCorrectData) ? " disabled" : ""}>login</button><div class="other"><a href="#">forgot your password</a>`);
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_nuxt_link, { to: "/signup" }, {
    default: __vite_ssr_import_7__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`sign up`);
      } else {
        return [
          __vite_ssr_import_7__.createTextVNode("sign up")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></main>`);
}
const __vite_ssr_import_10__ = await __vite_ssr_import__("/pages/login.vue?vue&type=style&index=0&lang.css");

const __vite_ssr_import_11__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_11__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_12__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_12__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/tinega/Desktop/dont/hotel-web-app-1/pages/login.vue"]]);

const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/login.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /pages/login.vue?macro=true ($id_213baa8a)
// - /pages/login.vue ($id_b0922173)
// Dependencies: 

// --------------------
const $id_af77e8ef = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".login-wrapper,.signup-wrapper{display:grid;font-family:var(--title-font);place-items:center;text-align:center}.login-wrapper>img,.signup-wrapper>img{height:60px;margin-top:10px;width:60px}.form{display:grid;margin-top:20px;place-items:center;row-gap:30px;width:100%}.form input{border:none;border:1px solid var(--main-orange);border-radius:33px;color:#000;font-size:1rem;height:44px;outline:none;padding:0 10px;width:80%}@media screen and (min-width:600px){.form{width:40%}.login-wrapper,.signup-wrapper{display:grid;place-items:center}}.form input:focus{border:1px solid var(--carolina-blue)}.form button{background-color:var(--main-orange);border:none;border-radius:30px;font-size:1.2rem;outline:none;padding:13px 25px}.form .other{display:flex;flex-direction:column;row-gap:10px}.form .other a{color:#000}.keep-logged{bottom:15px;display:flex;height:30px;position:relative;width:100%}.keep-logged label{width:100%}.keep-logged input{height:20px}.login-wrapper button{bottom:20px;position:relative}";
}


// --------------------
// Request: /pages/menu/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/routes.mjs ($id_93c17e08)
// Dependencies: 
// - /components/nav-bar.vue ($id_12afc13c)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /assets/icons/undraw_breakfast_psiw.svg ($id_0fb468a0)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /assets/icons/arrow-down-svgrepo-com.svg ($id_5f240f89)
// - /pages/menu/index.vue?vue&type=style&index=0&lang.css ($id_f88acd87)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_0a7b1a7f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/nav-bar.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/assets/icons/undraw_breakfast_psiw.svg");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_5__.defineComponent({
  __name: "index",
  setup(__props, { expose }) {
    expose();
    __vite_ssr_import_2__.useHead({
      title: "hotel menu",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      charset: "utf-8",
      meta: [
        { name: "description", content: "My amazing site." }
      ],
      link: [
        { rel: "icon", href: __vite_ssr_import_6__.default }
      ]
    });
    const nav = __vite_ssr_import_3__.ref(null);
    function toggleMenu() {
      nav.value.classList.toggle("height");
    }
    function watchTitle() {
      title.value = route.params.filter;
    }
    const route = __vite_ssr_import_4__.useRoute();
    const title = __vite_ssr_import_3__.ref(route.params.filter);
    const __returned__ = { nav, toggleMenu, watchTitle, route, title };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/assets/icons/arrow-down-svgrepo-com.svg");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nav_bar = __vite_ssr_import_0__.default;
  const _component_NuxtLink = __vite_ssr_import_1__.default;
  const _component_NuxtPage = __vite_ssr_import_7__.resolveComponent("NuxtPage");
  _push(`<div${__vite_ssr_import_8__.ssrRenderAttrs(__vite_ssr_import_7__.mergeProps({ class: "everything" }, _attrs))}>`);
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_nav_bar, null, null, _parent));
  _push(`<div class="arrow-down"><img${__vite_ssr_import_8__.ssrRenderAttr("src", __vite_ssr_import_9__.default)} alt="" srcset=""><p>${__vite_ssr_import_8__.ssrInterpolate($setup.title)}s</p></div><div class="navigations">`);
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_NuxtLink, {
    to: "/menu/main-meal",
    onClick: $setup.toggleMenu
  }, {
    default: __vite_ssr_import_7__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Main Meals`);
      } else {
        return [
          __vite_ssr_import_7__.createTextVNode("Main Meals")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_NuxtLink, {
    to: "/menu/beverage",
    onClick: $setup.toggleMenu
  }, {
    default: __vite_ssr_import_7__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Bevarages`);
      } else {
        return [
          __vite_ssr_import_7__.createTextVNode("Bevarages")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_NuxtLink, {
    to: "/menu/snack",
    onClick: $setup.toggleMenu
  }, {
    default: __vite_ssr_import_7__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`snacks`);
      } else {
        return [
          __vite_ssr_import_7__.createTextVNode("snacks")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_NuxtLink, {
    to: "/menu/salad",
    onClick: $setup.toggleMenu
  }, {
    default: __vite_ssr_import_7__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Salads`);
      } else {
        return [
          __vite_ssr_import_7__.createTextVNode("Salads")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(`</div>`);
}
const __vite_ssr_import_10__ = await __vite_ssr_import__("/pages/menu/index.vue?vue&type=style&index=0&lang.css");

const __vite_ssr_import_11__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_11__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/menu/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_12__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_12__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/tinega/Desktop/dont/hotel-web-app-1/pages/menu/index.vue"]]);

const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/menu/index.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /pages/menu/index.vue?macro=true ($id_0a7b1a7f)
// - /pages/menu/index.vue ($id_30db1f12)
// Dependencies: 

// --------------------
const $id_f88acd87 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".everything{position:relative}.navigations{background-color:var(--main-orange);display:none;flex-direction:column;height:0;overflow-y:hidden;padding:20px 10px;row-gap:35px;transition:height .5s ease}.height{display:flex;height:100%}.navigations a{color:#333;font-family:var(--title-font);font-size:1.2rem;text-decoration:none}.navigations a:active{color:var(--carolina-blue)}.arrow-down{align-items:center;cursor:pointer;display:flex;font-family:var(--title-font);gap:10px;justify-content:center;margin-top:20px}.arrow-down img{height:30px;margin-left:10px}";
}


// --------------------
// Request: /pages/menu/index/[filter].vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/routes.mjs ($id_93c17e08)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /assets/styles/meals.css ($id_9c00b061)
// - /stores/useCart.ts ($id_1a94a962)
// - /stores/useLoginStore.ts ($id_49ef1b29)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_df565390 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/assets/styles/meals.css");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/stores/useCart.ts");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/stores/useLoginStore.ts");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_3__.defineComponent({
  __name: "[filter]",
  setup(__props, { expose }) {
    expose();
    const logins = __vite_ssr_import_6__.useLoginStore();
    const cart = __vite_ssr_import_5__.useCartStore();
    const route = __vite_ssr_import_0__.useRoute();
    __vite_ssr_import_1__.useHead({
      title: `${route.params.filter}s`,
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      charset: "utf-8",
      meta: [
        { name: "description", content: "My amazing site." }
      ],
      link: [
        { rel: "icon", href: "../assets/icons/undraw_breakfast_psiw.svg" }
      ]
    });
    const data = __vite_ssr_import_2__.ref();
    let userID;
    __vite_ssr_import_2__.onMounted(async () => {
      userID = logins.getID;
      const response = await fetch(`http://localhost:8000/filter/${route.params.filter}`);
      data.value = await response.json();
      stateChange();
    });
    const stateChange = () => {
      cart.$subscribe(async (mutation, state) => {
        const dataToSend = {
          id: userID,
          newCart: cart.cart
        };
        const response = await fetch(`http://localhost:8000/update-cart`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataToSend)
        });
        const ress = await response.json();
      });
    };
    const addToCart = async (id) => {
      cart.addtoCart(id);
      stateChange();
    };
    const __returned__ = { logins, cart, route, data, userID, stateChange, addToCart };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_8__.ssrRenderAttrs(__vite_ssr_import_7__.mergeProps({ class: "all-meals" }, _attrs))}><!--[-->`);
  __vite_ssr_import_8__.ssrRenderList($setup.data, (item) => {
    _push(`<div class="content-wrapper"><img${__vite_ssr_import_8__.ssrRenderAttr("src", item.image)} alt="" srcset=""><div class="content"><p>${__vite_ssr_import_8__.ssrInterpolate(item.name)}</p><p>ksh ${__vite_ssr_import_8__.ssrInterpolate(item.price)}</p></div><div class="add-to-cart"><p>add to cart</p></div></div>`);
  });
  _push(`<!--]--></div>`);
}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_9__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/menu/index/[filter].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_10__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_10__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/tinega/Desktop/dont/hotel-web-app-1/pages/menu/index/[filter].vue"]]);

const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /assets/styles/meals.css
// Parents: 
// - /pages/menu/index/[filter].vue?macro=true ($id_df565390)
// - /pages/menu/index/[filter].vue ($id_8eae100f)
// Dependencies: 

// --------------------
const $id_9c00b061 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".all-meals{font-family:var(--title-font);padding:15px;position:relative}@media screen and (min-width:768px){.all-meals{display:grid;gap:15px;grid-template-columns:1fr 1fr;padding:30px}}.all-meals .content-wrapper{align-items:center;border:2px solid #333;border-radius:10px;display:flex;font-size:1.2rem;justify-content:space-between;margin:8px 0;padding:5px 15px;row-gap:20px}.all-meals .content-wrapper .content{display:grid;gap:10px;margin:0 auto 0 10px}.all-meals .content-wrapper img{border-radius:5px;height:100px;-o-object-fit:cover;object-fit:cover;width:100px}.all-meals a{color:#333;-moz-column-gap:20px;column-gap:20px;display:flex;font-size:1rem;justify-content:space-between;text-decoration:none}.all-meals>p{color:var(--carolina-blue)}.content-wrapper{position:relative}.all-meals .add-to-cart{border:1px solid var(--side-orange);font-size:.7rem;padding:7px;position:absolute;right:10px;top:10px;transition:all .3s ease-out}.all-meals .add-to-cart:hover{background-color:var(--side-orange);color:#fff;cursor:pointer}";
}


// --------------------
// Request: /pages/signup.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/routes.mjs ($id_93c17e08)
// Dependencies: 
// - /components/nav-bar.vue ($id_12afc13c)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /assets/icons/undraw_breakfast_psiw.svg ($id_0fb468a0)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /pages/signup.vue?vue&type=style&index=0&lang.css ($id_f2a1f585)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_ae8d024a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/nav-bar.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/assets/icons/undraw_breakfast_psiw.svg");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_5__.defineComponent({
  __name: "signup",
  setup(__props, { expose }) {
    expose();
    __vite_ssr_import_2__.useHead({
      title: "sign up",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      charset: "utf-8",
      meta: [
        { name: "description", content: "sign up page" }
      ],
      link: [
        { rel: "icon", href: __vite_ssr_import_6__.default }
      ]
    });
    const phone = __vite_ssr_import_3__.ref();
    const password = __vite_ssr_import_3__.ref();
    const passwordRepeat = __vite_ssr_import_3__.ref();
    const messageResponse = __vite_ssr_import_3__.ref();
    const isButtonActive = __vite_ssr_import_3__.ref(true);
    const res = __vite_ssr_import_3__.ref();
    const checkPhone = () => {
      if (phone.value.length < 10) {
        res.value.classList.add("drop");
        messageResponse.value = "enter a valid phone number";
        setTimeout(() => {
          messageResponse.value = null;
          res.value.classList.remove("drop");
        }, 2e3);
      } else {
        const checkIfNumberUsed = async () => {
          const phoneToSend = {
            phone: phone.value
          };
          const response = await fetch("http://localhost:8000/check-number", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(phoneToSend)
          });
          const data = await response.json();
          if (data == true) {
            res.value.classList.add("drop");
            messageResponse.value = "phone number in use";
            setTimeout(() => {
              messageResponse.value = null;
              res.value.classList.remove("drop");
            }, 2e3);
          } else {
            dataToSend.phone = phone.value;
            if (dataToSend.password != null) {
              isButtonActive.value = false;
            }
          }
        };
        checkIfNumberUsed();
      }
    };
    const checkTwoPasswords = () => {
      if (password.value != passwordRepeat.value) {
        res.value.classList.add("drop");
        messageResponse.value = "passwords do not match";
        setTimeout(() => {
          messageResponse.value = null;
          res.value.classList.remove("drop");
        }, 700);
      } else {
        dataToSend.password = password.value;
        if (dataToSend.phone != null) {
          isButtonActive.value = false;
        }
      }
    };
    const dataToSend = {
      phone: null,
      password: null
    };
    const signUp = async () => {
      const response = await fetch("http://localhost:8000/create-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dataToSend)
      });
      const data = await response.json();
      if (data != false) {
        isButtonActive.value = true;
        const userID = data._id;
        res.value.classList.add("drop");
        messageResponse.value = "sucessfully sign up";
        sessionStorage.setItem("userID", userID);
        console.log(sessionStorage.getItem("userID"));
        setTimeout(() => {
          const route = __vite_ssr_import_4__.useRouter();
          route.push("/");
        }, 1500);
      }
    };
    const __returned__ = { phone, password, passwordRepeat, messageResponse, isButtonActive, res, checkPhone, checkTwoPasswords, dataToSend, signUp };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/assets/icons/undraw_breakfast_psiw.svg");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_navBar = __vite_ssr_import_0__.default;
  const _component_nuxt_link = __vite_ssr_import_1__.default;
  _push(`<main${__vite_ssr_import_8__.ssrRenderAttrs(_attrs)}>`);
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_navBar, null, null, _parent));
  _push(`<div class="signup-wrapper"><p class="alert">${__vite_ssr_import_8__.ssrInterpolate($setup.messageResponse)}</p><img${__vite_ssr_import_8__.ssrRenderAttr("src", __vite_ssr_import_9__.default)} alt=""><h1>Sign Up</h1><div class="form"><input type="text" placeholder="phone number"${__vite_ssr_import_8__.ssrRenderAttr("value", $setup.phone)}><input type="password" name="" placeholder="password"${__vite_ssr_import_8__.ssrRenderAttr("value", $setup.password)}><input type="password" name="" placeholder="repeat password"${__vite_ssr_import_8__.ssrRenderAttr("value", $setup.passwordRepeat)}><!-- disabled on check  --><button${__vite_ssr_import_8__.ssrIncludeBooleanAttr($setup.isButtonActive) ? " disabled" : ""}>Sign up </button><div class="other">`);
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_nuxt_link, { to: "/login" }, {
    default: __vite_ssr_import_7__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`log in`);
      } else {
        return [
          __vite_ssr_import_7__.createTextVNode("log in")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></main>`);
}
const __vite_ssr_import_10__ = await __vite_ssr_import__("/pages/signup.vue?vue&type=style&index=0&lang.css");

const __vite_ssr_import_11__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_11__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/signup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_12__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_12__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/tinega/Desktop/dont/hotel-web-app-1/pages/signup.vue"]]);

const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/signup.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /pages/signup.vue?macro=true ($id_ae8d024a)
// - /pages/signup.vue ($id_31eb92be)
// Dependencies: 

// --------------------
const $id_f2a1f585 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".checkPasswordResponse{color:red}.login-wrapper button:disabled,.signup-wrapper button:disabled{background-color:grey}.alert{background-color:var(--orange-web);padding:4px 7px;position:absolute;top:0;transform:translateY(-100px);transition:all .1s cubic-bezier(.19,1,.22,1);width:-webkit-max-content;width:-moz-max-content;width:max-content}.alert,.drop{border-radius:10px}.drop{transform:translateY(100px)}";
}


// --------------------
// Request: /pages/account.vue
// Parents: 
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/routes.mjs ($id_93c17e08)
// Dependencies: 
// - /components/nav-bar.vue ($id_12afc13c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /stores/useLoginStore.ts ($id_49ef1b29)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /pages/account.vue?vue&type=style&index=0&lang.css ($id_c8cedaf5)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_ce2c396d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/nav-bar.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/stores/useLoginStore.ts");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_4__.defineComponent({
  __name: "account",
  setup(__props, { expose }) {
    expose();
    const logins = __vite_ssr_import_5__.useLoginStore();
    let userID;
    let userData = __vite_ssr_import_1__.ref();
    __vite_ssr_import_1__.onMounted(async () => {
      userID = logins.getID;
      try {
        console.log(userID);
        const dataToSend = {
          userID
        };
        const response = await fetch("http://localhost:8000/get-user-data", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataToSend)
        });
        userData.value = await response.json();
      } catch {
        console.log("catch");
      }
    });
    __vite_ssr_import_2__.useHead({
      title: `account details`,
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      charset: "utf-8",
      meta: [
        { name: "description", content: "My amazing site." }
      ],
      link: [
        { rel: "icon", href: "../assets/icons/undraw_breakfast_psiw.svg" }
      ]
    });
    const logOut = () => {
      logins.$reset();
      localStorage.clear();
      sessionStorage.clear();
      const router = __vite_ssr_import_3__.useRouter();
      const after = async () => {
        await router.push("/");
        await window.location.reload();
      };
      after();
    };
    const __returned__ = { logins, userID, userData, logOut };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nav_bar = __vite_ssr_import_0__.default;
  _push(`<div${__vite_ssr_import_7__.ssrRenderAttrs(__vite_ssr_import_6__.mergeProps({ class: "account-wrapper" }, _attrs))}>`);
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_nav_bar, null, null, _parent));
  if ($setup.userData) {
    _push(`<div class="account-details"><h3>not much to show here</h3><p>phone: ${__vite_ssr_import_7__.ssrInterpolate($setup.userData.phone)}</p><p>location: ${__vite_ssr_import_7__.ssrInterpolate($setup.userData.location)}</p><button>log out</button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const __vite_ssr_import_8__ = await __vite_ssr_import__("/pages/account.vue?vue&type=style&index=0&lang.css");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_9__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_10__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_10__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/tinega/Desktop/dont/hotel-web-app-1/pages/account.vue"]]);
;
}


// --------------------
// Request: /pages/cart/checkout.vue
// Parents: 
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/routes.mjs ($id_93c17e08)
// Dependencies: 
// - /components/nav-bar.vue ($id_12afc13c)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_541d3871 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/nav-bar.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_2__.defineComponent({
  __name: "checkout",
  setup(__props, { expose }) {
    expose();
    __vite_ssr_import_1__.useHead({
      title: "check out",
      link: [
        { rel: "icon", href: "../assets/icons/undraw_breakfast_psiw.svg" }
      ]
    });
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nav_bar = __vite_ssr_import_0__.default;
  _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({ class: "checkout-wrapper" }, _attrs))}>`);
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_nav_bar, null, null, _parent));
  _push(`</div>`);
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart/checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_6__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/tinega/Desktop/dont/hotel-web-app-1/pages/cart/checkout.vue"]]);
;
}


// --------------------
// Request: /pages/cart/index.vue
// Parents: 
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/routes.mjs ($id_93c17e08)
// Dependencies: 
// - /components/nav-bar.vue ($id_12afc13c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /stores/useCart.ts ($id_1a94a962)
// - /stores/useLoginStore.ts ($id_49ef1b29)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /assets/icons/x-svgrepo-com.svg ($id_9c69f974)
// - /pages/cart/index.vue?vue&type=style&index=0&lang.css ($id_b6616365)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_3fa45d07 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/nav-bar.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/stores/useCart.ts");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/stores/useLoginStore.ts");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_4__.defineComponent({
  __name: "index",
  setup(__props, { expose }) {
    expose();
    const logins = __vite_ssr_import_6__.useLoginStore();
    const cart = __vite_ssr_import_5__.useCartStore();
    const cartNumber = __vite_ssr_import_1__.ref();
    cart.$subscribe((state) => {
      cartNumber.value = cart.cart.length;
    });
    __vite_ssr_import_2__.useHead({
      title: "cart",
      link: [
        { rel: "icon", href: "../assets/icons/undraw_breakfast_psiw.svg" }
      ]
    });
    const cartItemsDisplay = __vite_ssr_import_1__.ref();
    const emptyCart = __vite_ssr_import_1__.ref(false);
    let phone;
    __vite_ssr_import_1__.onMounted(async () => {
      const messageToSend = {
        ids: cart.cart
      };
      const response = await fetch("http://localhost:8000/get-specific-ids", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(messageToSend)
      });
      const data = await response.json();
      if (data == []) {
        emptyCart.value = true;
      } else {
        cartItemsDisplay.value = data;
        balanceToPay();
      }
      cartNumber.value = cart.cart.length;
      try {
        const phoneResponse = await fetch(`http://localhost:8000/get-phone/${logins.getID}`);
        const phoneData = await phoneResponse.json();
        phone = phoneData.phone;
      } catch {
        console.log("could get number");
      }
    });
    const changeQuantity = async (id, b) => {
      let elementToChange = cartItemsDisplay.value.find((element) => {
        return element._id === id;
      });
      const response = await fetch(`http://localhost:8000/get-price/${id}`);
      const price = await response.json();
      if (b === true) {
        elementToChange.quantity++;
        elementToChange.price = elementToChange.price + price.price;
      } else if (b === false) {
        if (elementToChange.quantity > 1) {
          elementToChange.quantity--;
          elementToChange.price = elementToChange.price - price.price;
        }
      }
      balanceToPay();
    };
    const total = __vite_ssr_import_1__.ref();
    const checkout = __vite_ssr_import_1__.ref();
    const balanceToPay = () => {
      const totalPaid = cartItemsDisplay.value.reduce((accumulator, element) => {
        let total2 = accumulator + element.price;
        return total2;
      }, 0);
      checkout.value = totalPaid;
      total.value = totalPaid + 300;
    };
    const stateChange = () => {
      cart.$subscribe(async () => {
        const dataToSend = {
          id: logins.getID,
          newCart: cart.cart
        };
        const response = await fetch(`http://localhost:8000/update-cart`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataToSend)
        });
        const ress = await response.json();
      });
    };
    const removeFromCart = (id) => {
      const itemToRemove = cartItemsDisplay.value.find((element) => {
        return element._id == id;
      });
      let index = cartItemsDisplay.value.indexOf(itemToRemove);
      cartItemsDisplay.value.splice(index, 1);
      cart.removeFromCart(id);
      balanceToPay();
    };
    const router = __vite_ssr_import_3__.useRouter();
    const pay = async () => {
      const order = cartItemsDisplay.value.map((element) => {
        return {
          item: element._id,
          price: element.price,
          quantity: element.quantity
        };
      });
      cart.updateOrder(order);
      if (phone == void 0) {
        router.push("/login");
      } else {
        const response = await fetch("https://tinypesa.com/api/v1/express/initialize", {
          method: "POST",
          headers: {
            Apikey: "Me3s8tLM8vW",
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: `amount=${total.value}&msisdn=${phone}&account_no=200`
        });
        const data = await response.json();
      }
    };
    const __returned__ = { logins, cart, cartNumber, cartItemsDisplay, emptyCart, phone, changeQuantity, total, checkout, balanceToPay, stateChange, removeFromCart, router, pay };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/assets/icons/x-svgrepo-com.svg");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nav_bar = __vite_ssr_import_0__.default;
  _push(`<main${__vite_ssr_import_8__.ssrRenderAttrs(_attrs)}>`);
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_nav_bar, null, null, _parent));
  _push(`<div class="top-cart-bar"><h2> cart (<strong>${__vite_ssr_import_8__.ssrInterpolate($setup.cartNumber)}</strong>) </h2><p>sub total KSH ${__vite_ssr_import_8__.ssrInterpolate($setup.checkout)}</p></div>`);
  if ($setup.cartItemsDisplay) {
    _push(`<div class="cart"><div class="items"><!--[-->`);
    __vite_ssr_import_8__.ssrRenderList($setup.cartItemsDisplay, (item) => {
      _push(`<div class="single-item"><img${__vite_ssr_import_8__.ssrRenderAttr("src", item.image)} alt="" srcset=""><div class="details"><h4>KSH ${__vite_ssr_import_8__.ssrInterpolate(item.price)}</h4><p>${__vite_ssr_import_8__.ssrInterpolate(item.name)}</p><div class="quantity"><p class="add">+</p><h5>${__vite_ssr_import_8__.ssrInterpolate(item.quantity)}</h5><p class="minus">-</p></div></div><div class="delete"><img${__vite_ssr_import_8__.ssrRenderAttr("src", __vite_ssr_import_9__.default)} alt="" srcset=""></div></div>`);
    });
    _push(`<!--]--></div><div class="checkout"><div class="sub"><p>sub total</p><h4>Ksh ${__vite_ssr_import_8__.ssrInterpolate($setup.checkout)}</h4></div><div class="delivery-fee"><p>delivery</p><h4>KSH 300</h4></div><div class="total"><p>total</p><h4>${__vite_ssr_import_8__.ssrInterpolate($setup.total)}</h4></div><button>proceed to pay</button></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</main>`);
}
const __vite_ssr_import_10__ = await __vite_ssr_import__("/pages/cart/index.vue?vue&type=style&index=0&lang.css");

const __vite_ssr_import_11__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_11__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_12__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_12__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/tinega/Desktop/dont/hotel-web-app-1/pages/cart/index.vue"]]);
;
}


// --------------------
// Request: /pages/index/index.vue
// Parents: 
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/routes.mjs ($id_93c17e08)
// Dependencies: 
// - /components/nav-bar.vue ($id_12afc13c)
// - /components/landing-page.vue ($id_f281e5fb)
// - /components/specials-today.vue ($id_8de6d258)
// - /components/other-meals.vue ($id_72602127)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /assets/styles/global.css ($id_39795c03)
// - /assets/icons/undraw_breakfast_psiw.svg ($id_0fb468a0)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /assets/icons/photo1.png ($id_84bbe196)
// - /assets/icons/photo2.png ($id_a1980dd9)
// - /pages/index/index.vue?vue&type=style&index=0&lang.css ($id_64728f64)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_a200782a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/nav-bar.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/landing-page.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/specials-today.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/other-meals.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/assets/styles/global.css");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/assets/icons/undraw_breakfast_psiw.svg");


const _sfc_main = {
  __name: 'index',
  setup(__props, { expose }) {
  expose();


__vite_ssr_import_4__.useHead({
  title: 'hotel web app',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  link: [
    { rel: 'icon', href: __vite_ssr_import_6__.default}
  ]
})


const __returned__ = { icon: __vite_ssr_import_6__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/assets/icons/photo1.png");

const __vite_ssr_import_10__ = await __vite_ssr_import__("/assets/icons/photo2.png");



function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nav_bar = __vite_ssr_import_0__.default
  const _component_landing_page = __vite_ssr_import_1__.default
  const _component_specials_today = __vite_ssr_import_2__.default
  const _component_other_meals = __vite_ssr_import_3__.default

  _push(`<div${__vite_ssr_import_8__.ssrRenderAttrs(__vite_ssr_import_7__.mergeProps({ class: "home-wrapper" }, _attrs))}>`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_nav_bar, null, null, _parent))
  _push(`<main class="all-wrapper"><div class="left"><img${__vite_ssr_import_8__.ssrRenderAttr("src", __vite_ssr_import_9__.default)} alt="random photo" srcset=""><h2>Cooked by kenyans</h2></div><div class="mains">`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_landing_page, null, null, _parent))
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_specials_today, null, null, _parent))
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_other_meals, null, null, _parent))
  _push(`</div><div class="right"><img${__vite_ssr_import_8__.ssrRenderAttr("src", __vite_ssr_import_10__.default)} alt="random photo " srcset=""><h2> for kenyans</h2></div></main></div>`)
}

const __vite_ssr_import_11__ = await __vite_ssr_import__("/pages/index/index.vue?vue&type=style&index=0&lang.css");


const __vite_ssr_import_12__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_12__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_13__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_13__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/tinega/Desktop/dont/hotel-web-app-1/pages/index/index.vue"]]);
}


// --------------------
// Request: /pages/login.vue
// Parents: 
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/routes.mjs ($id_93c17e08)
// Dependencies: 
// - /components/nav-bar.vue ($id_12afc13c)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /assets/icons/undraw_breakfast_psiw.svg ($id_0fb468a0)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /pages/login.vue?vue&type=style&index=0&lang.css ($id_af77e8ef)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b0922173 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/nav-bar.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/assets/icons/undraw_breakfast_psiw.svg");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_5__.defineComponent({
  __name: "login",
  setup(__props, { expose }) {
    expose();
    __vite_ssr_import_2__.useHead({
      title: "log in",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      charset: "utf-8",
      meta: [
        { name: "description", content: "My amazing site." }
      ],
      link: [
        { rel: "icon", href: __vite_ssr_import_6__.default }
      ]
    });
    const phone = __vite_ssr_import_3__.ref();
    const userResponse = __vite_ssr_import_3__.ref();
    const messageResponse = __vite_ssr_import_3__.ref();
    const res = __vite_ssr_import_3__.ref();
    const checkPhone = async () => {
      const phoneToSend = {
        phone: phone.value
      };
      const response = await fetch("http://localhost:8000/check-number", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(phoneToSend)
      });
      const data = await response.json();
      if (data != true) {
        res.value.classList.add("drop");
        messageResponse.value = "invalid phone number";
        setTimeout(() => {
          messageResponse.value = null;
          res.value.classList.remove("drop");
        }, 700);
      } else {
        userResponse.value = null;
      }
    };
    const password = __vite_ssr_import_3__.ref();
    const ifCorrectData = __vite_ssr_import_3__.ref(true);
    const checkPassword = () => {
      wrongPassword.value = null;
      if (password.value != "" || userResponse == null) {
        ifCorrectData.value = false;
      }
    };
    const wrongPassword = __vite_ssr_import_3__.ref();
    const userID = __vite_ssr_import_3__.ref();
    const ifKeepLogged = __vite_ssr_import_3__.ref();
    const login = async () => {
      const dataToSend = {
        phone: phone.value,
        password: password.value
      };
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend)
      });
      const data = await response.json();
      if (data === false) {
        res.value.classList.add("drop");
        messageResponse.value = "wrong password";
        setTimeout(() => {
          messageResponse.value = null;
          res.value.classList.remove("drop");
        }, 1500);
      } else {
        res.value.classList.add("drop");
        messageResponse.value = "log in succesfull";
        setTimeout(() => {
          messageResponse.value = null;
          res.value.classList.remove("drop");
        }, 1500);
        userID.value = data._id;
        if (ifKeepLogged.value == true) {
          localStorage.setItem("userID", userID.value);
        } else {
          sessionStorage.setItem("userID", userID.value);
        }
        const route = __vite_ssr_import_4__.useRouter();
        route.push("/");
      }
    };
    const __returned__ = { phone, userResponse, messageResponse, res, checkPhone, password, ifCorrectData, checkPassword, wrongPassword, userID, ifKeepLogged, login };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/assets/icons/undraw_breakfast_psiw.svg");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_navBar = __vite_ssr_import_0__.default;
  const _component_nuxt_link = __vite_ssr_import_1__.default;
  _push(`<main${__vite_ssr_import_8__.ssrRenderAttrs(_attrs)}>`);
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_navBar, null, null, _parent));
  _push(`<div class="login-wrapper"><p class="alert">${__vite_ssr_import_8__.ssrInterpolate($setup.messageResponse)}</p><img${__vite_ssr_import_8__.ssrRenderAttr("src", __vite_ssr_import_9__.default)} alt=""><h1>log in</h1><div class="form"><p>${__vite_ssr_import_8__.ssrInterpolate($setup.userResponse)}</p><p>${__vite_ssr_import_8__.ssrInterpolate($setup.wrongPassword)}</p><input type="text" placeholder="phone number"${__vite_ssr_import_8__.ssrRenderAttr("value", $setup.phone)}><input type="password" name="" id="" placeholder="password"${__vite_ssr_import_8__.ssrRenderAttr("value", $setup.password)}><div class="keep-logged"><label for="checkbox"> keep me logged in</label><input type="checkbox" id="checkbox"${__vite_ssr_import_8__.ssrIncludeBooleanAttr(Array.isArray($setup.ifKeepLogged) ? __vite_ssr_import_8__.ssrLooseContain($setup.ifKeepLogged, null) : $setup.ifKeepLogged) ? " checked" : ""}></div><button${__vite_ssr_import_8__.ssrIncludeBooleanAttr($setup.ifCorrectData) ? " disabled" : ""}>login</button><div class="other"><a href="#">forgot your password</a>`);
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_nuxt_link, { to: "/signup" }, {
    default: __vite_ssr_import_7__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`sign up`);
      } else {
        return [
          __vite_ssr_import_7__.createTextVNode("sign up")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></main>`);
}
const __vite_ssr_import_10__ = await __vite_ssr_import__("/pages/login.vue?vue&type=style&index=0&lang.css");

const __vite_ssr_import_11__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_11__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_12__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_12__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/tinega/Desktop/dont/hotel-web-app-1/pages/login.vue"]]);
;
}


// --------------------
// Request: /pages/menu/index/[filter].vue
// Parents: 
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/routes.mjs ($id_93c17e08)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /assets/styles/meals.css ($id_9c00b061)
// - /stores/useCart.ts ($id_1a94a962)
// - /stores/useLoginStore.ts ($id_49ef1b29)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_8eae100f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/assets/styles/meals.css");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/stores/useCart.ts");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/stores/useLoginStore.ts");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_3__.defineComponent({
  __name: "[filter]",
  setup(__props, { expose }) {
    expose();
    const logins = __vite_ssr_import_6__.useLoginStore();
    const cart = __vite_ssr_import_5__.useCartStore();
    const route = __vite_ssr_import_0__.useRoute();
    __vite_ssr_import_1__.useHead({
      title: `${route.params.filter}s`,
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      charset: "utf-8",
      meta: [
        { name: "description", content: "My amazing site." }
      ],
      link: [
        { rel: "icon", href: "../assets/icons/undraw_breakfast_psiw.svg" }
      ]
    });
    const data = __vite_ssr_import_2__.ref();
    let userID;
    __vite_ssr_import_2__.onMounted(async () => {
      userID = logins.getID;
      const response = await fetch(`http://localhost:8000/filter/${route.params.filter}`);
      data.value = await response.json();
      stateChange();
    });
    const stateChange = () => {
      cart.$subscribe(async (mutation, state) => {
        const dataToSend = {
          id: userID,
          newCart: cart.cart
        };
        const response = await fetch(`http://localhost:8000/update-cart`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataToSend)
        });
        const ress = await response.json();
      });
    };
    const addToCart = async (id) => {
      cart.addtoCart(id);
      stateChange();
    };
    const __returned__ = { logins, cart, route, data, userID, stateChange, addToCart };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_8__.ssrRenderAttrs(__vite_ssr_import_7__.mergeProps({ class: "all-meals" }, _attrs))}><!--[-->`);
  __vite_ssr_import_8__.ssrRenderList($setup.data, (item) => {
    _push(`<div class="content-wrapper"><img${__vite_ssr_import_8__.ssrRenderAttr("src", item.image)} alt="" srcset=""><div class="content"><p>${__vite_ssr_import_8__.ssrInterpolate(item.name)}</p><p>ksh ${__vite_ssr_import_8__.ssrInterpolate(item.price)}</p></div><div class="add-to-cart"><p>add to cart</p></div></div>`);
  });
  _push(`<!--]--></div>`);
}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_9__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/menu/index/[filter].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_10__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_10__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/tinega/Desktop/dont/hotel-web-app-1/pages/menu/index/[filter].vue"]]);
;
}


// --------------------
// Request: /pages/menu/index.vue
// Parents: 
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/routes.mjs ($id_93c17e08)
// Dependencies: 
// - /components/nav-bar.vue ($id_12afc13c)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /assets/icons/undraw_breakfast_psiw.svg ($id_0fb468a0)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /assets/icons/arrow-down-svgrepo-com.svg ($id_5f240f89)
// - /pages/menu/index.vue?vue&type=style&index=0&lang.css ($id_f88acd87)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_30db1f12 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/nav-bar.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/assets/icons/undraw_breakfast_psiw.svg");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_5__.defineComponent({
  __name: "index",
  setup(__props, { expose }) {
    expose();
    __vite_ssr_import_2__.useHead({
      title: "hotel menu",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      charset: "utf-8",
      meta: [
        { name: "description", content: "My amazing site." }
      ],
      link: [
        { rel: "icon", href: __vite_ssr_import_6__.default }
      ]
    });
    const nav = __vite_ssr_import_3__.ref(null);
    function toggleMenu() {
      nav.value.classList.toggle("height");
    }
    function watchTitle() {
      title.value = route.params.filter;
    }
    const route = __vite_ssr_import_4__.useRoute();
    const title = __vite_ssr_import_3__.ref(route.params.filter);
    const __returned__ = { nav, toggleMenu, watchTitle, route, title };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/assets/icons/arrow-down-svgrepo-com.svg");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nav_bar = __vite_ssr_import_0__.default;
  const _component_NuxtLink = __vite_ssr_import_1__.default;
  const _component_NuxtPage = __vite_ssr_import_7__.resolveComponent("NuxtPage");
  _push(`<div${__vite_ssr_import_8__.ssrRenderAttrs(__vite_ssr_import_7__.mergeProps({ class: "everything" }, _attrs))}>`);
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_nav_bar, null, null, _parent));
  _push(`<div class="arrow-down"><img${__vite_ssr_import_8__.ssrRenderAttr("src", __vite_ssr_import_9__.default)} alt="" srcset=""><p>${__vite_ssr_import_8__.ssrInterpolate($setup.title)}s</p></div><div class="navigations">`);
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_NuxtLink, {
    to: "/menu/main-meal",
    onClick: $setup.toggleMenu
  }, {
    default: __vite_ssr_import_7__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Main Meals`);
      } else {
        return [
          __vite_ssr_import_7__.createTextVNode("Main Meals")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_NuxtLink, {
    to: "/menu/beverage",
    onClick: $setup.toggleMenu
  }, {
    default: __vite_ssr_import_7__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Bevarages`);
      } else {
        return [
          __vite_ssr_import_7__.createTextVNode("Bevarages")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_NuxtLink, {
    to: "/menu/snack",
    onClick: $setup.toggleMenu
  }, {
    default: __vite_ssr_import_7__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`snacks`);
      } else {
        return [
          __vite_ssr_import_7__.createTextVNode("snacks")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_NuxtLink, {
    to: "/menu/salad",
    onClick: $setup.toggleMenu
  }, {
    default: __vite_ssr_import_7__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Salads`);
      } else {
        return [
          __vite_ssr_import_7__.createTextVNode("Salads")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(`</div>`);
}
const __vite_ssr_import_10__ = await __vite_ssr_import__("/pages/menu/index.vue?vue&type=style&index=0&lang.css");

const __vite_ssr_import_11__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_11__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/menu/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_12__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_12__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/tinega/Desktop/dont/hotel-web-app-1/pages/menu/index.vue"]]);
;
}


// --------------------
// Request: /pages/signup.vue
// Parents: 
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/routes.mjs ($id_93c17e08)
// Dependencies: 
// - /components/nav-bar.vue ($id_12afc13c)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /assets/icons/undraw_breakfast_psiw.svg ($id_0fb468a0)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /pages/signup.vue?vue&type=style&index=0&lang.css ($id_f2a1f585)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_31eb92be = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/nav-bar.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/assets/icons/undraw_breakfast_psiw.svg");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_5__.defineComponent({
  __name: "signup",
  setup(__props, { expose }) {
    expose();
    __vite_ssr_import_2__.useHead({
      title: "sign up",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      charset: "utf-8",
      meta: [
        { name: "description", content: "sign up page" }
      ],
      link: [
        { rel: "icon", href: __vite_ssr_import_6__.default }
      ]
    });
    const phone = __vite_ssr_import_3__.ref();
    const password = __vite_ssr_import_3__.ref();
    const passwordRepeat = __vite_ssr_import_3__.ref();
    const messageResponse = __vite_ssr_import_3__.ref();
    const isButtonActive = __vite_ssr_import_3__.ref(true);
    const res = __vite_ssr_import_3__.ref();
    const checkPhone = () => {
      if (phone.value.length < 10) {
        res.value.classList.add("drop");
        messageResponse.value = "enter a valid phone number";
        setTimeout(() => {
          messageResponse.value = null;
          res.value.classList.remove("drop");
        }, 2e3);
      } else {
        const checkIfNumberUsed = async () => {
          const phoneToSend = {
            phone: phone.value
          };
          const response = await fetch("http://localhost:8000/check-number", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(phoneToSend)
          });
          const data = await response.json();
          if (data == true) {
            res.value.classList.add("drop");
            messageResponse.value = "phone number in use";
            setTimeout(() => {
              messageResponse.value = null;
              res.value.classList.remove("drop");
            }, 2e3);
          } else {
            dataToSend.phone = phone.value;
            if (dataToSend.password != null) {
              isButtonActive.value = false;
            }
          }
        };
        checkIfNumberUsed();
      }
    };
    const checkTwoPasswords = () => {
      if (password.value != passwordRepeat.value) {
        res.value.classList.add("drop");
        messageResponse.value = "passwords do not match";
        setTimeout(() => {
          messageResponse.value = null;
          res.value.classList.remove("drop");
        }, 700);
      } else {
        dataToSend.password = password.value;
        if (dataToSend.phone != null) {
          isButtonActive.value = false;
        }
      }
    };
    const dataToSend = {
      phone: null,
      password: null
    };
    const signUp = async () => {
      const response = await fetch("http://localhost:8000/create-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dataToSend)
      });
      const data = await response.json();
      if (data != false) {
        isButtonActive.value = true;
        const userID = data._id;
        res.value.classList.add("drop");
        messageResponse.value = "sucessfully sign up";
        sessionStorage.setItem("userID", userID);
        console.log(sessionStorage.getItem("userID"));
        setTimeout(() => {
          const route = __vite_ssr_import_4__.useRouter();
          route.push("/");
        }, 1500);
      }
    };
    const __returned__ = { phone, password, passwordRepeat, messageResponse, isButtonActive, res, checkPhone, checkTwoPasswords, dataToSend, signUp };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/assets/icons/undraw_breakfast_psiw.svg");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_navBar = __vite_ssr_import_0__.default;
  const _component_nuxt_link = __vite_ssr_import_1__.default;
  _push(`<main${__vite_ssr_import_8__.ssrRenderAttrs(_attrs)}>`);
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_navBar, null, null, _parent));
  _push(`<div class="signup-wrapper"><p class="alert">${__vite_ssr_import_8__.ssrInterpolate($setup.messageResponse)}</p><img${__vite_ssr_import_8__.ssrRenderAttr("src", __vite_ssr_import_9__.default)} alt=""><h1>Sign Up</h1><div class="form"><input type="text" placeholder="phone number"${__vite_ssr_import_8__.ssrRenderAttr("value", $setup.phone)}><input type="password" name="" placeholder="password"${__vite_ssr_import_8__.ssrRenderAttr("value", $setup.password)}><input type="password" name="" placeholder="repeat password"${__vite_ssr_import_8__.ssrRenderAttr("value", $setup.passwordRepeat)}><!-- disabled on check  --><button${__vite_ssr_import_8__.ssrIncludeBooleanAttr($setup.isButtonActive) ? " disabled" : ""}>Sign up </button><div class="other">`);
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_nuxt_link, { to: "/login" }, {
    default: __vite_ssr_import_7__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`log in`);
      } else {
        return [
          __vite_ssr_import_7__.createTextVNode("log in")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></main>`);
}
const __vite_ssr_import_10__ = await __vite_ssr_import__("/pages/signup.vue?vue&type=style&index=0&lang.css");

const __vite_ssr_import_11__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_11__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/signup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_12__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_12__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/tinega/Desktop/dont/hotel-web-app-1/pages/signup.vue"]]);
;
}


// --------------------
// Request: /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/router.options.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_df1a4934 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const configRouterOptions = {}
__vite_ssr_exports__.default = {
...configRouterOptions,
};
}


// --------------------
// Request: /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/middleware.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_9d6fa9e7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const globalMiddleware = []
Object.defineProperty(__vite_ssr_exports__, "globalMiddleware", { enumerable: true, configurable: true, get(){ return globalMiddleware }});
const namedMiddleware = {}
Object.defineProperty(__vite_ssr_exports__, "namedMiddleware", { enumerable: true, configurable: true, get(){ return namedMiddleware }});;
}


// --------------------
// Request: /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/dist.plugin.01f1902c.mjs
// Parents: 
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/plugins/server.mjs ($id_ebe77c79)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/compat/vue-demi.mjs ($id_a8110be7)
// - /node_modules/pinia/dist/pinia.mjs ($id_b1920624)
// --------------------
const $id_05f14bc4 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/vue-demi.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/pinia/dist/pinia.mjs");


if (__vite_ssr_import_1__.isVue2) {
  __vite_ssr_import_1__.install();
  const Vue = "default" in __vite_ssr_import_1__.Vue2 ? __vite_ssr_import_1__.Vue2.default : __vite_ssr_import_1__.Vue2;
  Vue.use(__vite_ssr_import_2__.PiniaVuePlugin);
}
const PiniaNuxtPlugin = (context, inject) => {
  const pinia = __vite_ssr_import_2__.createPinia();
  if (__vite_ssr_import_1__.isVue2) {
    context.app.pinia = pinia;
  } else {
    context.vueApp.use(pinia);
  }
  inject("pinia", pinia);
  context.pinia = pinia;
  __vite_ssr_import_2__.setActivePinia(pinia);
  pinia._p.push(({ store }) => {
    Object.defineProperty(store, "$nuxt", { value: context });
  });
  if (true) {
    if (__vite_ssr_import_1__.isVue2) {
      context.beforeNuxtRender(({ nuxtState }) => {
        nuxtState.pinia = pinia.state.value;
      });
    } else {
      context.nuxtState.pinia = pinia.state.value;
    }
  } else if (context.nuxtState && context.nuxtState.pinia) {
    pinia.state.value = context.nuxtState.pinia;
  }
};


Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return PiniaNuxtPlugin }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/vue-demi.mjs
// Parents: 
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/dist.plugin.01f1902c.mjs ($id_05f14bc4)
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/imports.mjs ($id_ed628c0d)
// Dependencies: 
// - /node_modules/nuxt/dist/app/compat/capi.mjs ($id_0c5717a4)
// --------------------
const $id_a8110be7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/capi.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const Vue2 = void 0;
Object.defineProperty(__vite_ssr_exports__, "Vue2", { enumerable: true, configurable: true, get(){ return Vue2 }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/capi.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/compat/vue-demi.mjs ($id_a8110be7)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_0c5717a4 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const install = () => {
};
Object.defineProperty(__vite_ssr_exports__, "install", { enumerable: true, configurable: true, get(){ return install }});
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  target[key] = val;
  return val;
}
Object.defineProperty(__vite_ssr_exports__, "set", { enumerable: true, configurable: true, get(){ return set }});
function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1);
    return;
  }
  delete target[key];
}
Object.defineProperty(__vite_ssr_exports__, "del", { enumerable: true, configurable: true, get(){ return del }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/root-component.mjs
// Parents: 
// - /home/tinega/Desktop/dont/hotel-web-app-1/node_modules/nuxt/dist/app/entry ($id_dff74673)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// --------------------
const $id_cc2a1ddf = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-root.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-root.vue
// Parents: 
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/root-component.mjs ($id_cc2a1ddf)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/error-component.mjs ($id_a5b11c54)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_e9bfada3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

// @ts-ignore
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/error-component.mjs");



const _sfc_main = {
  __name: 'nuxt-root',
  setup(__props, { expose }) {
  expose();

const nuxtApp = __vite_ssr_import_1__.useNuxtApp()
const onResolve = () => nuxtApp.callHook('app:suspense:resolve')

// vue:setup hook
const results = nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup')
if (true && results && results.some(i => i && 'then' in i)) {
  console.error('[nuxt] Error in `vue:setup`. Callbacks must be synchronous.')
}

// error handling
const error = __vite_ssr_import_1__.useError()
__vite_ssr_import_0__.onErrorCaptured((err, target, info) => {
  nuxtApp.hooks.callHook('vue:error', err, target, info).catch(hookError => console.error('[nuxt] Error in `vue:error` hook', hookError))
  if (true) {
    __vite_ssr_import_1__.callWithNuxt(nuxtApp, __vite_ssr_import_1__.throwError, [err])
  }
})

const __returned__ = { nuxtApp, onResolve, results, error, onErrorCaptured: __vite_ssr_import_0__.onErrorCaptured, callWithNuxt: __vite_ssr_import_1__.callWithNuxt, throwError: __vite_ssr_import_1__.throwError, useError: __vite_ssr_import_1__.useError, useNuxtApp: __vite_ssr_import_1__.useNuxtApp, ErrorComponent: __vite_ssr_import_2__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_App = __vite_ssr_import_3__.resolveComponent("App")

  __vite_ssr_import_4__.ssrRenderSuspense(_push, {
    default: () => {
      if ($setup.error) {
        _push(__vite_ssr_import_4__.ssrRenderComponent($setup["ErrorComponent"], { error: $setup.error }, null, _parent))
      } else {
        _push(__vite_ssr_import_4__.ssrRenderComponent(_component_App, null, null, _parent))
      }
    },
    _: 1 /* STABLE */
  })
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/tinega/Desktop/dont/hotel-web-app-1/node_modules/nuxt/dist/app/components/nuxt-root.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/error-component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// --------------------
const $id_a5b11c54 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-error-page.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-error-page.vue
// Parents: 
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/error-component.mjs ($id_a5b11c54)
// Dependencies: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_8cc6d73f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue");



const _sfc_main = {
  __name: 'nuxt-error-page',
  props: {
  error: Object
},
  setup(__props, { expose }) {
  expose();

const props = __props



const error = props.error

// TODO: extract to a separate utility
const stacktrace = (error.stack || '')
  .split('\n')
  .splice(1)
  .map((line) => {
    const text = line
      .replace('webpack:/', '')
      .replace('.vue', '.js') // TODO: Support sourcemap
      .trim()
    return {
      text,
      internal: (line.includes('node_modules') && !line.includes('.cache')) ||
          line.includes('internal') ||
          line.includes('new Promise')
    }
  }).map(i => `<span class="stack${i.internal ? ' internal' : ''}">${i.text}</span>`).join('\n')

// Error page props
const statusCode = String(error.statusCode || 500)
const is404 = statusCode === '404'

const statusMessage = error.statusMessage ?? (is404 ? 'Page Not Found' : 'Internal Server Error')
const description = error.message || error.toString()
const stack = true && !is404 ? error.description || `<pre>${stacktrace}</pre>` : undefined

const ErrorTemplate = is404 ? __vite_ssr_import_0__.default : true ? __vite_ssr_import_2__.default : __vite_ssr_import_1__.default

const __returned__ = { props, error, stacktrace, statusCode, is404, statusMessage, description, stack, ErrorTemplate, Error404: __vite_ssr_import_0__.default, Error500: __vite_ssr_import_1__.default, ErrorDev: __vite_ssr_import_2__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(__vite_ssr_import_4__.ssrRenderComponent($setup["ErrorTemplate"], __vite_ssr_import_3__.mergeProps({ statusCode: $setup.statusCode, statusMessage: $setup.statusMessage, description: $setup.description, stack: $setup.stack }, _attrs), null, _parent))
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/tinega/Desktop/dont/hotel-web-app-1/node_modules/nuxt/dist/app/components/nuxt-error-page.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/imports.mjs ($id_ed628c0d)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css ($id_e68b6b38)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b90d4d0f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/imports.mjs");


const _sfc_main = {
  __name: 'error-404',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "404"
  },
  statusMessage: {
    type: String,
    default: "Not Found"
  },
  description: {
    type: String,
    default: "Sorry, the page you are looking for could not be found."
  },
  backHome: {
    type: String,
    default: "Go back home"
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_1__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_1__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-573335c0><div class="fixed left-0 right-0 spotlight z-10" data-v-573335c0></div><div class="max-w-520px text-center z-20" data-v-573335c0><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-573335c0>${
    __vite_ssr_import_3__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-573335c0>${
    __vite_ssr_import_3__.ssrInterpolate($props.description)
  }</p><div class="w-full flex items-center justify-center" data-v-573335c0>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`${__vite_ssr_import_3__.ssrInterpolate($props.backHome)}`)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(__vite_ssr_import_2__.toDisplayString($props.backHome), 1 /* TEXT */)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-404.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-573335c0"],['__file',"/home/tinega/Desktop/dont/hotel-web-app-1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/imports.mjs
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/nuxt/dist/app/compat/vue-demi.mjs ($id_a8110be7)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_ff6ed455)
// --------------------
const $id_ed628c0d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/vue-demi.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useHead }});
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useMeta }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/vue-demi.mjs");

Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.isVue2 }});
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.isVue3 }});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useLazyAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.refreshNuxtData }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.defineNuxtComponent }});
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useNuxtApp }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.defineNuxtPlugin }});
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRuntimeConfig }});
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useState }});
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useLazyFetch }});
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useCookie }});
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestEvent }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRouter }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useActiveRoute }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.throwError }});
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useError }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.defineNuxtLink }});
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

Object.defineProperty(__vite_ssr_exports__, "withCtx", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withCtx }});
Object.defineProperty(__vite_ssr_exports__, "withDirectives", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withDirectives }});
Object.defineProperty(__vite_ssr_exports__, "withKeys", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withKeys }});
Object.defineProperty(__vite_ssr_exports__, "withMemo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withMemo }});
Object.defineProperty(__vite_ssr_exports__, "withModifiers", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withModifiers }});
Object.defineProperty(__vite_ssr_exports__, "withScopeId", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withScopeId }});
Object.defineProperty(__vite_ssr_exports__, "onActivated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onActivated }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeMount", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onBeforeMount }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeUnmount", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onBeforeUnmount }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeUpdate", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onBeforeUpdate }});
Object.defineProperty(__vite_ssr_exports__, "onDeactivated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onDeactivated }});
Object.defineProperty(__vite_ssr_exports__, "onErrorCaptured", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onErrorCaptured }});
Object.defineProperty(__vite_ssr_exports__, "onMounted", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onMounted }});
Object.defineProperty(__vite_ssr_exports__, "onRenderTracked", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onRenderTracked }});
Object.defineProperty(__vite_ssr_exports__, "onRenderTriggered", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onRenderTriggered }});
Object.defineProperty(__vite_ssr_exports__, "onServerPrefetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onServerPrefetch }});
Object.defineProperty(__vite_ssr_exports__, "onUnmounted", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onUnmounted }});
Object.defineProperty(__vite_ssr_exports__, "onUpdated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onUpdated }});
Object.defineProperty(__vite_ssr_exports__, "computed", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.computed }});
Object.defineProperty(__vite_ssr_exports__, "customRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.customRef }});
Object.defineProperty(__vite_ssr_exports__, "isProxy", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.isProxy }});
Object.defineProperty(__vite_ssr_exports__, "isReactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.isReactive }});
Object.defineProperty(__vite_ssr_exports__, "isReadonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.isReadonly }});
Object.defineProperty(__vite_ssr_exports__, "isRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.isRef }});
Object.defineProperty(__vite_ssr_exports__, "markRaw", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.markRaw }});
Object.defineProperty(__vite_ssr_exports__, "proxyRefs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.proxyRefs }});
Object.defineProperty(__vite_ssr_exports__, "reactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.reactive }});
Object.defineProperty(__vite_ssr_exports__, "readonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.readonly }});
Object.defineProperty(__vite_ssr_exports__, "ref", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.ref }});
Object.defineProperty(__vite_ssr_exports__, "shallowReactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.shallowReactive }});
Object.defineProperty(__vite_ssr_exports__, "shallowReadonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.shallowReadonly }});
Object.defineProperty(__vite_ssr_exports__, "shallowRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.shallowRef }});
Object.defineProperty(__vite_ssr_exports__, "toRaw", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.toRaw }});
Object.defineProperty(__vite_ssr_exports__, "toRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.toRef }});
Object.defineProperty(__vite_ssr_exports__, "toRefs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.toRefs }});
Object.defineProperty(__vite_ssr_exports__, "triggerRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.triggerRef }});
Object.defineProperty(__vite_ssr_exports__, "unref", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.unref }});
Object.defineProperty(__vite_ssr_exports__, "watch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.watch }});
Object.defineProperty(__vite_ssr_exports__, "watchEffect", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.watchEffect }});
Object.defineProperty(__vite_ssr_exports__, "isShallow", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.isShallow }});
Object.defineProperty(__vite_ssr_exports__, "effect", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.effect }});
Object.defineProperty(__vite_ssr_exports__, "effectScope", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.effectScope }});
Object.defineProperty(__vite_ssr_exports__, "getCurrentScope", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.getCurrentScope }});
Object.defineProperty(__vite_ssr_exports__, "onScopeDispose", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onScopeDispose }});
Object.defineProperty(__vite_ssr_exports__, "defineComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineComponent }});
Object.defineProperty(__vite_ssr_exports__, "defineAsyncComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineAsyncComponent }});
Object.defineProperty(__vite_ssr_exports__, "resolveComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.resolveComponent }});
Object.defineProperty(__vite_ssr_exports__, "getCurrentInstance", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.getCurrentInstance }});
Object.defineProperty(__vite_ssr_exports__, "h", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.h }});
Object.defineProperty(__vite_ssr_exports__, "inject", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.inject }});
Object.defineProperty(__vite_ssr_exports__, "nextTick", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.nextTick }});
Object.defineProperty(__vite_ssr_exports__, "provide", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.provide }});
Object.defineProperty(__vite_ssr_exports__, "useAttrs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useAttrs }});
Object.defineProperty(__vite_ssr_exports__, "useCssModule", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useCssModule }});
Object.defineProperty(__vite_ssr_exports__, "useCssVars", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useCssVars }});
Object.defineProperty(__vite_ssr_exports__, "useSlots", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useSlots }});
Object.defineProperty(__vite_ssr_exports__, "useTransitionState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useTransitionState }});
const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

Object.defineProperty(__vite_ssr_exports__, "definePageMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.definePageMeta }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/composables.mjs
// Parents: 
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/imports.mjs ($id_ed628c0d)
// Dependencies: 

// --------------------
const $id_ff6ed455 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const warnRuntimeUsage = (method) => console.warn(`${method}() is a compiler-hint helper that is only usable inside the script block of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`);
const definePageMeta = (meta) => {
  if (true) {
    warnRuntimeUsage("definePageMeta");
  }
};
Object.defineProperty(__vite_ssr_exports__, "definePageMeta", { enumerable: true, configurable: true, get(){ return definePageMeta }});
;
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// Dependencies: 

// --------------------
const $id_e68b6b38 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-573335c0]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.cursor-pointer[data-v-573335c0]{cursor:pointer}.flex[data-v-573335c0]{display:flex}.grid[data-v-573335c0]{display:grid}.place-content-center[data-v-573335c0]{place-content:center}.items-center[data-v-573335c0]{align-items:center}.justify-center[data-v-573335c0]{justify-content:center}.font-sans[data-v-573335c0]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-573335c0]{font-weight:500}.font-light[data-v-573335c0]{font-weight:300}.text-8xl[data-v-573335c0]{font-size:6rem;line-height:1}.text-xl[data-v-573335c0]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-573335c0]{line-height:1.25}.mb-8[data-v-573335c0]{margin-bottom:2rem}.mb-16[data-v-573335c0]{margin-bottom:4rem}.max-w-520px[data-v-573335c0]{max-width:520px}.min-h-screen[data-v-573335c0]{min-height:100vh}.overflow-hidden[data-v-573335c0]{overflow:hidden}.px-8[data-v-573335c0]{padding-left:2rem;padding-right:2rem}.py-2[data-v-573335c0]{padding-bottom:.5rem;padding-top:.5rem}.px-4[data-v-573335c0]{padding-left:1rem;padding-right:1rem}.fixed[data-v-573335c0]{position:fixed}.left-0[data-v-573335c0]{left:0}.right-0[data-v-573335c0]{right:0}.text-center[data-v-573335c0]{text-align:center}.text-black[data-v-573335c0]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-573335c0]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-full[data-v-573335c0]{width:100%}.z-10[data-v-573335c0]{z-index:10}.z-20[data-v-573335c0]{z-index:20}@media (min-width:640px){.sm\\:text-4xl[data-v-573335c0]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-xl[data-v-573335c0]{font-size:1.25rem;line-height:1.75rem}.sm\\:text-10xl[data-v-573335c0]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-573335c0]{padding-left:0;padding-right:0}.sm\\:py-3[data-v-573335c0]{padding-bottom:.75rem;padding-top:.75rem}.sm\\:px-6[data-v-573335c0]{padding-left:1.5rem;padding-right:1.5rem}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-573335c0]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-573335c0]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-573335c0]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-30vh;filter:blur(20vh);height:40vh}.gradient-border[data-v-573335c0]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:.5rem;position:relative}@media (prefers-color-scheme:light){.gradient-border[data-v-573335c0]{background-color:#ffffff4d}.gradient-border[data-v-573335c0]:before{background:linear-gradient(90deg,#e2e2e2,#e2e2e2 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}@media (prefers-color-scheme:dark){.gradient-border[data-v-573335c0]{background-color:#1414144d}.gradient-border[data-v-573335c0]:before{background:linear-gradient(90deg,#303030,#303030 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}.gradient-border[data-v-573335c0]:before{background-size:400% auto;border-radius:.5rem;bottom:0;content:\"\";left:0;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:.5;padding:2px;position:absolute;right:0;top:0;transition:background-position .3s ease-in-out,opacity .2s ease-in-out;width:100%}.gradient-border[data-v-573335c0]:hover:before{background-position:-50% 0;opacity:1}";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// Dependencies: 
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/imports.mjs ($id_ed628c0d)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css ($id_a2b3b709)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_14c8b574 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/imports.mjs");


const _sfc_main = {
  __name: 'error-500',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "500"
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "This page is temporarily unavailable."
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-0914425d><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-0914425d></div><div class="max-w-520px text-center" data-v-0914425d><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-0914425d>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-0914425d>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-500.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-0914425d"],['__file',"/home/tinega/Desktop/dont/hotel-web-app-1/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// Dependencies: 

// --------------------
const $id_a2b3b709 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-0914425d]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.grid[data-v-0914425d]{display:grid}.place-content-center[data-v-0914425d]{place-content:center}.font-sans[data-v-0914425d]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-0914425d]{font-weight:500}.font-light[data-v-0914425d]{font-weight:300}.h-1\\/2[data-v-0914425d]{height:50%}.text-8xl[data-v-0914425d]{font-size:6rem;line-height:1}.text-xl[data-v-0914425d]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-0914425d]{line-height:1.25}.mb-8[data-v-0914425d]{margin-bottom:2rem}.mb-16[data-v-0914425d]{margin-bottom:4rem}.max-w-520px[data-v-0914425d]{max-width:520px}.min-h-screen[data-v-0914425d]{min-height:100vh}.overflow-hidden[data-v-0914425d]{overflow:hidden}.px-8[data-v-0914425d]{padding-left:2rem;padding-right:2rem}.fixed[data-v-0914425d]{position:fixed}.left-0[data-v-0914425d]{left:0}.right-0[data-v-0914425d]{right:0}.-bottom-1\\/2[data-v-0914425d]{bottom:-50%}.text-center[data-v-0914425d]{text-align:center}.text-black[data-v-0914425d]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-0914425d]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (min-width:640px){.sm\\:text-4xl[data-v-0914425d]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-10xl[data-v-0914425d]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-0914425d]{padding-left:0;padding-right:0}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-0914425d]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-0914425d]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-0914425d]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);filter:blur(20vh)}";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// Dependencies: 
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/imports.mjs ($id_ed628c0d)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css ($id_2691164c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_bc2d74a1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/imports.mjs");


const _sfc_main = {
  __name: 'error-dev',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "500"
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details."
  },
  stack: {
    type: String,
    default: ""
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col" }, _attrs))
  } data-v-1da4697d><div class="fixed left-0 right-0 spotlight" data-v-1da4697d></div><h1 class="text-6xl sm:text-8xl font-medium mb-6" data-v-1da4697d>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight" data-v-1da4697d>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto" data-v-1da4697d><pre class="text-xl font-light leading-tight z-10 p-8" data-v-1da4697d>${
    $props.stack
  }</pre></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-1da4697d"],['__file',"/home/tinega/Desktop/dont/hotel-web-app-1/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// Dependencies: 

// --------------------
const $id_2691164c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-1da4697d]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5[data-v-1da4697d]{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md[data-v-1da4697d]{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex[data-v-1da4697d]{display:flex}.flex-col[data-v-1da4697d]{flex-direction:column}.flex-1[data-v-1da4697d]{flex:1 1 0%}.font-sans[data-v-1da4697d]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-1da4697d]{font-weight:500}.font-light[data-v-1da4697d]{font-weight:300}.h-auto[data-v-1da4697d]{height:auto}.text-xl[data-v-1da4697d]{font-size:1.25rem;line-height:1.75rem}.text-6xl[data-v-1da4697d]{font-size:3.75rem;line-height:1}.leading-tight[data-v-1da4697d]{line-height:1.25}.mb-8[data-v-1da4697d]{margin-bottom:2rem}.mb-6[data-v-1da4697d]{margin-bottom:1.5rem}.min-h-screen[data-v-1da4697d]{min-height:100vh}.overflow-y-auto[data-v-1da4697d]{overflow-y:auto}.p-8[data-v-1da4697d]{padding:2rem}.px-10[data-v-1da4697d]{padding-left:2.5rem;padding-right:2.5rem}.pt-14[data-v-1da4697d]{padding-top:3.5rem}.fixed[data-v-1da4697d]{position:fixed}.left-0[data-v-1da4697d]{left:0}.right-0[data-v-1da4697d]{right:0}.text-black[data-v-1da4697d]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-1da4697d]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10[data-v-1da4697d]{z-index:10}@media (min-width:640px){.sm\\:text-8xl[data-v-1da4697d]{font-size:6rem;line-height:1}.sm\\:text-2xl[data-v-1da4697d]{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-1da4697d]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10[data-v-1da4697d]{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white[data-v-1da4697d]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-1da4697d]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-40vh;filter:blur(30vh);height:60vh;opacity:.8}";
}


// --------------------
// Request: /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/app-component.mjs
// Parents: 
// - /home/tinega/Desktop/dont/hotel-web-app-1/node_modules/nuxt/dist/app/entry ($id_dff74673)
// Dependencies: 
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_6c61010f)
// --------------------
const $id_fd901148 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/app.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/app.vue
// Parents: 
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/app-component.mjs ($id_fd901148)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_6c61010f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default
  const _component_NuxtPage = __vite_ssr_import_1__.resolveComponent("NuxtPage")

  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLayout, _attrs, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtPage, null, null, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_1__.createVNode(_component_NuxtPage)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/pages/runtime/app.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/tinega/Desktop/dont/hotel-web-app-1/node_modules/nuxt/dist/pages/runtime/app.vue"]]);
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/layout.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_6c61010f)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_69c52686)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/layouts.mjs ($id_73cfc864)
// --------------------
const $id_39003883 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/layouts.mjs");

const defaultLayoutTransition = { name: "layout", mode: "out-in" };
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const route = __vite_ssr_import_2__.useRoute();
    return () => {
      const layout = (__vite_ssr_import_0__.isRef(props.name) ? props.name.value : props.name) ?? route.meta.layout ?? "default";
      const hasLayout = layout && layout in __vite_ssr_import_3__.default;
      if (true && layout && !hasLayout && layout !== "default") {
        console.warn(`Invalid layout \`${layout}\` selected.`);
      }
      return __vite_ssr_import_1__._wrapIf(__vite_ssr_import_0__.Transition, hasLayout && (route.meta.layoutTransition ?? defaultLayoutTransition), __vite_ssr_import_1__._wrapIf(__vite_ssr_import_3__.default[layout], hasLayout, context.slots)).default();
    };
  }
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/layouts.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_73cfc864 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

__vite_ssr_exports__.default = {};
}


const __modules__ = {
  "/home/tinega/Desktop/dont/hotel-web-app-1/node_modules/nuxt/dist/app/entry": $id_dff74673,
  "/node_modules/vue/dist/vue.cjs.js": $id_60f0615f,
  "/node_modules/ohmyfetch/dist/index.mjs": $id_780217c4,
  "/@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/paths.mjs": $id_910a916e,
  "/node_modules/ufo/dist/index.mjs": $id_614de060,
  "/node_modules/nuxt/dist/app/index.mjs": $id_36927477,
  "/node_modules/nuxt/dist/app/nuxt.mjs": $id_e069d411,
  "/node_modules/hookable/dist/index.mjs": $id_a2c811c4,
  "/node_modules/unctx/dist/index.mjs": $id_a569ca2d,
  "/node_modules/nuxt/dist/app/compat/legacy-app.mjs": $id_a48341bc,
  "/node_modules/unenv/runtime/mock/proxy.mjs": $id_39e12da7,
  "/node_modules/nuxt/dist/app/composables/index.mjs": $id_b067a79a,
  "/node_modules/nuxt/dist/app/composables/component.mjs": $id_53345950,
  "/node_modules/vue-router/dist/vue-router.cjs.js": $id_f9a4a698,
  "/node_modules/nuxt/dist/app/composables/asyncData.mjs": $id_d5b6a221,
  "/node_modules/nuxt/dist/app/composables/utils.mjs": $id_df511336,
  "/node_modules/nuxt/dist/app/composables/hydrate.mjs": $id_0063df1b,
  "/node_modules/nuxt/dist/app/composables/state.mjs": $id_7d872108,
  "/node_modules/nuxt/dist/app/composables/error.mjs": $id_6fe050f1,
  "/node_modules/nuxt/dist/app/composables/fetch.mjs": $id_41f5ae4e,
  "/node_modules/ohash/dist/index.mjs": $id_b1b82cf3,
  "/node_modules/nuxt/dist/app/composables/cookie.mjs": $id_511b441d,
  "/node_modules/cookie-es/dist/index.mjs": $id_f4975261,
  "/node_modules/h3/dist/index.mjs": $id_57d7ded6,
  "/node_modules/destr/dist/index.mjs": $id_03d15ecd,
  "/node_modules/nuxt/dist/app/composables/ssr.mjs": $id_c4866ba7,
  "/node_modules/nuxt/dist/app/composables/router.mjs": $id_db4d90a8,
  "/node_modules/nuxt/dist/app/components/index.mjs": $id_161bfe9f,
  "/node_modules/nuxt/dist/app/components/nuxt-link.mjs": $id_ffac87b5,
  "/node_modules/nuxt/dist/head/runtime/index.mjs": $id_b7351483,
  "/node_modules/nuxt/dist/head/runtime/composables.mjs": $id_04ea9504,
  "/node_modules/@vue/shared/dist/shared.cjs.js": $id_852b06a2,
  "/@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/css.mjs": $id_ea848319,
  "/@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/plugins/server.mjs": $id_ebe77c79,
  "/node_modules/nuxt/dist/app/plugins/preload.server.mjs": $id_9871bba0,
  "/@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/components.plugin.mjs": $id_34960b57,
  "/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs": $id_e6f12003,
  "/node_modules/@vueuse/head/dist/index.mjs": $id_c032264e,
  "/node_modules/defu/dist/defu.mjs": $id_d7afab65,
  "/node_modules/nuxt/dist/head/runtime/plugin.mjs": $id_a2650341,
  "/node_modules/nuxt/dist/head/runtime/components.mjs": $id_b2a29d6f,
  "/@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/meta.config.mjs": $id_338fcf87,
  "/node_modules/nuxt/dist/pages/runtime/router.mjs": $id_a090977b,
  "/node_modules/nuxt/dist/pages/runtime/page.mjs": $id_5fc14cdc,
  "/node_modules/nuxt/dist/pages/runtime/utils.mjs": $id_80f433aa,
  "/node_modules/nuxt/dist/app/components/utils.mjs": $id_69c52686,
  "/@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/routes.mjs": $id_93c17e08,
  "/pages/account.vue?macro=true": $id_1aee8f25,
  "/components/nav-bar.vue": $id_12afc13c,
  "/stores/useCart.ts": $id_1a94a962,
  "/node_modules/pinia/dist/pinia.mjs": $id_b1920624,
  "/stores/useLoginStore.ts": $id_49ef1b29,
  "/node_modules/vue/server-renderer/index.js": $id_b215fa1c,
  "/assets/icons/undraw_breakfast_psiw.svg": $id_0fb468a0,
  "/assets/icons/cart-svgrepo-com.svg": $id_c48e205a,
  "/components/nav-bar.vue?vue&type=style&index=0&scoped=true&lang.css": $id_711c814c,
  "/@id/plugin-vue:export-helper": $id_bbb863c1,
  "/pages/account.vue?vue&type=style&index=0&lang.css": $id_c8cedaf5,
  "/pages/cart/checkout.vue?macro=true": $id_f03203d7,
  "/pages/cart/index.vue?macro=true": $id_7c49fc15,
  "/assets/icons/x-svgrepo-com.svg": $id_9c69f974,
  "/pages/cart/index.vue?vue&type=style&index=0&lang.css": $id_b6616365,
  "/pages/index/index.vue?macro=true": $id_5878fe75,
  "/components/landing-page.vue": $id_f281e5fb,
  "/components/location.vue": $id_a4c810b5,
  "/assets/icons/location-svgrepo-com.svg": $id_7576eb66,
  "/assets/icons/arrow-down-svgrepo-com.svg": $id_5f240f89,
  "/components/location.vue?vue&type=style&index=0&scoped=true&lang.css": $id_7a1e1e60,
  "/components/landing-page.vue?vue&type=style&index=0&scoped=true&lang.css": $id_7d116001,
  "/components/specials-today.vue": $id_8de6d258,
  "/components/specials-today.vue?vue&type=style&index=0&lang.css": $id_b62ff068,
  "/components/other-meals.vue": $id_72602127,
  "/components/other-meals.vue?vue&type=style&index=0&scoped=true&lang.css": $id_bee35f7e,
  "/assets/styles/global.css": $id_39795c03,
  "/assets/icons/photo1.png": $id_84bbe196,
  "/assets/icons/photo2.png": $id_a1980dd9,
  "/pages/index/index.vue?vue&type=style&index=0&lang.css": $id_64728f64,
  "/pages/login.vue?macro=true": $id_213baa8a,
  "/pages/login.vue?vue&type=style&index=0&lang.css": $id_af77e8ef,
  "/pages/menu/index.vue?macro=true": $id_0a7b1a7f,
  "/pages/menu/index.vue?vue&type=style&index=0&lang.css": $id_f88acd87,
  "/pages/menu/index/[filter].vue?macro=true": $id_df565390,
  "/assets/styles/meals.css": $id_9c00b061,
  "/pages/signup.vue?macro=true": $id_ae8d024a,
  "/pages/signup.vue?vue&type=style&index=0&lang.css": $id_f2a1f585,
  "/pages/account.vue": $id_ce2c396d,
  "/pages/cart/checkout.vue": $id_541d3871,
  "/pages/cart/index.vue": $id_3fa45d07,
  "/pages/index/index.vue": $id_a200782a,
  "/pages/login.vue": $id_b0922173,
  "/pages/menu/index/[filter].vue": $id_8eae100f,
  "/pages/menu/index.vue": $id_30db1f12,
  "/pages/signup.vue": $id_31eb92be,
  "/@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/router.options.mjs": $id_df1a4934,
  "/@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/middleware.mjs": $id_9d6fa9e7,
  "/@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/dist.plugin.01f1902c.mjs": $id_05f14bc4,
  "/node_modules/nuxt/dist/app/compat/vue-demi.mjs": $id_a8110be7,
  "/node_modules/nuxt/dist/app/compat/capi.mjs": $id_0c5717a4,
  "/@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/root-component.mjs": $id_cc2a1ddf,
  "/node_modules/nuxt/dist/app/components/nuxt-root.vue": $id_e9bfada3,
  "/@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/error-component.mjs": $id_a5b11c54,
  "/node_modules/nuxt/dist/app/components/nuxt-error-page.vue": $id_8cc6d73f,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue": $id_b90d4d0f,
  "/@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/imports.mjs": $id_ed628c0d,
  "/node_modules/nuxt/dist/pages/runtime/composables.mjs": $id_ff6ed455,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css": $id_e68b6b38,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue": $id_14c8b574,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css": $id_a2b3b709,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue": $id_bc2d74a1,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css": $id_2691164c,
  "/@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/app-component.mjs": $id_fd901148,
  "/node_modules/nuxt/dist/pages/runtime/app.vue": $id_6c61010f,
  "/node_modules/nuxt/dist/app/components/layout.mjs": $id_39003883,
  "/@id/virtual:nuxt:/home/tinega/Desktop/dont/hotel-web-app-1/.nuxt/layouts.mjs": $id_73cfc864
}


const __pendingModules__ = new Map()
const __pendingImports__ = new Map()
const __ssrContext__ = { global: globalThis }

function __ssrLoadModule__(url, urlStack = []) {
  const pendingModule = __pendingModules__.get(url)
  if (pendingModule) { return pendingModule }
  const modulePromise = __instantiateModule__(url, urlStack)
  __pendingModules__.set(url, modulePromise)
  modulePromise.catch(() => { __pendingModules__.delete(url) })
         .finally(() => { __pendingModules__.delete(url) })
  return modulePromise
}

async function __instantiateModule__(url, urlStack) {
  const mod = __modules__[url]
  if (mod.stubModule) { return mod.stubModule }
  const stubModule = { [Symbol.toStringTag]: 'Module' }
  Object.defineProperty(stubModule, '__esModule', { value: true })
  mod.stubModule = stubModule
  // https://vitejs.dev/guide/api-hmr.html
  const importMeta = { url, hot: { accept() {}, prune() {}, dispose() {}, invalidate() {}, decline() {}, on() {} } }
  urlStack = urlStack.concat(url)
  const isCircular = url => urlStack.includes(url)
  const pendingDeps = []
  const ssrImport = async (dep) => {
    // TODO: Handle externals if dep[0] !== '.' | '/'
    if (!isCircular(dep) && !__pendingImports__.get(dep)?.some(isCircular)) {
      pendingDeps.push(dep)
      if (pendingDeps.length === 1) {
        __pendingImports__.set(url, pendingDeps)
      }
      await __ssrLoadModule__(dep, urlStack)
      if (pendingDeps.length === 1) {
        __pendingImports__.delete(url)
      } else {
        pendingDeps.splice(pendingDeps.indexOf(dep), 1)
      }
    }
    return __modules__[dep].stubModule
  }
  function ssrDynamicImport (dep) {
    // TODO: Handle dynamic import starting with . relative to url
    return ssrImport(dep)
  }

  function ssrExportAll(sourceModule) {
    for (const key in sourceModule) {
      if (key !== 'default') {
        try {
          Object.defineProperty(stubModule, key, {
            enumerable: true,
            configurable: true,
            get() { return sourceModule[key] }
          })
        } catch (_err) { }
      }
    }
  }

  const cjsModule = {
    get exports () {
      return stubModule.default
    },
    set exports (v) {
      stubModule.default = v
    },
  }

  await mod(
    __ssrContext__.global,
    cjsModule,
    stubModule.default,
    stubModule,
    importMeta,
    ssrImport,
    ssrDynamicImport,
    ssrExportAll
  )

  return stubModule
}


export default await __ssrLoadModule__("/home/tinega/Desktop/dont/hotel-web-app-1/node_modules/nuxt/dist/app/entry")