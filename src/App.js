import "./App.css";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car insurance",
      amount: 280,
      date: new Date(2023, 2, 3),
    },
    {
      id: "e2",
      title: "Bike insurance",
      amount: 280,
      date: new Date(2023, 2, 3),
    },
    {
      id: "e3",
      title: "Life insurance",
      amount: 280,
      date: new Date(2023, 2, 3),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
