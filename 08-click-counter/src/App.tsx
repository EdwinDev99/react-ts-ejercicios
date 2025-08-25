import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicks: ${count}`;
    console.log(document.title);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        count -- {count}
      </button>
    </div>
  );
}

export default App;
