import { z } from "zod";

export type FraudTypology = "Crypto" | "Other";

export interface FormValues {
  comment: string;
  addToTarget: boolean;
  fraudTypology?: FraudTypology | null;
}

const defined = <Data>(data: Data, ctx: z.core.$RefinementCtx<Data>) => {
  for (const key in data) {
    if (typeof data[key as keyof typeof data] === "undefined")
      ctx.addIssue({
        code: "custom",
        path: [key],
        message: `${key} must be defined`,
      });
  }
};

export const validSchema = z
  .object({
    comment: z.string().nonempty("Comment required"),
    addToTarget: z.boolean(),
    fraudTypology: z
      .custom<FraudTypology>(
        v => typeof v === "string",
        "Fraud typology is required",
      )
      .optional(),
  })
  .superRefine(defined);

export type FormValidValues = Extract<z.infer<typeof validSchema>, FormValues>;
