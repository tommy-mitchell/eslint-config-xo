# @tommy-mitchell/eslint-config-xo

Personal config for [`XO`](https://github.com/xojs/xo). Recommended to be used with my [`dprint` config](https://github.com/tommy-mitchell/dprint-config).

## Install

```sh
npm install --save-dev @tommy-mitchell/eslint-config-xo xo
```

<details>
<summary>Other Package Managers</summary>
<p>

```sh
yarn add --dev @tommy-mitchell/eslint-config-xo xo
```

```sh
pnpm add --save-dev @tommy-mitchell/eslint-config-xo xo
```

</p>
</details>

<details>
<summary>With dprint</summary>
<p>

```sh
npm install --save-dev @tommy-mitchell/eslint-config-xo xo @tommy-mitchell/dprint-config dprint
```

```sh
yarn add --dev @tommy-mitchell/eslint-config-xo xo @tommy-mitchell/dprint-config dprint
```

```sh
pnpm add --save-dev @tommy-mitchell/eslint-config-xo xo @tommy-mitchell/dprint-config dprint
```

</p>
</details>

### Peer Dependencies

- [xo](https://github.com/xojs/xo) - JavaScript/TypeScript linter (ESLint wrapper) with great defaults.
- [dprint](https://github.com/dprint/dprint) (_Optional_) - Pluggable and configurable code formatting platform written in Rust.
- [react](https://react.dev) (_Optional_) - The library for web and native user interfaces.
- [tailwindcss](https://tailwindcss.com) (_Optional_) - A utility-first CSS framework for rapid UI development.

## Usage (Flat Config)

```js
// xo.config.js
import * as configs from "@tommy-mitchell/eslint-config-xo";

/** @type {import('xo').FlatXoConfig} */
export default [
	...configs.xo,
	...configs.react({ version: "19" }), // If using React
	...configs.next, // If using Next.js
	...configs.tanstack, // If using TanStack Start
	...configs.tailwind({ config: "src/tailwind.css" }), // If using TailwindCSS
	...configs.dprint, // If using dprint (must be last to override stylistic rules)
	// Plus any overrides
];
```

### TailwindCSS

Add the following to your `settings.json` to prevent duplicate lints:

```jsonc
"tailwindCSS.lint.suggestCanonicalClasses": "ignore",
```

If using TailwindCSS v3:

```js
configs.tailwind({ config: "tailwind.config.ts", version: "3" }),
```

### VS Code

Add the following to your `settings.json`:

```jsonc
"xo.enable": true,
"xo.format.enable": true,
"xo.overrideSeverity": "warn",
"xo.debounce": 100,
```

If formatting with `dprint`:

```jsonc
"[javascript][javascriptreact][typescript][typescriptreact][json][jsonc][yaml][markdown]": {
	"editor.formatOnSave": true,
	"editor.defaultFormatter": "dprint.dprint",
	"editor.codeActionsOnSave": {
		"source.fixAll.xo": "explicit", // Will run lint autofixes
	},
},
```

## Related

- [XO (VS Code Extension)](https://marketplace.visualstudio.com/items?itemName=samverschueren.linter-xo) - Linter for XO.
