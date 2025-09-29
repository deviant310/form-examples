import { createFormContext } from "../../utils/form/create-form-context";

export interface FormValues {
  limit: string;
  amount: number;
}

export const { FormProvider, useForm, useFormState, useController } =
  createFormContext<FormValues>();
