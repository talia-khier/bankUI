import { Box, Typography, Button, useMediaQuery  } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        borderBottom: "1px solid #475467",
        marginBottom: "64px",
        paddingBottom: "54px",
        [theme.breakpoints.down('md')]: {
            flexDirection:"column",
            border:"unset",
            marginBottom:"48px",
            paddingBottom:"0"

        },

        
    },
    title: {
        color: "#FFFFFF",
        fontSize: "20px",
        fontWeight: "30px",
        lineHeight: "30px",
        marginBottom: "8px",
    },
    text: {
        color: "#E4E7EC",
        fontSize: "16px",
        lineHeight: "24px",
        marginBottom: "64px",
        [theme.breakpoints.down('md')]: {
          
            margin:"0 0 48px"
        },
    },
    fieldContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        [theme.breakpoints.down('md')]: {
            flexDirection:"column",
            width:"100%",
            alignItems:"stretch",
        },
    },
    textField: {
        lineHeight: "24px",
        backGroundColor: "#FFFFFF",
        width: "55%",
        marginRight: "5%",
        padding: "10px 80px 10px 14px",
        border: "1px solid #D0D5DD",
        borderRadius: "8px",
        "&::placeholder" :{
            color: "#667085",
        },
        "&:focus-visible": {
            outline: 'transparent'
        },
        [theme.breakpoints.down('md')]: {
            width: "100%",
            margin:"0 0 16px"
        },
    },
    subscribe: {
        border: "1px solid #7F56D9",
        backgroundColor: "#7F56D9",
        boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
        borderRadius: "8px",
        color: "#FFFFFF",
        fontWeight: 500,
        lineHeight: "24px",
        padding: "10px 0px",
        width: "45%",
        "&:hover": {
            color: "#7F56D9",
        },
        [theme.breakpoints.down('md')]: {
            width: "100%",
        },
    },
    placeholder: {}


}))

export default function NewsLetter() {

    const classes = useStyles()
     
    return (
        <Box className={classes.container}>
            <Box>
                <Typography className={classes.title}>Join our newsletter</Typography>
                <Typography className={classes.text}>Banking technology that has your back.</Typography>
            </Box>
            <Box className={classes.fieldContainer}>
                <input type="text" id="lname" name="lname" placeholder="Enter your email"  className={classes.textField} />
                <Button className={classes.subscribe}>Subscribe</Button>
            </Box>
        </Box>
    )
}
 