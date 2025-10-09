import { createFormContext } from "../../../utils/form";

export interface SecondaryFormValues {
  name: string;
  age: number;
}

export const {
  FormProvider: SecondaryFormProvider,
  useForm: useSecondaryForm,
  useFormState: useSecondaryFormState,
  useController: useSecondaryFormController,
} = createFormContext<SecondaryFormValues>({
  defaultValues: {
    name: "Anton",
    age: 33,
  },
});
