import { useSidebarToggle } from "../../providers";
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
