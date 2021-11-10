import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    listConatiner: {
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.down('md')]: {
            width: "30%",
            marginBottom: "32px"
        },
        [theme.breakpoints.down('sm')]: {
            width: "40%",
        
        },
    },

    listTitle: {
        color: "#98A2B3",
        fontWeight: 600,
        fontSize: "14px",
        lineHeight: "20px",
        marginBottom: "16px"
    },
    listItem: {
        color: "#E4E7EC",
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "24px",
        marginBottom: "12px"
    }
}))
export default function ListItems({title, items}) {
    const classes = useStyles();
    return (
        <Box className={classes.listConatiner}>
            <Typography className={classes.listTitle}>
                {title}
            </Typography>
            {items.map((el, index) => {
                return (
                    <Typography key={index} className={classes.listItem}>
                        {el}
                    </Typography>
                )
            })}
        </Box>
    )
}
