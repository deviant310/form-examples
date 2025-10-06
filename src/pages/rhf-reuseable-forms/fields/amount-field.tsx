import { useController } from "react-hook-form";

import { AmountInputRow } from "../../../ui";

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
