import ExpressItem from "./Components/ExpressItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car",
      amount: "34.89",
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: "34.89",
      date: new Date(2021, 8, 14),
    },
    {
      id: "e3",
      title: "Toilet Paper",
      amount: "34.89",
      date: new Date(2021, 2, 18),
    },
    {
      id: "e4",
      title: "Car Log",
      amount: "34.89",
      date: new Date(2020, 7, 14),
    },
  ];
  return (
    <div>
      <ExpressItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpressItem>
      <ExpressItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpressItem>
      <ExpressItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpressItem>
      <ExpressItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[0].date}
      ></ExpressItem>
    </div>
  );
}

export default App;
