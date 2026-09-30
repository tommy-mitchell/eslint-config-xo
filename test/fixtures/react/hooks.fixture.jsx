import * as React from 'react';

// https://github.com/reactjs/react.dev/blob/75ef18a9172e4c100b5d5650ae14c395c5c8ef42/src/content/reference/react/useCallback.md?plain=1#L32-L40
export function usePurchase({ productId, referrer }) {
  return React.useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);
}

// https://github.com/uidotdev/usehooks/blob/945436df0037bc21133379a5e13f1bd73f1ffc36/index.js#L239-L253
export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
