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
  }

  static defaultProps = {
    onRemove: () => { console.info('No remove'); }
  }

  state = {
    value: 'a',
    isChecked: false,
    isEditing: false,
  };

  handleChange = e => {
    this.setState({ value: e.target.value })
  };

  handleCheck = isChecked => {
    this.setState({ isChecked })
  }

  handleRemove = () => {
    this.props.onRemove();
  }

  setEditing = isEditing => {
    this.setState({ isEditing })
  }

  handleSave = () => {
    console.log('saved');
    this.setEditing(false);
  }


  render() {
    return (
      <ListItem
        className="todo-list-item"
        leftCheckbox={ (
          <Checkbox
            onCheck={ (e, c) => this.handleCheck(c) }
            checked={ this.state.isChecked }
          />
        ) }
        rightIconButton={ (
          <IconMenu iconButtonElement={ iconButtonElement }>
          <MenuItem
            onClick={ () => this.setEditing(true) }
          >
            Szerkeszt
          </MenuItem>
          <MenuItem
            onClick={ this.handleRemove }
          >
            Töröl
          </MenuItem>
        </IconMenu>          
        ) }
        style={ { color: this.state.isChecked ? grey400 : 'inherit' } }
      >
        { this.state.value }
        <Dialog
          title="Todo elem szerkesztése"
          actions={[
            <FlatButton
              label="Mégsem"
              onClick={ () => this.setEditing(false) }
            />,
            <FlatButton
              label="Mehet"
              primary
              onClick={ this.handleSave }
            />,
          ]}
          modal={ false }
          open={ this.state.isEditing }
          onRequestClose={ () => this.setEditing(false) }
        >
          <TextField
            className="todo-list-item-modal-textfield"
            defaultValue={ this.state.value }
            onChange={ this.handleChange }
          />
        </Dialog>      
      </ListItem>
    );
  }
}

export default TodoListItem;