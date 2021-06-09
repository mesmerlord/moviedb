import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Helmet from "react-helmet";

import Moviecardlist from "./Moviecardlist";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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

const Favorites = () => {
  const favorites = useSelector((state) => state.movies.favorites);

  const dispatch = useDispatch();

  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Favorites - MovieDB</title>
        <meta name="description" content="Come back to your favorite movies" />
      </Helmet>
      <Navbar>
        <h1>Favorites</h1>

        {favorites && favorites.length > 0 ? (
          <Grid container>
            <Moviecardlist favorites={favorites} />
          </Grid>
        ) : (
          <Typography variant="h5">
            You have no movies favorited. Try choosing some by searching or
            going to the home page
          </Typography>
        )}
      </Navbar>
    </>
  );
};

export default Favorites;
