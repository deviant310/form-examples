import { Ref } from "react";

export function SelectRow<Value>(props: SelectRowProps<Value>) {
  const { label, value, onChange, options, onBlur, error, ref } = props;
  const safeValue = value ? `${value}` : "";

  return (
    <fieldset>
      <label>{label}</label>

      <div>
        <select
          ref={ref}
          value={safeValue}
          onChange={({ target }) =>
            onChange(target.value === "" ? null : (target.value as Value))
          }
          onBlur={onBlur}
        >
          <option value="">--</option>

          {options.map(option => (
            <option key={`${option}`} id={`${option}`}>
              {`${option}`}
            </option>
          ))}
        </select>
      </div>

      {error && <p className="error">{error}</p>}
    </fieldset>
  );
}

interface SelectRowProps<Value> {
  label: string;
  value: Value | null;
  onChange(value: Value | null): void;
  options: Value[];
  onBlur?(): void;
  error?: string;
  ref?: Ref<HTMLSelectElement>;
}
