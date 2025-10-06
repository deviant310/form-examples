import { PageLayout } from "../../layouts";

import { AmountField, SourceField } from "./fields";
import { ValidationFormProvider, useValidationForm } from "./provider";

const RHFValidationForm = () => {
  const { handleSubmit } = useValidationForm();

  const submit = handleSubmit(data => console.log(data));

  return (
    <>
      <SourceField />

      <AmountField />

      <button onClick={submit}>Submit</button>
    </>
  );
};

export const RHFValidationFormPage = () => (
  <PageLayout>
    <ValidationFormProvider>
      <h1>React Hook Form</h1>
      <div className="rhf-form">
        <h2>Form with validation</h2>

        <RHFValidationForm />
      </div>
    </ValidationFormProvider>
  </PageLayout>
);
