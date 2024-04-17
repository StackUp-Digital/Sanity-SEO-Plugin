# sanity-plugin-stackup-seo

> This is a **Sanity Studio v3** plugin.

## Installation

```sh
npm install sanity-plugin-stackup-seo
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

## License

[MIT](LICENSE) © Jamie Bradley ([StackUp Digital](https://stackupdigital.co.uk))

## Develop & test

This plugin uses [@sanity/plugin-kit](https://github.com/sanity-io/plugin-kit)
with default configuration for build & watch scripts.

See [Testing a plugin in Sanity Studio](https://github.com/sanity-io/plugin-kit#testing-a-plugin-in-sanity-studio)
on how to run this plugin with hotreload in the studio.
