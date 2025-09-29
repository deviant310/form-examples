import { InputRow } from "../../../ui";
import { useController } from "../provider";

export const LimitTypeField = () => {
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
