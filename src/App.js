import React, { Component } from 'react';
import './App.css';
import TodoList from './todo-list';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, Divider } from 'material-ui';

class App extends Component {
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
              todos={ todos }
              toggleTodo={ toggleTodo }
            />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
