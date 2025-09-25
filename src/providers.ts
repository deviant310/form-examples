import { useStore } from "./utils/store";
import { createTogglesContext } from "./utils/toggle";

export const useNavigator = () => {
  const { value: route, setValue: navigate } = useStore<Route>(
    "navigator",
    "home",
  );

  return { route, navigate };
};

export type Route = "home" | "rhf-base-form" | "rhf-custom-ui-form";

const { TogglesProvider, useToggle } = createTogglesContext({
  singleSelectionMode: true,
});

export const useSidebarToggle = () => {
  const {
    isOn: sidebarIsVisible,
    turnOn: showSidebar,
    turnOff: hideSidebar,
  } = useToggle("sidebar");

  return { sidebarIsVisible, showSidebar, hideSidebar };
};

export const SidebarToggleProvider = TogglesProvider;
