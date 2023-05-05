import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpenseForm from './ExpensesForm';

const Expenses = (props) => {
  const addExpenseHandler = (expenseData) => {
    props.onAddExpense(expenseData);
  };

  return (
    <div className="expenses">
      <div>
        <ExpenseForm onAddExpense={addExpenseHandler} />
      </div>
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};

export default Expenses;