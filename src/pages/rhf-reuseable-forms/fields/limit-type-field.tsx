import { useController } from "react-hook-form";

import { InputRow } from "../../../ui";

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
