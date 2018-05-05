import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { toggleTodo, saveTodo } from "./actions";
import { List, Card, Divider } from 'material-ui';
import TodoListItem from './todo-list-item';

const TodoList = ({todos, toggleTodo, saveTodo}) => (
  <Card className="todo-list">
    <List>
      {todos.map((todo, i) =>
        <Fragment key={todo.id}>
          <TodoListItem
            {...todo}
            onClick={isChecked => toggleTodo(todo.id, isChecked)}
            onSave={text => saveTodo(todo.id, text)}
            onRemove={() => {}}
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
  toggleTodo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: (id, isChecked) => dispatch(toggleTodo(id, isChecked)),
  saveTodo: (id, newValue) => dispatch(saveTodo(id, newValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
