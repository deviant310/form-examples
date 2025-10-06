import { FC } from "react";

import { FormProvider, useForm } from "react-hook-form";

import { PageLayout } from "../../layouts";

import { SubmitButton } from "./components";
import { AmountField, LimitTypeField } from "./fields";
import { FormValues } from "./types";

/**
 * @see explanation.md
 */
const RHFReusableForm: FC<FormValues> = ({ ...defaultValues }) => {
  const methods = useForm<FormValues>({
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <div>
        <LimitTypeField />

        <AmountField />

        <div>
          <SubmitButton />
        </div>

        <pre>{JSON.stringify(methods.watch(), null, 2)}</pre>
      </div>
    </FormProvider>
  );
};

export const RHFReusableFormsPage = () => (
  <PageLayout>
    <h1>React Hook Form</h1>
    <div className="rhf-form">
      <h2>Reusable forms</h2>
      <div className="row-2-cols">
        <RHFReusableForm limit="Payment card limit" amount={0} />
        <RHFReusableForm limit="Another limit" amount={100} />
      </div>
    </div>
  </PageLayout>
);
