import { SidebarToggleProvider } from "../../providers";
import { TopPanel } from "./top-panel";

export const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SidebarToggleProvider>
      <TopPanel />
      {children}
    </SidebarToggleProvider>
  );
};
