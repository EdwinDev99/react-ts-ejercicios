import TodoList from "./TodoList";

type Props = {};

function MainContent({}: Props) {
  console.log("mainContect");
  return (
    <div>
      <h2>Todos</h2>
      <TodoList />
    </div>
  );
}

export default MainContent;
