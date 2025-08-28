type Props = {
  onChange: (value: string) => void;
  value: string;
};

function Input({ value, onChange }: Props) {
  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Buscar
        </label>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type="text"
          className="form-control"
        />
      </div>
    </div>
  );
}

export default Input;
