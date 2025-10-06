import { useFormContext } from "react-hook-form";

export const SubmitButton = () => {
  const { handleSubmit } = useFormContext();

  const submit = handleSubmit(data => console.log(data));

  return <button onClick={submit}>Submit</button>;
};
