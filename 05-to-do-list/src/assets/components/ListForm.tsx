import { FormProvider, useForm } from "react-hook-form";
import { taskSchema, type Task } from "../../schemas/task";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {
  onSubmit: (task: Task) => void;
};

function ListForm({ onSubmit }: Props) {
  const methods = useForm<Task>({
    resolver: zodResolver(taskSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Task Title
          </label>
          <input
            {...register("title")}
            type="text"
            className={`form-control ${errors.title ? "is-invalid" : ""}`}
            id="title"
          />
          {errors.title && (
            <p className="text-danger">{errors.title.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            {...register("description")}
            className={`form-control ${errors.description ? "is-invalid" : ""}`}
            id="description"
          ></textarea>
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </FormProvider>
  );
}

export default ListForm;
