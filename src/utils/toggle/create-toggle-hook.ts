import { Context, useContext, useEffect } from "react";

import { Toggle } from "./toggle";
import { TogglesContextValue } from "./toggles-context";
import { useToggleInstance } from "./use-toggle-instance";

export function createToggleHook(context: Context<TogglesContextValue>) {
  return (toggleKey: string, isOnInitial?: boolean) => {
    const { toggles, options } = useContext(context);

    if (!toggles.has(toggleKey))
      toggles.set(toggleKey, new Toggle(isOnInitial));

    const toggle = toggles.get(toggleKey);

    if (!toggle) throw null;

    useEffect(
      () =>
        toggle.onChange(() => {
          if (options.singleSelectionMode && toggle.isOn)
            for (const [key, toggle] of toggles) {
              if (key === toggleKey) continue;
              if (!toggle.isOn) continue;

              toggle.turnOff();
            }
        }),
      [toggle, options, toggles, toggleKey],
    );

    return useToggleInstance(toggle);
  };
}
