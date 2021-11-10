import {AppBar, Toolbar, Typography, Button, IconButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.background.primary["800"],
    padding: "5px 0",
  },
  toolbar: {
    width: "80%",
    margin: "0 auto",
    [theme.breakpoints.down('lg')]: {
      display: "flex",
      justifyContent: "space-between",
      width: "95%",
    }
  },

  iconContainer: {
    marginRight: "41px",
    
  },
  navbarItem: {
    color: theme.text.primary,
    lineHeight: "24px",
    marginRight: 17,
    marginLeft: 15,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down('lg')]: {
      display: "none"
    }
  },
  loginButton: {
    color: theme.text.primary,
    border: "2px solid #53389E",
    fontWeight: 500,
    lineHeight: "24px",
    padding: "10px 18px",
    borderRadius: theme.shape.borderRadius * 2,
    marginRight: 30,
    "&:hover": {
      border: "2px solid #53389E",
    },
    [theme.breakpoints.down('lg')]: {
      display: "none"
    }
  },
  signButton: {
    color: theme.palette.common.white,
    fontWeight: 500,
    lineHeight: "24px",
    backgroundColor: theme.background.primary["600"],
    padding: "10px 18px",
    border: "2px solid #7F56D9",
    borderRadius: theme.shape.borderRadius * 2,
    "&:hover": {
      color: theme.palette.common.white,
      backgroundColor: theme.background.primary["800"],
      border: "2px solid #FFFFFF",
    },
    [theme.breakpoints.down('lg')]: {
      display: "none"
    }
  },
  hamburger: {
    display: "none",
    [theme.breakpoints.down('lg')]: {
      display: "block"
    }
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} elevation={0} position="sticky">
      <Toolbar className={classes.toolbar}>
        <Image src={require("../assets/Logo.png")} alt="logo" className= {classes.iconContainer}/>
        <Typography component="div" className={classes.navbarItem}>
          Home
        </Typography>
        <Typography component="div" className={classes.navbarItem}>
          Product
          <KeyboardArrowDownIcon className={classes.arrowIcon} />
        </Typography>
        <Typography component="div" className={classes.navbarItem}>
          Ressources
          <KeyboardArrowDownIcon />
        </Typography>
        <Typography
          component="div"
          sx={{ flexGrow: 1 }}
          className={classes.navbarItem}
        >
          Pricing
          <KeyboardArrowDownIcon />
        </Typography>

        <Button className={classes.loginButton}>Login</Button>
        <Button className={classes.signButton}>Sign Up</Button>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          className={classes.hamburger}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
