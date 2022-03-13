import { useState } from "react";

import { Header } from "../../components/Header/Header";
import { TaskList } from "../../components/TaskList/TaskList";

import Box from "@mui/material/Box";

export const Home = () => {
    const [renderList, setRenderList] = useState(true);

    document.title = "TODO | Home";

    return (
        <Box sx={{
            backgroundColor: "var(--very-dark-blue)",
            padding: "0 0 2rem 0",
            minHeight: "100vh"
        }}>
            <Header render={{ renderList, setRenderList }} />
            <TaskList render={{ renderList, setRenderList }} />
        </Box>
    );
}