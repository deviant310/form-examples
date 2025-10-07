import { FC, PropsWithChildren } from "react";

import { createFormContext } from "../../../utils/form";

export interface PrimaryFormValues {
  limit: string;
  amount: number;
}

const {
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
    mode="all"
  >
    {children}
  </FormProvider>
);

export { usePrimaryForm, usePrimaryFormState, usePrimaryFormController };
