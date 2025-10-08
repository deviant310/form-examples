export type FraudTypology = "Crypto" | "Other";

export interface FormValues {
  comment: string;
  addToTarget: boolean;
  fraudTypology?: FraudTypology | null;
}

export interface FormValidValues extends FormValues {
  fraudTypology?: FraudTypology;
}

/* export const validSchema = z
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
  .refine(data => !("fraudTypology" in data) || data.fraudTypology, {
    error: "Fraud typology is required",
    path: ["fraudTypology"],
  }); */

//export type FormValidValues = Extract<z.infer<typeof validSchema>, FormValues>;
