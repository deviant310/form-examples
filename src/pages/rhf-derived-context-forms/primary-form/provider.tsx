import { createFormContext } from "../../../utils/form";

export interface PrimaryFormValues {
  limit: string;
  amount: number;
}

export const {
  FormProvider: PrimaryFormProvider,
  useForm: usePrimaryForm,
  useFormState: usePrimaryFormState,
  useController: usePrimaryFormController,
} = createFormContext<PrimaryFormValues>({
  defaultValues: {
    limit: "Payment card limit",
    amount: 0,
  },
  mode: "all",
});
