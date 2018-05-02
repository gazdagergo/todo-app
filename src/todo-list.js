import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ children }) => (
  <div className="todo-list">
    { children }
  </div>
)

TodoList.PropTypes = {
  children: PropTypes.node,
};

export default TodoList;
