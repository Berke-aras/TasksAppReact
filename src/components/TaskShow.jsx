import React, { useState } from "react";
import "./css/taskShow.css";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete, onUpdate }) {
    // console.log(task);

    const [showEdit, setShowEdit] = useState(false);

    const handleDelete = () => {
        onDelete(task.id); // buradan Taskliste oradan app.jsx e gidiyor
    };

    const handleEditClick = () => {
        setShowEdit(true); // true çevirme !showEdit de yazılabilir
    };

    const handleSubmit = (id, updatedTitle, updatedTitleDesc) => {
        setShowEdit(false);
        onUpdate(id, updatedTitle, updatedTitleDesc);
    };

    return (
        <div className="taskShowContainer">
            {showEdit ? (
                <TaskCreate
                    task={task}
                    taskFormUpdate={true}
                    onUpdate={handleSubmit}
                />
            ) : (
                <div>
                    <h3>Göreviniz</h3>
                    <p>{task.titleVal}</p>
                    <h3>Yaılacaklar</h3>
                    <p>{task.taskDescVal}</p>
                    <div>
                        <button
                            onClick={handleDelete}
                            className="taskBtn btnDel"
                        >
                            Sil
                        </button>

                        <button
                            onClick={handleEditClick}
                            className="taskBtn btnUpdt"
                        >
                            Güncelle
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TaskShow;
