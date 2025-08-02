import { useFormContext } from "react-hook-form";

type Props = {
  options: readonly string[];
  defaultMessage: string;
  label: string;
  name: string;
};

function Select({ options, defaultMessage, label, name }: Props) {
  const { register, formState, getFieldState } = useFormContext();
  const { error } = getFieldState(name, formState);
  return (
    <div>
      <label htmlFor="category" className="form-label">
        {label}
      </label>
      <select
        {...register(name)}
        className="form-select mb-5"
        aria-label="Default select example"
      >
        <option>{defaultMessage}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error?.message && <p className="text-danger mt-1">{error.message}</p>}
    </div>
  );
}

export default Select;
