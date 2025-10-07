import { useController } from "react-hook-form";

import { SelectRow } from "../../../ui";
import { FormValues } from "../schema";

const fraudTypologiesOptions: Array<string> = ["Crypto", "Other"];

export const FraudTypologyField = () => {
  const {
    field,
    fieldState: { error },
  } = useController<FormValues, "fraudTypology">({
    name: "fraudTypology",
  });

  return (
    <SelectRow
      ref={field.ref}
      label="Fraud typology"
      value={field.value}
      onChange={field.onChange}
      options={fraudTypologiesOptions}
      onBlur={field.onBlur}
      error={error?.message}
    />
  );
};
