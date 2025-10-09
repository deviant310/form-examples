import { useForm, FormProvider } from "react-hook-form";
import z from "zod";

import { PageLayout } from "../../layouts";
import { zodAwareResolver } from "../../utils/form";

import {
  CommentField,
  AddToTargetField,
  FraudTypologyField,
  ReasonField,
} from "./fields";
import { FormValidValues, FormValues, FraudTypology } from "./schema";

const schema = z.object({
  comment: z.string().nonempty("Comment required"),
  reason: z.string().nonempty("Reason required"),
  addToTarget: z.boolean(),
  fraudTypology: z.string<FraudTypology>("Fraud typology is required"),
});

const RHFConditionalForm = () => {
  const methods = useForm<FormValues, unknown, FormValidValues>({
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
  const submit = methods.handleSubmit(data => console.log(data));

  const addToTarget = methods.watch("addToTarget");

  return (
    <FormProvider {...methods}>
      <div>
        <CommentField />

        <ReasonField />

        <AddToTargetField />

        {addToTarget && <FraudTypologyField />}

        <div>
          <button onClick={submit}>Submit</button>
        </div>
      </div>
    </FormProvider>
  );
};

export const RHFConditionalFormPage = () => (
  <PageLayout>
    <h1>React Hook Form</h1>
    <div className="rhf-form">
      <h2>Form with conditional fields</h2>
      <RHFConditionalForm />
    </div>
  </PageLayout>
);
