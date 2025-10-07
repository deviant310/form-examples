import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";

import { PageLayout } from "../../layouts";

import { CommentField, AddToTargetField, FraudTypologyField } from "./fields";
import { FormValidValues, FormValues, validSchema } from "./schema";

const RHFConditionalForm = () => {
  const methods = useForm({
    defaultValues: {
      comment: "",
      addToTarget: false,
    },
    mode: "all",
    shouldUnregister: true,
    resolver: zodResolver<FormValues, unknown, FormValidValues>(validSchema),
  });
  const submit = methods.handleSubmit(data => console.log(data));

  const addToTarget = methods.watch("addToTarget");

  return (
    <FormProvider {...methods}>
      <div>
        <CommentField />

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
