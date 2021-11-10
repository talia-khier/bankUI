import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from "next/image";

const useStyles = makeStyles(theme => ({
    chartContainer: {
        display: "flex",
        flexDirection: "column",
        margin: "90px 0 90px 10%",
        
        [theme.breakpoints.down('md')]: {
            margin: "90px auto",
            width: "95%",
        },
    },
    mainContent: {
        width: "70%",
        marginBottom: "64px",
        [theme.breakpoints.down('md')]: {
            width: "100%",
        },
    },
    mainSupTitle: {
        color: "#6941C6",
        fontSize: "16px",
        fontWeight: 600,
        lineHeight: "24px",
        marginBottom: "12px"
    },
    mainTitle: {
        color: "#101828",
        fontSize: "36px",
        fontWeight: 600,
        lineHeight: "44px",
        marginBottom: "20px"
    },
    mainSubTitle :{
        color: "#667085",
        fontSize: "20px",
        lineHeight: "30px",
    },
    details: {
        display: "flex",
        justifyContent: "space-between",
        [theme.breakpoints.down('md')]: {
            flexDirection: "column",
            // alignItems: "stretch"
        },
    },
    detailsContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginRight: "64px",
        [theme.breakpoints.down('md')]: {
            margin: "0 0 64px"
        },
    },
    contentTitle: {
        color: "#101828",
        fontSize: "20px",
        fontWeight: 500,
        lineHeight: "30px",
        marginBottom: "8px"
    },
    contentBody: {
        color: "#667085",
        fontSize: "16px",
        lineHeight: "24px",
        marginBottom: "20px"
    },
    learnMore: {
        display: "flex",
        alignItems: "center",
        color: "#6941C6",
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: "24px",
        marginBottom: "32px"
    },
    selectedContainer: {
        borderLeft: "4px solid #7F56D9",
        paddingLeft: "24px",
    },
    contentContainer: {
        paddingLeft: "24px",
        borderLeft: "4px solid #F2F4F7"
    },
    imageContainer: {
        boxShadow: "0px 32px 64px -12px rgba(16, 24, 40, 0.2)"
    }

}));

const imageSource = require("../assets/chart.png");

export default function Chart() {

    const classes = useStyles();

    return (
        <Box className={classes.chartContainer}>
            <Box className= {classes.mainContent}>
                <Typography className={classes.mainSupTitle}>Features</Typography>
                <Typography className={classes.mainTitle}>All-in-one finance for any business</Typography>
                <Typography className={classes.mainSubTitle}>Get a deposit account, credit card, and spend management software—in one refreshingly easy solution. No fees or minimums.</Typography>
            </Box>
            <Box className={classes.details}>
                <Box className={classes.detailsContent}>
                    <Box className={classes.selectedContainer}>
                        <Typography className={classes.contentTitle}>Unlimited cards</Typography>
                        <Typography className={classes.contentBody}>Give your team the autonomy they need with access to as many cards as they need. Authorise purchases with a click. Simple.</Typography>
                        <Typography className={classes.learnMore}>
                            Learn more
                            <ArrowForwardIcon />
                        </Typography>
                    </Box>
                    <Box className={classes.contentContainer}>
                        <Typography className={classes.contentTitle}>Easy expense policies</Typography>
                        <Typography className={classes.contentBody}>Every card comes with configurable spending limits, purchase restrictions, and cancellations for each employee and team.</Typography>
                        <Typography className={classes.learnMore}>
                            Learn more
                            <ArrowForwardIcon />
                        </Typography>
                    </Box>
                    <Box className={classes.contentContainer}>
                        <Typography className={classes.contentTitle}>Advanced analytics</Typography>
                        <Typography className={classes.contentBody}>An all-in-one platform that helps you balance everything your team need to be happy and your finances in order.</Typography>
                        <Typography className={classes.learnMore}>
                            Learn more
                            <ArrowForwardIcon />
                        </Typography>
                    </Box>
                </Box>
                <Box className={classes.imageContainer}>
                    <Image 
                        src={imageSource}
                        alt="chart"
                    />
                </Box>
            </Box>
        </Box>
    )
}
