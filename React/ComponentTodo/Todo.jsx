import AppName from "./AppName";
import InputTodo from "./InputTodo";
import Task from "./Task";
import Task1 from "./Task1";
import Task2 from "./Task2";
import "./Todo.css";

export default function Todo() {
  let TaskTodo = [
    {
      todoName: "Project 1",
      todoDate: "26-11-2024",
    },
    {
      todoName: "Project 2",
      todoDate: "02-12-2024",
    },
    {
      todoName: "Project 3",
      todoDate: "07-12-2024",
    },
    {
      todoName: "DAA Assignment",
      todoDate: "10-12-2024",
    },
  ];

  return (
    <>
      <center>
        <div className="container">
          <AppName aName="TODO App" />
          <InputTodo />
         
           {TaskTodo.map((item)=>
             <Task key="" todoName={item.todoName} todoDate={item.todoDate} />
          )}

        </div>
      </center>
    </>
  );
}
