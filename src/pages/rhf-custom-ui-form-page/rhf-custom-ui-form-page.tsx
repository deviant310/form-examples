import { PageLayout } from "../../layouts";

import { RHFCustomUIForm } from "./rhf-custom-ui-form";

export const RHFCustomUIFormPage = () => (
  <PageLayout>
    <h1>React Hook Form</h1>
    <div className="rhf-form">
      <h2>Custom UI form example (controlled inputs)</h2>
      <RHFCustomUIForm />
    </div>
  </PageLayout>
);
