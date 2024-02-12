import { useEffect, useState } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import axios from "axios";

function App() {
    const [tasks, setTasks] = useState([]);

    const createTask = async (title, taskDesc) => {
        // console.log(title, taskDesc);

        const response = await axios.post("http://localhost:3000/tasks", {
            titleVal: title,
            taskDescVal: taskDesc,
        });

        // console.log(response);

        const createdTasks = [...tasks, response.data]; // eski array üstüne yeni ekleme

        setTasks(createdTasks);
    };

    const fetchTask = async () => {
        const response = await axios.get("http://localhost:3000/tasks");
        setTasks(response.data);
    };

    useEffect(() => {
        fetchTask();
    }, []); // birden çok kez render olması için parentezi kaldır

    const DeleteTaskByID = async (id) => {
        // console.log(id);
        await axios.delete(`http://localhost:3000/tasks/${id}`);

        const afterDelTasks = tasks.filter((task) => {
            return task.id !== id;
        });
        setTasks(afterDelTasks);
    };

    const editTaskById = async (id, updatedTitle, updatedTitleDesc) => {
        await axios.put(`http://localhost:3000/tasks/${id}`, {
            itleVal: updatedTitle,
            taskDescVal: updatedTitleDesc,
        });

        const uptadetTasks = tasks.map((task) => {
            if (task.id === id) {
                return {
                    id: id,
                    titleVal: updatedTitle,
                    taskDescVal: updatedTitleDesc,
                };
            }
            return task;
        });
        setTasks(uptadetTasks);
    };

    return (
        <div className="container">
            <TaskCreate onCreate={createTask} />
            <h1>Görevler</h1>
            <TaskList
                tasksSend={tasks}
                onDelete={DeleteTaskByID}
                onUpdate={editTaskById}
            />
        </div>
    );
}

export default App;
