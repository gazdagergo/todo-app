import React, { Component } from 'react';
import './App.css';
import TodoList from './todo-list';
import TodoListItem from './todo-list-item';
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
          <p className="App-wrapper">
            <TodoList>
              <TodoListItem />
              <Divider />
              <TodoListItem />
            </TodoList>
          </p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
