import './App.css';
import Tasks from "./components/Tasks";
import useStateCached from "./hooks/useStateCached";
import AddTaskDialog from "./components/AddTaskDialog";

function App() {
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
    const reset = () => {
        setTasks([]);
    }
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Tasky
                </p>
            </header>
            <AddTaskDialog onAddTask={addTask} reset={reset}/>
            <Tasks deleteTask={deleteTask} tasks={tasks}/>
        </div>
    );
}

export default App;
