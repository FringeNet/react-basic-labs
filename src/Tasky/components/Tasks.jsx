import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
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
                        </Task>
                    </li>
                ))}
            </ul>
        </div>
    )
}