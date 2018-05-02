import React, { Component } from 'react';
import logo from './logo.svg';
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
            title="Todo app"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
        <p className="App-wrapper">
          <TodoList>
            <TodoListItem />
            <TodoListItem />
          </TodoList>
        </p>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
