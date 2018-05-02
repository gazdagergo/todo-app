import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  ListItem,
  Checkbox,
  IconButton,
  IconMenu,
  MenuItem,
} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { grey400 } from 'material-ui/styles/colors';


const iconButtonElement = (
  <IconButton
    touch={true}
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Edit</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

class TodoListItem extends React.Component {
  state = {
    value: null
  };

  handleInputChange = e => {
    this.setState({ value: e.target.value })
  };

  render() {
    return (
      <ListItem
        className="todo-list-item"
        leftCheckbox={<Checkbox />}
        rightIconButton={rightIconMenu}
      >
        aaaa
      </ListItem>
    );
  }
}

export default TodoListItem;