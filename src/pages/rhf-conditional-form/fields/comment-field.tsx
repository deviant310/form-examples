import { useController } from "react-hook-form";

import { InputRow } from "../../../ui";
import { FormValues } from "../schema";

export const CommentField = () => {
  const {
    field,
    fieldState: { error },
  } = useController<FormValues, "comment">({
    name: "comment",
    rules: {
      required: "Comment is required",
    },
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
