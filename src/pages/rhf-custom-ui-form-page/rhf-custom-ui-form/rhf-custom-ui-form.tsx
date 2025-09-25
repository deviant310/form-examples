import { useMemo } from "react";
import { useForm, useController } from "react-hook-form";

interface FormValues {
  limit: string;
  amount: number;
}

/**
 * useController хук или Controller компонент
 */
export const RHFCustomUIForm = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      limit: "Payment card limit",
      amount: 0,
    },
  });

  const { field: limitField } = useController({ name: "limit", control });
  const { field: amountField } = useController({ name: "amount", control });

  const submit: SubmitHandler<FormValues> = handleSubmit((data) =>
    console.log(data)
  );

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

const InputRow: FC<InputRowProps> = ({ label, value, onChange }) => (
  <fieldset>
    <label>{label}</label>
    <div>
      <input
        type="text"
        value={value}
        onChange={({ target }) => onChange(target.value)}
      />
    </div>
  </fieldset>
);

interface InputRowProps {
  label: string;
  value: string;
  onChange(value: string): void;
}

const AmountInputRow: FC<AmountInputRowProps> = ({
  label,
  value,
  onChange,
}) => (
  <fieldset>
    <label>{label}</label>
    <div>
      <input
        type="number"
        value={value}
        onChange={({ target }) => onChange(+target.value)}
      />
    </div>
  </fieldset>
);

interface AmountInputRowProps {
  label: string;
  value: number;
  onChange(value: number): void;
}
