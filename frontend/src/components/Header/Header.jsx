import { TaskForm } from "../TaskForm/TaskForm";

import { styles } from "./HeaderStyles";

export const Header = (props) => {
    const { renderList, setRenderList } = props.render;

    const {
        HeaderContainer,
        HeaderContent,
        Title
    } = styles;

    return (
        <HeaderContainer>
            <HeaderContent>
                <Title>Todo</Title>

                <TaskForm render={{ renderList, setRenderList }} />
            </HeaderContent>
        </HeaderContainer>
    );
}