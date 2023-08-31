import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";

import TodoForm from "./TodoForm";
import styles from "./TodoCreate.module.scss";

/*
CC1 - Condition Rendering
- Default : show button & Text
- Active : Show TodoForm

*/
/*
CC2 - Event Handing
- เอาฟังชั่นไปผูกติดกับ UI เพื่อให้ USER เป็นคนเรียกใช้ฟังชั่นเอง 
- onClick : ต้อง Click ก่อน , FN ถึงจะรัน
    - User ทำการคลิก 
    - คนที่เรียกใช้ฟังชั่น คือ Browser โดยส่ง parameter มา 1 ตัว 
    // browser โยน event : handleClick(eventObject)
*/
/* 
CC3 - JS Value ไม่สามารถทำให้ React Rerender ได้ 
ต้องใช้ State 
*/

/*
CC4 - React State
function myUseState(){
  return [5,9]
}
let [a,b] = myUseState(5)
a === 5
b === 9
  const [state,setState] = useState(initialState:any) 
*/

/*
CC5 - React State (1 ในฟังชั่นของกลุ่ม React Hook)
const [state,setState] = useState(initialState:any) 
เมื่อ State เปลี่ยน function component จะ Rerender 
Rerender 1 ครั้ง --> code ทั้งหมด ใน FC จะถูกรันใหม่อีก 1 ครั้ง
*/


// #1 : FC = Funtion Component == render
function TodoCreate() {
  // Hook Fn
  const [isOpenForm, setIsOpenForm] = useState(false);
 
  // #2 : JS Function (Logic)
  const handleClick = function () {
    setIsOpenForm(!isOpenForm)

  };
  return (
    <>
      {isOpenForm ? (
        <TodoForm textSubmit="Add Task" setIsOpenForm={setIsOpenForm}/> // ส่ง props ไป 
      ) : (
        <div className={styles.todo__create} onClick={handleClick}>
          <div className={styles.todo__create__button}>
            <HiPlus />
          </div>
          <h3 className={styles.todo__create__text}>Add Task</h3>
        </div>
      )}
    </>
  );
}

export default TodoCreate;
