import { createContext, createElement, FC, ReactNode, useMemo } from "react";

import { createStoreHook } from "./create-store-hook";
import { Store } from "./store";

export function createStoresContext() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const storesContext = createContext(new Map<string, Store<any>>());
  const { Provider } = storesContext;

  const StoresProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const value = useMemo(() => new Map(), []);

    return createElement(Provider, { value }, children);
  };

  const useStore = createStoreHook(storesContext);

  return { StoresProvider, useStore };
}
