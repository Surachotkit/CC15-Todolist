// Dependencies
import "./App.scss";
import { useState } from "react";
import { nanoid } from "nanoid";
import dayjs from "dayjs";
import AppBar from "../components/Common/AppBar/AppBar";
import SideBar from "../components/SideBar/SideBar";
import TodoHeader from "../components/Todo/TodoHeader";
import TodoCreate from "../components/Todo/TodoCreate";
import TodoLists from "../components/Todo/TodoLists";

const data = [
  {
    id: 1,
    task: "Suspendisse potenti.",
    status: false,
    due_date: "2023-04-26",
  },
  {
    id: 2,
    task: "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    status: false,
    due_date: "2023-05-08",
  },
  {
    id: 3,
    task: "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    status: false,
    due_date: "2023-04-30",
  },
];

function App() {
  const [allTodos, setAllTodos] = useState(data);
  console.log(dayjs().format("YYYY-MM-DD"));

  //add
  const addTodo = function (taskName) {
    const newTodo = {
      id: nanoid(),
      task: taskName,
      status: false,
      due_date: dayjs().format("YYYY-MM-DD"),
    };
    setAllTodos((p) => [newTodo, ...p]);
  };
  //delete
  const deleteTodo = function (todoId) {
    console.log(todoId);
        // Practice # 1
    // let foundedIndex = allTodos.findIndex((todo) => todo.id === todoId);
    // if (foundedIndex !== -1) {
    //   const newTodoLists = [...allTodos];
    //   newTodoLists.splice(foundedIndex, 1);
    //   setAllTodos(newTodoLists);
    // }

    // Practice # 2
    // const newTodoLists = allTodos.filter((todo) => todo.id !== todoId);
    // setAllTodos(newTodoLists);

    // Practice # 3
    // setAllTodos((prev) => prev.filter((todo) => todo.id !== todoId));

    allTodos.splice(todoId, 1); // ลบตัวที่ 1 ตาม index
    setAllTodos([...allTodos]); // clone ล่าสุดมา
  };
  // edit
  const editTodo = function (todoId,newTodoObj) {
    // console.log(todoId,newTodoObj);

    //#1 Practice  **หาของ
    // let foundedTodo = allTodos.find(todo => todo.id === todoId)
    // if(!foundedTodo) return;
    // // สร้าง obj ขวาทับซ้าย **merge
    // const newTodo = Object.assign({},foundedTodo,newTodoObj)
    // // หา index
    // let foundIndex = allTodos.findIndex((todo) => todo.id === todoId)
    // if(foundIndex === -1) return;  // ถ้า = -1 ไม่แก้ไขอะไร
    // // สร้างเดิม เอาอันเก่าทิ้ง เอาอันใหม่มาแทน
    // const newTodoLists = [...allTodos]
    // newTodoLists.splice(foundIndex,1,newTodo)
    // setAllTodos(newTodoLists)

    // #2 Practice #2
    // const newTodoLists = allTodos.map(function(todo){
    //   if(todo.id !== todoId){// ถ้า id ตัวไหน ไม่เท่ากับ ตัวที่จะแก้
    //     return todo
    //   } else
    //     return {...todo, ...newTodoObj}  // แต่ถ้าใช่ให้ clone todo สองตัวนี้ merge เข้าด้วยกัน 
        
    //   })
    //   setAllTodos(newTodoLists)

     // #Practice 3
     const newTodoLists = allTodos.reduce((acc, todo) => {
      if (todo.id !== todoId) acc.push(todo); // ถ้า id ตัวไหน ไม่เท่ากับ ตัวที่จะแก้
      else acc.push({ ...todo, ...newTodoObj }); // แต่ถ้าใช่ให้ clone todo สองตัวนี้ merge เข้าด้วยกัน 
      return acc;
    }, []);
  }
  return (
    <div className="todo">
      <div className="todo__header">
        <AppBar />
      </div>
      <div className="todo__sidebar">
        <SideBar />
      </div>
      <div className="todo__content">
        <main className="todo__container">
          <TodoHeader />
          <TodoCreate
            // data={allTodos}
            // setTodo={setAllTodos}
            addTodo={addTodo}
          />
          <TodoLists 
          data={allTodos} 
          deleteTodo={deleteTodo}
          editTodo={editTodo} />
        </main>
      </div>
    </div>
  );
}

export default App;
