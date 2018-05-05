import React, { Component } from 'react';
import './App.css';
import TodoList from './todo-list';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar } from 'material-ui';

class App extends Component {
  state = {
    todos: [
      {
        id: 0,
        onRemove: id => {console.log('remove', id)},
        completed: true,
        text: 'waaa',
        onSave: (id, value) => console.log(id, 'new value is', value),
      },
      {
        id: 1,
        onRemove: id => console.log('remove', id),
        completed: false,
        text: 'wooo',
        onSave: (id, value) => console.log(id, 'new value is', value),
      },
    ],
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            className="app-bar"
            title="Tennivalók"
            showMenuIconButton={ false }
          />
          <div className="App-wrapper">
            <TodoList
              todos={ this.state.todos }
            />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
