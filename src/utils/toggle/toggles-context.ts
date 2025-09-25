import { Toggle } from "./toggle";

export interface TogglesContextOptions {
  singleSelectionMode?: boolean;
}

export const defaultOptions: Required<TogglesContextOptions> = {
  singleSelectionMode: false,
};

export interface TogglesContextValue {
  toggles: Map<string, Toggle>;
  options: Required<TogglesContextOptions>;
}
