import { useReducer } from "react";

type Todo = {
  id: number;
  name: string;
};

type AddAction = {
  type: "ADD";
  todo: Todo;
};

type DeleteAction = {
  type: "DELETE";
  todoId: number;
};

type Action = AddAction | DeleteAction;

const reducer = (todos: Todo[], action: Action) => {
  switch (action.type) {
    case "ADD":
      return [action.todo, ...todos];
    case "DELETE":
      return todos.filter((t) => t.id !== action.todoId);
  }

  return todos;
};

function App() {
  const [todos, dispatch] = useReducer(reducer, []);

  return (
    <>
      <h1>Hola mundo</h1>
      <button
        onClick={() => {
          const id = Math.random();
          dispatch({
            type: "ADD",
            todo: { id, name: `hola mundo ${id}` },
          });
        }}
      >
        agregar
      </button>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <button onClick={() => dispatch({ type: "DELETE", todoId: t.id })}>
              Eliminar
            </button>
            {t.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
