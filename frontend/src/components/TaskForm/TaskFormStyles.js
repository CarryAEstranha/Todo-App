import { styled } from "@mui/material/styles";

const Input = styled("input")(({ theme }) => ({
    background: "none",

    flexGrow: "1",

    color: "var(--light-grayish-blue)",

    fontFamily: "Josefin Sans",
    fontSize: "1.125rem",
    fontWeight: "400",

    border: "none",

    padding: "0 1rem 0 0",

    outline: "none",

    height: "4rem",

    "&::placeholder": {
        color: "--very-dark-grayish-blue-bold",

        fontFamily: "Josefin Sans",
        fontSize: "1.125rem",
        fontWeight: "400"
    }
}));

const Form = styled("form")(({ theme }) => ({
    background: "var(--very-dark-desaturated-blue)",

    display: "flex",

    alignItems: "center",
    justifyContent: "center",

    borderRadius: "0.3125rem",

    width: "100%",
}));

const Submit = styled("button")(({ theme }) => ({
    background: "none",

    display: "flex",

    alignItems: "center",
    justifyContent: "center",

    border: "none",

    cursor: "pointer",

    width: "4rem",
    height: "4rem",

    "&:hover": {
        "div": {
            background: "var(--very-dark-grayish-blue)"
        }
    },

    "div": {
        border: "0.125rem solid var(--very-dark-grayish-blue)",
        borderRadius: "50%",

        transition: "0.2s",

        width: "1.625rem",
        height: "1.625rem",
    }
}));

export const styles = {
    Input,
    Form,
    Submit
};