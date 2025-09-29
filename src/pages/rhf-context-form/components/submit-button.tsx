import { useFormContext } from "react-hook-form";

import { FormValues } from "../types";

export const SubmitButton = () => {
  const { handleSubmit } = useFormContext<FormValues>();

  const submit = handleSubmit(data => console.log(data));

  return <button onClick={submit}>Submit</button>;
};
