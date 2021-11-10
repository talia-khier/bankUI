import { Typography, Box, Button} from '@mui/material';
import { makeStyles } from '@mui/styles';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import Image from "next/image"

const useStyles = makeStyles(theme => ({

    containerBox: {
        paddingTop: 120,
        backgroundColor: theme.background.primary["800"],
        
    },
    box:{        
        width: "60%",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down('md')]: {
            width: "95%",
            alignItems: "flex-start",
        },
        
        
        
    },
    supTitle : {
        color: theme.text.primary,
        fontWeight: 600,
        lineHeight: "24px",
        marginBottom: 11,
        [theme.breakpoints.down('md')]: {
            lineHeight: "20px",
            fontSize: "14px"
        }
    },
    title: {
        color: theme.palette.common.white,
        fontSize: "72px",
        fontWeight: 600,
        lineHeight: "90px",
        marginBottom: 11,
        [theme.breakpoints.down('md')]: {
            fontSize: "36px",
            lineHeight: "44px",
        }
    },
    subTitle: {
        color: theme.text.primary,
        fontSize: "20px",
        lineHeight: "30px",
        marginBottom: 20,
        [theme.breakpoints.down('md')]: {
            lineHeight: "28px",
            fontSize: "18px"
        }
    },
    buttonGroup: {
        display: 'flex',
        alignItems: 'center',
        marginTop:  20,
        [theme.breakpoints.between('lg', 'sm')]: {
            justifyContent: "center",
            width: "100%",
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            alignItems: 'stretch',
            width: "100%"
        }
    },
    demoButton: {
        padding: "12px 40px",
        color: theme.palette.common.white,
        backgroundColor: theme.background.primary["600"],
        fontSize: "18px",
        fontWeight: 500,
        lineHeight: "28px",
        margin: "0 10px",
        borderRadius: "8px",
        "&:hover": {
            color: theme.palette.common.black,
            backgroundColor: theme.palette.common.white,
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: "10px"
        }

    },
    signButton: {
        padding: "12px 40px",
        color: theme.palette.common.black,
        backgroundColor: theme.palette.common.white,
        margin: "0 10px",
        borderRadius: "8px",
        fontSize: "18px",
        fontWeight: 500,
        lineHeight: "28px",
        "&:hover": {
            color: theme.palette.common.white,
            backgroundColor: theme.background.primary["600"],
        }
    }
}));

export default function Header() {

    const classes = useStyles();

    return (
        <Box className={classes.containerBox}>
                <Box className={classes.box}>
                    <Typography component="div" className={classes.supTitle}>
                        Super. Simple. Banking.
                    </Typography>
                    <Typography component="div" className={classes.title}>
                        Banking technology that has your back.
                    </Typography>
                    <Typography component="div" className={classes.subTitle}>
                        Simple. transparent banking. No hidden fees and free overdrafts
                    </Typography>
                    <Box className={classes.buttonGroup}>
                        <Button className={classes.demoButton}>
                            <PlayCircleOutlineRoundedIcon />
                            Demo
                        </Button>
                        <Button className={classes.signButton}>Sign Up</Button>
                    </Box>
                    
                </Box>
                <Box className={classes.card}>
                    <Image 
                        src={require("../assets/Content.png")}
                        alt="cards"
                    />
                </Box>
        </Box>
    )
}
