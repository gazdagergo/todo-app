import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { toggleTodo } from "./actions";
import { List, Card, Divider } from 'material-ui';
import TodoListItem from './todo-list-item';

const TodoList = ({todos, toggleTodo}) => (
  <Card className="todo-list">
    <List>
      {todos.map((todo, i) =>
        <Fragment key={todo.id}>
          <TodoListItem
            {...todo}
            onClick={isChecked => toggleTodo(todo.id, isChecked)}
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
    onRemove: PropTypes.func,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired,
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
