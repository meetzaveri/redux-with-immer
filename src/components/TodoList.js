import React from 'react';
import {useImmer} from "use-immer";

const TodoList = () => {

  const [todo,setTodo] = useImmer({
    value:''
  });

  const [todos,updateTodos] = useImmer([]);

  const onChangeHandler = (e) => {
    const value = e.target.value
    setTodo(draft => {
      draft.value  =  value
    })
  }

  const addTodo = () => {

    // update array with a breeze by just performing push operation
    updateTodos(draft => {
      draft.push(todo.value)
    })

    // clear todo
    setTodo(draft => {
      draft.value  =  ''
    })
  }

  const renderLists = () => {
    const list = todos.map((item,index) => <React.Fragment key={index}>
      <li> {item} </li>
    </React.Fragment>);
    return list
  }

  return (<>
   <h2>Todo</h2>
   <div> 
    <input type="text" placeholder="Enter todo title" name="todo" value={todo.value} onChange={onChangeHandler}
    
     />
     <button onClick={addTodo}> Add </button>
   </div>
   <ul>{renderLists()}</ul>
  </>)
}

export default TodoList