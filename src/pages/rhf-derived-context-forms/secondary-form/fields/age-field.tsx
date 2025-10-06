import { AmountInputRow } from "../../../../ui";
import { useSecondaryFormController } from "../provider";

export const AgeField = () => {
  const { field } = useSecondaryFormController({ name: "age" });

  console.log("render age field");

  return (
    <AmountInputRow label="Age" value={field.value} onChange={field.onChange} />
  );
};
