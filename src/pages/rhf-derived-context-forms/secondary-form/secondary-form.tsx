import { FC, PropsWithChildren } from "react";

import { UseFormProps } from "react-hook-form";

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

export const SecondaryFormProvider: FC<
  PropsWithChildren & Pick<UseFormProps<SecondaryFormValues>, "formControl">
> = ({ children, formControl }) => (
  <FormProvider
    defaultValues={{
      name: "Anton",
      age: 33,
    }}
    formControl={formControl}
  >
    {children}
  </FormProvider>
);

export const SecondaryForm: FC<{ title?: string }> = ({ title }) => {
  const { handleSubmit } = useSecondaryForm();
  const submit = handleSubmit(data => console.log(data));

  return (
    <div>
      <h3>{title ?? "Secondary Form"}</h3>

      <NameField />

      <AgeField />

      <div>
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
};
