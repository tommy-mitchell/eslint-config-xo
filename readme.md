# @tommy-mitchell/eslint-config-xo

Personal config for [`XO`](https://github.com/xojs/xo). Recommended to be used with my [`dprint` config](https://github.com/tommy-mitchell/dprint-config).

## Install

```sh
npm install --save-dev @tommy-mitchell/xo-config xo @tommy-mitchell/dprint-config dprint
```

<details>
<summary>Other Package Managers</summary>

```sh
yarn add --dev @tommy-mitchell/xo-config xo @tommy-mitchell/dprint-config dprint
```

</details>

### Peer Dependencies

- [xo](https://github.com/xojs/xo) - JavaScript/TypeScript linter (ESLint wrapper) with great defaults.
- [dprint](https://github.com/dprint/dprint) - Pluggable and configurable code formatting platform written in Rust.

## Usage

Add to the `extends` section of your `XO` config:

```jsonc
"extends": ["@tommy-mitchell/xo"],
```

### React

```jsonc
"extends": ["@tommy-mitchell/xo", "@tommy-mitchell/xo/react"],
```

### Tailwind CSS

```jsonc
"extends": ["@tommy-mitchell/xo", "@tommy-mitchell/xo/tailwind"],
```

## Related

- [XO (VS Code Extension)](https://marketplace.visualstudio.com/items?itemName=samverschueren.linter-xo) - Linter for XO.
