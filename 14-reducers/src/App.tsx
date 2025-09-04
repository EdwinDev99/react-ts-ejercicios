import MainContent from "./components/MainContent";
import TodosProvider from "./providers/TodosProvider";

function App() {
  return (
    <TodosProvider>
      <MainContent />
    </TodosProvider>
  );
}

export default App;
