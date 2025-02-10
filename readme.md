# @tommy-mitchell/eslint-config-xo

Personal config for [`XO`](https://github.com/xojs/xo). Recommended to be used with my [`dprint` config](https://github.com/tommy-mitchell/dprint-config).

## Install

```sh
npm install --save-dev @tommy-mitchell/eslint-config-xo@beta xo@npm:@spence-s/flat-xo@latest
```

<details>
<summary>Other Package Managers</summary>
<p>

```sh
yarn add --dev @tommy-mitchell/eslint-config-xo@beta xo@npm:@spence-s/flat-xo@latest
```

</p>
</details>

<details>
<summary>With dprint</summary>
<p>

```sh
npm install --save-dev @tommy-mitchell/eslint-config-xo@beta xo@npm:@spence-s/flat-xo@latest @tommy-mitchell/dprint-config dprint
```

```sh
yarn add --dev @tommy-mitchell/eslint-config-xo@beta xo@npm:@spence-s/flat-xo@latest @tommy-mitchell/dprint-config dprint
```

</p>
</details>

### Peer Dependencies

- [xo](https://github.com/xojs/xo) - JavaScript/TypeScript linter (ESLint wrapper) with great defaults.
- [dprint](https://github.com/dprint/dprint) (*Optional*) - Pluggable and configurable code formatting platform written in Rust.
- [react](https://react.dev) (*Optional*) - The library for web and native user interfaces.
- [tailwindcss](https://tailwindcss.com) (*Optional*) - A utility-first CSS framework for rapid UI development.

## Usage (Flat Config)

```js
// xo.config.js
import * as configs from "@tommy-mitchell/eslint-config-xo";

export default [
	...configs.xo,
	...configs.react, // If using React
	...configs.next, // If using Next.js
	...configs.tailwind, // If using Tailwind CSS
	...configs.dprint, // If using dprint (must be last to override stylistic rules)
	// Plus any overrides
]
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
"[javascript][javascriptreact][typescript][typescriptreact]": {
	"editor.formatOnSave": true,
	"editor.defaultFormatter": "dprint.dprint",
	"editor.codeActionsOnSave": {
		"source.fixAll.xo": "explicit", // Will run lint autofixes
	},
},
```

## Related

- [XO (VS Code Extension)](https://marketplace.visualstudio.com/items?itemName=samverschueren.linter-xo) - Linter for XO.
