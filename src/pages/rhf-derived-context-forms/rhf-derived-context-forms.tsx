import { PageLayout } from "../../layouts";
import { FormStageProvider, useFormStage } from "../../providers";

import { AnotherForm, AnotherFormProvider } from "./another-form";
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

      {formStage === "another" && (
        <div className="rhf-form">
          <AnotherForm />
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
        <button
          onClick={() =>
            setFormStage(formStage === "another" ? "secondary" : "primary")
          }
        >
          Back
        </button>
      )}
      {formStage !== "another" && (
        <button
          onClick={() =>
            setFormStage(formStage === "primary" ? "secondary" : "another")
          }
        >
          Next
        </button>
      )}
    </div>
  );
};

export const RHFDerivedContextFormsPage = () => (
  <PageLayout>
    <FormStageProvider>
      <PrimaryFormProvider>
        <SecondaryFormProvider>
          <AnotherFormProvider>
            <h1>React Hook Form</h1>
            <div className="header">
              <h2>Forms with derived contexts</h2>
              <Actions />
            </div>
            <RHFDerivedContextForms />
          </AnotherFormProvider>
        </SecondaryFormProvider>
      </PrimaryFormProvider>
    </FormStageProvider>
  </PageLayout>
);
