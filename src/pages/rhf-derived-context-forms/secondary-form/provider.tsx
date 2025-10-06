import { FC, PropsWithChildren } from "react";

import { createFormContext } from "../../../utils/form";

export interface SecondaryFormValues {
  name: string;
  age: number;
}

const {
  FormProvider,
  useForm: useSecondaryForm,
  useFormState: useSecondaryFormState,
  useController: useSecondaryFormController,
} = createFormContext<SecondaryFormValues>();

export const SecondaryFormProvider: FC<PropsWithChildren> = ({ children }) => (
  <FormProvider
    defaultValues={{
      name: "Anton",
      age: 33,
    }}
  >
    {children}
  </FormProvider>
);

export { useSecondaryForm, useSecondaryFormState, useSecondaryFormController };
