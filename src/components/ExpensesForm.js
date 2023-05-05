import React, { useState } from 'react';
import './ExpensesForm.css';

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  // Функції обробників подій для зміни полів форми
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  // Функція обробник події натискання кнопки "Submit"
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    props.onAddExpense(expenseData);

    // Потім можна очистити поля форми
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div class="elem_location">
        <label class="elem_disaine">Title</label>
        <input type="text" value={title} onChange={titleChangeHandler} />
      </div>
      <div class="elem_location">
        <label class="elem_disaine">Amount</label>
        <input type="number" value={amount} onChange={amountChangeHandler} />
      </div>
      <div class="elem_location1">
        <label class="elem_disaine">Date</label>
        <input type="date" value={date} onChange={dateChangeHandler} />
      </div>
      <button class = "form_button" type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;