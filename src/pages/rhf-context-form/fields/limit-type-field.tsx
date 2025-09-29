import { useController } from "react-hook-form";

import { InputRow } from "../../../ui";

/**
 * Контроллер можно использовать без передачи control если мы находимся внутри провайдера
 */
export const LimitTypeField = () => {
  // const { control } = useFormContext<FormValues>();
  const { field } = useController({ name: "limit" });

  console.log("render limit type field");

  return (
    <InputRow
      label="Limit type"
      value={field.value}
      onChange={field.onChange}
    />
  );
};
