import { FC, PropsWithChildren } from "react";

import { SidebarToggleProvider } from "../../providers/sidebar-toggle";

import { TopPanel } from "./top-panel";

export const PageLayout: FC<PropsWithChildren> = ({ children }) => (
  <SidebarToggleProvider>
    <TopPanel />
    {children}
  </SidebarToggleProvider>
);
