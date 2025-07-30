import type { Task } from "../../schemas/task";

type Props = {
  tasks: Task[];
  onClick: (id: string) => void;
};

function ToDoList({ tasks, onClick }: Props) {
  return (
    <ul className="list-group">
      {tasks.map((t) => (
        <li key={t.id} className="list-group-item">
          <h4>{t.title}</h4>
          <p>{t.description}</p>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => onClick(t.id)}
          >
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
