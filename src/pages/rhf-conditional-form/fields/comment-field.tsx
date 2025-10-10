import { InputRow } from "../../../ui";
import { useController } from "../context";

export const CommentField = () => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name: "comment",
  });

  return (
    <InputRow
      label="Comment"
      value={field.value}
      onChange={field.onChange}
      onBlur={field.onBlur}
      error={error?.message}
    />
  );
};
