import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";

const imageSource = require("../assets/Contents.png")

const useStyles = makeStyles(theme => ({
    contact: {
        backgroundColor: "#F9FAFB",
        paddingBottom: "96px",
        
    },
    container: {
        paddingTop: "96px",
        margin: "0 auto",
        width: "80%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        [theme.breakpoints.down('md')]: {
            flexDirection: "column",
            width: "95%",
            paddingTop: "0",
        },
    },
    contactContent: {
        width: "57%",
        [theme.breakpoints.down('md')]: {
            width: "100%"
        },
    },
    contactTitle: {
        color: "#101828",
        fontSize: "48px",
        lineHeight: "60px",
        fontWeight: 600,
        marginBottom: "24px",
        [theme.breakpoints.down('md')]: {
            fontSize: "30px",
            lineHeight: "38px",
        },
    },
    contactsSubTitle: {
        color: "#667085",
        fontSize: "20px",
        lineHeight: "30px",
        marginBottom: "40px",
        [theme.breakpoints.down('md')]: {
            fontSize: "18px",
            lineHeight: "28px",
        },
    },
    buttonsGroup: {
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: 500,
        width: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        [theme.breakpoints.down('md')]: {
            flexDirection: "column",
            width: "100%",
            alignItems: "stretch",
            marginBottom: "76px"
        },
    },
    learn: {
        backgroundColor: "#FFFFFF",
        border: "1px solid #D0D5DD",
        boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
        borderRadius: "8px",
        color: "#344054",
        "&:hover": {
            color: "#FFFFFF",
            backgroundColor: "#7F56D9",
            border: "1px solid #7F56D9",
            boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
        },
        [theme.breakpoints.down('md')]: {
            marginBottom: "12px"
        },
    },
    start: {
        backgroundColor: "#7F56D9",
        border: "1px solid #7F56D9",
        boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
        borderRadius: "8px",
        color: "#FFFFFF",
        "&:hover": {
            color: "#344054",
            backgroundColor: "#FFFFFF",
            border: "1px solid #D0D5DD",
            boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)"
        }
    }
})) ;

export default function Contracts() {

    const classes = useStyles();

    return (
        <Box className={classes.contact}>
            <Box className={classes.container}>
                <Box className={classes.contactContent}>
                    <Typography className={classes.contactTitle}>
                        No long-term contracts. No catches.
                    </Typography>
                    <Typography className={classes.contactsSubTitle}>
                        Start your 30-day free trial today.
                    </Typography>
                    <Box className={classes.buttonsGroup}>
                        <Button className={classes.learn}>Learn More</Button>
                        <Button className={classes.start}>Get Started</Button>
                    </Box>
                </Box>
                <Box className={classes.contactImages}>
                    <Image 
                        src={imageSource}
                        alt="content"
                    />
                </Box>
            </Box>    
        </Box>
    )
}
