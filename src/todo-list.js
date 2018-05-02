import React from 'react';
import PropTypes from 'prop-types';
import { List, Card } from 'material-ui';


const TodoList = ({ children }) => (
  <Card className="todo-list">
    <List>
      { children }
    </List>
  </Card>
)

TodoList.PropTypes = {
  children: PropTypes.node,
};

export default TodoList;
