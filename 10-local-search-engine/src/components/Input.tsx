type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ onChange }: Props) {
  return (
    <div className="container">
      <div className="col">
        <div className="row">
          <input
            type="text"
            className="form-control m-4"
            placeholder="Esciba un nombre"
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Input;
