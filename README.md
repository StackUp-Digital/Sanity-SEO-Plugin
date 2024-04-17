# sanity-plugin-stackup-seo

> This is a **Sanity Studio v3** plugin.

## Installation

```sh
# npm
npm install sanity-plugin-stackup-seo

# yarn
yarn add sanity-plugin-stackup-seo

# pnpm
pnpm i sanity-plugin-stackup-seo
```

## Usage

Add it as a plugin in `sanity.config.ts` (or .js):

```ts
import {defineConfig} from 'sanity'
import {seo} from "sanity-plugin-stackup-seo";

export default defineConfig({
  //...
  plugins: [seo()],
})
```

Now, in your document schema, add the `suSeo` type as a field. For example:
```ts
export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    // ...myAmazingFields,
    {
      name: 'seo',
      title: 'SEO & Social',
      type: 'suSeo',
    },
  ]
}
```
This can now be queried on your front-end. The SEO object should be returned in the following format:

```ts
    {
      seoImage: [Object],
      seoDescription: String,
      _type: 'suSeo',
      seoKeywords: String[],
      seoTitle: String
    }
```

## Gotchas

There is a recognised issue around running the Studio with `v5.x` of `styled-components`. If are getting errors in the studio, please ensure your Sanity packages
are up to date and that styled-components is on a version > `6.0.0`.

After upgrading, delete your chosen package manager's `.lock` file and `node_modules` then reinstall your packages.

## License

[MIT](LICENSE) © Jamie Bradley ([StackUp Digital](https://stackupdigital.co.uk))

## Develop & test

This plugin uses [@sanity/plugin-kit](https://github.com/sanity-io/plugin-kit)
with default configuration for build & watch scripts.

See [Testing a plugin in Sanity Studio](https://github.com/sanity-io/plugin-kit#testing-a-plugin-in-sanity-studio)
on how to run this plugin with hotreload in the studio.
