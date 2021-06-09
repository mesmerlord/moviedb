import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(5),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  menuItem: {
    position: "relative",

    marginRight: theme.spacing(2),

    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  menuItems: {
    padding: theme.spacing(0, 5),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const MobileNav = (props) => {
  const classes = useStyles();
  const goToLink = (url) => {
    this.props.history.push(`/${url}`);
  };
  return (
    <>
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Link
              to="/home"
              style={{
                textDecoration: "none",
                color: "white",
                marginLeft: "0.5em",
              }}
            >
              <Typography className={classes.title} variant="h6" noWrap>
                MovieDB
              </Typography>
            </Link>
            <Link
              to="/home"
              style={{
                textDecoration: "none",
                color: "white",
                marginLeft: "3em",
              }}
            >
              <Typography variant="h6" color="inherit">
                Home
              </Typography>{" "}
            </Link>
            <Link
              to="/search"
              style={{
                textDecoration: "none",
                color: "white",
                marginLeft: "1em",
              }}
            >
              <Typography variant="h6" color="inherit">
                Search
              </Typography>{" "}
            </Link>
            <Link
              to="/favorites"
              style={{
                textDecoration: "none",
                color: "white",
                marginLeft: "1em",
              }}
            >
              <Typography variant="h6" color="inherit">
                Favorites
              </Typography>{" "}
            </Link>
          </Toolbar>
          {/* <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              MovieDB
            </Typography>
            <Link to="/home" className={classes.search}>
              <div className={classes.menuItems}>Home</div>
            </Link>
            <div className={classes.search}>
              <div className={classes.menuItems}>Favorite</div>
            </div>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </Toolbar> */}
        </AppBar>
      </div>
    </>
  );
};
export default MobileNav;
