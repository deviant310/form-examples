import { useForm, FormProvider } from "react-hook-form";

import { PageLayout } from "../../layouts";

import { SubmitButton } from "./components";
import { AmountField, LimitTypeField } from "./fields";
import { FormValues } from "./types";

const RHFContextForm = () => {
  const methods = useForm<FormValues>({
    defaultValues: {
      limit: "Payment card limit",
      amount: 0,
    },
  });

  return (
    <FormProvider {...methods}>
      <div>
        <LimitTypeField />

        <AmountField />

        <div>
          <SubmitButton />
        </div>
      </div>
    </FormProvider>
  );
};

export const RHFContextFormPage = () => (
  <PageLayout>
    <h1>React Hook Form</h1>
    <div className="rhf-form">
      <h2>Complex form with context provider</h2>
      <RHFContextForm />
    </div>
  </PageLayout>
);
