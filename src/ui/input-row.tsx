import { FC } from "react";

export const InputRow: FC<InputRowProps> = ({ label, value, onChange }) => (
  <fieldset>
    <label>{label}</label>
    <div>
      <input
        type="text"
        value={value}
        onChange={({ target }) => onChange(target.value)}
      />
    </div>
  </fieldset>
);

interface InputRowProps {
  label: string;
  value: string;
  onChange(value: string): void;
}
