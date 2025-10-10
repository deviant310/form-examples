import { CheckboxRow } from "../../../ui";
import { useController } from "../context";

export const AddToTargetField = () => {
  const {
    field,
    fieldState: { error },
  } = useController({
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
