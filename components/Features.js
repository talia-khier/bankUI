import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";

const useStyles = makeStyles(theme => ({
    boxContainer: {
        display: "flex",
        width: "80%",
        margin: "0 auto",
        justifyContent: "space-between",
        [theme.breakpoints.down('md')]: {
            flexDirection: "Column",
            width: "95%"
        },
    },
    boxContent: {
        width: "32%",
        [theme.breakpoints.down('md')]: {
            width: "100%"
        },
    },
    logoTitle: {
        marginTop: "24px",
        color: "#101828",
        fontSize: "36px",
        fontWeight: 600,
        lineHeight: "44px",
        marginBottom: "20px",
        [theme.breakpoints.down('md')]: {
            fontSize: "30px",
            lineHeight: "38px"
        },
    },
    logoText: {
        color: "#667085",
        fontSize: "20px",
        lineHeight: "30px",
        [theme.breakpoints.down('md')]: {
            fontSize: "18px",
            lineHeight: "28px"
        },
    },
    title: {
        fontSize: "20px",
        fontWeight: 500,
        lineHeight: "30px",
        color: "#101828",
        marginBottom: "8px",
        [theme.breakpoints.down('md')]: {
            fontSize: "18px",
            lineHeight: "28px"
        },
    },
    body: {
        fontSize: "16px",
        lineHeight: "24px",
        color: "#667085",
        marginBottom: "32px",
    }
}))

const iconPath = require("../assets/Featured icon.svg")

export default function Features() {

    const classes = useStyles();

    return (
        <Box className={classes.boxContainer}>
            <Box className={classes.boxContent}>
                <Image 
                    src={iconPath}
                    alt="icon"
                    className={classes.icon}
                />
                <Typography className={classes.logoTitle}>The only card you’ll ever need. Simple.</Typography>
                <Typography className={classes.logoText}>Spend smarter, lower your bills, get cashback on everything you buy, and unlock credit to grow your business.</Typography>
            </Box>
            <Box className={classes.boxContent}>
                <Box>
                    <Typography className={classes.title}>Unlimited cards</Typography>
                    <Typography className={classes.body}>Give your team the autonomy they need with access to as many cards as they need. Authorise purchases with a click. Simple.</Typography>
                </Box>
                <Box>
                    <Typography className={classes.title}>Easy expense policies</Typography>
                    <Typography  className={classes.body}>Every card comes with configurable spending limits, purchase restrictions, and cancellations for each employee and team.</Typography>
                </Box>
                <Box>
                    <Typography className={classes.title}>Advanced analytics</Typography>
                    <Typography className={classes.body}>An all-in-one platform that helps you balance everything your team need to be happy and your finances in order.</Typography>
                </Box>
            </Box>
            <Box className={classes.boxContent}>
            <Box>
                    <Typography className={classes.title}>Real-time visibility on spending</Typography>
                    <Typography className={classes.body}>No more unpleasant surprises. Our in-app top line view of your business spending means you can see who’s spending what, when, & where.</Typography>
                </Box>
                <Box>
                    <Typography className={classes.title}>Connect the tools you already use</Typography>
                    <Typography className={classes.body}>Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.</Typography>

                </Box>
                <Box>
                    <Typography className={classes.title}>Our people make the difference</Typography>
                    <Typography className={classes.body}>We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.</Typography>

                </Box>
            </Box>
        </Box>
    )
}
