export default function Task(props){
    return (
        <div className="card">
            <p className="title">{props.task.title}</p>
            <p className={"deadline"}>Due: {props.task.deadline}</p>
            <p>{props.children}</p>
        </div>
    )
}