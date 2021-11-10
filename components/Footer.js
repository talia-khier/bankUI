import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import FooterLists from "./FooterLists";

import NewsLetter from "./NewsLetter";

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: "#1D2939",
        paddingTop: "96px",
        paddingBottom: "52px"
    },
    container: {
        width: "80%",
        margin: "0 auto",
        [theme.breakpoints.down('md')]: {
            width: "95%"
        },
    },

    copyrights: {
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        [theme.breakpoints.down('md')]: {
            flexDirection:"column",
            alignItems: "flex-start"
        },
    },
    title: {
        color: "#98A2B3",
        fontSize: "16px",
        lineHeight: "24px",
        [theme.breakpoints.down('md')]: {
            marginTop: "24px"
        },
    }
}) );

export default function Footer() {

    

    const classes = useStyles();
    return (
        <Box className={classes.footer}>
            <Box className={classes.container}>
                <NewsLetter />
                <FooterLists />
                <Box className={classes.copyrights}>
                    <Image 
                        src={require("../assets/Logo.png")}
                        alt="logo"
                    />
                    <Typography component="div" className={classes.title}>© 2077 Untitled UI. All rights reserved.</Typography>
                </Box>
            </Box>
        </Box>
    )
}
