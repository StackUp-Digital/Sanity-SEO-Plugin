import {definePlugin} from 'sanity'

import types from './schema'

interface SeoPluginConfig {
  /* nothing here yet */
}

/**
 * Usage in `sanity.config.ts` (or .js)
 *
 * ```ts
 * import {defineConfig} from 'sanity'
 * import {myPlugin} from 'sanity-plugin-stackup-seo'
 *
 * export default defineConfig({
 *   // ...
 *   plugins: [myPlugin()],
 * })
 * ```
 */
export const seo = definePlugin<SeoPluginConfig | void>((config = {}) => {
  // eslint-disable-next-line no-console
  console.log('hello from sanity-plugin-stackup-seo')
  return {
    name: 'sanity-plugin-stackup-seo',
    schema: {
      types,
    },
  }
})
