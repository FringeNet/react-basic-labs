import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function Tasks(props) {
    return (
        <div className="tasks-div">
            <ul className={"tasks-ul"}>
                {props.tasks.map((task, index) => (
                    <li className={"tasks-li"} key={index}>
                        <span>{`\u2022 ${task}`}</span>
                        <button className={"delete-button"} onClick={() => props.deleteTask(index)}>
                            <DeleteForeverIcon />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}