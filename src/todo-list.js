import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { toggleTodo, updateTodo, removeTodo } from "./actions";
import { List, Card, Divider } from 'material-ui';
import TodoListItem from './todo-list-item';

const TodoList = ({todos, toggleTodo, updateTodo, removeTodo}) => (
  <Card className="todo-list">
    <List>
      {todos.map((todo, i) =>
        <Fragment key={todo.id}>
          <TodoListItem
            {...todo}
            onClick={() => toggleTodo(todo.id)}
            onUpdate={text => updateTodo(todo.id, text)}
            onRemove={() => removeTodo(todo.id)}
          />
          { todos.length > i + 1 && <Divider /> }
        </Fragment>
      )}
    </List>
  </Card>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  updateTodo: (id, text) => dispatch(updateTodo(id, text)),
  removeTodo: id => dispatch(removeTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
