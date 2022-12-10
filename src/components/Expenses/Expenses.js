import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import { useState } from 'react';
const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterYearHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(
    item => item.date.getFullYear().toString() === filteredYear
  );
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedFilter={filteredYear}
          onChangeYear={filterYearHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};
export default Expenses;
