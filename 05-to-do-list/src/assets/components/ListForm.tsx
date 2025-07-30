import { useForm } from "react-hook-form";
import type { Task } from "../../schemas/task";

type Props = {
  onSubmit: (task: Task) => void;
};

function ListForm({ onSubmit }: Props) {
  const methods = useForm<Task>();

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Task Title
        </label>
        <input
          {...methods.register("title")}
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Desciption
        </label>
        <textarea
          {...methods.register("description")}
          className="form-control"
          id="description"
        ></textarea>
        <button type="submit" className="btn btn-primary">
          enviar
        </button>
      </div>
    </form>
  );
}

export default ListForm;
