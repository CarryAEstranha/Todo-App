import {
    useEffect,
    useState
} from "react";

import { Task } from "../Task/Task";

import { styles } from "./TaskListStyles";

export const TaskList = (props) => {
    const [APIData, setAPIData] = useState([]);
    const [filter, setFilter] = useState("all");
    const [sumCompleted, setSumCompleted] = useState(0);

    const { renderList, setRenderList } = props.render;

    const APIURL = "http://localhost:5000";

    const {
        ListContainer,
        ListFilter,
        TaskListContainer
    } = styles;

    useEffect(() => {
        fetch(`${APIURL}/task`).then((response) => {
            return response.json();
        }).then((data) => {
            setAPIData(data);

            setSumCompleted(calculateItemsLeft(data));
        }).catch((error) => {
            console.log("Error: " + error);
        });
    }, [renderList]);

    const calculateItemsLeft = (array) => {
        let sum = 0;

        array.forEach((item) => {
            if (item.complete === false) {
                sum = sum + 1;
            }
        });

        return sum;
    }

    const clearAllCompleted = (array) => {
        const completedArray = [];

        array.forEach((item) => {
            if (item.complete === true) {
                completedArray.push(item.id);
            }
        });

        fetch(`${APIURL}/task/multiples/${JSON.stringify(completedArray)}`, {
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
        <TaskListContainer>
            <ListContainer>
                {APIData.map((item, index) => {
                    if (filter === "all") {
                        return (
                            <Task
                                information={{
                                    id: item.id,
                                    complete: item.complete
                                }}
                                key={item.id}
                                render={{ renderList, setRenderList }}
                            >
                                {item.description}
                            </Task>
                        );
                    } else if (filter === "active" && item.complete === false) {
                        return (
                            <Task
                                information={{
                                    id: item.id,
                                    complete: item.complete
                                }}
                                key={item.id}
                                render={{ renderList, setRenderList }}
                            >
                                {item.description}
                            </Task>
                        );
                    } else if (filter === "completed" && item.complete === true) {
                        return (
                            <Task
                                information={{
                                    id: item.id,
                                    complete: item.complete
                                }}
                                key={item.id}
                                render={{ renderList, setRenderList }}
                            >
                                {item.description}
                            </Task>
                        );
                    }

                    return null;
                })}
            </ListContainer>

            <ListFilter>
                <div id="items-left-container">
                    <p>{sumCompleted + " item(s) left"}</p>
                </div>

                <div id="filter-buttons-container">
                    {filter === "all" ? (
                        <button onClick={() => { setFilter("all") }} style={{ filter: "brightness(2)" }}>All</button>
                    ) : (
                        <button onClick={() => { setFilter("all") }}>All</button>
                    )}

                    {filter === "active" ? (
                        <button onClick={() => { setFilter("active") }} style={{ filter: "brightness(2)" }}>Active</button>
                    ) : (
                        <button onClick={() => { setFilter("active") }}>Active</button>
                    )}

                    {filter === "completed" ? (
                        <button onClick={() => { setFilter("completed") }} style={{ filter: "brightness(2)" }}>Completed</button>
                    ) : (
                        <button onClick={() => { setFilter("completed") }}>Completed</button>
                    )}

                </div>

                <div id="clear-all-button-container">
                    <button onClick={() => { clearAllCompleted(APIData) }}>Clear Completed</button>
                </div>
            </ListFilter>
        </TaskListContainer>
    );
}