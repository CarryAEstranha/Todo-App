import { styled } from "@mui/material/styles";

const ListContainer = styled("ul")(({ theme }) => ({
    background: "var(--very-dark-desaturated-blue)",

    borderRadius: "0.3125rem 0.3125rem 0 0",

    marginTop: "-3rem",
}));

const ListFilter = styled("div")(({ theme }) => ({
    background: "var(--very-dark-desaturated-blue)",

    display: "flex",

    alignItems: "center",
    justifyContent: "center",

    borderRadius: "0 0 0.3125rem 0.3125rem",

    padding: "0 1.1875rem 0 1.1875rem",

    width: "100%",
    height: "3.125rem",

    "#items-left-container": {
        width: "30%",

        "p": {
            color: "#9495A5",

            fontFamily: "Josefin Sans",
            fontSize: "0.875rem",
            fontWeight: "400"
        }
    },

    "#filter-buttons-container": {
        display: "flex",

        alignItems: "center",
        justifyContent: "center",

        width: "40%",

        "button": {
            background: "none",

            color: "#9495A5",

            fontFamily: "Josefin Sans",
            fontSize: "0.875rem",
            fontWeight: "700",

            border: "none",

            margin: "0 0.3rem 0 0.3rem",
            padding: "0 0.2rem 0 0.2rem",

            cursor: "pointer",

            "&:hover": {
                filter: "brightness(2)"
            }
        }
    },

    "#clear-all-button-container": {
        display: "flex",

        alignItems: "center",
        justifyContent: "flex-end",

        width: "30%",

        "button": {
            background: "none",

            color: "#9495A5",

            fontFamily: "Josefin Sans",
            fontSize: "0.875rem",
            fontWeight: "400",

            border: "none",

            cursor: "pointer",

            "&:hover": {
                filter: "brightness(2)"
            }
        }
    }
}));

const TaskListContainer = styled("div")(({ theme }) => ({
    margin: "auto",

    width: "33.75rem"
}));

export const styles = {
    ListContainer,
    ListFilter,
    TaskListContainer
};