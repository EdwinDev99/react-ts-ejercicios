import { useTodos } from "../todos";

type Props = {};

function MainContent({}: Props) {
  const { todos, dispatch } = useTodos();
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

export default MainContent;
