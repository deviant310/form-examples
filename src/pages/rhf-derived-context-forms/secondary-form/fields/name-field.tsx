import { InputRow } from "../../../../ui";
import { useSecondaryFormController } from "../secondary-form";

export const NameField = () => {
  const { field } = useSecondaryFormController({ name: "name" });

  console.log("render name field");

  return (
    <InputRow label="Name" value={field.value} onChange={field.onChange} />
  );
};
