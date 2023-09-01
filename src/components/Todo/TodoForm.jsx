import { useState } from "react";
import { nanoid } from "nanoid";
import { Button } from "../Common/Button/Button";
import styles from "./TodoForm.module.scss";

/*
  props = {
    textSubmit : string
  }
*/
/*
CC 1 - Form Handle
- ใช้ FN ไปผูกกับ Event ชื่อ onSubmit
- FN จะถูก Browser เรียกใช้ (เมื่อไร??) โดยส่ง parameter มา 1 ตัว (event Object)
- โดย default ทุกปุ่มใน <form> จะทำหน้าที่ submit 
- วิธีแก้** ต้องกำหนด type ของปุ่ม
  - type="submit" /* <button>Cancel</button>
  - type="button" <button type='button'>a</button> ***จะไม่ submit
*/

/*
props = {
  textSubmit : string
  setIsOpenForm : FN
}
*/

function TodoForm(props) {
  const [isError, setIsError] = useState(false);
  const [taskInput, setTaskInput] = useState(""); //รับ user input
  // console.log(taskInput);

  const handleChangeInput = function (event) {
    // console.log("user typing...",event.target.value);
    if (isError) setIsError(false);
    setTaskInput(event.target.value);
  };
  const handleSubmit = function (event) {
    // 1.ProventDefault
    event.preventDefault();

// ### START LOGIC : For CreateTODO ###
    // 2. รู้ก่อนว่า user พิมอะไร? (อยู่ใน state : taskInput)
    //3. FormValadation
    //case 1 : submit ได้ => ไม่ error
    //case 2 : submit ไม่ได้ => แสดง Error
    if (taskInput.trim() === "") {
      // console.log("Error");
      setIsError(true);
      return;
    }
    // console.log("submit");
    // create Newtodo
    // 1. ส่ง Request ไปหลังบ้านเพื่อน save ลง database
    // 2. ทำการอัพเดท State ของ AllTodo == React ทำการ Rerender
    // data = []
    // data = [{id:number, task:string, status:boolean, due_date: YYY-MM-DD}]
    // oldState = [{o},{o},{o}] เอาค่าเก่ามายังไง?  === props.data
    // newState = [{n},{o},{o}},{o}]
    

    
    const newTodo = { 
      id: nanoid(), 
      task: taskInput, 
      status: false, 
      due_date: "2023-01-09" 
    };
    
    // const newTodoLists = [newTodo, ...props.data]  //clone ของเดิมมาก่อน **ความหมาย คือ เอาของใหม่ ตามด้วย ของเก่า
    // END Logic : For CreateTodo

    // Update State
    // props.setTodo((prev) => [newTodo, ...prev]);

    props.addTodo(taskInput)
    props.setIsOpenForm(false)
  };

  const handelCancel = function () {
    // console.log("cancel");
    // correctName : setIsOpenForm(fasle)
    // inCorrectName : undefined(false)
    props.setIsOpenForm(false);
  };
  return (
    <form className={styles.todo__form__container} onSubmit={handleSubmit}>
      {/*	Body */}
      <input
        className={styles.todo__form__input}
        placeholder="Task Name"
        value={taskInput}
        onChange={handleChangeInput}
      />

      {/*Form Footer */}
      <div className={styles.todo__form__footer}>
        {isError ? (
          <p className={styles.todo__error}>Title is required</p>
        ) : null}
        <div className={styles.todo__form__buttons}>
          <Button
            text="Cancel"
            active={false}
            type="button"
            onClick={handelCancel}
          />
          <Button text={props.textSubmit} active={true} type="submit" />

          {/* <button>Cancel</button>
          <button>Add Task</button> */}
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
