import React, { useState } from "react";
import "./css/taskCreate.css";

function TaskCreate({ onCreate, task, taskFormUpdate, onUpdate }) {
    // console.log(task);

    const [title, setTitle] = useState(task ? task.titleVal : " ");
    const [taskDesc, setTaskDesc] = useState(task ? task.taskDescVal : " ");

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleTaskChange = (event) => {
        setTaskDesc(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // submit olunca sayfa yenilenmez

        if (taskFormUpdate) {
            onUpdate(task.id, title, taskDesc);
        } else {
            onCreate(title, taskDesc);
        }

        setTitle("");
        setTaskDesc("");
    };

    return (
        <div>
            {taskFormUpdate ? (
                <div className="taskUpdtContainer">
                    <h3>Task Güncelleme</h3>

                    <form className="taskForm" onSubmit={handleSubmit}>
                        <label>Başlık Güncelleme</label>
                        <input
                            type="text"
                            value={title}
                            onChange={handleChange}
                        />
                        <label>Task Ayrıntı Güncelleme</label>
                        <textarea
                            cols="30"
                            rows="10"
                            value={taskDesc}
                            onChange={handleTaskChange}
                        />
                        <button className="updtBtn" onClick={handleSubmit}>
                            Güncelle
                        </button>
                    </form>
                </div>
            ) : (
                <div className="taskContainer">
                    <h3>Lütfen Task Ekleyiniz</h3>

                    <form className="taskForm" onSubmit={handleSubmit}>
                        <label>Başlık</label>
                        <input
                            type="text"
                            value={title}
                            onChange={handleChange}
                        />
                        <label>Task Giriniz</label>
                        <textarea
                            cols="30"
                            rows="10"
                            value={taskDesc}
                            onChange={handleTaskChange}
                        />
                        <button onClick={handleSubmit}>Oluştur</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default TaskCreate;
