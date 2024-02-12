import React from "react";
import TaskShow from "./TaskShow";
import "./css/taskList.css";

function TaskList({ tasksSend, onDelete, onUpdate }) {
    return (
        <div className="taskListContainer">
            {tasksSend.map((task, index) => {
                return (
                    <TaskShow
                        task={task}
                        key={index}
                        onDelete={onDelete}
                        onUpdate={onUpdate}
                    />
                );
            })}
        </div>
    );
}

export default TaskList;
