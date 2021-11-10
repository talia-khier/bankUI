import { Box, Typography} from "@mui/material";
import { makeStyles } from '@mui/styles';
import { height } from "@mui/system";
import Image from "next/image";

const useStyles = makeStyles(theme => ({
    containerBox: {
        backgroundColor: theme.palette.common.white,
        marginTop: 90,
        paddingBottom: 96,
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: "center",
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: 500,
        color: "#667085",
        marginBottom: "25px"
    },
    socialIcons: {
        display: "flex",
        justifyContent:"space-between",
        alignItems: "center",
        width: "80%",
        borderBottom: "1px solid #E4E7EC",
        paddingBottom: 100,
        
        [theme.breakpoints.down('md')]: {
            flexWrap: "wrap",
            width: "95%",
        }
    },
    icon: {
        [theme.breakpoints.down('md')]: {
            width: "30%",
            marginBottom: "24px"
        },
        [theme.breakpoints.down('sm')]: {
            width: "45%",
        }
    },
    hiddenIcon: {
        display: "none",
        [theme.breakpoints.down('md')]: {
            display: "initial",
            width: "30%",
            marginBottom: "24px"
        },
        [theme.breakpoints.down('sm')]: {
            width: "45%",
        }
    }

}))

export default function SocialProof() {

    const classes = useStyles();

    return (
        <Box className={classes.containerBox}>
            <Typography className={classes.title}>
            Join 4,000+ companies already growing
            </Typography>
            <Box className={classes.socialIcons}>
                <Box className={classes.icon}>
                    <Image 
                        src={require("../assets/1.svg")}
                        alt="1"
                    />
                </Box>
                <Box className={classes.icon}>
                    <Image 
                        src={require("../assets/2.svg")}
                        alt="2"
                    />
                </Box>
                <Box className={classes.icon}>
                    <Image 
                        src={require("../assets/3.svg")}
                        alt="3"
                    />
                </Box>
                <Box className={classes.icon}>
                    <Image 
                        src={require("../assets/4.svg")}
                        alt="4"
                    />
                </Box>
                <Box className={classes.icon}>
                    <Image 
                        src={require("../assets/5.svg")}
                        alt="5"
                    />
                </Box>
                <Box className={classes.hiddenIcon}>
                    <Image 
                        src={require("../assets/6.svg")}
                        alt="6"
                    />
                </Box>
                
            </Box>
            <Box className={classes.divider}></Box>
        </Box>
    )
}
