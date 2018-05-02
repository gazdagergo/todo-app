import React from 'react';
import PropTypes from 'prop-types';

class TodoListItem extends React.Component {
  state = {
    value: null
  };

  handleInputChange = e => {
    this.setState({ value: e.target.value })
  };

  render() {
    return (
      <div className="todo-list-item">
        <input onChange={ this.handleInputChange } />
      </div>
    );
  }
}

export default TodoListItem;