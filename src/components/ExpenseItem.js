import React from 'react';

function ExpenseItem(props) {
  return (
    <div className="card expense-item">
      <div className="expense-date">
        <div className="expense-date__month">
          {props.date.toLocaleString('en-US', { month: 'long' })}
        </div>
        <div className="expense-date__year">
          {props.date.getFullYear()}
        </div>
        <div className="expense-date__day">
          {props.date.toLocaleString('en-US', { day: '2-digit' })}
        </div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
