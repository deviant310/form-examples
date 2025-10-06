import { PageLayout } from "../../layouts";
import { FormStageProvider, useFormStage } from "../../providers";

import { PrimaryForm, PrimaryFormProvider } from "./primary-form";
import { SecondaryForm, SecondaryFormProvider } from "./secondary-form";

/**
 * @see explanation.md
 */
const RHFDerivedContextForms = () => {
  const { formStage } = useFormStage();

  return (
    <div>
      {formStage === "primary" && (
        <div className="rhf-form">
          <PrimaryForm />
        </div>
      )}

      {formStage === "secondary" && (
        <div className="rhf-form">
          <SecondaryForm />
        </div>
      )}
    </div>
  );
};

const Actions = () => {
  const { formStage, setFormStage } = useFormStage();

  return (
    <div className="actions">
      {formStage !== "primary" && (
        <button onClick={() => setFormStage("primary")}>Back</button>
      )}
      {formStage !== "secondary" && (
        <button onClick={() => setFormStage("secondary")}>Next</button>
      )}
    </div>
  );
};

export const RHFDerivedContextFormsPage = () => (
  <PageLayout>
    <FormStageProvider>
      <PrimaryFormProvider>
        <SecondaryFormProvider>
          <h1>React Hook Form</h1>
          <div className="header">
            <h2>Forms with derived contexts</h2>
            <Actions />
          </div>
          <RHFDerivedContextForms />
        </SecondaryFormProvider>
      </PrimaryFormProvider>
    </FormStageProvider>
  </PageLayout>
);
