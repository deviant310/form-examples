import { InputRow } from "../../../ui";
import { useController } from "../context";

export const ReasonField = () => {
  const {
    field,
    fieldState: { error },
  } = useController({
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
