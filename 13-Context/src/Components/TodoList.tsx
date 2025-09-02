import useTodos from "../hooks/useTodos";

type Props = {};

function TodoList({}: Props) {
  console.log("Todolist ");
  const { todos, addTodo } = useTodos();
  return (
    <>
      <button
        onClick={() =>
          addTodo({
            id: Math.random(),
            name: "Chanchito feliz",
            completed: false,
          })
        }
      >
        agregar
      </button>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>{t.name}</li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
