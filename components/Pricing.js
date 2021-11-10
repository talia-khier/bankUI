import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PricingCard from "./PricingCard";

const useStyles = makeStyles(theme => ({
    pricingContainer: {
        backgroundColor: "#F9FAFB",
        padding: "96px 0",
    },
    pricingContent: {
        width: "90%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        [theme.breakpoints.down('md')]: {
            width: "95%",
            flexDirection: "column"
        },
        
    },
    contentConatiner: {
        width: "40%",
        marginLeft: "1%",
        marginRight: "32px",
        [theme.breakpoints.down('md')]: {
            width: "100%",
            marginBottom: "48px"
        },
    },
    supTitle: {
        color: "#6941C6",
        fontSize: "16px",
        fontWeight: 600,
        lineHeight: "24px",
        marginBottom: "12px"
    },
    title: {
        color: "#101828",
        fontSize: "36px",
        fontWeight: 600,
        lineHeight: "44px",
        marginBottom: "20px",
        [theme.breakpoints.down('md')]: {
            fontSize: "30px",
            lineHeight: "38px",
        },
    },
    subTitle: {
        color: "#667085",
        fontSize: "18px",
        lineHeight: "28px"
    }
}));


export default function Pricing() {

    const classes = useStyles();

    return (
        <Box className={classes.pricingContainer}>
            <Box className={classes.pricingContent}>
                <Box className={classes.contentConatiner}>
                    <Typography className={classes.supTitle}>Upgrade</Typography>
                    <Typography className={classes.title}>Pricing plans that scale</Typography>
                    <Typography className={classes.subTitle}>Simple, transparent pricing that grows with you. Try any plan free for 30 days.</Typography>
                </Box>
                <PricingCard />
                <PricingCard />
            </Box>
        </Box>
    )
}
