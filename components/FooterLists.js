import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ListItems from "./ListItems";

const useStyles = makeStyles(theme => ({
    listContainer: {
        // margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: "52px",
        borderBottom: "1px solid #475467",
        marginBottom: "56px",
        [theme.breakpoints.down('md')]: {
            flexWrap: "wrap",
            alignItems: "initial"
        },
    }
}))

export default function FooterLists() {
    
    const classes = useStyles();

    const listItems =[
        {"title": "Product", "items": ["Overview","Features","Solutions","Tutorials","Pricing","Releases"]},
        {"title": "Company", "items": ["About us","Careers","Press","News","Media kit","Contact"]},
        {"title": "Resources", "items": ["Blog","Newsletter","Events","Help centre","Tutorial","Support"]},
        {"title": "Uses cases", "items": ["Startups","Enterprise","Government","SaaS","Marketplaces","Ecommerce"]},
        {"title": "Social", "items": ["Twitter","LinkedIn","Facebook","GitHub","AngelList","Dribbble"]},
        {"title": "Legal", "items": ["Terms","Privacy","Cookies","Licenses","Settings","Contact"]}
    ]
    
    return (
        <Box className = {classes.listContainer}>
            { listItems.map((el, index) => {
                return (
                    <ListItems key={index} title={el.title} items={el.items} />
                )
            }) }
        </Box>
    )
}
