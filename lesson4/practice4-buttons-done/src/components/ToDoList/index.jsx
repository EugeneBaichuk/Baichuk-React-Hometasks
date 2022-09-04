import React from "react";
import { ToDoListItem } from "../ToDoListItem";

import "./style.scss";

const ToDoList = (props) => {
  console.log(props);
    const todoElements = props.todoItems.map(item => {
        return <ToDoListItem 
        {...item} 
        onDelete={() => {props.onDelete(item.id)}} 
        onImportant={() => props.onImportant(item.id)} 
        onToggle={()=>{props.onToggle(item.id)}}/*{...item}*/ 
        key={item.id} />
    })



    return (
      <section>
        {todoElements}
        {/* <ToDoListItem text={'Task 1'} />
        <ToDoListItem text={'Task 2'} />
        <ToDoListItem text={'Task 3'} /> */}

      </section>
    )
  };
  
  export default ToDoList;