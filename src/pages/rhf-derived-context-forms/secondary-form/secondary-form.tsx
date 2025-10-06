import { AgeField, NameField } from "./fields";
import { useSecondaryForm } from "./provider";

export const SecondaryForm = () => {
  const { handleSubmit } = useSecondaryForm();
  const submit = handleSubmit(data => console.log(data));

  return (
    <div>
      <h3>Secondary Form</h3>

      <NameField />

      <AgeField />

      <div>
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
};
