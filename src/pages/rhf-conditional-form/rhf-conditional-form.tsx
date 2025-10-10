import { PageLayout } from "../../layouts";

import { FormProvider, useForm, useFormState } from "./context";
import {
  CommentField,
  AddToTargetField,
  FraudTypologyField,
  ReasonField,
} from "./fields";

const RHFConditionalForm = () => {
  const { handleSubmit, watch } = useForm();
  const submit = handleSubmit(data => console.log("SUBMIT", data));

  const addToTarget = watch("addToTarget");

  const { isValid, errors } = useFormState();
  console.log(isValid, errors);

  return (
    <div>
      <CommentField />

      <ReasonField />

      <AddToTargetField />

      {addToTarget && <FraudTypologyField />}

      <div>
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
};

export const RHFConditionalFormPage = () => (
  <PageLayout>
    <FormProvider>
      <h1>React Hook Form</h1>
      <div className="rhf-form">
        <h2>Form with conditional fields</h2>
        <RHFConditionalForm />
      </div>
    </FormProvider>
  </PageLayout>
);
