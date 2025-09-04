import MainContent from "./components/MainContent";
import { TodosProvider } from "./todos";

function App() {
  return (
    <TodosProvider>
      <MainContent />
    </TodosProvider>
  );
}

export default App;
