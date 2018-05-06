import React from 'react';
import PropTypes from 'prop-types';
import { RaisedButton } from 'material-ui';

class AddTodo extends React.Component {
  render() {
    return (
      <RaisedButton
        label={ "Új tennivaló" }
        secondary={true}
        className="todo-add-button"
      />
    )
  }
}

export default AddTodo;
