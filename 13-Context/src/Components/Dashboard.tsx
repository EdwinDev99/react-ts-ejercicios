import useTodos from "../hooks/useTodos";

type Props = {};

function Dashboard({}: Props) {
  console.log("dashboard");
  const { todos } = useTodos();
  return <div>{todos.length}</div>;
}

export default Dashboard;
