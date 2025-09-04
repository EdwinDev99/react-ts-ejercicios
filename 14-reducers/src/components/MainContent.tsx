import useTodosStore from "../todos/store";

type Props = {};

function MainContent({}: Props) {
  const { todos, add, destroy } = useTodosStore();
  return (
    <>
      <h1>Hola mundo</h1>
      <button
        onClick={() => {
          const id = Math.random();
          add({ id, name: `hola mundo ${id}` });
        }}
      >
        agregar
      </button>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <button onClick={() => destroy(t.id)}>Eliminar</button>
            {t.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default MainContent;
