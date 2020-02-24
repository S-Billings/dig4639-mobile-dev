import React from 'react';
import logo from './logo.svg';
import './App.css';

const todoList1 = [
  //alt+shift+directonKeys
  {completed: true, priority: 1, content:'complete demo'}
  {completed: true, priority: 2, content:'complete demo 2'}
  {completed: true, priority: 1, content:'complete demo 3'}
  {completed: true, priority: 2, content:'complete demo 4'}
  {completed: false, priority: 3, content:'complete demo 5'}
]
function TodoItems(props){
return <p>{props.content}</p>
}

function App() {
  let array = todoList1.map((value)=>
  <TodoItem content={value.content}/>)

  return (
      array
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
