import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import Task from "./Task";

export default function Tasks(props) {
    return (
        <div className="tasks-div">
            <ul className={"tasks-ul"}>
                {props.tasks.map((task, index) => (
                    <li className={"tasks-li"} key={index}>
                        <Task task={task}>
                            <button className={"delete-button"} onClick={() => props.deleteTask(index)}>
                                <DeleteForeverIcon/>
                            </button>
                            {task.done ?
                                <p>Done</p>
                                :
                                <p>Not Done</p>
                            }
                            {task.done ? (
                                <button className={"done-button"} onClick={() => props.markTaskDone(index, false)}>
                                    <CloseIcon/>
                                </button>
                            ) : (
                                <button className={"done-button"} onClick={() => props.markTaskDone(index, true)}>
                                    <DoneIcon/>
                                </button>
                            )}
                        </Task>
                    </li>
                ))}
            </ul>
        </div>
    )
}