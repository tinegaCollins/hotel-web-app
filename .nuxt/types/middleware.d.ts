import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/home/tinega/Desktop/dont/hotel-web-app-1/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}