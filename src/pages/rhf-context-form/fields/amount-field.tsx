import { useController } from "react-hook-form";

import { AmountInputRow } from "../../../ui";

/**
 * Контроллер можно использовать без передачи control если мы находимся внутри провайдера
 */
export const AmountField = () => {
  //const { control } = useFormContext<FormValues>();
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
