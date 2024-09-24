import {useState} from "react";

export default function AddTaskDialog(props) {
    const [task, setTask] = useState("");

    const onChange = (e) => {
        setTask(e.target.value);
    };

    const handleAddTask = () => {
        props.onAddTask(task);
        setTask("");
    };

    const handleReset = () => {
        props.reset();
    }

    return (
        <div className="add-task-dialog">
            <input value={task} className={"task-input"} onChange={onChange} type="text"
                   placeholder="Enter a new task"/>
            <button className={"button"} onClick={handleAddTask}>
                Add Task
            </button>
            <button className={"button"} onClick={handleReset}>
                Reset
            </button>
        </div>
    );
}
