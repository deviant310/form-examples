import { useSidebarToggle } from "../../providers";
import {
  homeRoute,
  rhfBaseFormRoute,
  rhfCustomUIFormRoute,
  rhfContextFormRoute,
  rhfDerivedContextFormsRoute,
  rhfReusableFormsRoute,
  rhfValidationFormRoute,
  rhfConditionalFormRoute,
} from "../../routes";
import { useNavigator } from "../../utils/router";

export const Sidebar = () => {
  const navigate = useNavigator();
  const { hideSidebar } = useSidebarToggle();

  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li onClick={() => navigate(homeRoute())}>Home</li>
      </ul>
      <h3>React Hook Form</h3>{" "}
      <span className="sidebar-close" onClick={hideSidebar}>
        &#215;
      </span>
      <ul className="sidebar-menu">
        <li onClick={() => navigate(rhfBaseFormRoute())}>Base form</li>
        <li onClick={() => navigate(rhfCustomUIFormRoute())}>Custom UI form</li>
        <li onClick={() => navigate(rhfContextFormRoute())}>
          Form with context
        </li>
        <li onClick={() => navigate(rhfReusableFormsRoute())}>
          Reusable forms
        </li>
        <li onClick={() => navigate(rhfDerivedContextFormsRoute())}>
          Forms with derived context
        </li>
        <li onClick={() => navigate(rhfValidationFormRoute())}>Validation</li>
        <li onClick={() => navigate(rhfConditionalFormRoute())}>
          Conditional form
        </li>
      </ul>
    </div>
  );
};
