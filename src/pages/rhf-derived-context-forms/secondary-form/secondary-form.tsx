import { FC, PropsWithChildren } from "react";

import { createFormContext } from "../../../utils/form";

import { AgeField, NameField } from "./fields";

export interface SecondaryFormValues {
  name: string;
  age: number;
}

export const {
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

export const SecondaryForm = () => {
  const { handleSubmit } = useSecondaryForm();
  const submit = handleSubmit(data => console.log(data));

  return (
    <div>
      <h3>Secondary Form</h3>

      <NameField />

      <AgeField />

      <div>
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
};
