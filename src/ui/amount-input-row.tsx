import { FC } from "react";

export const AmountInputRow: FC<AmountInputRowProps> = ({
  label,
  value,
  onChange,
}) => (
  <fieldset>
    <label>{label}</label>
    <div>
      <input
        type="number"
        value={value}
        onChange={({ target }) => onChange(+target.value)}
      />
    </div>
  </fieldset>
);

interface AmountInputRowProps {
  label: string;
  value: number;
  onChange(value: number): void;
}
