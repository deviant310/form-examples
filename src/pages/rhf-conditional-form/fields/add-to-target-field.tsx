import { useController } from "react-hook-form";

import { CheckboxRow } from "../../../ui";
import { FormValues } from "../schema";

export const AddToTargetField = () => {
  const {
    field,
    fieldState: { error },
  } = useController<FormValues, "addToTarget">({
    name: "addToTarget",
  });

  return (
    <CheckboxRow
      label="Add to target"
      checked={field.value}
      onChange={field.onChange}
      onBlur={field.onBlur}
      error={error?.message}
    />
  );
};
