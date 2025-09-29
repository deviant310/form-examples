import { useForm } from "../provider";

export const SubmitButton = () => {
  const { handleSubmit } = useForm();

  const submit = handleSubmit(data => console.log(data));

  return <button onClick={submit}>Submit</button>;
};
