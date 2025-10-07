import { FC, PropsWithChildren } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { createFormContext } from "../../utils/form";

export type Source = "one" | "two";

interface FormValues {
  source: string | null;
  amount: number | null;
}

interface FormValidValues extends FormValues {
  source: string;
  amount: number;
}

const {
  FormProvider,
  useForm: useValidationForm,
  useFormState: useValidationFormState,
  useController: useValidationFormController,
} =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createFormContext<FormValues, any, FormValidValues>();

const schema = z.object({
  source: z.string({
    message: "Source is required",
  }),
  amount: z
    .number({
      message: "Amount is required",
    })
    .min(0, { message: "Amount must be at least 0" }),
});

const resolver = zodResolver<FormValues, unknown, FormValidValues>(schema);

export const ValidationFormProvider: FC<PropsWithChildren> = ({ children }) => (
  <FormProvider
    defaultValues={{ source: null, amount: null }}
    mode="all"
    resolver={resolver}
    /* resolver={({ source, amount }) => {
      const errors: FieldErrors<FormValues> = {};

      if (!source) {
        errors.source = {
          type: "required",
          message: "Source is required",
        };
      }

      if (amount === null) {
        errors.amount = {
          type: "required",
          message: "Amount is required",
        };
      } else if (amount < 0) {
        errors.amount = {
          type: "tooSmall",
          message: "Amount must be at least 0",
        };
      }

      if (Object.keys(errors).length > 0)
        return { values: {} as Record<string, never>, errors };

      return {
        values: { source, amount } as FormValidValues,
        errors: {},
      };
    }} */
  >
    {children}
  </FormProvider>
);

export {
  useValidationForm,
  useValidationFormState,
  useValidationFormController,
};
