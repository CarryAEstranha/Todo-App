import { styles } from "./TaskStyles";

import icon_check from "../../assets/icon-check.svg";
import icon_close from "../../assets/icon-cross.svg";

export const Task = (props) => {
    const { complete, id } = props.information;
    const { renderList, setRenderList } = props.render;

    const APIURL = "http://localhost:5000";

    const {
        TaskCompleted,
        TaskIncomplete
    } = styles;

    const checkTask = (status, id) => {
        const bodyForm = {
            complete: !status,
        }

        fetch(`${APIURL}/task/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyForm)
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setRenderList(!renderList);
        }).catch((error) => {
            console.log("Error: " + error);
        });
    }

    const deleteTask = (id) => {
        fetch(`${APIURL}/task/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setRenderList(!renderList);
        }).catch((error) => {
            console.log("Error: " + error);
        });
    }

    return (
        <>
            {complete === true ? (
                <TaskCompleted>
                    <button
                        id="check-task"
                        onClick={() => {
                            checkTask(complete, id);
                        }}
                    >
                        <div>
                            <img
                                alt="Checked"
                                src={icon_check}
                            />
                        </div>
                    </button>

                    <p>{props.children}</p>

                    <button
                        id="delete-task"
                        onClick={() => {
                            deleteTask(id);
                        }}
                    >
                        <div>
                            <img
                                alt="Delete task"
                                src={icon_close}
                            />
                        </div>
                    </button>
                </TaskCompleted>
            ) : (
                <TaskIncomplete>
                    <button
                        id="check-task"
                        onClick={() => {
                            checkTask(complete, id);
                        }}
                    >
                        <div></div>
                    </button>

                    <p>{props.children}</p>

                    <button
                        id="delete-task"
                        onClick={() => {
                            deleteTask(id);
                        }}
                    >
                        <div>
                            <img
                                alt="Delete task"
                                src={icon_close}
                            />
                        </div>
                    </button>
                </TaskIncomplete>
            )}
        </>
    );
}