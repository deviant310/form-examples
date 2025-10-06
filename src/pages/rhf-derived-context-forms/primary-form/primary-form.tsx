import { AmountField, LimitTypeField } from "./fields";
import { usePrimaryForm } from "./provider";

export const PrimaryForm = () => {
  const { handleSubmit } = usePrimaryForm();
  const submit = handleSubmit(data => console.log(data));

  return (
    <div>
      <h3>Primary Form</h3>

      <LimitTypeField />

      <AmountField />

      <div>
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
};
