import {
  HomePage,
  RHFBaseFormPage,
  RHFContextFormPage,
  RHFCustomUIFormPage,
  RHFDerivedContextFormPage,
} from "./pages";
import {
  homeRoute,
  rhfBaseFormRoute,
  rhfContextFormRoute,
  rhfCustomUIFormRoute,
  rhfDerivedContextFormRoute,
} from "./routes";
import { Router } from "./utils/router";
import "./styles.css";

export default function App() {
  return <Router routes={routes} />;
}

const routes = [
  [homeRoute, HomePage] as const,
  [rhfBaseFormRoute, RHFBaseFormPage] as const,
  [rhfCustomUIFormRoute, RHFCustomUIFormPage] as const,
  [rhfContextFormRoute, RHFContextFormPage] as const,
  [rhfDerivedContextFormRoute, RHFDerivedContextFormPage] as const,
];
