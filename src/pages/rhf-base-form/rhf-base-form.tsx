import { useForm } from "react-hook-form";

import { PageLayout } from "../../layouts";

interface FormValues {
  name: string;
}

/**
 * по умолчанию RHF работает с неконтролируемыми инпутами
 * основные пропсы register - ref, name, onChange
 */
const RHFBaseForm = () => {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      name: "Anton",
    },
  });

  const submit = handleSubmit(data => console.log(data));

  //const { ref, name, defaultValue, onChange } = register("name");

  console.log("render");

  return (
    <div>
      <fieldset>
        <label>Name:</label>
        <input {...register("name")} />
      </fieldset>

      <div>
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
};

export const RHFBaseFormPage = () => (
  <PageLayout>
    <h1>React Hook Form</h1>
    <div className="rhf-form">
      <h2>Base form example (uncontrolled inputs)</h2>
      <RHFBaseForm />
    </div>
  </PageLayout>
);
