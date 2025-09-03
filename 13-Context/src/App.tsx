import Dashboard from "./Components/Dashboard";
import MainContent from "./Components/MainContent";
import TodosProvider from "./providers/TodoProvider";
import UserProvider from "./providers/UserProvider";

function App() {
  console.log("app");
  return (
    <TodosProvider>
      <UserProvider>
        <Dashboard />
        <MainContent />
      </UserProvider>
    </TodosProvider>
  );
}

export default App;
