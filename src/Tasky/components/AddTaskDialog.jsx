import {useState} from "react";

export default function AddTaskDialog(props) {
    const [title, setTitle] = useState("");
    const [deadline, setDeadline] = useState("")
    const [done, setDone] = useState(false);

    const onTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const onDeadlineChange = (e) => {
        setDeadline(e.target.value);
    }

    const handleAddTask = () => {
        props.onAddTask({
            title: title,
            deadline: deadline,
            done: done
        });
        setTitle("");
        setDeadline("");
    };

    const handleReset = () => {
        props.reset();
    }

    return (
        <div className="add-task-dialog">
            <input value={title} className={"task-input"} onChange={onTitleChange} type="text"
                   placeholder="Enter a new task"/>
            <input value={deadline} className={"task-input"} onChange={onDeadlineChange} type={"text"}
                   placeholder={"Enter the deadline"}/>
            <button className={"button"} onClick={handleAddTask}>
                Add Task
            </button>
            <button className={"button"} onClick={handleReset}>
                Reset
            </button>
        </div>
    );
}
