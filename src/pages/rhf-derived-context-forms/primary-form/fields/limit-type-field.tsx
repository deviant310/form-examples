import { InputRow } from "../../../../ui";
import { usePrimaryFormController } from "../primary-form";

export const LimitTypeField = () => {
  const { field } = usePrimaryFormController({ name: "limit" });

  console.log("render limit type field");

  return (
    <InputRow
      label="Limit type"
      value={field.value}
      onChange={field.onChange}
    />
  );
};
