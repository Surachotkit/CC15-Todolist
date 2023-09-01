import styles from "./TodoLists.module.scss";
import TodoItem from "./TodoItem";
import { useState } from "react";
/*

data = Array[] <{id:number , task:string , status:boolean, due_date:string}
เปลี่ยน ต้องสร้าง map 
dataRender = Array[]<TodoItem task=... done=... date=... />
*/

function TodoLists(props) {
  // CRUD = Create-Read-Update-Delete จะไม่มีผล
  


  // const dataRender = data.map((todoObj) => (<TodoItem key={todoObj.id} task={todoObj.task} done={todoObj.status} date={todoObj.due_date}/>))
  return (
    <>
      <ul className={styles.todo__lists}>
      {props.data.map((todoObj,index) => (
        <TodoItem
          key={todoObj.id}
          id={todoObj.id}
          index={index}
          task={todoObj.task}
          done={todoObj.status}
          date={todoObj.due_date}
          deleteTodo={props.deleteTodo}
          editTodo={props.editTodo}
          
        />
      ))}
    </ul>
    </>
  );
}

export default TodoLists;
