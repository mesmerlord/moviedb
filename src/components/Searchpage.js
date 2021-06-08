import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  parent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  root: {
    padding: "5px 10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
    margin: "1em 0px 0px 0px",
  },
  input: {
    marginLeft: theme.spacing(5),
    flex: 1,
  },
}));

const Searchpage = () => {
  const classes = useStyles();
  const returnSearch = (e) => {
    e.preventDefault();
    console.log("searched");
  };
  return (
    <>
      <Navbar>
        <div class={classes.parent}>
          <Paper
            component="form"
            className={classes.root}
            onSubmit={returnSearch}
          >
            <InputBase
              className={classes.input}
              placeholder="Search Movies"
              inputProps={{ "aria-label": "search for movies" }}
            />
            <IconButton className={classes.iconButton} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
      </Navbar>
    </>
  );
};

export default Searchpage;
