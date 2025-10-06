import {
  HomePage,
  RHFBaseFormPage,
  RHFContextFormPage,
  RHFCustomUIFormPage,
  RHFDerivedContextFormsPage,
  RHFReusableFormsPage,
} from "./pages";
import {
  homeRoute,
  rhfBaseFormRoute,
  rhfContextFormRoute,
  rhfCustomUIFormRoute,
  rhfDerivedContextFormsRoute,
  rhfReusableFormsRoute,
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
  [rhfDerivedContextFormsRoute, RHFDerivedContextFormsPage] as const,
  [rhfReusableFormsRoute, RHFReusableFormsPage] as const,
];
