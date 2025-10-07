import { FC } from "react";

export const InputRow: FC<InputRowProps> = ({
  label,
  value,
  onChange,
  onBlur,
  error,
}) => (
  <fieldset>
    <label>{label}</label>

    <div>
      <input
        type="text"
        value={value}
        onChange={({ target }) => onChange(target.value)}
        onBlur={onBlur}
      />
    </div>

    {error && <p className="error">{error}</p>}
  </fieldset>
);

interface InputRowProps {
  label: string;
  value: string;
  onChange(value: string): void;
  onBlur?(): void;
  error?: string;
}
