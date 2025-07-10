import { useState, type ChangeEvent } from "react";
import Button from "./Button";

type Props = {
  onAddTask: (task: string) => void;
};

function Input({ onAddTask }: Props) {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const getValue = () => {
    onAddTask(value);
    setValue("");
  };

  return (
    <>
      <h1>To-do</h1>
      <div className="form-floating mb-3" style={{ width: "550px" }}>
        <input
          value={value}
          onChange={handleChange}
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Task"
        ></input>
        <label htmlFor="floatingInput">To-do</label>
      </div>
      <Button onClick={getValue}>Agregar </Button>
    </>
  );
}

export default Input;
