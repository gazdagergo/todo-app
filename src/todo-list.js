import React from 'react';
import PropTypes from 'prop-types';
import { List, Card } from 'material-ui';
import TodoListItem from './todo-list-item';

const TodoList = ({todos, toggleTodo}) => (
  <Card className="todo-list">
    <List>
      {todos.map(todo =>
        <TodoListItem
          key={todo.id}
          {...todo}
          onClick={isChecked => toggleTodo(todo.id, isChecked)}
        />
      )}
    </List>
  </Card>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    onRemove: PropTypes.func,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired,
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList;
