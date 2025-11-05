type Props = {
  name: string;
  done: boolean;
  onToggle: () => void;
  onDelete: () => void;
  onStartEdit: () => void;
};

function TaskItem({ name, onDelete, onToggle, done, onStartEdit }: Props) {
  return (
    <li style={{ color: done ? "green" : "red" }}>
      {name}
      <button onClick={onToggle}>{done ? " not done" : "done"}</button>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onStartEdit}>Edit</button>
    </li>
  );
}

export default TaskItem;
