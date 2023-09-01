import styles from "./TodoItem.module.scss";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { HiOutlineCheck } from "react-icons/hi";
import { useState } from "react";
import TodoForm from "./TodoForm";

function TodoItem({ id,index,task, done, date,deleteTodo ,editTodo}) {
    // Object Destucturing (Props)
  

  const [isOpenForm, setIsOpenForm] = useState(false);
  console.log(id);
  const handleClick = function (event) {
    setIsOpenForm(!isOpenForm);
  };

  const toggleStatus = () =>{
    const newTodoObj = {id,index,task, date,status: !done}
    editTodo(id, newTodoObj)
    // console.log(newTodoObj);
    // props.editTodo(id.newTodoObj)
  }
  return (
    <>
      {isOpenForm ? (
        <TodoForm textSubmit="Edit Task" setIsOpenForm={setIsOpenForm} editTodo={editTodo} oldTodo={{id,task, done, date}} />
      ) : (
        <li className={styles.todo}>
          <div
            className={`${ styles.todo__checkbox } ${done ? styles.todo__checkbox__done : ''}`}
          >
            <HiOutlineCheck className={styles.todo__checkbox__icon} onClick={toggleStatus}/>
          </div>
          <p className={`${styles.todo__task} ${done ? styles.todo__task__done : ''}`}>
            {task}
          </p>
          <span className={styles.todo__date}>{date}</span>
          <div className={styles.todo__action}>
            {/* ลบ ตามเลข id */}
            <span > 
              <FaPen className={styles.todo__edit} onClick={handleClick} />
            </span>
            <span onClick={() => deleteTodo(index)}>
              <FaTrashAlt className={styles.todo__delete} />
            </span>
          </div>
        </li>
      )}
    </>
  );
}

export default TodoItem;
