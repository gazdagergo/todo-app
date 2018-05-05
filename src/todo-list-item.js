import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  ListItem,
  Checkbox,
  IconButton,
  IconMenu,
  MenuItem,
  Dialog,
  FlatButton,
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

class TodoListItem extends React.Component {
  static propTypes = {
    onRemove: PropTypes.func,
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    onUpdate: PropTypes.func.isRequired,
  }

  state = {
    isEditing: false,
    inputValue: null,
  };

  handleChange = e => {
    this.setState({ inputValue: e.target.value })
  };

  startEditing = () => {
    this.setState({
      inputValue: this.props.text,
      isEditing: true,
    })
  }

  stopEditing = () => {
    this.setState({ isEditing: false })
  }

  handleUpdate = () => {
    this.stopEditing();
    this.props.onUpdate(this.state.inputValue)
  }

  render() {
    return (
      <ListItem
        className="todo-list-item"
        leftCheckbox={ (
          <Checkbox
            onCheck={ this.props.onClick }
            checked={ this.props.completed }
          />
        ) }
        rightIconButton={ (
          <IconMenu iconButtonElement={ iconButtonElement }>
            <MenuItem
              onClick={ this.startEditing }
            >
              Szerkeszt
            </MenuItem>
            <MenuItem
              onClick={ this.props.onRemove }
            >
              Töröl
            </MenuItem>          
          </IconMenu>          
        ) }
        style={ { color: this.props.completed ? grey400 : 'inherit' } }
      >
        <div className="todo-list-item-text">
          { this.props.text }
        </div>
        <Dialog
          title="Todo elem szerkesztése"
          actions={[
            <FlatButton
              key="1"
              label="Mégsem"
              onClick={ this.stopEditing }
            />,
            <FlatButton
              key="2"
              label="Mehet"
              primary
              onClick={ this.handleUpdate }
            />,
          ]}
          modal={ false }
          open={ this.state.isEditing }
          onRequestClose={ this.stopEditing }
        >
          <TextField
            className="todo-list-item-modal-textfield"
            defaultValue={ this.props.text }
            onChange={ this.handleChange }
          />
        </Dialog>      
      </ListItem>
    );
  }
}

export default TodoListItem;