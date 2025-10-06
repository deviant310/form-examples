import { SelectRow } from "../../../ui";
import { Source, useValidationFormController } from "../provider";

export const SourceField = () => {
  const {
    field: sourceField,
    fieldState: { error },
  } = useValidationFormController({
    name: "source",
  });

  const sourcesOptions: Array<Source> = ["one", "two"];

  return (
    <SelectRow
      label="Source"
      value={sourceField.value}
      onChange={sourceField.onChange}
      options={sourcesOptions}
      onBlur={sourceField.onBlur}
      error={error?.message}
    />
  );
};
