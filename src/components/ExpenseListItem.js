import React from 'react';
import { NavLink } from 'react-router-dom';
import EditExpensePage from './EditExpensePage';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <NavLink to={`/edit/${id}`} component={EditExpensePage}>
      <h3>{description}</h3>
    </NavLink>
    <p>{amount} - {createdAt}</p>
  </div>
);

export default ExpenseListItem;