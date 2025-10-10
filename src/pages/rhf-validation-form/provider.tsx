import { z } from "zod";

import { createFormContext, zodAwareResolver } from "../../utils/form";

export type Source = "one" | "two";

interface FormValues {
  source: string | null;
  amount: number | null;
}

interface FormValidValues extends FormValues {
  source: string;
  amount: number;
}

const schema = z.object({
  source: z.string("Source is required"),
  amount: z.number("Amount is required").min(0, "Amount must be at least 0"),
});

export const {
  FormProvider: ValidationFormProvider,
  useForm: useValidationForm,
  useFormState: useValidationFormState,
  useController: useValidationFormController,
} = createFormContext<FormValues, unknown, FormValidValues>({
  defaultValues: { source: null, amount: null },
  mode: "all",
  resolver: zodAwareResolver<FormValues, unknown, FormValidValues>(schema),
});
