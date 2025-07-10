import React from "react";
function TodoList({todos, onComplete}){
    return(
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.title} - {todo.completed ? (<span style={{color:"green"}}>Completed</span>) : (
                        <button onClick={() => onComplete(todo.id)}>Complete</button>
                    )}
                </li>
            ))}
        </ul>
    );
}
export default TodoList;