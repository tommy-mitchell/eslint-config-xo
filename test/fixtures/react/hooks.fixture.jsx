/* eslint-disable react-refresh/only-export-components -- noisy */
import * as React from 'react';
import { useEffect } from 'react';
import * as util from "./util";

// https://github.com/reactjs/react.dev/blob/75ef18a9172e4c100b5d5650ae14c395c5c8ef42/src/content/reference/react/useCallback.md?plain=1#L32-L40
export function usePurchase({ productId, referrer }) {
  return React.useCallback((orderDetails) => {
    util.post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [referrer, productId]);
}

// https://github.com/uidotdev/usehooks/blob/945436df0037bc21133379a5e13f1bd73f1ffc36/index.js#L239-L253
export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export function MyInput({ ref, foo, bar, baz }) {
  React.useImperativeHandle(ref, () => ({
    foo: () => util.foo(foo),
	bar: () => util.bar(bar),
	baz: () => util.baz(baz),
  }), [foo, bar, baz]);

  // …
}

// https://github.com/vercel/styled-jsx/blob/a737ac442a9d032f9f824050b23dc9b6d766657e/src/style.js#L12-L36
export function useStyle(props) {
  const registry = util.useStyleRegistry()
  const insertionEffectCalled = React.useRef(false)

  React.useInsertionEffect(() => {
    if (!document.head) {
      return
    }
    registry.add(props)
    insertionEffectCalled.current = true
    return () => {
      insertionEffectCalled.current = false
      registry.remove(props)
    }
  }, [props.id, String(props.dynamic)])
}

// https://github.com/tommy-mitchell/vite-template/blob/2a4e69f19e921997dcfc685a159629f521e050c3/template/src/providers/WindowSizeProvider.tsx#L11-L34
const WindowSizeContext = React.createContext(null);

export function WindowSizeProvider({ children }) {
	const { height, width } = util.useWindow();

	React.useLayoutEffect(() => {
		if (width === undefined || height === undefined) {
			return;
		}

		const root = window.document.body;

		root.dataset["windowHeight"] = `${height}px`;
		root.dataset["windowWidth"] = `${width}px`;
	}, [width, height]);

	const value = React.useMemo(() => ({ height, width }), [height, width]);

	return (
		<WindowSizeContext.Provider value={value}>
			{children}
		</WindowSizeContext.Provider>
	);
}

// https://github.com/reactjs/react.dev/blob/75ef18a9172e4c100b5d5650ae14c395c5c8ef42/src/content/reference/react/useMemo.md?plain=1#L32-L40
export function useTodos({ todos, tab }) {
  return React.useMemo(
    () => util.filterTodos(todos, tab),
    [todos, tab]
  );
}
