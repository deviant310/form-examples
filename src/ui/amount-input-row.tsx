import { FC } from "react";

export const AmountInputRow: FC<AmountInputRowProps> = ({
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
        type="number"
        value={value ?? ""}
        onChange={({ target }) =>
          onChange(target.value === "" ? null : +target.value)
        }
        onBlur={onBlur}
      />
    </div>

    {error && <p className="error">{error}</p>}
  </fieldset>
);

interface AmountInputRowProps {
  label: string;
  value: number | null;
  onChange(value: number | null): void;
  onBlur?(): void;
  error?: string;
}
