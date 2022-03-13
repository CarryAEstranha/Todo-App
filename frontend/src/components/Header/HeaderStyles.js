import { styled } from "@mui/material/styles";

import backgroundDesktop from "../../assets/bg-desktop-dark.jpg";
import backgroundMobile  from "../../assets/bg-mobile-dark.jpg";

const HeaderContainer = styled("header")(({ theme }) => ({
    backgroundImage: `url(${backgroundDesktop})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

    display: "flex",

    alignItems: "center",
    justifyContent: "center",
    
    height: "18.75rem",

    [theme.breakpoints.down("md")]: {
        backgroundImage: `url(${backgroundMobile})`,
    }
}));

const HeaderContent = styled("div")(({ theme }) => ({
    width: "33.75rem"
}));

const Title = styled("h1")(({ theme }) => ({
    color: "var(--light-grayish-blue)",

    fontFamily: "Josefin Sans",
    fontSize: "2.5rem",
    fontWeight: "700",

    letterSpacing: "0.9375rem",
    lineHeight: "2.5rem",

    textTransform: "uppercase",

    marginBottom: "3rem"
}));

export const styles = {
    HeaderContainer,
    HeaderContent,
    Title
};