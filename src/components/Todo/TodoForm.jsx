import { useState } from 'react';
import {Button} from '../Common/Button/Button'
import styles from './TodoForm.module.scss';
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

function TodoForm(props) {
  const [isError,setIsError] = useState(true)

  const handleSubmit = function (event){
    event.preventDefault()
    console.log("submit");
  }

  const handelCancel = function (){
    console.log('cancel');
  }
  return (
    <form className={styles.todo__form__container} onSubmit={handleSubmit}>
      {/*	Body */}
      <input className={styles.todo__form__input} placeholder='Task Name' />

      {/*Form Footer */}
      <div className={styles.todo__form__footer}>
        {isError ? <p className={styles.todo__error}>Title is required</p> : null}
        <div className={styles.todo__form__buttons}>
          <Button text='Cancel' active={false} type="button" onClick={handelCancel}/>
          <Button text={props.textSubmit} active={true} type="submit"/>
          {/* <button type='button' onClick={handelCancel}>POC</button> */}


          {/* <button>Cancel</button>
          <button>Add Task</button> */}
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
