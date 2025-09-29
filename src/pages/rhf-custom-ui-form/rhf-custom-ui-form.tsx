import { useForm, useController } from "react-hook-form";

import { PageLayout } from "../../layouts";
import { AmountInputRow, InputRow } from "../../ui";

interface FormValues {
  limit: string;
  amount: number;
}

/**
 * useController хук или Controller компонент
 */
const RHFCustomUIForm = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      limit: "Payment card limit",
      amount: 0,
    },
  });

  const { field: limitField } = useController({ name: "limit", control });
  const { field: amountField } = useController({ name: "amount", control });

  const submit = handleSubmit(data => console.log(data));

  console.log("render");

  return (
    <div>
      <InputRow
        label="Limit type"
        value={limitField.value}
        onChange={limitField.onChange}
      />
      <AmountInputRow
        label="Amount"
        value={amountField.value}
        onChange={amountField.onChange}
      />

      <div>
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
};

export const RHFCustomUIFormPage = () => (
  <PageLayout>
    <h1>React Hook Form</h1>
    <div className="rhf-form">
      <h2>Custom UI form example (controlled inputs)</h2>
      <RHFCustomUIForm />
    </div>
  </PageLayout>
);
