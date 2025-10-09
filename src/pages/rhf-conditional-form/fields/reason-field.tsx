import { useController } from "react-hook-form";

import { InputRow } from "../../../ui";
import { FormValues } from "../schema";

export const ReasonField = () => {
  const {
    field,
    fieldState: { error },
  } = useController<FormValues, "reason">({
    name: "reason",
  });

  return (
    <InputRow
      label="Reason"
      value={field.value}
      onChange={field.onChange}
      onBlur={field.onBlur}
      error={error?.message}
    />
  );
};
