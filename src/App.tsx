import { PageLayout } from "./layouts";
import { RHFBaseFormPage, RHFCustomUIFormPage } from "./pages";
import { useNavigator } from "./providers";
import "./styles.css";

export default function App() {
  const { route } = useNavigator();

  return {
    home: <HomePage />,
    "rhf-base-form": <RHFBaseFormPage />,
    "rhf-custom-ui-form": <RHFCustomUIFormPage />,
  }[route];
}

const HomePage = () => <PageLayout>home</PageLayout>;
