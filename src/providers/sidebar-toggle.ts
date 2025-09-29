import { createTogglesContext } from "../utils/toggle";

const { TogglesProvider: SidebarToggleProvider, useToggle } =
  createTogglesContext({
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

export { SidebarToggleProvider };
