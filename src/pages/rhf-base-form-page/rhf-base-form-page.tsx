import { PageLayout } from "../../layouts";
import { RHFBaseForm } from "./rhf-base-form";

export const RHFBaseFormPage = () => {
  return (
    <PageLayout>
      <h1>React Hook Form</h1>
      <div className="rhf-form">
        <h2>Base form example (uncontrolled inputs)</h2>
        <RHFBaseForm />
      </div>
    </PageLayout>
  );
};
