import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const INITIAL_EXPENSES = [
  {
    id: 'el1',
    title: 'Car Insurance',
    amount: 421.53,
    date: new Date(2021, 12, 2),
  },
  {
    id: 'el2',
    title: 'Car Insurance 2',
    amount: 21.44,
    date: new Date(2022, 10, 12),
  },
  {
    id: 'el3',
    title: 'Car Insurance 3',
    amount: 46.83,
    date: new Date(2020, 9, 22),
  },
  {
    id: 'el4',
    title: 'Car Insurance 4',
    amount: 500.75,
    date: new Date(2019, 6, 27),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
