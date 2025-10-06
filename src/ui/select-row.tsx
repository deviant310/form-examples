export function SelectRow<Value>({
  label,
  value,
  onChange,
  options,
  onBlur,
  error,
}: InputRowProps<Value>) {
  return (
    <fieldset>
      <label>{label}</label>

      <div>
        <select
          value={`${value}`}
          onChange={({ target }) =>
            onChange(target.value === "null" ? null : (target.value as Value))
          }
          onBlur={onBlur}
        >
          <option value="null">--</option>

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

interface InputRowProps<Value> {
  label: string;
  value: Value | null;
  onChange(value: Value | null): void;
  options: Value[];
  onBlur?(): void;
  error?: string;
}
