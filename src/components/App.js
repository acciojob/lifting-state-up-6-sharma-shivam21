import React,{useState} from "react";
import TodoList from "./TodoList";

function App() {
  const[todos, setTodos] = useState([
    {
    id:1, title:"React sikha hai", completed:false
  },
   {
    id:2, title:"React App banaya hai", completed:false
  },
   {
    id:3, title:"React 3D model banaya hai", completed:false
  }
]);
const handleComplete = (id) => {
  const updatedTodos = todos.map(todo => todo.id === id ? {...todo, completed:true}: todo);
  setTodos(updatedTodos);
};
return(
  <div>
    <h1>Todo List</h1>
    <TodoList todos={todos} onComplete={handleComplete}/>
  </div>
);
}
export default App;