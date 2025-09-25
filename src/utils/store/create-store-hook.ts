import { Context, useContext } from "react";
import { Store } from "./store";
import { useStoreInstance } from "./use-store-instance";

export function createStoreHook(context: Context<Map<string, Store<any>>>) {
  return <StoreHook>((storeKey, initialValue) => {
    const stores = useContext(context);

    if (!stores.has(storeKey)) stores.set(storeKey, new Store(initialValue));

    const store = stores.get(storeKey);

    if (!store) throw null;

    return useStoreInstance(store);
  });
}

interface StoreHook {
  <Value>(storeKey: string, initialValue: Value): ReturnType<
    typeof useStoreInstance<Value>
  >;
  <Value = undefined>(storeKey: string): ReturnType<
    typeof useStoreInstance<Value | undefined>
  >;
}
