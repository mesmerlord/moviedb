import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Moviecardlist from "./Moviecardlist";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../redux/movies/movies";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

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
  const movies = useSelector((state) => state.movies.movies);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();

  const changePage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (searchQuery != "") {
      setPage(1);
      dispatch(getMovies({ query: searchQuery, page: page }));
    }
  }, [searchQuery]);

  useEffect(() => {
    if ((page, searchQuery)) {
      dispatch({
        type: "CHANGE_PAGE",
        payload: { query: searchQuery, page: page },
      });
    }
  }, [page]);

  const changeQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  const classes = useStyles();
  const returnSearch = (e) => {
    e.preventDefault();
    console.log("searched");
  };
  return (
    <>
      <Navbar>
        <div class={classes.parent}>
          <Paper component="form" className={classes.root}>
            <InputBase
              className={classes.input}
              placeholder="Search Movies"
              inputProps={{ "aria-label": "search for movies" }}
              onChange={changeQuery}
            />
            <IconButton className={classes.iconButton} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
        <Grid container>
          {movies && movies.length > 0 ? (
            <>
              <Moviecardlist movielist={movies} />
              <Grid container alignItems="center" justify="center">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={changePage}
                >
                  Load more
                </Button>
              </Grid>
            </>
          ) : (
            ""
          )}
        </Grid>
      </Navbar>
    </>
  );
};

export default Searchpage;
