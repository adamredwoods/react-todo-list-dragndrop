import React, { Component } from 'react';
import TodoList from './TodoList.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="App">
			<TodoList />
      </main>
    );
  }
}

export default App;
