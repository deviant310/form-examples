import { FC, PropsWithChildren } from "react";

import { createFormContext } from "../../../utils/form";

import { AmountField, LimitTypeField } from "./fields";

export interface PrimaryFormValues {
  limit: string;
  amount: number;
}

export const {
  FormProvider,
  useForm: usePrimaryForm,
  useFormState: usePrimaryFormState,
  useController: usePrimaryFormController,
} = createFormContext<PrimaryFormValues>();

export const PrimaryFormProvider: FC<PropsWithChildren> = ({ children }) => (
  <FormProvider
    defaultValues={{
      limit: "Payment card limit",
      amount: 0,
    }}
  >
    {children}
  </FormProvider>
);

export const PrimaryForm = () => {
  const { handleSubmit } = usePrimaryForm();
  const submit = handleSubmit(data => console.log(data));

  return (
    <div>
      <h3>Primary Form</h3>

      <LimitTypeField />

      <AmountField />

      <div>
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
};
