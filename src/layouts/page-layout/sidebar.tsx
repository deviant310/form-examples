import {
  SidebarToggleProvider,
  useNavigator,
  useSidebarToggle,
} from "../../providers";

export const Sidebar = () => {
  const { navigate } = useNavigator();
  const { hideSidebar } = useSidebarToggle();

  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li onClick={() => navigate("home")}>Home</li>
      </ul>
      <h3>React Hook Form</h3>{" "}
      <span className="sidebar-close" onClick={hideSidebar}>
        &#215;
      </span>
      <ul className="sidebar-menu">
        <li onClick={() => navigate("rhf-base-form")}>Base form</li>
        <li onClick={() => navigate("rhf-custom-ui-form")}>Custom UI form</li>
      </ul>
    </div>
  );
};
