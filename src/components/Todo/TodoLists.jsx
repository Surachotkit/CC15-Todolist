import styles from "./TodoLists.module.scss";
import TodoItem from "./TodoItem";
import { useState } from "react";
/*

data = Array[] <{id:number , task:string , status:boolean, due_date:string}
เปลี่ยน ต้องสร้าง map 
dataRender = Array[]<TodoItem task=... done=... date=... />
*/
const data = [
  { "id": 1, "task": "Suspendisse potenti.", "status": false, "due_date": "2023-04-26" },
  {
      "id": 2,
      "task": "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      "status": false,
      "due_date": "2023-05-08"
  },
  {
      "id": 3,
      "task": "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
      "status": false,
      "due_date": "2023-04-30"
  },
]
function TodoLists() {
  // CRUD = Create-Read-Update-Delete จะไม่มีผล
  const [allTodos,setAllTodos] = useState(data)
  // ค่าที่ต้อง map คือ state 

  const dataRender = data.map((todoObj) => (<TodoItem key={todoObj.id} task={todoObj.task} done={todoObj.status} date={todoObj.due_date}/>))
  return (
    <>
      <ul className={styles.todo__lists}>
        {/* hard code */}
        {/* <TodoItem task="DoHW" done={true} date="31 Aug"/>
        <TodoItem task="Drink" done={false} date="1 Sep"/> */}
        {dataRender}
      </ul>
    </>
  );
}

export default TodoLists;
