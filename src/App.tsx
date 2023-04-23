import React from "react";
import Cardholder from "./components/Cardholder/Cardholder";

function App() {
  // const [TODOCards, setTODOCards] = useState([
  //   // { id: 1, title: "Дело 1", description: "Поесть" },
  //   // { id: 2, title: "Дело 2", description: "Попить" },
  //   // { id: 3, title: "Дело 3", description: "Помыть" },
  // ]);

  // const [IPCards, setIPCards] = useState([
  //   // { id: 1, title: "Дело 1", description: "Поесть" },
  //   // { id: 2, title: "Дело 2", description: "Попить" },
  //   // { id: 3, title: "Дело 3", description: "Помыть" },
  // ]);

  // const [testCards, setTestCards] = useState([
  //   // { id: 1, title: "Дело 1", description: "Поесть" },
  //   // { id: 2, title: "Дело 2", description: "Попить" },
  //   // { id: 3, title: "Дело 3", description: "Помыть" },
  // ]);
  // const [doneCards, setDoneCards] = useState([
  //   // { id: 1, title: "Дело 1", description: "Поесть" },
  //   // { id: 2, title: "Дело 2", description: "Попить" },
  //   // { id: 3, title: "Дело 3", description: "Помыть" },
  // ]);

  return (
    <main>
      <Cardholder title="TODO" />
      <Cardholder title="In Progress" />
      <Cardholder title="Testing" />
      <Cardholder title="Done" />
    </main>
  );
}

export default App;
