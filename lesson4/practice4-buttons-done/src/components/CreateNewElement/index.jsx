import { useState } from "react";
import React from "react";

import "./style.scss";

const CreateNewElement = (props) => {
  const [taskValue, setTaskValue] = useState('');

  const changeTaskValue = (e) => {
    setTaskValue(e.target.value);
  }

  const onAddedTask = (e) => {
    e.preventDefault();
    props.onAdded(taskValue);
    setTaskValue('');
  }

  return (
    <form className="new-task">
      <input
        type="text"
        id="new-task-input"
        placeholder="Write down a new task..."
        onChange={changeTaskValue}
        value={taskValue}
      />
      <button onClick={onAddedTask} id="new-task-button">Add</button>
    </form>
  );
};

export default CreateNewElement;
