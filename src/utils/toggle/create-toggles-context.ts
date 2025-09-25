import { createContext, createElement, FC, ReactNode, useMemo } from "react";
import { createToggleHook } from "./create-toggle-hook";

import { Toggle } from "./toggle";
import {
  defaultOptions,
  TogglesContextOptions,
  TogglesContextValue,
} from "./toggles-context";

export const createTogglesContext = (
  options: TogglesContextOptions = defaultOptions
) => {
  const buildContextValue = (): TogglesContextValue => ({
    toggles: new Map<string, Toggle>(),
    options: { ...defaultOptions, ...options },
  });

  const togglesContext = createContext(buildContextValue());

  const { Provider } = togglesContext;

  const TogglesProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const value = useMemo(buildContextValue, []);

    return createElement(Provider, { value }, children);
  };

  const useToggle = createToggleHook(togglesContext);

  return { TogglesProvider, useToggle };
};
