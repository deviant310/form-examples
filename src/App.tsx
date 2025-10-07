import {
  HomePage,
  RHFBaseFormPage,
  RHFConditionalFormPage,
  RHFContextFormPage,
  RHFCustomUIFormPage,
  RHFDerivedContextFormsPage,
  RHFReusableFormsPage,
  RHFValidationFormPage,
} from "./pages";
import {
  homeRoute,
  rhfBaseFormRoute,
  rhfConditionalFormRoute,
  rhfContextFormRoute,
  rhfCustomUIFormRoute,
  rhfDerivedContextFormsRoute,
  rhfReusableFormsRoute,
  rhfValidationFormRoute,
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
  [rhfValidationFormRoute, RHFValidationFormPage] as const,
  [rhfConditionalFormRoute, RHFConditionalFormPage] as const,
];
