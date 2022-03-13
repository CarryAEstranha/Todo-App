import { styles } from "./TaskFormStyles";

export const TaskForm = (props) => {
    const { renderList, setRenderList } = props.render;

    const APIURL = "http://localhost:5000";

    const {
        Input,
        Form,
        Submit
    } = styles;

    const submitTask = (event) => {
        event.preventDefault();

        const string = document.getElementById("todo-input").value;

        const bodyForm = {
            complete: false,
            task: string.charAt(0).toUpperCase() + string.slice(1)
        }

        fetch(`${APIURL}/task`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyForm)
        }).then((response) => {
            return response.json();
        }).then((data) => {
            document.getElementById("todo-input").value = "";

            setRenderList(!renderList);
        }).catch((error) => {
            console.log("Error: " + error);
        });
    }

    return (
        <Form action="" onSubmit={submitTask}>
            <Submit type="submit">
                <div></div>
            </Submit>

            <label className="hidden" htmlFor="todo-input">Create a new todo...</label>
            <Input
                autoComplete="off"
                id="todo-input"
                maxLength="50"
                placeholder="Create a new todo..."
                required
                type="text"
            >
            </Input>
        </Form>
    );
}