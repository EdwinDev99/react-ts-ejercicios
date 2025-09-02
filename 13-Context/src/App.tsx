import Dashboard from "./Components/Dashboard";
import MainContent from "./Components/MainContent";
import TodosProvider from "./providers/TodoProvider";

function App() {
  console.log("app");
  return (
    <TodosProvider>
      <Dashboard />
      <MainContent />
    </TodosProvider>
  );
}

export default App;
