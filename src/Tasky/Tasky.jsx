import useStateCached from "./hooks/useStateCached";
import AddTaskDialog from "./components/AddTaskDialog";
import Tasks from "./components/Tasks";
import "./Tasky.css";

export default function Tasky(props){
    const [tasks, setTasks] = useStateCached("tasks", []);
    const addTask = (newTask) => {
        if (newTask) {
            setTasks([...tasks, newTask]);
        }
    }
    const deleteTask = (index) => {
        const newTasks = tasks.filter((task, i) => i !== index);
        setTasks(newTasks);
    }
    const markTaskDone = (index, bool) => {
        const newTasks = tasks.map((task, i) => {
            if (i === index) {
                task.done = bool;
            }
            return task;
        });
        setTasks(newTasks);
    }
    const reset = () => {
        setTasks([]);
    }
    return (
        <div className="Tasky">
            <header className="Tasky-header">
                <p>
                    Tasky
                </p>
            </header>
            <AddTaskDialog onAddTask={addTask} reset={reset}/>
            <Tasks markTaskDone={markTaskDone} deleteTask={deleteTask} tasks={tasks}/>
        </div>
    );
}