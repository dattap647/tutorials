import React from "react";
import Button from "./Button";
import { customButtonStyle, taskStyles } from "../Styles/styles";

const Task = (props) => {
  const { task, index, completeTask, removeTask } = props;
  return (
    <div
      style={{
        ...taskStyles,
        textDecoration: task.completed ? "line-through" : "none",
        opacityacity: task.completed ? 0.5 : 1,
      }}
    >
      {task.text}
      <div className="">
        <Button
          text={task.completed ? "Undo" : "Done"}
          handleOnClick={() => completeTask(index)}
          ownStyle={customButtonStyle}
        />
        <Button
          text={"Remove"}
          handleOnClick={() => removeTask(index)}
          ownStyle={customButtonStyle}
        />
      </div>
    </div>
  );
};

export default Task;
