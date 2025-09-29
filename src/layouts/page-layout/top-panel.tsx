import { useSidebarToggle } from "../../providers/sidebar-toggle";

import { Sidebar } from "./sidebar";

export const TopPanel = () => {
  const { sidebarIsVisible, showSidebar } = useSidebarToggle();

  return (
    <div className="top-panel">
      <button onClick={showSidebar}>Menu</button>{" "}
      {sidebarIsVisible && <Sidebar />}
    </div>
  );
};
