import { AmountInputRow } from "../../../ui";
import { useValidationFormController } from "../provider";

export const AmountField = () => {
  const {
    field: amountField,
    fieldState: { error },
  } = useValidationFormController({
    name: "amount",
  });

  return (
    <AmountInputRow
      label="Amount"
      value={amountField.value}
      onChange={amountField.onChange}
      onBlur={amountField.onBlur}
      error={error?.message}
    />
  );
};
