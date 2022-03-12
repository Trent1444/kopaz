import React from "react";

export default function CreateTask() {
  const selectBody = document.querySelector("body");
  const createTask = () => {
    let taskName = document.createElement("h1");
  };
  return (
    <div>
      <button onClick={createTask}>Create Task</button>
    </div>
  );
}
