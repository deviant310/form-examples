import { AmountInputRow } from "../../../../ui";
import { usePrimaryFormController } from "../primary-form";

export const AmountField = () => {
  const { field } = usePrimaryFormController({ name: "amount" });

  console.log("render amount field");

  return (
    <AmountInputRow
      label="Amount"
      value={field.value}
      onChange={field.onChange}
    />
  );
};
