import { FC, PropsWithChildren } from "react";

import { SidebarToggleProvider } from "../../providers";

import { TopPanel } from "./top-panel";

export const PageLayout: FC<PropsWithChildren> = ({ children }) => (
  <SidebarToggleProvider>
    <TopPanel />
    {children}
  </SidebarToggleProvider>
);
