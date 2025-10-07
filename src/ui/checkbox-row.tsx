import { FC } from "react";

export const CheckboxRow: FC<CheckboxRowProps> = ({
  label,
  checked,
  onChange,
  onBlur,
  error,
}) => (
  <fieldset>
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={({ target }) => onChange(target.checked)}
        onBlur={onBlur}
      />{" "}
      <label>{label}</label>
    </div>

    {error && <p className="error">{error}</p>}
  </fieldset>
);

interface CheckboxRowProps {
  label: string;
  checked: boolean;
  onChange(value: boolean): void;
  onBlur?(): void;
  error?: string;
}
