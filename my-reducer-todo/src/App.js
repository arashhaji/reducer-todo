import React, { useState, useReducer } from 'react';
import './App.css';

// importing todo components
import TodoForm from './componets/TodoForm';
import TodoList from './componets/TodoList';

// import initialState and reducer from todoReducer
import { initialState, reducer } from './reducer/reducer';

function App() {
  // setting up useReducer hook
  const [state, dispatch ] = useReducer(reducer, initialState);
  // setting up the useState
  const [input, setInput] = useState();

  // checking what is in the state
  // console.log(state)

  const handleChanges = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput('')
  }

  return (
    <div className="App">
      <h1>Reducer Todo</h1>
      <TodoForm state={state} input={input} handleChanges={handleChanges} dispatch={dispatch} handleSubmit={handleSubmit} />
      <TodoList state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;