import { AmountInputRow } from "../../../ui";
import { useController } from "../provider";

export const AmountField = () => {
  const { field } = useController({ name: "amount" });

  console.log("render amount field");

  return (
    <AmountInputRow
      label="Amount"
      value={field.value}
      onChange={field.onChange}
    />
  );
};
