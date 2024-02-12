import { useState } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

function App() {
    const [tasks, setTasks] = useState([]);

    const createTask = (title, taskDesc) => {
        // console.log(title, taskDesc);
        const createdTasks = [
            ...tasks,
            {
                id: Math.round(Math.random() * 999999),
                titleVal: title,
                taskDescVal: taskDesc,
            },
        ]; // eski array üstüne yeni ekleme

        setTasks(createdTasks);
    };

    const DeleteTaskByID = (id) => {
        // console.log(id);
        const afterDelTasks = tasks.filter((task) => {
            return task.id !== id;
        });
        setTasks(afterDelTasks);
    };

    const editTaskById = (id, updatedTitle, updatedTitleDesc) => {
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
