import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SearchIcon from "@material-ui/icons/Search";
import CustomLink from "./CustomLink";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const Navbar = (props) => {
  const classes = useStyles();

  const [width, setWidth] = useState(window.innerWidth);

  let isMobile = width <= 768;
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  // const menuItems = [
  //   { name: "Home", path: "home", icon: "Home" },
  //   { name: "Search", path: "search", icon: "SearchIcon" },
  //   { name: "Favorites", path: "favorite", icon: "FavoriteIcon" },
  // ];
  return (
    <>
      {isMobile ? (
        <>
          <MobileNav />
          {props.children}
        </>
      ) : (
        <div className={classes.root}>
          <CssBaseline />

          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
            anchor="left"
          >
            <div className={classes.toolbar} />
            <Divider />
            <List>
              <CustomLink
                icon={<HomeIcon />}
                to={"/home"}
                primary="Home"
              ></CustomLink>
              <CustomLink
                icon={<FavoriteIcon />}
                to={"/favorites"}
                primary="Favorites"
              ></CustomLink>
              <CustomLink
                icon={<SearchIcon />}
                to={"/search"}
                primary="Search"
              ></CustomLink>
            </List>
          </Drawer>
          <main className={classes.content}>
            {/* <div className={classes.toolbar} /> */}
            {props.children}
          </main>
        </div>
      )}
    </>
  );
};

export default Navbar;
