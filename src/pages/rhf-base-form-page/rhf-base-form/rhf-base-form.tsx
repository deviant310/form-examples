import { useMemo } from "react";
import { useForm } from "react-hook-form";

interface FormValues {
  name: string;
}

/**
 * по умолчанию RHF работает с неконтролируемыми инпутами
 * основные пропсы register - ref, name, onChange
 */
export const RHFBaseForm = () => {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      name: "Anton",
    },
  });

  const submit: SubmitHandler<FormValues> = handleSubmit((data) =>
    console.log(data)
  );

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
