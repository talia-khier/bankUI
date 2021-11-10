import { Box, Typography, Button, Card } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { padding } from "@mui/system";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({

    card: {
        border: "1px solid #E4E7EC",
        boxShadow:
            "0px 12px 16px -4px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05)",
        borderRadius: "16px",
        backgroundColor: "#FFFFFF",
        [theme.breakpoints.down('md')]: {
          marginBottom: "48px"
      },
        
    },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    margin: "32px",
    
    
  },

  iconContainer: {
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  plan: {
    color: "#6941C6",
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "30px",
    marginBottom: "8px",
    textAlign: "center"
  },
  price: {
    color: "#101828",
    fontSize: "48px",
    fontWeight: 600,
    lineHeight: "60px",
    marginBottom: "8px",
    textAlign: "center"
  },
  date: {
    color: "#667085",
    fontSize: "16px",
    lineHeight: "24px",
    marginBottom: "32px",
    textAlign: "center"
  },
  features: {
    display: "flex",
    alignItems: "center",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#667085",
    marginBottom: "16px",
    
  },
  checkIcon: {
    marginRight: "12px",
  },
  buttonContainer: {
    backgroundColor: "#F9FAFB",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  startButton: {
     margin: "32px  auto",
     backgroundColor: "#7F56D9",
     fontSize: "16px",
     lineHeight: "24px",
     fontWeight: 500,
     color: "#FFFFFF",
     width: "80%",
     padding: "12px 0",
     border: "1px solid #7F56D9",
     borderRadius: "8px",
     "&:hover": {
        backgroundColor: "#F9FAFB",
        color: "#7F56D9"
     }
  },
}));

const iconSource = require("../assets/Featured icon.svg");
const checkIcon = require("../assets/Check icon.svg");

export default function PricingCard() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
        <Box className={classes.cardContainer}>
        <Box className={classes.iconContainer}>
            <Image src={iconSource} alt="icon" />
        </Box>
        <Typography className={classes.plan}>Basic plan</Typography>
        <Typography className={classes.price}>$10/mth</Typography>
        <Typography className={classes.date}>Billed annually.</Typography>
        <Typography className={classes.features}>
        
              <Image src={checkIcon} alt="checkIcon"  />
            
            to all basic features
        </Typography>
        <Typography className={classes.features}>
        
              <Image src={checkIcon} alt="checkIcon"  />
            
            Basic reporting and analytics
        </Typography>
        <Typography className={classes.features} >
            
              <Image src={checkIcon} alt="checkIcon"  />
            
            Up to 10 individual users
        </Typography>
        <Typography className={classes.features}>
        
              <Image src={checkIcon} alt="checkIcon"  />
            
            20GB individual data each user
        </Typography>
        <Typography className={classes.features}>
        
              <Image src={checkIcon} alt="checkIcon"  />
            
            Basic chat and email support
        </Typography>
        </Box>
        <Box className={classes.buttonContainer}>
            <Button className={classes.startButton}>Get started</Button>
        </Box>
    </Card>
  );
}
