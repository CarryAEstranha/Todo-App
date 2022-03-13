import { styled } from "@mui/material/styles";
import { height } from "@mui/system";

const TaskCompleted = styled("li")(({ theme }) => ({
    display: "flex",

    alignItems: "center",
    justifyContent: "center",

    borderBottom: "0.0625rem solid var(--very-dark-grayish-blue)",

    overflow: "hidden",

    "&:hover": {
        "#delete-task": {
            opacity: "1"
        }
    },

    "#check-task": {
        background: "none",

        display: "flex",

        alignItems: "center",
        justifyContent: "center",

        border: "none",

        cursor: "pointer",

        transition: "0.2s",

        width: "4rem",
        height: "4rem",

        "&:hover": {
            "div": {
                border: "0.125rem solid var(--light-grayish-blue)",
            }
        },

        "div": {
            backgroundImage: "var(--check-gradient)",

            display: "flex",

            alignItems: "center",
            justifyContent: "center",

            border: "0.125rem solid var(--very-dark-grayish-blue)",
            borderRadius: "50%",

            transition: "0.2s",

            width: "1.625rem",
            height: "1.625rem",

            "img": {
                width: "0.625rem",
                height: "0.625rem"
            }
        }
    },

    "p": {
        display: "flex",

        flexGrow: "1",

        alignItems: "center",

        color: "var(--very-dark-grayish-blue-bold)",

        fontFamily: "Josefin Sans",
        fontSize: "1.125rem",
        fontWeight: "400",

        textDecoration: "line-through",

        height: "4rem",
    },

    "#delete-task": {
        background: "none",

        display: "flex",

        alignItems: "center",
        justifyContent: "center",

        border: "none",

        opacity: "0",

        cursor: "pointer",

        transition: "0.2s",

        width: "4rem",
        height: "4rem",

        "&:hover": {
            "div": {
                display: "flex",

                transform: "scale(1.05)",

                filter: "brightness(6)"
            }
        },

        "div": {
            display: "flex",

            alignItems: "center",
            justifyContent: "center",

            filter: "brightness(2)",

            transition: "0.2s",

            width: "1.875rem",
            height: "1.875rem",

            "img": {
                width: "0.9375rem",
                height: "0.9375rem"
            }
        }
    }
}));

const TaskIncomplete = styled("li")(({ theme }) => ({
    display: "flex",

    alignItems: "center",
    justifyContent: "center",

    borderBottom: "0.0625rem solid var(--very-dark-grayish-blue)",

    overflow: "hidden",

    "&:hover": {
        "#delete-task": {
            opacity: "1"
        }
    },

    "#check-task": {
        background: "none",

        display: "flex",

        alignItems: "center",
        justifyContent: "center",

        border: "none",

        cursor: "pointer",

        transition: "0.2s",

        width: "4rem",
        height: "4rem",

        "&:hover": {
            "div": {
                border: "0.125rem solid var(--light-grayish-blue)",
            }
        },

        "div": {
            backgroundImage: "none",

            border: "0.125rem solid var(--very-dark-grayish-blue)",
            borderRadius: "50%",

            transition: "0.2s",

            width: "1.625rem",
            height: "1.625rem",
        }
    },

    "p": {
        display: "flex",

        flexGrow: "1",

        alignItems: "center",

        color: "var(--light-grayish-blue)",

        fontFamily: "Josefin Sans",
        fontSize: "1.125rem",
        fontWeight: "400",

        height: "4rem",
    },

    "#delete-task": {
        background: "none",

        display: "flex",

        alignItems: "center",
        justifyContent: "center",

        border: "none",

        opacity: "0",

        cursor: "pointer",

        transition: "0.2s",

        width: "4rem",
        height: "4rem",

        "&:hover": {
            "div": {
                display: "flex",

                transform: "scale(1.05)",

                filter: "brightness(6)"
            }
        },

        "div": {
            display: "flex",

            alignItems: "center",
            justifyContent: "center",

            filter: "brightness(2)",

            transition: "0.2s",

            width: "1.875rem",
            height: "1.875rem",

            "img": {
                width: "0.9375rem",
                height: "0.9375rem"
            }
        }
    }
}));

export const styles = {
    TaskCompleted,
    TaskIncomplete
};