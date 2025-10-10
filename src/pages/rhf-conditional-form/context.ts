import z from "zod";

import { createFormContext, zodAwareResolver } from "../../utils/form";

export type FraudTypology = "Crypto" | "Other";

export interface FormValues {
  comment: string;
  reason: string;
  addToTarget: boolean;
  fraudTypology?: FraudTypology | null;
}

export interface FormValidValues extends FormValues {
  fraudTypology?: FraudTypology;
}

const schema = z.object({
  comment: z.string().nonempty("Comment required"),
  reason: z.string().nonempty("Reason required"),
  addToTarget: z.boolean(),
  fraudTypology: z.string<FraudTypology>("Fraud typology is required"),
});

export const { FormProvider, useForm, useFormState, useController } =
  createFormContext<FormValues, unknown, FormValidValues>({
    defaultValues: {
      comment: "",
      reason: "",
      addToTarget: false,
      fraudTypology: null,
    },
    mode: "all",
    shouldUnregister: true,
    resolver: zodAwareResolver<FormValues, unknown, FormValidValues>(schema),
  });
