import { useCallback, useSyncExternalStore } from "react";

import { Store } from "./store";

export function useStoreInstance<Value>(store: Store<Value>) {
  const value = useSyncExternalStore(
    dispatch => store.onChange(dispatch),
    () => store.value,
  );

  const setValue = useCallback(
    (value: Value) => store.setValue(value),
    [store],
  );
  const reset = useCallback(() => store.reset(), [store]);

  return { value, setValue, reset };
}
