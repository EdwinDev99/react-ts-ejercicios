import Button from "./Button";

type Props = {
  data: string[];
  onRemoveTask: (task: string) => void;
};

function List({ data, onRemoveTask }: Props) {
  return (
    <ul className="list-group">
      {data.map((task) => (
        <li key={task} className="list-group-item">
          {task}
          <Button onClick={() => onRemoveTask(task)}>Done</Button>
        </li>
      ))}
    </ul>
  );
}

export default List;
