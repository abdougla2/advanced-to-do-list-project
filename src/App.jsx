import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [currentList, setCurrentList] = useState("Current List:")
  const addlistRef = useRef();
  const [todoList, setTodoList] = useState([
    <button onClick = {function () {
      setCurrentList("Current List: List One");
    }}>List one</button>,
    <button onClick = {function () {
      setCurrentList("Current List: List Two");
    }}>List two</button>,
    <button onClick = {function () {
      setCurrentList("Current List: List Three");
    }}>List Three</button>,
    <button onClick = {function () {
      setCurrentList("Current List: List Four");
    }}>List Four</button>,
  ]);
  return (
    <div className="App">
      <h1>Todo List Application</h1>
      <div className="actions">
        {currentList}
        <br></br>
        <input type="text" ref = {addlistRef}/>
        <button>Add Todo</button>
        <button onClick={function (){
          setTodoList([...todoList, <button>{addlistRef.current.value}</button>])
        }}>Add List</button>
      </div>
      <h3>Todo Lists</h3>
      <ul>
        {
          todoList.map(function (value, index){
            return <li>{ value }</li>
          })
        }
        </ul>
  
    </div>
  )
}

export default App
