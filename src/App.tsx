import { FC, PropsWithChildren } from "react";
import {
  SidebarToggleProvider,
  useNavigator,
  useSidebarToggle,
} from "./providers";
import { RHFBaseFormPage, RHFCustomUIFormPage } from "./pages";
import { PageLayout } from "./layouts";
import "./styles.css";

export default function App() {
  const { route } = useNavigator();

  return {
    home: <HomePage />,
    "rhf-base-form": <RHFBaseFormPage />,
    "rhf-custom-ui-form": <RHFCustomUIFormPage />,
  }[route];
}

const HomePage = () => {
  return <PageLayout>home</PageLayout>;
};
