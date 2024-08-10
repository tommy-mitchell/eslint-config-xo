# @tommy-mitchell/eslint-config-xo

Personal config for [`XO`](https://github.com/xojs/xo). Recommended to be used with my [`dprint` config](https://github.com/tommy-mitchell/dprint-config).

## Install

```sh
npm install --save-dev @tommy-mitchell/eslint-config-xo xo @tommy-mitchell/dprint-config dprint
```

<details>
<summary>Other Package Managers</summary>
<p>

```sh
yarn add --dev @tommy-mitchell/eslint-config-xo xo @tommy-mitchell/dprint-config dprint
```

</p>
</details>

### Peer Dependencies

- [xo](https://github.com/xojs/xo) - JavaScript/TypeScript linter (ESLint wrapper) with great defaults.
- [dprint](https://github.com/dprint/dprint) (*Optional*) - Pluggable and configurable code formatting platform written in Rust.
- [react](https://react.dev) (*Optional*) - The library for web and native user interfaces.
- [tailwindcss](https://tailwindcss.com) (*Optional*) - A utility-first CSS framework for rapid UI development.

## Usage

Add to the `extends` section of your `XO` config:

```jsonc
"extends": ["@tommy-mitchell/xo"],
```

### dprint

```jsonc
"extends": ["@tommy-mitchell/xo", "@tommy-mitchell/xo/dprint"],
```

### React

```jsonc
"extends": ["@tommy-mitchell/xo", "@tommy-mitchell/xo/react"],
```

#### React + dprint

```jsonc
"extends": ["@tommy-mitchell/xo", "@tommy-mitchell/xo/react", "@tommy-mitchell/xo/dprint"],
```

### Tailwind CSS

```jsonc
"extends": ["@tommy-mitchell/xo", "@tommy-mitchell/xo/tailwind"],
```

### VS Code

Add the following to your `settings.json`:

```jsonc
"xo.enable": true,
"xo.format.enable": true,
"xo.overrideSeverity": "warn",
```

## Related

- [XO (VS Code Extension)](https://marketplace.visualstudio.com/items?itemName=samverschueren.linter-xo) - Linter for XO.
