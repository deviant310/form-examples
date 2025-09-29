import { PageLayout } from "../../layouts";

import { SubmitButton } from "./components";
import { AmountField, LimitTypeField } from "./fields";
import { FormProvider } from "./provider";

const RHFDerivedContextForm = () => (
  <FormProvider
    defaultValues={{
      limit: "Payment card limit",
      amount: 0,
    }}
  >
    <div>
      <LimitTypeField />

      <AmountField />

      <div>
        <SubmitButton />
      </div>
    </div>
  </FormProvider>
);

export const RHFDerivedContextFormPage = () => (
  <PageLayout>
    <h1>React Hook Form</h1>
    <div className="rhf-form">
      <h2>Complex form with derived context provider</h2>
      <RHFDerivedContextForm />
    </div>
  </PageLayout>
);
