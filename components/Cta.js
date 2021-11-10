import {Box, Button, Card, CardMedia, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image from "next/image";
const imageSource = require("../assets/Cta2.png")

const useStyles = makeStyles(theme => ({
    ctaContainer: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "50px",

    },
    card: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "80%",
        backgroundColor: "#53389E",
        borderRadius: "24px",
        margin: "0 auto",
        boxShadow: "0px 20px 24px -4px rgba(16, 24, 40, 0.1), 0px 8px 8px -4px rgba(16, 24, 40, 0.04)",
        [theme.breakpoints.down('md')]: {
            flexDirection: "column",
            alignItems: "stretch",
            width: "95%"
        },
    },
    cardContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingLeft: "64px",
        [theme.breakpoints.down('md')]: {
            padding: "30px",
        },
    },
    cardTitle: {
        fontSize: "36px",
        fontWeight: 600,
        lineHeight: "44px",
        color: "#FFFFFF",
        marginBottom: "20px",

    },
    cardBody: {
        color: "#E9D7FE",
        fontSize: "20px",
        lineHeight: "30px",
        marginBottom: "40px",
 
    },
    cardActions: {
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: 500,
        [theme.breakpoints.down('md')]: {
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch", 
            width: "100%"
        },
    },
    learnButton: {
        color: "#344054",
        backgroundColor: "#FFFFFF",
        padding: "12px 20px",
        marginRight: "12px",
        border: "1px solid #D0D5DD",
        borderRadius: "8px",
        boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
        "& :hover": {
            backgroundColor: "#53389E",
        },
        [theme.breakpoints.down('md')]: {
            margin: "0 0 12px"
        },

    },
    startButton: {
        color: "#FFFFFF",
        backgroundColor: "#7F56D9",
        padding: "12px 20px",
        border: "1px solid #7F56D9",
        borderRadius: "8px",
        boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
        "& :hover": {
            backgroundColor: "#53389E",
        },

        
    },

    image: {
        width: "100%",
        height: "100%",
    }
}));

export default function Cta() {

    const classes = useStyles();

    return (
        <Box className={classes.ctaContainer}>
            <Card className={classes.card}>
                <Box className={classes.cardContent}>
                    <Typography className={classes.cardTitle}>
                        Give us a shot
                    </Typography>
                    <Typography className={classes.cardBody}>
                        Join over 4,000+ startups already growing with Untitled.
                    </Typography>
                    <Box className={classes.cardActions}>
                        <Button className={classes.learnButton}>Learn more</Button>
                        <Button className={classes.startButton}>Get started</Button>
                    </Box>
                </Box>
                
                    <Image
                        className= {classes.image}
                        src={imageSource}
                        alt="image"
                        
                    />
            </Card>
        </Box>
    );
}
